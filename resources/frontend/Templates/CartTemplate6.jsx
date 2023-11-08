import React, { useState, useEffect } from "react";
import Select from "react-select";
import proimage from "../assets/productimage.png";
import { QuantityPicker } from "react-qty-picker";
import style from "../css/CartTemplate6.module.css";

export default function CartTemplate6(props) {
    const [isVibrating, setIsVibrating] = useState(false);
    const [enable, setEnable] = useState(props.enable); // FOR MAIN DISPLAY
    const [position, setPosition] = useState(props.position);
    const [checkMobile, setCheckMobile] = useState(props.checkMobile);
    const [checkDesktop, setCheckDesktop] = useState(props.checkDesktop);
    const [gsBold, setGsBold] = useState(props.gsBold);
    const [gsItalic, setGsItalic] = useState(props.gsItalic);
    const [gsUnderline, setGsUnderLine] = useState(props.gsUnderline);
    const [btnBold, setBtnBold] = useState(props.btnBold);
    const [btnItalic, setBtnItalic] = useState(props.btnItalic);
    const [btnUnderline, setBtnUnderline] = useState(props.btnUnderline);
    const [gsFontFamily, setGsFontFamily] = useState(props.gsFontFamily);
    const [gsTitleColor, setGsTitleColor] = useState(props.gsTitleColor);
    const [gsPriceColor, setGsPriceColor] = useState(props.gsPriceColor);
    const [gsBgColor, setGsBgColor] = useState(props.gsBgColor);
    const [btnTextColor, setBtnTextColor] = useState(props.btnTextColor);
    const [btnBgColor, setBtnBgColor] = useState(props.btnBgColor);
    const [btnTexthoverColor, setBtnTexthoverColor] = useState(
        props.btnTexthoverColor
    );
    const [btnBgHoverColor, setBtnBgHoverColor] = useState(
        props.btnBgHoverColor
    );
    const [btnBorderColor, setBtnBorderColor] = useState(props.btnBorderColor);
    const [btnBorderHoverColor, setBtnBorderHoverColor] = useState(
        props.btnBorderHoverColor
    );
    const [btnFontsize, setBtnFontsize] = useState(props.btnFontsize);
    const [gsFontsize, setGsFontsize] = useState(props.gsFontsize);
    const [gsPriceFontsize, setGsPriceFontsize] = useState(
        props.gsPriceFontsize
    );
    const [containerHeight, setContainerHeight] = useState(
        props.containerHeight
    );
    const [btnheightValue, setBtnHeightValue] = useState(props.btnheightValue);
    const [btnWidthValue, setBtnWidthValue] = useState(props.btnWidthValue);
    const [btnBorderThickness, setBtnBorderThickness] = useState(
        props.btnBorderThickness
    );
    const [btnBorderRadius, setBtnBorderRadius] = useState(
        props.btnBorderRadius
    );
    const [gsOffsetValue, setGsOffsetValue] = useState(props.gsOffsetValue);
    const [editText, setEditText] = useState(props.editText);
    // const [soldOut, setSoldOut] = useState(props.soldOut);
    const [unavailable, setUnavailable] = useState(props.unavailable);

    const options = [
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

    useEffect(() => {
        setEnable(props.enable);
        setCheckDesktop(props.checkDesktop);
        setCheckMobile(props.checkMobile);
        setGsFontFamily(props.gsFontFamily);
        setGsFontsize(props.gsFontsize);
        setGsPriceFontsize(props.gsPriceFontsize);
        setGsBold(props.gsBold);
        setGsItalic(props.gsItalic);
        setGsUnderLine(props.gsUnderline);
        setGsTitleColor(props.gsTitleColor);
        setContainerHeight(props.containerHeight);
        setGsPriceColor(props.gsPriceColor);
        setGsBgColor(props.gsBgColor);
        setPosition(props.position);
        setGsOffsetValue(props.gsOffsetValue);
        setEditText(props.editText);
        // setSoldOut(props.soldOut);
        setUnavailable(props.unavailable);
        setBtnHeightValue(props.btnheightValue);
        setBtnWidthValue(props.btnWidthValue);
        setBtnFontsize(props.btnFontsize);
        setBtnBold(props.btnBold);
        setBtnItalic(props.btnItalic);
        setBtnUnderline(props.btnUnderline);
        setBtnTextColor(props.btnTextColor);
        setBtnBgColor(props.btnBgColor);
        setBtnTexthoverColor(props.btnTexthoverColor);
        setBtnBgHoverColor(props.btnBgHoverColor);
        setBtnBorderThickness(props.btnBorderThickness);
        setBtnBorderRadius(props.btnBorderRadius);
        setBtnBorderColor(props.btnBorderColor);
        setBtnBorderHoverColor(props.btnBorderHoverColor);

        const interval = setInterval(() => {
            setIsVibrating(true);
            setTimeout(() => setIsVibrating(false), 2000); // Duration of the vibrate animation (0.2s)

            // Clear the interval after 5 seconds (5000 milliseconds)
            setTimeout(() => clearInterval(interval), 5000);
        }, 5000); // Trigger every 5 seconds (5000 milliseconds)

        // Cleanup the interval on component unmount
        return () => clearInterval(interval);
    });
    const customStyles = {
        indicatorSeparator: (provided) => ({
            ...provided,
            display: "none", // Hide the separator
        }),
    };
    return (
        <>
            <style>
                {`
                    @keyframes vibrate {
                        0% {
                            transform: translateX(0);
                        }
                        25% {
                            transform: translateX(-5px) rotate(-1deg);
                        }
                        50% {
                            transform: translateX(5px) rotate(1deg);
                        }
                        75% {
                            transform: translateX(-5px) rotate(-1deg);
                        }
                        100% {
                            transform: translateX(5px) rotate(1deg);
                        }
                    }

                    .lm_vibrating {
                        animation: vibrate .2s ease infinite;
                    }
                        .lm_quantity_picker .quantity-picker .quantity-display{
                        padding: 0;
                        background-color: #fff;
                        width: 28px !important;
                        font-size: 14px;
                        color: #333;
                        }
                        .lm_quantity_picker .quantity-modifier{
                        height: ${containerHeight}px;
                        width: 28px;
                        border: none;
                        font-size: 16px;
                        color: #333;
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
                    .css-7pg0cj-a11yText { display: none  !important; }
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
                        display: inline-flex;
                        align-items:center;
                        font-size: ${gsPriceFontsize}px;
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

                    }
                    .css-1jqq78o-placeholder{
                        font-size:12px;
                        color: #000;
                    }
                    .css-1xc3v61-indicatorContainer{
                        padding: 0 8px;
                    }
                    .css-lkh0o5-menu{
                        margin: 0 auto;
                    }
                    .css-8h3gbh-menu{
                    margin: 0 auto;
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
                    .css-1f43avz-a11yText-A11yText{
                        display: none;
                    }
                    .p_color span{
                        margin-right: 20px;
                    }
                    .css-tj5bde-Svg{
                        fill: #333;
                    }
                    @media screen and (max-width: 1100px) {
                        // .p_color span{
                        // // margin-right:10px;
                        // }
                    }
                    @media screen and (max-width: 767px) {
                        .p_color{
                        margin-bottom : 10px !important;
                        }
                    }
                `}
            </style>
            {enable === true ? (
                <div
                    className={`lm-sticky-${position} ${style.lm_sticky_cart} ${
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
                                    src={proimage}
                                    alt="product image"
                                />
                                <div className={style.lm_middlecontent}>
                                    <h5
                                        className={`font_option apply-font ${
                                            style.pro_names
                                        } ${gsBold === true ? "lm_bold" : ""} ${
                                            gsItalic === true ? "lm_italic" : ""
                                        } ${
                                            gsUnderline === true
                                                ? "lm_underline"
                                                : "no-line"
                                        }`}
                                    >
                                        50 Pocket Jean - 30 / Indigo
                                    </h5>
                                </div>
                            </div>
                            <div className={style.lmblock_right}>
                                <div className="p_color">
                                    <span className={style.compare_lm_price}>
                                        $50.00
                                    </span>{" "}
                                    <span className={style.simple_price}>
                                        $4
                                    </span>{" "}
                                    <span className={style.lm_out_stock}>
                                        {unavailable}
                                    </span>
                                </div>
                                <div className={style.var_options}>
                                    <div
                                        className={`lm_options ${style.lm_options}`}
                                    >
                                        <div
                                            className={`productInputs ${style.productInputs}`}
                                        >
                                            <Select
                                                styles={customStyles}
                                                menuPlacement={
                                                    position === "Bottom"
                                                        ? "top"
                                                        : "bottom"
                                                }
                                                isSearchable={false}
                                                className={`pro_select_menu apply-font ${style.pro_names}`}
                                                placeholder="Size.."
                                                options={options}
                                                theme={(theme) => ({
                                                    ...theme,
                                                    borderRadius: 0,
                                                    colors: {
                                                        ...theme.colors,
                                                        primary25: "grey",
                                                        primary: "black",
                                                    },
                                                })}
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className={`lm_options ${style.lm_options}`}
                                    >
                                        <div className={style.productInputs}>
                                            <Select
                                                styles={customStyles}
                                                isSearchable={false}
                                                menuPlacement={
                                                    position === "Bottom"
                                                        ? "top"
                                                        : "bottom"
                                                }
                                                placeholder="Color.."
                                                className={`pro_select_menu apply-font ${style.pro_names}`}
                                                options={options2}
                                                theme={(theme) => ({
                                                    ...theme,
                                                    borderRadius: 0,
                                                    colors: {
                                                        ...theme.colors,
                                                        primary25: "grey",
                                                        primary: "black",
                                                    },
                                                })}
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className={`lm_options ${style.lm_options}`}
                                    >
                                        <div className={style.productInputs}>
                                            <Select
                                                styles={customStyles}
                                                menuPlacement={
                                                    position === "Bottom"
                                                        ? "top"
                                                        : "bottom"
                                                }
                                                isSearchable={false}
                                                placeholder="Material.."
                                                className={`pro_select_menu apply-font ${style.pro_names}`}
                                                options={options3}
                                                theme={(theme) => ({
                                                    ...theme,
                                                    borderRadius: 0,
                                                    colors: {
                                                        ...theme.colors,
                                                        primary25: "grey",
                                                        primary: "black",
                                                    },
                                                })}
                                            />
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
                                            }${
                                                isVibrating
                                                    ? " lm_vibrating"
                                                    : ""
                                            }`}
                                            onMouseEnter={handleCountEnter}
                                            onMouseLeave={handleCountLeave}
                                        >
                                            {editText}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                ""
            )}
        </>
    );
}
