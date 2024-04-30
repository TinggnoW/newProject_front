import {Box, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
import * as TransactionApi from "../../api/TransactionApi.ts";

export default function CartCheckout (){
    const navigate = useNavigate();

    const handleCheckout = async () => {
        try {
            const data = await TransactionApi.createNewTransaction();
            navigate(`/checkout/${data.tid}`)
        } catch (error) {
            console.error('Error fetching product data:', error);
        }
    };
    return(

        <Box sx={{
            position:'relative',
            width: "40vw",
            height: "60vh",
            marginTop: '3vh',
            marginRight: '2vh',
            marginLeft: '2vh',
            backgroundColor: 'rgb(111,111,111,1)',
            boxShadow: '0 0 15px rgba(255, 255, 255, 0.5)',

        }}>

                <Typography sx={{
                    position: 'absolute',
                    fontSize:{lg:'40px'},
                    color: 'white',
                    top: '8%',
                    marginLeft: '2vw',
                }}>
                    $&nbsp;3459080000
                </Typography>
                <Typography sx={{
                    position: 'absolute',
                    fontSize:{lg:'20px'},
                    color: 'white',
                    top: '20%',
                    marginLeft: '2vw',

                }}>
                    Get 3% Discount ($&nbsp;3459042000)
                </Typography>
                <Typography sx={{
                    position: 'absolute',
                    fontSize:{lg:'10px'},
                    color: 'white',
                    top: '40%',
                    marginLeft: '2vw',

                }}>
                    GET FUJI CARE <br/>
                    FUJICare+ for Headphones<br/>
                    $59.00or$9.83/mo.per month for 6 mo.monthsFootnote*<br/>
                    Get up to two years of unlimited repairs for accidental damage protection<br/>
                    and additional tech support
                </Typography>

                <Button
                    variant="contained"
                    disableElevation

                    onClick={handleCheckout}
                    sx={{
                        position: 'absolute',
                        bgcolor: '#3b3839',
                        color: 'white',
                        width: '75%',
                        height: '8%',
                        left: '12.5%',
                        bottom:'-4.5%',

                        borderRadius: '1px',
                        '&:hover': {
                            bgcolor: '#e2e1e1',
                            boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
                            color: 'black',
                        }
                    }}>
                    Check Out
                </Button>
        </Box>
    );
}
