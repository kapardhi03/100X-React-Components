import {createContext, useState} from "react";
import PropTypes from "prop-types";

export const AuthUserContext = createContext(null);
export const AuthActionsContext = createContext(null);

const AuthProvider = ({authService, children}) => {

    const [currentUser, setCurrentUser] = useState(authService.getAuthUser());

    const authActions = {
        login: async ({email, password}) => {
            const user = await authService.login({email, password});
            setCurrentUser(user);
        },
        register: async ({username, email, password}) => {
            const user = await authService.register({username, email, password});
            setCurrentUser(user);
        },
        logout: async () =>{
            await authService.logOut();
            setCurrentUser(null);
        },
        sendVerificationCode: authService.sendVerificationCode,
        verifyCode: async ({code}) => {
            return await authService.verifyCode({code});
        },
        updateUser: async ({user}) => {
            const updatedUser = await authService.updateUser({user});
            setCurrentUser(updatedUser);
        }
    }
    
    return(
        <AuthUserContext.Provider value={currentUser}>
            <AuthActionsContext.Provider value={authActions}>
                {children}
            </AuthActionsContext.Provider>
        </AuthUserContext.Provider>
    )
}

AuthProvider.propTypes = {
    authService: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired,
}

export default AuthProvider ;
