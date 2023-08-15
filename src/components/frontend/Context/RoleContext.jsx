import {createContext, useState} from 'react'
import axios  from 'axios'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
axios.defaults.baseURL = "http://localhost:8000/api/"


const RoleContext = createContext();
export const RoleProvider = ({children})=>{

    const [roles, setRoles] = useState([]);
    const [role, setRole] = useState([]);
    const [typeRetraits, setTypeRetraits] = useState([]);
    const [typeRetrait, setTypeRetrait] = useState([]);
    const [typeAmendes, setTypeAmendes] = useState([]);
    const [typeAmende, setTypeAmende] = useState([]);
    const [amende, setAmende] = useState([]);
    const [amendes, setAmendes] = useState([]);
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
    const [retrait, setRetrait] = useState([]);
    const [retraits, setRetraits] = useState([]);
    const [depense, setDepense] = useState([]);
    const [depenses, setDepenses] = useState([]);
    const [cotisation, setCotisation] = useState([]);
    const [cotisations, setCotisations] = useState([]);
    const [pret, setPret] = useState([]);
    const [prets, setPrets] = useState([]);
    const [value1, setValue1] = useState();
    const [ value, setValue] = useState();
    const [active, setActive] = useState("false");
    const [val, setVal] = useState(" ");
    const [disabled, setDisabled] = useState(false);
    const navigate = useNavigate();

    const [roleValues, setRoleValues] = useState({
        nom : "",
        description : ""
    });

    const [typeRetraitValues, setTypeRetraitValues] = useState({
        intitule : "",
        description : ""
    });

    const [typeAmendeValues, setTypeAmendeValues] = useState({
        intitule : "",
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

    const [retraitValue, setRetraitValue] = useState({
        membre : "",
        montant : "",
        type_retrait : "",
        seance : ""
    });

    const [depenseValue, setDepenseValue] = useState({
        montant : "",
        raison : "",
        observation : "",
        seance : ""
    });

    const [pretValue, setPretValue] = useState({
        montant : "",
        observation : "",
        pourcentage : "",
        seance : "",
        membre : ""
    });

    

    const [cotisationValue, setCotisationValue] = useState({
        montant : "",
        modeVersement : "",
        couponVersement : "",
        membre : "",
        seance : "",
        tontine : ""
    });

    const [amendeValue, setAmendeValue] = useState({
        membre : "",
        montant : "",
        dateSanction : "",
        typeSanction : ""
    });

    const [permission, setPermission] = useState({
        libelle : "",
        description : ""
    });

    const activeLink =()=>{
        setActive("true");

    }

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

    const changeTypeRetrait = (e)=>{
        e.persist();
        const {name, value} = e.target;
        setTypeRetraitValues({...typeRetraitValues, [name]:value});
    }

    const changeTypeAmende = (e)=>{
        e.persist();
        const {name, value} = e.target;
        setTypeAmendeValues({...typeAmendeValues, [name]:value});
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

    const validerSuspension = async (id)=>{
        console.log(id);
        await axios.put("suspendre/" + id);
        getSuspensions();
        navigate("president/suspension/lister");
    }

    const retirerSuspension = async (id)=>{
        console.log(id);
        await axios.put("suspendre/" + id);
        getSuspensions();
        navigate("president/suspension/lister");
    }
    const supprimerSuspension = async(id)=>{

        await axios.delete("suspensions/" +id);
        getSuspensions();
        navigate("secretaire/suspension/lister");
    }

     //APIREST OF TYPE RETRAIT
     const getTypeRetraits  = async() =>{
        const apiTypeRetraits = await axios.get('type_retraits');
        console.log(apiTypeRetraits);
        setTypeRetraits(apiTypeRetraits.data.data);
        console.log(typeRetraits);
    }
     const SaveTypeRetrait = async (e) =>{
        e.preventDefault();

        try{
            await axios.post("type_retraits", typeRetraitValues);
            getTypeRetraits();
            console.log(typeRetraits);
            navigate("/tresorier/type_retrait/lister");
        }catch(e){

            if (e.response.status === 422){
                setErrors(e.response.data.errors);
            }
        }
    }
  

    const getTypeRetrait = async (id) =>{
        const response = await axios.get("type_retraits/" + id);
        const apiTypeRetrait = response.data.data;
        setTypeRetrait(apiTypeRetrait);
        setTypeRetraitValues({
            intitule : apiTypeRetrait.intitule,
            description : apiTypeRetrait.description
        });
    }

    const modifierTypeRetrait = async (e) =>{
        e.preventDefault();
        try {
            await axios.put("type_retraits/" + typeRetrait.id, typeRetraitValues);
            getTypeRetraits();
            navigate("tresorier/type_retrait/lister");
        } catch (e) {
            if (e.response.status === 422){
                setErrors(e.response.data.errors);
            }
        }
    }
    const SupprimerTypeRetrait = async (id) =>{
        
        await axios.delete("type_retraits/" + id);
        getTypeRetraits();
        navigate("tresorier/type_retrait/lister");
    }


    //APIREST OF TYPE AMENDE
    const SaveTypeAmende = async (e) =>{
        e.preventDefault();

        try{
            await axios.post("type_amendes", typeAmendeValues);
            getTypeAmendes();
            navigate("/censeur/type_amende/lister");
        }catch(e){

            if (e.response.status === 422){
                setErrors(e.response.data.errors);
            }
        }
    }
    const getTypeAmendes  = async() =>{
        const apiTypeAmendes = await axios.get('type_amendes');
        setTypeAmendes(apiTypeAmendes.data.data);
    }

    const getTypeAmende = async (id) =>{
        const response = await axios.get("type_amendes/" + id);
        console.log(response);
        const apiTypeAmende = response.data.data;
        console.log(apiTypeAmende);
        setTypeAmende(apiTypeAmende);
        setTypeAmendeValues({
            intitule : apiTypeAmende.intitule,
            description : apiTypeAmende.description
        });
        console.log(typeAmendeValues);
    }

    const modifierTypeAmende = async (e) =>{
        e.preventDefault();
        try {
            console.log(typeAmende.id);
            console.log(typeAmendeValues);
            await axios.put("type_amendes/" + typeAmende.id, typeAmendeValues);
            getTypeAmendes();
            navigate("censeur/type_amende/lister");
        } catch (e) {
            if (e.response.status === 422){
                setErrors(e.response.data.errors);
            }
        }
    }

    const SupprimerTypeAmende = async (id) =>{
        
        await axios.delete("type_amendes/" + id);
        getTypeAmendes();
        navigate("censeur/type_amende/lister");
    }

    //APIREST OF AMENDE
    const changeAmende = (e) =>{
        e.persist();
        const {name,value} = e.target;
        setAmendeValue({...amendeValue, [name]:value});
    }
    const getAmendes = async() =>{
        const apiAmendes = await axios.get("sanctions");
        setAmendes(apiAmendes.data.data);
    }

    const SaveAmende = async (e)=>{
        e.preventDefault();
        try {
           
            console.log(amendeValue);
            await axios.post("sanctions", amendeValue);
            getAmendes();
            navigate("/censeur/amende/lister");
        } catch (e) {
            if(e.response.status === 422){
                setErrors(e.response.data.errors);
            }  
        }
    }

    const getAmende = async(id) =>{
        const response = await axios.get("sanctions/" + id);
        const apiSuspension = response.data.data;
        setAmende(apiSuspension);
        
        setAmendeValue({
            membre: apiSuspension.user.nom,
            montant : apiSuspension.montant,
            dateSanction : apiSuspension. dateSanction,
            typeSanction : apiSuspension.amende.intitule
        });
        
    }

    const modifierAmende = async(e)=>{
        e.preventDefault();
        try {
            
            await axios.put("sanctions/" + amende.id, amendeValue);
            getAmendes();
            navigate("censeur/amende/lister");
        } catch (e) {
            if(e.response.status === 422){
                setErrors(e.response.data);
            }
        }
    }

    const supprimerAmende = async(id)=>{

        await axios.delete("sanctions/" +id);
        getAmendes();
        navigate("censeur/amende/lister");
    }

    //APIREST RETRAIT
    const changeRetrait = (e) =>{
        e.persist();
        const {name,value} = e.target;
        setRetraitValue({...retraitValue, [name]:value});
    }
    const getRetraits = async() =>{
        const apiRetraits = await axios.get("retraits");
        setRetraits(apiRetraits.data.data);
    }

    const SaveRetrait = async (e)=>{
        e.preventDefault();
        try {
            
            await axios.post("retraits", retraitValue);
            getRetraits();
            navigate("/tresorier/retrait/lister");
        } catch (e) {
            if(e.response.status === 422){
                setErrors(e.response.data.errors);
            }  
        }
    }

    const getRetrait = async(id) =>{
        const response = await axios.get("retraits/" + id);
        const apiRetrait = response.data.data;
        setRetrait(apiRetrait);
        
        setRetraitValue({
            membre: apiRetrait.user.nom,
            montant : apiRetrait.montant,
            type_retrait : apiRetrait.type_retrait.intitule,
            seance : apiRetrait.seance.dateSeance
        });
        console.log(suspensionValue);
    }

    const modifierRetrait = async(e)=>{
        e.preventDefault();
        try {
            
            await axios.put("retraits/" + retrait.id, retraitValue);
            getRetraits();
            navigate("tresorier/retrait/lister");
        } catch (e) {
            if(e.response.status === 422){
                setErrors(e.response.data);
            }
        }
    }

    const supprimerRetrait = async(id)=>{

        await axios.delete("retraits/" +id);
        getRetraits();
        navigate("tresorier/retrait/lister");
    }


    //APIREST DEPENSE
    const changeDepense = (e) =>{
        e.persist();
        const {name,value} = e.target;
        setDepenseValue({...depenseValue, [name]:value});
    }
    const getDepenses = async() =>{
        const apiDepenses = await axios.get("depenses");
        setDepenses(apiDepenses.data.data);
    }

    const SaveDepense = async (e)=>{
        e.preventDefault();
        try {
            
            await axios.post("depenses", depenseValue);
            getDepenses();
            navigate("/tresorier/depense/lister");
        } catch (e) {
            if(e.response.status === 422){
                setErrors(e.response.data.errors);
            }  
        }
    }

    const getDepense = async(id) =>{
        const response = await axios.get("depenses/" + id);
        const apiDepense = response.data.data;
        setDepense(apiDepense);
        console.log(apiDepense);
        
        setDepenseValue({
            montant: apiDepense.montant,
            raison : apiDepense.raison,
            observation : apiDepense.observation,
            seance : apiDepense.seance.dateSeance
        });
    }

    const modifierDepense = async(e)=>{
        e.preventDefault();
        try {
            
            await axios.put("depenses/" + depense.id, depenseValue);
            getDepenses();
            navigate("tresorier/depense/lister");
        } catch (e) {
            if(e.response.status === 422){
                setErrors(e.response.data);
            }
        }
    }

    const supprimerDepense = async(id)=>{

        await axios.delete("depenses/" +id);
        getDepenses();
        navigate("tresorier/depense/lister");
    }

    //APIREST PRET
    const changePret = (e) =>{
        e.persist();
        const {name,value} = e.target;
        setPretValue({...pretValue, [name]:value});
    }
    const getPrets = async() =>{
        const apiPrets = await axios.get("prets");
        setPrets(apiPrets.data.data);
    }

    const SavePret = async (e)=>{
        e.preventDefault();
        try {
            console.log(pretValue);
            await axios.post("prets", pretValue);
            getPrets();
            navigate("/tresorier/pret/lister");
        } catch (e) {
            if(e.response.status === 422){
                setErrors(e.response.data.errors);
            }  
        }
    }

    const getPret = async(id) =>{
        const response = await axios.get("prets/" + id);
        const apiPret = response.data.data;
        setPret(apiPret);
        console.log(apiPret);
      
        setPretValue({
            montant: apiPret.montant,
            observation : apiPret.observation,
            pourcentage : apiPret.pourcentage,
            seance : apiPret.seance.dateSeance,
            membre : apiPret.user.nom
        });
    }

    const modifierPret = async(e)=>{
        e.preventDefault();
        try {
            
            await axios.put("prets/" + pret.id, pretValue);
            getPrets();
            navigate("tresorier/pret/lister");
        } catch (e) {
            if(e.response.status === 422){
                setErrors(e.response.data);
            }
        }
    }

    const supprimerPret = async(id)=>{

        await axios.delete("prets/" +id);
        getPrets();
        navigate("tresorier/pret/lister");
    }


     //APIREST COTISATION
     const changeCotisation = (e) =>{
        e.persist();
        const {name,value} = e.target;
        setCotisationValue({...cotisationValue, [name]:value});
    }
    const getCotisations = async() =>{
        const apiCotisations = await axios.get("cotisations");
        setCotisations(apiCotisations.data.data);
    }

    const SaveCotisation = async (e)=>{
        e.preventDefault();
        try {
            await axios.post("cotisations", cotisationValue);
            getCotisations();
            navigate("/tresorier/cotisation/lister");
        } catch (e) {
            if(e.response.status === 422){
                setErrors(e.response.data.errors);
            }  
        }
    }

    const getCotisation = async(id) =>{
        const response = await axios.get("cotisations/" + id);
        const apiCotisation = response.data.data;
        setCotisation(apiCotisation);
        setCotisationValue({
            montant: apiCotisation.montant,
            modeVersement : apiCotisation.modeVersement,
            couponVersement : apiCotisation.couponVersement,
            tontine : apiCotisation.tontine.nom,
            seance : apiCotisation.seance.dateSeance,
            membre : apiCotisation.user.nom
        });
    }

    const modifierCotisation = async(e)=>{
        e.preventDefault();
        try {
            await axios.put("cotisations/" + cotisation.id, cotisationValue);
            getCotisations();
            navigate("tresorier/cotisation/lister");
        } catch (e) {
            if(e.response.status === 422){
                setErrors(e.response.data);
            }
        }
    }

    const supprimerCotisation = async(id)=>{

        await axios.delete("cotisations/" +id);
        getCotisations();
        navigate("tresorier/cotisation/lister");
    }



    const Deconnecter = async ()=>{
        const response = await axios.post("logout");
        Swal.fire("Déconnexion réussie", response.data.message, "success");
        navigate("/login");
    }

   

        return (<RoleContext.Provider value={{
            role, roles,errors,userInput,user,users,value,tontines,disabled,value1,roleValues,tontineValue,
            seanceValue,seances,seance,suspension,suspensions,suspensionValue,typeRetrait,typeRetraitValues,typeRetraits,
            typeAmende,typeAmendeValues,typeAmendes,amende,amendes,amendeValue,retrait,retraitValue,retraits,
            depense,depenses,depenseValue,pret,prets,pretValue,cotisation,cotisationValue,cotisations,
             setValue, setValue1,getTontines,modifierTontine,getTontine,changeSeance,SaveSeance,modifierSeance,changeTypeRetrait,
            getRole, getRoles, handleChange1,handleInput, handleChange2, supprimerSeance,getSeance,getSeances,changeSuspension,
            SupprimerUser,setRoles,SaveTontine,handleChangeTontine,ValiderMembre,getSuspensions,getSuspension,activeLink,
            SupprimerTontine,changeDisable,setUser,modifierMembre,SupprimerMembre, modifierSuspension,supprimerSuspension,
            SaveRole,SaveMember, modifierUser,Deconnecter,modifierRole,SaveSuspension,validerSuspension,SaveTypeRetrait,modifierTypeRetrait,
            SupprimerRole, SaveUser,getUsers,getUser,retirerSuspension,getTypeRetraits,getTypeRetrait,SupprimerTypeRetrait,
            changeTypeAmende,SaveTypeAmende,modifierTypeAmende,getTypeAmende,getTypeAmendes,SupprimerTypeAmende,
            changeAmende,SaveAmende,modifierAmende,getAmendes,getAmende,supprimerAmende,
            changeRetrait,SaveRetrait,modifierRetrait,getRetrait,getRetraits,supprimerRetrait,
            changeDepense,SaveDepense,getDepense,getDepenses,modifierDepense,supprimerDepense,
            changePret,SavePret,getPret,getPrets,modifierPret,supprimerPret,
            changeCotisation,SaveCotisation,getCotisation,getCotisations,supprimerCotisation,modifierCotisation,
            }}> 
            {children} 
        </RoleContext.Provider>);
};
export default RoleContext;