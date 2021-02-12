import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Jogo from "./pages/Jogo";
import Login from "./pages/Login";
import ConfigurarJogo from "./pages/ConfigurarJogo";
import Relatorios from "./pages/Relatorios";
import { autenticado } from "./auth";
import NaoEncontrada from "./pages/NaoEncontrada";

const PrivateRoute = ({ component: Component, ...rest}) => (
    <Route {...rest} render={ props => (
        autenticado() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{pathname: "/login", state: {from: props.location}}}/>
        )
    )}/>
);

export default function Routes(){
    return(
        <Switch>
            <Route exact path={"/login"} component={Login}/>
            <PrivateRoute exact path={"/"} component={Jogo}/>
            <PrivateRoute exact path={"/configurar-jogo"} component={ConfigurarJogo}/>
            <PrivateRoute exact path={"/relatorios"} component={Relatorios}/>
            <Route path={"*"} component={NaoEncontrada} />
        </Switch>
    );
}