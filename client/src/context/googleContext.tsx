import { createContext, useContext } from "react";
import { GoogleAuthProvider } from "firebase/auth";

export const googleContext = createContext();

export const useAuth = () => {
    const context = useContext(googleContext);
    if(!context) throw new Error ('There is no auth provider')
    return context
}


