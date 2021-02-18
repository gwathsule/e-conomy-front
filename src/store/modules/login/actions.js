export function loginRequest(loginData){
    return {type: 'LOGIN_REQUEST', loginData: loginData}
}

export function setLoginToken(token){
    return {type: 'SET_LOGIN_TOKEN', token: token}
}