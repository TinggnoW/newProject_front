import "../../../css/HomePageCss/HomePageCss.css"
import NavbarHomePage from "../../component/NavbarHomePage.tsx";
import Footer from "../../component/Footer.tsx";
import logo from "../../icon/logo/FUJI_Trans.png"
import HomeLoading from "../../component/LoadingPage/HomeLoading.tsx";
import {useEffect, useState} from "react";


export default function HomePage() {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsLoading(false);
        }, 3000);
        return () => clearTimeout(timeoutId);
    }, []);

    if (isLoading) {
        return <HomeLoading/>;
    }

    return (

        <>
            <div className='HomePage'>
                <NavbarHomePage/>
                <div className="logo-overlay">
                    <img src={logo} alt="FUJI_trans"/>
                </div>
            </div>
            <Footer/>
        </>

    )
}