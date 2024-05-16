import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {IconButton, Snackbar, Typography} from "@mui/material";
import QuantityButton from "./QuantityButton.tsx";
import CloseIcon from '@mui/icons-material/Close';
import "../../css/ProductPageCss/ProductDetails.css"
import {GetProductbyId} from "../../data/product/getProductbyIdData.Type.ts";
import {useEffect, useState} from "react";
import * as CartItemApi from "../../api/CartApi.ts";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "../../css/fontsCss.css"


type Props = {
  open: boolean,
  handleClose: () => void,
  getProductbyId: (pid: number) => Promise<GetProductbyId>,
  productId: number,

}


export const DialogComponent = ({open, handleClose, getProductbyId, productId}: Props) => {
  const [product, setProduct] = useState<GetProductbyId | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const data = await getProductbyId(productId);
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    if (open && productId) {
      setQuantity(1)
      fetchProductData();
    }
  }, [open, productId, getProductbyId]);

  if (!open || !product) {
    return null;
  }

  const handleAddCart = async () => {
    try {
      await CartItemApi.putCartItem(productId, quantity);
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 2000);
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
      <Dialog className='dialog' open={open} onClose={handleClose}
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
                      transition: 'border-color 0.3s ease-in-out',

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
                                 whiteSpace: 'pre-wrap',
                               }}
          >
            {product.description}

            <Typography gutterBottom
                        sx={{
                          fontFamily: "'Forum', serif",
                          fontWeight: 400,
                          fontStyle: 'normal',
                          paddingTop: '20%',
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
        <Snackbar
          open={showMessage}
          message="Item added to cart"
          autoHideDuration={5000}
          onClose={() => setShowMessage(false)}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          sx={{
            '& .MuiSnackbarContent-root': {
              display: 'flex',
              justifyContent:'center',
              background: 'radial-gradient(circle, rgba(0,0,0,0.8603816526610644) 3%, rgba(37,37,37,0.8463760504201681) 17%, rgba(60,59,59,0.8855917366946778) 32%, rgba(0,0,0,0.40940126050420167) 56%)',
              boxShadow: '0 0 15px rgba(255, 255, 255, 0.4)',
              color:'white',
              fontSize:'1.12rem',
            }
          }}
        />
      </Dialog>
    </div>
  );
};




