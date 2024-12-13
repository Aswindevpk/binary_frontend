import { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { api } from "@services/api";
import { checkTokenValidity, isTokenValid } from "./tokenUtils";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
    let [user, setUser] = useState(() => checkTokenValidity() ? jwtDecode(localStorage.getItem('authTokens')) : null)
    let [isAuthenticated, setisAuthenticated] = useState(() => checkTokenValidity() ? true : false)
    let [authTokens, setAuthTokens] = useState(() => checkTokenValidity() ? JSON.parse(localStorage.getItem('authTokens')) : null)
    const navigate = useNavigate();


    
    function setTokens(token){
        setAuthTokens(token)
        setUser(jwtDecode(token.access))
        setisAuthenticated(true)
        localStorage.setItem('authTokens', JSON.stringify({ 'access': token.access, 'refresh': token.refresh }));
    }


    let logoutUser = async () => {
        const refresh = authTokens?.refresh;
        try {
            let response = await api.post("/accounts/logout/", { 'refresh':refresh});
            if (response.status === 205) {
                setisAuthenticated(false)
                setAuthTokens(null);
                setUser(null);
                localStorage.removeItem('authTokens');
                navigate('/login');
            } 
        } catch (error) {
            console.error("Error during logout:", error);
        }
    };


    
    let updateToken = async () => {
        try {
            const values = { 'refresh': authTokens.refresh }
            let response = await api.post("/accounts/login/refresh/", values);
            let data = response.data
            if (response.status === 200) {
                setAuthTokens(data)
                setUser(jwtDecode(data.access))
                localStorage.setItem('authTokens', JSON.stringify({ 'access': data.access, 'refresh': data.refresh }));
            } else {
                logoutUser()
            }
        } catch (error) {
            logoutUser()
            console.log("Error during refreshing token :", error)
        }
    }

    useEffect(() => {
        const fourMinutes = 1000 * 60 * 29
        let interval = setInterval(() => {
            if (authTokens) {
                updateToken();
            }
        }, fourMinutes)
        return () => clearInterval(interval)
    }, [authTokens])

    const contextData = {
        user: user,
        authTokens: authTokens,
        isAuthenticated: isAuthenticated,
        logoutUser: logoutUser,
        setTokens:setTokens
    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    );
}