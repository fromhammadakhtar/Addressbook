import { useEffect, useState } from "react";
import axios, { AxiosResponse, AxiosError } from "axios";

interface FetchResult<T> {
    data: T | null;
    loading: boolean;
    error: AxiosError | null;
    refetch: () => void;
}

function useFetch<T>(url: string): FetchResult<T> {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<AxiosError | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response: AxiosResponse<T> = await axios.get(url);
                setData(response.data);
            } catch (err: any) {
                if (axios.isAxiosError(err)) {
                    setError(err);
                }
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [url]);

    const refetch = () => {
        setLoading(true);
        axios
            .get(url)
            .then((response) => {
                setData(response.data);
            })
            .catch((err: any) => {
                if (axios.isAxiosError(err)) {
                    setError(err);
                }
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return { data, loading, error, refetch };
}

export default useFetch;
