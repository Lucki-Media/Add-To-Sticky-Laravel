import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCartArrowDown,
    faCartPlus,
    faCartShopping,
    faBasketShopping,
    faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
require("./index.css");
const StickyIcon = () => {
    const [stickyData, setStickyData] = useState([]);
    const [iconHover, setIconHover] = useState(false);
    const [countHover, setCountHover] = useState(false);
    const [enableSticky, setEnableSticky] = useState(true);
    const [defaultTemplate, setDefaultTemplate] = useState(1);
    const [action, setAction] = useState("1");
    const [btnSize, setBtnSize] = useState(60);
    const [bgColor, setBgColor] = useState("rgba(0, 0, 0, 0)");
    const [bgHoverColor, setBgHoverColor] = useState("rgba(0, 0, 0, 0)");
    const [borderSize, setBorderSize] = useState(1);
    const [borderColor, setBorderColor] = useState("rgba(0, 0, 0, 0)");
    const [borderHoverColor, setBorderHoverColor] =
        useState("rgba(0, 0, 0, 0)");
    const [positionTop, setPositionTop] = useState(20);
    const [positionBottom, setPositionBottom] = useState(0);
    const [positionLeft, setPositionLeft] = useState(0);
    const [positionRight, setPositionRight] = useState(1);
    const [iconSize, setIconSize] = useState(20);
    const [iconColor, setIconColor] = useState("rgba(0, 0, 0, 0)");
    const [iconHoverColor, setIconHoverColor] = useState(
        "rgba(240, 128, 128, 1)"
    );
    const [enableCount, setEnableCount] = useState(false);
    const [numberCount, setNumberCount] = useState(0);
    const [countSize, setCountSize] = useState(16);
    const [countFontSize, setCountFontSize] = useState(14);
    const [countColor, setCountColor] = useState("rgba(0, 0, 0, 0)");
    const [countHoverColor, setCountHoverColor] = useState("rgba(0, 0, 0, 0)");
    const [countBgColor, setCountBgColor] = useState("rgba(0, 0, 0, 0)");
    const [countBgHoverColor, setCountBgHoverColor] =
        useState("rgba(0, 0, 0, 0)");
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const monthOptions = { month: "short" };
    const currentMonth = currentDate.toLocaleString("en-US", monthOptions);
    let handleClick = async () => {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                shop: window.Shopify.shop,
                month: currentMonth,
                year: currentYear,
            }),
        };
        try {
            await fetch(
                `${process.env.REACT_APP_API_URL}` + "addStickyButtonClicks",
                requestOptions
            );
            if (action === "1") {
                window.location.href = "/cart";
            } else {
                window.location.href = "/checkout";
            }
            // console.log(cart_added);
        } catch (error) {
            console.log();
        }
    };
    const getStickyCartData = async () => {
        try {
            const response = await fetch(
                `${process.env.REACT_APP_API_URL}` +
                    "getStickyCartData/" +
                    window.Shopify.shop
            );
            const data = await response.json();
            setStickyData(data);
            setEnableSticky(data.data.enableSticky);
            setDefaultTemplate(data.data.defaultTemplate);
            setAction(data.data.current_template.action);
            setBtnSize(data.data.current_template.btnSize);
            setBgColor(data.data.current_template.bgColor);
            setBgHoverColor(data.data.current_template.bgHoverColor);
            setBorderSize(data.data.current_template.borderSize);
            setBorderColor(data.data.current_template.borderColor);
            setBorderHoverColor(data.data.current_template.borderHoverColor);
            setPositionTop(data.data.current_template.positionTop);
            setPositionBottom(data.data.current_template.positionBottom);
            setPositionLeft(data.data.current_template.positionLeft);
            setPositionRight(data.data.current_template.positionRight);
            setIconSize(data.data.current_template.iconSize);
            setIconColor(data.data.current_template.iconColor);
            setIconHoverColor(data.data.current_template.iconHoverColor);
            setEnableCount(data.data.current_template.enableCount);
            setCountSize(data.data.current_template.countSize);
            setCountFontSize(data.data.current_template.countFontSize);
            setCountColor(data.data.current_template.countColor);
            setCountHoverColor(data.data.current_template.countHoverColor);
            setCountBgColor(data.data.current_template.countBgColor);
            setCountBgHoverColor(data.data.current_template.countBgHoverColor);
        } catch (err) {
            console.log(err);
        }
    };
    /* CART COUNT API CALL START*/
    const getCartCount = async () => {
        axios
            .get("https://" + window.location.host + "/cart.json")
            .then((response) => {
                setNumberCount(response.data.item_count);
            });
    };
    /* CART COUNT API CALL END*/
    useEffect(() => {
        getStickyCartData();
        /*ADDING EVENT LISTENER TO UPDATE CART COUNT START*/
        if (window.meta.page.pageType === "product") {
            document
                .querySelectorAll(".lm-quote-add-to-cart-q78er")
                .forEach((button) => {
                    button.addEventListener("click", () => {
                        setTimeout(function () {
                            getCartCount();
                        }, 1000);
                    });
                });
        }
        /*ADDING EVENT LISTENER TO UPDATE CART COUNT END*/
        getCartCount();
    }, [numberCount]);
    // ICON STYLE START
    // ICON HOVER
    const handleIconEnter = () => {
        setIconHover(true);
    };

    const handleIconLeave = () => {
        setIconHover(false);
    };

    // COUNT HOVER
    const handleCountEnter = () => {
        setCountHover(true);
    };

    const handleCountLeave = () => {
        setCountHover(false);
    };
    // COUNT END

    if (stickyData.length <= 0) {
        return <div>Loading</div>;
    } else {
        return (
            <div>
                {" "}
                {enableSticky === true ? (
                    <div className="main_sticky___div">
                        <div
                            className="stickyCart__icon"
                            style={{
                                position: "fixed",
                                fontSize: iconSize,
                                color: iconHover ? iconHoverColor : iconColor,
                                border: iconHover
                                    ? borderSize +
                                      "px solid " +
                                      borderHoverColor
                                    : borderSize + "px solid " + borderColor,
                                background: iconHover ? bgHoverColor : bgColor,
                                height: btnSize,
                                width: btnSize,
                                top: positionTop === 0 ? "" : positionTop + "%",
                                bottom:
                                    positionBottom === 0
                                        ? ""
                                        : positionBottom + "%",
                                left:
                                    positionLeft === 0
                                        ? ""
                                        : positionLeft + "%",
                                right:
                                    positionRight === 0
                                        ? ""
                                        : positionRight + "%",
                            }}
                            onMouseEnter={handleIconEnter}
                            onMouseLeave={handleIconLeave}
                            onClick={handleClick}
                        >
                            {enableCount === true ? (
                                <span
                                    className="font_option apply-font sticky_Count"
                                    style={{
                                        background: countHover
                                            ? countBgHoverColor
                                            : countBgColor,
                                        width: countSize,
                                        height: countSize,
                                        fontSize: countFontSize,
                                        color: countHover
                                            ? countHoverColor
                                            : countColor,
                                    }}
                                    onMouseEnter={handleCountEnter}
                                    onMouseLeave={handleCountLeave}
                                >
                                    {numberCount}
                                </span>
                            ) : (
                                ""
                            )}
                            {defaultTemplate === 1 ? (
                                <FontAwesomeIcon icon={faCartShopping} />
                            ) : (
                                ""
                            )}
                            {defaultTemplate === 2 ? (
                                <FontAwesomeIcon icon={faCartPlus} />
                            ) : (
                                ""
                            )}
                            {defaultTemplate === 3 ? (
                                <FontAwesomeIcon icon={faCartArrowDown} />
                            ) : (
                                ""
                            )}
                            {defaultTemplate === 4 ? (
                                <FontAwesomeIcon icon={faBasketShopping} />
                            ) : (
                                ""
                            )}
                            {defaultTemplate === 5 ? (
                                <FontAwesomeIcon icon={faBagShopping} />
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                ) : (
                    ""
                )}
            </div>
        );
    }
};

export default StickyIcon;
