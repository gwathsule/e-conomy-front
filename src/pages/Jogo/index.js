import React, {useContext} from 'react';
import './style.css'
import { context } from '../../services/AuthContext'

const Jogo = () => {
    const { handleLogout } = useContext(context);
    return (
        <div>
            <h1>Jogo</h1>
            <button type={"button"} onClick={handleLogout}>Sair</button>
        </div>
    );
}

export default Jogo;