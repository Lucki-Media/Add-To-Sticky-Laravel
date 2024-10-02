import React, { useState } from "react";
import style from "../../css/Drawer.module.css";
import { QuantityPicker } from "react-qty-picker";

export default function BottomSlider({
    showBottomSlider,
    sliderProduct,
    customizationData,
    handleBottomSlider,
}) {
    const [checkoutBtnHover, setCheckoutBtnHover] = useState(false);

    return (
        <>
            <style>
                {`
                    .lm_quantity_picker_bottom_slider .quantity-picker .quantity-display{
                        padding: 0;
                        background-color: #fff;
                        width: 28px !important;
                        font-size: ${customizationData.productList.PLFontSize}px;
                        box-shadow: none;
                    }
                    .lm_quantity_picker_bottom_slider .quantity-modifier{
                        height: 25px;
                        width: 30px;
                        border: none;
                        font-size: ${customizationData.productList.PLFontSize}px;
                        color: black;
                        background-color: #fff;
                        border-radius: 0;
                    }
                    .lm_quantity_picker_bottom_slider .quantity-picker{
                        background-color: #fff;
                        border: 1px solid #ddd;
                        border-radius:0;
                        display: flex;
                        align-items: center;
                    }
                `}
            </style>
            <div
                className={`${showBottomSlider && style.lm_Slide_div_open} ${
                    style.lm_Slide_div
                }`}
                style={{
                    background: customizationData.cartHeader.DCBGColor,
                }}
            >
                <div
                    className={style.lm_Slide_close_btn}
                    onClick={() => {
                        handleBottomSlider();
                    }}
                    style={{
                        fontSize: customizationData.cartUpsell.CUBodyFontSize,
                        color: customizationData.cartUpsell.CUBodyColor,
                    }}
                >
                    <span
                        style={{
                            color: customizationData.cartUpsell.CUBodyColor,
                        }}
                    >
                        &times;
                    </span>
                </div>
                <div className={style.lm_Slide_card}>
                    <div className={style.lm_Slide_pro_image}>
                        <img src={sliderProduct.image} alt="" />
                    </div>
                    <div className={style.lm_Slide_pro}>
                        <div
                            className={style.lm_Slide_pro_title}
                            style={{
                                fontSize:
                                    customizationData.cartUpsell.CUBodyFontSize,
                                color: customizationData.cartUpsell.CUBodyColor,
                            }}
                        >
                            {sliderProduct.title}
                        </div>

                        <div className={style.lm_Slide_pro_price_wrapper}>
                            <div
                                className={style.lm_Slide_product_price}
                                style={{
                                    fontSize:
                                        customizationData.cartUpsell
                                            .CUBodyFontSize,
                                    color: customizationData.cartUpsell
                                        .CUBodyColor,
                                }}
                            >
                                {sliderProduct.actual_price}
                            </div>
                            <div
                                className={style.lm_Slide_pro_compare_price}
                                style={{
                                    fontSize:
                                        customizationData.cartUpsell
                                            .CUBodyFontSize,
                                    color: customizationData.cartUpsell
                                        .CUBodyColor,
                                }}
                            >
                                <strike>{sliderProduct.compare_price}</strike>
                            </div>
                        </div>

                        <div
                            className={`lm_quantity_picker_bottom_slider ${style.lm_quantity_selector}`}
                        >
                            <QuantityPicker
                                className={style.quantity12}
                                value={1}
                                min={1}
                                max={10}
                            />
                        </div>
                    </div>
                </div>

                <div className={style.lm_variation_dropdown}>
                    {sliderProduct.options?.map((variantOption) => (
                        <div
                            className={style.lm_variation_dropdown__variants}
                            key={variantOption.name}
                        >
                            <label
                                className={style.lm_select__inline}
                                htmlFor={
                                    "lm_variation_dropdown_" +
                                    variantOption.name
                                }
                            >
                                <span
                                    className={style.lm_variation_select_label}
                                    style={{
                                        fontSize:
                                            customizationData.cartUpsell
                                                .CUBodyFontSize,
                                        color: customizationData.cartUpsell
                                            .CUBodyColor,
                                    }}
                                >
                                    {variantOption.name} :
                                </span>
                                <select
                                    className={
                                        style.lm_variation_select__select
                                    }
                                    style={{
                                        fontSize:
                                            customizationData.cartUpsell
                                                .CUBodyFontSize,
                                        color: customizationData.cartUpsell
                                            .CUBodyColor,
                                        background:
                                            customizationData.cartHeader
                                                .DCBGColor,
                                    }}
                                    id={`lm_variation_dropdown_${variantOption.name}`}
                                >
                                    {variantOption.values.map((optionValue) => (
                                        <option
                                            value={optionValue}
                                            key={optionValue}
                                        >
                                            {optionValue}
                                        </option>
                                    ))}
                                </select>
                            </label>
                        </div>
                    ))}
                </div>
                <div className={style.lm_Add_to_cart}>
                    <button
                        style={{
                            fontSize:
                                customizationData.bottomSection
                                    .BSCheckoutBtnFontSize,
                            color: checkoutBtnHover
                                ? customizationData.bottomSection
                                      .BSBtnTextHoverColor
                                : customizationData.bottomSection
                                      .BSBtnTextColor,
                            background: checkoutBtnHover
                                ? customizationData.bottomSection
                                      .BSBtnBGHoverColor
                                : customizationData.bottomSection.BSBtnBGColor,
                        }}
                        onMouseEnter={() => {
                            setCheckoutBtnHover(true);
                        }}
                        onMouseLeave={() => {
                            setCheckoutBtnHover(false);
                        }}
                    >
                        {customizationData.cartUpsell.CUBuyBtnText}
                    </button>
                </div>
            </div>
        </>
    );
}
