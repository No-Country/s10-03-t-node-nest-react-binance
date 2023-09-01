import React, { ReactNode, createContext, useState, useContext } from 'react'
import { useNavigate } from "react-router-dom"
import { firebaseAuth } from '../firebase/index';
import { GoogleAuthProvider,signInWithPopup } from 'firebase/auth';

interface Auth {
    auth: {}
    registerAuth: ({ email, password, username, balance, celphone }) => void
   
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
    const [auth, setauth] = useState({
        email: '',
        password: '',
        username: '',
        balance: 0,
        celphone: 0
    })
    
    const registerAuth = (data: { email:string, password:string, username: string, balance: number, celphone: number}) => {
        
        setauth((prevState) => ({
            ...prevState,
            ...data
          }));
        console.log(data);
        console.log(auth);
        navigate('/market')
    }

    // const loginWithGoogle = () => {
    //   const googleProvider =  new GoogleAuthProvider()
    //   return signInWithPopup(firebaseAuth, googleProvider )
    // }

    return (
        <AuthContext.Provider value={{ auth, registerAuth}} >
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthProvider
}

export default AuthContext
