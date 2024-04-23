import {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import "../../css/Navbar.css";
import Menuicon from "../../ui/icon/menu/menu.png"



export default function Navbar(){
    const [loggedIn, ] = useState<boolean>(false);
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const location = useLocation();

    // Close the menu when the user navigates to a different page
    useEffect(() => {
        setMenuOpen(false);
    }, [location]);

    return (
        <div>
            {loggedIn
                ?
                <div className="menu-container">
                    <div className="menu-icon" onMouseEnter={() => setMenuOpen(!menuOpen)}
                         onMouseLeave={() => setMenuOpen(menuOpen)}>
                        <img src={Menuicon} width="15" height="25"/>
                    </div>
                    <ul className={`menu-items ${menuOpen ? 'active' : ''}`}>
                        <li><Link to="/shoppingcart">CART</Link></li>
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/">LOGOUT</Link></li>
                        <li><Link to="/product">PRODUCT</Link></li>
                    </ul>
                </div>
                :
                <div className="menu-container">
                    <div className="menu-icon" onMouseEnter={() => setMenuOpen(!menuOpen)}
                         onMouseLeave={() => setMenuOpen(menuOpen)}>
                        <img src={Menuicon} width="15" height="25"/>
                    </div>
                    <ul className={`menu-items ${menuOpen ? 'active' : ''}`}>
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/login">LOGIN</Link></li>
                        <li><Link to="/product">PRODUCT</Link></li>

                    </ul>
                </div>

            }
        </div>
    );
}