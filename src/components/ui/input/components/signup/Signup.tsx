import { CustomInput } from '../custom-input/Custom-input';
import {
  SignupInputConfirmPasswordProps,
  SignupInputEmailProps,
  SignupInputFemaleProps,
  SignupInputMaleProps,
  SignupInputNameProps,
  SignupInputNickNameProps,
  SignupInputPasswordProps,
} from './Signup.inputProps';
import { useInput} from "../../../../../hooks/useInput";
import { DisabledProps} from "../../../../../types/input-types";

export const Signup = ({ disabled, setIsButtonDisabled }: DisabledProps) => {

  const { formData, handleInputChange, handleSubmit, formRef, handleReset } = useInput();

  return (
    <div className="container">
      <form
        ref={formRef}
        className="form"
        onSubmit={handleSubmit}
        onReset={handleReset}
      >
        <CustomInput
          {...SignupInputNameProps}
          handleInputChange={handleInputChange}
          value={formData.userName ?? ''}
          isButtonDisabled={disabled}
          setIsButtonDisabled={setIsButtonDisabled} />
        <CustomInput
          {...SignupInputNickNameProps}
          handleInputChange={handleInputChange}
          value={formData.nickName ?? ''}
          isButtonDisabled={disabled}
          setIsButtonDisabled={setIsButtonDisabled} />
        <CustomInput
          {...SignupInputMaleProps}
          handleInputChange={handleInputChange}
          checked={formData.gender === SignupInputMaleProps.value}
          isButtonDisabled={disabled}
          setIsButtonDisabled={setIsButtonDisabled} />
        <CustomInput
          {...SignupInputFemaleProps}
          handleInputChange={handleInputChange}
          checked={formData.gender === SignupInputFemaleProps.value}
          isButtonDisabled={disabled}
          setIsButtonDisabled={setIsButtonDisabled} />
        <CustomInput
          {...SignupInputEmailProps}
          handleInputChange={handleInputChange}
          value={formData.email ?? ''}
          isButtonDisabled={disabled}
          setIsButtonDisabled={setIsButtonDisabled} />
        <CustomInput
          {...SignupInputPasswordProps}
          handleInputChange={handleInputChange}
          value={formData.password ?? ''}
          isButtonDisabled={disabled}
          setIsButtonDisabled={setIsButtonDisabled} />
        <CustomInput
          {...SignupInputConfirmPasswordProps}
          handleInputChange={handleInputChange}
          value={formData.confirmedPassword ?? ''}
          isButtonDisabled={disabled}
          setIsButtonDisabled={setIsButtonDisabled} />
        <button type="submit"
                disabled={disabled}>Submit
        </button>
      </form>
    </div>
  );
};
