import React, { useState } from 'react';

interface IFormState {
    [key: string]: unknown;
}

interface IFormErrors {
    [key: string]: string;
}

interface IUseFormReturn {
    formState: IFormState;
    formErrors: IFormErrors;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (callback: (formState) => void) => (e: React.FormEvent<HTMLFormElement>) => void;
    resetForm: () => void;
}

export const useHookForm = (initialState: IFormState): IUseFormReturn => {
    const [formState, setFormState] = useState<IFormState>(initialState);
    const [formErrors, setFormErrors] = useState<IFormErrors>({});

    const validate = (name: string, value: unknown) => {
        if (!value) {
            setFormErrors((prevErrors) => ({
                ...prevErrors,
                [name]: 'Ce champ est nécessaire',
            }));
        } else {
            setFormErrors((prevErrors) => {
                const newErrors = { ...prevErrors };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
         setFormState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
         validate(name, value);
    };

    const handleSubmit = (callback: (formState: IFormState) => void) => (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (Object.keys(formErrors).length === 0) {
            callback(formState);
        }
    };

    const resetForm = () => {
        setFormState(initialState);
        setFormErrors({});
    };

    return {
        formState,
        formErrors,
        handleChange,
        handleSubmit,
        resetForm,
    };
};