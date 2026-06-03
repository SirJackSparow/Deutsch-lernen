# Redux + REST API Tutorial

This guide explains how to handle asynchronous data fetching from a REST API using **Redux Toolkit**.

---

### 1. The Logic: The Async Slice (`src/store/slices/userSlice.ts`)

When dealing with APIs, we use **`createAsyncThunk`**. This creates an "Async Action" that handles the different states of a network request:
- **pending**: The request has started (show loading spinner).
- **fulfilled**: The request succeeded (save the data).
- **rejected**: The request failed (show error message).

```typescript
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// 1. Define the Async Thunk (The API request)
export const fetchUserData = createAsyncThunk(
  'user/fetchById',
  async (userId: string) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (!response.ok) throw new Error('Failed to fetch user');
    return await response.json();
  }
);

// 2. Define the Slice
const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: null,
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null as string | null,
  },
  reducers: {
    // Regular reducers go here if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default userSlice.reducer;
```

---

### 2. The Brain: Registering in the Store (`src/store/store.ts`)

You must add your new slice to the central store so the application can access it.

```typescript
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import userReducer from './slices/userSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer, // Registering the async user slice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

---

### 3. The UI: Using Async Data in Components (`src/screens/UserProfile.tsx`)

In your component, you use `useEffect` to trigger the API call when the screen loads.

```tsx
import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserData } from '../store/slices/userSlice';
import { RootState, AppDispatch } from '../store/store';

const UserProfile = ({ userId }: { userId: string }) => {
  // Use AppDispatch for proper typing of async actions
  const dispatch = useDispatch<AppDispatch>();
  
  // Select the specific data from the store
  const { data, status, error } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    dispatch(fetchUserData(userId));
  }, [dispatch, userId]);

  // Handle different UI states
  if (status === 'loading') {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (status === 'failed') {
    return <Text style={styles.errorText}>Error: {error}</Text>;
  }

  return (
    <View style={styles.container}>
      {data ? (
        <>
          <Text style={styles.title}>User Details</Text>
          <Text>Name: {data.name}</Text>
          <Text>Email: {data.email}</Text>
        </>
      ) : (
        <Text>No user data found.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  errorText: { color: 'red', fontWeight: 'bold' },
});

export default UserProfile;
```

---

### Workflow Summary

1.  **Define Thunk**: Create the API call function using `createAsyncThunk`.
2.  **Create Slice**: Define the state and handle thunk actions in `extraReducers`.
3.  **Register Store**: Add the reducer to `store.ts`.
4.  **Dispatch in UI**: Use `useDispatch` to trigger the call and `useSelector` to show the results.

> [!TIP]
> **Why `extraReducers`?** 
> Regular `reducers` are for simple actions inside the slice. `extraReducers` are for actions that happen *outside* the slice (like the completion of a network request).
