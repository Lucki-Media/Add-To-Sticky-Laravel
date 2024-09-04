import React, { useState, useEffect } from "react";
import "../css/UpSellBottomSheet.css"; // Import your custom CSS
import recommendedProducts from "../assets/recommendedProducts.js";

const UpSellBottomSheet = (props) => {
    const [open, setOpen] = useState(false);
    const [popupOpen, setPopupOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        setOpen(props.enableUpSell);
    }, [props.enableUpSell]);

    const toggleBottomSheet = () => setOpen(!open);

    const handleBuyButtonClick = (product) => {
        setSelectedProduct(product);
        setPopupOpen(true);
    };

    const closePopup = () => setPopupOpen(false);

    return (
        <>
            <style>
                {`
                .popup_container {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    transition: transform 0.4s ease-in-out;
                    transform: translateY(100%);
                    z-index: 9999;
                }

                .popup_open {
                    transform: translateY(0);
                }

                #bottomSheet {
                    padding: 10px;
                    background: ${props.CUBackgroundColor};
                    box-shadow: 0 -2px 16px 0 rgba(0,0,0,0.16);
                    border-radius:8px 8px 0px 0px;
                    transition:all 0.4s ease;
                    max-height: 80vh;
                    overflow-y: auto;
                    max-width: fit-content;
                }

                .bottomSheet--onScreen {
                    transform: translateY(0);
                }

                .bottomSheet--offScreen {
                    transform: translateY(100%);
                }

                .bottomSheet__headerContainer {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background-color: ${props.CUHeadingBGColor};
                    border-radius: ${props.CUBorderRadius}px;
                }

                .bottomSheet__header {
                    font-family: HelveticaNeue-Bold, sans-serif;
                    font-size: ${props.CUHeadingFontSize}px;
                    margin: 0;
                    color: ${props.CUHeadingColor};
                    padding: 3px 12px;
                    font-weight: 600;
                    letter-spacing: 1px;
                }

                .close_button {
                    background: transparent;
                    border: none;
                    font-size: 24px;
                    color: ${props.CUHeadingColor};
                    cursor: pointer;
                    padding: 3px 10px;
                }

                .product_list {
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                    margin-top: 16px;
                }

                .product_item {
                    display: flex;
                    gap: 16px;
                    padding: 12px;
                    background: ${props.CUBodyColor};
                    border-radius: ${props.CUBorderRadius}px;
                    box-shadow: 0 2px 12px #0000001a;
                    transition: transform .2s ease;
                }

                .product_item:hover {
                    transform: scale(1.02);
                }

                .usrp_product_image {
                    width: 60px;
                    height: 60px;
                    object-fit: cover;
                    border-radius: ${props.CUBorderRadius}px;
                    box-shadow: 0 2px 8px #00000026;
                }

                .product_info {
                    flex-grow: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }

                .product_title {
                    font-size: ${props.CUBodyFontSize}px;
                    color: ${props.CUBodyTextColor};
                    margin: 0;
                }

                .product_price {
                    font-size: ${props.CUBodyFontSize}px;
                    color: ${props.CUBodyTextColor};
                    margin: 4px 0;
                }

                .product_price strike {
                    font-size: ${props.CUBodyFontSize}px;
                    color: ${props.CUBodyTextColor};
                    margin-left: 5px;
                }

                .product_description {
                    font-size: 14px;
                    color: #888888;
                }

                .add_to_cart_button {
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

                .add_to_cart_button:hover {
                    background-color:${props.CUBtnBGHoverColor};
                    color: ${props.CUBtnTextHoverColor};
                }

                .popup_modal {
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
                    transform: translateX(${popupOpen ? "0" : "50%"});
                }

                .popup_modal img {
                    width: 100%;
                    border-radius: ${props.CUBorderRadius}px;
                }

                .popup_modal h3 {
                    margin: 16px 0 8px;
                }

                .popup_modal .variation,
                .popup_modal .quantity {
                    margin: 8px 0;
                }

                .popup_modal .close_popup_button {
                    background-color:${props.CUBtnBGColor};
                    color: ${props.CUBtnTextColor};
                    border: none;
                    padding: 5px 16px;
                    border-radius: ${props.CUBorderRadius}px;
                    cursor: pointer;
                    transition: background-color .3s ease;
                    margin-top: 16px;
                    display: block;
                    width: 100%;
                }
            `}
            </style>
            <div className={`popup_container ${open ? "popup_open" : ""}`}>
                <div
                    className="bottomSheet_backdrop"
                    onClick={toggleBottomSheet}
                ></div>
                <section
                    id="bottomSheet"
                    className={
                        open
                            ? "bottomSheet--onScreen"
                            : "bottomSheet--offScreen"
                    }
                >
                    <div className="bottomSheet__headerContainer">
                        <h2
                            id="bottomSheet__headerID"
                            className="bottomSheet__header"
                        >
                            {props.CUHeadingText}
                        </h2>
                        <button
                            id="closeButton"
                            className="close_button"
                            onClick={toggleBottomSheet}
                        >
                            &times;
                        </button>
                    </div>
                    <div className="product_list">
                        {recommendedProducts &&
                        recommendedProducts.length > 0 ? (
                            recommendedProducts.map((product, index) => (
                                <div key={index} className="product_item">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="usrp_product_image"
                                    />
                                    <div className="product_info">
                                        <h3 className="product_title">
                                            {product.title}
                                        </h3>
                                        <p className="product_price">
                                            {product.actual_price}
                                            <strike>
                                                {product.compare_price}
                                            </strike>
                                        </p>
                                    </div>
                                    <button
                                        className="add_to_cart_button"
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
            {popupOpen && selectedProduct && (
                <div className="popup_modal">
                    <img
                        src={selectedProduct.image}
                        alt={selectedProduct.title}
                    />
                    <h3>{selectedProduct.title}</h3>
                    {selectedProduct.options.map((variation, index) => (
                        <p className="variation">
                            {variation.name} : {variation.values}
                        </p>
                    ))}
                    <p className="quantity">Quantity: 1</p>
                    <button className="close_popup_button" onClick={closePopup}>
                        Close
                    </button>
                </div>
            )}
        </>
    );
};

export default UpSellBottomSheet;
