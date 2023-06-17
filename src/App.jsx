import React from 'react';
import Login from './components/frontend/auth/Login';
import Home from './components/frontend/Home';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/frontend/administrateur/dashboard/Dashboard'
import Ajouter from './components/frontend/administrateur/utilisateur/Ajouter';
import Lister from './components/frontend/administrateur/utilisateur/Lister'
import AjouterRole from './components/frontend/administrateur/roles/AjouterRole'
import ListerRole from './components/frontend/administrateur/roles/ListerRole'



export default function App() {
  return  (
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/login' element={<Login/>}/>
                <Route path='/admin' element={<Dashboard/>}>
                    <Route path='/admin/utilisateur'>
                      <Route path='/admin/utilisateur/ajouter' element={<Ajouter/>}/>
                      <Route path='/admin/utilisateur/lister' element={<Lister/>}/>
                      <Route path='/admin/utilisateur/afficher' element={<ListerRole/>}/>
                    </Route>

                    <Route path='/admin/roles'>
                      <Route path='/admin/roles/ajouter' element={<AjouterRole/>}/>
                      <Route path='/admin/roles/lister' element={<ListerRole/>}/>
                     
                    </Route>

                </Route>
                    
               
                

            </Routes>)

}
