import {ApiRoutes} from "../types/common-types";



const BASE_URL = 'http://localhost:3000';

const API_ROUTES: ApiRoutes = {
    Characters: '/characters',
    Episode: '/episode',
    Location: '/location',
} as const;

export {BASE_URL, API_ROUTES}
