import { Row, Col, Form, Button} from "react-bootstrap"
import RoleContext from "../../Context/RoleContext"
import { useContext,useEffect } from "react"

export default function AjouterRetrait(){

    const {changeRetrait,seances,users, SaveRetrait, getSeances,getUsers,typeRetraits,getTypeRetraits} = useContext(RoleContext);

    useEffect(()=>{
        getSeances();
        getUsers();
        getTypeRetraits();
   }, [])

    return (

        <div className="content-wrapper">
        <div className="content">
            <div className="container-fluid">
            <br/>
            <br/>
            <br/>
                <div className="row">
                
                    <Form onSubmit={SaveRetrait} className='pt-2'>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridMembre">
                                <Form.Label style={{fontWeight : "bolder", fontSize:"15px"}}>Membre : <span className='etoile'>*</span>   </Form.Label>
                                <Form.Select aria-label="Default select example"  name='membre' onChange={changeRetrait}>
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
                                <Form.Label style={{ fontWeight: "bolder", fontSize: "15px" }}> Montant : <span className='etoile'>*</span></Form.Label>
                                <Form.Control type="number"  name='montant' onChange={changeRetrait}/>
                            </Form.Group>
                         
                        </Row>

                     
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridSeance">
                                <Form.Label style={{fontWeight : "bolder", fontSize:"15px"}}>Retrait : <span className='etoile'>*</span>   </Form.Label>
                                <Form.Select aria-label="Default select example"  name='type_retrait' onChange={changeRetrait}>
                                    <option value=""></option>
                                    {
                                        typeRetraits.map((type)=>{
                                            return (
                                                <option key={type.id} value={type.intitule}>{type.intitule}</option>
                                            )
                                        })

                                    }
                                </Form.Select>
                            </Form.Group>

                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridSeance">
                                <Form.Label style={{fontWeight : "bolder", fontSize:"15px"}}>Seance : <span className='etoile'>*</span>   </Form.Label>
                                <Form.Select aria-label="Default select example"  name='seance' onChange={changeRetrait}>
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