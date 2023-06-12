import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Register from './components/frontend/auth/Register.jsx'
import Login from './components/frontend/auth/Login.jsx'
import Home from './components/frontend/Home.jsx'
import { RoleProvider } from './components/frontend/Context/RoleContext.jsx'

import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
 
    <BrowserRouter>
    
       <RoleProvider>
            <App />
       </RoleProvider>
    </BrowserRouter>
 
)
