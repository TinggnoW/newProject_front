import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {IconButton} from "@mui/material";
import "../../css/QuantityButton.css"

type Props= {
    quantityDto: number;
    handleIncrease:()=>void;
    handleDecrease:()=>void;
}

export default function QuantityButton({quantityDto,handleIncrease,handleDecrease}: Props) {

    return (
        <div className="button-container">

            <IconButton
                onClick={handleDecrease}
                sx={{
                    color: (theme) => theme.palette.grey[500],
                }}>
                <RemoveIcon/>
            </IconButton>

            <div className="Quantity-box">{quantityDto}</div>

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