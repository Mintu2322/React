import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BasicForm2() {
    const [formValues, setFormValues] = useState({
        email: '',
        password: ''
    })
    function handleChange(event) {
        // destructuring
        const { name, value } = event.target
        setFormValues({
            ...formValues,
            [name]: value
        })
    }
    function handleClick(){
        console.log(formValues);
      }
  return (
    <Form>
        <h1>Form 2</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" value={formValues.email} onChange={handleChange} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" value={formValues.password} onChange={handleChange} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleClick}>
        Submit
      </Button>
    </Form>
  );
}

export default BasicForm2;