import {useEffect, useState} from "react";
import axios from "axios";

/**
 * Custom hook for fetching data from an API.
 *
 * @param {string} initialUrl - The initial URL to fetch data from.
 * @param {any} initialData - The initial state for the data.
 * @returns {[{data: any, isLoading: boolean, isError: boolean}, function]} - Returns the state object and the URL setter function.
 */
const useDataApi = (initialUrl, initialData) => {
    const [data, setData] = useState(initialData);
    const [url, setUrl] = useState(initialUrl);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);
            try {
                const result = await axios(url);
                setData(result.data);
            } catch (error) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();

    }, [url]);

    return [{ data, isLoading, isError }, setUrl];
};

export default useDataApi;