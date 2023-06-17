import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/earbuds-prod-1.webp";

import "./CartItem.scss";
import { useContext } from "react";
import { Context } from "../../../utils/context";


const CartItem = () => {
    const {cartItems, handleCartProductQuantity, handleRemoveFromCart} =
    useContext(Context);

    return( 
        <div className="cart-products">
            <h3>Contact page</h3>
        </div>
        );
};

export default CartItem;
