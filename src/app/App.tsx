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
                            element={<Character/>}/>
                        <Route
                            path={ROUTES.Character}
                            element={<CharacterCard/>}/>
                        <Route
                            path={ROUTES.Episodes}
                            element={<Episode/>}/>
                        <Route
                            path={ROUTES.Episode}
                            element={<EpisodeCard/>}/>
                        <Route
                            path={ROUTES.Locations}
                            element={<Location/>}/>
                        <Route
                            path={ROUTES.Location}
                            element={<LocationCard/>}/>
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
