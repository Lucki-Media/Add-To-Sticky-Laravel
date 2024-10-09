import React, { useState, useEffect } from "react";
import { QuantityPicker } from "react-qty-picker";
import getSymbolFromCurrency from "currency-symbol-map";
import axios from "axios";

const UpSellBottomSheet = ({ upsellPopupData, handleUpsellPopup }) => {
    const [open, setOpen] = useState(false);
    const [popupOpen, setPopupOpen] = useState(false);
    const [popupOpenClass, setPopupOpenClass] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [CUProducts, setCUProducts] = useState([]);
    const [cartData, setCartData] = useState();
    const [numberCount, setNumberCount] = useState(0);

    const toggleBottomSheet = () => {
        setOpen(!open);
    };

    const closeBottomSheet = () => {
        setOpen(false);
        setPopupOpen(false);
        setPopupOpenClass(false);
        setTimeout(() => {
            handleUpsellPopup();
        }, 1000);
    };

    const handleBuyButtonClick = (product) => {
        setSelectedProduct(product);
        setPopupOpen(true);
        setPopupOpenClass(true);
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
        setOpen(upsellPopupData.enableUpSell);
        getCartCount();
    }, [upsellPopupData.enableUpSell]);

    // CART UPSELL API CALL
    const getCartUpsellProducts = async () => {
        if (upsellPopupData.CUPLSelection === "1") {
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
            if (upsellPopupData.CUPLManualSelection === "1") {
                // Manual Products
                if (upsellPopupData.SelectedProductIDs.length > 0) {
                    // Create an array of promises
                    const productPromises =
                        upsellPopupData.SelectedProductIDs.map(
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
                if (upsellPopupData.SelectedCollectionID) {
                    axios
                        .get(
                            "https://" +
                                window.location.host +
                                "/collections/" +
                                upsellPopupData.SelectedCollectionID +
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
        let selectedOptions = {};

        selectedProduct.options.forEach((variation, index) => {
            const selectElement = document.getElementById(`variation_${index}`);
            if (
                selectElement?.value !== "" &&
                selectElement?.value !== null &&
                selectElement?.value !== undefined
            )
                selectedOptions[variation.name] = selectElement?.value; // Capture the selected value for each variation
        });

        let neededVariant;
        if (Object.keys(selectedOptions).length > 0) {
            // Find the matching variant based on selected options
            neededVariant = selectedProduct.variants.find((variant) => {
                const variantTitle = variant.title.split(" / ");
                return variantTitle.every(
                    (titlePart, idx) =>
                        titlePart ===
                        selectedOptions[selectedProduct.options[idx].name]
                );
            });
        } else {
            // get default variation
            neededVariant = selectedProduct?.variants?.[0];
        }

        if (neededVariant) {
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    id: neededVariant.id, // Use the selected variant ID
                    quantity:
                        document
                            ?.getElementById(
                                "lm_sticky_container_upsell__qty_picker"
                            )
                            ?.getElementsByTagName("input")[0].value ?? 1,
                }),
            };

            try {
                const res = await fetch(
                    "https://" + window.location.host + "/cart/add.json",
                    requestOptions
                );
                await res.json();
                setTimeout(function () {
                    getCartCount();
                }, 1000);
            } catch (error) {
                console.log("Error adding product to cart", error);
            }
        } else {
            console.log("No matching variant found");
        }
    };

    return (
        <>
            <style>
                {`
                .lm_font_class {
                    font-family: var(--font-body-family) ;
                }
                .lmsc_popup_container {
                    position: fixed;
                    z-index: 9999;
                    transition: bottom 0.5s ease-in-out;
                    bottom: -100%;
                }

                .upsell_left {              
                    left: ${upsellPopupData.USOffset}px;                  
                }
                
               .upsell_right {              
                    right: ${upsellPopupData.USOffset}px;                  
                }

                .lmsc_popup_open {
                    animation: slideUp 0.5s ease-in-out forwards;
                     bottom: 0;
                }
                .lmsc_popup_close{
                     bottom: -100%;
                     animation: slideDown 0.5s ease-in-out forwards;
                }
                #lmsc_bottomSheet {
                    padding: 10px;
                    background: ${upsellPopupData.CUBackgroundColor};
                    box-shadow: 0 -2px 16px 0 rgba(0,0,0,0.16);
                    border-radius:8px 8px 0px 0px;
                    transition:all 0.4s ease;
                    max-height: 80vh;
                    overflow-y: auto;
                    max-width: 300px;
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
                    background-color: ${upsellPopupData.CUHeadingBGColor};
                    border-radius: ${upsellPopupData.CUBorderRadius}px;
                }

                .lmsc_bottomSheet__header {
                    font-size: ${upsellPopupData.CUHeadingFontSize}px;
                    margin: 0;
                    color: ${upsellPopupData.CUHeadingColor};
                    padding: 3px 12px;
                    font-weight: 600;
                    letter-spacing: 1px;
                }

                .lmsc_close_button {
                    background: transparent;
                    border: none;
                    font-size: 24px;
                    color: ${upsellPopupData.CUHeadingColor};
                    cursor: pointer;
                    padding: 3px 10px;
                }
                .lmsc_popup_modal select:focus-visible{
                    outline: none;
                    box-shadow: none;
                }    
                .lmsc_product_list {
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                    margin-top: 5px;
                }

                .lmsc_product_item {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    padding: 12px;
                    background: ${upsellPopupData.CUBodyColor};
                    border-radius: ${upsellPopupData.CUBorderRadius}px;
                    box-shadow: 0 2px 12px #0000001a;
                    transition: transform .2s ease;
                }

                .lmsc_product_item:hover {
                    transform: scale(1.02);
                }

                .lmsc_usrp_product_image {
                    width: 60px;
                    height: 60px;
                    object-fit: contain;
                    border-radius: ${upsellPopupData.CUBorderRadius}px;
                    aspect-ratio: 1/1;
                }

                .lmsc_product_info {
                    flex-grow: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }

                .lmsc_product_title {
                    font-size: ${upsellPopupData.CUBodyFontSize}px;
                    color: ${upsellPopupData.CUBodyTextColor};
                    margin: 0;
                    width: 90%;
                }

                .lmsc_product_price {
                    font-size: ${upsellPopupData.CUBodyFontSize}px;
                    color: ${upsellPopupData.CUBodyTextColor};
                    margin: 10px 0 0;
                }

                .lmsc_product_price strike {
                    font-size: ${upsellPopupData.CUBodyFontSize}px;
                    color: ${upsellPopupData.CUBodyTextColor};
                    margin-left: 5px;
                }

                .lmsc_add_to_cart_button {
                    align-self: center;
                    background-color:${upsellPopupData.CUBtnBGColor};
                    color: ${upsellPopupData.CUBtnTextColor};
                    border: none;
                    padding: 5px 16px;
                    border-radius: ${upsellPopupData.CUBorderRadius}px;
                    cursor: pointer;
                    transition: background-color .3s ease;
                    font-size: ${upsellPopupData.CUBuyBtnFontSize}px;
                }

                .lmsc_add_to_cart_button:hover {
                    background-color:${upsellPopupData.CUBtnBGHoverColor};
                    color: ${upsellPopupData.CUBtnTextHoverColor};
                }

                .lmsc_popup_modal {
                    position: fixed;
                    bottom: 0;
                    background: ${upsellPopupData.CUBackgroundColor};
                    padding: 10px;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                    border-radius: ${upsellPopupData.CUBorderRadius}px;
                    z-index: 10000;
                    max-width: 300px;
                    width: 100%;
                    transition: bottom 0.5s ease-in-out;                   
                    opacity: ${popupOpen ? 1 : 0};
                    
                }

                .lmsc_popup_modal img {
                    width: 100%;
                    border-radius: ${upsellPopupData.CUBorderRadius}px;
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

                .lmsc_popup_modal .lmsc_variation label {
                   font-weight: 600;
                    font-size: ${upsellPopupData.CUBodyFontSize}px;
                    color: ${upsellPopupData.CUBodyTextColor};
                }

                .lmsc_popup_modal .lmsc_close_popup_button {
                    background-color:${upsellPopupData.CUBtnBGColor};
                    color: ${upsellPopupData.CUBtnTextColor};
                    border: none;
                    padding: 10px 16px;
                    border-radius: ${upsellPopupData.CUBorderRadius}px;
                    cursor: pointer;
                    transition: background-color .3s ease;
                    margin-top: 10px;
                    display: block;
                    width: 100%;
                }
                
                 .lmsc_popup_modal .lmsc_close_popup_button:hover{
                    background-color:${upsellPopupData.CUBtnBGHoverColor};
                    color: ${
                        upsellPopupData.CUBtnTextHoverColor
                    };                
                }

                 .lmsc_popup_modal .quantity-picker {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin: 0;
                    width: 100px;
                    padding: 0;
                    border-radius: 0;
                    height: 30px;
                    font-family: var(--font-body-family) ;
                }

                .lmsc_popup_modal .quantity-picker .qty-button {
                    background-color: #f0f0f0;
                    border: 1px solid #ddd;
                    padding: 8px;
                    border-radius: 4px;
                    cursor: pointer;
                    font-family: var(--font-body-family) ;
                }

                .lmsc_popup_modal .quantity-picker .qty-input {
                    width: 50px;
                    text-align: center;
                    margin: 0 10px;
                    font-size: 18px;
                    padding: 5px;
                    border-radius: 4px;
                    border: 1px solid #ddd;
                    font-family: var(--font-body-family) ;
                }
              
                .lmsc_popup_modal .quantity-modifier{
                    font-family: var(--font-body-family) ;
                    font-size: 20px;
                    color: ${upsellPopupData.CUBodyTextColor};                  
                    border: 0 solid #dbdbdb;
                    text-align: center;
                    cursor: pointer;
                    line-height: 11px;
                    width: 33.33%;
                    background: ${upsellPopupData.CUBackgroundColor};
                    min-width: 33.33%;
                    padding: 5px;
                }

                .lmsc_popup_modal .quantity-display{
                    font-family: var(--font-body-family) ;
                    font-size: 15px;
                    border: 0;
                    border-top: 0 solid #dbdbdb;
                    border-bottom: 0 solid #dbdbdb;
                    text-align: center;
                    width: 33.33% !important;
                    background: ${upsellPopupData.CUBackgroundColor};
                }

                .lmsc_popup_modal select{
                    font-family: var(--font-body-family) ;
                    border: none;
                    width: 80%;
                    margin-left: 8px;
                    background: ${upsellPopupData.CUBackgroundColor};
                }

                .lmsc_sproduct_title{                   
                    font-size: ${upsellPopupData.CUHeadingFontSize}px;
                }
                .lmsc_popup_modal .lmsc_product_price{
                    margin-bottom: 10px;
                }
               
               #lmupsc_closeButton{
                    position: absolute;
                    right: 5px;
                    top: 5px;
                    color: ${upsellPopupData.CUBodyTextColor};   
                }
                @keyframes slideUp {
                from {
                    bottom: -100%;
                }
                to {
                    bottom: 0;
                }
                }

                @keyframes slideDown {
                from {
                    bottom: 0;
                }
                to {
                    bottom: -100%;
                }
                }
                @media screen and (max-width: 768px) {
                
                 .upsell_left {              
                    left: 0;                  
                }                
                .upsell_right {              
                    right: 0;                  
                }
                }


            `}
            </style>

            {CUProducts && CUProducts.length > 0 && (
                <div className="lmupsell_main_products lm_font_class">
                    <div
                        className={`lmsc_popup_container lm_font_class ${
                            open ? "lmsc_popup_open" : "lmsc_popup_close"
                        } ${
                            upsellPopupData.USPosition === "left"
                                ? "upsell_left"
                                : "upsell_right"
                        }`}
                    >
                        <div
                            className="lmsc_bottomSheet_backdrop lm_font_class"
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
                            <div className="lmsc_bottomSheet__headerContainer lm_font_class">
                                <h2
                                    id="lmsc_bottomSheet__headerID"
                                    className="lmsc_bottomSheet__header lm_font_class"
                                >
                                    {upsellPopupData.CUHeadingText}
                                </h2>
                                <button
                                    id="lmsc_closeButton"
                                    className="lmsc_close_button lm_font_class"
                                    onClick={closeBottomSheet}
                                >
                                    &times;
                                </button>
                            </div>
                            <div className="lmsc_product_list lm_font_class">
                                {CUProducts.map((product, index) => (
                                    <div
                                        key={index}
                                        className="lmsc_product_item lm_font_class"
                                    >
                                        <img
                                            src={product.featured_image}
                                            alt={product.title}
                                            className="lmsc_usrp_product_image lm_font_class"
                                        />
                                        <div className="lmsc_product_info lm_font_class">
                                            <h3 className="lmsc_product_title lm_font_class">
                                                {product.title}
                                            </h3>
                                            <p className="lmsc_product_price lm_font_class">
                                                {getSymbolFromCurrency(
                                                    cartData?.currency
                                                ) +
                                                    (
                                                        Number(product.price) /
                                                        100
                                                    ).toFixed(2)}
                                                {product.compare_at_price &&
                                                    product.compare_at_price >
                                                        0 && (
                                                        <strike>
                                                            {getSymbolFromCurrency(
                                                                cartData?.currency
                                                            ) +
                                                                (
                                                                    Number(
                                                                        product.compare_at_price
                                                                    ) / 100
                                                                ).toFixed(2)}
                                                        </strike>
                                                    )}
                                            </p>
                                        </div>
                                        <button
                                            className="lmsc_add_to_cart_button lm_font_class"
                                            onClick={() =>
                                                handleBuyButtonClick(product)
                                            }
                                        >
                                            {upsellPopupData.CUBuyBtnText}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Popup Modal */}
                    {open === true && popupOpen && selectedProduct && (
                        <div
                            className={`lmsc_popup_modal lm_font_class ${
                                popupOpenClass
                                    ? "lmsc_popup_open"
                                    : "lmsc_popup_close"
                            } ${
                                upsellPopupData.USPosition === "left"
                                    ? "upsell_left"
                                    : "upsell_right"
                            }`}
                        >
                            <button
                                id="lmupsc_closeButton"
                                className="lmsc_close_button lm_font_class"
                                onClick={() => {
                                    setPopupOpenClass(false);
                                    setTimeout(() => {
                                        setPopupOpen(false);
                                    }, 1000);
                                }}
                            >
                                &times;
                            </button>
                            <div className="lmsc_pro_popup_image lm_font_class">
                                <img
                                    src={selectedProduct.featured_image}
                                    alt={selectedProduct.title}
                                />
                            </div>
                            <h3 className="lmsc_sproduct_title lm_font_class">
                                {selectedProduct.title}
                            </h3>

                            <div className="lmsc_pro_price_wrapper lm_font_class">
                                <div className="lmsc_product_price lm_font_class">
                                    {getSymbolFromCurrency(cartData?.currency) +
                                        (
                                            Number(selectedProduct.price) / 100
                                        ).toFixed(2)}
                                    {selectedProduct.compare_at_price &&
                                        selectedProduct.compare_at_price >
                                            0 && (
                                            <strike>
                                                {getSymbolFromCurrency(
                                                    cartData?.currency
                                                ) +
                                                    (
                                                        Number(
                                                            selectedProduct.compare_at_price
                                                        ) / 100
                                                    ).toFixed(2)}
                                            </strike>
                                        )}
                                </div>
                            </div>

                            <div id="lm_sticky_container_upsell__qty_picker">
                                <QuantityPicker value={1} min={1} max={10} />
                            </div>

                            {selectedProduct?.options?.[0]?.values?.[0] !==
                                "Default Title" && (
                                <div className="lm_variation_dropdown lm_font_class">
                                    {selectedProduct.options?.map(
                                        (variation, index) => (
                                            <div
                                                key={index}
                                                className="lmsc_variation lm_font_class"
                                            >
                                                <label
                                                    htmlFor={`variation_${index}`}
                                                >
                                                    {variation.name}:
                                                </label>
                                                <select
                                                    id={`variation_${index}`}
                                                >
                                                    {variation.values.map(
                                                        (value, idx) => (
                                                            <option
                                                                key={idx}
                                                                selected
                                                                value={value}
                                                            >
                                                                {value}
                                                            </option>
                                                        )
                                                    )}
                                                </select>
                                            </div>
                                        )
                                    )}
                                </div>
                            )}
                            <button
                                className="lmsc_close_popup_button lm_font_class"
                                onClick={() =>
                                    handleAddProduct(selectedProduct)
                                }
                            >
                                {upsellPopupData.CUBuyBtnText}
                            </button>
                        </div>
                    )}
                </div>
            )}
        </>
    );
};

export default UpSellBottomSheet;
