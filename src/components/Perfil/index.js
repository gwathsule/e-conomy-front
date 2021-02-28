import React, {useContext} from 'react';
import {PerfilBoxWrapper} from './style';
import {Container, Col, Row, Button} from "reactstrap";
import {context} from "../../services/AuthContext";

const Perfil = ({
    titulo,
    srcImage,
}) => {
    const { handleLogout } = useContext(context);

    return(
        <PerfilBoxWrapper>
            <Container className={"perfilBox"}>
                <Row>
                    <Col><div className={"nomePerfil"}>{titulo}</div></Col>
                </Row>
                <Row>
                    <Col>
                        <img className={"avatarPerfil"} src={srcImage} alt={"avatar"}/>
                    </Col>
                    <Col className={"opcoesPerfil"}>
                        <Row><Button color="primary" size="sm" className={"botaoPerfil"} type={"button"}
                            onClick={() => {}}
                        >Novo Jogo</Button></Row>
                        <Row><Button color="primary" size="sm" className={"botaoPerfil"} type={"button"}
                            onClick={() => {}}
                        >Rel. Anuais</Button></Row>
                        <Row><Button color="primary" size="sm" className={"botaoPerfil"} type={"button"}
                            onClick={handleLogout}
                        >Sair</Button></Row>
                    </Col>
                </Row>
            </Container>
        </PerfilBoxWrapper>
    );
}

export default Perfil;