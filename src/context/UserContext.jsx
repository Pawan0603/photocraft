"use client";
import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const valideToken = async (TOKEN) => {
        try {
            let res = await axios.post('/api/validateToken', { token: TOKEN });
            setUser(res.data.data);
            console.log(res.data.data);
        } catch (error) {
            toast({
                variant: "destructive",
                description: error.response.data.message,
            })
            if (error.response.data.message === "jwt expired") {
                if (typeof window === 'undefined') return;
                localStorage.removeItem('token');
            }
            setUser(null);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (typeof window !== 'undefined' && user === null) {
            let Token = localStorage.getItem('token');
            if (!Token) return;
            valideToken(Token);
        }
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser, loading, valideToken }}>
            {children}
        </UserContext.Provider>
    );
}

export const useUser = () => useContext(UserContext);