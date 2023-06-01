import React, { Component, useState, useEffect } from "react";
import Button from "react-button-component";
// import proimage from "../assets/productimage.png";
import { QuantityPicker } from "react-qty-picker";
import style from "./CartTemplate2.module.css";

import DefaultSettings from "./DefaultSettings";
export default function CartTemplate2() {
  const [getGrid, setGrid] = useState("cart_template_1");
  const [getPosition, setPosition] = useState("sticky_top");
  const [getbgColor, setbgColor] = useState("#fff");

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
              <h5 className={style.pro_names}>Testing Template</h5>
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
