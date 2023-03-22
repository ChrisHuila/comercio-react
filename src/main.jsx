import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import CarritoProvaider from './context/carritoContext';
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CarritoProvaider>
        <App />
    </CarritoProvaider>
  </React.StrictMode>,
)
