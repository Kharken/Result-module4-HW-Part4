import {API_ROUTES} from "../../../data/api-data";
import {Link} from "react-router-dom";
import styles from "./Navbar.module.css";
import {ROUTES} from "../../../routes/routes";

export const Navbar = () => {
    return (
        <nav className={styles.container}>
            <div className="link__wrapper">
                <Link to={ROUTES.Index}
                      className="nav__item">
                    Home
                </Link>
            </div>
            <div className={styles.nav__banner}>
                <span>Welcome to Rick & Morty Universe!</span>
            </div>
            <ul className={`${styles.container} ${styles.nav__list}`}>
                {Object.entries(API_ROUTES).map((item) => (
                    <li key={item[0]}>
                        <Link
                            to={item[1]}
                            className="nav__item">
                            {item[0]}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
