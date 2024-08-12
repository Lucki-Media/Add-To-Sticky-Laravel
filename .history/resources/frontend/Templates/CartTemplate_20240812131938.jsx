import React, { Component, useState, useEffect } from "react";
import Button from "react-button-component";
import Select from "react-select";
import "select2/dist/js/select2.min";
import proimage from "../assets/productimage.png";
import { QuantityPicker } from "react-qty-picker";
import style from "../css/CartTemplate1.module.css";
import Notification from "../pages/NotificationBar.jsx";

function CartTemplate1(props) {
    const [enable, setEnable] = useState(props.enable); // FOR MAIN DISPLAY
    const [animationEnable, setAnimationEnable] = useState(
        props.animationEnable
    ); // FOR BUTTON ANIMATION
    const [position, setPosition] = useState(props.position);
    const [checkMobile, setCheckMobile] = useState(props.checkMobile);
    const [checkDesktop, setCheckDesktop] = useState(props.checkDesktop);
    const [gsBold, setGsBold] = useState(props.gsBold);
    const [gsItalic, setGsItalic] = useState(props.gsItalic);
    const [gsUnderline, setGsUnderLine] = useState(props.gsUnderline);
    const [gsFontFamily, setGsFontFamily] = useState(props.gsFontFamily);
    const [gsTitleColor, setGsTitleColor] = useState(props.gsTitleColor);
    const [gsPriceColor, setGsPriceColor] = useState(props.gsPriceColor);
    const [gsBgColor, setGsBgColor] = useState(props.gsBgColor);
    const [btnBold, setBtnBold] = useState(props.btnBold);
    const [btnItalic, setBtnItalic] = useState(props.btnItalic);
    const [btnUnderline, setBtnUnderline] = useState(props.btnUnderline);
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
    const [gsAction, setGsAction] = useState(props.gsAction);

    const defaultNotificationMessage =
        "Great news! Here's something special for you!";

    const [gsNotificationBarText, setGsNotificationBarText] = useState(
        props.gsNotificationBarText
    );
    const [gsNotificationBarItalic, setGsNotificationBarItalic] = useState(
        props.gsNotificationBarItalic
    );

    const [gsNotificationBarBold, setGsNotificationBarBold] = useState(
        props.gsNotificationBarBold
    );

    const [gsNotificationBarTextColor, setGsNotificationBarTextColor] =
        useState(props.gsNotificationBarTextColor);

    const [gsNotificationBarBgColor, setGsNotificationBarBgColor] = useState(
        props.gsNotificationBarBgColor
    );

    const [gsNotificationBarFontSize, setGsNotificationBarFontSize] = useState(
        props.gsNotificationBarFontSize
    );

    const [gsNotificationBarHeight, setGsNotificationBarHeight] = useState(
        props.gsNotificationBarHeight
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
        setAnimationEnable(props.animationEnable);
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
        setGsAction(props.gsAction);
        setGsNotificationBarText(props.gsNotificationBarText);
        setGsNotificationBarItalic(props.gsNotificationBarItalic);
        setGsNotificationBarBold(props.gsNotificationBarBold);
        setGsNotificationBarTextColor(props.gsNotificationBarTextColor);
        setGsNotificationBarBgColor(props.gsNotificationBarBgColor);

        // const interval = setInterval(() => {
        //     setIsVibrating(true);
        //     // setTimeout(() => setIsVibrating(false), 2000); // Duration of the vibrate animation (0.2s)

        //     // Clear the interval after 5 seconds (5000 milliseconds)
        //     // setTimeout(() => clearInterval(interval), 5000);
        // }, 5000); // Trigger every 5 seconds (5000 milliseconds)

        // Cleanup the interval on component unmount
        // return () => clearInterval(interval);
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
                   @keyframes shake-animation {
                        0% { transform:translate(0,0) }
                        1.78571% { transform:translate(10px,0) }
                        3.57143% { transform:translate(0,0) }
                        5.35714% { transform:translate(10px,0) }
                        7.14286% { transform:translate(0,0) }
                        8.92857% { transform:translate(10px,0) }
                        10.71429% { transform:translate(0,0) }
                        100% { transform:translate(0,0) }
                    }

                    .lm_vibrating {
                        animation: shake-animation 4.72s ease infinite;
                    }
                    .lm_quantity_picker .quantity-picker .quantity-display{
                        padding: 0;
                        background-color: #fff;
                        width: 28px !important;
                        font-size: 14px;
                    }
                    .lm_quantity_picker .quantity-modifier{
                        height: 35px;
                        width: 30px;
                        border: none;
                        font-size: 16px;
                        color: black;
                        background-color: #fff;
                        border-radius: 0;
                    }
                    .lm_quantity_picker .quantity-picker{
                        background-color: #fff;
                        border: 1px solid #dddddd8c;
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
                    box-shadow: rgba(149, 157, 165, 0.4) 0 -8px 24px;
                    background: ${gsBgColor};
                    height: ${containerHeight}px;
                    bottom:  ${gsOffsetValue}px;
                }
                .lm-sticky-Top{
                    box-shadow: rgba(149, 157, 165, 0.4) 0px 8px 24px;
                    background: ${gsBgColor};
                    height: ${containerHeight}px;
                    top:  ${gsOffsetValue}px;
                }
                .img_size {
                    height: ${containerHeight}px;
                    margin-right:15px;
                    display: flex;
    align-items: center;
                }
                .font_option {
                    color: ${gsTitleColor};
                    font-size: ${gsFontsize}px;
                }
                .label_color{
                    color: ${gsTitleColor};
                }
                .lm_sticky_p_color{
                    color: ${gsPriceColor};
                    font-size: ${gsPriceFontsize}px;
                }
                .lm_btn{
                    width: ${btnWidthValue}px;
                    height: ${btnheightValue}px;
                    font-size: ${btnFontsize}px;
                    background: ${btnBgColor};
                    border-Width: ${btnBorderThickness}px;
                    border-color: ${btnBorderColor};
                    border-radius: ${btnBorderRadius}px;
                    color: ${btnTextColor};
                }
                .lm_btn:hover{
                    border-color: ${btnBorderHoverColor};
                    background: ${btnBgHoverColor};
                    color: ${btnTexthoverColor};
                }
                .lm_options {
                    position: relative;
                }
                .lm_options .pro_select_menu{
                    display: inline-block;
                    width: 100px;
                }
                .lm_options .pro_select_menu > div{
                    border: 1px solid #dddddd8c;
                    font-size: 12px;
                    min-height: 36px;
                    box-shadow: none;

                }
                .css-1jqq78o-placeholder{
                    font-size:12px;
                }
                .css-lkh0o5-menu{
                    margin: 0 auto;
                }
                .css-8h3gbh-menu{
                    margin: 0 auto;
                }
                .css-1xc3v61-indicatorContainer{
                    padding: 0 8px;
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
                    style={{ position: "absolute" }}
                >
                    <div className={style.lm_container}>
                        <div className={style.lm_cart_module}>
                            <div className={style.lm_pro_image}>
                                <div
                                    className={`img_size ${style.image_border}`}
                                >
                                    <img
                                        className="img_sizes"
                                        src={proimage}
                                        alt="product image"
                                    />
                                </div>
                                <div className={style.lm_middlecontent}>
                                    <h2
                                        className={`font_option ${
                                            style.pro_names
                                        } ${gsBold === true ? "lm_bold" : ""} ${
                                            gsItalic === true ? "lm_italic" : ""
                                        } ${
                                            gsUnderline === true
                                                ? "lm_underline"
                                                : "no-line"
                                        }`}
                                    >
                                        Juice Bottle Mockup (Red)
                                    </h2>
                                    <div className="lm_sticky_p_color">
                                        <span
                                            className={style.compare_lm_price}
                                        >
                                            ${parseFloat(50).toFixed(2)}
                                        </span>{" "}
                                        <span className={style.simple_price}>
                                            ${parseFloat(4).toFixed(2)}
                                        </span>{" "}
                                        <span className={style.lm_out_stock}>
                                            {props.unavailable}
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
                                            <label
                                                className={`label_color apply-font ${style.pro_names}`}
                                            >
                                                Size
                                            </label>
                                            <Select
                                                isSearchable={false}
                                                menuPlacement={
                                                    position === "Bottom"
                                                        ? "top"
                                                        : "bottom"
                                                }
                                                className={`pro_select_menu apply-font ${style.pro_names}`}
                                                // className="pro_select_menu apply-font"
                                                styles={customStyles}
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
                                    {/* <div
                                        className={`lm_options ${style.lm_options}`}
                                    >
                                        <div className={style.productInputs}>
                                            <label
                                                className={`label_color apply-font ${style.pro_names}`}
                                            >
                                                Color
                                            </label>
                                            <Select
                                                menuPlacement={
                                                    position === "Bottom"
                                                        ? "top"
                                                        : "bottom"
                                                }
                                                isSearchable={false}
                                                className={`pro_select_menu apply-font ${style.pro_names}`}
                                                styles={customStyles}
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
                                    </div> */}
                                    {/* <div
                                        className={`lm_options ${style.lm_options}`}
                                    >
                                        <div className={style.productInputs}>
                                            <label
                                                className={`label_color apply-font ${style.pro_names}`}
                                            >
                                                Material
                                            </label>
                                            <Select
                                                menuPlacement={
                                                    position === "Bottom"
                                                        ? "top"
                                                        : "bottom"
                                                }
                                                isSearchable={false}
                                                className={`pro_select_menu apply-font ${style.pro_names}`}
                                                styles={customStyles}
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
                                    </div> */}
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
                                            className={`lm_btn apply-font ${
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
                                                animationEnable === true
                                                    ? " lm_vibrating"
                                                    : ""
                                            }`}
                                            onMouseEnter={handleCountEnter}
                                            onMouseLeave={handleCountLeave}
                                        >
                                            {editText}
                                        </button>
                                        {/* </CustomizedButton> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {gsAction === "3" && (
                        <Notification
                            gsNotificationBarText={
                                gsNotificationBarText ||
                                defaultNotificationMessage
                            }
                            gsNotificationBarItalic={gsNotificationBarItalic}
                            gsNotificationBarBold={gsNotificationBarBold}
                            gsNotificationBarTextColor={
                                gsNotificationBarTextColor
                            }
                            gsNotificationBarBgColor={gsNotificationBarBgColor}
                        />
                    )}
                </div>
            ) : (
                ""
            )}
        </>
    );
}

export default CartTemplate1;
