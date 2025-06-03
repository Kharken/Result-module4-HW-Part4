import {useEffect, useMemo, useState} from "react";
import {useInput} from "./useInput";
import {InputName} from "../types/input-types";

export const useError = (name: InputName, value: string) => {

    const [isError, setIsError] = useState(false);

    const regexes = useMemo(() => ({
        userName: /^[A-Za-zА-Яа-яЁё]{2,25}$/u,
        nickName: /^[A-Za-zА-Яа-яЁё0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]{3,25}$/u,
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        password: /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{3,}$/,
    }), []);

    const isEmpty = value.trim() === "";

    useEffect(() => {
        let errorState: boolean;

        switch (name) {
            case 'userName':
                errorState = !(regexes.userName.test(value) && value.length >= 2 && value.length <= 25);
                break;
            case 'nickName':
                errorState = !(regexes.nickName.test(value) && value.length >= 3 && value.length <= 25);
                break;
            case 'email':
                errorState = !regexes.email.test(value);
                break;
            case 'password':
            case 'confirmedPassword':
                errorState = !regexes.password.test(value);
                break;
            case 'gender':
                errorState = value === '';
                break;
            default:
                errorState = false;
        }

        setIsError(errorState);
    }, [name, value, regexes]);


    return { isError, isEmpty };
};
