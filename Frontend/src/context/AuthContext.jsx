import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem("pos-user");
        return storedUser ? JSON.parse(storedUser) : null;
    })

    const login = (userData, token, rememberMe) => {
        setUser(userData);
        localStorage.setItem("pos-user", JSON.stringify(userData));
        localStorage.setItem("pos-token", token);

        if (rememberMe) {
            localStorage.setItem("pos-remember", "true");
        } else {
            localStorage.removeItem("pos-remember");
        }
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem("pos-user");
        localStorage.removeItem("pos-token");
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);
export default AuthProvider;