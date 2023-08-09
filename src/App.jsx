
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
                      <Route path='/admin/utilisateur/:id/modifier' element={<Modifier/>}/>
                      
                    </Route>

                    <Route path='/admin/roles'>
                      <Route path='/admin/roles/ajouter' element={<AjouterRole/>}/>
                      <Route path='/admin/roles/lister' element={<ListerRole/>}/>
                      <Route path='/admin/roles/:id/modifier' element={<ModifierRole/>}/>
                      
                     
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
                    <Route path='/tresorier/cotisation'>
                        <Route path='/tresorier/cotisation/ajouter' element={<Ajouter/>}/>
                        <Route path='/tresorier/cotisation/lister' element={<Lister/>}/>
                        <Route path='/tresorier/cotisation/afficher' element={<ListerRole/>}/>
                    </Route>

                    <Route path='/tresorier/retrait'>
                        <Route path='/tresorier/retrait/ajouter' element={<Ajouter/>}/>
                        <Route path='/tresorier/retrait/lister' element={<Lister/>}/>
                        <Route path='/tresorier/retrait/afficher' element={<ListerRole/>}/>
                    </Route>

                    <Route path='/tresorier/depense'>
                        <Route path='/tresorier/depense/ajouter' element={<Ajouter/>}/>
                        <Route path='/tresorier/depense/lister' element={<Lister/>}/>
                        <Route path='/tresorier/depense/afficher' element={<ListerRole/>}/>
                    </Route>
                    <Route path='/tresorier/pret'>
                        <Route path='/tresorier/pret/ajouter' element={<Ajouter/>}/>
                        <Route path='/tresorier/pret/lister' element={<Lister/>}/>
                        <Route path='/tresorier/pret/afficher' element={<ListerRole/>}/>
                    </Route>

                </Route>

                <Route path='/censeur' element={<DashboardCenceur/>}>
                    <Route path='/censeur/presence'>
                        <Route path='/censeur/presence/ajouter' element={<Ajouter/>}/>
                        <Route path='/censeur/presence/lister' element={<Lister/>}/>
                        <Route path='/censeur/presence/afficher' element={<ListerRole/>}/>
                    </Route>

                    <Route path='/censeur/sanction'>
                        <Route path='/censeur/sanction/ajouter' element={<Ajouter/>}/>
                        <Route path='/censeur/sanction/lister' element={<Lister/>}/>
                        <Route path='/censeur/sanction/afficher' element={<ListerRole/>}/>
                    </Route>

                    <Route path='/censeur/evenement'>
                        <Route path='/censeur/evenement/ajouter' element={<Ajouter/>}/>
                        <Route path='/censeur/evenement/lister' element={<Lister/>}/>
                        <Route path='/censeur/evenement/afficher' element={<ListerRole/>}/>
                    </Route>

                </Route>


                    
               
                

            </Routes>)

}
