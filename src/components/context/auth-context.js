import React, { useState } from "react";

const AuthContext = React.createContext({
    name: "",
    userId: "",
    token: "",
    isLoggedIn: false,
    login: () => {},
    logout: () => {},
});

const retrieveStoredToken = () => {
    const storedToken = localStorage.getItem("token");

    return {
        token: storedToken,
    };
};

export const AuthContextProvider = (props) => {
        const storedToken = retrieveStoredToken();
        let initialToken;

        if (storedToken) {
            initialToken = storedToken.token;
        }

        const [token, setToken] = useState(initialToken);
        const [user] = useState({
            name: "",
            userId: "",
        });
        const [isLoggedIn, setIsLoggedIn] = useState(!!initialToken);

        const logoutHandler = () => {
            setToken(null);
            localStorage.removeItem("token");
            setIsLoggedIn(false);
        };

        const loginHandler = (token) => {
            setToken(token);
            localStorage.setItem("token", token);
            setIsLoggedIn(true);
        };

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