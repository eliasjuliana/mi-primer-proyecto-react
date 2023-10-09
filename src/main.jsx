import React from 'react'
import ReactDOM from 'react-dom/client'

// import CardsGallery from './components/CardsGallery/CardsGallery.jsx'
// import Contacts from './components/Contacts/Contacts'
// import Counter from './components/Counter/Counter.jsx'
// import Form from './components/Form/Form.jsx'
// import Form2 from './components/Form/Form2.jsx'
// import Form3 from './components/Form/Form3'
// import HookForm from './components/Form/HookForm.jsx'
// import Message from './components/Message/Message.jsx'
import Normalfetch from './components/NormalFetch/Normalfetch'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './index.css'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <CardsGallery /> */}
    {/* {< Counter />} */}
    {/* <Message /> */}
    {/* <Form/> */}
    {/* <Form2/> */}
    {/* <Form3/> */}
    {/* <Contacts /> */}
    {/* <HookForm/> */}
    <Normalfetch/>
  </React.StrictMode>,
);
