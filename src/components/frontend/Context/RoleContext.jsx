import {createContext, useState} from 'react'
import axios  from 'axios'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
axios.defaults.baseURL = "http://localhost:8000/api/"


const RoleContext = createContext();
export const RoleProvider = ({children})=>{

    const [roles, setRoles] = useState([]);
    const [role, setRole] = useState([]);
    const [errors, setErrors] = useState([]);
    const [userInput, setUserInput] = useState([]);
    const [users, setUsers] = useState([]);
    const [tontines, setTontines] = useState([]);
    const [tontine, setTontine] = useState([]);
    const [user,setUser] = useState([]);
    const [seances, setSeances] = useState([]);
    const [seance,setSeance] = useState([]);
    const [suspension, setSuspension] = useState([]);
    const [suspensions, setSuspensions] = useState([]);
    const [value1, setValue1] = useState();
    const [ value, setValue] = useState();
    const [val, setVal] = useState(" ");
    const [disabled, setDisabled] = useState(false);
    const navigate = useNavigate();

    const [roleValues, setRoleValues] = useState({
        nom : "",
        description : ""
    });

    const [seanceValue, setSeanceValue] =useState({

        typeSeance : "",
        dateSeance : "",
        depenseBoisson : "",
        lieu : "",
        rapportReunion : ""
    });

    const [tontineValue, setTontineValues] = useState({
        nom : "",
        nbDeParticipants : "",
        dateDebut : "",
        dateFin : "",
        observation : ""
    });

    const [suspensionValue, setSuspensionValue] = useState({
        membre : "",
        motif : "",
        periode : "",
        seance : ""
    });

    const [permission, setPermission] = useState({
        libelle : "",
        description : ""
    });

    const changeDisable = ()=>{
        console.log("Valeur de départ : ", disabled);
        setDisabled(true);
        console.log("Valeur Après le State : ", disabled);
    }
    //Création d'un utilisateur
    const handleInput = (e) =>{
        e.persist();
        console.log(e.target.value);
        setUserInput({...userInput, [e.target.name] : e.target.value})
    }

    const handleChange1 = (e)=>{
        e.persist();
        const {name, value} = e.target;
        setRoleValues({...roleValues, [name]:value});
    }

    const handleChangeTontine = (e) => {

        e.persist();
        const {name, value} = e.target;
        setTontineValues({...tontineValue, [name] : value});
    }

    const handleChange2 = (e)=>{
        e.persist();
        const name = e.target.name;
        const value = e.target.value;
        setPermission({...permission, [name]: value});
    }

    //APIREST OF ROLES
    const SaveRole = async (e) =>{
        e.preventDefault();

        try{
            await axios.post("roles", roleValues);
            getRoles();
            navigate("/admin/roles/lister");
        }catch(e){

            if (e.response.status === 422){
                setErrors(e.response.data.errors);
            }
        }
    }
    const getRoles  = async() =>{
        const apiRoles = await axios.get('roles');
        setRoles(apiRoles.data.data);
    }
    const getRole = async (id) =>{
        const response = await axios.get("roles/" + id);
        const apiRole = response.data.data;
        setRole(apiRole);
        setRoleValues({
            nom : apiRole.nom,
            description : apiRole.description
        });
    }

    const modifierRole = async (e) =>{
        e.preventDefault();
        try {
           
           
            await axios.put("roles/" + role.id, roleValues);
            console.log("Bonjour");
            setVal("modal");
            console.log("Valeur Finale : ", val);
            getRoles();
            navigate("admin/roles/lister");
            setVal("")
        } catch (e) {
            if (e.response.status === 422){
                setErrors(e.response.data.errors);
            }
        }
    }
    const SupprimerRole = async (id) =>{
        console.log(id)
        await axios.delete("roles/" + id);
        getRoles();
        navigate("admin/roles/lister");
    }


     //APIREST of USER
     const SaveUser = async (e)=>{
        e.preventDefault();
        try {
            userInput.telephone1 = value;
            userInput.telephone2 = value1;
            await axios.post("users", userInput);
            console.log("Bonsoir");
            getUsers();
            
            navigate("/admin/utilisateur/lister");
            
        } catch (e) {
            if(e.response.status === 422){
                setErrors(e.response.data.errors);
            }  
        }
    }
    const getUsers = async()=>{
        const apiUSers = await axios.get('users');
       
        setUsers(apiUSers.data.data);
    }

    const getUser = async (id) =>{
        const response = await axios.get('users/' +id);
        const apiUser = response.data.data;
             
        setUser(apiUser);
        console.log(user);
        setUserInput({
            nom: apiUser.nom,
            prenom : apiUser.prenom,
            anneeNais : apiUser.anneeNais,
            anneeEntree : apiUser.anneeEntree,
            nomEpoux : apiUser.nomEpoux,
            nbDeFemme : apiUser.nbDeFemme,
            sexe: apiUser.sexe,
            telephone1 : apiUser.telephone1,
            telephone2 : apiUser.telephone2,
            login : apiUser.login,
            password : apiUser.password,
            email : apiUser.email,
            photo: apiUser.photo,
            role : apiUser.role[0].nom,
            dateDebut : apiUser.role[0].pivot.dateDebut,
            dateFinPrevue : apiUser.role[0].pivot.dateFinPrevue,    
        });
    }
    const modifierUser = async (e) =>{

        e.preventDefault();

        try {
            
            await axios.put("users/" + user.id, userInput);
            getUsers();
            navigate("admin/utilisateur/lister");
        } catch (e) {
            if(e.response.status===422){
                setErrors(e.response.data.errors);
            }
        }
    }
    const SupprimerUser = async (id) =>{
        await axios.delete("users/" + id);
        getUsers();
        navigate("admin/utilisateur/lister");
    }

    //APIREST OF TONTINES
    const SaveTontine = async (e)=>{
        e.preventDefault();
        try {
                console.log(tontineValue);
                await axios.post("tontines", tontineValue);
                getTontines();
                navigate("secretaire/tontine/lister"); 
        } catch (e) {
            if(e.response.data.errors){
                setErrors(e.response.data.errors);
            }   
        }
    }
    const getTontines = async()=>{
        const apiTontines = await axios.get('tontines');
        setTontines(apiTontines.data.data);
    }

    const getTontine = async(id) =>{
        const response = await axios.get("tontines/" + id);
        const apiTontine = response.data.data;
        setTontine(apiTontine);
        setTontineValues({
            nom: apiTontine.nom,
            nbDeParticipants : apiTontine.nbDeParticipants,
            dateDebut : apiTontine.dateDebut,
            dateFin : apiTontine.dateFin,
            observation : apiTontine.observation
        });
    }

    const modifierTontine = async(e)=>{
        e.preventDefault();
        try {
            await axios.put("tontines/" + tontine.id, tontineValue);
            getTontines();
            navigate("secretaire/tontine/lister");
        } catch (e) {
            if(e.response.status === 422){
                setErrors(e.response.data);
            }
        }
    }
  
    const SupprimerTontine = async(id) =>{
        await axios.delete("tontines/" +id);
        getTontines();
        navigate("secretaire/tontine/lister");
    }

   
//APIREST OF MEMBRE
const SaveMember = async (e)=>{
    e.preventDefault();
    try {
      
        await axios.post("users", userInput);
        getUsers();
        
        navigate("/secretaire/membre/lister");
        
    } catch (e) {
        if(e.response.status === 422){
            setErrors(e.response.data.errors);
        }  
    }
}
    const modifierMembre = async (e) =>{
        e.preventDefault();
        try {
            await axios.put("users/" + user.id, userInput);
            getUsers();
            navigate("secretaire/membre/lister");
        } catch (e) {
            if(e.response.status===422){
                setErrors(e.response.data.errors);
            }
        }
    }

    const ValiderMembre = async (id)=>{

        await axios.put("valider/" + id);
        getUsers();
        navigate("president/membre/lister");
    }

    const SupprimerMembre = async (id) =>{
        await axios.delete("users/" + id);
        getUsers();
        navigate("secretaire/membre/lister");
    }

   
    //APIREST SEANCE

    const changeSeance = (e)=>{
        e.persist();
        const {name,value} = e.target;
        setSeanceValue({...seanceValue, [name] : value});
    }

    const getSeances = async() =>{
        const apiSeances = await axios.get("seances");
        setSeances(apiSeances.data.data);
    }

    const SaveSeance = async (e)=>{
        e.preventDefault();
        try {
            await axios.post("seances", seanceValue);
            getSeances();
            navigate("secretaire/seance/lister");
        } catch (e) {
            if(e.response.status===422){
                setErrors(e.response.data.errors);
            }    
        }
    }

    const getSeance = async(id) =>{
        const response = await axios.get("seances/" + id);
        const apiSeance = response.data.data;
        console.log(apiSeance);
        setSeance(apiSeance);
        setSeanceValue({
            typeSeance: apiSeance.typeSeance,
            dateSeance : apiSeance.dateSeance,
            depenseBoisson : apiSeance.depenseBoisson,
            lieu : apiSeance.lieu,
            rapportReunion : apiSeance.rapportReunion
        });
        console.log(seanceValue);

    }

    const modifierSeance = async(e)=>{
        e.preventDefault();
        try {
            console.log(seance.id);
            console.log(seanceValue);
            await axios.put("seances/" + seance.id, seanceValue);
            getSeances();
            navigate("secretaire/seance/lister");
        } catch (e) {
            if(e.response.status === 422){
                setErrors(e.response.data);
            }
        }
    }

    const supprimerSeance = async(id)=>{

        await axios.delete("seances/" +id);
        getSeances();
        navigate("secretaire/seance/lister");
    }

    //APIREST SUSPENSION
    const changeSuspension = (e) =>{
        e.persist();
        const {name,value} = e.target;
        setSuspensionValue({...suspensionValue, [name]:value});
    }
    const getSuspensions = async() =>{
        const apiSuspensions = await axios.get("suspensions");
        setSuspensions(apiSuspensions.data.data);
    }

    const SaveSuspension = async (e)=>{
        e.preventDefault();
        try {
            console.log(suspensionValue);
            await axios.post("suspensions", suspensionValue);
            getSuspensions();
            navigate("/secretaire/suspension/lister");
        } catch (e) {
            if(e.response.status === 422){
                setErrors(e.response.data.errors);
            }  
        }
    }

    const getSuspension = async(id) =>{
        const response = await axios.get("suspensions/" + id);
        const apiSuspension = response.data.data;
        setSuspension(apiSuspension);
        console.log(apiSuspension);
        setSuspensionValue({
            membre: apiSuspension.membre.nom,
            motif : apiSuspension.motif,
            periode : apiSuspension.periode,
            seance : apiSuspension.seance.dateSeance
        });
        console.log(suspensionValue);
    }

    const modifierSuspension = async(e)=>{
        e.preventDefault();
        try {
            console.log(suspensionValue);
            await axios.put("suspensions/" + suspension.id, suspensionValue);
            getSuspensions();
            navigate("secretaire/suspension/lister");
        } catch (e) {
            if(e.response.status === 422){
                setErrors(e.response.data);
            }
        }
    }

    const supprimerSuspension = async(id)=>{

        await axios.delete("suspensions/" +id);
        getSuspensions();
        navigate("secretaire/suspension/lister");
    }


    const Deconnecter = async ()=>{
        const response = await axios.post("logout");
        Swal.fire("Déconnexion réussie", response.data.message, "success");
        navigate("/login");
    }

   

        return (<RoleContext.Provider value={{
            role, roles,errors,userInput,user,users,value,tontines,disabled,value1,roleValues,tontineValue,
            seanceValue,seances,seance,suspension,suspensions,suspensionValue,
            close, setValue, setValue1,getTontines,modifierTontine,getTontine,changeSeance,SaveSeance,modifierSeance,
            getRole, getRoles, handleChange1,handleInput, handleChange2, supprimerSeance,getSeance,getSeances,changeSuspension,
            SupprimerUser,setRoles,SaveTontine,handleChangeTontine,ValiderMembre,getSuspensions,getSuspension,
            SupprimerTontine,changeDisable,setUser,modifierMembre,SupprimerMembre, modifierSuspension,supprimerSuspension,
            SaveRole,SaveMember, modifierUser,Deconnecter,modifierRole,SaveSuspension,
            SupprimerRole, SaveUser,getUsers,getUser}}> 
            {children} 
        </RoleContext.Provider>);
};
export default RoleContext;