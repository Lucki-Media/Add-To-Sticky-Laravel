import React, { useState, useEffect } from "react";
import "../../css/UpSellBottomSheet.css";
import recommendedProducts from "../../assets/recommendedProducts.js";
import { QuantityPicker } from "react-qty-picker";

const UpSellBottomSheet = ({ upsellPopupData }) => {
    const [open, setOpen] = useState(false);
    const [popupOpen, setPopupOpen] = useState(false);
    const [popupOpenClass, setPopupOpenClass] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        setOpen(upsellPopupData.enableUpSell);
    }, [upsellPopupData.enableUpSell]);

    const toggleBottomSheet = () => setOpen(open);

    const handleBuyButtonClick = (product) => {
        setSelectedProduct(product);
        setPopupOpen(true);
        setPopupOpenClass(true);
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
                    .upsell_left {              
                        left: ${upsellPopupData.USOffset}px;                  
                    }

                    .upsell_right {              
                        right: ${upsellPopupData.USOffset}px;                  
                    }
                    
                    .lmsc_popup_open {
                        transform: translateY(0);
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
                        font-family: HelveticaNeue-Bold, sans-serif;
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
    
                    .lmsc_product_list {
                        display: flex;
                        flex-direction: column;
                        gap: 5px;
                        margin-top: 5px;
                    }
    
                    .lmsc_product_item {
                        display: flex;
                        gap: 10px;
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
                        width: 60px !important;
                        height: 60px !important;
                        object-fit: cover;
                        border-radius: ${upsellPopupData.CUBorderRadius}px;
                        box-shadow: 0 2px 8px #00000026;
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
                        margin: 10px 0 4px;
                    }
                    .lmsc_popup_modal select:focus-visible{
                        outline: none;
                        box-shadow: none;
                    }    
                    .lmsc_pro_price_wrapper .lmsc_product_price{
                        margin: 10px 0 10px;
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
                        position: absolute;
                        bottom:0;                            
                        background: ${upsellPopupData.CUBackgroundColor};
                        padding: 10px;
                        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                        border-radius: ${upsellPopupData.CUBorderRadius}px;
                        z-index: 10000;
                        max-width: 300px;
                        width: 100%;
                        transition: transform 0.5s ease, opacity 0.5s ease;
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
                    }
                    .lmsc_product_label{
                        display: flex;
                        align-items: center;
                        height: 40px;
                        border: 1px solid #9e9e9e;
                        padding: 10px;
                        border-radius: 3px;
                    }
                    .lm_variation_select_label {
                        width: 20%;
                        font-weight: 600;
                        font-size: ${upsellPopupData.CUBodyFontSize}px;
                        color: ${upsellPopupData.CUBodyTextColor};
                    }
                    .lm_variation_select__select {
                        width: 80%;
                        border: none;
                        outline: none;
                        font-size: ${upsellPopupData.CUBodyFontSize}px;
                        color: ${upsellPopupData.CUBodyTextColor};
                        background: ${upsellPopupData.CUBackgroundColor};
                    }
    
                    .lmsc_popup_modal .lmsc_close_popup_button {
                        background-color:${upsellPopupData.CUBtnBGColor};
                        color: ${upsellPopupData.CUBtnTextColor};
                        border: none;
                        padding: 10px 16px;
                        border-radius: ${upsellPopupData.CUBorderRadius}px;
                        cursor: pointer;
                        transition: background-color .3s ease;
                        margin-top: 16px;
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
    
                    .lmsc_popup_modal button.quantity-modifier.modifier-right{}
    
                   .lmsc_popup_modal .quantity-modifier{
                        width: 2px;
                        font-size: 20px;
                        color: #888;
                        background: transparent;
                        border: 0 solid #dbdbdb;
                        text-align: center;
                        cursor: pointer;
                        line-height: 11px;
                        width: 33.33%;
                        min-width: 30px;
                        padding: 5px;
                    }

                    .lmsc_popup_modal .quantity-display{
                        font-size: 15px;
                        border: 0;
                        border-top: 0 solid #dbdbdb;
                        border-bottom: 0 solid #dbdbdb;
                        text-align: center;
                        width: 33.33% !important;
                        height: 28px;
                        background: transparent;
                    }
    
                    .lmsc_popup_modal select{
                        border: none;
                        width: 80%;
                        margin-left: 8px;
                    }
    
                    .lmsc_sproduct_title{                   
                        font-size: ${upsellPopupData.CUHeadingFontSize}px;
                        color: ${upsellPopupData.CUBodyTextColor};   
                        font-weight: 600;
                    }
                    .lmsc_popup_modal .lmsc_product_price{
                        margin-bottom: 10px;
                        letter-spacing: .5px;
                    }
                    #lmupsc_closeButton{
                        position: absolute;
                        right: 5px;
                        top: 5px;
                        color: ${upsellPopupData.CUBodyTextColor};   
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

            {upsellPopupData.gsAction === "3" && (
                <div>
                    <div
                        className={`lmsc_popup_container ${
                            open ? "lmsc_popup_open" : ""
                        } ${
                            upsellPopupData.USPosition === "left"
                                ? "upsell_left"
                                : "upsell_right"
                        }`}
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
                                    {upsellPopupData.CUHeadingText}
                                </h2>
                                <button
                                    id="lmsc_closeButton"
                                    className="lmsc_close_button"
                                    onClick={toggleBottomSheet}
                                >
                                    &times;
                                </button>
                            </div>
                            <div className="lmsc_product_list">
                                {recommendedProducts &&
                                recommendedProducts.length > 0 ? (
                                    recommendedProducts.map(
                                        (product, index) => (
                                            <div
                                                key={index}
                                                className="lmsc_product_item"
                                            >
                                                <img
                                                    src={product.image}
                                                    alt={product.title}
                                                    className="lmsc_usrp_product_image"
                                                />
                                                <div className="lmsc_product_info">
                                                    <h3 className="lmsc_product_title">
                                                        {product.title}
                                                    </h3>
                                                    <p className="lmsc_product_price">
                                                        {product.actual_price}
                                                        <strike>
                                                            {
                                                                product.compare_price
                                                            }
                                                        </strike>
                                                    </p>
                                                </div>
                                                <button
                                                    className="lmsc_add_to_cart_button"
                                                    onClick={() =>
                                                        handleBuyButtonClick(
                                                            product
                                                        )
                                                    }
                                                >
                                                    {
                                                        upsellPopupData.CUBuyBtnText
                                                    }
                                                </button>
                                            </div>
                                        )
                                    )
                                ) : (
                                    <p>No products available.</p>
                                )}
                            </div>
                        </section>
                    </div>

                    {/* Popup Modal */}

                    {open === true && popupOpen && selectedProduct && (
                        <div
                            className={`lmsc_popup_modal ${
                                upsellPopupData.USPosition === "left"
                                    ? "upsell_left"
                                    : "upsell_right"
                            } ${
                                popupOpenClass
                                    ? "lmsc_bottomSheet--onScreen"
                                    : "lmsc_bottomSheet--offScreen"
                            }`}
                        >
                            <button
                                id="lmupsc_closeButton"
                                className="lmsc_close_button"
                                onClick={() => {
                                    setPopupOpenClass(false);
                                    setTimeout(() => {
                                        setPopupOpen(false);
                                    }, 1000);
                                }}
                            >
                                &times;
                            </button>
                            <div className="lmsc_pro_popup_image">
                                <img
                                    src={selectedProduct.image}
                                    alt={selectedProduct.title}
                                />
                            </div>
                            <h3 className="lmsc_sproduct_title">
                                {selectedProduct.title}
                            </h3>

                            <div className="lmsc_pro_price_wrapper">
                                <div className="lmsc_product_price">
                                    {selectedProduct.actual_price}
                                    <strike>
                                        {selectedProduct.compare_price}
                                    </strike>
                                </div>
                            </div>
                            <QuantityPicker value={1} min={1} max={10} />

                            {selectedProduct.options.map((variation, index) => (
                                <div key={index} className="lmsc_variation">
                                    <label
                                        htmlFor={`variation_${index}`}
                                        className="lmsc_product_label"
                                    >
                                        <span className="lm_variation_select_label">
                                            {variation.name} :
                                        </span>
                                        <select
                                            className="lm_variation_select__select"
                                            id={`variation_${index}`}
                                        >
                                            {variation.values.map(
                                                (value, idx) => (
                                                    <option
                                                        key={idx}
                                                        value={value}
                                                    >
                                                        {value}
                                                    </option>
                                                )
                                            )}
                                        </select>
                                    </label>
                                </div>
                            ))}

                            <button className="lmsc_close_popup_button">
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
