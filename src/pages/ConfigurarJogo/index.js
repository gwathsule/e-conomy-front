import React from 'react';
import {isObject, useFormik} from "formik";
import {useSelector, useDispatch} from "react-redux";
import { ConfigurarJogoBoxWrapper} from "./style";
import {Button, Form, FormGroup, Input, Label, Col, Row} from "reactstrap";
import SeletorPersonagem from "../../components/SeletorPersonagem";
import api from '../../services/api'
import {clearToken} from "../../helpers/storeToken";
import history from "../../services/history";
import Notification from '../../helpers/notification'
import {jogoRequestSuccess} from '../../store/modules/jogo/actions'

const ConfigurarJogo = () => {
    const personagemState = useSelector(state => state.seletorPersonagem);
    const dispatch = useDispatch();
    async function criarJogo(values) {
        values = {
            ...values,
            index_pm: personagemState.index_pm,
            index_pf: personagemState.index_pf
        }

        await api.post('/novo-jogo', JSON.stringify(values))
            .then(({data}) => {
                dispatch(jogoRequestSuccess(data));
                history.push('/');
            })
            .catch((error) => {
                if (error.response) {
                    if(error.response.status == 401) {
                        clearToken();
                        history.push('/login');
                    }
                    if(error.response.data.error) {
                        if(isObject(error.response.data.error)) {
                            Object.values(error.response.data.error).forEach( (item ) => {
                                console.log(item);
                                Notification('error', item);
                            });
                        } else {
                            Notification('error', error.response.data.error);
                        }
                    }
                }
            });
    }
    const formik = useFormik({
        initialValues: {
            genero: 'M',
            pais: '',
            moeda: '',
            ministro: '',
        },
        onSubmit: values => {
            criarJogo(values);
        },
    });
    return (
        <ConfigurarJogoBoxWrapper>
            <div className={"loginBox"}>
                <div className={"configBox"}>
                    <div className={"configHeader"}>
                        <h1>CONFIGURAR JOGO</h1>
                        <hr/>
                    </div>
                    <Form method="post" onSubmit={formik.handleSubmit} autoComplete="off">
                        <div className={"seletor-personagem"}>
                            <Row>
                                <Col md={6}>
                                    <SeletorPersonagem sexo={'m'}/>
                                </Col>
                                <Col md={6}>
                                    <SeletorPersonagem sexo={'f'}/>
                                </Col>
                            </Row>
                            <Row className={""}>
                                <Col md={6}>
                                    <Label check>
                                        <Input
                                            type="radio"
                                            name="genero"
                                            value="M"
                                            onChange={formik.handleChange}
                                            defaultChecked
                                        />Masculino
                                    </Label>
                                </Col>
                                <Col md={6}>
                                    <Label check>
                                        <Input
                                            type="radio"
                                            name="genero"
                                            value="F"
                                            onChange={formik.handleChange}
                                        />Feminino
                                    </Label>
                                </Col>
                            </Row>
                        </div>
                        <Row className={"form-fields"} form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="pais">PAÍS</Label>
                                    <Input
                                        type="text"
                                        name="pais"
                                        id="pais"
                                        placeholder="Ex: Brasil, China..."
                                        value={formik.values.pais}
                                        onChange={formik.handleChange}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="moeda">MOEDA</Label>
                                    <Input
                                        type="text"
                                        name="moeda"
                                        id="moeda"
                                        placeholder="Inserir no plural"
                                        value={formik.values.moeda}
                                        onChange={formik.handleChange}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup>
                            <Label for="nome">MINISTRO(A) DA ECONOMIA</Label>
                            <Input
                                type="text"
                                name="ministro"
                                id="ministro"
                                placeholder="Esse será você!"
                                value={formik.values.ministro}
                                onChange={formik.handleChange}
                            />
                        </FormGroup>
                        <Button type={"submit"} color="primary" size="lg" block>PRONTO</Button>
                    </Form>
                </div>
            </div>
        </ConfigurarJogoBoxWrapper>
    );
}

export default ConfigurarJogo;