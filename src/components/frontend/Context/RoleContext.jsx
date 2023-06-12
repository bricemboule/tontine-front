import {createContext, useState} from 'react'
import axios  from 'axios'
import { useNavigate } from 'react-router-dom';
axios.defaults.baseURL = "http://localhost:8000/api/"

const RoleContext = createContext();
export const RoleProvider = ({children})=>{

    const [roles, setRoles] = useState([]);
    const [role, setRole] = useState([]);
    const [errors, setErrors] = useState([]);
    const [userInput, setUserInput] = useState([]);
    const [users, setUsers] = useState([]);
    const [user,setUser] = useState([]);
    const navigate = useNavigate();

    const [roleValues, setRoleValues] = useState({
        nom : "",
        description : ""
    });

    const [permission, setPermission] = useState({
        libelle : "",
        description : ""
    });

    //Création d'un utilisateur
    const handleInput = (e) =>{

        e.persist();
        setUserInput({...userInput, [e.target.name] : e.target.value})
    }

    const handleChange1 = (e)=>{
        e.persist();
        const {name, value} = e.target;
        console.log(e.target);
        setRoleValues({...roleValues, [name]:value});
        console.log(roleValues);
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
    };

    const getUsers = async()=>{

        const apiUSers = await axios.get('users');
        setUsers(apiUSers.data.data);
    }

    const getUser = async (id) =>{
        const response = await axios.get('users/' +id);
        const apiUser = response.data.data;
        setUser(apiUser);
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
            photo: apiUser.photo
        })
    };

    const getRole = async (id) =>{
        const response = await axios.get("roles/" + id);
        const apiRole = response.data.data;
        
        setRole(apiRole);
        setRoleValues({
            nom : apiRole.nom,
            description : apiRole.description
        })
    };

    const modifierRole = async (e) =>{

        e.preventDefault();

        try {
            
            await axios.put("roles/" + role.id, roleValues);
            getRoles();
            navigate("admin/roles/lister");
        } catch (e) {
            if (e.response.statud === 422){
                setErrors(e.response.data.errors);
            }
        }
    }

    const SupprimerRole = async (id) =>{
        
        await axios.delete("roles/" + id);
        getRoles();
        navigate("admin/roles/lister");
    }

    const SupprimerUser = async (id) =>{

        await axios.delete("users/" + id);
        getUsers();
        navigate("admin/users/lister");
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
            console.log(userInput);
            await axios.post("users", userInput);
            console.log(userInput);
            getUsers();
            
            navigate("/admin/users/lister");
            
        } catch (e) {
            if(e.response.status === 422){
                setErrors(e.response.data.errors);
            }  
        }
    }

        return (<RoleContext.Provider value={{
            role, roles,errors,userInput,users, getRole, getRoles, handleChange1,handleInput, handleChange2, 
            roleValues,SupprimerUser, SaveRole, modifierRole, SupprimerRole, SaveUser,getUsers,getUser}}> 
            {children} 
        </RoleContext.Provider>);
};
export default RoleContext;