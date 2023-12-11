import createAuthUser from "./CreateAuthUser.js";

export default function dummyAuthProvider() {

    let authUser;
    const getAuthUser = () => authUser;

    // TODO: Modify init function for authService
    //  get current user from token and other states (user, session, token, etc).

    const init = async() => {
        await delay(1000);
        const token = localStorage.getItem('token');
        // returning dummy user here
        // in reality, will fetch user details from auth token
        if (token) {
            authUser = JSON.parse(localStorage.getItem('authUser'));
            return authUser;
        }
    }

    // creates auth token
    const createAndSetAuthToken = () => {
        let token = 'yoda123yoda567';
        localStorage.setItem('token', token);
    }

    // eslint-disable-next-line no-unused-vars
    const login = async({ email, password }) => {
        await delay(2000);

        const isTokenExpired = false;
        if (isTokenExpired) {
            // perform login with email and password
            createAndSetAuthToken();
        }

        // should ideally happen on the backend by verifying the auth token
        // using local storage for now
        authUser = JSON.parse(localStorage.getItem('authUser'));
        return authUser;
    }

    const register = async({ username, email, password }) => {

        // TODO: figure out where to hash the password

        await delay(2000);
        // send request to register
        // try { } catch { }
        const randomUserID = Math.floor(Math.random() * 1000);
        authUser = createAuthUser({ id: randomUserID, username, email });
        createAndSetAuthToken();
        localStorage.setItem('authUser', JSON.stringify(authUser));
        return authUser;
    }

    let verificationCode; // only for demo

    const sendVerificationCode = async() => {
        await delay(2000);
        // server sends a 6 digit verification code
        verificationCode = Math.floor(100000 + Math.random() * 900000);
        console.log("Verification Code: ", verificationCode);
    }

    const verifyCode = async({ code }) => {
        await delay(2000);
        return code === verificationCode;
    }

    const updateUser = async({ user }) => {
        await delay(1000);
        authUser = user;
        localStorage.setItem('authUser', JSON.stringify(authUser));
        return authUser;
    }

    const logOut = async() => {
        await delay(2000);
        localStorage.removeItem('token');
        authUser = null;
    }

    return {
        init,
        getAuthUser,
        login,
        register,
        sendVerificationCode,
        verifyCode,
        updateUser,
        logOut,
    }
}

function delay(milliseconds) {
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}