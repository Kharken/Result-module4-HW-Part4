import {CustomInput as Input} from "../../components/ui/input/components/custom-input/Custom-input";
import {EmailProps, PasswordProps} from "./components/login-props";
import {useInput} from "../../hooks/useInput";

export const Login = () => {
    const {formData, handleInputChange, handleSubmit, formRef, handleReset} = useInput();

    return (
        <div className="container">
            <form className="form"
                  onSubmit={handleSubmit}
                  onReset={handleReset}
                  ref={formRef}>
                <Input {...EmailProps} handleInputChange={handleInputChange} value={formData.email ?? ''}/>
                <Input {...PasswordProps} handleInputChange={handleInputChange} value={formData.password ?? ''}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
