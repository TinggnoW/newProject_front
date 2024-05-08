import {createBrowserRouter} from "react-router-dom";
import HomePage from "../ui/page/HomePage";
import ProductPage from "../ui/page/ProductPage";
import LoginPage from "../ui/page/LoginPage";
import ShoppingCart from "../ui/page/ShoppingCartPage";
import TransactionPage from "../ui/page/TransactionPage";
import ThankyouPage from "../ui/page/ThankyouPage";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>
    },
    {
        path: "/product",
        element: <ProductPage/>
    },
    {
        path: "/shoppingcart",
        element: <ShoppingCart/>
    },
    {
        path: "/login",
        element: <LoginPage/>
    },
    {
        path: "/checkout/:transactionId",
        element: <TransactionPage/>
    },
    {
        path: "/thankyou",
        element: <ThankyouPage/>
    },
])

