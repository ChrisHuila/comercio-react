import { createContext } from "react";
import { useAuth } from "../hooks/useAuth";

export const myAuthContext = createContext();

const AuthContext = (props) => {

    const {usuarioActual, isLogin, isResolve, userRegister, userLogin, userLogout} = useAuth()

    return ( 
        <myAuthContext.Provider
            value={{
               usuarioActual, 
               isLogin,
               isResolve,
               userRegister,
               userLogin,
               userLogout
            }}
        >

            {props.children}
        </myAuthContext.Provider>
     )
}
 
export default AuthContext;