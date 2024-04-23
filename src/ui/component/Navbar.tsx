import { useContext, useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import "../../css/Navbar.css";
import Menuicon from "../../ui/icon/menu/menu.png"
import {UserData} from "../../data/user/UserData.ts";
import {LoginUserContext} from "../../context/LoginUserContext.ts";
import {CircularProgress} from "@mui/material";
import * as FirebaseAuthService from "../../authService/FirebaseAuthService.ts";



export default function Navbar(){
    const [loggedIn] = useState<boolean>(false);
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const loginUser = useContext <UserData|null|undefined>(LoginUserContext);
    const renderLoginUser = () =>{
        if(loginUser){
            return(
                <>
                    <li>{loginUser.email}</li>
                    <li><Link to="/shoppingcart">CART</Link></li>
                    <li><Link to="/product">PRODUCT</Link></li>
                    <li><Link to="/">HOME</Link></li>
                    <li onClick={()=>{
                        FirebaseAuthService.handleSignOut()
                    }}><Link to="/login">LOGOUT</Link></li>


                </>
            )
        } else if(loginUser === null) {
            return (
                <>
                    <li><Link to="/login">LOGIN</Link></li>
                    <li><Link to="/product">PRODUCT</Link></li>
                    <li><Link to="/">HOME</Link></li>
                </>
            )
        }else{
            return (
                <CircularProgress color="inherit"/>
            )
        }
    }
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
                        {renderLoginUser()}
                        {/*<li><Link to="/shoppingcart">CART</Link></li>*/}
                        {/*<li><Link to="/">HOME</Link></li>*/}
                        {/*<li><Link to="/product">PRODUCT</Link></li>*/}
                        {/*<li><Link to="/">LOGOUT</Link></li>*/}
                    </ul>
                </div>
                :
                <div className="menu-container">
                    <div className="menu-icon" onMouseEnter={() => setMenuOpen(!menuOpen)}
                         onMouseLeave={() => setMenuOpen(menuOpen)}>
                        <img src={Menuicon} width="15" height="25"/>
                    </div>
                    <ul className={`menu-items ${menuOpen ? 'active' : ''}`}>
                        {renderLoginUser()}
                        {/*<li><Link to="/">HOME</Link></li>*/}
                        {/*<li><Link to="/product">PRODUCT</Link></li>*/}
                        {/*<li><Link to="/login">LOGIN</Link></li>*/}

                    </ul>
                </div>

            }
        </div>
    );
}