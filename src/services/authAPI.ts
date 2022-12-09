import axios from "axios";
import IBodyData from "../types/typeBodyData";

const BASE_URL: string = 'https://vast-basin-98801.herokuapp.com';

export const snopifyGet = async (name: string) => {
    const response = await axios.get(`${BASE_URL}/shopify`, { params: { name } })
    return response;
};

export const googleGet = async () => {
    const response = await axios.get(`${BASE_URL}/google`)
    return response;
};

export const register = async (body: IBodyData) => {
    const request = await axios.post(`${BASE_URL}/register`, body)
    return request;
};