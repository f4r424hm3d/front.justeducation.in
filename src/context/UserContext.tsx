import type React from 'react';
import { createContext, useContext, useState, useEffect } from 'react';

export interface UserData {
  fullName: string;
  email: string;
  countryCode: string;
  phone: string;
  password?: string; // Optional to avoid including in all uses, but needed for auth
}

interface UserContextType {
  user: UserData | null;
  setUser: (user: UserData | null) => void;
  signIn: (email: string, password: string) => boolean;
  getUsers: () => UserData[];
}

const UserContext = createContext<UserContextType>({ 
  user: null, 
  setUser: () => {}, 
  signIn: () => false,
  getUsers: () => []
});

export const useUser = () => useContext(UserContext);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUserState] = useState<UserData | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('currentUser');
    if (stored) setUserState(JSON.parse(stored));
  }, []);

  // Store the user in localStorage without the password for security
  const setUser = (user: UserData | null) => {
    setUserState(user);
    
    if (user) {
      // Store current user (without password) for session
      const { password, ...safeUser } = user;
      localStorage.setItem('currentUser', JSON.stringify(safeUser));
      
      // Also add to users list if not exists
      const users = getUsers();
      if (!users.some(u => u.email === user.email)) {
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
      }
    } else {
      localStorage.removeItem('currentUser');
    }
  };

  // Get all registered users
  const getUsers = (): UserData[] => {
    const stored = localStorage.getItem('users');
    return stored ? JSON.parse(stored) : [];
  };

  // Sign in function that checks email and password
  const signIn = (email: string, password: string): boolean => {
    const users = getUsers();
    const foundUser = users.find(u => u.email === email && u.password === password);
    
    if (foundUser) {
      // Set current user without password
      const { password, ...safeUser } = foundUser;
      setUserState(safeUser);
      localStorage.setItem('currentUser', JSON.stringify(safeUser));
      return true;
    }
    
    return false;
  };

  return (
    <UserContext.Provider value={{ user, setUser, signIn, getUsers }}>
      {children}
    </UserContext.Provider>
  );
}; 