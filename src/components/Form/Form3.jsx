import { useRef, useState } from 'react';

import List from './List.jsx';
import { getRandomNumber } from '../helpers/helpers.js';

const Form3 = () => {
  const [contacts, setContacts] = useState([]);

  const nameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();

  const isValidData = (name, phone, email) => {
    // name
    if (name.trim().length < 2) {
      return false;
    }

    // phone
    if (isNaN(Number(phone))) {
      return false;
    }

    // email
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(email)) {
      return false;
    }

    // todo ok
    return true;
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const phone = phoneRef.current.value;
    const email = emailRef.current.value;

    if (isValidData(name, phone, email)) {
      alert('Felicidades!');
      setContacts([
        ...contacts,
        {
          id: getRandomNumber(0, 500),
          name: name,
          phone: phone,
          email: email,
        },
      ]);
    } else {
      alert('Revisá los campos');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor='name-input' className='form-label'>
          Nombre
        </label>
        <input
          ref={nameRef}
          type='text'
          id='name-input'
          name='name'
          className='form-control'
        />
      </fieldset>
      <fieldset className='mt-2'>
        <label htmlFor='phone-input' className='form-label'>
          Teléfono
        </label>
        <input
          ref={phoneRef}
          type='tel'
          id='phone-input'
          name='phone'
          className='form-control'
        />
      </fieldset>
      <fieldset className='mt-2'>
        <label htmlFor='email-input' className='form-label'>
          Email
        </label>
        <input
          ref={emailRef}
          type='email'
          id='email-input'
          name='email'
          className='form-control'
        />
      </fieldset>
      <button type='submit' className='btn btn-danger mt-3'>
        Enviar
      </button>
      <List contacts={contacts} />
    </form>
  );
};
export default Form3;

























// import { useRef, useState } from "react";
// import { getRandomNumber } from "../helpers/helpers.js";
// import List from "./List.jsx";

// const Form3 = () => {

//         const [contacts, setContacts] = useState();

//         const nameRef = useRef();
//         const phoneRef = useRef();
//         const emailRef = useRef();

//         const isValidData = (name, phone, email) =>{
//             if(name.trim().length < 2){
//                 return false;
//             }

//             if(isNaN(Number(phone))){
//                 return false;
//             }

//             const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//             if(!emailRegex.test(email)){
//                 return false;
//             }

//             return true;
//         };

//         const handleSubmit = (e) =>{
//             e.preventDefault();

//             const name = nameRef.current.value;
//             const phone = phoneRef.current.value;
//             const email = emailRef.current.value;

//             if(isValidData(name, phone, email)) {
//                 alert('felicidades');
//                 setContacts([
//                         ...contacts,
//                 {
//                     id: getRandomNumber(0, 500),
//                     name: name,
//                     phone: phone,
//                     email: email,
//                 },
//             ]);
//             } else {
//                 alert('revisa los campos')
//             }
//         };

//         console.log(contacts);

//         return (
//             <form onSubmit={handleSubmit}>
//                 <fieldset>
//                     <label htmlFor="name-input" className="form-label">Nombre</label>
//                     <input type="text" ref={nameRef} id="name-input" name='name' className="form-control"/>
//                 </fieldset>
//                 <fieldset>
//                     <label htmlFor="phone-input" className="form-label">Telefono</label>
//                     <input type="tel" ref={phoneRef} id="phone-input" name='phone' className="form-control"/>
//                 </fieldset>
//                 <fieldset>
//                     <label htmlFor="email-input" className="form-label">Email</label>
//                     <input type="email" ref={emailRef} id="email-input" name='email' className="form-control"/>
//                 </fieldset>
//                 <button type="submit" className="btn btn-danger mt-3">Enviar</button>
//                 <List contacts = {contacts}/>
//             </form>
//         )
//     }

// export default Form3