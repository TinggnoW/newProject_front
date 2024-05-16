import QuantityButton from "./QuantityButton.tsx";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import {CartItemData} from "../../data/product/cartItemData.Type.ts";
import {styled, tableCellClasses} from "@mui/material";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import * as CartItemApi from "../../api/CartApi.ts";
import {Dispatch, SetStateAction} from "react";

type Props = {
    data: CartItemData;
    dto: CartItemData[];
    setCartItemData: Dispatch<SetStateAction<CartItemData[] | undefined>>;

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

const StyledTableRow = styled(TableRow)(({theme}) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },

}));


export default function ShoppingCartTableRow({data, dto, setCartItemData}: Props) {
    const handleDeleteCartItem = async (pid: number) => {
        try {
            await CartItemApi.deleteCartItem(pid);
            const latestDto = dto.filter((updateData) => (updateData.pid !== pid
                )
            )
            setCartItemData(latestDto);
            console.log('Delete CartItem', pid);
        } catch (error) {
            console.error('Error fetching product data:', error);
        }
    }
    const handlePatchIncrease = async (pid: number, cartQuantity: number) => {
        // if(data.stock>>(cartQuantity+1)) {

        try {
            const latestDto = await CartItemApi.updateCartItem(pid, cartQuantity + 1);
            const updatelist = dto.map((updatedata) => {
                if (latestDto.pid === updatedata.pid) {
                    updatedata.cartQuantity = latestDto.cartQuantity
                }
                return updatedata;
            })
            setCartItemData(updatelist);
            console.log(cartQuantity)
        } catch (error) {
            console.error('Error fetching product data:', error);
        }
        // }
    };

    const handlePatchDecrease = async (pid: number, cartQuantity: number) => {
        if (cartQuantity > 1) {
            try {
                const latestDto = await CartItemApi.updateCartItem(pid, cartQuantity - 1);
                const updatelist = dto.map((updatedata) => {
                    if (latestDto.pid === updatedata.pid) {
                        updatedata.cartQuantity = latestDto.cartQuantity
                    }
                    return updatedata;
                })

                setCartItemData(updatelist);
                console.log(cartQuantity)
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        }
    };

    return (
        <StyledTableRow>
            <StyledTableCell component="th" scope="row">
                <img src={data.imageUrl} height='160px'/>
            </StyledTableCell>
            <StyledTableCell
                style={{
                    maxWidth: '200px',
                    fontFamily: "'Forum', serif",
                    fontWeight: 400,
                    fontStyle: 'normal'
                }}
                align="left">
                {data.name}
            </StyledTableCell>
            <StyledTableCell
                style={{
                    maxWidth: '120px',
                    fontFamily: "'Forum', serif",
                    fontWeight: 400,
                    fontStyle: 'normal'
                }}
                align="center">
                $&nbsp;{data.price}
            </StyledTableCell>
            <StyledTableCell
                style={{
                    fontFamily: "'Forum', serif",
                    fontWeight: 400,
                    fontStyle: 'normal',
                    maxWidth: '120px'
                }} align="center">
                <QuantityButton quantityDto={data.cartQuantity}
                                handleDecrease={() => handlePatchDecrease(data.pid, data.cartQuantity)}
                                handleIncrease={() => handlePatchIncrease(data.pid, data.cartQuantity)}/>
            </StyledTableCell>
            <StyledTableCell
                style={{
                    fontFamily: "'Forum', serif",
                    fontWeight: 400,
                    fontStyle: 'normal',
                    maxWidth: '100px'
                }}
                align="center"
            >
                <Button
                    onClick={
                        () => handleDeleteCartItem(data.pid)}
                    sx={{
                        color: (theme) => theme.palette.grey[500],
                    }}>
                    <CloseIcon/>
                </Button>
            </StyledTableCell>

        </StyledTableRow>

    )
}