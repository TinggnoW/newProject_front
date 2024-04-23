import CloseIcon from '@mui/icons-material/Close';
import {IconButton} from "@mui/material";


export default function RemoveButton(){
    return(
        <IconButton
            sx={{
                color: (theme) => theme.palette.grey[500],
        }}>
            <CloseIcon/>

        </IconButton>
    );
}