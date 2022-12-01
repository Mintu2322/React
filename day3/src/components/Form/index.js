import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BasicForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  function handleClick(){
    const payload = {
        email: email,
        password: password
    }
    console.log(payload);
  }
  return (
    <Form>
        <h1>Form1</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control style={{ backgroundColor: 'green' }} type="email" placeholder="Enter email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm Password" />
      </Form.Group> */}
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      <Button variant="warning" type="submit" onClick={() => handleClick()}>
        Submit
      </Button>
    </Form>
  );
}

export default BasicForm;