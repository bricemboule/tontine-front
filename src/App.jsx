import React from 'react';
import Login from './components/frontend/auth/Login';
import Register from './components/frontend/auth/Register';
import {Button, Alert, Row, Col} from 'react-bootstrap';
//import Navbar from './components/frontend/Navbar.jsx';
import { Routes, Route, Router } from 'react-router-dom';
import Home from './components/frontend/Home';
import Dashboard from './components/frontend/administrateur/dashboard/Dashboard';
import Admin from './components/frontend/administrateur/Admin';
import DashboardCenseur from './components/frontend/censeur/dashboard/DashboardCenseur';
import DashboardPresident from './components/frontend/president/dashboard/DashboardPresident';
import DashboardVicePresident from './components/frontend/vice_president/dashboard/DashboardVicePresident';
import DashboardSecretaire from './components/frontend/secretaire/dashboard/DashboardSecretaire';
import DashboardTresorier from './components/frontend/tresorier/dashboard/DashboardTresorier';
import DashboardCommissaire from './components/frontend/commissaire/dashboard/DashboardCommissaire';
import Ajouter from './components/frontend/administrateur/utilisateur/Ajouter';
import Lister from './components/frontend/administrateur/utilisateur/Lister';
import Modifier from './components/frontend/administrateur/utilisateur/Modifier';
import AjouterRole from './components/frontend/administrateur/roles/AjouterRole';
import ListerRole from './components/frontend/administrateur/roles/ListerRole';
import ModifierRole from './components/frontend/administrateur/roles/ModifierRole';
import SupprimerRole from './components/frontend/administrateur/roles/SupprimerRole';


function App() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/admin' element={<Admin/>}>
                <Route path='users/ajouter' element={<Ajouter/>}/>
                <Route path='users/lister' element={<Lister/>}/>
                <Route path='users/modifier' element={<Modifier/>}/>
                <Route path='roles/ajouter' element={<AjouterRole/>}/>
                <Route path='roles/lister' element={<ListerRole/>}/>
                <Route path='roles/:id/modifier' element={<ModifierRole/>}/>
                <Route path='roles/supprimer' element={<SupprimerRole/>}/>
            </Route>
            <Route path='/president'  element={<DashboardPresident/>}/>
            <Route path='/vice_president' element={<DashboardVicePresident/>}/>
            <Route path='/secretaire' element={<DashboardSecretaire/>}/>
            <Route path='/tresorier' element={<DashboardTresorier/>}/>
            <Route path='/commissaire' element={<DashboardCommissaire/>}/>
            <Route path='/censeur' element={<DashboardCenseur/>}/>
            
        </Routes>
    </div>
  );
}

export default App;