import axios from "axios";
import getEnvConfig from "../config/EnvConfig.ts";
import {CartItemData} from "../data/product/cartItemData.Type.ts";
import * as FirebaseAuthService from "../authService/FirebaseAuthService.ts";

const baseURL = getEnvConfig().baseUrl+"/cart";
const getAuthConfig = async () =>{
    const accessToken = await FirebaseAuthService.getAccessToken();
    if(!accessToken){
        throw new Error();
    }
    return {
        headers:{
            Authorization: `Bearer ${accessToken}`,
        }
    }
}

export const putCartItem = async (pid:number,quantity:number):Promise <CartItemData> => {
    try{
        const apiUrl = baseURL+`/${pid}/${quantity}`;
        const response = await axios.put<CartItemData>(apiUrl, null,await getAuthConfig());
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const updateCartItem = async (pid:number,quantity:number):Promise <CartItemData> => {
    try{
        const apiUrl = baseURL+`/${pid}/${quantity}`;
        const response = await axios.patch<CartItemData>(apiUrl, null,await getAuthConfig());
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const deleteCartItem = async (pid:number):Promise <CartItemData> => {
    try{
        const apiUrl = baseURL+`/${pid}`;
        const response = await axios.delete<CartItemData> (apiUrl,await getAuthConfig());
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}


export const getCartItem = async ():Promise <CartItemData[]> => {
    try{
        const response = await axios.get<CartItemData[]>(baseURL, await getAuthConfig());
        return response.data;

    } catch (error) {
        console.log(error);
        throw error;
    }
}
