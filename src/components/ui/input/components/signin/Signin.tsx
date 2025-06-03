import { CustomInput } from '../custom-input/Custom-input';
import { SigninInputEmailProps, SigninInputPasswordProps } from './Signin.inputProps';
import { useInput} from "../../../../../hooks/useInput";
import { DisabledProps} from "../../../../../types/input-types";

export const Signin = ({disabled, setIsButtonDisabled}: DisabledProps) => {

  const {formData, handleInputChange, handleSubmit, formRef, handleReset} = useInput();

  return (
    <div className="container">
      <form
        className="form"
        onSubmit={handleSubmit}
        onReset={handleReset}
        ref={formRef}
      >
        <CustomInput {...SigninInputEmailProps} value={formData.email ?? ''} handleInputChange={handleInputChange} isButtonDisabled={disabled} setIsButtonDisabled={setIsButtonDisabled}></CustomInput>
        <CustomInput {...SigninInputPasswordProps} value={formData.password ?? ''} handleInputChange={handleInputChange} isButtonDisabled={disabled} setIsButtonDisabled={setIsButtonDisabled}></CustomInput>
        <button type="submit" disabled={disabled}>Submit</button>
      </form>
    </div>
  );
};
