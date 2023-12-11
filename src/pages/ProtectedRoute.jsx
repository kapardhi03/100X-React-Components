import { Navigate, Outlet } from "react-router-dom";
import TweetServicesProvider from "../context/TweetServicesContext.jsx";
import {useAuthUser} from "../hooks/authHooks.js";

export const ProtectedRoute = () => {
    const user = useAuthUser();

    if (!user) {
      return <Navigate to="/signup" />;
    }
  
    return(
        <TweetServicesProvider>
            <Outlet />
        </TweetServicesProvider>
    )
  };
  
