'use client';
import { createContext, useContext, useState, ReactNode } from 'react';
import { Users } from "@/types/users"

interface UserContextType {
  user: Users | null;
  setUser: (user: Users | null) => void;
}

const UserContext = createContext<UserContextType | null>(null);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<Users | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

// Custom hook — throws a clear error if used outside the provider
export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error("useUser must be used inside <UserProvider>");
  return ctx;
}