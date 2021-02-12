import styled from 'styled-components/macro';

export const ConfigurarJogoBoxWrapper = styled.div`
    margin-top: 10%;
    display: grid;
    justify-content: center;
    width: 100%;
    
    .configHeader hr{
        width: 70%;
    }
    
    .seletor-personagem{
        width: 600px;
        height: 300px;
        background-color: #29ABE2;
    }
    
    .configBox {
        background-color: white;
        justify-content: center;
        align-items: center;
        padding: 0 40px 60px 40px;
        border-radius: 10px;
    }
    
    .form-fields{
        padding-top: 20px;
    }
    
    .configBox h1{
        padding-top: 10%;
        text-align: center;
    }
    .configBox h2{
        text-align: center;
        color: #FFF;
    }
`;