import { useContext } from "react";
import {AuthActionsContext, AuthUserContext} from "../context/AuthContext.jsx";

export const useAuthUser = () => useContext(AuthUserContext);
export const useAuthService = () => useContext(AuthActionsContext);