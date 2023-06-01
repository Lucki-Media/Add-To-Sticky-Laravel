import React, { Component, useState, useEffect } from "react";
import Button from "react-button-component";
// import proimage from "../assets/productimage.png";
import { QuantityPicker } from "react-qty-picker";
import style from "./CartTemplate3.module.css";

import DefaultSettings from "./DefaultSettings";
export default function CartTemplate3() {
  const [getGrid, setGrid] = useState("cart_template_1");
  const [getPosition, setPosition] = useState("sticky_top");
  const [getbgColor, setbgColor] = useState("#fff");

  const [enable, setEnable] = useState(true);
  const [posValue, setPosValue] = useState("Top");
  const [checkMobile, setCheckMobile] = useState(false);
  const [checkDesktop, setCheckDesktop] = useState(false);
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [underline, setUnderLine] = useState(false);
  const [boldButton, setBoldButton] = useState(false);
  const [italicButton, setItalicButton] = useState(false);
  const [underlineButton, setUnderLineButton] = useState(false);
  const [fontFamily, setFontFamily] = useState("Roboto");
  const [titleColor, setTitleColor] = useState("rgba(0, 0, 0, 1)");
  const [priceColor, setpriceColor] = useState("rgba(255, 0, 0, 1)");
  // const [bgColor, setbgColor] = useState("rgba(0, 1, 255, 1)");
  const [btnTextColor, setbtnTextColor] = useState("rgba(0, 1, 0, 1)");
  const [btnBGColor, setbtnBGColor] = useState("rgba(0, 1, 234, 1)");
  const [texthoverColor, settexthoverColor] = useState("rgba(0, 144, 1, 1)");
  const [bgHoverColor, setbgHoverColor] = useState("rgba(0, 1, 0, 1)");
  const [borderColor, setborderColor] = useState("rgba(0, 1, 143, 1)");
  const [radiusColor, setradiusColor] = useState("rgba(1, 255, 0, 1)");
  const [FontSizeValue, setFontSizeValue] = useState(20);
  const [rangeValue, setRangeValue] = useState(20);
  const [heightValue, setHeightValue] = useState(70);
  const [buttonheightValue, setButtonHeightValue] = useState(35);
  const [widthValue, setWidthValue] = useState(125);
  const [borderValue, setBorder] = useState(1);
  const [radiusValue, setRadius] = useState(15);
  const [offsetValue, setOffsetValue] = useState(0);
  const [selected, setSelected] = useState("1"); // Action
  const [conditionValue, setConditionValue] = useState("1"); // Display Condition
  const [editText, setEditText] = useState("BUY NOW");
  const [soldOut, setSoldOut] = useState("Sold out");
  const [unavailable, setUnavailable] = useState("Unavailable");

  const CustomizedButton = Button.extend`
    color: #fff;
    border: none;
    border-radius: 0;
    background: #000;
    height: auto;
    padding: 13px 40px;
    min-height: inherit;
  `;

  // styles
  const bg_option = {
    background: getbgColor,
  };

  useEffect(() => {
    setGrid(DefaultSettings[0].layout);
    setPosition(DefaultSettings[0].position);
    setbgColor(DefaultSettings[0].bg_color);
  }, []);
  return (
    <div
      className={` ${style.lm_sticky_cart} ${getGrid} ${getPosition} `}
      style={bg_option}
    >
      <style>
        {`
      .sticky_bottom{
        bottom: 0;
      }
      .sticky_top{
        bottom: 0;
      }
      .quantity-picker .quantity-display{
        padding: 0;
        background-color: #f3f3f3;
    }
    .quantity-modifier{
    height: 40px;
    width: 40px;
    border: none;
    }
    .quantity-picker{
        background-color: #f3f3f3;
        border: none;
        border-radius: 0;
    }
    
      `}
      </style>
      <div className={style.lm_container}>
        <div className={style.lm_cart_module}>
          <div className={style.lm_pro_image}>
            <img
              src="https://cdn.shopify.com/s/files/1/0581/9567/3133/products/book-product-3_61662272-2578-45ec-9296-ab3089caf59f.png?v=1653041153"
              alt="product image"
            />
            <div className={style.lm_middlecontent}>
              <h5 className={style.pro_names}>3rd Template</h5>
              <span className={style.lmpro_price}>$4</span>
            </div>
          </div>
          <div className={style.lmblock_right}>
            <div className={style.lm_options}></div>
            <div className={style.lm_quantity_selector}>
              <QuantityPicker className={style.quantity} min={0} max={10} />
            </div>
            <div className={style.lm_buy_btn}>
              <CustomizedButton onClick={() => alert("Welcome!")}>
                Buy Now
              </CustomizedButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
