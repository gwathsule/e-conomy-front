export function clearToken() {
    localStorage.removeItem('e_conomy_user_token');
}

export function setToken(token) {
    localStorage.setItem('e_conomy_user_token', JSON.stringify(token));
}

export function getToken() {
    return JSON.parse(localStorage.getItem('e_conomy_user_token'));
}
