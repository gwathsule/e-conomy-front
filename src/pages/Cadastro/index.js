import React from 'react';
import {Link} from "react-router-dom";
import {Button, Form, FormGroup, Input} from "reactstrap";
import {CadastroBoxWrapper} from "./style";
import logo from './../../assets/img/logo-economy.png'

const Cadastro = () => {
    return (
        <CadastroBoxWrapper>
            <div className={"loginBox"}>
                <h1>
                    <img id={"img-logo"} src={logo} alt={""}/>
                </h1>
                <h2>Login</h2>
                <div className={"form-login"}>
                    <Form>
                        <FormGroup>
                            <Input type="text" name="nome" id="nome" placeholder="Nome" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="email" name="email" id="email" placeholder="Email" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="password" name="password" id="password" placeholder="Senha" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="password" name="password_repeat" id="password_repeat" placeholder="Repita a senha" />
                        </FormGroup>
                        <Button color="primary" block>Entrar</Button>
                        <Link to={"/"}>
                            <span className="pull-right">Já possui cadastro?</span>
                        </Link>
                    </Form>
                </div>
            </div>
        </CadastroBoxWrapper>
    );
}

export default Cadastro;