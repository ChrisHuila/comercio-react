import { useState } from "react"
import { auth } from "../../firebase"
import { 
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut,
onAuthStateChanged, 
updateProfile
} from "firebase/auth"


export function useAuth () {
    
    const [ usuarioActual, setUsuarioActual ] = useState(null)
    const [ isLogin, setIslogin ] = useState(false)
    const [isResolve, setIsResolve] = useState(false)
    const [ loading, setLoading] = useState(false);

  
    //register method  
    const userRegister = async (usuario) => {
    
        let email = usuario.email
        let password = usuario.password
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            .then((res)=> {
                updateNewUser(usuario)
            })
           
            } catch (error) {
            console.log(error)
          
            }
    }

    // Set displayName
    const updateNewUser = (usuario) => {
        const {nombre} = usuario
        updateProfile(auth.currentUser, {
            displayName: nombre
          }).then(() => {
            window.location.replace('/');
          })
    }

    //Login method
    const userLogin = async (usuario) => {
      setLoading(true);
        const {email, password} = usuario
        try {
        signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
          if (res.user) {
            setLoading(false);
            window.location.replace('/')     
          }
        })
        } catch (error) {
          setLoading(false);
          console.log(error)
        }
 
    }

 
    //Logout method
    const userLogout = async () => {
        signOut(auth)
        .then(() => {
          setIslogin(false)
          window.location.replace('/login')
        }).catch((error) => {
              
        })
    }

      

    //Observer
    onAuthStateChanged(auth, (user) => {
        if (user) {
          setIslogin(true)
          setUsuarioActual(user)
          setIsResolve(true)
        } else {
          setIslogin(false)
          setUsuarioActual(null)
          setIsResolve(true)
        }
    })


      return {
        usuarioActual,loading,  isLogin, isResolve,
        userRegister, userLogin, userLogout
    }


}