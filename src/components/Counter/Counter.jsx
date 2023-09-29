import { useState } from "react";

const Counter = () => {

    const [count, setCount] = useState(0);

    //1 valor es valor inicial
    //2 valor ejecuta la funcion setCount
    const handleChange = (quantity) =>{
        // count =  count + quantity;
        setCount(count + quantity)
        console.log(count);
    }

  return (
    <div>
        <h1 className="display-1 text-center">{count}</h1>
        <div className="d-flex gap-2"> 
        <button type="button" className="btn btn-danger" onClick={()=>handleChange(-1)}>-1</button>
        <button type="button" className="btn btn-danger" onClick={()=>handleChange(1)}>+1</button>
        </div>
    </div>
  )
}

export default Counter