import "../../../css/HomePageCss.css"
import facebook from "../../icon/socialmedia/facebook.png"
import youtube from "../../icon/socialmedia/youtube.png"
import logo from "../../icon/logo/FUJI.png"
import logotrans from "../../icon/logo/FUJI_trans.png"
import Navbar from "../../component/Navbar.tsx";


export default function HomePage() {


    return (

        <body>
        <div className='HomePage'>
            <div className="HomePageNavbar"><Navbar/></div>
            <div className="logo-overlay">
                <img src={logotrans} alt="FUJI_trans"/>
            </div>
        </div>
        <div className="HomePage-body">
            <div className='supportlist'>
                <h4> SUPPORT </h4>
                <li> Manual</li>
                <li> Compatibility</li>
                <li> FAQ</li>
                <li> Product Security information</li>
            </div>
            <div className='x-Photographers'>

                <p><h4> X-Photographers</h4>
                    <h5> X-Stories </h5></p>
            </div>
            <div className='follow-us'>
                <p>
                    <h4> FOLLOW US </h4>
                    <h5> Global </h5>
                    <li className='social-media'>
                        <img src={facebook} width="28" height="25"/>
                        <img src={youtube} width="28" height="25"/>
                    </li>
                </p>
            </div>
        </div>
        <footer className='footer'>
            <img src={logo} width="60" height="60"/>
            <h6>©FUJI Corporation.</h6>
            <div className='footer-items'>
                <li><h6>CONTACT |</h6></li>
                <li><h6>PRIVACY POLICY |</h6></li>
                <li><h6>TERMS OF USE |</h6></li>
                <li><h6>COOKIE SETTINGS</h6></li>
            </div>
        </footer>
        </body>


    )
}