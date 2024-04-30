import { styled, tableCellClasses} from "@mui/material";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import {TransactionProductDto} from "../../data/transaction/TransactionDataType.ts";

type Props={
    data:TransactionProductDto;
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


export default function TransactionTableRow ({data}:Props){
    // const handleDeleteCartItem = async (pid:number)=>{
    //     try {
    //         await CartItemApi.deleteCartItem(pid);
    //         const latestDto=dto.filter((updateData)=> (updateData.pid!==pid
    //             )
    //         )
    //         setCartItemData(latestDto);
    //         console.log('Delete CartItem',pid);
    //     } catch (error) {
    //         console.error('Error fetching product data:', error);
    //     }
    // }

    return(
        <StyledTableRow >
            <StyledTableCell component="th" scope="row">
                <img src={data.product.imageUrl} height='160px'/>
            </StyledTableCell>
            <StyledTableCell style={{maxWidth: '200px'}} align="left">
                {data.product.productName}
            </StyledTableCell>
            <StyledTableCell style={{maxWidth: '120px'}} align="center">
                $&nbsp;{data.subtotal}
            </StyledTableCell>
            <StyledTableCell style={{maxWidth: '120px'}} align="center">
                {data.quantity}
            </StyledTableCell>

        </StyledTableRow>

    )
}