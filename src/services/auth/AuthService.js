import dummyAuthProvider from "./DummyAuthProvider.js";

const authProviders = {
    'dummyAuthProvider': dummyAuthProvider,
    'oAuthProvider' : null,
}

// Common interface for all auth providers. 
// Can make use of any provider (firebase, oAuth etc)
const authService = async ({providerName}) => {

    const provider = authProviders[providerName]();

    // TODO: Add init function for authService. initialise auth service
    // and get current state (user, session, token, etc).

    const init =  async () => await provider.init();
    await init();

    const getAuthUser = () =>
        provider.getAuthUser();

    const login = async ({email, password}) =>
        await provider.login({email, password});

    const register = async ({username, email, password}) =>
        await provider.register({username, email, password});

    const sendVerificationCode = async () =>
        await provider.sendVerificationCode();

    const verifyCode = async ({code}) =>
        await provider.verifyCode({code});

    const updateUser = async ({user}) =>
        await provider.updateUser({user})

    const logOut = async () =>
        await provider.logOut();

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

export default authService
