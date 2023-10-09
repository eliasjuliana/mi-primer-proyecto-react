import { useEffect, useState } from "react";

import { getRandomNumber } from "../../helpers/helpers";

const url = import.meta.env.VITE_TODO_URL;

const getToDos = async () =>{
    try{
        const response = await fetch(url);
        const data = await response.json();

        return data;
    } catch (err) {
        console.error(err);
        return null;
    }
};

const postToDo = async (body) =>{
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(body)
        });

    if(!response.ok) console.error('Ocurrio un error')
    } catch (err) {
        console.error(err);
    }

}
//QUERY llama api cuando se carga el componente

//MUTATION llama api cuando se produce un cambio en el componente ya cargado

getToDos();

const Normalfetch = () => {
    const [toDos, setToDos] = useState([]);

    useEffect (() =>{
        getToDos().then((data) => {
            if(data){
                setToDos(data)
            }
        } )
    }, [])

    const handleClick = () =>{
        postToDo({
            id: getRandomNumber(0, 5000),
            userId: getRandomNumber(0, 5000),
            title: 'Hola nueva tarea',
            completed: false,
        })
    }

    return (
        <>
            <button onClick={handleClick} className="btn btn-danger my-5">Agregar nueva tarea</button>
            <div>
                {toDos.map((toDos) => <p key = {toDos.id}>{toDos.title}</p>)}
            </div>
        </>

    )
}

export default Normalfetch