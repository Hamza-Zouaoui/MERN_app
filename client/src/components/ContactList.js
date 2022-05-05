import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getcontacts } from '../redux/actions/ContactActions';
import ContactCard from './ContactCard';

function ContactList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getcontacts());
  }, []);

  const contacts = useSelector((state) => state.ContactReducer.contacts );
  return (
    <div 
    style={{
    display: "flex", 
    justifyContent: "space-around", 
    flexWrap: "wrap"
    }} >
      {contacts.map((contact) => <ContactCard contact={contact} />)}</div>
  )
};

export default ContactList; 