import {useAuth} from "../../hooks/useAuth";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../../routes/routes";

export const AuthStatus = () => {
    const auth = useAuth();
    const navigate = useNavigate();

    const handleSignOut = () => {
        auth?.signOut(() => {
            navigate(ROUTES.Index)
        })
    }

    if (auth && auth.user === null) {
        return <p>You are not logged in</p>
    }

    return (
        <div>
            <span>Welcome user {auth?.user?.login}</span>
            <button onClick={handleSignOut}>Sign Out</button>
        </div>
    )
}
