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

    return(
        <StyledTableRow >
            <StyledTableCell
                style={{
                    maxWidth: '200px',
                    }}
                component="th" scope="row">
                <img src={data.product.imageUrl} height='160px' width='160px'/>
            </StyledTableCell>
            <StyledTableCell
                style= {{
                        maxWidth: '200px',
                        fontFamily: "'Forum', serif",
                        fontWeight: 400,
                        fontStyle: 'normal',
                        }}
                align="center">
                {data.product.productName}
            </StyledTableCell>
            <StyledTableCell
                style={{maxWidth: '120px',
                        fontFamily: "'Forum', serif",
                        fontWeight: 400,
                        fontStyle: 'normal',}}
                             align="center">
                $&nbsp;{data.subtotal}
            </StyledTableCell>
            <StyledTableCell
                style={{
                        maxWidth: '120px',
                        fontFamily: "'Forum', serif",
                        fontWeight: 400,
                        fontStyle: 'normal'
                        }}
                align="center">
                {data.quantity}
            </StyledTableCell>
        </StyledTableRow>

    )
}