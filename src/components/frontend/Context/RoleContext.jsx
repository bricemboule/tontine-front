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
    const [value1, setValue1] = useState();
    const [ value, setValue] = useState();
    const [val, setVal] = useState(" ");
    const [disabled, setDisabled] = useState(false);
    const navigate = useNavigate();

    const [roleValues, setRoleValues] = useState({
        nom : "",
        description : ""
    });

    const [tontineValue, setTontineValues] = useState({
        nom : "",
        nbDeParticipants : "",
        dateDebut : "",
        dateFin : "",
        observation : ""
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
        console.log(e.target.value);
        const {name, value} = e.target;
        setTontineValues({...tontineValue, [name] : value});
    }

    const handleChange2 = (e)=>{
        e.persist();
        const name = e.target.name;
        const value = e.target.value;
        setPermission({...permission, [name]: value});
    }

    const getRoles  = async() =>{
        const apiRoles = await axios.get('roles');
        setRoles(apiRoles.data.data);
    }

    const getUsers = async()=>{
        const apiUSers = await axios.get('users');
       
        setUsers(apiUSers.data.data);
    }

    const getTontines = async()=>{

        const apiTontines = await axios.get('tontines');
        setTontines(apiTontines.data.data);
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

    const getRole = async (id) =>{
        const response = await axios.get("roles/" + id);
        const apiRole = response.data.data;
        setRole(apiRole);
        setRoleValues({
            nom : apiRole.nom,
            description : apiRole.description
        });
    }

    const getTontine = async(id) =>{
        const response = await axios.get("tontines/" + id);
        const apiTontine = response.data.data;
        setTontine(apiTontine);
        console.log(apiTontine);
        setTontineValues({
            nom: apiTontine.nom,
            nbDeParticipants : apiTontine.nbDeParticipants,
            dateDebut : apiTontine.dateDebut,
            dateFin : apiTontine.dateFin,
            observation : apiTontine.observation
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

    const modifierTontine = async(e)=>{
        e.preventDefault();

        try {
            console.log(tontine.id);
            await axios.put("tontines/" + tontine.id, tontineValue);
            getTontines();
            navigate("secretaire/tontine/lister");
        } catch (e) {
            if(e.response.status === 422){
                setErrors(e.response.data);
            }
        }
    }

    const SupprimerRole = async (id) =>{
        console.log(id)
        await axios.delete("roles/" + id);
        getRoles();
        navigate("admin/roles/lister");
    }

    const SupprimerUser = async (id) =>{
        await axios.delete("users/" + id);
        getUsers();
        navigate("admin/utilisateur/lister");
    }

    const SupprimerMembre = async (id) =>{
        await axios.delete("users/" + id);
        getUsers();
        navigate("secretaire/membre/lister");
    }

    const SupprimerTontine = async(id) =>{

        await axios.delete("tontines/" +id);
        getTontines();
        navigate("secretaire/tontine/lister");
    }

    const Deconnecter = async ()=>{
        const response = await axios.post("logout");
        Swal.fire("Déconnexion réussie", response.data.message, "success");
        navigate("/login");
    }

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

    const SaveUser = async (e)=>{
        e.preventDefault();
        try {
           
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



        return (<RoleContext.Provider value={{
            role, roles,errors,userInput,user,users,value,tontines,disabled,value1,roleValues,tontineValue,
            close, setValue, setValue1,getTontines,modifierTontine,getTontine,
            getRole, getRoles, handleChange1,handleInput, handleChange2, 
            SupprimerUser,setRoles,SaveTontine,handleChangeTontine,
            SupprimerTontine,changeDisable,setUser,modifierMembre,SupprimerMembre, 
            SaveRole,SaveMember, modifierUser,Deconnecter,modifierRole, 
            SupprimerRole, SaveUser,getUsers,getUser}}> 
            {children} 
        </RoleContext.Provider>);
};
export default RoleContext;