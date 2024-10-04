import React, { useState } from "react";
import Select from "react-select";
import proimage from "../assets/productimage.png";
import { QuantityPicker } from "react-qty-picker";
import style from "../css/CartTemplate4.module.css";
import Notification from "../components/NotificationBar/NotificationBar";

export default function CartTemplate4({
    enable,
    animationEnable,
    current_template,
    selectedDevice,
}) {
    const [btnBgHoverColor, setBtnBgHoverColor] = useState(true);

    const defaultNotificationMessage = "Yayy! Product Added to Cart!";

    const options = [
        { value: "L", label: "L" },
        { value: "M", label: "M" },
        { value: "XXL", label: "XXL" },
    ];

    // BUTTON HOVER
    const handleCountEnter = () => {
        setBtnBgHoverColor(true);
    };

    const handleCountLeave = () => {
        setBtnBgHoverColor(false);
    };
    //BUTTON END

    // useEffect(() => {
    // const interval = setInterval(() => {
    //     setIsVibrating(true);
    //     setTimeout(() => setIsVibrating(false), 2000); // Duration of the vibrate animation (0.2s)

    //     // Clear the interval after 5 seconds (5000 milliseconds)
    //     setTimeout(() => clearInterval(interval), 5000);
    // }, 5000); // Trigger every 5 seconds (5000 milliseconds)

    // // Cleanup the interval on component unmount
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
                    .lm_quantity_picker_template_4 .quantity-picker .quantity-display{
                        padding: 0;
                        background-color: #111;
                        width: 28px !important;
                        font-size: 14px;
                        color: #fff;
                    }
                    .lm_quantity_picker_template_4 .quantity-modifier{
                        height: ${current_template.general_settings.containerHeight}px;
                        width: 28px;
                        border: none;
                        font-size: 16px;
                        color: #fff;
                        background-color: #111;
                        border-radius: 0;
                    }
                    .lm_quantity_picker_template_4 .quantity-picker{
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
                        display: inline-flex;
                        align-items:center;
                        font-size: ${current_template.general_settings.gsPriceFontsize}px;
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
                        min-height: ${current_template.general_settings.containerHeight}px;
                        box-shadow: none !important;
                        background-color: #252525;
                        color: #fff;
                    }
                    .css-1jqq78o-placeholder{
                        font-size:12px;
                        color: #fff;
                    }
                    .css-lkh0o5-menu{
                        margin: 0 auto;
                    }
                    .css-8h3gbh-menu{
                        margin: 0 auto;
                    }
                    .pro_select_menu svg{
                        fill: #fff;
                    }
                    .css-qbdosj-Input{
                        color: #fff;
                    }
                    .css-1dimb5e-singleValue{
                        color: #fff;
                    }
                    .css-1xc3v61-indicatorContainer{
                        padding: 0 8px;
                    }
                    .slide_right {
                        width: ${current_template.buy_btn_settings.btnWidthValue}px;
                        height: ${current_template.buy_btn_settings.btnheightValue}px;
                        font-size: ${current_template.buy_btn_settings.btnFontsize}px;
                        background: ${current_template.buy_btn_settings.btnBgColor};
                        border-Width: ${current_template.buy_btn_settings.btnBorderThickness}px;
                        border-color: ${current_template.buy_btn_settings.btnBorderColor};
                        border-radius: ${current_template.buy_btn_settings.btnBorderRadius}px;
                        color: ${current_template.buy_btn_settings.btnTextColor};
                        padding: 0 20px;
                        display: inline-block;
                        cursor: pointer;
                        box-shadow: inset 0 0 0 0 ${btnBgHoverColor};
                        -webkit-transition: ease-out 0.4s;
                        -moz-transition: ease-out 0.4s;
                        transition: ease-out 0.4s;
                    }

                    .slide_right:hover {
                        box-shadow: inset 400px 0 0 0 ${current_template.buy_btn_settings.btnBgHoverColor};
                        border-color: ${current_template.buy_btn_settings.btnBorderHoverColor};
                        color: ${current_template.buy_btn_settings.btnTexthoverColor};
                    }

                    @media screen and (max-width: 991px) {
                        .lm_options .pro_select_menu > div {
                            min-height: 40px;        
                        }
                        .lm_quantity_picker_template_4 .quantity-modifier ,.slide_right{
                            height: 40px;        
                        }
                    }

                     .lm-sticky-pos-Bottom.lm_mobile_bottom #notification_bar{
                       bottom: 106px;
                    }
                    .lm-sticky-Bottom.lm_mobile_right_block {
                        padding: 10px;
                    }
                    .lm-sticky-Top.lm_mobile_right_block .lm_container{
                    padding-bottom: 10px;
                       padding-top: 10px;
                    }                          
                    .lm-sticky-Bottom.lm_mobile_right_block .lm_container{
                    padding: 0;
                    }
                    .lm_options .pro_select_menu > div{
                        min-height: 35px;
                    }
                    .lm-sticky-pos-Bottom.lm_show_buy_btn #notification_bar{
                        bottom: 60px;
                    }
                `}
            </style>
            {enable === true && (
                <div
                    className={`lm-sticky-pos-${
                        current_template.general_settings.position
                    }  ${selectedDevice === 1 && "lm_mobile_bottom"} ${
                        current_template?.general_settings
                            ?.showOnlyBtnOnMobile === true && selectedDevice === 1 && "lm_show_buy_btn"
                    }`}
                >
                    {current_template.general_settings.gsAction === "3" &&
                        current_template.general_settings.position ===
                            "Bottom" && (
                            <Notification
                                containerHeight={
                                    current_template.general_settings
                                        .containerHeight
                                }
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

                    <div
                        className={`lm-sticky-${
                            current_template.general_settings.position
                        } ${style.lm_sticky_cart} ${
                            current_template.general_settings.checkDesktop ===
                            true
                                ? "lm_sticky_show_desktop_abc12"
                                : "lm_sticky_hide_desktop_abc12"
                        } ${
                            current_template.general_settings.checkMobile ===
                            true
                                ? "lm_sticky_show_mobile_abc12"
                                : "lm_sticky_hide_mobile_abc12"
                        }  ${
                            selectedDevice === 1 && style.lm_mobile_right_block
                        } ${
                            selectedDevice === 1 && "lm_mobile_right_block"
                        }   `}
                        style={{ position: "absolute" }}
                    >
                        {selectedDevice === 1 &&
                        current_template?.general_settings
                            ?.showOnlyBtnOnMobile === true ? (
                            // show only mobile button
                            <div
                                className={`lm_container ${style.lm_container}`}
                            >
                                <div className={style.lm_buy_btn}>
                                    <button
                                        className={`lm_btn slide_right apply-font ${
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
                                        onMouseEnter={handleCountEnter}
                                        onMouseLeave={handleCountLeave}
                                    >
                                        {
                                            current_template.buy_btn_settings
                                                .editText
                                        }
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div
                                className={`lm_container ${style.lm_container}`}
                            >
                                <div className={style.lm_cart_module}>
                                    {selectedDevice !== 1 && (
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
                                            <div
                                                className={
                                                    style.lm_middlecontent
                                                }
                                            >
                                                <h2
                                                    className={`font_option ${
                                                        style.pro_names
                                                    } ${
                                                        current_template
                                                            .general_settings
                                                            .gsBold === true
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
                                                            .gsUnderline ===
                                                        true
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
                                                        $
                                                        {parseFloat(50).toFixed(
                                                            2
                                                        )}
                                                    </span>{" "}
                                                    <span
                                                        className={
                                                            style.simple_price
                                                        }
                                                    >
                                                        $
                                                        {parseFloat(40).toFixed(
                                                            2
                                                        )}
                                                    </span>{" "}
                                                    <span
                                                        className={
                                                            style.lm_out_stock
                                                        }
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
                                    )}
                                    <div className={style.lmblock_right}>
                                        <div className={style.var_options}>
                                            <div
                                                className={`lm_options ${style.lm_options}`}
                                            >
                                                <div
                                                    className={`productInputs ${style.productInputs}`}
                                                >
                                                    <Select
                                                        menuPlacement={
                                                            current_template
                                                                .general_settings
                                                                .position ===
                                                            "Bottom"
                                                                ? "top"
                                                                : "bottom"
                                                        }
                                                        isSearchable={false}
                                                        className={`pro_select_menu apply-font ${style.pro_names}`}
                                                        styles={customStyles}
                                                        placeholder="Size.."
                                                        options={options}
                                                        theme={(theme) => ({
                                                            ...theme,
                                                            borderRadius: 0,
                                                            color: "#fff",
                                                            colors: {
                                                                ...theme.colors,
                                                                primary25:
                                                                    "#333",
                                                                primary:
                                                                    "black",
                                                            },
                                                        })}
                                                    />
                                                </div>
                                            </div>
                                            {/* <div
                                        className={`lm_options ${style.lm_options}`}
                                    >
                                        <div className={style.productInputs}>
                                            <Select
                                                menuPlacement={
                                                    position === "Bottom"
                                                        ? "top"
                                                        : "bottom"
                                                }
                                                styles={customStyles}
                                                isSearchable={false}
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
                                                isSearchable={false}
                                                menuPlacement={
                                                    position === "Bottom"
                                                        ? "top"
                                                        : "bottom"
                                                }
                                                styles={customStyles}
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
                                    </div> */}
                                        </div>
                                        <div className={style.button_block}>
                                            {selectedDevice !== 1 && (
                                                <div
                                                    className={`lm_quantity_picker_template_4 ${style.lm_quantity_selector}`}
                                                >
                                                    <QuantityPicker
                                                        className={
                                                            style.quantity12
                                                        }
                                                        min={1}
                                                        max={10}
                                                    />
                                                </div>
                                            )}
                                            <div className={style.lm_buy_btn}>
                                                {/* <CustomizedButton onClick={() => alert("Welcome!")}> */}
                                                <button
                                                    className={`lm_btn slide_right apply-font ${
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
                                                            .btnUnderline ===
                                                        true
                                                            ? "lm_underline"
                                                            : "no-line"
                                                    }${
                                                        animationEnable === true
                                                            ? " lm_vibrating"
                                                            : ""
                                                    }`}
                                                    onMouseEnter={
                                                        handleCountEnter
                                                    }
                                                    onMouseLeave={
                                                        handleCountLeave
                                                    }
                                                >
                                                    {
                                                        current_template
                                                            .buy_btn_settings
                                                            .editText
                                                    }
                                                </button>

                                                {/* <div class="button_slide slide_right">BUTTON: SLIDE RIGHT </div> */}
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
                                    containerHeight={
                                        current_template.general_settings
                                            .containerHeight
                                    }
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
                </div>
            )}
        </>
    );
}
