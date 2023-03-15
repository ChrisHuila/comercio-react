import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Home from "./routes/Home";
import Login from "./components/auth/Login";
import NuevaCuenta from "./components/auth/NuevaCuenta";
import PrincipalCarrito from "./routes/PrincipalCarrito";
import Pagar from "./routes/Pagar";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/login",
      element: <Login/> ,
    },
    {
      path: "/nueva-cuenta",
      element: <NuevaCuenta/>,
    },
    {
      path: "/carrito",
      element: <PrincipalCarrito />,
    },
    {
      path: "/pagar",
      element: <Pagar />,
    }
      
  ])

  
  return (

      <div>

          {/* Vista de rutas */}
          <RouterProvider router={router} />      

      </div>

 
  )
}

export default App;
