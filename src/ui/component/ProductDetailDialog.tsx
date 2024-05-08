import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {IconButton, Typography} from "@mui/material";
import QuantityButton from "./QuantityButton.tsx";
import CloseIcon from '@mui/icons-material/Close';
import "../../css/ProductDetails.css"
import {GetProductbyId} from "../../data/product/getProductbyIdData.Type.ts";
import {useEffect, useState} from "react";
import * as CartItemApi from "../../api/CartApi.ts";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "../../css/fontsCss.css"


type Props = {
    open: boolean,
    handleClose: () => void,
    getProductbyId: (pid: number) => Promise<GetProductbyId>, // Pass the API function as a prop
    productId: number, // Pass the productId as a prop to fetch product details

}


export const DialogComponent = ({open, handleClose, getProductbyId, productId}: Props) => {
    const [product, setProduct] = useState<GetProductbyId | null>(null); // Declare product state
    const [quantity, setQuantity] = useState<number>(1);


    useEffect(() => {
        const fetchProductData = async () => {
            try {
                const data = await getProductbyId(productId); // Call the getProductbyId API function
                setProduct(data); // Update state with fetched product data
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        };

        if (open && productId) {
            setQuantity(1)// Only fetch data if dialog is open and productId is provided
            fetchProductData();
        }
    }, [open, productId, getProductbyId]);

    if (!open || !product) {
        return null; // Don't render the dialog if it's not open or product data is not available
    }

    const handleAddCart = async () => {
        try {
            await CartItemApi.putCartItem(productId, quantity);
        } catch (error) {
            console.error('Error fetching product data:', error);
        }
    }

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="productDialog-container">
            <Dialog className="dialog" open={open} onClose={handleClose}
                    sx=
                        {{
                            '& .MuiDialog-paper':
                                {
                                    backgroundColor: 'rgb(111,111,111,0.89)',
                                    maxWidth: '70%',
                                    width: '100%',
                                    height: '80%',
                                    borderRadius: '0px',
                                    boxShadow: '0 0 13px rgba(255, 255, 255, 0.36)',

                                }
                        }}>
                <DialogTitle className="DialogProductName"
                             sx={{
                                 fontFamily: "'Forum', serif",
                                 fontWeight: 400,
                                 fontStyle: 'normal',
                             }}
                >

                    {product.productName}
                </DialogTitle>
                <DialogContent dividers
                               sx=
                                   {{
                                       display: 'flex',
                                       alignItems: 'flex-start',
                                   }}>
                    <img src={product.imageUrl} alt={product.productName} style={{width: '50%', marginRight: '1vw'}}/>
                    <DialogContentText gutterBottom
                                       sx=
                                           {{
                                               color: 'white',
                                               fontFamily: "'Forum', serif",
                                               fontWeight: 400,
                                               fontStyle: 'normal',
                                           }}
                    >
                        {product.description}
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <Typography gutterBottom
                                    sx={{
                                        fontFamily: "'Forum', serif",
                                        fontWeight: 400,
                                        fontStyle: 'normal',
                                    }}>
                            HKD:&nbsp;{product.productPrice}
                        </Typography>
                        <Typography gutterBottom
                                    sx={{
                                        fontFamily: "'Forum', serif",
                                        fontWeight: 400,
                                        fontStyle: 'normal',
                                    }}>
                            Stock:&nbsp;{product.stock}
                        </Typography>

                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <IconButton aria-label="close" onClick={handleClose}
                                sx=
                                    {{
                                        position: 'absolute',
                                        right: 8,
                                        top: 8,
                                        color: (theme) => theme.palette.grey[500],
                                    }}>
                        <CloseIcon/>
                    </IconButton>
                    <div className="ProductDetailQuantityButton">
                        <QuantityButton quantityDto={quantity} handleIncrease={handleIncrease}
                                        handleDecrease={handleDecrease}/>
                        <IconButton
                            onClick={handleAddCart}
                            sx={{
                                color: (theme) => theme.palette.grey[500],
                            }}>
                            <AddShoppingCartIcon/>
                        </IconButton>
                    </div>
                </DialogActions>
            </Dialog>
        </div>
    );
};




