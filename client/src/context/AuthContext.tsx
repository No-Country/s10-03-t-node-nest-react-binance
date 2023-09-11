import React, { ReactNode, createContext, useState } from 'react'
// import { firebaseAuth } from '../firebase/index'
// import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { LoginAuth, RegisterAuth } from '../models/RegisterAuth'

interface Auth {
  auth: RegisterAuth
  registerAuth: ({ email, password, username, balance, celphone }) => void
  login: ({ userOrEmail, password }) => void
  favoritesList: any[] // almacenarán las monedas favoritas
  setFavoritesList: (list: any[]) => void // actualizar la lista de favoritos
}

interface AuthProviderProps {
  children: ReactNode
}

const AuthContext = createContext<Auth | undefined>(undefined)

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [auth, setauth] = useState<RegisterAuth>({
    email: "",
    password: "",
    username: "",
    balance: 0,
    celphone: 0,
  });

  const [loginAuth, setLoginAuth] = useState<LoginAuth>({
    userOrEmail: "",
    password: "",
  })

  const [favoritesList, setFavoritesList] = useState<any[]>([]) // estado para las monedas favoritas

  const registerAuth = (data: RegisterAuth) => {
    setauth((prevState) => ({
      ...prevState,
      ...data,
    }))
  }

  const login = (data: LoginAuth) => {
    setLoginAuth(data)
  }

  return (
    <AuthContext.Provider value={ { auth, registerAuth, login,favoritesList, setFavoritesList} }>
      { children }
    </AuthContext.Provider>
  )
}

export { AuthProvider }
export default AuthContext
