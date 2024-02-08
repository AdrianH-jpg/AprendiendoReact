//importamos react
import React from 'react'
//importamos reactDOM pero solo el cliente
import ReactDOM from 'react-dom/client'
//importamos el COMPONENTE app
import {App} from './App.jsx'
//importamos los estilos
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <App/>
)