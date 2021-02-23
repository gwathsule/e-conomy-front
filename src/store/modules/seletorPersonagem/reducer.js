export default function seletorPersonagem(state = {index_pm: 0, index_pf: 0}, action) {
    switch (action.type) {
        case 'SET_PERSONAGEM_FEMININO':
            state = {...state, index_pf: action.index};
            return state;
        case 'SET_PERSONAGEM_MASCULINO':
            state = {...state, index_pm: action.index};
            return state;
        default:
            return state;
    }
}