import React, { useState, useEffect } from "react";
import "../css/UpSellBottomSheet.css"; // Import your custom CSS
import recommendedProducts from "../assets/recommendedProducts.js";

const UpSellBottomSheet = (props) => {
    const [open, setOpen] = useState(false);

    // Use useEffect to update the state when props.enableUpSell changes
    useEffect(() => {
        setOpen(props.enableUpSell);
    }, [props.enableUpSell]);

    // Toggle the bottom sheet visibility
    const toggleBottomSheet = () => setOpen(!open);

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
                                    <button className="add_to_cart_button">
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
        </>
    );
};

export default UpSellBottomSheet;
