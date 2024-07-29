import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

interface User {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
}

export const useGetUser = () => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const userData = Cookies.get('user');
        if (userData) {
            setUser(JSON.parse(userData));
        }
    }, []);

    return user;
};