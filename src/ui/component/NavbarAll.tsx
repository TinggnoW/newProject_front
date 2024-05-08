import {Link, useLocation} from "react-router-dom";
import "../../css/NavbarAll.css";
import {useContext, useEffect, useState} from "react";
import {UserData} from "../../data/user/UserData.ts";
import {LoginUserContext} from "../../context/LoginUserContext.ts";
import * as FirebaseAuthService from "../../authService/FirebaseAuthService.ts";
import {CircularProgress, Typography} from "@mui/material";




export default function NavbarAll() {
    const [loggedIn] = useState<boolean>(false);
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const loginUser = useContext <UserData|null|undefined>(LoginUserContext);

    const handleMenuToggle = () =>{
        setMenuOpen(!menuOpen);
    }
    const handleMenuClose = () =>{
        setMenuOpen(false);

    }



    const renderLoginUser = () =>{
        if(loginUser){
            return (
            <nav className="navbarAll">
                <ul className="nav-list-All">
                    <li className="nav-item-All"><Link to="/shoppingcart">CART</Link></li>
                    <li className="nav-item-All"><Link to="/product">PRODUCT</Link></li>
                    <li className="nav-item-All"><Link to="/">HOME</Link></li>
                    <li className="nav-item-All"
                        onClick={() => {
                            FirebaseAuthService.handleSignOut()
                        }}><Link to="/login">LOGOUT</Link></li>
                </ul>
            </nav>
        )
        } else if (loginUser === null) {
            return (

            <nav className="navbarAll">
                <ul className="nav-list-All">
                    <li className="nav-item-All"><Link to="/login">LOGIN</Link></li>
                    <li className="nav-item-All"><Link to="/product">PRODUCT</Link></li>
                    <li className="nav-item-All"><Link to="/">HOME</Link></li>
                </ul>
            </nav>

            )
        }else{
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
                <Typography className={menuOpen?"menu-content-open-All":"menu-container-All"} onClick={handleMenuToggle}
                            sx={{
                                fontFamily: "'Forum', serif",
                                fontWeight: 400,
                                fontStyle: 'normal',
                            }}
                >
                     MENU
                </Typography>

                <div className="li-container-All">
                    <ul className={`menu-items-All ${menuOpen ? 'active' : ''}`} onClick={handleMenuClose}>
                        {renderLoginUser()}
                    </ul>
                </div>
                </>
                :
                <>
                <Typography className={menuOpen?"menu-content-open-All":"menu-container-All"} onClick={handleMenuToggle}
                            sx={{
                                fontFamily: "'Forum', serif",
                                fontWeight: 400,
                                fontStyle: 'normal',
                            }}
                >
                    {loginUser && loginUser.email}&nbsp;&nbsp;&nbsp;MENU
                </Typography>
                <div className="li-container-All">
                    <ul className={`menu-items-All ${menuOpen ? 'active' : ''}`} onClick={handleMenuClose}>
                        {renderLoginUser()}
                    </ul>
                </div>
                </>

            }
        </>
    )

}