import React, { createContext, useContext, useState, useEffect } from "react";
import { User } from "../types";
import { getCurrentUser } from "../services/api";
import toast from "react-hot-toast";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  setUser: (user: User | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  //   useEffect(() => {
  //     const initAuth = async () => {
  //       try {
  //         const userData = await getCurrentUser();
  //         setUser(userData);
  //       } catch (error) {
  //         console.error("Auth initialization error:", error);
  //       } finally {
  //         setLoading(false);
  //       }
  //     };

  //     initAuth();
  //   }, []);

  return (
    <AuthContext.Provider value={{ user, loading, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
