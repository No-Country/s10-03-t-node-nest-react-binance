import { ReactNode, createContext, useState } from "react";

import React from 'react'
import { useNavigate } from "react-router-dom";


interface Auth {
    auth: string,
    registerAuth: () => void
   
}

interface AuthProviderProps {
    children: ReactNode
}

const AuthContext = createContext<Auth | undefined>(undefined);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    
    const navigate = useNavigate()
    const [auth, setauth] = useState('')
    
    const registerAuth = () => {
        setauth('hola')
        navigate('/market')
    };

  

    return (
        <AuthContext.Provider 
            value={{
                auth,
                registerAuth,
                
    
                }}
            >
            {children}
        </AuthContext.Provider>
    );
};

export {
    AuthProvider
}
export default AuthContext;

