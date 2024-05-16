import {Link, useLocation} from "react-router-dom";
import "../../css/Navbar(Home)Css/NavbarHomepageCss.css";
import {useContext, useEffect, useState} from "react";
import {UserData} from "../../data/user/UserData.ts";
import {LoginUserContext} from "../../context/LoginUserContext.ts";
import * as FirebaseAuthService from "../../authService/FirebaseAuthService.ts";
import {CircularProgress, Typography} from "@mui/material";
import "../../index.css"


export default function NavbarHomePage() {
    const [loggedIn] = useState<boolean>(false);
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const loginUser = useContext<UserData | null | undefined>(LoginUserContext);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    }
    const handleMenuClose = () => {
        setMenuOpen(false);

    }


    const renderLoginUser = () => {
        if (loginUser) {
            return (
                <nav className="navbar">
                    <ul className="nav-list">
                        <li className="nav-item"><Link to="/product">PRODUCT</Link></li>
                        <li className="nav-item"><Link to="/">HOME</Link></li>
                        <li className="nav-item"
                            onClick={() => {
                                FirebaseAuthService.handleSignOut()
                            }}><Link to="/login">LOGOUT</Link></li>
                    </ul>
                </nav>
            )
        } else if (loginUser === null) {
            return (

                <nav className="navbar">
                    <ul className="nav-list">
                        <li className="nav-item"><Link to="/login">LOGIN</Link></li>
                        <li className="nav-item"><Link to="/product">PRODUCT</Link></li>
                        <li className="nav-item"><Link to="/">HOME</Link></li>
                    </ul>
                </nav>

            )
        } else {
            return (
                <CircularProgress color="inherit"/>
            )
        }
    }
    const location = useLocation();

    useEffect(() => {
        setMenuOpen(false);
    }, [location]);

    return (
        <>
            {loggedIn
                ?
                <>
                    <Typography className={menuOpen ? "menu-content-open" : "menu-container"} onClick={handleMenuToggle}

                                sx={{
                                    fontFamily: "'Forum', serif",
                                    fontWeight: 400,
                                    fontStyle: 'normal',
                                }}
                    >
                        MENU
                    </Typography>

                    <div className="li-container">
                        <ul className={`menu-items ${menuOpen ? 'active' : ''}`} onClick={handleMenuClose}>
                            {renderLoginUser()}
                        </ul>
                    </div>
                </>
                :
                <>
                    <div className="loggedin-container"
                         style={{
                             display: "flex",
                             flexDirection: "row",
                             justifyContent: "flex-end",

                         }}>
                        <Typography className={menuOpen ? "email-menu-open":"email-menu-close"}
                                    sx={{
                                        fontFamily: "'Forum', serif",
                                        fontWeight: 400,
                                        fontStyle: 'normal',
                                        color:'rgba(133,133,133,0.75)',
                                        textShadow: '1px 1px 1px rgba(255, 255, 255, 0.6), ' +
                                            '-0.7px -0.7px 1px rgba(133, 133, 133, 0.64)',

                                    }}
                        >
                            {loginUser && loginUser.email}&nbsp;&nbsp;
                        </Typography>
                        <Typography
                                    onClick={handleMenuToggle}
                                    sx={{
                                        fontFamily: "'Forum', serif",
                                        fontWeight: 400,
                                        fontStyle: 'normal',
                                    }}
                        >

                            <Link to="/shoppingcart" className={menuOpen? 'cart-menu-open':'cartNavBar'} style={{textDecoration: 'none'}}>
                                &nbsp;CART
                            </Link>
                        </Typography>
                        <Typography className={menuOpen ? "menu-content-open" : "menu-container"}
                                    onClick={handleMenuToggle}
                                    sx={{
                                        fontFamily: "'Forum', serif",
                                        fontWeight: 400,
                                        fontStyle: 'normal',
                                    }}
                        >
                            &nbsp;&nbsp;&nbsp;MENU
                        </Typography>

                    </div>

                    <div className="li-container">
                        <ul className={`menu-items ${menuOpen ? 'active' : ''}`} onClick={handleMenuClose}>
                            {renderLoginUser()}
                        </ul>
                    </div>
                </>

            }
        </>
    )

}