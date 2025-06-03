import {Context} from "react";
import {createContext} from "react";
import {Value} from "../../../types/app-types";


export const AuthContext: Context<Value | null> = createContext<Value | null>(null);
