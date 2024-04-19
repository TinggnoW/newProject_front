import {createBrowserRouter} from "react-router-dom";
import HomePage from "../ui/page/HomePage";
import ProductPage from "../ui/page/ProductPage";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>
    },
    {
        path: "/product",
        element: <ProductPage/>
    }
    // {
    //     path: "/product/:pid/",
    //     element: <ProductDetails/>
    // }
    // {
    //     path: "/shoppingcart",
    //     element: <ShoppingCart/>
    // },
    // {
    //     path: "/login",
    //     element: <LoginPage/>
    // },
    // {
    //     path: "/checkout/:transactionId",
    //     element: <Checkout/>
    // },
    // {
    //     path: "/thankyou",
    //     element: <ThankYou/>
    // }
])

