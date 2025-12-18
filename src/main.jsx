import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// Remplacez par le chemin vers votre fichier de données (il se peut qu'il faille le modifier légèrement)
import "./data/mockData.js";
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
)
