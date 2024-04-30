import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardContent from '@mui/joy/CardContent';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import {Box} from "@mui/material";

export default function CreditCardForm() {
    return (
        <Box  sx={{
                display: 'grid',
                justifyContent: 'flex-end',
                paddingRight: '2rem',
                paddingTop:'14rem',
        }}>
            <Card
            variant="outlined"
            sx={{
                backgroundColor: 'rgb(111,111,111,1)',
                boxShadow: '0 0 15px rgba(255, 255, 255, 0.5)',
                borderRadius: '1px',
                border:0,
                Width: '35%',
                margin: 'auto',
                display: 'grid',
                placeItems: 'center',
                gap:'1rem',
            }}
        >

            <Divider inset="none" />
            <CardContent
                sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, minmax(80px, 1fr))',
                    gap: 3,
                }}
            >
                <FormControl sx={{ gridColumn: '1/-1' }}>
                    <FormLabel>Card number</FormLabel>
                    <Input endDecorator={<CreditCardIcon />} />
                </FormControl>
                <FormControl>
                    <FormLabel>Expiry date</FormLabel>
                    <Input endDecorator={<CreditCardIcon />} />
                </FormControl>
                <FormControl>
                    <FormLabel>CVC/CVV</FormLabel>
                    <Input endDecorator={<InfoOutlined />} />
                </FormControl>
                <FormControl sx={{ gridColumn: '1/-1' }}>
                    <FormLabel>Card holder name</FormLabel>
                    <Input placeholder="Enter cardholder's full name" />
                </FormControl>
                <CardActions sx={{ gridColumn: '1/-1' }}>
                    <Button
                        sx={{
                            position: 'absolute',
                            bgcolor: '#3b3839',
                            color: 'white',
                            width: '65%',
                            height: '8%',
                            left: '18%',
                            bottom:'-4.5%',

                            borderRadius: '1px',
                            '&:hover': {
                                bgcolor: '#e2e1e1',
                                boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
                                color: 'black',
                            }
                        }}>
                        Pay
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
        </Box>

    );
}