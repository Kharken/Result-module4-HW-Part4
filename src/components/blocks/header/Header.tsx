import {Navbar} from "../navbar/Navbar";
import styles from './Header.module.css';

export const Header = () => {
    return (
        <header className={styles.header}>
            <Navbar/>
        </header>
    )
}
