
import Login from './components/frontend/auth/Login';
import Home from './components/frontend/Home';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/frontend/administrateur/dashboard/Dashboard'
import Ajouter from './components/frontend/administrateur/utilisateur/Ajouter';
import Lister from './components/frontend/administrateur/utilisateur/Lister'
import AjouterRole from './components/frontend/administrateur/roles/AjouterRole'
import ListerRole from './components/frontend/administrateur/roles/ListerRole'
import DashboardSecretaire from './components/frontend/secretaire/dashboard/DashboardSecretaire'
import Register from './components/frontend/auth/Register';
import DashboardCenceur from './components/frontend/censeur/dashboard/DashboardCenseur';
import DashboardTresorier from './components/frontend/tresorier/dashboard/DashboardTresorier';
import DashboardCommissaire from './components/frontend/commissaire/dashboard copy/DashboardCommissaire';
import DashboardVicePresident from './components/frontend/vice_president/dashboard copy/DashboardVicePresident';
import DashboardPresident from './components/frontend/president/dashboard copy/DashboardPresident';
import Modifier from './components/frontend/administrateur/utilisateur/Modifier';
import ModifierRole from './components/frontend/administrateur/roles/ModifierRole';
import SupprimerRole from './components/frontend/administrateur/roles/SupprimerRole';


export default function App() {
  return  (
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/deconnecter' />
                <Route path='/admin' element={<Dashboard/>}>
                    <Route path='/admin/utilisateur'>
                      <Route path='/admin/utilisateur/ajouter' element={<Ajouter/>}/>
                      <Route path='/admin/utilisateur/lister' element={<Lister/>}/>
                      <Route path='/admin/utilisateur/modifier' element={<Modifier/>}/>
                      <Route path='/admin/utilisateur/supprimer' element={<Modifier/>}/>
                    </Route>

                    <Route path='/admin/roles'>
                      <Route path='/admin/roles/ajouter' element={<AjouterRole/>}/>
                      <Route path='/admin/roles/lister' element={<ListerRole/>}/>
                      <Route path='/admin/roles/modifier' element={<ModifierRole/>}/>
                      <Route path='/admin/roles/supprimer' element={<SupprimerRole/>}/>
                     
                    </Route>

                </Route>

                <Route path='/secretaire' element={<DashboardSecretaire/>}>
                    <Route path='/secretaire/membre'>
                        <Route path='/secretaire/membre/ajouter' element={<Ajouter/>}/>
                        <Route path='/secretaire/membre/lister' element={<Lister/>}/>
                        <Route path='/secretaire/membre/afficher' element={<ListerRole/>}/>
                    </Route>

                    <Route path='/secretaire/tontine'>
                        <Route path='/secretaire/tontine/ajouter' element={<Ajouter/>}/>
                        <Route path='/secretaire/tontine/lister' element={<Lister/>}/>
                        <Route path='/secretaire/tontine/afficher' element={<ListerRole/>}/>
                    </Route>

                </Route>


                <Route path='/president' element={<DashboardPresident/>}>
                    <Route path='/president/membre'>
                        <Route path='/president/membre/ajouter' element={<Ajouter/>}/>
                        <Route path='/president/membre/lister' element={<Lister/>}/>
                        <Route path='/president/membre/afficher' element={<ListerRole/>}/>
                    </Route>

                    <Route path='/president/tontine'>
                        <Route path='/president/tontine/ajouter' element={<Ajouter/>}/>
                        <Route path='/president/tontine/lister' element={<Lister/>}/>
                        <Route path='/president/tontine/afficher' element={<ListerRole/>}/>
                    </Route>

                </Route>

                
                <Route path='/vice_president' element={<DashboardVicePresident/>}>
                    <Route path='/vice_president/membre'>
                        <Route path='/vice_president/membre/ajouter' element={<Ajouter/>}/>
                        <Route path='/vice_president/membre/lister' element={<Lister/>}/>
                        <Route path='/vice_president/membre/afficher' element={<ListerRole/>}/>
                    </Route>

                    <Route path='/vice_president/tontine'>
                        <Route path='/vice_president/tontine/ajouter' element={<Ajouter/>}/>
                        <Route path='/vice_president/tontine/lister' element={<Lister/>}/>
                        <Route path='/vice_president/tontine/afficher' element={<ListerRole/>}/>
                    </Route>

                </Route>

                <Route path='/commissaire' element={<DashboardCommissaire/>}>
                    <Route path='/commissaire/membre'>
                        <Route path='/commissaire/membre/ajouter' element={<Ajouter/>}/>
                        <Route path='/commissaire/membre/lister' element={<Lister/>}/>
                        <Route path='/commissaire/membre/afficher' element={<ListerRole/>}/>
                    </Route>

                    <Route path='/commissaire/tontine'>
                        <Route path='/commissaire/tontine/ajouter' element={<Ajouter/>}/>
                        <Route path='/commissaire/tontine/lister' element={<Lister/>}/>
                        <Route path='/commissaire/tontine/afficher' element={<ListerRole/>}/>
                    </Route>

                </Route>

                <Route path='/tresorier' element={<DashboardTresorier/>}>
                    <Route path='/tresorier/membre'>
                        <Route path='/tresorier/membre/ajouter' element={<Ajouter/>}/>
                        <Route path='/tresorier/membre/lister' element={<Lister/>}/>
                        <Route path='/tresorier/membre/afficher' element={<ListerRole/>}/>
                    </Route>

                    <Route path='/tresorier/tontine'>
                        <Route path='/tresorier/tontine/ajouter' element={<Ajouter/>}/>
                        <Route path='/tresorier/tontine/lister' element={<Lister/>}/>
                        <Route path='/tresorier/tontine/afficher' element={<ListerRole/>}/>
                    </Route>

                </Route>

                <Route path='/censeur' element={<DashboardCenceur/>}>
                    <Route path='/censeur/membre'>
                        <Route path='/censeur/membre/ajouter' element={<Ajouter/>}/>
                        <Route path='/censeur/membre/lister' element={<Lister/>}/>
                        <Route path='/censeur/membre/afficher' element={<ListerRole/>}/>
                    </Route>

                    <Route path='/censeur/tontine'>
                        <Route path='/censeur/tontine/ajouter' element={<Ajouter/>}/>
                        <Route path='/censeur/tontine/lister' element={<Lister/>}/>
                        <Route path='/censeur/tontine/afficher' element={<ListerRole/>}/>
                    </Route>

                </Route>


                    
               
                

            </Routes>)

}
