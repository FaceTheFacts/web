#!/bin/bash

printf "Setting up End 2 End Tests\n"

# Enable setting of aliases
shopt -s expand_aliases

# Platforms for testing
chrome=true
firefox=true
safari=false
ios=false
android=true

export PORT=7100

if ! command -v appium &> /dev/null; then
    printf "Appium is not installed but is needed for iOS and Android tests.\nDo you want to install? y|n"
    read install
    if [ $install == 'y' ]; then
        printf "Installing Appium...\n"
        npm intall -g appium
    elif [ $install == 'n' ]; then
        printf "Not installing Appium, skipping mobile tests\n"
        android=false
        ios=false
    else
        printf "Please respond with y or n next time, aborting\n"
    fi
else
    printf "Appium installation found with version $(appium -v)\n"
fi

if [ $(uname) == 'Darwin' ]; then
    printf 'Mac\n'
    alias terminal="open -a Terminal"
    alias package_manager="brew"
    chromium="chromium"
    # only enable safari on mac
    safari=true
    # only enable ios on macs with installed appium
    if [ $(which appium) != "" ]; then
        ios=true
    fi
elif [ $(uname) == 'Linux']; then
    printf 'Linux\n'
    alias terminal=""
    alias package_manager="apt-get update && apt-get"
    chromium="chromium-browser"
    # Elevate Privileges to install dependencies
    if [ $EUID != 0 ]; then
        sudo "$0" "$@"
        exit $?
    fi
else
    printf 'Automated test setup not supported for your OS\n'
    printf 'See https://github.com/Face-the-Facts/mobile-app/tree/develop/pytest for more information\n'
fi

printf "Checking for browser drivers\n"

# make these installs optional? However, they should all be tested

if ! command -v geckodriver &> /dev/null; then
    package_manager install geckodriver
fi

# On mac firefox can be installed without the command being recognised
#if ! command -v firefox &> /dev/null; then
#    package_manager install firefox
#fi

if ! command -v chromedriver &> /dev/null; then
    package_manager install chromedriver
fi

if ! command -v $chromium &> /dev/null; then
    package_manager install $chromium
fi

printf "Starting Appium Server\n"
terminal ./appium.sh

printf "Starting Development Server\n"
terminal ./ionic.sh

sleep 10

printf "Starting Tests\n"

local_ip=$(ifconfig | grep -Eo 'inet (addr:)?([0-9]*\.){3}[0-9]*' | grep -Eo '([0-9]*\.){3}[0-9]*' | grep -v '127.0.0.1')

printf "http://${local_ip}:${PORT}\n"

pytest --url "http://${local_ip}:7100"

printf "Running cleanup\n"

kill -9 $(ps x | grep appium | awk '{print $1}')
kill -9 $(ps x | grep ionic | awk '{print $1}')