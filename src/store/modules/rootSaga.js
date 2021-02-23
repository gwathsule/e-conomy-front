import { all } from 'redux-saga/effects'
import login from './login/sagas'
import jogo from './jogo/sagas'

export default function* rootSaga(){
    return yield all([
        login,
        jogo
    ])
}