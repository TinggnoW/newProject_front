import "../../css/ShoppingCartCss.css"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {styled, tableCellClasses} from "@mui/material";
import QuantityButton from "./QuantityButton.tsx";
import RemoveButton from "./RemoveButton.tsx";
import gfx000 from "../img/product-mock/gfx000.png";
import x100v from "../img/product-mock/x100v.png";
import CartCheckout from "./CartCheckout.tsx";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#3b3839',
        color: theme.palette.common.white,
        position: 'sticky',
        top:0,
        zIndex:1,

    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        color: theme.palette.common.white,
        textWrap:true,

    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },

}));

function createData(
    img:string,
    product: string,
    price: number,
) {
    return { img, product, price};
}

const rows = [
    createData(gfx000, 'GFX 000', 280000),
    createData(x100v, 'X 100 v', 240000),
    createData(x100v, 'X 100 v', 240000),
    // createData(x4, 'X - e4', 250000),
    // createData(xt200, 'X - t200', 380000),
    // createData(gfx000, 'X - t200', 280000),

];



export default function ShoppingCartTable(){
    return (
        <body className="ShoppingCartContainer">
        <TableContainer style={{ maxHeight: 900, overflowY: 'auto' }} >
            <Table sx={{
                minWidth: 600,
                maxWidth: 700,
                maxHeight: 700,
                backgroundColor:'rgb(111,111,111,0.9)',
                marginLeft:'100px',
                marginTop:'20px'

            }} aria-label="customized table">
                <TableHead>
                    <TableRow >
                        <StyledTableCell></StyledTableCell>
                        <StyledTableCell align="left">PRODUCT</StyledTableCell>
                        <StyledTableCell align="center">PRICE</StyledTableCell>
                        <StyledTableCell align="center">QUANTITY</StyledTableCell>
                        <StyledTableCell align="center">REMOVE</StyledTableCell>
                    </TableRow>
                </TableHead>
                {/*mapping above data*/}
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.img}>
                            <StyledTableCell component="th" scope="row">
                                <img src={row.img} width='120px' height='120px' />
                            </StyledTableCell>
                            <StyledTableCell style={{minWidth:'200px',maxWidth:'200px'}} align="left">{row.product}</StyledTableCell>
                            <StyledTableCell style={{minWidth:'120px',maxWidth:'120px'}} align="center"> $&nbsp;{row.price}</StyledTableCell>
                            <StyledTableCell style={{minWidth:'120px',maxWidth:'120px'}} align="center"> <QuantityButton/></StyledTableCell>
                            <StyledTableCell style={{minWidth:'100px',maxWidth:'100px'}} align="center"> <RemoveButton/></StyledTableCell>

                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        <CartCheckout/>
        </body>


    );
}
