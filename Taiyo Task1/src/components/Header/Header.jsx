import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {TbSearch} from "react-icons/tb";
import {CgMenu} from "react-icons/cg";
import {AiOutlineHeart} from "react-icons/ai";

import Cart from "../Cart/Cart";
import {Context} from "../../utils/context";

import "./Header.scss";


const Header = () => {

    const [scrolled, setScrolled] = useState(false);
    const [showCart, setshowCart] = useState(false);
    const [showSearch, setshowSearch] = useState(false);
    const {cartCount} = useContext(Context);
    const navigate = useNavigate();

    
    const handleScroll = () => {
        const offset = window.scrollY;
        if(offset>200){
            setScrolled(true);
        } else{
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll",handleScroll)
    },[]); 

    return (
        <>
           
        </>
    );
};

export default Header;

// window.scrollTo(0,500)