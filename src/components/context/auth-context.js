import axios from "axios";
import React, { useEffect, useState } from "react";

const AuthContext = React.createContext({
    name: "",
    userId: "",
    token: "",
    isLoggedIn: false,
    login: (token) => {},
    logout: () => {},
});

// Retrieve Stored Token From Local Storage
const retrieveStoredToken = () => {
    const storedToken = localStorage.getItem("token");

    return {
        token: storedToken,
    };
};

// Context Provider
export const AuthContextProvider = (props) => {
        const storedToken = retrieveStoredToken();
        let initialToken;

        if (storedToken) {
            initialToken = storedToken.token;
        }

        // Use State
        const [token, setToken] = useState(initialToken);
        const [user, setUser] = useState({
            name: "",
            userId: "",
        });
        const [isLoggedIn, setIsLoggedIn] = useState(!!initialToken);

        // Logout
        const logoutHandler = () => {
            setToken(null);
            localStorage.removeItem("token");
            setIsLoggedIn(false);
        };

        // Login
        const loginHandler = (token) => {
            setToken(token);
            localStorage.setItem("token", token);
            setIsLoggedIn(true);
        };

        // Context Value
        const contextValue = {
            name: user.name,
            userId: user.userId,
            token: token,
            isLoggedIn: isLoggedIn,
            login: loginHandler,
            logout: logoutHandler,
        };

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
