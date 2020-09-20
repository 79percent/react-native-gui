
# react-native-gui

## Getting started

`$ npm install react-native-gui --save`

### Mostly automatic installation

`$ react-native link react-native-gui`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-gui` and add `RNGui.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNGui.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNGuiPackage;` to the imports at the top of the file
  - Add `new RNGuiPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-gui'
  	project(':react-native-gui').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-gui/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-gui')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNGui.sln` in `node_modules/react-native-gui/windows/RNGui.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Gui.RNGui;` to the usings at the top of the file
  - Add `new RNGuiPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNGui from 'react-native-gui';

// TODO: What to do with the module?
RNGui;
```
  