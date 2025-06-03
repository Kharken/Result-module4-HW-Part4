import {ChangeEvent, FormEvent, useEffect, useRef, useState} from "react";
import {InputState} from "../types/input-types";

export const useInput = () => {
    const [formData, setFormData] = useState<Partial<InputState>>({});
    const [comparedPasswordsValue, setComparedPasswordsValue] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    };
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        if (formRef.current) {
            formRef.current.reset();
        }
    };
    const handleReset = (event: FormEvent) => {
        event.preventDefault();
        setFormData({});

    };

    useEffect(() => {
        setComparedPasswordsValue(
            formData.password === formData.confirmedPassword &&
            formData.password !== undefined,
        );
    }, [formData.password, formData.confirmedPassword]);

    return { formData, handleInputChange, handleSubmit, formRef, handleReset, comparedPasswordsValue };
};
