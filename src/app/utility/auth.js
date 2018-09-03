let token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZHNmampqYXNkZmEiLCJyb2xlIjoiYWRtaW4iLCJleHAiOjE1MzY3NTgyMDN9.zF1D6EAjkrnbw5lWbkYQtlGx4ZKmbyVpaH2_g4Ci9GXn84t-cI4fiNob2JRQDytMBNKDUx-iy1vDx3vkrTIqsA'
export const attachAuthHeader = (http) => {
    http.set('Authorization', `Bearer ${token}`)
    return http
}

export const setToken = (t) => {
    token = t
}
export const clearToken = () => {
    token = ''
}

export const getRole = () => {
    if (token !== '')
        return decodeJWT(token).role;
    else
        return ""
}
export const getUsername = () => {
    if (token !== '')
        return decodeJWT(token).sub;
    else
        return ""
}
export const isSignedIn = () => {
    return token !== ''
}



const decodeJWT = (token) => {
    if (token !== "") {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64));
    }
    return "";
}