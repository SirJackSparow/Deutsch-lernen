# Modern React Native Architecture with Redux

This plan outlines the steps to create a simple, yet robust, React Native project using Expo and Redux Toolkit. The goal is to provide a clear and maintainable folder structure that is easy to learn.

## Proposed Changes

### Project Initialization
- Initialize a new Expo project using `npx -y create-expo-app@latest ./ --template blank-typescript`.
- Install necessary dependencies: `@reduxjs/toolkit`, `react-redux`, and `lucide-react-native` for icons.

### Folder Structure
- Create a `src/` directory to contain all the source code.
- Inside `src/`, create:
  - `store/`: For Redux store configuration and slices.
  - `components/`: For reusable UI components.
  - `features/`: For feature-specific logic and screens.
  - `constants/`: For app-wide constants (colors, layouts, etc.).

### Redux Configuration
- Create a `store.ts` file in `src/store/` to configure the Redux store.
- Create a `counterSlice.ts` file in `src/store/slices/` to manage the counter state.
- Wrap the root component (App.tsx) with the Redux `Provider`.

### Feature Implementation
- Create a `Counter` component in `src/features/counter/Counter.tsx`.
- Update `App.tsx` to use the `Counter` component and the Redux `Provider`.

## Verification Plan

### Automated Tests
- Run `npm run test` (if applicable) to ensure the project initializes correctly.

### Manual Verification
- Start the Expo dev server using `npx expo start`.
- Verify the counter functionality (increment, decrement) in a simulator or on a physical device using Expo Go.
- Inspect the folder structure to ensure it follows the "modern architecture" guidelines.
