# Hello Metal - React Native Expo App

A simple, clean React Native app built with Expo that demonstrates navigation, device vibration, and API integration.

## 🎯 Features

- **Hello Metal Button** - Vibrates the device and displays an alert message
- **DOG Button** - Navigates to a dedicated screen that fetches and displays random dog images from the Dog CEO API
- **Smooth Navigation** - Uses React Navigation for seamless screen transitions
- **Loading States** - Activity indicator while fetching images
- **Back Navigation** - Easy return to home screen
- **Clean UI** - Minimal, functional design with proper styling

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm 
- Expo Go app (for development) or Android device/emulator

### Installation

```bash
# Clone the repository
git clone git@github.com:App-run/hello-metal.git
cd hello-metal

# Install dependencies
npm install

# Start the development server
npx expo start
```

### Running the App

**Development Mode:**
```bash
# Start Expo development server
npx expo start

# Press 'a' to open in Android emulator
# Scan QR code with Expo Go app on your phone
```

**Android APK:**
Scan the QR code below to download the pre-built APK, or follow the build section.

## 📱 Android Build

### Option 1: EAS Build (Recommended)
```bash
# Install EAS CLI
npm install -g eas-cli

# Login to your Expo account
eas login

# Build for Android
eas build --platform android
```

### Option 2: Local Build
```bash
npx expo run:android
```

## 📲 Download APK

**Scan this QR code to download the Android APK:**
![QR Code](./assets/images/QR.png)


Or visit: `https://expo.dev/accounts/kalemzane/projects/hello-metal-app/builds/e143baf8-058b-4a4e-9e66-5cb7a7457c09`

## 📹 Screen Recording

Watch the complete development process:

**Screen Recording Link:** `https://drive.google.com/file/d/1erUiaqDHYx7bDHpUJ6BGOFG8TlmJZM43/view?usp=sharing`

The recording includes:
- Development setup and folder structure
- Implementation of Hello Metal button (vibration + alert)
- Dog screen setup and API integration
- Building and deploying the APK

## 📁 Project Structure

```
hello-metal/
├── app/
│   ├── _layout.tsx           # Root navigation layout
│   ├── index.tsx             # Home screen (Hello Metal)
│   └── view-dog.tsx        # Dog image screen
├── hooks/
│   └── use-color-scheme.ts   # Color scheme hook
├── app.json                  # Expo configuration
├── package.json
└── README.md
```

## 🛠️ Tech Stack

- **React Native** - Cross-platform mobile framework
- **Expo SDK 50+** - Development platform
- **Expo Router** - Navigation and routing
- **React Navigation** - Screen management
- **Dog CEO API** - Random dog image source

## ✨ Key Implementation Details

### Home Screen
- Two prominent buttons: "Hello Metal" and "DOG"
- Hello Metal button triggers device vibration and alert
- DOG button navigates to the dog screen
- Clean, centered layout with proper spacing

### Dog Screen
- Fetches random dog images from `https://dog.ceo/api/breeds/image/random`
- Displays image with rounded corners
- Loading indicator while fetching
- Back button to return home
- Automatically fetches a new image each time the screen is visited

### Navigation
- Uses Expo Router for file-based routing
- Stack navigation for smooth transitions
- Proper back button handling

## 📦 Dependencies

```json
{
  "expo": "^50.0.0",
  "expo-router": "^3.0.0",
  "react-native": "^0.73.0",
  "@react-navigation/native": "^6.1.0",
  "@react-navigation/bottom-tabs": "^6.5.0",
  "react-native-reanimated": "^3.0.0"
}
```

## 🎨 Bonus Features Implemented

- ✅ Loading indicator during image fetch
- ✅ Smooth navigation with back button
- ✅ Error handling for API calls
- ✅ Responsive image sizing
- ✅ Professional styling with StyleSheet


## 🐛 Troubleshooting

**App won't load:**
- Ensure all dependencies are installed: `npm install`
- Clear cache: `npx expo start --clear`
- Check internet connection for API calls

**Vibration not working:**
- Requires physical device or emulator with vibration support
- Check device vibration is enabled in settings

**Dog images not loading:**
- Verify internet connection
- Check API endpoint: `https://dog.ceo/api/breeds/image/random`
