import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

interface AuthMethods {
    registerAuth: (email: string, password: string) => void;
}

const useAuth = (): AuthMethods | undefined => {
    const authContext = useContext(AuthContext);

    if (!authContext) {
        return undefined; // Retornar undefined cuando el contexto no está definido
    }

    return {
        registerAuth: authContext.registerAuth
    };
};

export default useAuth;
