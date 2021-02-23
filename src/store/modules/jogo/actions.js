export function jogoRequest(token){
    return {type: 'JOGO_REQUEST', token: token}
}

export function jogoRequestSuccess(jogo){
    return {type: 'JOGO_REQUEST_SUCCESS', jogo: jogo}
}