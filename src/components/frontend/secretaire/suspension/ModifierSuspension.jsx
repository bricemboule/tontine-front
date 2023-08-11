import { Row, Col, Form, Button} from "react-bootstrap"
import RoleContext from "../../Context/RoleContext"
import { useContext,useEffect } from "react"
import { useParams } from "react-router-dom";

export default function ModifierSuspension(){

    const {modifierSuspension,suspensionValue,changeSuspension,getUsers,getSeances,getSuspension, users, seances } = useContext(RoleContext);

   let {id} = useParams();
   console.log(id);
    useEffect(()=>{
        getSuspension(id);
        getUsers();
        getSeances();
    },[]);
    
    console.log(suspensionValue);
    return (

        <div className="content-wrapper">
        <div className="content">
            <div className="container-fluid">
            <br/>
            <br/>
            <br/>
                <div className="row">
                
                    <Form onSubmit={modifierSuspension} className='pt-2'>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridMembre">
                                <Form.Label style={{fontWeight : "bolder", fontSize:"15px"}}>Membre : <span className='etoile'>*</span>   </Form.Label>
                                <Form.Select aria-label="Default select example" value={suspensionValue.membre}  name='membre' onChange={changeSuspension}>
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
                                <Form.Label style={{ fontWeight: "bolder", fontSize: "15px" }}> Motif : <span className='etoile'>*</span></Form.Label>
                                <Form.Control as="textarea" rows={3} value={suspensionValue.motif} name='motif' onChange={changeSuspension}/>
                            </Form.Group>
                         
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridNom">
                                <Form.Label style={{ fontWeight: "bolder", fontSize: "15px" }}>Période :  <span className='etoile'>*</span></Form.Label>
                                <Form.Control type="text" value={suspensionValue.periode} placeholder="La période de suspension..." name='periode' onChange={changeSuspension} />
                             </Form.Group> 
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridSeance">
                                <Form.Label style={{fontWeight : "bolder", fontSize:"15px"}}>Seance : <span className='etoile'>*</span>   </Form.Label>
                                <Form.Select aria-label="Default select example" value={suspensionValue.seance}  name='seance' onChange={changeSuspension}>
                                    <option value=""></option>
                                    {
                                        seances.map((seance)=>{
                                            return (
                                                <option key={seance.id} value={seance.dateSeance}>{seance.dateSeance}</option>
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