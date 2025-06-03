
export interface ApiRoutes {
    [key: string]: string;
}

export interface CommonProps {
    isLoading: boolean;
    error: unknown;
}

export interface CommonData {
    id: number;
    name: string;
}
