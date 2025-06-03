import {Outlet} from "react-router-dom";
import styles from './AppLayout.module.css'
import {Footer} from "../../blocks/footer/Footer";
import {Header} from "../../blocks/header/Header";
import {AuthStatus} from "../../auth-status/AuthStatus";

export const AppLayout = () => {
    return (
        <>
            <AuthStatus/>
            <Header/>
            <main className={styles.main}>
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}
