import {Button, Col, Form,Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-phone-number-input/style.css'
import 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import PhoneInput from 'react-phone-input-2'

import { useState } from 'react';


export default function DroitRegister(){

    const [value1, setValue1] = useState()
    const [value, setValue] = useState()

    return (

        <div>
             <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridNom">
                      <Form.Label style={{fontWeight : "bolder", fontSize:"15px"}}>Votre nom : </Form.Label>
                      <Form.Control type="text" placeholder="Entrer votre nom" name='nom'/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPrenom">
                      <Form.Label style={{fontWeight : "bolder", fontSize:"15px"}}>Votre Prenom : </Form.Label>
                      <Form.Control type="text" placeholder="Votre prénom" name='prenom'/>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridNaissance">
                      <Form.Label style={{fontWeight : "bolder", fontSize:"15px"}}>Date de naissance : </Form.Label>
                      <Form.Control type="date" placeholder="Entrer votre date de naissance" name='date_naissance'/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEntre">
                      <Form.Label style={{fontWeight : "bolder", fontSize:"15px"}}>Date d'entrée :</Form.Label>
                      <Form.Control type="date" placeholder="Votre date d'entrée" name='date_entree'/>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridNbFemme">
                      <Form.Label style={{fontWeight : "bolder", fontSize:"15px"}}>Nombre de Femme : </Form.Label>
                      <Form.Control type="number" placeholder="Nombre de femme" defaultValue={0} name='nb_femme'/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridSexe">
                      <Form.Label style={{fontWeight : "bolder", fontSize:"15px"}}>Votre sexe : </Form.Label>
                      <Form.Select aria-label="Default select example"  name='sexe'>
                            <option value="H">Homme</option>
                            <option value="F">Femme</option>
                    </Form.Select>
                  </Form.Group>
                  
                </Row>

                <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridTelephone1">
                          <Form.Label style={{fontWeight : "bolder", fontSize:"15px"}}> Telephone 1 : </Form.Label>
                          <PhoneInput  country={'cm'} value={value} onChange={setValue} name='telephone1'/>
                      </Form.Group>
s
                      <Form.Group as={Col} controlId="formGridTelephone1">
                          <Form.Label style={{fontWeight : "bolder", fontSize:"15px"}}> Telephone 2 : </Form.Label>
                          <PhoneInput  country={'cm'} value={value1} onChange={setValue1} name='telephone2'/>
                      </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridLogin">
                      <Form.Label style={{fontWeight : "bolder", fontSize:"15px"}}>Votre login : </Form.Label>
                      <Form.Control type="text" placeholder="Entrer votre login" name='login'/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label style={{fontWeight : "bolder", fontSize:"15px"}}>Votre mot de passe : </Form.Label>
                      <Form.Control type="password" placeholder="Entrer votre mot de passe" name='password'/>
                    </Form.Group>
                </Row>
      
                <Row className="mb-3">
                    <Form.Group as={Col} className="mb-3" controlId="formGridEmail">
                      <Form.Label style={{fontWeight : "bolder", fontSize:"15px"}}>Adresse mail : </Form.Label>
                      <Form.Control placeholder="Votre adresse mail" type='email' name='email'/>
                    </Form.Group>

                    <Form.Group as={Col} className="mb-3" controlId="formGridPhoto">
                      <Form.Label style={{fontWeight : "bolder", fontSize:"15px"}}>Votre photo : </Form.Label>
                      <Form.Control placeholder="Votre photo" type='file' name='photo'/>
                    </Form.Group>
                </Row>
            
                <Button variant="primary" type="submit" className='btn btn-block col-11'>
                      Créer un membre
                </Button>
        </Form>
</div>
    )

}