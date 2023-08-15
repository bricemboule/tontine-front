
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
import DashboardCommissaire from './components/frontend/commissaire/dashboard/DashboardCommissaire';
import DashboardVicePresident from './components/frontend/vice_president/dashboard/DashboardVicePresident';
import DashboardPresident from './components/frontend/president/dashboard/DashboardPresident';
import Modifier from './components/frontend/administrateur/utilisateur/Modifier';
import ModifierRole from './components/frontend/administrateur/roles/ModifierRole';
import ListerMembre from './components/frontend/secretaire/membre/ListerMembre';
import ModifierMembre from './components/frontend/secretaire/membre/ModifierMembre';
import AjouterMembre from './components/frontend/secretaire/membre/AjouterMembre';
import CreerTontine from './components/frontend/secretaire/tontine/CreerTontine';
import ListerTontine from './components/frontend/secretaire/tontine/ListerTontine';
import ModifierTontine from './components/frontend/secretaire/tontine/ModifierTontine';
import ValiderMembre from './components/frontend/president/membre/ValiderMembre';
import ListerMembrePresident from './components/frontend/president/membre/ListerMembrePresident';
import CreerSeance from './components/frontend/secretaire/seance/CreerSeance';
import ListerSeance from './components/frontend/secretaire/seance/ListerSeance';
import ModifierSeance from './components/frontend/secretaire/seance/ModifierSeance';
import Susprendre from './components/frontend/secretaire/suspension/Suspendre';
import ListerSuspension from './components/frontend/secretaire/suspension/ListerSuspension';
import ModifierSuspension from './components/frontend/secretaire/suspension/ModifierSuspension';
import ListeTontine from './components/frontend/president/tontine/ListeTontine';
import ListeSuspension from './components/frontend/president/suspensions/ListeSuspension';
import ValiderSuspension from './components/frontend/president/suspensions/ValiderSuspension';
import ListerTypeRetrait from './components/frontend/tresorier/TypeRetrait/ListerTypeRetrait';
import ModifierTypeRetrait from './components/frontend/tresorier/TypeRetrait/ModiferTypeRetrait';
import AjouterTypeRetrait from './components/frontend/tresorier/TypeRetrait/AjouterTypeRetrait';
import AjouterTypeAmende from './components/frontend/censeur/type_amende/AjouterTypeAmende';
import ListerTypeAmende from './components/frontend/censeur/type_amende/ListerTypeAmende';
import ModiferTypeAmende from './components/frontend/censeur/type_amende/ModifierTypeAmende';
import AjouterAmende from './components/frontend/censeur/amende/AjouterAmende';
import ListerAmende from './components/frontend/censeur/amende/ListerAmende';
import ModifierAmende from './components/frontend/censeur/amende/ModifierAmende';
import AjouterRetrait from './components/frontend/tresorier/Retrait/AjouterRetrait';
import ListerRetrait from './components/frontend/tresorier/Retrait/ListerRetrait';
import ModifierRetrait from './components/frontend/tresorier/Retrait/ModifierRetrait';
import ListerDepense from './components/frontend/tresorier/Depense/ListerDepenses';
import ModifierDepense from './components/frontend/tresorier/Depense/ModifierDepense';
import AjouterDepense from './components/frontend/tresorier/Depense/AjouterDepense';
import AjouterPret from './components/frontend/tresorier/pret/AjouterPret';
import ListerPret from './components/frontend/tresorier/pret/ListerPret';
import ModifierPret from './components/frontend/tresorier/pret/ModifierPret';
import AjouterCotisation from './components/frontend/tresorier/cotisation/AjouterCotisation';
import ListerCotisation from './components/frontend/tresorier/cotisation/ListerCotisation';
import ModifierCotisation from './components/frontend/tresorier/cotisation/ModifierCotisation';

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
                        <Route path='/secretaire/membre/ajouter' element={<AjouterMembre/>}/>
                        <Route path='/secretaire/membre/lister' element={<ListerMembre/>}/>
                        <Route path='/secretaire/membre/:id/modifier' element={<ModifierMembre/>}/>
                        
                    </Route>

                    <Route path='/secretaire/tontine'>
                        <Route path='/secretaire/tontine/ajouter' element={<CreerTontine/>}/>
                        <Route path='/secretaire/tontine/lister' element={<ListerTontine/>}/>
                        <Route path='/secretaire/tontine/:id/modifier' element={<ModifierTontine/>}/>
                    </Route>

                    <Route path='/secretaire/seance'>
                        <Route path='/secretaire/seance/ajouter' element={<CreerSeance/>}/>
                        <Route path='/secretaire/seance/lister' element={<ListerSeance/>}/>
                        <Route path='/secretaire/seance/:id/modifier' element={<ModifierSeance/>}/>
                    </Route>

                    <Route path='/secretaire/suspension'>
                        <Route path='/secretaire/suspension/suspendre' element={<Susprendre/>}/>
                        <Route path='/secretaire/suspension/lister' element={<ListerSuspension/>}/>
                        <Route path='/secretaire/suspension/:id/modifier' element={<ModifierSuspension/>}/>
                    </Route>

                </Route>


                <Route path='/president' element={<DashboardPresident/>}>
                    <Route path='/president/membre'>
                        <Route path='/president/membre/valider' element={<ValiderMembre/>}/>
                        <Route path='/president/membre/lister' element={<ListerMembrePresident/>}/>
                    </Route>

                    <Route path='/president/suspension'>
                        <Route path='/president/suspension/valider' element={<ValiderSuspension/>}/>
                        <Route path='/president/suspension/lister' element={<ListeSuspension/>}/>
                    </Route>

                    <Route path='/president/tontine'>
                        <Route path='/president/tontine/lister' element={<ListeTontine/>}/>
                       
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
                    <Route path='/tresorier/type_retrait'>
                        <Route path='/tresorier/type_retrait/ajouter' element={<AjouterTypeRetrait/>}/>
                        <Route path='/tresorier/type_retrait/lister' element={<ListerTypeRetrait/>}/>
                        <Route path='/tresorier/type_retrait/:id/modifier' element={<ModifierTypeRetrait/>}/>
                    </Route>

                    <Route path='/tresorier/retrait'>
                        <Route path='/tresorier/retrait/ajouter' element={<AjouterRetrait/>}/>
                        <Route path='/tresorier/retrait/lister' element={<ListerRetrait/>}/>
                        <Route path='/tresorier/retrait/:id/modifier' element={<ModifierRetrait/>}/>
                    </Route>

                    <Route path='/tresorier/depense'>
                        <Route path='/tresorier/depense/ajouter' element={<AjouterDepense/>}/>
                        <Route path='/tresorier/depense/lister' element={<ListerDepense/>}/>
                        <Route path='/tresorier/depense/:id/modifier' element={<ModifierDepense/>}/>
                    </Route>
                    <Route path='/tresorier/pret'>
                        <Route path='/tresorier/pret/ajouter' element={<AjouterPret/>}/>
                        <Route path='/tresorier/pret/lister' element={<ListerPret/>}/>
                        <Route path='/tresorier/pret/:id/modifier' element={<ModifierPret/>}/>
                    </Route>

                    <Route path='/tresorier/cotisation'>
                        <Route path='/tresorier/cotisation/ajouter' element={<AjouterCotisation/>}/>
                        <Route path='/tresorier/cotisation/lister' element={<ListerCotisation/>}/>
                        <Route path='/tresorier/cotisation/:id/modifier' element={<ModifierCotisation/>}/>
                    </Route>

                </Route>

                <Route path='/censeur' element={<DashboardCenceur/>}>
                    <Route path='/censeur/presence'>
                        <Route path='/censeur/presence/ajouter' element={<Ajouter/>}/>
                        <Route path='/censeur/presence/lister' element={<Lister/>}/>
                        <Route path='/censeur/presence/afficher' element={<ListerRole/>}/>
                    </Route>

                    <Route path='/censeur/type_amende'>
                        <Route path='/censeur/type_amende/ajouter' element={<AjouterTypeAmende/>}/>
                        <Route path='/censeur/type_amende/lister' element={<ListerTypeAmende/>}/>
                        <Route path='/censeur/type_amende/:id/modifier' element={<ModiferTypeAmende/>}/>
                    </Route>

                    <Route path='/censeur/amende'>
                        <Route path='/censeur/amende/ajouter' element={<AjouterAmende/>}/>
                        <Route path='/censeur/amende/lister' element={<ListerAmende/>}/>
                        <Route path='/censeur/amende/:id/modifier' element={<ModifierAmende/>}/>
                    </Route>

                    <Route path='/censeur/evenement'>
                        <Route path='/censeur/evenement/ajouter' element={<Ajouter/>}/>
                        <Route path='/censeur/evenement/lister' element={<Lister/>}/>
                        <Route path='/censeur/evenement/afficher' element={<ListerRole/>}/>
                    </Route>

                </Route>


            </Routes>
        )

}
