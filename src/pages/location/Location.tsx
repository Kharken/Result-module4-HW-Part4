import styles from './Location.module.css'
import {useFetch} from "../../hooks/useFetch";
import {API_ROUTES} from "../../data/api-data";
import {LocationListItem} from "./components/Location-list-item/LocationListItem";
import {LocationData} from "../../types/location-types";

export const Location = () => {
    const {data, isLoading, error} = useFetch<LocationData>(API_ROUTES.Location);
    return (
        <div className={styles['location-container']}>
            <ul className={styles['location-list']}>
                {data && data.map((item) => <LocationListItem data={item}
                                                              key={item.id}
                                                              isLoading={isLoading}
                                                              error={error}/>)}
            </ul>
        </div>
    )
}
