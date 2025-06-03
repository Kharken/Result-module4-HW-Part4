import {useState} from "react";
import {SignIn, SignOut, UserState, Value} from "../types/app-types";

export const useSetContext = () => {
    const [user, setUser] = useState<UserState | null>(null);

    const signIn: SignIn = (newUser, callback) => {
        setUser(newUser);
        callback();
    }

    const signOut: SignOut = (callback) => {
        setUser(null);
        callback();
    }

    const value: Value = {
        user,
        signIn,
        signOut
    }

    return value;
}
