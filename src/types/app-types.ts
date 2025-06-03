import {ReactNode} from "react";

export interface AuthProviderProps {
    children: ReactNode;
}

export interface UserState {
    login: string;
    password: string;
}

export type SignIn = (newUser: UserState, callback: () => void) => void;

export type SignOut = (callback: () => void) => void;

export interface Value {
    user: UserState | null;
    signIn: SignIn;
    signOut: SignOut;
}
