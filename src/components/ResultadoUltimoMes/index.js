import React from "react";
import {ResultadoUltimoMesBoxWrapper} from './style';
import {Col, Container, Row, Table} from "reactstrap";

const ResultadoUltimoMes = ({titulo, resultados}) => {
    return(
        <ResultadoUltimoMesBoxWrapper>
            <Container>
                <Row>
                    <Col>
                        <div className={"titulo"}>{titulo}</div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={"tabela"}>
                            <Table size={"sm"} striped>
                                <tbody>
                                <tr>
                                    <th className={"nomeValor"}>PIB</th>
                                    <th className={"valorMonetario"}>${resultados.pib.toFixed(2)}</th>
                                </tr>
                                <tr>
                                    <th className={"nomeValor textoLongo"}>YD (renda disponível)</th>
                                    <th className={"valorMonetario"}>${resultados.renda_disponivel.toFixed(2)}</th>
                                </tr>
                                <tr>
                                    <th className={"nomeValor"}>Consumo (PIB)</th>
                                    <th className={"valorMonetario"}>${resultados.consumo.toFixed(2)}</th>
                                </tr>
                                <tr>
                                    <th className={"nomeValor textoLongo"}>Investimento potencial</th>
                                    <th className={"valorMonetario"}>xxxxxxx</th>
                                </tr>
                                <tr>
                                    <th className={"nomeValor textoLongo"}>Investimento realizado</th>
                                    <th className={"valorMonetario"}>xxxxxxxxxx</th>
                                </tr>
                                <tr>
                                    <th className={"nomeValor textoLongo"}>Gastos governamentais</th>
                                    <th className={"valorMonetario"}>${resultados.gastos_governamentais}</th>
                                </tr>
                                <tr>
                                    <th className={"nomeValor"}>Transferências</th>
                                    <th className={"valorMonetario"}>${resultados.transferencias}</th>
                                </tr>
                                <tr>
                                    <th className={"nomeValor"}>Impostos</th>
                                    <th className={"valorMonetario"}>${resultados.impostos.toFixed(2)}</th>
                                </tr>
                                <tr>
                                    <th className={"nomeValor textoLongo"}>BS (déficit ou superavit)</th>
                                    <th className={"valorMonetario"}>${resultados.deficit_ou_superavit.toFixed(2)}</th>
                                </tr>
                                <tr>
                                    <th className={"nomeValor"}>Títulos</th>
                                    <th className={"valorMonetario"}>xxxxxxxxxxxxxxx</th>
                                </tr>
                                <tr>
                                    <th className={"nomeValor textoLongo"}>Juros da dívida interna</th>
                                    <th className={"valorMonetario"}>xxxxxxxxxxxx</th>
                                </tr>
                                <tr>
                                    <th className={"nomeValor"}>Caixa</th>
                                    <th className={"valorMonetario"}>xxxxxxxxxxxxxxx</th>
                                </tr>
                                <tr>
                                    <th className={"nomeValor"}>Dívida Total</th>
                                    <th className={"valorMonetario"}>xxxxxxxxxxxxx</th>
                                </tr>
                                <tr>
                                    <th className={"nomeValor textoLongo"}>Taxa de juros base</th>
                                    <th className={"valorPorcentagem"}>00%</th>
                                </tr>
                                <tr>
                                    <th className={"nomeValor"}>EFMK</th>
                                    <th className={"valorPorcentagem"}>00%</th>
                                </tr>
                                <tr>
                                    <th className={"nomeValor textoLongo"}>% de invest. em títulos</th>
                                    <th className={"valorPorcentagem"}>00%</th>
                                </tr>
                                <tr>
                                    <th className={"nomeValor"}>Inflação total</th>
                                    <th className={"valorPorcentagem"}>00%</th>
                                </tr>
                                <tr>
                                    <th className={"nomeValor textoLongo"}>Inflação de custo</th>
                                    <th className={"valorPorcentagem"}>00%</th>
                                </tr>
                                <tr>
                                    <th className={"nomeValor textoLongo"}>Inflação de demanda</th>
                                    <th className={"valorPorcentagem"}>00%</th>
                                </tr>
                                <tr>
                                    <th className={"nomeValor"}>Desemprego</th>
                                    <th className={"valorPorcentagem"}>00%</th>
                                </tr>
                                <tr>
                                    <th className={"nomeValor"}>PMGC</th>
                                    <th className={"valorPorcentagem"}>{resultados.pmgc}</th>
                                </tr>
                                <tr>
                                    <th className={"nomeValor textoLongo"}>K (Multiplicador)</th>
                                    <th className={"valorPorcentagem"}>{resultados.multiplicador_k_sem_imposto.toFixed(2)}</th>
                                </tr>
                                <tr>
                                    <th className={"nomeValor"}>Imposto (%)</th>
                                    <th className={"valorPorcentagem"}>{resultados.imposto_renda}%</th>
                                </tr>
                                <tr>
                                    <th className={"nomeValor textoLongo"}>K (com imposto)</th>
                                    <th className={"valorPorcentagem"}>{resultados.multiplicador_k_com_imposto.toFixed(2)}%</th>
                                </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                </Row>
            </Container>
        </ResultadoUltimoMesBoxWrapper>
    );
}

export default ResultadoUltimoMes