export default function jogo(state = {jogo: null}, action) {
    switch (action.type) {
        case 'JOGO_REQUEST_SUCCESS':
            state = {...state, jogo: action.jogo};
            return state;
        default:
            return state;
    }
}