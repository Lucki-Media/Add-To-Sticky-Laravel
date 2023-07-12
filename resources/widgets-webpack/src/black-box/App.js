import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { CONST } from "./constants";
import { config } from "../config";
import { useCookies } from "react-cookie";
import "./custom.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StickyIcon from "../components/StickyIcon/StickyIcon";
import ProductContainer from "../components/ProductDetail/ProductContainer";

const { STICKY_ICON, STICKY_CONTAINER } = CONST;

const App = () => {
    const sticky_icon = document.querySelector(
        "." + config[STICKY_ICON].className
    );
    const sticky_container = document.querySelector(
        "." + config[STICKY_CONTAINER].className
    );

    const url = window.location.href;
    const cart = url.substring(url.lastIndexOf("/") + 1);

    //   const setOnLoadCookie = () => {
    //     if (!cookies.LM_Quote_sessionId) {
    //       var randomstring = require("randomstring");
    //       let cookieKey = randomstring.generate(); //size 49 by default
    //       setCookie("LM_Quote_sessionId", cookieKey, { path: "/" });
    //     }
    //   };

    useEffect(() => {
        // window.Shopify.onCartUpdate(function (cart) {
        //   console.log("Cart updated:", cart);
        // });
        // setOnLoadCookie();
        // const getCartCount1 = async () => {
        //   const res = axios
        //     .get("https://" + window.location.host + "/cart.json")
        //     .then((response) => {
        //       // setCountNumber(response.data.item_count);
        //     });
        // };
        // getCartCount1();
    }, []);
    return (
        <>
            <ToastContainer />
            {/* CREATE CONTAINER FOR STICKY QUOTE BUTTON */}
            {sticky_icon &&
                cart !== "cart" &&
                ReactDOM.createPortal(<StickyIcon />, sticky_icon)}
            {sticky_container &&
                window.meta.page.pageType === "product" &&
                ReactDOM.createPortal(<ProductContainer />, sticky_container)}
        </>
    );
};

export default App;
