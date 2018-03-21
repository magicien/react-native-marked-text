# react-native-marked-text
Test app for react-native TextInput bugfix.

This is a test app for [the pull request for react-native](https://github.com/facebook/react-native/pull/18456).

react-native 0.54.2 has a bug which marked text doesn't work.

You can check if the pull request fixes the bug.

## Issues

[Controlled TextInput broken for Chinese (and other languages) in v0.54 on iOS (#18403)](https://github.com/facebook/react-native/issues/18403)

## Pull Request

[[iOS][TextInput] Fix controlled TextInput for Chinese (and other languages) (#18456)](https://github.com/facebook/react-native/pull/18456)

## Build and Run

### Build with Bugfix

```
git clone https://github.com/magicien/react-native-marked-text.git
cd react-native-marked-text
yarn install
react-native run-ios
```

If `react-native run-ios` command ends up with error, compile with Xcode.

### Build with react 0.54.2 (which has the bug)

```
git clone -b test/react-0.54.2 https://github.com/magicien/react-native-marked-text.git
cd react-native-marked-text
yarn install
react-native run-ios
```

If `react-native run-ios` command ends up with error, compile with Xcode.

## Test

1. Tap TextInput field
2. Select Chinese keyboard (or any keyboard which uses multistage text input)
3. Tap some keys
- The typed word should be marked
- It should show candidate words corresponding to the marked text

## Result

### react 0.54.2

- The typed word is not marked. (confirmed as soon as typed)

![ScreenShot_0.54.2](https://raw.githubusercontent.com/magicien/react-native-marked-text/master/screenshot/before.gif)

### with Bugfix

- The typed word is marked

![ScreenShot_Bugfix](https://raw.githubusercontent.com/magicien/react-native-marked-text/master/screenshot/after.gif)
