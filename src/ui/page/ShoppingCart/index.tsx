import "../../../css/ShoppingCartCss.css"
import menuicon from "../../icon/menu/menu.png";
import {Link} from "react-router-dom";
import carticon from "../../icon/shopping cart/shopping-cart.png";
import usericon from "../../icon/User/person.png";
import ShoppingCartTable from "../../component/ShoppingCartTable.tsx"
import {useState} from "react";

export default function ShoppingCart(){

    const [menuOpen, setMenuOpen] = useState(false);

    return(
        <body>
        <div className="ShoppingCart">
        <div className="ProductPageMenu">
            <div className="ProductPagemenu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                <img src={menuicon} width="15" height="25"/>
            </div>
            <ul className={`ProductPagemenu-menu-items ${menuOpen ? 'active' : ''}`}>
                <Link to="/shoppingcart"> <img src={carticon} width="30" height="25"/></Link>
                <Link to="/login"><img src={usericon} width="28" height="25"/></Link>
                <li><Link to="/product">Product</Link></li>
                <li><Link to="/">Home</Link></li>
            </ul>
        </div>
        <div className="layer"></div>
        <div><ShoppingCartTable/></div>
        </div>
        </body>

);
}