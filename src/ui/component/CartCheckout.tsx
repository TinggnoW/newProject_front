import {Box, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import Divider from '@mui/joy/Divider';
import {useNavigate} from "react-router-dom";
import * as TransactionApi from "../../api/TransactionApi.ts";
import "../../css/CartPageCss/CartCheckoutCss.css"


type Props = {
    total: number
}

export default function CartCheckout({total}: Props) {
    const navigate = useNavigate();

    const handleCheckout = async () => {
        try {
            const data = await TransactionApi.createNewTransaction();
            navigate(`/checkout/${data.tid}`)
        } catch (error) {
            console.error('Error fetching product data:', error);
        }
    };
    return (

        <Box className="cartcheckout">
            <Typography className='Summary'
                        sx={{
                            fontFamily: "'Forum', serif",
                            fontWeight: 400,
                            fontSize: {lg: '50px', marginLeft: '2.3vw'},
                        }}>
                Order Summary
            </Typography>
            <Typography className='Total'
                        sx={{
                            fontFamily: "'Forum', serif",
                            fontWeight: 400,
                            fontSize: {lg: '18px'},
                            marginLeft: '2.5vw',
                            top: '30%',
                        }}>
                Subtotal $&nbsp;{total}
            </Typography>
            <Divider sx={{zIndex: '10'}}/>
            <Typography className='ShippingFee'
                        sx={{
                            fontFamily: "'Forum', serif",
                            fontWeight: 400,
                            fontSize: {lg: '18px'},
                            marginLeft: '2.5vw',
                            top: '40%',
                            whiteSpace: 'pre-wrap',
                        }}>
                Shipping Fee $&nbsp; 500
            </Typography>
            <Button className='checkoutButton'
                    variant="contained"
                    onClick={handleCheckout}
                    sx={{
                        fontFamily: "'Forum', serif",
                        fontWeight: 400,
                        backgroundColor: '#3b3839',
                        borderRadius: '1px',
                        '&:hover': {
                            backgroundColor: '#e2e1e1',
                            boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)'
                        }
                    }}
            >
                Check Out
            </Button>
        </Box>
    );
}
