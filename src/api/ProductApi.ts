import axios from "axios";
import {GetAllProduct} from "../data/product/getAllProductData.Type.ts";
import {GetProductbyId} from "../data/product/getProductbyIdData.Type.ts";
import getEnvConfig from "../config/EnvConfig.ts";


const baseURL = getEnvConfig().baseUrl;

export const getAllProduct = async (): Promise<GetAllProduct[]> => {
    try {
        const apiUrl = baseURL+"/public/product";
        const response = await axios.get<GetAllProduct[]>(apiUrl);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const getProductbyId = async (pid: number): Promise<GetProductbyId> => {
    try {
        const apiUrl = baseURL+`/public/product/`+ pid;
        const response = await axios.get<GetProductbyId>(apiUrl);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}