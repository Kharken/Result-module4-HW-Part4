import styles from './Episode.module.css'
import {useFetch} from "../../hooks/useFetch";
import {API_ROUTES} from "../../data/api-data";
import {EpisodeListItem} from "./components/episode-list-item/EpisodeListItem";
import {EpisodeData} from "../../types/episode-types";

export const Episode = () => {
    const {data, isLoading, error} = useFetch<EpisodeData>(API_ROUTES.Episode);
    return (
        <div className={styles['episode-container']}>
            <ul className={styles['episode-list']}>
                {data && data.map((item) => <EpisodeListItem data={item}
                                                             key={item.id}
                                                             isLoading={isLoading}
                                                             error={error}/>)}
            </ul>
        </div>
    )
}
