import {useFetch} from "../../hooks/useFetch";
import {CharacterData} from "../../types/character-types";
import {API_ROUTES} from "../../data/api-data";
import {CharacterListItem} from "./components/character-list-item/CharacterListItem";
import styles from './Character.module.css'

export const Character = () => {
    const {data, isLoading, error} = useFetch<CharacterData>(API_ROUTES.Characters);

    return (
        <div className={styles['character-container']}>
            <ul className={styles['character-list']}>
                {data && data.map((item) => <CharacterListItem data={item}
                                                               key={item.id}
                                                               isLoading={isLoading}
                                                               error={error}/>)}
            </ul>
        </div>
    )
}
