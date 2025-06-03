import { InputProps} from "../../../../../types/input-types";
import { Icon } from '../icon/Icon';

export const SignupInputEmailProps: Partial<InputProps> = {
  id: 'email2',
  type: 'email',
  placeholder: 'Enter e-mail',
  labelValue: 'label for e-mail',
  inputDescription: 'this input for e-mail',
  errorDescription: 'e-mail is incorrect',
  hasAsterisk: false,
  isDisabled: false,
  inputSize: 'xs',
  inputBorderRadiusSize: 'xs',
  inputStyle: 'default',
  name: 'email',
  title: 'Ведите корректный email',
  pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$',
};

export const SignupInputPasswordProps: Partial<InputProps> = {
  id: 'password2',
  type: 'password',
  name: 'password',
  placeholder: 'Enter password',
  labelValue: 'label for password',
  inputDescription: 'this input for password',
  errorDescription: 'password is incorrect',
  hasAsterisk: true,
  isDisabled: false,
  inputSize: 'xs',
  inputBorderRadiusSize: 'xs',
  inputStyle: 'default',
  title: 'Минимум 3 символа, 1 заглавная, 1 спецсимвол',
  pattern: '^(?=.*[A-Z])(?=.*[!@#$%^&*]).{3,}$',
};

export const SignupInputConfirmPasswordProps: Partial<InputProps> = {
  id: 'password3',
  type: 'password',
  name: 'confirmedPassword',
  placeholder: 'Confirm password',
  labelValue: 'label for password',
  inputDescription: 'this input for password',
  errorDescription: 'password is incorrect',
  hasAsterisk: true,
  isDisabled: false,
  inputSize: 'xs',
  inputBorderRadiusSize: 'xs',
  inputStyle: 'default',
  title: 'Минимум 3 символа, 1 заглавная, 1 спецсимвол',
  pattern: '^(?=.*[A-Z])(?=.*[!@#$%^&*]).{3,}$',
};

export const SignupInputNameProps: Partial<InputProps> = {
  name: 'userName',
  type: 'text',
  placeholder: 'Enter name',
  labelValue: 'label for name',
  inputDescription: 'this input for name',
  title: 'Только буквы (2-25 символов)',
  pattern: '^[A-Za-zА-Яа-яЁё]{2,25}$',
};

export const SignupInputNickNameProps: Partial<InputProps> = {
  name: 'nickName',
  type: 'text',
  placeholder: 'Enter nickname',
  labelValue: 'label for nickname',
  inputDescription: 'this input for nickname',
  title: 'Минимум 3 символа, максимум 25 символов',
  pattern: '^[\\wА-Яа-яЁё!@#$%^&*()_+\\-=\\[\\]{};\':"\\\\|,.<>\\/?]{3,25}$',
  icon: Icon,
};

export const SignupInputMaleProps: Partial<InputProps> = {
  name: 'gender',
  type: 'radio',
  value: 'Мужчина',
  labelValue: 'label for gender',
}

export const SignupInputFemaleProps: Partial<InputProps> = {
  name: 'gender',
  type: 'radio',
  value: 'Женщина',
  labelValue: 'label for gender',
}
