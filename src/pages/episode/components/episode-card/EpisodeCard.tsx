import styles from './EpisodeCard.module.css'
import {useLocation} from "react-router-dom";
import {EpisodeCardProps} from "../../../../types/episode-types";
import {Loader} from "../../../../components/ui/loader/Loader";

export const EpisodeCard = () => {

    const location = useLocation();
    const {isLoading, error, data} = location.state as EpisodeCardProps;
    const { name, air_date, episode, created} = data;
    const createdDate = new Date(created).toLocaleDateString();

    return (
        <>
            {isLoading && <Loader/>}
            {error && <p>{error.toString()}</p>}
            <div className={styles.card}>
                <div className={styles['card-content']}>
                    <h2 className={styles['card-title']}>{name}</h2>
                    <ul className={styles['details-list']}>
                        <li>
                            <span>Episode:</span>
                            <span className={styles['episode-number']}>{episode}</span>
                        </li>
                        <li>
                            <span>Air Date:</span>
                            <span className={styles['air-date']}>{air_date}</span>
                        </li>
                    </ul>
                    <span className={styles['created-date']}>Created: {createdDate}</span>
                </div>
            </div>
        </>
    )
}
