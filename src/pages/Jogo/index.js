import React, {useContext, useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import { context } from '../../services/AuthContext';
import { jogoRequest } from '../../store/modules/jogo/actions';
import {clearToken, getToken} from "../../helpers/storeToken";
import Notification from '../../helpers/notification';
import {JogoBoxWrapper} from "./style";
import {Col, Container, Row} from "reactstrap";
import Perfil from "../../components/Perfil";

const Jogo = () => {
    const { handleLogout } = useContext(context);
    const dispatch = useDispatch();
    const token = getToken();
    var { jogo } = useSelector(state => state.jogo);
    useEffect(() => {
        if(jogo === null) {
            try {
                dispatch(jogoRequest(token))
            } catch (error) {
                if (error.response) {
                    if(error.response.status == 401) {
                        clearToken();
                        handleLogout();
                    }
                }
                Notification('error', error.message);
            }
        }
    }, []);
    if(jogo === null) {
        return (
            <div></div>
        );
    }
    console.log(jogo);
    const nomeMinistro = jogo.jogo.genero == 'F' ? `Ministra ${jogo.jogo.ministro}` : `Ministro ${jogo.jogo.ministro}`;
    return (
        <JogoBoxWrapper>
            <Container className={"boxJogo"}>
                <Row >
                    <Col xs={12} className={"boxGrafico"}>
                        boxGrafico
                    </Col>
                </Row>

                <Row>
                    <Col xs={3}>
                        <Row>
                            <div className={"boxPerfil"}>
                                <Perfil titulo={nomeMinistro} srcImage={jogo.url_personagem}/>
                            </div>
                        </Row>
                        <Row><div className={"boxUltimoMes"}>boxUltimoMes</div></Row>
                    </Col>
                    <Col xs={6}><div className={"boxTimeline"}>boxTimeline</div></Col>
                    <Col xs={3}>
                        <Row><div className={"boxPopularidade"}>boxPopularidade</div></Row>
                        <Row><div className={"boxMedidas"}>boxMedidas</div></Row>
                    </Col>
                </Row>
            </Container>
        </JogoBoxWrapper>
    );
}

export default Jogo;