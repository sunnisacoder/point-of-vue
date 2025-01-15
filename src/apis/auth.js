import {
    request
} from "../utils/request";

export function getJwtToken() {
    return localStorage.getItem("jwtToken");
}

export function setJwtToken(jwt) {
    localStorage.setItem("jwtToken", jwt);
}

export function saveUser(user) {
    localStorage.setItem("user", JSON.stringify(user));
}

export function getUser() {
    return JSON.parse(localStorage.getItem("user"));
}

export async function register(email, username, password) {
    // try {
    const result = await request("/api/auth/local/register", {
        method: "POST",
        auth: false,
        body: {
            email,
            username,
            password,
            name: username,
        },
    });
    // console.log(result);
    setJwtToken(result.jwt);
    saveUser(result.user);
    return result.user;
    // } catch (error) {
    //   throw error;
    // }
}

export async function login(email, password) {
    const result = await request("/api/auth/local", {
        method: "POST",
        auth: false,
        body: {
            identifier: email,
            password,
        },
    });
    result.user.likes = [34,35,36] 
    // const userLikes = result.user.likes;
    console.log('like',result.user.likes)
    setJwtToken(result.jwt);
    saveUser(result.user);
    return result.user;
    // } catch (error) {
    //   throw error;
    // }
}

export function logout() {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("user");
}