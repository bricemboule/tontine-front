
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css"


import { RoleProvider } from './components/frontend/Context/RoleContext.jsx'

import { BrowserRouter } from 'react-router-dom'



ReactDOM.createRoot(document.getElementById('root')).render(
 
    <BrowserRouter>
    
       <RoleProvider>
            <App />
       </RoleProvider>
    </BrowserRouter>
 
)
