# E2E Testing <!-- omit in TOC -->

- [Running tests](#running-tests)
- [Platforms](#platforms)
  - [Chrome](#chrome)
  - [Firefox](#firefox)
  - [Safari](#safari)
  - [Android](#android)
    - [Emulated](#emulated)
    - [Real Device](#real-device)
  - [iOS](#ios)
- [Scanning Feature Tests](#scanning-feature-tests)
  - [v4l2loopback (Fake Webcam)](#v4l2loopback-fake-webcam)
  - [Video file as fake webcam](#video-file-as-fake-webcam)
  - [Run only scan feature test inside VM against dev server on host machine](#run-only-scan-feature-test-inside-vm-against-dev-server-on-host-machine)

## Running tests

```bash
cd pytest

# Run all tests on local dev server
pytest

# Run specific tests
# pytest <path_to_test_file> -k <test_name>
pytest test/test_discover_screen.py -k 'test_scan_feature'

# Run tests on specific platform(s)
# pytest --platform=[platform(s)]
pytest --platform=firefox,chrome,safari,ios,android

# Run tests against url other than localhost
# (e.g. when testing inside VM against server outside VM)
pytest --url="https://192.168.178.87:3000"
```

## Platforms

### Chrome

Chrome tests can be run locally on any operating system. Simply download and install the chromedriver and selenium will autodiscover the driver.

### Firefox

Firefox tests can be run locally on any operating system. Simply download and install the geckodriver and selenium will autodiscover the driver.

### Safari

Safari tests can only be run on MacOS. The safari driver comes pre-installed so there should be no further configuration necessary. Currently, Safari does not support using fake devices for media streams, hence we cannot test for everything.

### Android

#### Emulated

Android tests can be run on any operating system. First download and install Android Studio and the latest Android SDK. You will also need to download selendroid

#### Real Device

The Android tests can also be run on a real Android device, once it's plugged in to your development machine via USB.

### iOS

iOS tests can only be run on MacOS. Download and Install Xcode to enable the iOS emulator. The emulator has the limitation that

## Scanning Feature Tests

The e2e tests for the scanning feature have to be run inside a virtual machine, because the webcam needs to be faked. If you haven't set up the fake webcam, follow these instructions. In the future we will provide a VM image you can use out of the box.

### v4l2loopback (Fake Webcam)

```bash
# 1. Install v4l2loopback kernel module and v4l-utils from apt
sudo apt install v4l2loopback-dkms v4l-utils

# 2. Enable the "fake webcam", via v4l2loopback kernel module
sudo modprobe v4l2loopback devices=1 card_label="scan-test-webcam" exclusive_caps=1
```

### Video file as fake webcam

```bash
# Install ffmpeg
sudo apt-get install ffmpeg
# Link video file (on loop) to the "fake webcam"
ffmpeg -stream_loop -1 -re -i ./test_scan_video.mp4 -vcodec rawvideo -pix_fmt yuv420p -threads 0 -f v4l2 /dev/video2
```

### Run only scan feature test inside VM against dev server on host machine

```bash
pytest test/test_discover_screen.py -k 'test_scan_feature' --platform=firefox --url="https://192.168.178.87:3000"
```

Adapted from:
https://stackoverflow.com/questions/31859459/how-can-i-pass-a-fake-media-stream-to-firefox-from-command-line
