export function clearToken() {
    localStorage.removeItem('e_conomy_user_token');
}

export function setToken(token) {
    localStorage.setItem('e_conomy_user_token', token);
}

export function getToken() {
    return localStorage.getItem('e_conomy_user_token');
}
