import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

interface UseFetchResult {
    data: any | null;
    isPending: boolean;
    error: any | null;
}

const useFetch = (url: string): UseFetchResult => {
    const [data, setData] = useState<any | null>(null);
    const [isPending, setIsPending] = useState<boolean>(true);
    const [error, setError] = useState<any | null>(null);

    useEffect(() => {
        setIsPending(true);
        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw Error('Error fetching data');
                }
                return res.json();
            })
            .then((data) => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch((err) => {
                setIsPending(false);
                setError(err.message);
                toast.error(err.message);
            });
    }, [url]);

    return { data, isPending, error };
};

export default useFetch;
