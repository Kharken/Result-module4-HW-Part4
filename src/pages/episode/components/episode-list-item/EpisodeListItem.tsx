import styles from './EpisodeListItem.module.css'
import {Link} from 'react-router-dom';
import {EpisodeCardProps} from "../../../../types/episode-types";

export const EpisodeListItem = (props: EpisodeCardProps) => {

    const {isLoading, error, data} = props;
    const {id, name} = data;

    return (
        <li className={styles['episode-item']}>
            <Link to={`/episode/${id}`}
                  state={{isLoading, data, error}}
               className={styles['episode-link']}>
                <div className={styles['episode-id']}>{id}</div>
                <h3 className={styles['episode-name']}>{name}</h3>
            </Link>
        </li>
    )
}
