import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchCurrentUser, loginUser, registerUser, setAuthToken } from "../api/auth";

const AuthContext = createContext({
  user: null,
  token: null,
  loading: true,
  register: async () => {},
  login: async () => {},
  logout: () => {},
});

const STORAGE_KEY = "zerodhaAuth";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  const persistSession = (session) => {
    setUser(session.user);
    setToken(session.token);
    setAuthToken(session.token);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
  };

  const clearSession = () => {
    setUser(null);
    setToken(null);
    setAuthToken(null);
    window.localStorage.removeItem(STORAGE_KEY);
  };

  const handleRegister = async (values) => {
    const session = await registerUser(values);
    persistSession(session);
    return session;
  };

  const handleLogin = async (values) => {
    const session = await loginUser(values);
    persistSession(session);
    return session;
  };

  const handleLogout = () => {
    clearSession();
  };

  useEffect(() => {
    const restoreSession = async () => {
      const savedSession = window.localStorage.getItem(STORAGE_KEY);
      if (!savedSession) {
        setLoading(false);
        return;
      }

      try {
        const parsed = JSON.parse(savedSession);
        if (!parsed?.token) {
          clearSession();
          setLoading(false);
          return;
        }

        setAuthToken(parsed.token);
        setToken(parsed.token);

        try {
          const currentUser = await fetchCurrentUser();
          setUser(currentUser);
          window.localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify({ token: parsed.token, user: currentUser })
          );
        } catch (err) {
          console.error("Session validation failed", err);
          clearSession();
        }
      } catch (err) {
        console.error("Failed to parse saved auth session", err);
        clearSession();
      }

      setLoading(false);
    };

    restoreSession();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        register: handleRegister,
        login: handleLogin,
        logout: handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
