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
        return(
            <div className="container auth__wrapper">
            <p>You are not logged in!</p>
                <button onClick={() => {
                    navigate(ROUTES.Login)
                }}>Login</button>
            </div>
        )
    }

    return (
        <div>
            <span>Welcome user {auth?.user?.email}</span>
            <button onClick={handleSignOut}>Sign Out</button>
        </div>
    )
}
