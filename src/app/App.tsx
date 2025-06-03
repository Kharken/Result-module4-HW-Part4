import {Main} from "../pages/main/Main";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AppLayout} from "../components/layouts/app-layout/AppLayout";
import {Character} from "../pages/character/Character";
import './App.css'
import {ROUTES} from "../routes/routes";
import {Episode} from "../pages/episode/Episode";
import {CharacterCard} from "../pages/character/components/character-card/CharacterCard";
import {EpisodeCard} from "../pages/episode/components/episode-card/EpisodeCard";
import {Location} from "../pages/location/Location";
import {LocationCard} from "../pages/location/components/location-card/LocationCard";
import {NotFound} from "../pages/not-found-page/NotFound";
import {AuthProvider} from "./context/auth-provider/AuthProvider";
import {Login} from "../pages/login/Login";
import {PrivateRoute} from "../components/private-route/PrivateRoute";

export const App = () => {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route
                        path={ROUTES.Index}
                        element={<AppLayout/>}>
                        <Route
                            index
                            element={<Main/>}/>
                        <Route
                            path={ROUTES.Characters}
                            element={<PrivateRoute><Character/></PrivateRoute>}/>
                        <Route
                            path={ROUTES.Character}
                            element={<PrivateRoute><CharacterCard/></PrivateRoute>}/>
                        <Route
                            path={ROUTES.Episodes}
                            element={<PrivateRoute><Episode/></PrivateRoute>}/>
                        <Route
                            path={ROUTES.Episode}
                            element={<PrivateRoute><EpisodeCard/></PrivateRoute>}/>
                        <Route
                            path={ROUTES.Locations}
                            element={<PrivateRoute><Location/></PrivateRoute>}/>
                        <Route
                            path={ROUTES.Location}
                            element={<PrivateRoute><LocationCard/></PrivateRoute>}/>
                    </Route>
                    <Route
                        path={ROUTES.NotFound}
                        element={<NotFound/>}/>
                    <Route
                        path={ROUTES.Login}
                        element={<Login/>}/>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    )
}
