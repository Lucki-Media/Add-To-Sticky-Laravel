import React, { Component, useState, useEffect } from "react";
import Button from "react-button-component";
import Select from "react-select";
import proimage from "../assets/productimage.png";
import { QuantityPicker } from "react-qty-picker";
import style from "../css/CartTemplate2.module.css";

export default function CartTemplate2(props) {
    const [enable, setEnable] = useState(props.enable); // FOR MAIN DISPLAY
    const [posValue, setPosValue] = useState(props.posValue);
    const [checkMobile, setCheckMobile] = useState(props.checkMobile);
    const [checkDesktop, setCheckDesktop] = useState(props.checkDesktop);
    const [bold, setBold] = useState(props.bold);
    const [italic, setItalic] = useState(props.italic);
    const [underline, setUnderLine] = useState(props.underline);
    const [boldButton, setBoldButton] = useState(props.boldButton);
    const [italicButton, setItalicButton] = useState(props.italicButton);
    const [underlineButton, setUnderLineButton] = useState(
        props.underlineButton
    );
    const [fontFamily, setFontFamily] = useState(props.fontFamily);
    const [titleColor, setTitleColor] = useState(props.titleColor);
    const [priceColor, setpriceColor] = useState(props.priceColor);
    const [bgColor, setbgColor] = useState(props.bgColor);
    const [btnTextColor, setbtnTextColor] = useState(props.btnTextColor);
    const [btnBGColor, setbtnBGColor] = useState(props.btnBGColor);
    const [texthoverColor, settexthoverColor] = useState(props.texthoverColor);
    const [bgHoverColor, setbgHoverColor] = useState(props.bgHoverColor);
    const [borderColor, setborderColor] = useState(props.borderColor);
    const [radiusColor, setradiusColor] = useState(props.radiusColor);
    const [fontSizeValue, setFontSizeValue] = useState(props.fontSizeValue);
    const [rangeValue, setRangeValue] = useState(props.rangeValue);
    const [heightValue, setHeightValue] = useState(props.heightValue);
    const [buttonheightValue, setButtonHeightValue] = useState(
        props.buttonheightValue
    );
    const [widthValue, setWidthValue] = useState(props.widthValue);
    const [borderValue, setBorder] = useState(props.borderValue);
    const [radiusValue, setRadius] = useState(props.radiusValue);
    const [offsetValue, setOffsetValue] = useState(props.offsetValue);
    const [btnHover, setbtnHover] = useState(false);

    const [selected, setSelected] = useState(props.selected); // Action
    const [conditionValue, setConditionValue] = useState(props.conditionValue); // Display Condition
    const [editText, setEditText] = useState(props.editText);
    const [soldOut, setSoldOut] = useState(props.soldOut);
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
    // console.log(bg_option);
    //  `${posValue === "Top" ? offsetValue : 'inherit'}`,
    // const img_size = {
    //   height: heightValue,
    // };
    // const font_option = {
    //   color: titleColor,
    //   fontSize: rangeValue,
    // };
    // const label_color = {
    //   color: titleColor,
    // };
    // const p_color = {
    //   color: priceColor,
    // };

    // const lm_btn = {
    //   width: widthValue,
    //   height: buttonheightValue,
    //   fontSize: FontSizeValue,
    //   background: btnHover ? bgHoverColor : btnBGColor,
    //   borderWidth: borderValue,
    //   borderColor: btnHover ? radiusColor : borderColor,
    //   borderRadius: radiusValue,
    //   color: btnHover ? texthoverColor : btnTextColor,
    // };

    // BUTTON HOVER
    const handleCountEnter = () => {
        setbtnHover(true);
    };

    const handleCountLeave = () => {
        setbtnHover(false);
    };
    //BUTTON END

    useEffect(() => {
        setEnable(props.enable);
        setCheckDesktop(props.checkDesktop);
        setCheckMobile(props.checkMobile);
        setFontFamily(props.fontFamily);
        // setRangeValue(
        //     gsFontSize
        //         ? gsFontSize
        //         : props.font_size
        // );
        setRangeValue(props.rangeValue);
        setBold(props.bold);
        setItalic(props.italic);
        setUnderLine(props.underline);
        setTitleColor(props.titleColor);
        setHeightValue(props.heightValue);
        setpriceColor(props.priceColor);
        setbgColor(props.bgColor);
        setPosValue(props.posValue);
        setOffsetValue(props.offsetValue);
        setEditText(props.editText);
        setSoldOut(props.soldOut);
        setUnavailable(props.unavailable);
        setButtonHeightValue(props.buttonheightValue);
        setWidthValue(props.widthValue);
        setFontSizeValue(props.fontSizeValue);
        setBoldButton(props.boldButton);
        setItalicButton(props.italicButton);
        setUnderLineButton(props.underlineButton);
        setbtnTextColor(props.btnTextColor);
        setbtnBGColor(props.btnBGColor);
        settexthoverColor(props.texthoverColor);
        setbgHoverColor(props.bgHoverColor);
        setBorder(props.borderValue);
        setRadius(props.radiusValue);
        setborderColor(props.borderColor);
        setradiusColor(props.radiusColor);
    });
    return (
        <>
            <style>
                {`
        .lm_quantity_picker .quantity-picker .quantity-display{
        padding: 0;
        background-color: #fff;
        width: 28px !important;
        font-size: 14px;
        color: #ccc;
        }
        .lm_quantity_picker .quantity-modifier{
        height: 28px;
        width: 28px;
        border: none;
        font-size: 16px;
        color: #ccc;
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
        background: ${bgColor};
        height: ${heightValue}px;
        bottom:  ${offsetValue}px;
      }
      .lm-sticky-Top{
        box-shadow: 0 0px 20px 0px rgba(165, 165, 165, 0.65);
        background: ${bgColor};
        height: ${heightValue}px;
        top:  ${offsetValue}px;
      }
    .img_size {
        height: ${heightValue}px;
      }
      .font_option {
        color: ${titleColor};
        font-size: ${rangeValue}px;
      }
      .label_color{
        color: ${titleColor};
      }
      .p_color{
        color: ${priceColor};
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
        min-height: 25px;

      }
      .css-1jqq78o-placeholder{
        font-size:12px;
      }
      .css-1xc3v61-indicatorContainer{
        padding: 0 8px;
      }
      .slide_right {
        width: ${widthValue}px;
        height: ${buttonheightValue}px;
        font-size: ${fontSizeValue}px;
        background: ${btnBGColor};
        border-Width: ${borderValue}px;
        border-color: ${borderColor};
        border-radius: ${radiusValue}px;
        color: ${btnTextColor};
        padding: 0 20px;
        display: inline-block;
        cursor: pointer;
        box-shadow: inset 0 0 0 0 ${bgHoverColor};
        -webkit-transition: ease-out 0.4s;
        -moz-transition: ease-out 0.4s;
        transition: ease-out 0.4s;
      }

      .slide_right:hover {
        box-shadow: inset 400px 0 0 0 ${bgHoverColor};
        border-color: ${radiusColor};
        color: ${texthoverColor};
      }
      `}
            </style>
            {enable === true ? (
                <div
                    className={`lm-sticky-${posValue} ${style.lm_sticky_cart} ${
                        checkDesktop === true ? "show" : "hide"
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
                                        } ${bold === true ? "lm_bold" : ""} ${
                                            italic === true ? "lm_italic" : ""
                                        } ${
                                            underline === true
                                                ? "lm_underline"
                                                : "no-line"
                                        }`}
                                    >
                                        50 Pocket Jean - 30 / Indigo
                                    </h5>
                                    <div className="p_color">
                                        <span
                                            className={style.compare_lm_price}
                                        >
                                            $50.00
                                        </span>{" "}
                                        <span className={style.simple_price}>
                                            $4
                                        </span>{" "}
                                        <span className={style.lm_sale}>
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
                                            <Select
                                                className="pro_select_menu"
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
                                                placeholder="Color.."
                                                className="pro_select_menu"
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
                                                placeholder="Material.."
                                                className="pro_select_menu"
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
                                            className={`lm_btn slide_right ${
                                                boldButton === true
                                                    ? "lm_bold"
                                                    : ""
                                            } ${
                                                italicButton === true
                                                    ? "lm_italic"
                                                    : ""
                                            } ${
                                                underlineButton === true
                                                    ? "lm_underline"
                                                    : "no-line"
                                            }`}
                                            onMouseEnter={handleCountEnter}
                                            onMouseLeave={handleCountLeave}
                                        >
                                            {props.editText}
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
        </>
    );
}
