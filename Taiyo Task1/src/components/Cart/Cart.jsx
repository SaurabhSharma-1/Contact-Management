import {MdClose} from "react-icons/md";
import {BrowserRouter as Router,
    Switch,
    Route,
    Routes,
    Link} from 'react-router-dom';
import {BsCartX} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "./Cart.scss";
import { useContext } from "react";
import { Context } from "../../utils/context";
import { makePaymentRequest } from "../../utils/api";



const Cart = ({setshowCart}) => {
    const {cartItems, cartSubTotal} = useContext(Context);



    const navigate = useNavigate();

    return <div className="cart-panel">
        <div className="opac-layer"></div>
        <div className="cart-content">

            <div className="cart-header">
                <span className="heading">SideBar</span>
                <span className="close-btn" onClick={() => setshowCart(false)}>
                    <MdClose/>
                    <span className="text">close</span>
                </span>
            </div>
            <div>
            </div>
            {!cartItems.length && <div className="empty-cart">
                <button className="return-cta" onClick={()=> navigate("/")}>Contact page</button>
                <button className="return-cta" onClick={()=> navigate("/Map")}>Map and Chart</button>
            </div>}
        </div>
    </div>;
};

export default Cart;
