import {ChildrenProps} from "../../types/app-types";
import {useAuth} from "../../hooks/useAuth";
import {Navigate} from "react-router-dom";
import {ROUTES} from "../../routes/routes";

export const PrivateRoute = ({children}: ChildrenProps) => {
    const auth = useAuth();

    if (auth && auth.user === null) {
        return <Navigate to={ROUTES.Login}/>
    }

    return children;
}
