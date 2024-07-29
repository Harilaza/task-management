import React from 'react';
import {Form} from "../../core/presentation/components/form/Form.tsx";
import {SignInInput} from './SignInInput.ts';
import {useSignIn} from "../../core/application/hooks/useSignIn.ts";
import useSignUp from "../../core/application/hooks/useSignUp.ts";
import {useNavigation} from "react-router-dom";

export const SignIn = () => {
    const { signIn, error, verified } = useSignIn();
    const navigate = useNavigation();

    const submit = async (values) => {
        await signIn(
            values.email,
            values.password
        );
    };
    return (
        <>
            <div className="flex h-screen justify-center items-center bg-blue-500">
                <Form
                    formClass="p-2 border-2 border-gray-400 rounded-xl m-5"
                    title={{
                        text: 'Connexion',
                        class: 'text-center text-2xl'
                    }}
                    description={{
                        text: "Connectez-vous pour utiliser l'application",
                        class: 'text-center mb-3'
                    }}
                    properties={SignInInput}
                    submitAction={submit}
                    actionClass="flex justify-center items-center"
                    submitButton={{
                        text: "se connecter",
                        class: "px-5 py-2 bg-green-500 my-5 rounded-xl"
                    }}
                />
            </div>
        </>
    );
};