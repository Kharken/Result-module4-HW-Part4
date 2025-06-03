import {ChangeEvent, FormEvent, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../routes/routes";
import {UserState} from "../types/app-types";
import {useAuth} from "./useAuth";

export const useInput = () => {
    const auth = useAuth();

    const userInitialState: UserState = {
        email: '',
        password: '',
    };

    const [formData, setFormData] = useState<UserState>(userInitialState);
    const formRef = useRef<HTMLFormElement>(null);
    const navigate = useNavigate();

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    };
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        setFormData(formData);
        auth?.signIn(formData, () => {
            navigate(ROUTES.Index)
        })
        navigate(ROUTES.Index);

    };
    const handleReset = (event: FormEvent) => {

        event.preventDefault();
        if (formRef.current) {
            formRef.current.reset();
        }
        setFormData(userInitialState);
    };


    return {formData, handleInputChange, handleSubmit, formRef, handleReset};
};
