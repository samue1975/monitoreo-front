import { useState, useCallback } from 'react';

const useDelete = (url) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const deleteData = useCallback(async (id) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(`${url}/${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Failed to delete data');
            }
            const result = await response.json();
            setData(result);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    }, [url]);

    return { isLoading, error, data, deleteData };
};

export default useDelete;
