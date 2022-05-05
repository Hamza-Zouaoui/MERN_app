import React from 'react'
import { Button } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deletecontact } from '../redux/actions/ContactActions'

const ContactCard = ({contact}) => {
  const dispatch = useDispatch();
  return (
    <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>{contact.name}</Card.Title>
    <Card.Text>
      email: {contact.email}
      <br />
      age: {contact.age}
    </Card.Text>
    <Button variant="danger" onClick={() => dispatch(deletecontact(contact._id))}>delete</Button>
    <Link to={`/editcontact/${contact._id}`} ><Button variant="info">edit</Button></Link>
  </Card.Body>
</Card>
  )
}

export default ContactCard