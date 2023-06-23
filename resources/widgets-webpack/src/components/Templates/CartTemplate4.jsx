import React, { useState, useEffect } from "react";
import Select from "react-select";
import "select2/dist/js/select2.min";
// import proimage from "../assets/productimage.png";
import { QuantityPicker } from "react-qty-picker";
import style from "./CartTemplate4.module.css";
import getSymbolFromCurrency from "currency-symbol-map";

export default function CartTemplate4(props) {
    const template_data = props.templateData.current_template;
    const position = template_data.general_settings.position,
        checkMobile = template_data.general_settings.checkMobile,
        checkDesktop = template_data.general_settings.checkDesktop,
        gsBold = template_data.general_settings.gsBold,
        gsItalic = template_data.general_settings.gsItalic,
        gsUnderline = template_data.general_settings.gsUnderline,
        gsFontFamily = template_data.general_settings.gsFontFamily,
        gsTitleColor = template_data.general_settings.gsTitleColor,
        containerHeight = template_data.general_settings.containerHeight,
        gsFontsize = template_data.general_settings.gsFontsize,
        gsPriceColor = template_data.general_settings.gsPriceColor,
        gsBgColor = template_data.general_settings.gsBgColor,
        gsAction = template_data.general_settings.gsAction,
        gsDisplayCondition = template_data.general_settings.gsDisplayCondition,
        gsOffsetValue = template_data.general_settings.gsOffsetValue,
        btnBold = template_data.buy_btn_settings.btnBold,
        btnItalic = template_data.buy_btn_settings.btnItalic,
        btnUnderline = template_data.buy_btn_settings.btnUnderline,
        btnTextColor = template_data.buy_btn_settings.btnTextColor,
        btnBgColor = template_data.buy_btn_settings.btnBgColor,
        btnFontsize = template_data.buy_btn_settings.btnFontsize,
        btnheightValue = template_data.buy_btn_settings.btnheightValue,
        btnBorderColor = template_data.buy_btn_settings.btnBorderColor,
        btnBgHoverColor = template_data.buy_btn_settings.btnBgHoverColor,
        btnBorderHoverColor =
            template_data.buy_btn_settings.btnBorderHoverColor,
        btnTexthoverColor = template_data.buy_btn_settings.btnTexthoverColor,
        btnWidthValue = template_data.buy_btn_settings.btnWidthValue,
        btnBorderThickness = template_data.buy_btn_settings.btnBorderThickness,
        btnBorderRadius = template_data.buy_btn_settings.btnBorderRadius,
        editText = template_data.buy_btn_settings.editText,
        unavailable = template_data.buy_btn_settings.unavailable;

    const [showContainer, setShowContainer] = useState(false);
    const [loading, setLoading] = useState(false);
    // console.log(props.templateData);
    const [selectedVariant, setSelectedVariant] = useState(
        props.product.variants?.length && props.product.variants[0]
    );
    const [selectedOptions, setSelectedOptions] = useState({
        option0:
            props.product.options?.length && props.product.options[0].values[0],
        option1:
            props.product.options?.length > 1 &&
            props.product.options[1].values[0],
        option2:
            props.product.options?.length > 2 &&
            props.product.options[2].values[0],
    });
    /*--------------------------------------------------------------------------------------------------*/
    /*PRICE ACCORDING TO SELECTED VARIANT FROM CONTAINER OPTIONS START*/
    const price = selectedVariant?.price
        ? getSymbolFromCurrency(window.Shopify.currency.active) +
          " " +
          selectedVariant.price / 100
        : " ";
    /*PRICE ACCORDING TO SELECTED VARIANT FROM CONTAINER OPTIONS END*/
    /*--------------------------------------------------------------------------------------------------*/
    /*COMPARE AT PRICE ACCORDING TO SELECTED VARIANT FROM CONTAINER OPTIONS START*/
    const oldPrice = selectedVariant?.compare_at_price
        ? getSymbolFromCurrency(window.Shopify.currency.active) +
          selectedVariant.compare_at_price / 100
        : " ";
    /*COMPARE AT PRICE ACCORDING TO SELECTED VARIANT FROM CONTAINER OPTIONS START*/
    /*--------------------------------------------------------------------------------------------------*/
    /*GENERAL SETTINGS CONSTANTS*/
    const handleChangeSelect = (event, index) => {
        const val = event?.value;
        const option = "option" + index;
        setSelectedOptions((prevState) => ({
            ...prevState,
            [option]: val,
        }));
    };
    const [shouldDisable, setShouldDisable] = useState(
        selectedVariant.available === false ? true : false
    );
    const checkCondition = () => {
        const condition = selectedVariant.available === false ? true : false;

        setShouldDisable(condition);
    };
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const monthOptions = { month: "short" };
    const currentMonth = currentDate.toLocaleString("en-US", monthOptions);
    let handleAddProduct = async () => {
        setLoading(true);
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                id: selectedVariant.id,
                quantity: document
                    .getElementById("lm_sticky_container__qty_picker")
                    .getElementsByTagName("input")[0].value,
            }),
        };
        const requestOptions1 = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                shop: window.Shopify.shop,
                month: currentMonth,
                year: currentYear,
            }),
        };
        if (selectedVariant) {
            try {
                await fetch(
                    `${process.env.REACT_APP_API_URL}` + "addBuyButtonClicks",
                    requestOptions1
                );
                const res = await fetch(
                    "https://" + window.location.host + "/cart/add.json",
                    requestOptions
                );
                await res.json();
                setLoading(false);
                if (template_data.general_settings.gsAction === "1") {
                    window.location.href = "/cart";
                } else {
                    window.location.href = "/checkout";
                }
            } catch (error) {
                console.log();
            }
        }
    };
    useEffect(() => {
        const option0 = selectedOptions?.option0;
        const option1 = selectedOptions?.option1;
        const option2 = selectedOptions?.option2;
        let title = option0;
        if (option0 && option1 && option2) {
            title = option0 + " / " + option1 + " / " + option2;
        } else if (option0 && option1) {
            title = option0 + " / " + option1;
        }
        /*--------------------------------------------------------------------------------------------------*/
        /*GETTING SELECTED VARIANT FROM OPTIONS START*/
        const neededVariant = props.product.variants.find(
            (variant) => variant.title === title
        );
        console.log("SelectedVariant");
        console.log(neededVariant);
        if (neededVariant) {
            setSelectedVariant(neededVariant);
        }
        /*GETTING SELECTED VARIANT FROM OPTIONS END*/
        /*--------------------------------------------------------------------------------------------------*/

        if (gsDisplayCondition === "2") {
            /*IF SELECTED Only when add to cart is not visible*/
            const addToCartButton = document.querySelector(
                ".lm-quote-add-to-cart-q78er"
            );
            const options = {
                root: null,
                rootMargin: "0px",
                threshold: 0,
            };

            const handleIntersect = (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setShowContainer(false);
                    } else {
                        setShowContainer(true);
                    }
                });
            };

            const observer = new IntersectionObserver(handleIntersect, options);
            if (addToCartButton) {
                observer.observe(addToCartButton);
            }
            return () => {
                if (addToCartButton) {
                    observer.unobserve(addToCartButton);
                }
            };
        } else if (gsDisplayCondition === "3") {
            /*IF SELECTED Only when user has scrolled down and surpassed the 'Add to cart' button*/
            const handleScroll = () => {
                const addToCartButton = document.querySelector(
                    ".lm-quote-add-to-cart-q78er"
                );
                if (addToCartButton) {
                    const buttonPosition =
                        addToCartButton.getBoundingClientRect();
                    if (buttonPosition.top <= 0) {
                        setShowContainer(true);
                    } else {
                        setShowContainer(false);
                    }
                }
            };
            window.addEventListener("scroll", handleScroll);
            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        } else {
            /*IF SELECTED Always show*/
            setShowContainer(true);
        }
    }, [
        selectedOptions?.option0,
        selectedOptions?.option1,
        selectedOptions?.option2,
        props.product.variants,
    ]);
    const customStyles = {
        indicatorSeparator: (provided) => ({
            ...provided,
            display: "none", // Hide the separator
        }),
    };

    if (props.templateData) {
        if (showContainer) {
            return (
                <div>
                    <style>
                        {`
                            @import url("https://fonts.googleapis.com/css2?family=${gsFontFamily}&display=swap");
                            .apply-font{
                                font-family : ${gsFontFamily};
                            }
                            .lm_quantity_picker .quantity-picker .quantity-display{
                            padding: 0;
                            background-color: #111;
                            width: 28px !important;
                            font-size: 14px;
                            color: #fff;
                            box-shadow: none;
                            }
                            .lm_quantity_picker .quantity-modifier{
                            height: ${containerHeight}px;
                            width: 28px;
                            border: none;
                            font-size: 16px;
                            color: #fff;
                            background-color: #111;
                            border-radius: 0;
                            }
                            .lm_quantity_picker .quantity-picker{
                            background-color: #111;
                            border: none;
                            border-radius:0;
                            display: flex;
                            align-items: center;
                            }
                            .lm_bold{
                            font-weight: bolder;
                            }
                            .lm_italic{
                            font-style: italic;
                            }
                            .lm_underline{
                            text-decoration: underline;
                            }
                        .lm-sticky-Bottom{
                            box-shadow: 0 0px 20px 0px rgba(165, 165, 165, 0.65);
                            background: ${gsBgColor};
                            height: ${containerHeight}px;
                            bottom:  ${gsOffsetValue}px;
                        }
                        .lm-sticky-Top{
                            box-shadow: 0 0px 20px 0px rgba(165, 165, 165, 0.65);
                            background: ${gsBgColor};
                            height: ${containerHeight}px;
                            top:  ${gsOffsetValue}px;
                        }
                        .img_size {
                            height: ${containerHeight}px;
                        }
                        .font_option {
                            color: ${gsTitleColor};
                            font-size: ${gsFontsize}px;
                        }
                        .label_color{
                            color: ${gsTitleColor};
                        }
                        .p_color{
                            color: ${gsPriceColor};
                            display: inline-block;
                        }

                        .lm_options {
                            position: relative;
                        }
                        .lm_options .pro_select_menu{
                            display: inline-block;
                            width: 100px;
                        }
                        .lm_options .pro_select_menu > div{
                            border: 0;
                            font-size: 12px;
                            min-height: ${containerHeight}px;
                            box-shadow: none !important;
                            background-color: #252525;
                            color: #fff;
                            border-radius: 0;
                        }
                        .css-1jqq78o-placeholder{
                            font-size:12px;
                            color: #fff;
                        }
                        .pro_select_menu svg{
                            fill: #fff;
                        }
                        .css-qbdosj-Input{
                            color: #fff;
                        }
      .css-1nmdiq5-menu{
        margin:0 auto !important;
      }
      .css-14h4o58-menu{
        margin:0 auto !important;
      }
                        .css-1dimb5e-singleValue{
                            color: #fff;
                        }
                        .css-1xc3v61-indicatorContainer{
                            padding: 0 8px;
                        }
                        .slide_right {
                            width: ${btnWidthValue}px;
                            height: ${btnheightValue}px;
                            font-size: ${btnFontsize}px;
                            background: ${btnBgColor};
                            border-Width: ${btnBorderThickness}px;
                            border-color: ${btnBorderColor};
                            border-radius: ${btnBorderRadius}px;
                            color: ${btnTextColor};
                            padding: 0 20px;
                            display: inline-block;
                            cursor: pointer;
                            box-shadow: inset 0 0 0 0 ${btnBgHoverColor};
                            -webkit-transition: ease-out 0.4s;
                            -moz-transition: ease-out 0.4s;
                            transition: ease-out 0.4s;
                        }

                        .slide_right:hover {
                            box-shadow: inset 400px 0 0 0 ${btnBgHoverColor};
                            border-color: ${btnBorderHoverColor};
                            color: ${btnTexthoverColor};
                        }

                        @media screen and (max-width: 991px) {
                            .lm_options .pro_select_menu > div {
                            min-height: 40px;        }
                            .lm_quantity_picker .quantity-modifier ,.slide_right{
                            height: 40px;        }
                        }
                        `}
                    </style>
                    {props.templateData.enable === true ? (
                        <div
                            className={`lm-sticky-${position} ${
                                style.lm_sticky_cart
                            } ${
                                checkDesktop === true
                                    ? "lm_sticky_show_desktop_abc12"
                                    : "lm_sticky_hide_desktop_abc12"
                            } ${
                                checkMobile === true
                                    ? "lm_sticky_show_mobile_abc12"
                                    : "lm_sticky_hide_mobile_abc12"
                            }  `}
                        >
                            <div className={style.lm_container}>
                                <div className={style.lm_cart_module}>
                                    <div className={style.lm_pro_image}>
                                        <img
                                            className="img_size"
                                            src={
                                                selectedVariant.featured_image !==
                                                null
                                                    ? selectedVariant
                                                          .featured_image.src
                                                    : props.productImage !== null && props.productImage !== undefined
                                                        ? props.productImage
                                                        : process.env.REACT_APP_IMAGE_URL +"images/default_product.png"
                                                    
                                            }
                                            alt="product "
                                        />
                                        <div className={style.lm_middlecontent}>
                                            <h5
                                                className={`font_option apply-font ${
                                                    style.pro_names
                                                } ${
                                                    gsBold === true
                                                        ? "lm_bold"
                                                        : ""
                                                } ${
                                                    gsItalic === true
                                                        ? "lm_italic"
                                                        : ""
                                                } ${
                                                    gsUnderline === true
                                                        ? "lm_underline"
                                                        : "no-line"
                                                }`}
                                            >
                                                {props.product.title}
                                            </h5>
                                            <div className="p_color">
                                                <span
                                                    className={
                                                        style.compare_lm_price
                                                    }
                                                >
                                                    {oldPrice}
                                                </span>{" "}
                                                <span
                                                    className={
                                                        style.simple_price
                                                    }
                                                >
                                                    {price}
                                                </span>{" "}
                                                {selectedVariant.available ===
                                                false ? (
                                                    <span
                                                        className={
                                                            style.lm_out_stock
                                                        }
                                                    >
                                                        {unavailable}
                                                    </span>
                                                ) : null}
                                            </div>
                                        </div>
                                    </div>
                                    <div className={style.lmblock_right}>
                                        <div className={style.var_options}>
                                            {selectedVariant.option1 !== 'Default Title' && props.product.options?.length &&
                                                props.product.options[0].values
                                                    ?.length &&
                                                props.product.options.map(
                                                    (opt, i, arr) => {
                                                        const optionName =
                                                            "option" + i;
                                                        const defaultOption = [
                                                            {
                                                                value: opt
                                                                    .values[0],
                                                                label: opt
                                                                    .values[0],
                                                            },
                                                        ];
                                                        return (
                                                            <div
                                                                className={`lm_options ${style.lm_options}`}
                                                            >
                                                                <div
                                                                    className={`productInputs ${style.productInputs}`}
                                                                >
                                                                    <div
                                                                        key={
                                                                            optionName
                                                                        }
                                                                    >
                                                                        {/* <label className="label_color">
                                                                            {
                                                                                opt.name
                                                                            }
                                                                        </label> */}
                                                                        <Select
                                                                            styles={
                                                                                customStyles
                                                                            }
                                                                            isSearchable={
                                                                                false
                                                                            }
                                                                            placeholder={
                                                                                opt.name
                                                                            }
                                                                            menuPlacement={
                                                                                position ===
                                                                                "Bottom"
                                                                                    ? "top"
                                                                                    : "bottom"
                                                                            }
                                                                            onChange={(
                                                                                selectedOption
                                                                            ) =>
                                                                                handleChangeSelect(
                                                                                    selectedOption,
                                                                                    i
                                                                                )
                                                                            }
                                                                            name={
                                                                                opt.name
                                                                            }
                                                                            key={
                                                                                optionName
                                                                            }
                                                                            className={`pro_select_menu apply-font ${style.pro_names}`}
                                                                            defaultValue={
                                                                                defaultOption[0]
                                                                            }
                                                                            style={{
                                                                                width:
                                                                                    arr.length >
                                                                                    2
                                                                                        ? "30%"
                                                                                        : "46%",
                                                                            }}
                                                                            options={opt.values.map(
                                                                                (
                                                                                    val
                                                                                ) => ({
                                                                                    value: val,
                                                                                    label: val,
                                                                                })
                                                                            )}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        );
                                                    }
                                                )}
                                        </div>
                                        <div className={style.button_block}>
                                            <div
                                                id="lm_sticky_container__qty_picker"
                                                className={`lm_quantity_picker ${style.lm_quantity_selector}`}
                                            >
                                                <QuantityPicker
                                                    className={style.quantity12}
                                                    value={1}
                                                    min={1}
                                                    max={10}
                                                />
                                            </div>
                                            <div className={style.lm_buy_btn}>
                                                {/* <CustomizedButton onClick={() => alert("Welcome!")}> */}
                                                <button
                                                    id="lm_sticky_buy_button"
                                                    disabled={shouldDisable}
                                                    onClick={
                                                        (() => checkCondition,
                                                        handleAddProduct)
                                                    }
                                                    className={`lm_btn slide_right apply-font ${
                                                        btnBold === true
                                                            ? "lm_bold"
                                                            : ""
                                                    } ${
                                                        btnItalic === true
                                                            ? "lm_italic"
                                                            : ""
                                                    } ${
                                                        btnUnderline === true
                                                            ? "lm_underline"
                                                            : "no-line"
                                                    }`}
                                                >
                                                    {loading === true
                                                        ? "Loading..."
                                                        : `${editText}`}
                                                </button>

                                                {/* <div class="button_slide slide_right">BUTTON: SLIDE RIGHT </div> */}
                                                {/* </CustomizedButton> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            );
        } else {
            return null;
        }
    } else {
        return null;
    }
}
