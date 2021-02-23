import React from 'react';
import { ConfigurarJogoBoxWrapper} from "./style";
import {Button, Form, FormGroup, Input, Label, Col, Row} from "reactstrap";
import SeletorPersonagem from "../../components/SeletorPersonagem";

const ConfigurarJogo = () => {
    return (
        <ConfigurarJogoBoxWrapper>
            <div className={"loginBox"}>
                <div className={"configBox"}>
                    <div className={"configHeader"}>
                        <h1>CONFIGURAR JOGO</h1>
                        <hr/>
                    </div>
                    <Form>
                        <div className={"seletor-personagem"}>
                            <Row>
                                <Col md={6}>
                                    <SeletorPersonagem sexo={'m'}/>
                                </Col>
                                <Col md={6}>
                                    <SeletorPersonagem sexo={'f'}/>
                                </Col>
                            </Row>
                        </div>
                        <Row className={"form-fields"} form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="pais">PAÍS</Label>
                                    <Input type="text" name="pais" id="pais" placeholder="Ex: Brasil, China..." />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="moeda">MOEDA</Label>
                                    <Input type="text" name="moeda" id="moeda" placeholder="Inserir no plural" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup>
                            <Label for="nome">MINISTRO(A) DA ECONOMIA</Label>
                            <Input type="text" name="nome" id="nome" placeholder="Esse será você!"/>
                        </FormGroup>
                        <Button color="primary" size="lg" block>PRONTO</Button>
                    </Form>
                </div>
            </div>
        </ConfigurarJogoBoxWrapper>
    );
}

export default ConfigurarJogo;