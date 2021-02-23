import { combineReducers } from "redux";
import login from './login/reducer'
import jogo from './jogo/reducer'
import seletorPersonagem from './seletorPersonagem/reducer'

export default combineReducers({
    login,
    jogo,
    seletorPersonagem,
});