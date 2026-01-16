// Compatibility hook for migrating from UserContext to Redux
import { useAppDispatch, useAppSelector } from '../store/hooks';
import {
  setUser,
  signIn as signInAction,
  signOut,
  selectUser,
  selectIsAuthenticated,
  selectAuthError,
  selectAuthLoading,
} from '../store/slices/authSlice';
import type { UserData } from '../store/slices/authSlice';

// Helper function to get users (for compatibility)
const getUsers = (): UserData[] => {
  try {
    const stored = localStorage.getItem('users');
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Error loading users from storage:', error);
    return [];
  }
};

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const error = useAppSelector(selectAuthError);
  const isLoading = useAppSelector(selectAuthLoading);

  const setUserAction = (userData: UserData | null) => {
    dispatch(setUser(userData));
  };

  const signInActionWrapper = (email: string, password: string): boolean => {
    dispatch(signInAction({ email, password }));
    // Since Redux Toolkit uses Immer, state updates are synchronous
    // Check if user exists in storage to determine success
    const users = getUsers();
    const foundUser = users.find((u) => u.email === email && u.password === password);
    return !!foundUser;
  };

  const signOutAction = () => {
    dispatch(signOut());
  };

  return {
    user,
    setUser: setUserAction,
    signIn: signInActionWrapper,
    signOut: signOutAction,
    isAuthenticated,
    error,
    isLoading,
    getUsers,
  };
};

