import {Button, Col, Form,Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import 'react-phone-number-input/style.css'
import 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import PhoneInput from 'react-phone-input-2'

import { useState } from 'react';


export default function DroitRegister(){

    const [value, setValue] = useState()

    return (

        <div>
             <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label style={{fontWeight : "bolder", fontSize:"15px"}}>Votre nom : </Form.Label>
          <Form.Control type="text" placeholder="Entrer votre nom" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label style={{fontWeight : "bolder", fontSize:"15px"}}>Votre pénom : </Form.Label>
          <Form.Control type="text" placeholder="Votre prénom" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label style={{fontWeight : "bolder", fontSize:"15px"}}>Date de naissance : </Form.Label>
          <Form.Control type="date" placeholder="Entrer votre nom" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label style={{fontWeight : "bolder", fontSize:"15px"}}>Date d'entrée :</Form.Label>
          <Form.Control type="date" placeholder="Votre prénom" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridNbFemme">
          <Form.Label style={{fontWeight : "bolder", fontSize:"15px"}}>Nombre de Femme : </Form.Label>
          <Form.Control type="number" placeholder="Nombre de femme" defaultValue={0} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridSexe">
          <Form.Label style={{fontWeight : "bolder", fontSize:"15px"}}>Votre sexe : </Form.Label>
          <Form.Select aria-label="Default select example" >
                <option value="H">Homme</option>
                <option value="F">Femme</option>
         </Form.Select>
        </Form.Group>
      </Row>

      <Row>

    
            <Form.Group as={Col}>
                <Form.Label style={{fontWeight : "bolder", fontSize:"15px"}}> Téléphone 1 : </Form.Label>
                <PhoneInput placeholder="Entre votre numéro de téléphone" country={'cm'} value={value} onChange={setValue}/>
            </Form.Group>

            <Form.Group as={Col}>
                <Form.Label style={{fontWeight : "bolder", fontSize:"15px"}}> Téléphone 2 : </Form.Label>
                <PhoneInput placeholder="Entre votre numéro de téléphone" country={'cm'} value={value} onChange={setValue}/>
            </Form.Group>
       

      </Row>
      <br />

      <Row>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label style={{fontWeight : "bolder", fontSize:"15px"}}>Votre login : </Form.Label>
          <Form.Control type="text" placeholder="Entrer votre login" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label style={{fontWeight : "bolder", fontSize:"15px"}}>Votre mot de passe : </Form.Label>
          <Form.Control type="password" placeholder="Entrer votre mot de passe" />
        </Form.Group>

      </Row>
      
      <br />
      <Row>
      <Form.Group as={Col} className="mb-3" controlId="formGridAddress2">
        <Form.Label style={{fontWeight : "bolder", fontSize:"15px"}}>Adresse mail : </Form.Label>
        <Form.Control placeholder="Votre adresse mail" type='email' />
      </Form.Group>
      <Form.Group as={Col} className="mb-3" controlId="formGridAddress2">
        <Form.Label style={{fontWeight : "bolder", fontSize:"15px"}}>Votre photo : </Form.Label>
        <Form.Control placeholder="Votre photo" type='file' />
      </Form.Group>
      </Row>

      <br />

      <Button variant="primary" type="submit" className='btn btn-lg btn-block col-11'>
        Créer un compte
      </Button>
    </Form>
        </div>
    )

}