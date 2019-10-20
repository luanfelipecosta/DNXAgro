# DNX AGRO

## Installing

`npm i` or `yarn` to install Node dependencies

Install iOS Dependencies, guarantee that you have CocoaPods installed in your computer
`cd ios && pod install`

## Running

1. Start metro bundler packager
   `yarn start`

2. In other terminal window, start platform.
   iOS
   `yarn start:ios`

## Running on Device

### Android

Connect your device in USB, make sure developer mode and DebugUSB mode is on.

To list devices
`adb devices`

And then
`yarn start:android`

### iOS

open project in XCode
`open ios/DNXAgro.xcworkspace`

Select your device in device list and press play
