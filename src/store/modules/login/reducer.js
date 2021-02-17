export default function login(state = [], action) {
    switch (action.type) {
        case 'LOGIN_REQUEST':
            console.log(action.token)
            return state;
        default:
            return state;
    }
}