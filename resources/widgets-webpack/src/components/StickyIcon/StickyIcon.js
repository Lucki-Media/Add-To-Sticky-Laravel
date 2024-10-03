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
import Drawer from "../Drawer/Drawer";
require("./index.css");

const StickyIcon = () => {
    const [activePlan, setActivePlan] = useState(1);
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
    const [positionLeft, setPositionLeft] = useState(0);
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

    // DRAWER DATA
    const [drawerData, setDrawerData] = useState([]);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [cartData, setCartData] = useState();
    const [CUProducts, setCUProducts] = useState([]);

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

            await axios
                .get("https://" + window.location.host + "/cart.json")
                .then(async (response) => {
                    await setCartData(response.data);
                    setNumberCount(response.data.item_count);
                });

            // If drawer cart is enabled, then open otherwise redirect to action
            if (drawerData.enableDrawer === true) {
                setIsDrawerOpen(true);
            } else {
                window.location.href = action === "1" ? "/cart" : "/checkout";
            }
        } catch (error) {
            console.log(error);
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
            setDrawerData(data.data.drawer_cart_data);
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
            // setPositionBottom(data.data.current_template.positionBottom);
            setPositionLeft(data.data.current_template.positionLeft);
            // setPositionRight(data.data.current_template.positionRight);
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
                setCartData(response.data);
                setNumberCount(response.data.item_count);
            });
    };
    /* CART COUNT API CALL END*/
    useEffect(() => {
        // getAddToStickyCartData();
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

    // CART UPSELL API CALL
    const getCartUpsellProducts = async () => {
        if (drawerData.cartUpsell.CUPLSelection === "1") {
            // Default Recommendation
            axios
                .get(
                    "https://" +
                        window.location.host +
                        "/recommendations/products.json?product_id=" +
                        cartData.items[0].product_id + // get cart's first item's related product
                        "&limit=3"
                )
                .then(async (response) => {
                    setCUProducts(response.data.products);
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        } else {
            // Manually Select
            if (drawerData.cartUpsell.CUPLManualSelection === "1") {
                // Manual Products
                if (drawerData.cartUpsell.SelectedProductIDs.length > 0) {
                    // Create an array of promises
                    const productPromises =
                        drawerData.cartUpsell.SelectedProductIDs.map(
                            (productHandle) => {
                                return getProductByHandle(productHandle);
                            }
                        );

                    // Wait for all promises to resolve
                    Promise.all(productPromises).then((productArray) => {
                        // Filter out any null values from failed requests
                        productArray = productArray.filter(
                            (product) => product !== null
                        );
                        setCUProducts(productArray);
                    });
                }
            } else {
                // Manual Collection
                if (drawerData.cartUpsell.SelectedCollectionID) {
                    axios
                        .get(
                            "https://" +
                                window.location.host +
                                "/collections/" +
                                drawerData.cartUpsell.SelectedCollectionID +
                                "/products.json?limit=3"
                        )
                        .then(async (response) => {
                            // Create an array of promises
                            const productPromises = response.data.products.map(
                                (product) => {
                                    return getProductByHandle(product.handle);
                                }
                            );

                            // Wait for all promises to resolve
                            Promise.all(productPromises).then(
                                (productArray) => {
                                    // Filter out any null values from failed requests
                                    productArray = productArray.filter(
                                        (product) => product !== null
                                    );
                                    setCUProducts(productArray);
                                }
                            );
                        })
                        .catch((error) => {
                            console.error("Error:", error);
                        });
                }
            }
        }
    };

    // Helper function
    const getProductByHandle = (productHandle) => {
        return axios
            .get(
                "https://" +
                    window.location.host +
                    "/products/" +
                    productHandle +
                    ".js"
            )
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                console.error("Error:", error);
                return null; // Return null for any failed requests
            });
    };

    useEffect(() => {
        drawerData && numberCount > 0 && getCartUpsellProducts();
    }, [drawerData]);

    // add overflow hidden class to body tag whenever drawer is open
    useEffect(() => {
        if (isDrawerOpen) {
            document.body.classList.add("lm_body_overflow_hide");
        } else {
            document.body.classList.remove("lm_body_overflow_hide");
        }
    }, [isDrawerOpen]);

    useEffect(() => {
        getPlanData();
    }, []);

    // API CALL TO GET PLAN DATA
    const getPlanData = async () => {
        try {
            const response = await fetch(
                `${process.env.REACT_APP_API_URL}` +
                    "getPlanData/" +
                    window.Shopify.shop
            );
            const data = await response.json();
            // console.log("data");
            // console.log(data);
            setActivePlan(data.data);
        } catch (err) {
            console.log(err);
        }
    };

    if (stickyData.length <= 0) {
        return <div>Loading</div>;
    } else {
        return (
            <div>
                <style>
                    {`
                        @import url("https://fonts.googleapis.com/css2?family=Oswald&display=swap");
                        .apply-font{
                            font-family : Oswald !important;
                        }
                    `}
                </style>
                {enableSticky === true && (
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
                                left:
                                    positionLeft === 0
                                        ? ""
                                        : positionLeft + "%",
                                marginLeft:
                                    positionLeft > 90 ? `-${btnSize}px` : "",
                                marginTop:
                                    positionTop > 90 ? `-${btnSize}px` : "",
                            }}
                            onMouseEnter={handleIconEnter}
                            onMouseLeave={handleIconLeave}
                            onClick={handleClick}
                        >
                            {enableCount === true && (
                                <span
                                    className=" sticky_Count"
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
                            )}
                            {defaultTemplate === 1 && (
                                <FontAwesomeIcon icon={faCartShopping} />
                            )}
                            {defaultTemplate === 2 && (
                                <FontAwesomeIcon icon={faCartPlus} />
                            )}
                            {defaultTemplate === 3 && (
                                <FontAwesomeIcon icon={faCartArrowDown} />
                            )}
                            {defaultTemplate === 4 && (
                                <FontAwesomeIcon icon={faBasketShopping} />
                            )}
                            {defaultTemplate === 5 && (
                                <FontAwesomeIcon icon={faBagShopping} />
                            )}
                        </div>
                    </div>
                )}
                {isDrawerOpen === true && (
                    <>
                        <Drawer
                            activePlan={activePlan}
                            isDrawerOpen={isDrawerOpen}
                            customizationData={drawerData}
                            showCartUpsell={
                                drawerData.cartUpsell.CUEnable ?? false
                            }
                            CUProducts={CUProducts}
                            handleDrawerClose={() => {
                                setIsDrawerOpen(false);
                            }}
                            cartData={cartData}
                            cartUpdated={() => {
                                getCartCount();
                            }}
                        />
                    </>
                )}
            </div>
        );
    }
};

export default StickyIcon;
