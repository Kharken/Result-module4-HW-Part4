import {CommonData, CommonProps} from "./common-types";

export interface LocationData extends CommonData {
    type: string;
    dimension: string;
    created: string;
}

export interface LocationCardProps extends CommonProps {
    data: LocationData;
}
