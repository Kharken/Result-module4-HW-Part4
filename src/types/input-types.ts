import { ChangeEvent, JSX } from 'react';

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type InputStyle = 'default' | 'filled' | 'unstyled';
type InputId = 'email' | 'password' | 'email2' | 'password2' | 'password3';
export type InputName = 'email' | 'password' | 'nickName' | 'userName' | 'confirmedPassword' | 'gender';

export interface InputProps {
    id: InputId;
    type: 'email' | 'password' | 'text' | 'radio' | 'checkbox';
    placeholder: string;
    labelValue: string;
    inputDescription: string;
    errorDescription: string;
    hasAsterisk: boolean;
    isDisabled: boolean;
    inputSize: Size;
    inputBorderRadiusSize: Size;
    inputStyle: InputStyle;
    name: InputName;
    handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
    value: string;
    title: string;
    pattern: string;
    checked: boolean;
    isButtonDisabled: boolean;
    setIsButtonDisabled: (arg: boolean) => void;
    icon: () => JSX.Element;
}

export interface InputState {
    email: string;
    password: string;
}

export interface DisabledProps {
    disabled: boolean;
    setIsButtonDisabled: (arg: boolean) => void;
}
