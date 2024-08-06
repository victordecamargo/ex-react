import React, { useState } from "react";

interface minhaProps {
    title: string;
    description: string;
}



function Home(props: minhaProps) {
    const [valor, setValor] = useState(0);
    
    function handleClick() {
        setValor(valor + 1);
    
    }
    return (
        <>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <div>
                <p>O valor é: {valor}</p>
                <button onClick={handleClick}>Adicionar 1</button>
            </div>
        </>
    );
}



export default Home;