import axios, { AxiosResponse } from 'axios';

export default async function fetch(url: string)  {
	const BASE_URL = 'https://www.abgeordnetenwatch.de/api/v2/';
	const res: AxiosResponse = await axios.get(BASE_URL + url);
	return await res.data;
}
