import { Row, Col, Form, Button} from "react-bootstrap"
import RoleContext from "../../Context/RoleContext"
import { useContext,useEffect } from "react"

export default function AjouterAmende(){

    const {changeSuspension,typeAmendes,users, SaveAmende, getTypeAmendes,getUsers} = useContext(RoleContext);

    useEffect(()=>{
        getTypeAmendes();
        getUsers();
   }, [])
   
    return (

        <div className="content-wrapper">
        <div className="content">
            <div className="container-fluid">
            <br/>
            <br/>
            <br/>
                <div className="row">
                
                    <Form onSubmit={SaveAmende} className='pt-2'>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridMembre">
                                <Form.Label style={{fontWeight : "bolder", fontSize:"15px"}}>Membre : <span className='etoile'>*</span>   </Form.Label>
                                <Form.Select aria-label="Default select example"  name='membre' onChange={changeSuspension}>
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
                                <Form.Control type="date"  name='dateSanction' onChange={changeSuspension}/>
                            </Form.Group>
                         
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridNom">
                                <Form.Label style={{ fontWeight: "bolder", fontSize: "15px" }}>Montant :  <span className='etoile'>*</span></Form.Label>
                                <Form.Control type="text" placeholder="Le montant de l'amende..." name='montant' onChange={changeSuspension} />
                             </Form.Group> 
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridSeance">
                                <Form.Label style={{fontWeight : "bolder", fontSize:"15px"}}>Amende : <span className='etoile'>*</span>   </Form.Label>
                                <Form.Select aria-label="Default select example"  name='typeSanction' onChange={changeSuspension}>
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
                            Enregistrer
                        </Button>
                        <br/>
                    </Form>
                   
                </div>
               
            </div>

        </div>
        </div>
    )
}