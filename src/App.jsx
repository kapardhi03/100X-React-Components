import { useEffect, useState, useRef } from "react";
import authService from "./services/auth/AuthService";
import AuthProvider from "./context/AuthContext.jsx";
import Routes from "./pages/Router";
import LoadingScreen from "./components/LoadingScreen";

export default function App () {
  const [loading, setLoading] = useState(true);
  const auth = useRef(null);

  useEffect(()=>{
    authService({providerName: 'dummyAuthProvider'})
        .then((service)=> {
          setLoading(false);
          auth.current = service;
        });
  }, [])

  if (loading) {
    return <LoadingScreen/>
  }

  return (
    <AuthProvider authService={auth.current}>
      <Routes/>
    </AuthProvider>
  )
}