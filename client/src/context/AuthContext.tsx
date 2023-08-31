import React, { ReactNode, createContext, useState } from 'react'
import { useNavigate } from "react-router-dom"

interface Auth {
    auth: string
    registerAuth: (email:string, password: string) => void
   
}

interface AuthProviderProps {
    children: ReactNode
}

const AuthContext = createContext<Auth | undefined>(undefined);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const navigate = useNavigate()
    const [auth, setauth] = useState('')
    
    const registerAuth = (email:string, password: string) => {
        console.log(email, password);
        navigate('/market')
    }

    return (
        <AuthContext.Provider value={{ auth, registerAuth,}} >
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthProvider
}

export default AuthContext
