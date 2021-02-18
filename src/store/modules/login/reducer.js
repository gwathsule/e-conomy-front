import {setToken} from "../../../helpers/storeToken";

export default function login(state = [], action) {
    switch (action.type) {
        case 'SET_LOGIN_TOKEN':
            setToken(action.token)
            //todo redirect para a tela de login
            state = action.token;
            return state;
        default:
            return state;
    }
}