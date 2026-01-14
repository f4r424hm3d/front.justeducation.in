import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserData {
  fullName: string;
  email: string;
  countryCode: string;
  phone: string;
  password?: string;
}

interface AuthState {
  user: UserData | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

// Load user from localStorage on initialization
const loadUserFromStorage = (): UserData | null => {
  try {
    const stored = localStorage.getItem('currentUser');
    return stored ? JSON.parse(stored) : null;
  } catch (error) {
    console.error('Error loading user from storage:', error);
    return null;
  }
};

const initialUser = loadUserFromStorage();

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    ...initialState,
    user: initialUser,
    isAuthenticated: !!initialUser,
  },
  reducers: {
    setUser: (state, action: PayloadAction<UserData | null>) => {
      const userData = action.payload;
      state.user = userData;
      state.isAuthenticated = !!userData;
      state.error = null;

      if (userData) {
        // Store current user (without password) for session
        const { password, ...safeUser } = userData;
        localStorage.setItem('currentUser', JSON.stringify(safeUser));

        // Also add to users list if not exists
        const users = getUsersFromStorage();
        if (!users.some((u) => u.email === userData.email)) {
          users.push(userData);
          localStorage.setItem('users', JSON.stringify(users));
        }
      } else {
        localStorage.removeItem('currentUser');
      }
    },
    signIn: (state, action: PayloadAction<{ email: string; password: string }>) => {
      state.isLoading = true;
      state.error = null;

      const users = getUsersFromStorage();
      const foundUser = users.find(
        (u) => u.email === action.payload.email && u.password === action.payload.password
      );

      if (foundUser) {
        // Set current user without password
        const { password, ...safeUser } = foundUser;
        state.user = safeUser;
        state.isAuthenticated = true;
        localStorage.setItem('currentUser', JSON.stringify(safeUser));
      } else {
        state.error = 'Invalid email or password';
        state.isAuthenticated = false;
      }

      state.isLoading = false;
    },
    signOut: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
      localStorage.removeItem('currentUser');
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

// Helper function to get users from storage
const getUsersFromStorage = (): UserData[] => {
  try {
    const stored = localStorage.getItem('users');
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Error loading users from storage:', error);
    return [];
  }
};

export const { setUser, signIn, signOut, setError, clearError } = authSlice.actions;

// Selectors
export const selectUser = (state: { auth: AuthState }) => state.auth.user;
export const selectIsAuthenticated = (state: { auth: AuthState }) => state.auth.isAuthenticated;
export const selectAuthError = (state: { auth: AuthState }) => state.auth.error;
export const selectAuthLoading = (state: { auth: AuthState }) => state.auth.isLoading;

// Helper function to get all users (for compatibility with old context)
export const getUsers = (): UserData[] => {
  return getUsersFromStorage();
};

export default authSlice.reducer;

