import { useState } from 'react';
import {compareSync} from "bcrypt-ts";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import {supabase} from "../supabase";

export const useSignIn = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);
    const [verified, setVerified] = useState(false);

    const signIn = async (email, password) => {
        setError(null);
        const { data, error } = await supabase
            .from('users')
            .select('*')
            .eq('email', email)
            .single();
        await verify(data, password, setError);
        if (error) {
            throw error;
        }
    };

    const verify = async (data, password, setError) => {
        if ((compareSync(password, data.password))) {
            Cookies.set('user', JSON.stringify(data), { expires: 7 });
            navigate('/user');
        } else setError('Erreur de Connexion');
    }

    return {
        signIn,
        error,
        verified
    };
};