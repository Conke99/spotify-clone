"use client";

import { MyUserContextProvider } from "./useUser";

interface userProviderProps {
  children: React.ReactNode;
}

const UserProvider: React.FC<userProviderProps> = ({ children }) => {
  return <MyUserContextProvider>{children}</MyUserContextProvider>;
};

export default UserProvider;
