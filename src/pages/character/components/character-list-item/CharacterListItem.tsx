import {CharacterCardProps} from "../../../../types/character-types";
import {Link} from "react-router-dom";
import styles from './CharacterListItem.module.css'

export const CharacterListItem = (props: CharacterCardProps) => {
    const {isLoading, error, data} = props;
    const {id, name} = data;
    return (
        <>
            {data &&
                <li className={styles['character-item']}>
                    <Link to={`/characters/${id}`}
                          state={{isLoading, data, error}}>
                        <h3>Character № {id}</h3>
                        <p>{name}</p>
                    </Link>

                </li>}
        </>
    )
}
