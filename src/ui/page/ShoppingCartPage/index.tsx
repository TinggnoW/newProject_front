import "../../../css/ShoppingCartCss.css"
import ShoppingCartTable from "../../component/ShoppingCartTable.tsx"
import * as CartItemApi from "../../../api/CartApi.ts";
import {useContext, useEffect, useState} from "react";
import {CartItemData} from "../../../data/product/cartItemData.Type.ts";
import {UserData} from "../../../data/user/UserData.ts";
import {LoginUserContext} from "../../../context/LoginUserContext.ts";
import {Box} from "@mui/material";
import NavbarHomePage from "../../component/NavbarHomePage.tsx";



export default function ShoppingCart(){

    const [cartItem, setCartItem] = useState<CartItemData[]|undefined>(undefined);
    const loginUser = useContext<UserData|null|undefined>(LoginUserContext);
    // Fetch product data when component mounts
    const fetchProductData = async () => {
        try {
            const data = await CartItemApi.getCartItem(); // Call the API function
            setCartItem(data); // Update state with fetched data
            console.log(data);
        } catch (error) {
            console.error('Error fetching product data:', error);
        }
    };

    useEffect(() => {

        if(loginUser){fetchProductData().then();}

    }, [loginUser]);

    return(
        <>

            <Box className="ShoppingCart">
                <Box className="ShoppingCartlayer">
                    <NavbarHomePage/>

                        {
                            cartItem
                                ?<ShoppingCartTable dto={cartItem} setCartItemData={setCartItem}/>
                                :<></>
                        }

                </Box>
            </Box>

        </>

    );
}