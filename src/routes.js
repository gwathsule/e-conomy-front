import React, {useContext} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Jogo from "./pages/Jogo";
import Login from "./pages/Login";
import ConfigurarJogo from "./pages/ConfigurarJogo";
import Relatorios from "./pages/Relatorios";
import NaoEncontrada from "./pages/NaoEncontrada";
import Cadastro from "./pages/Cadastro";
import {context} from './services/AuthContext';

function CustomRoute({ isPrivate, ...rest}) {
    const { loading, authenticated } = useContext(context);
    if(loading) {
        return <h1>Loading...</h1>
    }
    if (isPrivate && !authenticated) {
        return <Redirect to={'/login'}/>
    }
    return <Route {...rest}/>;
}

export default function Routes(){
    return(
        <Switch>
            <CustomRoute exact path={"/login"} component={Login}/>
            <CustomRoute exact path={"/cadastro"} component={Cadastro}/>
            <CustomRoute isPrivate exact path={"/"} component={Jogo}/>
            <CustomRoute isPrivate exact path={"/configurar-jogo"} component={ConfigurarJogo}/>
            <CustomRoute isPrivate exact path={"/relatorios"} component={Relatorios}/>
            <Route path={"*"} component={NaoEncontrada} />
        </Switch>
    );
}