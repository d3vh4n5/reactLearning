import React, {useState} from "react";

const Listado = ()=>{
    const [texto, setTexto] = useState('')
    return (
        <div>
            <p>{texto}</p>
            <input onChange={(e : ChangeEvent<HTMLInputElement> )=>{setTexto(e.target.value)}} type="text" placeholder="introduce algo" value={texto} />
        </div>
    )
}

export default Listado