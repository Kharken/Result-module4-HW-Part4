import styles from './LocationListItem.module.css'
import {Link} from 'react-router-dom';
import {LocationCardProps} from "../../../../types/location-types";

export const LocationListItem = (props: LocationCardProps) => {

    const {isLoading, error, data} = props;
    const {id, name} = data;

    return (
        <li className={styles['location-item']}>
            <Link to={`/location/${id}`}
                  state={{isLoading, data, error}}
               className={styles['location-link']}>
                <div className={styles['location-id']}>{id}</div>
                <h3 className={styles['location-name']}>{name}</h3>
            </Link>
        </li>
    )
}
