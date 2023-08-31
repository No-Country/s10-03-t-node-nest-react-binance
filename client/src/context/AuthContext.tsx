import React, { ReactNode, createContext, useState, useContext } from 'react'
import { useNavigate } from "react-router-dom"
import { firebaseAuth } from '../firebase/index';
import { GoogleAuthProvider,signInWithPopup } from 'firebase/auth';

interface Auth {
    auth: string
    registerAuth: (email:string, password: string) => void
   
}

interface AuthProviderProps {
    children: ReactNode
}



export const AuthContext = createContext<Auth | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context) throw new Error ("There is no auth provider")
    return context
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const navigate = useNavigate()
    const [auth, setauth] = useState('')
    
    const registerAuth = (email:string, password: string) => {
        console.log(email, password);
        navigate('/market')
    }

    const loginWithGoogle = () => {
      const googleProvider =  new GoogleAuthProvider()
      return signInWithPopup(firebaseAuth, googleProvider )
    }

    return (
        <AuthContext.Provider value={{ auth, registerAuth,loginWithGoogle}} >
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthProvider
}

export default AuthContext
