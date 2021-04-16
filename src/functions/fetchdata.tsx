import { useQuery } from 'react-query';
import axios, { AxiosResponse } from 'axios';

//caching querys for 1 week
const cacheTime = 604800000

export const fetchdata = (url: string, queryKey: string ) => {
    const fetchedData: AxiosResponse<any> | unknown = useQuery(queryKey, () => axios(url) , {cacheTime: cacheTime})
    return fetchedData;
};