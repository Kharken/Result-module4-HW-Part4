import {useEffect, useState} from "react";
import {BASE_URL} from "../data/api-data";

export const useFetch = <T>(url: string) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<unknown>();
    const [data, setData] = useState<T[]>([]);

    const fetchData = async () => {
        try {
            setIsLoading(true);
            const response = await fetch(`${BASE_URL}${url}`);
            setData(await response.json());
            setIsLoading(false);
        } catch (error) {
            setError(error);
            setIsLoading(false);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        void fetchData();
    }, [])

    return {data, isLoading, error}
}
