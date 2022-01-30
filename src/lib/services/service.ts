import type { Result } from "$lib/interfaces/result.interface";
import type { ResultStore } from "$lib/interfaces/result-store.interface";

const LOCALSTORAGE_KEY = 'carbonbadge';
const MAX_CACHE = 24 * 60 * 60 * 1000; // 24 hours
const URL = 'https://api.websitecarbon.com/b?url=';

export const getData = async (url: string): Promise<Result> => {

    let storeData: ResultStore;
    const key = `${LOCALSTORAGE_KEY}_${url}`;

    // Read the localstore
    const stored = localStorage.getItem(key);

    // Data ?
    if(stored) { storeData = JSON.parse(stored); }

    // Need to fetch if no cached data or too old
    if(!storeData ||  (new Date().getTime() - storeData.timespan) > MAX_CACHE) {
        // Call the API
        const res = await fetch(`${URL}${url}`);

        // If res different from success
        if(res.status !== 200) return { error: true };

        // Transform to JSON
        const fetchData: Result = await res.json();
        fetchData.error = false;

        // Store to LocalStorage
        localStorage.setItem(
            key,
            JSON.stringify({
                data : fetchData,
                timespan :  new Date().getTime(),
                error: false
            } as ResultStore)
        );

        return fetchData;
    } else {
        return storeData.data;
    }

}