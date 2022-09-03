import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter as Router } from "react-router-dom"
import './index.css'
import {ContextProvider} from "./Context"
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <ContextProvider>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </ContextProvider>
)
