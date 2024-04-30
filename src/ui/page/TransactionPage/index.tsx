import {Box} from "@mui/material";
import Navbar from "../../component/Navbar.tsx";
import "../../../css/TransactionPageCss.css"
import CreditCardForm from "../../component/CreditCard.tsx";
import {useContext, useEffect, useState} from "react";
import {UserData} from "../../../data/user/UserData.ts";
import {LoginUserContext} from "../../../context/LoginUserContext.ts";
import * as TransactionApi from "../../../api/TransactionApi.ts";
import TransactionTable from "../../component/TransactionTable.tsx";
import {TransactionDto} from "../../../data/transaction/TransactionDataType.ts";
import {useParams} from "react-router-dom";

type Params ={
    transactionId:string
}

export default function TransactionPage(){
    const params = useParams<Params>();
    const [transactionDto, setTransactionDto] = useState<TransactionDto|undefined>(undefined);
    const loginUser = useContext<UserData|null|undefined>(LoginUserContext);
    // Fetch product data when component mounts
    const fetchTransactionData = async (tid:string) => {
        try {
            const data = await TransactionApi.getAllTransaction(tid); // Call the API function
            setTransactionDto(data); // Update state with fetched data
            console.log(data);
        } catch (error) {
            console.error('Error fetching product data:', error);
        }
    };

    useEffect(() => {

        if(loginUser&&params.transactionId)
        {fetchTransactionData(params.transactionId).then();}

    }, [loginUser]);

    return(
        <>
            <Box className="transactionPage">
                <div className="transactionPagelayer">
                    <Navbar/>
                    <div className="transactionPageContainer">
                        {
                            transactionDto
                                ?<TransactionTable dto={transactionDto}/>
                                :<></>
                        }

                        <CreditCardForm/>

                    </div>



                </div>
            </Box>
        </>
    )
}