import {useForm} from 'react-hook-form';

const HookForm = () => {

    const {register, handleSubmit, formState:{errors}, reset} = useForm();

    const newContact = (data) =>{
        console.log(data);
        reset();
    };

    return (
        <>
        <h1>Formulario con Hook Form</h1>
        <form onSubmit={handleSubmit(newContact)} noValidate>
            <fieldset>
            <label htmlFor='name-input' className='form-label'>
                Nombre
            </label>
            <input
                type='text'
                id='name-input'
                className='form-control'
                {...register('name', {
                    required: 'Este campo es requerido',
                    minLength: {
                        value: 3,
                        message: 'Este campo tiene un minimo de 3 caracteres'
                    },
                    maxLength: {
                        value: 100,
                        message: 'Este campo tiene un maximo de 100 caracteres'
                    },
                })}
            />
            <p className='text-danger'>{errors.name?.message}</p>
            </fieldset>
            <fieldset className='mt-2'>
            <label htmlFor='dni-input' className='form-label'>
                DNI
            </label>
            <input
                type='number'
                id='dni-input'
                className='form-control'
                {...register('dni', {
                    required: 'Este campo es requerido',
                    min: {
                        value: 1000000,
                        message: 'El minimo es 1000000'
                    },
                    max: {
                        value: 99000000,
                        message: 'El minimo es 99000000'
                    },
                })}
            />
            <p className='text-danger'>{errors.dni?.message}</p>
            </fieldset>
            <fieldset className='mt-2'>
            <label htmlFor='email-input' className='form-label'>
                Email
            </label>
            <input
                type='email'
                id='email-input'
                className='form-control'
                {...register('email', {
                    required: 'Este campo es requerido',
                    pattern:{
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: 'Debe ingresar un email valido'
                    },
                })}
            />
            <p className='text-danger'>{errors.email?.message}</p>
            </fieldset>
            <fieldset>
                <label htmlFor="gender-input">Genero</label>
                <select id='gender-input' {...register('genero',{
                    required: 'este campo es requerido',
                })}>
                    <option value="">Elige una opcion</option>
                    <option value="Femenino">Femenino</option>
                    <option value="Masculino">Masculino</option>
                </select>
                <p className='text-danger'>{errors.email?.message}</p>
            </fieldset>
            <button type='submit' className='btn btn-danger mt-3'>
            Enviar
            </button>
        </form>
        </>

    )
}

export default HookForm