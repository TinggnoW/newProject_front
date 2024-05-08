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
import * as TransactionApi from "../../api/TransactionApi.ts";
import {TransactionDto} from "../../data/transaction/TransactionDataType.ts";
import {useNavigate} from "react-router-dom";

type Props = {
    dto: TransactionDto;
}

export default function CreditCardForm({dto}: Props) {
    const navigate = useNavigate();
    const handlePayment = async () => {
        try {
            await TransactionApi.payTransaction(dto.tid.toString());
            await TransactionApi.finishTransactionByTid(dto.tid.toString());
            navigate(`/thankyou`);
        } catch (error) {
            console.error('Error fetching product data:', error);
        }
    };

    return (
        <Box sx={{
            display: 'grid',
            width: '40vw',
            position: 'relative',
            // top:'5%',
            paddingLeft:'3rem'
            // paddingTop:'14rem',

        }}>
            <Card
                variant="outlined"
                sx={{
                    backgroundColor: 'rgba(66,62,62,0.45)',
                    boxShadow: '0 0 20px rgba(130, 99, 92, 1)',
                    borderRadius: '1px',
                    border: 0,
                    width: '30vw',
                    margin: 'auto',
                    display: 'grid',
                    gap: '1rem',

                }}
            >

                <Divider inset="none"/>
                <CardContent
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: ['repeat(2, minmax(80px, 1fr))'],
                        gap: 3,
                    }}
                >
                    <FormControl sx={{gridColumn: '1/-1'}}>
                        <FormLabel
                            sx={{
                                fontFamily: "'Forum', serif",
                                fontWeight: 400,
                            }}>
                            Card number
                        </FormLabel>
                        <Input endDecorator={<CreditCardIcon/>}/>
                    </FormControl>
                    <FormControl>
                        <FormLabel sx={{
                            fontFamily: "'Forum', serif",
                            fontWeight: 400,

                        }}>Expiry date</FormLabel>
                        <Input endDecorator={<CreditCardIcon/>}/>
                    </FormControl>
                    <FormControl>
                        <FormLabel sx={{
                            fontFamily: "'Forum', serif",
                            fontWeight: 400,
                        }}>CVC/CVV</FormLabel>
                        <Input endDecorator={<InfoOutlined/>}/>
                    </FormControl>
                    <FormControl sx={{gridColumn: '1/-1'}}>
                        <FormLabel sx={{
                            fontFamily: "'Forum', serif",
                            fontWeight: 400,
                        }}>Card holder name</FormLabel>
                        <Input sx={{
                            fontFamily: "'Forum', serif",
                            fontWeight: 400,
                        }}
                               placeholder="Enter cardholder's full name"/>
                    </FormControl>
                    <CardActions sx={{gridColumn: '1/-1'}}>
                        <Button
                            sx={{
                                position: 'absolute',
                                width: '30%',
                                fontFamily: "'Forum', serif",
                                fontWeight: 400,
                                left: '34%',
                                top: '94%',
                                backgroundColor: '#3b3839',
                                borderRadius: '1px',
                                '&:hover': {
                                    color: 'black',
                                    backgroundColor: '#e2e1e1',
                                    boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)'
                                },
                                letterSpacing: '3px',
                            }}
                            onClick={handlePayment}
                        >
                            Pay
                        </Button>
                    </CardActions>
                </CardContent>
            </Card>
        </Box>

    );
}