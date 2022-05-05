import React from 'react';
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate, } from "react-router-dom";
import { editcontact, getonecontact } from "../redux/actions/ContactActions";

const EditContact = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(() => {
    dispatch(getonecontact(id));
  }, []);
  const contact = useSelector((state) => state.ContactReducer.contact);

  const [name, setName] = useState(contact.name);
  const [email, setEmail] = useState(contact.email);
  const [age, setAge] = useState(contact.age);

  useEffect(() => {
    setName(contact.name);
    setEmail(contact.email);
    setAge(contact.age);
  }, [contact]);
  

  return (
    <div>
      <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>name</Form.Label>
    <Form.Control onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder="Enter your username" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>age</Form.Label>
    <Form.Control onChange={(e) => setAge(e.target.value)} value={age} type="number" placeholder="Enter age" />
  </Form.Group>

  <Button variant="primary" 
    onClick={() => { 
      dispatch(editcontact(id, {name, email, age})); 
      navigate("/contacts");
    }} 
    >
    Edit
  </Button>
</Form>
    </div>
  )
}

export default EditContact