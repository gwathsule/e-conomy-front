import React, {useContext, useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import { context } from '../../services/AuthContext'
import { jogoRequest } from '../../store/modules/jogo/actions'
import {clearToken, getToken} from "../../helpers/storeToken";
import Notification from '../../helpers/notification'

const Jogo = () => {
    const { handleLogout } = useContext(context);
    const dispatch = useDispatch();
    const token = getToken();
    var jogoState = useSelector(state => state.jogo);
    console.log(jogoState);
    useEffect(() => {
        if(jogoState.jogo === null) {
            try {
                dispatch(jogoRequest(token))
            } catch (error) {
                if (error.response) {
                    if(error.response.status == 401) {
                        clearToken();
                        handleLogout();
                    }
                }
                Notification('error', error.message);
            }
        }
    }, []);

    return (
        <div>
            <h1>Jogo</h1>
            <button type={"button"} onClick={handleLogout}>Sair</button>
        </div>
    );
}

export default Jogo;