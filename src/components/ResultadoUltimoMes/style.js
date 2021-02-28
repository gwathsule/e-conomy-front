import styled from 'styled-components/macro';

export const ResultadoUltimoMesBoxWrapper = styled.div`
    display: grid;
    
    .titulo{
      text-transform: uppercase;
      margin: 5%;
      text-align: center;
    }
    
    .tabela{
      
    }
    
    .nomeValor{
       max-width:110px;
    }
    
    .tabela tr{
      line-height: 14px;
    }

    .textoLongo{
      white-space:nowrap; 
      overflow:hidden;
      text-overflow:ellipsis;
    }
    
    .textoLongo:hover {
       overflow:visible;
       font-size: 10px;
       height: 14px;
    }
    
    .valorMonetario{
      font-size: 10px;
    }
    
    .valorPorcentagem{
    
    }
`;