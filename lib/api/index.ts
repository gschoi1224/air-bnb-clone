import Axios, { HeadersDefaults } from 'axios';

const axios = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export default axios;

export interface CommonHeaderProperties extends HeadersDefaults {
    cookie: string;
}
