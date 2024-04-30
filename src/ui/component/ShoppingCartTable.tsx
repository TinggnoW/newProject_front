import "../../css/ShoppingCartCss.css"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {Box, styled, tableCellClasses} from "@mui/material";
import {CartItemData} from "../../data/product/cartItemData.Type.ts";
import ShoppingCartTableRow from "./ShoppingCartTableRow.tsx";
import {Dispatch, SetStateAction, useEffect, useState} from "react";


type Props = {
    dto: CartItemData[] ;
    setCartItemData:Dispatch<SetStateAction<CartItemData[] | undefined>>;
}

const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#3b3839',
        color: theme.palette.common.white,
        position: 'sticky',
        top: 0,
        zIndex: 1,

    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        color: theme.palette.common.white,
        textWrap: true,

    },
}));

export default function ShoppingCartTable({dto,setCartItemData}: Props) {
    const [totalpx, setTotalpx] = useState<number>(0);
    let total = 0;
    const handleCalTotalPx = (dtolist:CartItemData[])=>{
        for(const item of dtolist){
            total+=item.price*item.cartQuantity;
        }return(
            total
        );
    }
    useEffect(() => {
        setTotalpx(handleCalTotalPx(dto))
    }, [dto]);
    return (
        <Box className="ShoppingCartContainer"
        sx={{
            width: '70vw',
        }}>
                <TableContainer
                    style={{
                        height:680,
                        overflowY: 'auto',
                        paddingRight: '1vw',
                        paddingLeft: '1vw',
                    }}>
                    <Table sx={{
                        marginTop: '3vh',
                        justifyContent:'center',
                        backgroundColor: 'rgb(111,111,111,0.9)',

                    }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell align="left">PRODUCT</StyledTableCell>
                                <StyledTableCell align="center">PRICE</StyledTableCell>
                                <StyledTableCell align="center">QUANTITY</StyledTableCell>
                                <StyledTableCell align="center">REMOVE</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            {dto.map((responseCartData) => (
                            <ShoppingCartTableRow data={responseCartData} dto={dto} setCartItemData={setCartItemData} />

                        ))}</TableBody>

                    </Table>
                </TableContainer>
        </Box>


    );
}
