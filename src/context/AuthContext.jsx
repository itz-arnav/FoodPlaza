import React, { createContext, useState, useEffect, useContext } from 'react';
import AuthService from '../services/AuthService';
const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (username, password) => {
    const result = await AuthService.login(username, password);
    if (result) {
      setIsAuthenticated(true);
    }else{
      throw new Error('Login failed');
    }
  };

  const signup = async (username, email, password) => {
    const result = await AuthService.signup(username, email, password);
    if (result) {
      setIsAuthenticated(true);
    }else{
      throw new Error('Login failed');
    }
  }

  const logout = () => {
    AuthService.logout();
    setIsAuthenticated(false);
  };

  const value = {
    isAuthenticated,
    login,
    signup,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
