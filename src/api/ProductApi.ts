import axios from "axios";
import {GetAllProduct} from "../data/product/getAllProductData.Type.ts";
import {GetProductbyId} from "../data/product/getProductbyIdData.Type.ts";


export const getAllProduct = async (): Promise<GetAllProduct[]> => {
    try {
        const apiUrl = "http://localhost:8080/public/product";
        const response = await axios.get<GetAllProduct[]>(apiUrl);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const getProductbyId = async (pid: string): Promise<GetProductbyId> => {
    try {
        const apiUrl = `http://localhost:8080/public/product/` + pid;
        const response = await axios.get<GetProductbyId>(apiUrl);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}