import "../../../css/CartPageCss/ShoppingCartCss.css"
import ShoppingCartTable from "../../component/ShoppingCartTable.tsx"
import * as CartItemApi from "../../../api/CartApi.ts";
import {useContext, useEffect, useState} from "react";
import {CartItemData} from "../../../data/product/cartItemData.Type.ts";
import {UserData} from "../../../data/user/UserData.ts";
import {LoginUserContext} from "../../../context/LoginUserContext.ts";
import {Box} from "@mui/material";
import NavbarAll from "../../component/NavbarAll.tsx";
import Loading from "../../component/LoadingPage/Loading.tsx";
import {useNavigate} from "react-router-dom";



export default function ShoppingCart(){

    const [cartItem, setCartItem] = useState<CartItemData[]|undefined>(undefined);
    const loginUser = useContext<UserData|null|undefined>(LoginUserContext);
    const [loading, setLoading] = useState<boolean>(true);
    const navigate = useNavigate();


    const fetchProductData = async () => {
        try {
            const data = await CartItemApi.getCartItem(); // Call the API function
            setCartItem(data); // Update state with fetched data
            console.log(data);
        } catch (error) {
            console.error('Error fetching product data:', error);
        }finally {
            setLoading(false);
        }
    };

  useEffect(() => {
    if (loginUser) {
      fetchProductData().then();
    } else {
      navigate("/login"); // Set loading to false if there's no logged-in user
    }
  }, [loginUser]);


  if(loading) {
        return <Loading/>;
      }


    return(
        <>

            <Box className="ShoppingCart">
                <Box className="ShoppingCartlayer">
                    <NavbarAll/>

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