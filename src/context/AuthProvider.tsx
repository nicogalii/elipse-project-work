import { PropsWithChildren, useState } from "react";
import AuthContext from "./AuthContext";


// AuthContext Provider
export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [isAdmin, setIsAdmin] = useState(false);  // state to manage if the user is authenticated


  return (
    // giving to the provider's children the access to the context
    <AuthContext.Provider value={{ isAdmin, setIsAdmin }}>  
      {children}
    </AuthContext.Provider>
  );
};