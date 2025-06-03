import {ReactNode} from "react";

export interface ChildrenProps {
    children: ReactNode;
}

export interface UserState {
    email: string;
    password: string;
}

export type SignIn = (newUser: UserState, callback: () => void) => void;

export type SignOut = (callback: () => void) => void;

export interface Value {
    user: UserState | null;
    signIn: SignIn;
    signOut: SignOut;
}
