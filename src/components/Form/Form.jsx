import { useState } from "react";

const Form = () => {

        const [name, setName] = useState('');
        const [phone, setPhone] = useState('');
        const [email, setEmail] = useState('');

        const handleChangeName = (e) =>{
            setName(e.target.value)
        }

        const handleChangePhone = (e) =>{
            setPhone(e.target.value)
        }

        const handleChangeEmail = (e) =>{
            setEmail(e.target.value)
        }
    
        const handleSubmit = (e) =>{
            e.preventDefault();
            console.log(name, phone, email);
        }

        return (
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label htmlFor="name-input" className="form-label">Nombre</label>
                    <input type="text" id="name-input" value={name} className="form-control" onChange={handleChangeName} />
                </fieldset>
                <fieldset>
                    <label htmlFor="phone-input" className="form-label">Telefono</label>
                    <input type="tel" id="phone-input" value={phone} className="form-control" onChange={handleChangePhone} />
                </fieldset>
                <fieldset>
                    <label htmlFor="email-input" className="form-label">Email</label>
                    <input type="email" id="email-input" value={email} className="form-control" onChange={handleChangeEmail} />
                </fieldset>
                <button type="submit" className="btn btn-danger mt-3">Enviar</button>
            </form>
        )
    }

export default Form




//__________________USE REF________________//
// import { useRef } from "react";

// const Form = () => {

//     const inputRef = useRef();
//     const titleRef = useRef();

//     const handleSubmit = (e) =>{
//         e.preventDefault();

//         const value = inputRef.current.value;
//         console.log(value)

//         titleRef.current.style.color = 'red';

//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <fieldset>
//                 <label htmlFor="name-input" className="form-label">Nombre</label>
//                 <input ref={inputRef} type="text" id="name-input" className="form-control" />
//             </fieldset>
//             <h1 ref={titleRef}>este es un texto</h1>
//         </form>
//     )
// }


// export default Form