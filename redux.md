# Redux State Management Guide

This project uses **Redux Toolkit (RTK)** for state management. This is the modern, recommended way to handle global state in React Native applications.

## 核心概念 (Core Concepts)

### 1. The Brain: The Store (`src/store/store.ts`)
The **Store** is the central "database" for your application's global state. All different pieces of state (slices) are registered here.

```typescript
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer, // Adding the counter logic to the global store
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

---

### 2. The Logic: The Slice (`src/store/slices/counterSlice.ts`)
A **Slice** combines the initial state and the logic (reducers) for a specific feature.

- **Initial State**: The default values when the app starts.
- **Reducers**: Functions that define how the state changes in response to actions.

```typescript
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1; },
    decrement: (state) => { state.value -= 1; },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
```

---

### 3. The Connection: The Provider (`App.tsx`)
To make the store available to the entire app, we wrap the main component with the `<Provider>`.

```tsx
import { Provider } from 'react-redux';
import { store } from './src/store/store';

export default function App() {
  return (
    <Provider store={store}> 
       <AppNavigator />
    </Provider>
  );
}
```

---

### 4. Using Redux in UI (`src/features/counter/Counter.tsx`)
We use two main hooks from `react-redux` to interact with the store:

- **`useSelector`**: To read data from the store.
- **`useDispatch`**: To send actions (trigger changes) to the store.

```tsx
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { increment, decrement } from '../../store/slices/counterSlice';

const Counter = () => {
  // Read state
  const count = useSelector((state: RootState) => state.counter.value);
  
  // Get dispatch function
  const dispatch = useDispatch();

  return (
    <View>
      <Text>{count}</Text>
      <Button onPress={() => dispatch(increment())} title="+" />
      <Button onPress={() => dispatch(decrement())} title="-" />
    </View>
  );
};
```

---

# Redux + REST API Implementation

When you need to fetch data from a server, the workflow starts over but with **Async Thunks**.

### 1. The Logic: The Async Slice (`src/store/slices/userSlice.ts`)
Instead of simple `reducers`, we use **`createAsyncThunk`** for the API call and **`extraReducers`** to handle the different states: **pending** (loading), **fulfilled** (success), and **rejected** (error).

```typescript
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// 1. Define the async thunk (The API call)
export const fetchUserData = createAsyncThunk(
  'user/fetchById',
  async (userId: string) => {
    const response = await fetch(`https://api.example.com/users/${userId}`);
    return await response.json();
  }
);

// 2. The Slice (Handling the API states)
const userSlice = createSlice({
  name: 'user',
  initialState: { data: null, status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
```

---

### 2. The Brain: Registering the Slice (`src/store/store.ts`)
Any new async slice must be registered in the central **Store**, just like the counter.

```typescript
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import userReducer from './slices/userSlice'; // Import the new reducer

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer, // Add it here
  },
});
```

---

### 3. Using in UI: Dispatching Thunks (`src/features/user/UserProfile.tsx`)
In your component, you dispatch the thunk inside a `useEffect` and read the `status` to show loading indicators.

```tsx
import React, { useEffect } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserData } from '../../store/slices/userSlice';
import { RootState } from '../../store/store';

const UserProfile = ({ userId }: { userId: string }) => {
  const dispatch = useDispatch<any>(); 
  const { data, status, error } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    dispatch(fetchUserData(userId));
  }, [dispatch, userId]);

  if (status === 'loading') return <ActivityIndicator />;
  if (status === 'failed') return <Text>Error: {error}</Text>;
  
  return (
    <View>
      <Text>User: {data?.name}</Text>
    </View>
  );
};
```

---

## Workflow Summary

1.  **State** is stored in the **Store**.
2.  **Components** read state via **`useSelector`**.
3.  **Components** dispatch **Actions** (or **Async Thunks**) via **`useDispatch`**.
4.  **Reducers** (in the slice) or **extraReducers** handle the actions and update the state.
5.  **UI** automatically updates to reflect the new state.

> [!TIP]
> Always use `createAsyncThunk` for any logic that involves `await` or external APIs. For even more advanced use cases, check out **RTK Query**.
