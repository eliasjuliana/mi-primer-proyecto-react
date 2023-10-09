import List from "../Form/List"
import Form3 from "../Form/Form3"

import { useEffect, useState } from "react";

//extraigo los contactos

const contactsLS =  JSON.parse(localStorage.getItem('contacts')) || [];


const Contactos = () => {
  const [contacts, setContacts] = useState(contactsLS);

  useEffect(()=>{
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  return (
    <>
      <Form3 setContacts={setContacts}/>
      <List contacts={contacts}/>
    </>
  )
}

export default Contactos