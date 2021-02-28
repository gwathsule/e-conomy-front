import styled from 'styled-components/macro';

export const PerfilBoxWrapper = styled.div`
    display: grid;
    justify-content: center;
    width: 100%;
    
    .nomePerfil{
      font-weight: bold;
      text-align: center;
    }
    
    .avatarPerfil{
      width: 100px;
      height: 100px;
      border-radius: 100%;
      margin-top: 3%;
      margin-right: 10px;
    }
    
    .opcoesPerfil{
      align-items: center;
      margin-top: 3%;
    }
    
    .botaoPerfil{
      margin-top: 5px;
      width: 100%;
      font-size: 12px;
    }
`;
