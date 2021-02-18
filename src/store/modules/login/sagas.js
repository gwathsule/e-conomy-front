import { put, all, takeLatest } from 'redux-saga/effects';
import {setLoginToken} from "./actions";
import history from "../../../services/history";

function* loginRequest({loginData}){
    const token = loginData.user.api_token;
    yield put(setLoginToken(token));
    history.push('/')
}

export default all([
    takeLatest('LOGIN_REQUEST', loginRequest),
]);


