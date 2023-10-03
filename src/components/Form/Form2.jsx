import { useState } from "react";

const Form2 = () => {

        const [formState, setFormState] = useState({
            name: '',
            phone: '',
            email: '',
        })

        const handleChange = (e) =>{

            const {name, value} = e.target;


            setFormState({
                ...formState,
                [name]: value,
            })
        }

        const handleSubmit = (e) =>{
            e.preventDefault();
            console.log(formState);
        }

        return (
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label htmlFor="name-input" className="form-label">Nombre</label>
                    <input type="text" id="name-input" name='name' value={formState.name} className="form-control" onChange={handleChange} />
                </fieldset>
                <fieldset>
                    <label htmlFor="phone-input" className="form-label">Telefono</label>
                    <input type="tel" id="phone-input" name='phone' value={formState.phone} className="form-control" onChange={handleChange} />
                </fieldset>
                <fieldset>
                    <label htmlFor="email-input" className="form-label">Email</label>
                    <input type="email" id="email-input" name='email' value={formState.email} className="form-control" onChange={handleChange} />
                </fieldset>
                <button type="submit" className="btn btn-danger mt-3">Enviar</button>
            </form>
        )
    }

export default Form2