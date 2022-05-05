import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addcontact } from '../redux/actions/ContactActions';

const AddContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control 
    onChange={(e) => setEmail(e.target.value)}
    value={email}
    type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>name</Form.Label>
    <Form.Control 
    onChange={(e) => setName(e.target.value)} 
    value={name}
    type="text" placeholder="Enter your username" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>age</Form.Label>
    <Form.Control 
    onChange={(e) => setAge(e.target.value)}
    value={age}
    type="number" placeholder="Enter age" />
  </Form.Group>

  <Button variant="primary"
  onClick={() => {
    dispatch(addcontact({ name, email, age }));
    navigate("/contacts")
  }} >
    Add
  </Button>
</Form>
    </div>
  )
}

export default AddContact