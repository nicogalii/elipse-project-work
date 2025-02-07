import { createContext } from "react";

interface AuthContext {
   
    isAdmin: boolean, 
    setIsAdmin: (bool:boolean) => void,
}

// creating AuthContext
const AuthContext = createContext<AuthContext>({
    isAdmin: false, 
    setIsAdmin: () => {},
});

export default AuthContext;