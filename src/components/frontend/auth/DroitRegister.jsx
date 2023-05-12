import {Button, Col, Form,Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'


export default function DroitRegister(){

    return (

        <div>
             <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Votre nom</Form.Label>
          <Form.Control type="text" placeholder="Entrer votre nom" size='lg'/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Votre pénom</Form.Label>
          <Form.Control type="text" placeholder="Votre prénom" size='lg'/>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Date de naissance</Form.Label>
          <Form.Control type="date" placeholder="Entrer votre nom" size='lg'/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Date d'entrée</Form.Label>
          <Form.Control type="date" placeholder="Votre prénom" size='lg'/>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Nombre de Femme</Form.Label>
          <Form.Control type="number" placeholder="Nombre de femme" value={1} size='lg'/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Votre sexe</Form.Label>
          <Form.Select aria-label="Default select example" >
                <option value="H">Homme</option>
                <option value="F">Femme</option>
         </Form.Select>
        </Form.Group>
      </Row>

      <Row>

    

       

      </Row>

      <Row>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Votre login</Form.Label>
          <Form.Control type="text" placeholder="Entrer votre login" size='lg'/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Votre mot de passe</Form.Label>
          <Form.Control type="password" placeholder="Entrer votre mot de passe" size='lg'/>
        </Form.Group>

      </Row>
      
      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Adresse mail</Form.Label>
        <Form.Control placeholder="Votre adresse mail" type='email' size='lg'/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Votre photo</Form.Label>
        <Form.Control placeholder="Votre photo" type='file' size='lg'/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Créer un compte
      </Button>
    </Form>
        </div>
    )

}