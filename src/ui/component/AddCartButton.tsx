import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {IconButton} from "@mui/material";
import "../../css/QuantityButton.css"

export default function AddCartButton() {



    return (

        <IconButton
            sx={{
                color: (theme) => theme.palette.grey[500],
            }}>
            <AddShoppingCartIcon/>
        </IconButton>

    );

}