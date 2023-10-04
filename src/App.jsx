import React, { useState, useEffect } from 'react'
import uniqid from 'uniqid';
import Header from './components/Header'
import AddContacts from './components/AddContact'
import ContactList from './components/ContactList'
import './App.css'

function App() {
  const LOCAL_STORAGE_KEY = "CONTACTS"
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []
  })
  
  const addContactHandler = (contact) => {
    setContacts([...contacts, {id: uniqid(),...contact}])
  }
  
  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => contact.id !== id);
    setContacts(newContactList);
  };

  useEffect(() => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts])

  

  
  return (
    <>
    <Header />
      <AddContacts addContactHandler={addContactHandler} />
      <h1 className='pt-10 border-t-[3px] text-center text-3xl font-medium'>Contacts</h1>
      <ContactList contacts={contacts} removeContactHandler={ removeContactHandler } />
    </>
  )
}

export default App
