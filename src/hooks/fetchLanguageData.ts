import { useCallback, useState } from "react";
import axios from "axios";
import { API_URL } from "../constants/apis";

export const useLanguageData = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchLanguageData = useCallback(async (searchTerm: string) => {
        setLoading(true);
        setError(false);
        try {
            const { data } = await axios.get(
                `${API_URL}${encodeURIComponent(searchTerm)}`
            );
            return data;
        } catch (err) {
            setError(true);
            return [];
        } finally {
            setLoading(false);
        }
    }, []);

    return { fetchLanguageData, loading, error };
};