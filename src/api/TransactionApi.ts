import getEnvConfig from "../config/EnvConfig.ts";
import * as FirebaseAuthService from "../authService/FirebaseAuthService.ts";
import axios from "axios";
import {TransactionDto} from "../data/transaction/TransactionDataType.ts";



const baseURL = getEnvConfig().baseUrl+"/transaction";
const getAuthConfig = async () =>{
    const accessToken = await FirebaseAuthService.getAccessToken();
    console.log(accessToken)
    if(!accessToken){
        throw new Error();
    }
    return {
        headers:{
            Authorization: `Bearer ${accessToken}`,
        }
    }
}

export const createNewTransaction = async ():Promise <TransactionDto> => {
    try{
        const apiUrl = baseURL+"/prepare";
        const response = await axios.post<TransactionDto>(apiUrl, null,await getAuthConfig());
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const getAllTransaction = async (tid:string):Promise <TransactionDto> => {
    try{
        const apiUrl = baseURL+`/${tid}`;
        const response = await axios.get<TransactionDto>(apiUrl, await getAuthConfig());
        return response.data;

    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const payTransaction = async (tid:string):Promise <TransactionDto> => {
    try{
        const apiUrl = baseURL+`/${tid}/pay`;
        const response = await axios.patch<TransactionDto>(apiUrl,null, await getAuthConfig());
        return response.data;

    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const finishTransactionByTid = async (tid:string):Promise <TransactionDto> => {
    try{
        const apiUrl = baseURL+`/${tid}/finish`;
        const response = await axios.patch<TransactionDto>(apiUrl,null, await getAuthConfig());
        return response.data;

    } catch (error) {
        console.log(error);
        throw error;
    }
}