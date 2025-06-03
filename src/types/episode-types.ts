import {CommonData, CommonProps} from "./common-types";


export interface EpisodeData extends CommonData {
    air_date: string;
    episode: string;
    created: string;
}

export interface EpisodeCardProps extends CommonProps {
    data: EpisodeData;
}
