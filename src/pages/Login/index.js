import React, { useContext } from 'react';
import { useFormik } from "formik";
import {Button, Form, FormGroup, Input} from "reactstrap";
import {LoginBoxWrapper} from "./style";
import logo from './../../assets/img/logo-economy.png'
import {context} from '../../services/AuthContext';
import history from "../../services/history";

const Login = () => {
    const { authenticated, handleLogin } = useContext(context);
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: values => {
            handleLogin(values);
        },
    });

    return (
        <LoginBoxWrapper>
            <div className={"loginBox"}>
                <h1>
                    <img id={"img-logo"} src={logo} alt={""}/>
                </h1>
                <h2>Login</h2>
                <div className={"form-login"}>
                    <Form method="post" onSubmit={formik.handleSubmit} autoComplete="off">
                        <FormGroup>
                            <Input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                            />
                        </FormGroup>
                        <Button
                            type={"submit"}
                            color="primary"
                            block
                        >Entrar</Button>
                        <span><a target="_blank" href="https://github.com/gwathsule/e-conomy-simulator">Github</a></span>
                            <a onClick={() => history.push('/cadastro')}>
                                <span className="pull-right">Registrar</span>
                            </a>
                    </Form>
                </div>
            </div>
        </LoginBoxWrapper>
    );
}

export default Login;