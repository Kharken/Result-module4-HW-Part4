import {InputProps} from "../../../types/input-types";

export const EmailProps: Partial<InputProps> = {
    id: 'email',
    name: 'email',
    type: "email",
    placeholder: 'Enter e-mail',
    labelValue: 'label for e-mail',
    inputDescription: 'this input for e-mail',
    errorDescription: 'e-mail is incorrect',
    hasAsterisk: false,
    isDisabled: false,
    inputSize: 'xl',
    inputBorderRadiusSize: 'xl',
    inputStyle: 'default',
    title: 'Ведите корректный email',
    pattern: 'a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$',
}

export const PasswordProps: Partial<InputProps> = {
    id: 'password',
    name: 'password',
    type: "password",
    placeholder: 'Enter password',
    labelValue: 'label for password',
    inputDescription: 'this input for password',
    errorDescription: 'password is incorrect',
    hasAsterisk: true,
    isDisabled: false,
    inputSize: 'xl',
    inputBorderRadiusSize: 'xl',
    inputStyle: 'default',
    title: 'Минимум 3 символа, 1 заглавная, 1 спецсимвол',
    pattern: '^(?=.*[A-Z])(?=.*[!@#$%^&*]).{3,}$',
}
