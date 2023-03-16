import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import CarritoProvaider from './context/carritoContext';
import AuthContext from './context/authContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CarritoProvaider>
      <AuthContext>
        <App />
      </AuthContext>
    </CarritoProvaider>
  </React.StrictMode>,
)
