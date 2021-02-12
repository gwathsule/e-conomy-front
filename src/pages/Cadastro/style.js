import styled from 'styled-components/macro';

export const CadastroBoxWrapper = styled.div`
    margin-top: 10%;
    display: grid;
    justify-content: center;
    
    .loginBox input{
        border-radius: 0;
        height: 45px;
    }
    
    .loginBox button{
        border-radius: 0;
        height: 45px;
    }
    
    .loginBox {
        background-color: white;
        justify-content: center;
        align-items: center;
        width: 450px;
        padding: 0 40px 60px 40px;
        border-radius: 10px;
    }
    
    .loginBox a{
        text-decoration: none;
    }
    
    .loginBox h1{
        padding-top: 10%;
        text-align: center;
    }
    .loginBox h2{
        text-align: center;
        color: #FFF;
    }
    
    .pull-right{
        float: right;
    }
    
    #img-logo{
        max-width: 163px;
        max-height: 163px;
    }
`;