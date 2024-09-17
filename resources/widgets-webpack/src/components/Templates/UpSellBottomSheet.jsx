import React, { useState, useEffect } from "react";
import { QuantityPicker } from "react-qty-picker";
import axios from "axios";

const UpSellBottomSheet = (props) => {
    const [open, setOpen] = useState(false);
    const [popupOpen, setPopupOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [CUProducts, setCUProducts] = useState([]);
    const [cartData, setCartData] = useState();
    const [numberCount, setNumberCount] = useState(0);
    const [selectedVariant, setselectedVariant] = useState(
        props.selectedVariant
    );
    const [loading, setLoading] = useState(false);

    const toggleBottomSheet = () => {
        setOpen(!open);
    };

    const closeBottomSheet = () => {
        setOpen(false);
        setPopupOpen(false);
    };

    const handleBuyButtonClick = (product) => {
        setSelectedProduct(product);
        setPopupOpen(true);
    };

    /* CART COUNT API CALL START*/
    const getCartCount = async () => {
        axios
            .get("https://" + window.location.host + "/cart.json")
            .then((response) => {
                setCartData(response.data);

                setNumberCount(response.data.item_count);

                if (response.data.item_count > 0) {
                    updateCartDrawer(response.data.item_count);
                }
            });
    };
    function updateCartDrawer(cartCount) {
        const cartCountBubble = document.querySelector(".cart-count-bubble");
        const stickyCount = document.querySelector(".sticky_Count");

        if (cartCountBubble) {
            cartCountBubble.textContent = cartCount;
        } else {
            console.warn(".cart-count-bubble element not found!");
        }

        if (stickyCount) {
            stickyCount.textContent = cartCount;
        } else {
            console.warn(".sticky_Count element not found!");
        }
    }

    useEffect(() => {
        setOpen(props.enableUpSell);
        getCartCount();
    }, [props.enableUpSell]);

    // CART UPSELL API CALL
    const getCartUpsellProducts = async () => {
        if (props.CUPLSelection === "1") {
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
            if (props.CUPLManualSelection === "1") {
                // Manual Products
                if (props.SelectedProductIDs.length > 0) {
                    // Create an array of promises
                    const productPromises = props.SelectedProductIDs.map(
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
                if (props.SelectedCollectionID) {
                    axios
                        .get(
                            "https://" +
                                window.location.host +
                                "/collections/" +
                                props.SelectedCollectionID +
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
        if (cartData && numberCount !== 0) {
            getCartUpsellProducts();
        }
    }, [numberCount, cartData]);

    let handleAddProduct = async (selectedProduct) => {
        console.log("selectedProduct");
        console.log(selectedProduct.variants[0].title);

        /*--------------------------------------------------------------------------------------------------*/
        /*GETTING SELECTED VARIANT FROM OPTIONS START*/
        // const neededVariant = props.product.variants.find(
        //     (variant) => variant.title === title
        // );

        // if (neededVariant) {
        //     setShouldDisable(neededVariant.available === false ? true : false);
        //     setSelectedVariant(neededVariant);
        // }
        /*GETTING SELECTED VARIANT FROM OPTIONS END*/
        /*--------------------------------------------------------------------------------------------------*/

        setLoading(true);
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                id: selectedProduct.variants[0].id,
                quantity: document
                    .getElementById("lm_sticky_container_upsell__qty_picker")
                    .getElementsByTagName("input")[0].value,
            }),
        };

        if (selectedVariant) {
            try {
                const res = await fetch(
                    "https://" + window.location.host + "/cart/add.json",
                    requestOptions
                );
                await res.json();
                setLoading(false);
                setTimeout(function () {
                    getCartCount();
                }, 1000);
            } catch (error) {
                console.log();
            }
        }
    };

    return (
        <>
            <style>
                {`
                .lmsc_popup_container {
                    position: absolute;
                    bottom: 0;                 
                    transition: transform 0.4s ease-in-out;
                    transform: translateY(100%);
                    z-index: 9999;
                }

                .lmsc_popup_container.left {              
                    left: 0;                  
                }
                
                .lmsc_popup_container.right {              
                    right: 0;                  
                }

                .lmsc_popup_open {
                    transform: translateY(0);
                }

                #lmsc_bottomSheet {
                    padding: 10px;
                    background: ${props.CUBackgroundColor};
                    box-shadow: 0 -2px 16px 0 rgba(0,0,0,0.16);
                    border-radius:8px 8px 0px 0px;
                    transition:all 0.4s ease;
                    max-height: 80vh;
                    overflow-y: auto;
                    max-width: fit-content;
                }

                .lmsc_bottomSheet--onScreen {
                    transform: translateY(0);
                }

                .lmsc_bottomSheet--offScreen {
                    transform: translateY(100%);
                }

                .lmsc_bottomSheet__headerContainer {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background-color: ${props.CUHeadingBGColor};
                    border-radius: ${props.CUBorderRadius}px;
                }

                .lmsc_bottomSheet__header {
                    font-family: HelveticaNeue-Bold, sans-serif;
                    font-size: ${props.CUHeadingFontSize}px;
                    margin: 0;
                    color: ${props.CUHeadingColor};
                    padding: 3px 12px;
                    font-weight: 600;
                    letter-spacing: 1px;
                }

                .lmsc_close_button {
                    background: transparent;
                    border: none;
                    font-size: 24px;
                    color: ${props.CUHeadingColor};
                    cursor: pointer;
                    padding: 3px 10px;
                }

                .lmsc_product_list {
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                    margin-top: 16px;
                }

                .lmsc_product_item {
                    display: flex;
                    gap: 16px;
                    padding: 12px;
                    background: ${props.CUBodyColor};
                    border-radius: ${props.CUBorderRadius}px;
                    box-shadow: 0 2px 12px #0000001a;
                    transition: transform .2s ease;
                }

                .lmsc_product_item:hover {
                    transform: scale(1.02);
                }

                .lmsc_usrp_product_image {
                    width: 60px;
                    height: 60px;
                    object-fit: cover;
                    border-radius: ${props.CUBorderRadius}px;
                    box-shadow: 0 2px 8px #00000026;
                }

                .lmsc_product_info {
                    flex-grow: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }

                .lmsc_product_title {
                    font-size: ${props.CUBodyFontSize}px;
                    color: ${props.CUBodyTextColor};
                    margin: 0;
                }

                .lmsc_product_price {
                    font-size: ${props.CUBodyFontSize}px;
                    color: ${props.CUBodyTextColor};
                    margin: 4px 0;
                }

                .lmsc_product_price strike {
                    font-size: ${props.CUBodyFontSize}px;
                    color: ${props.CUBodyTextColor};
                    margin-left: 5px;
                }

                .lmsc_add_to_cart_button {
                    align-self: center;
                    background-color:${props.CUBtnBGColor};
                    color: ${props.CUBtnTextColor};
                    border: none;
                    padding: 5px 16px;
                    border-radius: ${props.CUBorderRadius}px;
                    cursor: pointer;
                    transition: background-color .3s ease;
                    font-size: ${props.CUBuyBtnFontSize}px;
                }

                .lmsc_add_to_cart_button:hover {
                    background-color:${props.CUBtnBGHoverColor};
                    color: ${props.CUBtnTextHoverColor};
                }

                .lmsc_popup_modal {
                    position: fixed;
                    top: 50%;
                    left: calc(50% + 210px); /* Position beside the first modal */
                    transform: translateY(-50%);
                    background: white;
                    padding: 20px;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                    border-radius: ${props.CUBorderRadius}px;
                    z-index: 10000;
                    max-width: 300px;
                    width: 100%;
                    transition: transform 0.4s ease, opacity 0.4s ease;
                    opacity: ${popupOpen ? 1 : 0};
                }

                .lmsc_popup_modal img {
                    width: 100%;
                    border-radius: ${props.CUBorderRadius}px;
                }

                .lmsc_popup_modal h3 {
                    margin: 16px 0 8px;
                }

                .lmsc_popup_modal .lmsc_variation,
                .lmsc_popup_modal .lmsc_quantity {
                    margin: 8px 0;
                    border: 1px solid #9e9e9e;
                    padding: 10px 8px;
                }

                .lmsc_popup_modal .lmsc_close_popup_button {
                    background-color:${props.CUBtnBGColor};
                    color: ${props.CUBtnTextColor};
                    border: none;
                    padding: 10px 16px;
                    border-radius: ${props.CUBorderRadius}px;
                    cursor: pointer;
                    transition: background-color .3s ease;
                    margin-top: 16px;
                    display: block;
                    width: 100%;
                }
                
                 .lmsc_popup_modal .lmsc_close_popup_button:hover{
                    background-color:${props.CUBtnBGHoverColor};
                    color: ${props.CUBtnTextHoverColor};                
                }

                 .lmsc_popup_modal .quantity-picker {
                   display: flex;
                    justify-content: center;
                    align-items: center;
                    margin: 0;
                    width: 40%;
                    padding: 5px 7px;
                }

                .lmsc_popup_modal .quantity-picker .qty-button {
                    background-color: #f0f0f0;
                    border: 1px solid #ddd;
                    padding: 8px;
                    border-radius: 4px;
                    cursor: pointer;
                }

                .lmsc_popup_modal .quantity-picker .qty-input {
                    width: 50px;
                    text-align: center;
                    margin: 0 10px;
                    font-size: 18px;
                    padding: 5px;
                    border-radius: 4px;
                    border: 1px solid #ddd;
                }

                .lmsc_popup_modal button.quantity-modifier.modifier-right{
                    margin-right: 10px;
                }

                .lmsc_popup_modal .quantity-modifier{
                    width: 2px;
                    font-size: 20px;
                    color: #888;
                    background: transparent;
                    border: 0 solid #dbdbdb;
                    text-align: center;
                    cursor: pointer;
                    line-height: 11px;
                }

                .lmsc_popup_modal .quantity-display{
                    padding: 0;
                    font-size: 15px;
                    border: 0;
                    border-top: 0 solid #dbdbdb;
                    border-bottom: 0 solid #dbdbdb;
                    text-align: center;
                }

                .lmsc_popup_modal select{
                    border: none;
                    width: 80%;
                    margin-left: 8px;
                }

                .lmsc_sproduct_title{                   
                    font-size: ${props.CUHeadingFontSize}px;
                }

                .lmsc_popup_close{
                    display:none;
                }
               
            `}
            </style>

            <div>
                <div
                    className={`lmsc_popup_container ${
                        open ? "lmsc_popup_open" : "lmsc_popup_close"
                    } ${props.USPosition === "left" ? "left" : "right"}`}
                >
                    <div
                        className="lmsc_bottomSheet_backdrop"
                        onClick={toggleBottomSheet}
                    ></div>
                    <section
                        id="lmsc_bottomSheet"
                        className={
                            open
                                ? "lmsc_bottomSheet--onScreen"
                                : "lmsc_bottomSheet--offScreen"
                        }
                    >
                        <div className="lmsc_bottomSheet__headerContainer">
                            <h2
                                id="lmsc_bottomSheet__headerID"
                                className="lmsc_bottomSheet__header"
                            >
                                {props.CUHeadingText}
                            </h2>
                            <button
                                id="lmsc_closeButton"
                                className="lmsc_close_button"
                                onClick={closeBottomSheet}
                            >
                                &times;
                            </button>
                        </div>
                        <div className="lmsc_product_list">
                            {CUProducts && CUProducts.length > 0 ? (
                                CUProducts.map((product, index) => (
                                    <div
                                        key={index}
                                        className="lmsc_product_item"
                                    >
                                        <img
                                            src={product.featured_image}
                                            alt={product.title}
                                            className="lmsc_usrp_product_image"
                                        />
                                        <div className="lmsc_product_info">
                                            <h3 className="lmsc_product_title">
                                                {product.title}
                                            </h3>
                                            <p className="lmsc_product_price">
                                                {product.price}
                                                <strike>
                                                    {product.compare_at_price}
                                                </strike>
                                            </p>
                                        </div>
                                        <button
                                            className="lmsc_add_to_cart_button"
                                            onClick={() =>
                                                handleBuyButtonClick(product)
                                            }
                                        >
                                            {props.CUBuyBtnText}
                                        </button>
                                    </div>
                                ))
                            ) : (
                                <p>No products available.</p>
                            )}
                        </div>
                    </section>
                </div>

                {/* Popup Modal */}

                {open === true && popupOpen && selectedProduct && (
                    <div className="lmsc_popup_modal">
                        <img
                            src={selectedProduct.featured_image}
                            alt={selectedProduct.title}
                        />
                        <h3 className="lmsc_sproduct_title">
                            {selectedProduct.title}
                        </h3>

                        <div id="lm_sticky_container_upsell__qty_picker">
                            <QuantityPicker value={1} min={1} max={10} />
                        </div>

                        {selectedProduct.options.map((variation, index) => (
                            <div key={index} className="lmsc_variation">
                                <label htmlFor={`variation_${index}`}>
                                    {variation.name}:
                                </label>
                                <select id={`variation_${index}`}>
                                    {variation.values.map((value, idx) => (
                                        <option key={idx} value={value}>
                                            {value}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        ))}

                        <button
                            className="lmsc_close_popup_button"
                            onClick={() => handleAddProduct(selectedProduct)}
                        >
                            {props.CUBuyBtnText}
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};

export default UpSellBottomSheet;
