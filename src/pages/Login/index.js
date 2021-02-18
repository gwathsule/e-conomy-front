import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from "formik";
import {useSelector} from "react-redux";
import axios from 'axios';
import {Link, useHistory} from "react-router-dom";
import {Button, Form, FormGroup, Input} from "reactstrap";
import {LoginBoxWrapper} from "./style";
import logo from './../../assets/img/logo-economy.png'
import { BaseUrl } from '../../helpers/settings';
import Notification from '../../helpers/notification'
import {loginRequest} from '../../store/modules/login/actions'

const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const User = useSelector(state => state.login);

    useEffect(() => {
        if (User.profile === 'user') {
            history.replace('/');
        }
    });

    const handleSignin = values => {
        axios
            .get(`${BaseUrl}/getToken`, values)//todo mudar pra post
            .then(({data}) => {
                if(data.errors) {
                    Notification('error', 'erro ao efetuar login');
                } else {
                    if(data.logado) {
                        dispatch(loginRequest(data));
                    } else {
                        Notification('error', 'login inválido');
                    }
                }
            })
            .catch((e) => {
                console.log('erro: ' + e.message);
            });
    };

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: values => {
            handleSignin(values);
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
                        <Button type={"submit"} color="primary" block>Entrar</Button>
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