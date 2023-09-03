import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";

interface AuthMethods {
  registerAuth: ({ email, password, username, balance, celphone }) => void;
  login: ({ userOrEmail, password }) => void;
  isLogueado?: boolean;
  setIsLogueado?: React.Dispatch<React.SetStateAction<boolean>>;
}

const useAuth = (): AuthMethods | undefined => {
  const authContext = useContext(AuthContext);
  const [isLogueado, setIsLogueado] = useState<boolean>(false);

  useEffect(() => {
    if (authContext) {
      setIsLogueado(true);
    }
  }, [authContext]);

  if (!authContext) {
    setIsLogueado(false);
    // Retornar undefined cuando el contexto no está definido
    return undefined;
  }

  return {
    registerAuth: authContext.registerAuth,
    login: authContext.login,
    isLogueado,
    setIsLogueado,
  };
};

export default useAuth;
