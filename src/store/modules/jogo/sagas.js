import { put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api'
import {clearToken} from "../../../helpers/storeToken";
import history from "../../../services/history";
import {jogoRequestSuccess} from './actions';

function* jogoRequestSaga({token}){
    const gameInfo =  yield api.get('/get-jogo')
        .then(({data}) => {
            return data
        })
        .catch((error) => {
            if (error.response) {
                if(error.response.status == 401) {
                    clearToken();
                    history.push('/login');
                }
            }
            throw error;
        });

    if(gameInfo.jogo == null) {
        history.push('/configurar-jogo')
    }

    yield put(jogoRequestSuccess(gameInfo));
}

export default all([
    takeLatest('JOGO_REQUEST', jogoRequestSaga),
]);
