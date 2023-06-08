import React, { useState, useEffect } from "react";
import Select from "react-select";
import "select2/dist/js/select2.min";
// import proimage from "../assets/productimage.png";
import { QuantityPicker } from "react-qty-picker";
import style from "./CartTemplate1.module.css";
import getSymbolFromCurrency from "currency-symbol-map";

export default function CartTemplate1(props) {
    const template_data = props.templateData.current_template;
    // console.log(props.templateData);
    const [selectedVariant, setSelectedVariant] = useState(
        props.product.variants?.length && props.product.variants[0]
    );
    const [selectedProductOption, setSelectedProductOption] = useState(null);

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
    const [productImage, setProductImage] = useState("");

    const [enable, setEnable] = useState(true);
    /*GENERAL SETTINGS CONSTANTS*/
    const [position, setPosition] = useState("Top");
    const [checkMobile, setCheckMobile] = useState(false);
    const [checkDesktop, setCheckDesktop] = useState(false);
    const [gsBold, setGsBold] = useState(false);
    const [gsFontsize, setGsFontsize] = useState(20);
    const [gsItalic, setGsItalic] = useState(false);
    const [gsUnderline, setGsUnderLine] = useState(false);
    const [gsFontFamily, setGsFontFamily] = useState("Roboto");
    const [gsTitleColor, setGsTitleColor] = useState("rgba(0, 0, 0, 0)");
    const [gsPriceColor, setGsPriceColor] = useState("rgba(0, 0, 0, 0)");
    const [gsBgColor, setGsBgColor] = useState("rgba(0, 0, 0, 0)");
    const [gsOffsetValue, setGsOffsetValue] = useState(0);
    const [gsAction, setGsAction] = useState("1");
    const [gsDisplayCondition, setGsDisplayCondition] = useState("1");
    const [containerHeight, setContainerHeight] = useState(70);

    /*BUY NOW CONSTANTS*/
    const [editText, setEditText] = useState("BUY NOW");
    const [soldOut, setSoldOut] = useState("Sold out");
    const [unavailable, setUnavailable] = useState("Unavailable");
    const [btnWidthValue, setBtnWidthValue] = useState(125);
    const [btnheightValue, setBtnHeightValue] = useState(35);
    const [btnFontsize, setBtnFontsize] = useState(20);
    const [btnBorderThickness, setBtnBorderThickness] = useState(1);
    const [btnBorderRadius, setBtnBorderRadius] = useState(1);
    const [btnBold, setBtnBold] = useState(false);
    const [btnItalic, setBtnItalic] = useState(false);
    const [btnUnderline, setBtnUnderline] = useState(false);
    const [btnTextColor, setBtnTextColor] = useState("rgba(0, 0, 0, 0)");
    const [btnBgColor, setBtnBgColor] = useState("rgba(0, 0, 0, 0)");
    const [btnTexthoverColor, setBtnTexthoverColor] =
        useState("rgba(0, 0, 0, 0)");
    const [btnBgHoverColor, setBtnBgHoverColor] = useState("rgba(0, 0, 0, 0)");
    const [btnBorderColor, setBtnBorderColor] = useState("rgba(0, 0, 0, 0)");
    const [btnBorderHoverColor, setBtnBorderHoverColor] =
        useState("rgba(0, 0, 0, 0)");
    const handleChangeSelect = (event, index) => {
        const val = event?.target?.value;
        // console.log("val");
        // console.log(selectedProductOption.value);
        const option = "option" + index;
        setSelectedOptions((prevState) => ({
            ...prevState,
            [option]: val,
        }));
    };
    let handleAddProduct = async () => {
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
        if (selectedVariant) {
            try {
                const res = await fetch(
                    "https://" + window.location.host + "/cart/add.json",
                    requestOptions
                );
                const cart_added = await res.json();
                window.location.href = "/cart";
                // window.location.href = "/checkout";
                // console.log(cart_added);
            } catch (error) {
                console.log();
            }
        }
    };

    useEffect(() => {
        setEnable(props.templateData.enable);
        setCheckDesktop(template_data.checkDesktop);
        setCheckMobile(template_data.checkMobile);
        setGsFontFamily(template_data.gsFontFamily);
        setGsFontsize(template_data.gsFontsize);
        setGsBold(template_data.gsBold);
        setGsItalic(template_data.gsItalic);
        setGsUnderLine(template_data.gsUnderline);
        setGsTitleColor(template_data.gsTitleColor);
        setContainerHeight(template_data.containerHeight);
        setGsPriceColor(template_data.gsPriceColor);
        setGsBgColor(template_data.gsBgColor);
        setPosition(template_data.position);
        setGsOffsetValue(template_data.gsOffsetValue);
        setEditText(template_data.editText);
        setSoldOut(template_data.soldOut);
        setUnavailable(template_data.unavailable);
        setBtnHeightValue(template_data.btnheightValue);
        setBtnWidthValue(template_data.btnWidthValue);
        setBtnFontsize(template_data.btnFontsize);
        setBtnBold(template_data.btnBold);
        setBtnItalic(template_data.btnItalic);
        setBtnUnderline(template_data.btnUnderline);
        setBtnTextColor(template_data.btnTextColor);
        setBtnBgColor(template_data.btnBgColor);
        setBtnTexthoverColor(template_data.btnTexthoverColor);
        setBtnBgHoverColor(template_data.btnBgHoverColor);
        setBtnBorderThickness(template_data.btnBorderThickness);
        setBtnBorderRadius(template_data.btnBorderRadius);
        setBtnBorderColor(template_data.btnBorderColor);
        setBtnBorderHoverColor(template_data.btnBorderHoverColor);
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
        /*--------------------------------------------------------------------------------------------------*/
        // setGrid(DefaultSettings[0].layout);
        // setPosition(DefaultSettings[0].position);
        // setbgColor(DefaultSettings[0].bg_color);
    }, [
        selectedOptions?.option0,
        selectedOptions?.option1,
        selectedOptions?.option2,
        props.product.variants,
    ]);

    const options = props.product.options[0].values.map((opt1) => {
        return { value: opt1, label: opt1 };
    });

    const options123 = [
        { value: "L", label: "L" },
        { value: "M", label: "M" },
        { value: "XXL", label: "XXL" },
    ];
    const options2 = [
        { value: "Red", label: "Red" },
        { value: "Green", label: "Green" },
        { value: "Blue", label: "Blue" },
    ];
    const options3 = [
        { value: "Rubber", label: "Rubber" },
        { value: "Steel", label: "Steel" },
    ];
    // BUTTON HOVER
    const handleCountEnter = () => {
        setBtnBgHoverColor(true);
    };

    const handleCountLeave = () => {
        setBtnBgHoverColor(false);
    };
    //BUTTON END
    if (props.templateData) {
        return (
            <div>
                <style>
                    {`
                        .lm_quantity_picker .quantity-picker .quantity-display{
                            padding: 0;
                            background-color: #fff;
                            width: 28px !important;
                            font-size: 14px;
                        }
                        .lm_quantity_picker .quantity-modifier{
                            height: 28px;
                            width: 28px;
                            border: none;
                            font-size: 16px;
                            color: black;
                            background-color: #fff;
                            border-radius: 0;
                        }
                        .lm_quantity_picker .quantity-picker{
                            background-color: #fff;
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
                        background: ${props.templateData.current_template.general_settings.gsBgColor};
                        height: ${props.templateData.current_template.general_settings.containerHeight}px;
                        bottom:  ${props.templateData.current_template.general_settings.gsOffsetValue}px;
                    }
                    .lm-sticky-Top{
                        box-shadow: 0 0px 20px 0px rgba(165, 165, 165, 0.65);
                        background: ${props.templateData.current_template.general_settings.gsBgColor};
                        height: ${props.templateData.current_template.general_settings.containerHeight}px;
                        top:  ${props.templateData.current_template.general_settings.gsOffsetValue}px;
                    }
                    .img_size {
                        height: ${props.templateData.current_template.general_settings.containerHeight}px;
                    }
                    .font_option {
                        color: ${props.templateData.current_template.general_settings.gsTitleColor};
                        font-size: ${props.templateData.current_template.general_settings.gsFontsize}px;
                    }
                    .label_color{
                        color: ${props.templateData.current_template.general_settings.gsTitleColor};
                    }
                    .p_color{
                        color: ${props.templateData.current_template.general_settings.gsPriceColor};
                    }
                    .lm_btn{
                        width: ${props.templateData.current_template.buy_btn_settings.btnWidthValue}px;
                        height: ${props.templateData.current_template.buy_btn_settings.btnheightValue}px;
                        font-size: ${props.templateData.current_template.buy_btn_settings.btnFontsize}px;
                        background: ${props.templateData.current_template.buy_btn_settings.btnBgColor};
                        border-Width: ${props.templateData.current_template.buy_btn_settings.btnBorderThickness}px;
                        border-color: ${props.templateData.current_template.buy_btn_settings.btnBorderColor};
                        border-radius: ${props.templateData.current_template.buy_btn_settings.btnBorderRadius}px;
                        color: ${props.templateData.current_template.buy_btn_settings.btnTextColor};
                    }
                    .lm_btn:hover{
                        border-color: ${props.templateData.current_template.buy_btn_settings.btnBorderHoverColor};
                        background: ${props.templateData.current_template.buy_btn_settings.btnBgHoverColor};
                        color: ${props.templateData.current_template.buy_btn_settings.btnTexthoverColor};
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
                        min-height: 25px;

                    }
                    .css-1jqq78o-placeholder{
                        font-size:12px;
                    }
                    .css-1xc3v61-indicatorContainer{
                        padding: 0 8px;
                    }
                    `}
                </style>
                {props.templateData.enable === true ? (
                    <div
                        className={`lm-sticky-${
                            props.templateData.current_template.general_settings
                                .position
                        } ${style.lm_sticky_cart} ${
                            checkDesktop === true ? "show" : "hide"
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
                                                ? selectedVariant.featured_image
                                                      .src
                                                : "https://dev.luckistore.in/default_product.png"
                                        }
                                        alt="product image"
                                    />
                                    <div className={style.lm_middlecontent}>
                                        <h5
                                            className={`font_option apply-font ${
                                                style.pro_names
                                            } ${
                                                props.templateData
                                                    .current_template
                                                    .general_settings.gsBold ===
                                                true
                                                    ? "lm_bold"
                                                    : ""
                                            } ${
                                                props.templateData
                                                    .current_template
                                                    .general_settings
                                                    .gsItalic === true
                                                    ? "lm_italic"
                                                    : ""
                                            } ${
                                                props.templateData
                                                    .current_template
                                                    .general_settings
                                                    .gsUnderline === true
                                                    ? "lm_underline"
                                                    : "no-line"
                                            }`}
                                        >
                                            5 Pocket Jean - 30 / Indigo
                                        </h5>
                                        <div className="p_color">
                                            <span
                                                className={
                                                    style.compare_lm_price
                                                }
                                            >
                                                $50.00
                                            </span>{" "}
                                            <span
                                                className={style.simple_price}
                                            >
                                                $4
                                            </span>{" "}
                                            <span
                                                className={style.lm_out_stock}
                                            >
                                                {
                                                    props.templateData
                                                        .current_template
                                                        .buy_btn_settings
                                                        .unavailable
                                                }
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.lmblock_right}>
                                    <div className={style.var_options}>
                                        <div
                                            className={`lm_options ${style.lm_options}`}
                                        >
                                            <div
                                                className={`productInputs ${style.productInputs}`}
                                            >
                                                {props.product.options
                                                    ?.length &&
                                                    props.product.options[0]
                                                        .values?.length &&
                                                    props.product.options.map(
                                                        (opt, i, arr) => {
                                                            const optionName =
                                                                "option" + i;
                                                            return (
                                                                <div>
                                                                    <label className="label_color">
                                                                        {
                                                                            opt.name
                                                                        }
                                                                    </label>
                                                                    <select
                                                                        onChange={(
                                                                            e
                                                                        ) =>
                                                                            handleChangeSelect(
                                                                                e,
                                                                                i
                                                                            )
                                                                        }
                                                                        name={
                                                                            opt.name
                                                                        }
                                                                        key={
                                                                            opt.name
                                                                        }
                                                                        className={
                                                                            style.select
                                                                        }
                                                                        value={
                                                                            selectedProductOption
                                                                        }
                                                                        style={{
                                                                            width:
                                                                                arr.length >
                                                                                2
                                                                                    ? "30%"
                                                                                    : "46%",
                                                                        }}
                                                                    >
                                                                        {opt.values.map(
                                                                            (
                                                                                val
                                                                            ) => {
                                                                                return (
                                                                                    <option
                                                                                        key={
                                                                                            val
                                                                                        }
                                                                                        value={
                                                                                            val
                                                                                        }
                                                                                    >
                                                                                        {
                                                                                            val
                                                                                        }
                                                                                    </option>
                                                                                );
                                                                            }
                                                                        )}
                                                                    </select>
                                                                </div>
                                                            );
                                                        }
                                                    )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className={style.button_block}>
                                        <div
                                            className={`lm_quantity_picker ${style.lm_quantity_selector}`}
                                        >
                                            <QuantityPicker
                                                className={style.quantity12}
                                                min={1}
                                                max={10}
                                            />
                                        </div>
                                        <div className={style.lm_buy_btn}>
                                            {/* <CustomizedButton onClick={() => alert("Welcome!")}> */}
                                            <button
                                                className={`lm_btn ${
                                                    props.templateData
                                                        .current_template
                                                        .buy_btn_settings
                                                        .btnBold === true
                                                        ? "lm_bold"
                                                        : ""
                                                } ${
                                                    props.templateData
                                                        .current_template
                                                        .buy_btn_settings
                                                        .btnItalic === true
                                                        ? "lm_italic"
                                                        : ""
                                                } ${
                                                    props.templateData
                                                        .current_template
                                                        .buy_btn_settings
                                                        .btnUnderline === true
                                                        ? "lm_underline"
                                                        : "no-line"
                                                }`}
                                                onMouseEnter={handleCountEnter}
                                                onMouseLeave={handleCountLeave}
                                            >
                                                {
                                                    props.templateData
                                                        .current_template
                                                        .editText
                                                }
                                            </button>
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
}
