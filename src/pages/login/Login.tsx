import {CustomInput as Input} from "../../components/ui/input/components/custom-input/Custom-input";
import {EmailProps, PasswordProps} from "./components/login-props";
import {useInput} from "../../hooks/useInput";
import {Link} from "react-router-dom";
import {ROUTES} from "../../routes/routes";
import styles from './Login.module.css'

export const Login = () => {
    const {formData, handleInputChange, handleSubmit, formRef, handleReset} = useInput();

    return (
        <div className={styles.login__wrapper}>
            <Link to={ROUTES.Index} className={styles.link}>Home</Link>
            <div className="container">
                <form className="form"
                      onSubmit={handleSubmit}
                      onReset={handleReset}
                      ref={formRef}>
                    <Input {...EmailProps} handleInputChange={handleInputChange}
                           value={formData.email ?? ''}/>
                    <Input {...PasswordProps} handleInputChange={handleInputChange}
                           value={formData.password ?? ''}/>
                    <button type="submit" className={styles.submit}>Login</button>
                    <button type="reset" className={styles.reset}>Reset</button>
                </form>
            </div>
        </div>
    )
}
