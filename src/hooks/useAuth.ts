import {useContext} from "react";
import {AuthContext} from "../app/context/auth-context/AuthContext";

export const useAuth = () => {
    return useContext(AuthContext);
}
