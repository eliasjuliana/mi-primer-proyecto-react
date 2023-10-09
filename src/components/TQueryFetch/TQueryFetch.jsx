import { useMutation, useQuery } from "@tanstack/react-query";

import { getRandomNumber } from "../../helpers/helpers";
import { toast } from "sonner";

const url = import.meta.env.VITE_TODO_URL;

const getToDos = async () =>{
        const response = await fetch(url);
        const data = await response.json();

        return data;
};

const postToDo = async (body) =>{
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(body)
    });

    if(!response.ok) throw new Error('Ocurrio un error')
}
//QUERY llama api cuando se carga el componente

//MUTATION llama api cuando se produce un cambio en el componente ya cargado

getToDos();

const TQueryFetch = () => {
    const {data, isLoading, isError} = useQuery(['toDos'], getToDos);

    const addToDo = useMutation(postToDo);

    const handleClick = () =>{
        addToDo.mutate({
            id: getRandomNumber(0, 5000),
            userId: getRandomNumber(0, 5000),
            title: 'Hola nueva tarea',
            completed: false,
        })
    };

    if(isError){
        toast.error('Ocurrio un error')
    }

    if(addToDo.isError){
        toast.error('Ocurrio un error al agregar la tarea')
    }

    return (
        <>
            <button onClick={handleClick} className="btn btn-danger my-5">Agregar nueva tarea</button>
            {addToDo.isLoading && <h1>Agregando nueva tarea...</h1>}
            {isLoading && <h1>Cargando tareas...</h1>}
            <div>
                {data?.map((toDos) => <p key = {toDos.id}>{toDos.title}</p>)}
            </div>
        </>

    )
}

export default TQueryFetch