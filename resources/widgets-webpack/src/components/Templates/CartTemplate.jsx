import React, { useState, useEffect } from "react";
import Button from "react-button-component";
// import proimage from "../assets/productimage.png";
import { QuantityPicker } from "react-qty-picker";
import style from "./CartTemplate1.module.css";
import getSymbolFromCurrency from "currency-symbol-map";
import DefaultSettings from "./DefaultSettings";
export default function CartTemplate1(props) {
  const [getGrid, setGrid] = useState("cart_template_1");
  const [getPosition, setPosition] = useState("sticky_top");
  const [getbgColor, setbgColor] = useState("#fff");
  const [selectedVariant, setSelectedVariant] = useState(
    props.product.variants?.length && props.product.variants[0]
  );
  const [selectedOptions, setSelectedOptions] = useState({
    option0:
      props.product.options?.length && props.product.options[0].values[0],
    option1:
      props.product.options?.length > 1 && props.product.options[1].values[0],
    option2:
      props.product.options?.length > 2 && props.product.options[2].values[0],
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
  // const [enable, setEnable] = useState(true);
  // const [posValue, setPosValue] = useState("Top");
  // const [checkMobile, setCheckMobile] = useState(false);
  // const [checkDesktop, setCheckDesktop] = useState(false);
  // const [bold, setBold] = useState(false);
  // const [italic, setItalic] = useState(false);
  // const [underline, setUnderLine] = useState(false);
  // const [boldButton, setBoldButton] = useState(false);
  // const [italicButton, setItalicButton] = useState(false);
  // const [underlineButton, setUnderLineButton] = useState(false);
  // const [fontFamily, setFontFamily] = useState("Roboto");
  // const [titleColor, setTitleColor] = useState("rgba(0, 0, 0, 1)");
  // const [priceColor, setpriceColor] = useState("rgba(255, 0, 0, 1)");
  // // const [bgColor, setbgColor] = useState("rgba(0, 1, 255, 1)");
  // const [btnTextColor, setbtnTextColor] = useState("rgba(0, 1, 0, 1)");
  // const [btnBGColor, setbtnBGColor] = useState("rgba(0, 1, 234, 1)");
  // const [texthoverColor, settexthoverColor] = useState("rgba(0, 144, 1, 1)");
  // const [bgHoverColor, setbgHoverColor] = useState("rgba(0, 1, 0, 1)");
  // const [borderColor, setborderColor] = useState("rgba(0, 1, 143, 1)");
  // const [radiusColor, setradiusColor] = useState("rgba(1, 255, 0, 1)");
  // const [FontSizeValue, setFontSizeValue] = useState(20);
  // const [rangeValue, setRangeValue] = useState(20);
  // const [heightValue, setHeightValue] = useState(70);
  // const [buttonheightValue, setButtonHeightValue] = useState(35);
  // const [widthValue, setWidthValue] = useState(125);
  // const [borderValue, setBorder] = useState(1);
  // const [radiusValue, setRadius] = useState(15);
  // const [offsetValue, setOffsetValue] = useState(0);
  // const [selected, setSelected] = useState("1"); // Action
  // const [conditionValue, setConditionValue] = useState("1"); // Display Condition
  // const [editText, setEditText] = useState("BUY NOW");
  // const [soldOut, setSoldOut] = useState("Sold out");
  // const [unavailable, setUnavailable] = useState("Unavailable");
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
  const handleChangeSelect = (event, index) => {
    const val = event?.target?.value;
    const option = "option" + index;
    setSelectedOptions((prevState) => ({ ...prevState, [option]: val }));
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
        console.log(cart_added);
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
    console.log("product");
    console.log(props.product);
    /*--------------------------------------------------------------------------------------------------*/
    setGrid(DefaultSettings[0].layout);
    setPosition(DefaultSettings[0].position);
    setbgColor(DefaultSettings[0].bg_color);
  }, [
    selectedOptions?.option0,
    selectedOptions?.option1,
    selectedOptions?.option2,
    props.product.variants,
  ]);
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
      #lm_sticky_container__qty_picker .quantity-picker .quantity-display{
        padding: 0;
        background-color: #f3f3f3;
    }
    #lm_sticky_container__qty_picker .quantity-modifier{
    height: 40px;
    width: 40px;
    border: none;
    }
    #lm_sticky_container__qty_picker .quantity-picker{
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
              src={
                selectedVariant.featured_image !== null
                  ? selectedVariant.featured_image.src
                  : "https://dev.luckistore.in/default_product.png"
              }
              alt="product image"
            />
            <div className={style.lm_middlecontent}>
              <h5 className={style.pro_names}>{props.product.title}</h5>
              <span className={style.oldPrice}>
                <s>{oldPrice}</s>
              </span>
              <span className={style.lmpro_price}>{price}</span>
            </div>
            {selectedVariant.available === false ? <span>SOLD OUT</span> : null}
          </div>
          <div className={style.lmblock_right}>
            <div className={style.lm_options}>
              <div className={style.productInputs}>
                {props.product.options?.length &&
                  props.product.options[0].values?.length &&
                  props.product.options.map((opt, i, arr) => {
                    const optionName = "option" + i;
                    if (opt.name === "Title") {
                      return " ";
                    }
                    return (
                      <div>
                        <span>{opt.name}</span>
                        <select
                          onChange={(e) => handleChangeSelect(e, i)}
                          name={opt.name}
                          key={opt.name}
                          className={style.select}
                          value={selectedOptions[optionName]}
                          style={{ width: arr.length > 2 ? "30%" : "46%" }}
                        >
                          {opt.values.map((val) => {
                            return (
                              <option key={val} value={val}>
                                {val}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div
              id="lm_sticky_container__qty_picker"
              className={style.lm_quantity_selector}
            >
              <QuantityPicker
                className="lm_quantity_sticky"
                value={1}
                min={1}
                max={10}
              />
            </div>
            <div className={style.lm_buy_btn}>
              <CustomizedButton onClick={handleAddProduct}>
                Buy Now
              </CustomizedButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
