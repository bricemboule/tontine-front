import { Row, Col, Form, Button} from "react-bootstrap"
import RoleContext from "../../Context/RoleContext"
import { useContext,useEffect } from "react"
import { useParams } from "react-router-dom";

export default function ModifierAmende(){

    const {changeAmende,typeAmendes,users,getAmende,amendeValue, modifierAmende, getTypeAmendes,getUsers} = useContext(RoleContext);
    let {id} = useParams();
    useEffect(()=>{
        getTypeAmendes();
        getAmende(id);
        getUsers();
   }, [])
   
    return (

        <div className="content-wrapper">
        <div className="content">
            <div className="container-fluid">
            <br/>
            <br/>
                <div className="row">
                
                    <Form onSubmit={modifierAmende} className='pt-2'>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridMembre">
                                <Form.Label style={{fontWeight : "bolder", fontSize:"15px"}}>Membre : <span className='etoile'>*</span>   </Form.Label>
                                <Form.Select aria-label="Default select example" value={amendeValue.membre} name='membre' onChange={changeAmende}>
                                    <option value=""></option>
                                    {
                                        users.map((user)=>{
                                            return (
                                                <option key={user.id} value={user.nom}>{user.nom}</option>
                                            )
                                        })

                                    }
                                </Form.Select>
                            </Form.Group>

                        </Row>


                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridMotif">
                                <Form.Label style={{ fontWeight: "bolder", fontSize: "15px" }}> Date sanction : <span className='etoile'>*</span></Form.Label>
                                <Form.Control type="date" value={amendeValue.dateSanction}  name='dateSanction' onChange={changeAmende}/>
                            </Form.Group>
                         
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridNom">
                                <Form.Label style={{ fontWeight: "bolder", fontSize: "15px" }}>Montant :  <span className='etoile'>*</span></Form.Label>
                                <Form.Control type="text" placeholder="Le montant de l'amende..." value={amendeValue.montant} name='montant' onChange={changeAmende} />
                             </Form.Group> 
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridSeance">
                                <Form.Label style={{fontWeight : "bolder", fontSize:"15px"}}>Amende : <span className='etoile'>*</span>   </Form.Label>
                                <Form.Select aria-label="Default select example"  name='typeSanction' value={amendeValue.typeSanction} onChange={changeAmende}>
                                    <option value=""></option>
                                    {
                                        typeAmendes.map((seance)=>{
                                            return (
                                                <option key={seance.id} value={seance.intitule}>{seance.intitule}</option>
                                            )
                                        })

                                    }
                                </Form.Select>
                            </Form.Group>

                        </Row>
                       <br/>
                        <Button variant="primary" type="submit" className='btn btn-block col-11 ml-4 mb-4'>
                            Modifier
                        </Button>
                        <br/>
                    </Form>
                   
                </div>
               
            </div>

        </div>
        </div>
    )
}