import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {IconButton} from "@mui/material";
import React from "react";
import "../../css/QuantityButton.css"

export default function QuantityButton() {
    const [quantity, setQuantity] = React.useState(1);

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="button-container">

            <IconButton
                onClick={handleDecrease}
                sx={{
                    color: (theme) => theme.palette.grey[500],
                }}>
                <RemoveIcon/>
            </IconButton>

            <div className="Quantity-box">{quantity}</div>

            <IconButton
                onClick={handleIncrease}
                sx={{
                    color: (theme) => theme.palette.grey[500],
                }}>
                <AddIcon/>
            </IconButton>

        </div>

);

}