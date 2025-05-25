# React Native Samples Project

## Introduction

This project provides a collection of React Native components and examples to help developers learn and explore React Native development. It aims to showcase various features and functionalities available in React Native, making it easier for users to understand and implement them in their own projects.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js:** (LTS version recommended) - [Download Node.js](https://nodejs.org/)
- **npm** (comes with Node.js) or **Yarn:** (Optional, but preferred by some) - [Install Yarn](https://classic.yarnpkg.com/en/docs/install)
- **React Native CLI:** Install globally using npm or yarn.
  ```bash
  npm install -g react-native-cli
  # or
  yarn global add react-native-cli
  ```
- **Android Development Environment:**
    - **Android Studio:** Required for building and running Android apps. - [Download Android Studio](https://developer.android.com/studio)
    - Make sure you have the Android SDK, an Android Virtual Device (AVD), or a physical Android device configured.
- **iOS Development Environment (macOS only):**
    - **Xcode:** Required for building and running iOS apps. - [Download Xcode from the Mac App Store](https://apps.apple.com/us/app/xcode/id497799835?mt=12)
    - **CocoaPods:** (if your project uses it, which many React Native projects do)
      ```bash
      sudo gem install cocoapods
      ```

For detailed setup instructions, please refer to the official React Native documentation: [React Native Environment Setup](https://reactnative.dev/docs/environment-setup)

## Installation

1.  **Clone the repository (if you haven't already):**
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2.  **Install project dependencies:**
    Navigate to the project root directory and run:
    ```bash
    npm install
    ```
    or, if you prefer Yarn:
    ```bash
    yarn install
    ```
    For iOS, after installing npm/yarn packages, you might also need to install Pods:
    ```bash
    cd ios && pod install && cd ..
    ```

## Running the Project

### Android

1.  **Ensure an Android emulator is running or a physical device is connected** and recognized by ADB (`adb devices`).
2.  **Start the Metro Bundler:**
    Open a terminal in the project root and run:
    ```bash
    npx react-native start
    ```
    Keep this terminal open.
3.  **Run the Android app:**
    Open another terminal in the project root and run:
    ```bash
    npx react-native run-android
    ```

### iOS (macOS only)

1.  **Ensure an iOS simulator is running or a physical device is connected.**
2.  **Start the Metro Bundler:**
    Open a terminal in the project root and run:
    ```bash
    npx react-native start
    ```
    Keep this terminal open.
3.  **Run the iOS app:**
    Open another terminal in the project root and run:
    ```bash
    npx react-native run-ios
    ```
    This command might take some time for the first build. If you want to run on a specific simulator, you can use:
    ```bash
    npx react-native run-ios --simulator="iPhone 14 Pro"
    ```
    (Replace "iPhone 14 Pro" with your desired simulator name).

## Adding New Components/Samples

We encourage contributions and the addition of new samples! Here's a general guideline:

1.  **Create your component file:**
    It's good practice to organize samples. For example, you might create a new JavaScript or TypeScript file (e.g., `MyNewSample.js` or `MyNewSample.tsx`) within a designated directory like `src/samples/` or `src/components/`.

    ```javascript
    // src/samples/MyNewSample.js
    import React from 'react';
    import { View, Text, StyleSheet } from 'react-native';

    const MyNewSample = () => {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>This is My New Sample!</Text>
        </View>
      );
    };

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      },
      text: {
        fontSize: 18,
        fontWeight: 'bold',
      },
    });

    export default MyNewSample;
    ```

2.  **Import and use the new component:**
    You'll typically import your new sample into a main navigation file (e.g., `App.js`, or a screen within your navigation setup) and add it to your app's UI, perhaps as a new screen or part of a list of samples.

    ```javascript
    // Example in App.js or a relevant screen
    import React from 'react';
    // ... other imports
    import MyNewSample from './src/samples/MyNewSample'; // Adjust path as needed

    const App = () => {
      // ...
      return (
        // Your existing app structure
        // You might add MyNewSample to a navigator or display it directly
        <MyNewSample />
      );
    };

    export default App;
    ```

3.  **Update Navigation (if applicable):**
    If your project uses a navigation library (like React Navigation), you'll need to add a route or entry for your new sample so users can access it.

4.  **Consider adding a brief description:**
    If there's a central place where samples are listed (e.g., in this README or another documentation file), add a short note about your new sample and what it demonstrates.

## Available Scripts

The following scripts are commonly used in React Native projects and might be configured for this one:

-   **`npm start` or `yarn start`**:
    Starts the Metro bundler. This is usually run in a separate terminal window while developing.
    ```bash
    npm start
    # or
    yarn start
    ```

-   **`npm run android` or `yarn android`**:
    Builds and runs the Android application on a connected emulator or device. (Assumes `react-native run-android` is aliased in `package.json`)
    ```bash
    npm run android
    # or
    yarn android
    ```

-   **`npm run ios` or `yarn ios`**:
    Builds and runs the iOS application on a simulator or connected device. (Assumes `react-native run-ios` is aliased in `package.json`)
    ```bash
    npm run ios
    # or
    yarn ios
    ```

-   **`npm run lint` or `yarn lint`**:
    (If ESLint is configured) Runs the linter to check for code style issues and potential errors.
    ```bash
    npm run lint
    # or
    yarn lint
    ```

-   **`npm test` or `yarn test`**:
    (If Jest or another testing framework is configured) Runs the unit tests for the project.
    ```bash
    npm test
    # or
    yarn test
    ```

Please check the `scripts` section in the `package.json` file for the exact scripts available and their definitions.

---

Happy Coding! We hope this project helps you in your React Native journey.
If you have suggestions or find issues, please open an issue or submit a pull request.
