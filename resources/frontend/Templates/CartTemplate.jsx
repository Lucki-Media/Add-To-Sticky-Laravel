import React from "react";
import Select from "react-select";
import "select2/dist/js/select2.min";
import proimage from "../assets/productimage.png";
import { QuantityPicker } from "react-qty-picker";
import style from "../css/CartTemplate1.module.css";
import Notification from "../pages/NotificationBar.jsx";

function CartTemplate1({
    enable,
    animationEnable,
    current_template,
    selectedDevice,
}) {
    const defaultNotificationMessage =
        "Great news! Here's something special for you!";

    const options = [
        { value: "L", label: "L" },
        { value: "M", label: "M" },
        { value: "XXL", label: "XXL" },
    ];

    // useEffect(() => {
    // const interval = setInterval(() => {
    //     setIsVibrating(true);
    //     // setTimeout(() => setIsVibrating(false), 2000); // Duration of the vibrate animation (0.2s)
    //     // Clear the interval after 5 seconds (5000 milliseconds)
    //     // setTimeout(() => clearInterval(interval), 5000);
    // }, 5000); // Trigger every 5 seconds (5000 milliseconds)
    // Cleanup the interval on component unmount
    // return () => clearInterval(interval);
    // });

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
                        background: ${current_template.general_settings.gsBgColor};
                        height: ${current_template.general_settings.containerHeight}px;
                        bottom:  ${current_template.general_settings.gsOffsetValue}px;
                    }
                    .lm-sticky-Top{
                        box-shadow: rgba(149, 157, 165, 0.4) 0px 8px 24px;
                        background: ${current_template.general_settings.gsBgColor};
                        height: ${current_template.general_settings.containerHeight}px;
                        top:  ${current_template.general_settings.gsOffsetValue}px;
                    }
                    .img_size {
                        height: ${current_template.general_settings.containerHeight}px;
                        margin-right:15px;
                        display: flex;
                        align-items: center;
                    }
                    .font_option {
                        color: ${current_template.general_settings.gsTitleColor};
                        font-size: ${current_template.general_settings.gsFontsize}px;
                    }
                    .label_color{
                        color: ${current_template.general_settings.gsTitleColor};
                    }
                    .lm_sticky_p_color{
                        color: ${current_template.general_settings.gsPriceColor};
                        font-size: ${current_template.general_settings.gsPriceFontsize}px;
                    }
                    .lm_btn{
                        width: ${current_template.buy_btn_settings.btnWidthValue}px;
                        height: ${current_template.buy_btn_settings.btnheightValue}px;
                        font-size: ${current_template.buy_btn_settings.btnFontsize}px;
                        background: ${current_template.buy_btn_settings.btnBgColor};
                        border-Width: ${current_template.buy_btn_settings.btnBorderThickness}px;
                        border-color: ${current_template.buy_btn_settings.btnBorderColor};
                        border-radius: ${current_template.buy_btn_settings.btnBorderRadius}px;
                        color: ${current_template.buy_btn_settings.btnTextColor};
                    }
                    .lm_btn:hover{
                        border-color: ${current_template.buy_btn_settings.btnBorderHoverColor};
                        background: ${current_template.buy_btn_settings.btnBgHoverColor};
                        color: ${current_template.buy_btn_settings.btnTexthoverColor};
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
            {enable === true && (
                <div
                    className={`lm-sticky-${
                        current_template.general_settings.position
                    } ${style.lm_sticky_cart} ${
                        current_template.general_settings.checkDesktop === true
                            ? "lm_sticky_show_desktop_abc12"
                            : "lm_sticky_hide_desktop_abc12"
                    } ${
                        current_template.general_settings.checkMobile === true
                            ? "lm_sticky_show_mobile_abc12"
                            : "lm_sticky_hide_mobile_abc12"
                    }  `}
                    style={{ position: "absolute" }}
                >
                    {current_template.general_settings.gsAction === "3" &&
                        current_template.general_settings.position ===
                            "Bottom" && (
                            <Notification
                                gsNotificationBarText={
                                    current_template.general_settings
                                        .gsNotificationBarText ||
                                    defaultNotificationMessage
                                }
                                gsNotificationBarItalic={
                                    current_template.general_settings
                                        .gsNotificationBarItalic
                                }
                                gsNotificationBarBold={
                                    current_template.general_settings
                                        .gsNotificationBarBold
                                }
                                gsNotificationBarTextColor={
                                    current_template.general_settings
                                        .gsNotificationBarTextColor
                                }
                                gsNotificationBarBgColor={
                                    current_template.general_settings
                                        .gsNotificationBarBgColor
                                }
                                gsNotificationBarFontSize={
                                    current_template.general_settings
                                        .gsNotificationBarFontSize
                                }
                                gsNotificationBarHeight={
                                    current_template.general_settings
                                        .gsNotificationBarHeight
                                }
                            />
                        )}

                    {selectedDevice === 1 &&
                    current_template.general_settings.showOnlyBtnOnMobile ===
                        true ? (
                        // show only mobile button
                        <div className={style.lm_container}>
                            <div className={style.lm_buy_btn}>
                                <button
                                    className={`lm_btn apply-font ${
                                        current_template.buy_btn_settings
                                            .btnBold === true
                                            ? "lm_bold"
                                            : ""
                                    } ${
                                        current_template.buy_btn_settings
                                            .btnItalic === true
                                            ? "lm_italic"
                                            : ""
                                    } ${
                                        current_template.buy_btn_settings
                                            .btnUnderline === true
                                            ? "lm_underline"
                                            : "no-line"
                                    }${
                                        animationEnable === true
                                            ? " lm_vibrating"
                                            : ""
                                    }`}
                                >
                                    {current_template.buy_btn_settings.editText}
                                </button>
                            </div>
                        </div>
                    ) : (
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
                                            } ${
                                                current_template
                                                    .general_settings.gsBold ===
                                                true
                                                    ? "lm_bold"
                                                    : ""
                                            } ${
                                                current_template
                                                    .general_settings
                                                    .gsItalic === true
                                                    ? "lm_italic"
                                                    : ""
                                            } ${
                                                current_template
                                                    .general_settings
                                                    .gsUnderline === true
                                                    ? "lm_underline"
                                                    : "no-line"
                                            }`}
                                        >
                                            Juice Bottle Mockup (Red)
                                        </h2>
                                        <div className="lm_sticky_p_color">
                                            <span
                                                className={
                                                    style.compare_lm_price
                                                }
                                            >
                                                ${parseFloat(50).toFixed(2)}
                                            </span>{" "}
                                            <span
                                                className={style.simple_price}
                                            >
                                                ${parseFloat(40).toFixed(2)}
                                            </span>{" "}
                                            <span
                                                className={style.lm_out_stock}
                                            >
                                                {
                                                    current_template
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
                                                <label
                                                    className={`label_color apply-font ${style.pro_names}`}
                                                >
                                                    Size
                                                </label>
                                                <Select
                                                    isSearchable={false}
                                                    menuPlacement={
                                                        current_template
                                                            .general_settings
                                                            .position ===
                                                        "Bottom"
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
                                                    current_template
                                                        .buy_btn_settings
                                                        .btnBold === true
                                                        ? "lm_bold"
                                                        : ""
                                                } ${
                                                    current_template
                                                        .buy_btn_settings
                                                        .btnItalic === true
                                                        ? "lm_italic"
                                                        : ""
                                                } ${
                                                    current_template
                                                        .buy_btn_settings
                                                        .btnUnderline === true
                                                        ? "lm_underline"
                                                        : "no-line"
                                                }${
                                                    animationEnable === true
                                                        ? " lm_vibrating"
                                                        : ""
                                                }`}
                                            >
                                                {
                                                    current_template
                                                        .buy_btn_settings
                                                        .editText
                                                }
                                            </button>
                                            {/* </CustomizedButton> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {current_template.general_settings.gsAction === "3" &&
                        current_template.general_settings.position ===
                            "Top" && (
                            <Notification
                                gsNotificationBarText={
                                    current_template.general_settings
                                        .gsNotificationBarText ||
                                    defaultNotificationMessage
                                }
                                gsNotificationBarItalic={
                                    current_template.general_settings
                                        .gsNotificationBarItalic
                                }
                                gsNotificationBarBold={
                                    current_template.general_settings
                                        .gsNotificationBarBold
                                }
                                gsNotificationBarTextColor={
                                    current_template.general_settings
                                        .gsNotificationBarTextColor
                                }
                                gsNotificationBarBgColor={
                                    current_template.general_settings
                                        .gsNotificationBarBgColor
                                }
                                gsNotificationBarFontSize={
                                    current_template.general_settings
                                        .gsNotificationBarFontSize
                                }
                                gsNotificationBarHeight={
                                    current_template.general_settings
                                        .gsNotificationBarHeight
                                }
                            />
                        )}
                </div>
            )}
        </>
    );
}

export default CartTemplate1;
