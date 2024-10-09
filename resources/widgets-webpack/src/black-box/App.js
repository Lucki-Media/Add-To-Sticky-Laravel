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
import HomePageProduct from "../components/ProductDetail/HomePageProduct";

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
        // Get the computed font-family of the body tag
        const bodyFontFamily = getComputedStyle(document.body).fontFamily;
        console.log("bodyFontFamily", bodyFontFamily);

        // Check if --font-body-family is already defined
        let rootStyle = getComputedStyle(document.documentElement);
        console.log("rootStyle", rootStyle);

        if (!rootStyle.getPropertyValue("--font-body-family")) {
            console.log('--font-body-family', rootStyle.getPropertyValue("--font-body-family"));
            
            // If the variable is not defined, set the font-family from body in the CSS variable
            document.documentElement.style.setProperty(
                "--font-body-family",
                bodyFontFamily
            );
        }

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
            {sticky_container &&
                window.meta.page.pageType === "home" &&
                ReactDOM.createPortal(<HomePageProduct />, sticky_container)}
        </>
    );
};

export default App;
