使用React Native中的踩坑记录
---

### ask 1. Make sure you're running a packager server or have included a .jsbundle file in your application bundle

reply: 
Open a terminal window
cd into YOUR_PROJECT/ios
Remove the build folder with rm -r build
Run react-native run-ios again
Alternatively, you could open Finder, navigate to YOUR_PROJECT/ios and delete the build folder. Then run react-native run-ios again.

I’m not sure what causes this (that bothers me), but but at least I’ve found something to get me going again.

### ask 2. undefined is not an object(evaluating 'cameramanager.aspect')

reply: 

Steps to reproduce
react-native init <projectname> --version=0.53.0
and/or
react-native init <projectname> --version=0.52.2
and/or
react-native init <projectname> --version=0.51.0
cd <projectname>
yarn add react-native-camera
cd ios
pod init
cd ..
react-native link react-native-camera
Build success, but runtime error with this issue.

### ask 3. native module cannot be null nativeeventemitter


### ask 4. CFBundleIdentifier not exist

reply:
project directory run command: 
rm -rf ios/build
react-native start --reset-cache
react-native upgrade
react-native run-ios
