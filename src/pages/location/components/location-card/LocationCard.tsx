import styles from './LocationCard.module.css'
import {useLocation} from "react-router-dom";
import {LocationCardProps} from "../../../../types/location-types";
import {Loader} from "../../../../components/ui/loader/Loader";

export const LocationCard = () => {

    const location = useLocation();
    const {isLoading, error, data} = location.state as LocationCardProps;
    const { name, dimension, type, created} = data;
    const createdDate = new Date(created).toLocaleDateString();

    return (
        <>
            {isLoading && <h1><Loader/></h1>}
            {error && <p>{error.toString()}</p>}
            <div className={styles.card}>
                <div className={styles['card-content']}>
                    <h2 className={styles['card-title']}>{name}</h2>
                    <ul className={styles['details-list']}>
                        <li>
                            <span>Type:</span>
                            <span className={styles['location-number']}>{type}</span>
                        </li>
                        <li>
                            <span>Dimension:</span>
                            <span className={styles['air-date']}>{dimension}</span>
                        </li>
                    </ul>
                    <span className={styles['created-date']}>Created: {createdDate}</span>
                </div>
            </div>
        </>
    )
}
