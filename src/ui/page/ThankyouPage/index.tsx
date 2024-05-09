import {Typography} from '@mui/material';
import {useEffect} from "react";
import "../../../css/ThankyouCss.css"


export default function ThankyouPage() {
    const RedirectPage = () => {
        useEffect(() => {
            const timeoutId = setTimeout(() => {
                window.location.href = '/product'; // Change the URL to the desired destination
            }, 2000); //

            return () => clearTimeout(timeoutId);
        }, []);

        return null;
    }

        return (
            <>
                <div className='ThankyouPage'></div>
                <div className='Thankslayer'>
                    <Typography
                        sx={{
                            justifyContent: 'center',
                            textAlign: 'center',
                            fontSize: '4rem',
                            fontFamily: "'Forum', serif",
                            fontWeight: 400,
                            fontStyle: 'normal',
                            color: 'white',
                            textShadow: 'rgb(255,255,255,0.5)',
                            textWrap: 'wrap',
                            transform: 'translate(-1%, 400%)',
                        }}
                    >
                        "Every moment is a fresh beginning."<br/>
                    </Typography>
                </div>
                <RedirectPage/>
            </>
        )

}

