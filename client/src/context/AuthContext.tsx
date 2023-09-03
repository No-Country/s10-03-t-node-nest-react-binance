import React, { ReactNode, createContext, useState, } from 'react'
// import { firebaseAuth } from '../firebase/index'
// import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { LoginAuth, RegisterAuth } from '../models/RegisterAuth'

interface Auth {
    auth: RegisterAuth
    registerAuth: ({ email, password, username, balance, celphone }) => void
    login: ({ userOrEmail, password }) => void
}

interface AuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext<Auth | undefined>(undefined)

// export const useAuth = () =>  {
//     const context = useContext(AuthContext)
//     if (!context) throw new Error("There is no auth provider")
//     return context
// }

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [auth, setauth] = useState<RegisterAuth>({
        email: '',
        password: '',
        username: '',
        balance: 0,
        celphone: 0
    })

    const [loginAuth, setLoginAuth] = useState<LoginAuth>({userOrEmail: '', password: ''})

    console.log(loginAuth);
    
    const registerAuth = (data: RegisterAuth) => {
        setauth((prevState) => ({
            ...prevState,
            ...data
        }))
    }

    const login = (data: LoginAuth) => {
        setLoginAuth(data)
    }

    // const loginWithGoogle = () => {
    //   const googleProvider =  new GoogleAuthProvider()
    //   return signInWithPopup(firebaseAuth, googleProvider )
    // }

    return (
        <AuthContext.Provider value={ { auth, registerAuth, login } } >
            { children }
        </AuthContext.Provider>
    )
}

export { AuthProvider }
export default AuthContext
