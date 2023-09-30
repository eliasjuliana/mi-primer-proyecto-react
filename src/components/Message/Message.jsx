import { useEffect, useState } from "react";
import { getRandomNumber } from "../helpers/helpers";

const Message = () => {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState('0');

    //1 caso: al montarse el componente con array de dependencias vacio
    useEffect(()=>{
        console.log('hola')
    },
    []);

    //2 caso: al cambiar el estado de un componente
    useEffect(()=>{
        console.log('cambio numero')
    },
    [number]);

    //3 caso: al cambiar el estado de mas de un componente
    useEffect(()=>{
        console.log('cambio numero o count')
    },
    [number, count]);

    //4 caso: al desmontar un componente
    useEffect(()=>{

        return () =>{
            console.log('chau')
        }
        
    },
    [number, count]);

    const handleChange = ()=>{
        setCount(count + 1);
    };

    const handleNumberChange = () =>{
        setNumber(getRandomNumber(0, 500))
    };


    return (
        <>
        <p>{count}</p>
        <button onClick={handleChange}>+1</button>
        <h1>{number}</h1>
        <button onClick={handleNumberChange}>otro num</button>
        </>
    )
}

export default Message