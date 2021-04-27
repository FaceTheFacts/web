import axios, { AxiosResponse } from 'axios';

export default async function fetch(url: string) {
	const res: AxiosResponse = await axios.get(url);
	return await res.data;
}