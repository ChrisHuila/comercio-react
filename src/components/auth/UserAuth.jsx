import React, { useContext } from "react";
import { myAuthContext } from "../../context/authContext";
import { Link } from "react-router-dom";


const UserAuth = () => {
    const { isLogin, userLogout, isResolve } = useContext(myAuthContext)
    
    return ( 
      <div className="d-flex align-items-center justify-content-center" >

        { isResolve 
        ?
        <div  className="d-flex align-items-center justify-content-center gap-2 mx-1 p-2">
          
                  <Link to="/admin"  className="nav-link fw-bold fst-italic mx-2">
                  <i className="h5 m-0 text-white bi bi-house-gear-fill"></i>
                  </Link>   

                

                {
                    isLogin &&
                    <button className="button-8" role='button'
                    onClick={userLogout}
                    >
                    Salir
                  </button>   
                }


                {
                    !isLogin &&
                    <Link to={'/login'}  className="button-8 variante">
                    Login
                  </Link>   
                }

                {
                    !isLogin &&
                    <Link to={'/register'}  className="button-8 variante">
                    register
                  </Link>
                }

              
        </div> 
        :
        <div 
        className="spinner-border text-info spinner-border-sm d-flex align-items-center justify-content-center gap-2 mx-3 p-2" 
        role="status">
        <span className="visually-hidden">Loading...</span>
        </div>
        } 
      </div>
    )

}
 
export default UserAuth;