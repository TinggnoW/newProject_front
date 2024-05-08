import "../../../css/HomePageCss.css"
import NavbarHomePage from "../../component/NavbarHomePage.tsx";
import Footer from "../../component/Footer.tsx";
import logo from "../../icon/logo/FUJI_Trans.png"


export default function HomePage() {


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