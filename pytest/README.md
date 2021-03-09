# E2E Testing <!-- omit in TOC -->

- [Platforms](#platforms)
  - [Chrome](#chrome)
  - [Firefox](#firefox)
  - [Safari](#safari)
  - [Android](#android)
    - [Emulated](#emulated)
    - [Real Device](#real-device)
  - [iOS](#ios)

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