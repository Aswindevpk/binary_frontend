import { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
    let [user, setUser] = useState(() => localStorage.getItem('authTokens') ? jwtDecode(localStorage.getItem('authTokens')) : null)
    let [isAuthenticated, setisAuthenticated] = useState(() => localStorage.getItem('authTokens') ? true : false)
    let [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    const navigate = useNavigate();
    let [loading, setLoading] = useState(true)


    let registerUser = async (username, email, password) => {
        let response = await fetch("http://localhost:8000/api/accounts/register/", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'username': username, 'password': password, 'email': email })
        });
        let data = await response.json()

        if (response.ok) {
            navigate(`/verify-otp?email=${encodeURIComponent(email)}`)
        } else {
            return data;
        };
    };

    let genarateOtp = async (email) => {
        let response = await fetch("http://localhost:8000/api/accounts/genarate_otp/", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'email': email })
        });
        let data = await response.json()
        return data;
    }

    let forgotPass = async (email) => {
        try {
            let response = await fetch("http://localhost:8000/api/accounts/forgot_password/", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 'email': email })
            });
            let data;
            try {
                data = await response.json();
            } catch (e) {
                // If parsing fails, log the error and set data to null
                console.error("Error parsing JSON response:", e);
                data = null;
            }
            if (response.ok) {
                console.log('sucess')
                return data
            }
            return data
        } catch (error) {
            console.error("Error during link creation:", error);
        }
    };

    let forgotPassConfirm = async (token) => {
        try {
            let response = await fetch("http://localhost:8000/api/accounts/forgot_password_confirm/", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 'token': token })
            });
            let data;
            try {
                data = await response.json();
            } catch (e) {
                // If parsing fails, log the error and set data to null
                console.error("Error parsing JSON response:", e);
                data = null;
            }
            if (response.ok) {
                localStorage.setItem('resetToken', token)
                navigate('/reset-password')
                return data
            }
            return data
        } catch (error) {
            console.error("Error during link creation:", error);
        }
    };

    let ResetPass = async (password) => {
        try {
            let ResetToken = "";
            ResetToken = localStorage.getItem('resetToken');
            console.log(ResetToken)
            let response = await fetch("http://localhost:8000/api/accounts/reset_password/", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 'password': password, 'token': ResetToken })
            });
            let data;
            try {
                data = await response.json();
            } catch (e) {
                // If parsing fails, log the error and set data to null
                console.error("Error parsing JSON response:", e);
                data = null;
            }
            if (response.ok) {
                localStorage.removeItem('resetToken')
                return data
            }
            return data
        } catch (error) {
            console.error("Error during link creation:", error);
        }
    };

    let verifyOtp = async (email, otp) => {
        try {
            const values = { 'email': email, 'otp': otp }
            let response = await api.post("/accounts/verify_otp/", values);
            if (response.status !== 202) {
                console.log(response.message)
            }
            return response.data
        } catch (error) {
            console.log("Error during verify otp:", error)
        }
    }


    let loginUser = async (username, password) => {
        try{
            const values = { 'username': username, 'password': password };
            let response = await api.post("/accounts/login/", values);
            const data = response.data
            if (response.data.status) {
                setAuthTokens(data)
                setUser(jwtDecode(data.access))
                setisAuthenticated(true)
                localStorage.setItem('authTokens', JSON.stringify({ 'access': data.access, 'refresh': data.refresh }));
                navigate('/')
            }
            return data
        }catch (error){
            if (error.response){
                return error.response.data
            }
        }
    }

    let logoutUser = async () => {
        const refresh = authTokens?.refresh;
        try {
            const values = { 'refresh': refresh }
            let response = await api.post("/accounts/logout/", values);
            if (response.data.status) {
                setisAuthenticated(false)
                setAuthTokens(null);
                setUser(null);
                localStorage.removeItem('authTokens');
                navigate('/login');
            } else {
                console.log(response.data.message)
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
            console.log(response)
            if (response.status === 200) {
                setAuthTokens(data)
                setUser(jwtDecode(data.access))
                localStorage.setItem('authTokens', JSON.stringify({ 'access': data.access, 'refresh': data.refresh }));
            } else {
                logoutUser()
            }
        } catch (error) {
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
    }, [authTokens, loading])

    const contextData = {
        user: user,
        authTokens: authTokens,
        isAuthenticated: isAuthenticated,
        loginUser: loginUser,
        logoutUser: logoutUser,
        registerUser: registerUser,
        verifyOtp: verifyOtp,
        genarateOtp: genarateOtp,
        forgotPass: forgotPass,
        forgotPassConfirm: forgotPassConfirm,
        ResetPass: ResetPass,
    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    );
}