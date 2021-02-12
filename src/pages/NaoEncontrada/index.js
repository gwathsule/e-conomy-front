import React from 'react';
import {Link} from "react-router-dom";

const NaoEncontrada = () => {
    return (
        <div>
            <h1>Página não encontrada vaza</h1>
            <Link to={"/"}>Voltar a página principal</Link>
        </div>
    );
}

export default NaoEncontrada;