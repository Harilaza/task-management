import { useState, useCallback } from 'react';
import { genSaltSync, hashSync } from "bcrypt-ts";
import {supabase} from "../supabase";
import {useNavigate} from "react-router-dom";
const salt = genSaltSync(10);

const useSignUp = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const signUp = async (firstname, lastname, email, password) => {
        setError(null);
        try {
            const hashedPassword = hashSync(password, salt);
            const { error } = await supabase
                .from('users')
                .insert([{
                    firstname: firstname,
                    lastname: lastname,
                    email: email,
                    password: hashedPassword
                }]);
            await toSignIn(error);
            if (error) {
                throw error;
            }
        } catch (error) {
            setError(error.message);
        }
    };
    const toSignIn = (error) => {
        if (!error) {
            navigate('/sign-in');
        }
    }

    return {
        signUp,
        error,
        success
    };
};

export default useSignUp;