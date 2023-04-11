import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import CarritoProvaider from './context/carritoContext';
import CarritoState from './context/carrito/carritoState';
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CarritoState>
      <CarritoProvaider>
          <App />
      </CarritoProvaider>
    </CarritoState>
  </React.StrictMode>,
)
