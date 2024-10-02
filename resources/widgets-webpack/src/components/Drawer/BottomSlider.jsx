import React, { useEffect, useState } from "react";
import style from "./Drawer.module.css";
import { QuantityPicker } from "react-qty-picker";
import getSymbolFromCurrency from "currency-symbol-map";

export default function BottomSlider({
    showBottomSlider,
    sliderProduct,
    customizationData,
    cartCurrency,
    handleBottomSlider,
    handleCartAdd,
}) {
    const [checkoutBtnHover, setCheckoutBtnHover] = useState(false);

    // State to store the selected options, initialized properly when sliderProduct is defined
    const [selectedVariant, setSelectedVariant] = useState(
        sliderProduct?.variants?.[0] || {}
    );
    const [selectedOptions, setSelectedOptions] = useState(
        () => sliderProduct?.options?.map((option) => option.values[0]) || []
    );
    const [quantity, setQuantity] = useState(
        selectedVariant?.quantity_rule?.min ?? 1
    );

    // Update selectedOptions whenever sliderProduct changes
    useEffect(() => {
        if (sliderProduct?.options) {
            var optionsArray = sliderProduct.options.map(
                (option) => option.values[0]
            );
            setSelectedOptions(optionsArray);
            setSelectedVariant(
                sliderProduct.variants.find(
                    (obj) => obj.title === optionsArray.join(" / ")
                )
            );
        }
    }, [sliderProduct]);

    // Update quantity when selectedVariant changes
    useEffect(() => {
        // Reset to default value (e.g., min) when selectedVariant changes
        setQuantity(selectedVariant?.quantity_rule?.min ?? 1);
    }, [selectedVariant]);

    // Handler to update selected options
    const handleOptionChange = (index, value) => {
        const updatedOptions = [...selectedOptions];
        updatedOptions[index] = value;
        setSelectedOptions(updatedOptions);
        setSelectedVariant(
            sliderProduct.variants.find(
                (obj) => obj.title === updatedOptions.join(" / ")
            )
        );
    };

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
                        <img src={sliderProduct.featured_image} alt="" />
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
                                {getSymbolFromCurrency(cartCurrency) +
                                    (Number(sliderProduct.price) / 100).toFixed(
                                        2
                                    )}
                            </div>
                            {sliderProduct.compare_at_price &&
                                sliderProduct.compare_at_price > 0 && (
                                    <div
                                        className={
                                            style.lm_Slide_pro_compare_price
                                        }
                                        style={{
                                            fontSize:
                                                customizationData.cartUpsell
                                                    .CUBodyFontSize,
                                            color: customizationData.cartUpsell
                                                .CUBodyColor,
                                        }}
                                    >
                                        <strike>
                                            {getSymbolFromCurrency(
                                                cartCurrency
                                            ) +
                                                (
                                                    Number(
                                                        sliderProduct.compare_at_price
                                                    ) / 100
                                                ).toFixed(2)}
                                        </strike>
                                    </div>
                                )}
                        </div>

                        <div
                            id="lm_bottom_slider_qty_picker"
                            className={`lm_quantity_picker_bottom_slider ${style.lm_quantity_selector}`}
                        >
                            <QuantityPicker
                                key={selectedVariant?.id + "-" + quantity}
                                id={selectedVariant?.id}
                                className={style.quantity12}
                                value={quantity}
                                min={selectedVariant?.quantity_rule?.min ?? 1}
                                max={selectedVariant?.quantity_rule?.max ?? 10}
                                onChange={(newQuantity) =>
                                    setQuantity(newQuantity)
                                }
                            />
                        </div>
                    </div>
                </div>

                {/* Varients */}
                {sliderProduct?.options?.[0]?.values?.[0] !==
                    "Default Title" && (
                    <div className={style.lm_variation_dropdown}>
                        {sliderProduct.options?.map((variantOption, index) => (
                            <div
                                className={
                                    style.lm_variation_dropdown__variants
                                }
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
                                        className={
                                            style.lm_variation_select_label
                                        }
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
                                        value={selectedOptions[index]}
                                        onChange={(e) =>
                                            handleOptionChange(
                                                index,
                                                e.target.value
                                            )
                                        }
                                    >
                                        {variantOption.values.map(
                                            (optionValue) => (
                                                <option
                                                    value={optionValue}
                                                    key={optionValue}
                                                >
                                                    {optionValue}
                                                </option>
                                            )
                                        )}
                                    </select>
                                </label>
                            </div>
                        ))}
                    </div>
                )}

                {/* Add to Cart Button */}
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
                            cursor: selectedVariant?.available
                                ? "pointer"
                                : "not-allowed",
                        }}
                        onMouseEnter={() => {
                            setCheckoutBtnHover(true);
                        }}
                        onMouseLeave={() => {
                            setCheckoutBtnHover(false);
                        }}
                        onClick={() => {
                            if (selectedVariant?.available) {
                                handleCartAdd(
                                    selectedVariant.id,
                                    quantity
                                );
                            }
                        }}
                    >
                        {customizationData.cartUpsell.CUBuyBtnText}
                    </button>
                </div>
            </div>
        </>
    );
}
