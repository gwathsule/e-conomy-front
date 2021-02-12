import React from 'react';
import {Link} from "react-router-dom";
import {Button, Form, FormGroup, Input} from "reactstrap";
import {LoginBoxWrapper} from "./style";
import logo from './../../assets/img/logo-economy.png'

const Login = () => {
    return (
        <LoginBoxWrapper>
            <div className={"loginBox"}>
                <h1>
                    <img id={"img-logo"} src={logo} alt={""}/>
                </h1>
                <h2>Login</h2>
                <div className={"form-login"}>
                    <Form>
                        <FormGroup>
                            <Input type="email" name="email" id="email" placeholder="Email" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="password" name="password" id="password" placeholder="Password" />
                        </FormGroup>
                        <Button color="primary" block>Entrar</Button>
                        <span><a target="_blank" href="https://github.com/gwathsule/e-conomy-simulator">Github</a></span>
                        <Link to={"/cadastro"}>
                            <span className="pull-right">Registrar</span>
                        </Link>
                    </Form>
                </div>
            </div>
        </LoginBoxWrapper>
    );
}

export default Login;