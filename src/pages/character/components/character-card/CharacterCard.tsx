import styles from './CharacterCard.module.css'
import {useLocation} from "react-router-dom";
import {Loader} from "../../../../components/ui/loader/Loader";

export const CharacterCard = () => {

    const location = useLocation();
    const {isLoading, error, data} = location.state;
    const {status, species, name, gender, created, type, image} = data;
    const createdDate = new Date(created).toLocaleDateString();


    return (
        <>
            {isLoading && <Loader/>}
            {error && <p>{error.toString()}</p>}
            <div className={`${styles.card} ${styles['card-background']}`}>
                <img src={image}
                     alt={name}
                     className={styles['card-image']}/>
                <div className={styles['card-content']}>
                    <h2 className={styles['card-title']}>{name}</h2>
                    <ul className={styles['details-list']}>.
                        <li className={`${styles.status} ${styles['status-alive']}`}>{status}</li>
                        <li>Species: {species}</li>
                        <li>Type: {type}</li>
                        <li>Gender: {gender}</li>
                    </ul>
                    <span className={styles['created-date']}>Created: {createdDate}</span>
                </div>
            </div>
        </>
    )
}
