import {getToken} from "./helpers/storeToken";

export const autenticado = () => {
    const token = getToken();
    if(token === null || token === undefined)
        return false;
    else
        return token;
}