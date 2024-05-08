import "../../../css/ThankyouCss.css"
import {Typography} from "@mui/material";


export default function ThankyouPage(){
    return(
        <>
            <div className='ThankyouPage'></div>
            <div className='Thankslayer'>
                <Typography
                    sx={{
                        justifyContent: 'centre',
                        textAlign: 'centre',
                        fontSize: '4rem',
                        fontFamily: "'Forum', serif",
                        fontWeight: 400,
                        fontStyle: 'normal',
                        color:'white',
                        textShadow:'rgb(255,255,255,0.5)',
                        textWrap:'wrap',
                        transform: 'translate(-1%, 400%)',

                }}>
                    "Every moment is a fresh beginning."<br/>

                </Typography>
            </div>
        </>


    )
}