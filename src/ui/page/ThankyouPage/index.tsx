import {useEffect} from "react";
import "../../../css/ThanksPageCss/ThankyouCss.css"


export default function ThankyouPage() {
    const RedirectPage = () => {
        useEffect(() => {
            const timeoutId = setTimeout(() => {
                window.location.href = '/product';
            }, 7000); //

            return () => clearTimeout(timeoutId);
        }, []);

        return null;
    }

        return (
            <>
                <div className='video-background'>
                    <video className='video' autoPlay muted loop>
                        <source src="src/ui/img/Loading/Thank you.mp4" type="video/mp4"/>
                           Your browser does not support the video tag.
                    </video>
                </div>

                <RedirectPage/>

            </>
)

}

