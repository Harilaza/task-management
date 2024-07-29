import React, {useEffect, useState} from 'react';
import {Input} from "../input/Input.tsx";
import {IFormProps, IInputFormProps} from "./interfaces/FormConfig.ts";
import {useHookForm} from "../../../application/hooks/useHookForm.ts";
export  const Form : React.FC = ({
    title,
    description,
    properties,
    submitAction,
    submitButton,
    cancelButton,
    cancelAction,
    actionClass,
    hasResetAction = false,
    resetButton,
    formClass,
} : IFormProps) => {
    const [initialValue, setInitialValue] = useState({});
    const getInitialValues = async (inputs) => {
        const values = {};
        await inputs.forEach(input => {
            values[input.name] = '';
        });
        return values;
    };
    const {
        formState,
        formErrors,
        handleChange,
        handleSubmit,
        resetForm
    } = useHookForm(initialValue);

    useEffect(() => {
        const fetchInitialValues = async () => {
            const values = await getInitialValues(properties);
            setInitialValue(values);
        };
        fetchInitialValues();
    }, [properties]);
    return (
        <>
            { initialValue && (
                <div className={formClass}>
                    <h2 className={title?.class}>{title?.text}</h2>
                    {description && (
                        <p className={description?.class}>{description?.text}</p>
                    )}
                    <form onSubmit={handleSubmit(submitAction)}>
                        {properties && properties.map((property: IInputFormProps, index: number) => (
                            <div key={index}>
                                <Input
                                    id={property.id}
                                    name={property.name}
                                    label={property.label}
                                    required={property.required}
                                    type={property.type}
                                    value={formState[property.name]}
                                    onchange={handleChange as never}
                                />
                                {formErrors[property.name] && <p className="text-red-500 text-xs ml-3">{formErrors[property.name]}</p>}
                            </div>

                        ))}
                        <div className={actionClass}>
                            <button type='submit'
                                    className={submitButton?.class}>{submitButton ? submitButton?.text : 'submit'}</button>
                            { hasResetAction && (
                                <button onClick={resetForm}
                                        className={resetButton?.class}>{resetButton?.text}</button>
                            )}
                            <button onClick={cancelAction ? cancelAction : resetForm}
                                    className={cancelButton?.class}>{cancelButton?.text}</button>

                        </div>
                    </form>
                </div>
            )}
        </>
    );
};
