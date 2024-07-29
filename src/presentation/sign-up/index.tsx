import React, {useCallback} from 'react';
import {Form} from "../../core/presentation/components/form/Form.tsx";
import {SignUpInput} from "./SignUpInput.ts";
import useSignUp from "../../core/application/hooks/useSignUp.ts";

export const SignUp = () => {
    const { signUp, error, success } = useSignUp();

    const submit = async (values) => {
        await signUp(
            values.firstname,
            values.lastname,
            values.email,
            values.password
        );
    };
    return (
        <>
            <div className="flex h-screen justify-center items-center bg-blue-500">
                {error && <div className="text-red-500 mt-2">{error}</div>}
                {success && <div className="text-white mt-2">Vous êtes inscrit avec succès!</div>}
                <Form
                    formClass="p-2 border-2 border-gray-400 rounded-xl m-5"
                    title={{
                        text: 'Inscription',
                        class: 'text-center text-2xl'
                    }}
                    description={{
                        text: "Il faut s'incrire avant d'utiliser l'application",
                        class: 'text-center mb-3'
                    }}
                    properties={SignUpInput}
                    submitAction={submit}
                    actionClass="flex justify-center items-center"
                    submitButton={{
                        text: "s'inscrire",
                        class: "px-5 py-2 bg-green-500 my-5 rounded-xl"
                    }}
                />
            </div>
        </>
    );
};
