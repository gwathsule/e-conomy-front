import { combineReducers } from "redux";
import login from './login/reducer'
import jogo from './jogo/reducer'

export default combineReducers({
    login,
    jogo,
});