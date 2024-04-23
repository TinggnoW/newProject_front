import "../../../css/ShoppingCartCss.css"
import ShoppingCartTable from "../../component/ShoppingCartTable.tsx"
import Navbar from "../../component/Navbar.tsx";

export default function ShoppingCart(){

    return(
        <body>

        <div className="ShoppingCart">
            <div className="layer" style={{
                position: 'relative',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(111, 111, 111, 0.81)',
                zIndex: 3
            }}>
                <Navbar/>
                <div className="wordbackground1">
                    <h1>SHOPPING</h1>
                </div>
                <div className="wordbackground2">
                    <h2>CART</h2>
                </div>
                    <ShoppingCartTable/>
            </div>

        </div>
        </body>

    );
}