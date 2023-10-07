import List from "../Form/List"
import Form3 from "../Form/Form3"

import { useState } from "react";


const Contactos = () => {
  const [contacts, setContacts] = useState([]);

  return (
    <>
      <Form3 setContacts={setContacts}/>
      <List contacts={contacts}/>
    </>
  )
}

export default Contactos