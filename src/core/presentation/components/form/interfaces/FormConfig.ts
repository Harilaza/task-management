export interface  IFormProps {
    title?: IElement ;
    description?: IElement;
    properties: IInputFormProps[];
    submitAction: ()=>void;
    submitButton: IElement;
    cancelButton?: IElement;
    cancelAction?: ()=>void;
    actionClass?: string;
    formClass?: string;
    hasResetAction: boolean;
    resetButton: IElement;
}

export interface IInputFormProps {
    id: string;
    name: string;
    label: string;
    placeholder?: string;
    value?: any;
    required: boolean;
    type: string;
    onchange: ()=> void;
}

export interface IElement {
    text?: string;
    class?: string;
}