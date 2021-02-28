import React from "react";
import {PainelPopularidadeBoxWrapper} from './style';
import {Col, Container, Row, Table} from "reactstrap";

const PainelPopularidade = ({
    titulo,
    p_empresarios,
    p_estado,
    p_trabalhadores,
    }) => {

    return(
        <PainelPopularidadeBoxWrapper>
            <Container>
                <Row>
                    <Col>
                        <div className={"titulo"}>{titulo}</div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={"tabela"}>
                            <Table size={"sm"}>
                                <tbody>
                                    <tr>
                                        <th scope={"row"}>Empresários</th>
                                        <th>{`${p_empresarios}%`}</th>
                                    </tr>
                                    <tr>
                                        <th scope={"row"}>Estado</th>
                                        <th>{`${p_estado}%`}</th>
                                    </tr>
                                    <tr>
                                        <th scope={"row"}>Trabalhadores</th>
                                        <th>{`${p_trabalhadores}%`}</th>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                </Row>
            </Container>
        </PainelPopularidadeBoxWrapper>
    );
}

export default PainelPopularidade
