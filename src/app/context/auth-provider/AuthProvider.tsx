import {AuthProviderProps} from "../../../types/app-types";
import {AuthContext} from "../auth-context/AuthContext";
import {useSetContext} from "../../../hooks/useSetContext";

export const AuthProvider = ({children}: AuthProviderProps) => {

    const value = useSetContext();

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
