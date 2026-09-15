import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { login as loginRequest } from "../api";

const AuthContext = createContext();

const AUTH_STORAGE_KEY = "@edstore_auth";

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadStoredAuth();
  }, []);

  const loadStoredAuth = async () => {
    try {
      const storedAuth = await AsyncStorage.getItem(AUTH_STORAGE_KEY);

      if (storedAuth) {
        const parsed = JSON.parse(storedAuth);
        setToken(parsed.token);
        setUsername(parsed.username);
      }
    } catch (err) {
      console.error("Error loading auth session:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (usernameInput, password) => {
    setError(null);
    setIsSubmitting(true);

    try {
      const response = await loginRequest(usernameInput, password);
      const newToken = response?.token;

      if (!newToken) {
        throw new Error("No token returned by the server");
      }

      setToken(newToken);
      setUsername(usernameInput);

      await AsyncStorage.setItem(
        AUTH_STORAGE_KEY,
        JSON.stringify({ token: newToken, username: usernameInput }),
      );

      return true;
    } catch (err) {
      setError(err.message || "Usuario o contraseña incorrectos");
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  const logout = async () => {
    //console.log("LOGOUT LLAMADO"); 
    setToken(null);
    setUsername(null);
    setError(null);

    try {
      await AsyncStorage.removeItem(AUTH_STORAGE_KEY);
    } catch (err) {
      console.error("Error clearing auth session:", err);
    }
  };

  const isAuthenticated = !!token;

  return (
    <AuthContext.Provider
      value={{
        token,
        username,
        isAuthenticated,
        isLoading, 
        isSubmitting, 
        error,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};