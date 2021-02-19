/**
 * link do video tutorial que usei: https://youtu.be/AClyxTbfI08
 * obs:. utilizar a versão versão 4.10.1 do pacote 'history'
 */

import React, {createContext, useState, useEffect} from 'react';
import api from './api';
import {setToken, getToken, clearToken} from '../helpers/storeToken'
import history from '../services/history'
import Notification from '../helpers/notification'

const context = createContext();

export default function AuthProvider({children}) {
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    //executa apenas quando o componente for montado
    useEffect(() => {
        const token = getToken();
        if(token) {
            api.defaults.headers.Authorization = `bearer ${token}`;
            setAuthenticated(true);
        }
        setLoading(false);
    }, []);

    async function handleLogin(values) {
        await api.post('/login', values)
            .then(({data}) => {
                setToken(data.token);
                api.defaults.headers.Authorization = `bearer ${data.token}`;
                setAuthenticated(true);
                history.push('/');
            })
            .catch((e) => {
                console.log('erro: ' + e.message);
                Notification('error', 'Login inválido');
            });
    }
    function handleLogout()
    {
        setAuthenticated(false);
        clearToken();
        api.defaults.headers.Authorization = undefined;
        history.push('/login');
    }

    return (
        <context.Provider value={{authenticated, handleLogin, handleLogout, loading}}>
            {children}
        </context.Provider>
    );
}

export { context};