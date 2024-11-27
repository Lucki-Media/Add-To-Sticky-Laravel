import React, { useState } from "react";
import style from "../../css/Drawer.module.css";
import proimage from "../../assets/productimage.png";
import { QuantityPicker } from "react-qty-picker";
import recommendedProducts from "../../assets/recommendedProducts.js";
import BottomSlider from "./BottomSlider.jsx";

export default function Drawer({ isOpen, customizationData }) {
    const [showBottomSlider, setShowBottomSlider] = useState(false);
    const [sliderProduct, setSliderProduct] = useState({});

    const [checkoutBtnHover, setCheckoutBtnHover] = useState(false);
    const [hoverState, setHoverState] = useState({});

    const handleMouseEnter = (id) => {
        setHoverState((prevState) => ({
            ...prevState,
            [id]: true,
        }));
    };

    const handleMouseLeave = (id) => {
        setHoverState((prevState) => ({
            ...prevState,
            [id]: false,
        }));
    };

    const hexToRgb = (hex) => {
        hex = hex.replace(/^#/, "");
        let bigint = parseInt(hex, 16);
        let r = (bigint >> 16) & 255;
        let g = (bigint >> 8) & 255;
        let b = bigint & 255;
        return `${r}, ${g}, ${b}`;
    };
    return (
        <>
            <style>
                {`
                    .lm_drawer_quantity_picker .quantity-picker .quantity-display{
                        padding: 0;
                        background-color: #fff;
                        width: 28px !important;
                        font-size: ${customizationData.productList.PLFontSize}px;
                        box-shadow: none;
                    }
                    .lm_drawer_quantity_picker .quantity-modifier{
                        height: 25px;
                        width: 30px;
                        border: none;
                        font-size: ${customizationData.productList.PLFontSize}px;
                        color: black;
                        background-color: #fff;
                        border-radius: 0;
                        min-width: 30px;
                        padding: 5px;
                    }
                    .lm_drawer_quantity_picker .quantity-picker{
                        background-color: #fff;
                        border: 1px solid #ddd;
                        border-radius:0;
                        display: flex;
                        align-items: center;
                    }
                `}
            </style>
            <div
                className={`${style.lm_drawer_wrapper} ${
                    isOpen && style.lm_drawer_open
                }`}
            >
                <div
                    className={`${showBottomSlider && style.lm_bottom_overlay} 
                    ${style.lm_drawer} 
                    ${isOpen && style.lm_drawer_open}`}
                    style={{
                        background: customizationData.cartHeader.DCBGColor,
                    }}
                >
                    {/* Drawer Header */}
                    <div className={style.lm_drawer_header}>
                        <div
                            className={style.lm_drawer_title}
                            style={{
                                fontSize:
                                    customizationData.cartHeader
                                        .DCTitleFontSize,
                                color: customizationData.cartHeader
                                    .DCTitleColor,
                            }}
                        >
                            {customizationData.cartHeader.DCTitleText}
                        </div>
                        <span
                            className={style.lm_drawer_close_icon}
                            style={{
                                fontSize:
                                    customizationData.cartHeader
                                        .DCTitleFontSize,
                                color: customizationData.cartHeader
                                    .DCTitleColor,
                            }}
                        >
                            &times;
                        </span>
                    </div>

                    <div className={style.lm_drawer_content}>
                        {/* Free Shipping Bar */}
                        {customizationData.shippingBar.FSBenable && (
                            <div className={style.lm_drawer_free_shipping_bar}>
                                <div
                                    className={style.lm_free_shipping_heading}
                                    style={{
                                        fontSize:
                                            customizationData.shippingBar
                                                .FSBPrimaryFontSize,
                                        color: customizationData.shippingBar
                                            .FSBColor,
                                    }}
                                >
                                    {customizationData.shippingBar.FSBReminderText.replace(
                                        "{'price'}",
                                        customizationData.shippingBar
                                            .FSBShippingTarget
                                    )}
                                </div>
                                <div
                                    className={style.lm_shipping_bar__outer_div}
                                    style={{
                                        background: `rgba(${hexToRgb(
                                            customizationData.shippingBar
                                                .FSBColor
                                        )}, 0.08)`,
                                    }}
                                >
                                    <div
                                        className={
                                            style.lm_shipping_bar_inner_div
                                        }
                                        style={{
                                            background:
                                                customizationData.shippingBar
                                                    .FSBColor,
                                        }}
                                    ></div>
                                </div>
                                <span
                                    className={style.lm_shipping_bar_sub_title}
                                    style={{
                                        fontSize:
                                            customizationData.shippingBar
                                                .FSBSecondaryFontSize,
                                        color: customizationData.shippingBar
                                            .FSBColor,
                                    }}
                                >
                                    {
                                        customizationData.shippingBar
                                            .FSBSecondaryText
                                    }
                                </span>
                            </div>
                        )}
                        {/* Cart Items */}
                        <div className={style.lm_drawer_cart_item_wrapper}>
                            <table className={style.lm_drawer_cart_items}>
                                <tbody>
                                    <tr
                                        className={
                                            style.lm_cart_drawer_item_row
                                        }
                                        style={{
                                            fontSize:
                                                customizationData.productList
                                                    .PLFontSize,
                                            color: customizationData.productList
                                                .PLTextColor,
                                        }}
                                    >
                                        <td
                                            className={style.lm_cart_item_media}
                                        >
                                            <a
                                                href="javascript:void(0)"
                                                className={
                                                    style.lm_cart_item_link
                                                }
                                            >
                                                <img
                                                    src={proimage}
                                                    alt=""
                                                    className={
                                                        style.lm_cart_item_img
                                                    }
                                                />
                                            </a>
                                        </td>
                                        <td
                                            className={style.lm_cart_item_media}
                                        >
                                            <div
                                                className={
                                                    style.lm_cart_item_content
                                                }
                                            >
                                                <div
                                                    className={
                                                        style.lm_cart_item_title
                                                    }
                                                    style={{
                                                        fontSize:
                                                            customizationData
                                                                .productList
                                                                .PLFontSize,
                                                        color: customizationData
                                                            .productList
                                                            .PLTextColor,
                                                    }}
                                                >
                                                    <a
                                                        href="javascript:void(0)"
                                                        style={{
                                                            fontSize:
                                                                customizationData
                                                                    .productList
                                                                    .PLFontSize,
                                                            color: customizationData
                                                                .productList
                                                                .PLTextColor,
                                                        }}
                                                    >
                                                        Juice Bottle Mockup
                                                        (Red)
                                                    </a>
                                                </div>
                                                <div
                                                    className={
                                                        style.lm_cart_item_price_wrapper
                                                    }
                                                >
                                                    <div
                                                        className={
                                                            style.lm_cart_item_actual_price
                                                        }
                                                        style={{
                                                            fontSize:
                                                                customizationData
                                                                    .productList
                                                                    .PLFontSize,
                                                            color: customizationData
                                                                .productList
                                                                .PLTextColor,
                                                        }}
                                                    >
                                                        $40.00
                                                    </div>
                                                </div>
                                                <div
                                                    className={
                                                        style.lm_cart_item_varient_wrapper
                                                    }
                                                >
                                                    <div
                                                        className={
                                                            style.lm_cart_item_varient
                                                        }
                                                        style={{
                                                            fontSize:
                                                                customizationData
                                                                    .productList
                                                                    .PLFontSize,
                                                        }}
                                                    >
                                                        <span>
                                                            <strong>
                                                                Size :{" "}
                                                            </strong>
                                                        </span>
                                                        <span>M</span>
                                                    </div>
                                                </div>
                                                <div
                                                    className={
                                                        style.lm_cart_item_footer
                                                    }
                                                >
                                                    <div
                                                        className={`lm_drawer_quantity_picker ${style.lm_quantity_selector}`}
                                                    >
                                                        <QuantityPicker
                                                            className={
                                                                style.quantity12
                                                            }
                                                            value={1}
                                                            min={1}
                                                            max={10}
                                                        />
                                                    </div>
                                                    <div
                                                        className={
                                                            style.lm_cart_item_price
                                                        }
                                                        style={{
                                                            fontSize:
                                                                customizationData
                                                                    .productList
                                                                    .PLFontSize,
                                                        }}
                                                    >
                                                        $40.00
                                                    </div>
                                                </div>
                                                <span
                                                    className={
                                                        style.lm_cart_item_remove_icon
                                                    }
                                                    style={{
                                                        fontSize:
                                                            Number(
                                                                customizationData
                                                                    .productList
                                                                    .PLFontSize
                                                            ) + 10,
                                                        color: customizationData
                                                            .productList
                                                            .PLTextColor,
                                                    }}
                                                >
                                                    &times;
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Recommended Products */}
                        {customizationData.cartUpsell.CUEnable && (
                            <div
                                className={
                                    style.lm_recommended_products_wrapper
                                }
                            >
                                <div
                                    className={style.lm_recommendation_header}
                                    style={{
                                        fontSize:
                                            customizationData.cartUpsell
                                                .CUHeadingFontSize,
                                        color: customizationData.cartUpsell
                                            .CUHeadingTextColor,
                                        background:
                                            customizationData.cartUpsell
                                                .CUHeadingBGColor,
                                    }}
                                >
                                    {customizationData.cartUpsell.CUHeadingText}
                                </div>
                                <div className={style.lm_recommendation_list}>
                                    {recommendedProducts.map((product) => (
                                        <div
                                            className={
                                                style.lm_recommended_product
                                            }
                                            key={product.id}
                                        >
                                            <div
                                                className={
                                                    style.lm_rec_product_image
                                                }
                                            >
                                                <a href="javascript:void(0)">
                                                    <img
                                                        src={product.image}
                                                        alt=""
                                                    />
                                                </a>
                                            </div>
                                            <div
                                                className={
                                                    style.lm_rec_product_content
                                                }
                                            >
                                                <a
                                                    href="javascript:void(0)"
                                                    className={
                                                        style.lm_rec_product_title
                                                    }
                                                    style={{
                                                        fontSize:
                                                            customizationData
                                                                .cartUpsell
                                                                .CUBodyFontSize,
                                                        color: customizationData
                                                            .cartUpsell
                                                            .CUBodyColor,
                                                    }}
                                                >
                                                    {product.title}
                                                </a>
                                                <div
                                                    className={
                                                        style.lm_rec_product_price
                                                    }
                                                >
                                                    <span
                                                        style={{
                                                            fontSize:
                                                                customizationData
                                                                    .cartUpsell
                                                                    .CUBodyFontSize,
                                                            color: customizationData
                                                                .cartUpsell
                                                                .CUBodyColor,
                                                        }}
                                                    >
                                                        {product.actual_price}
                                                    </span>
                                                    <span
                                                        style={{
                                                            fontSize:
                                                                customizationData
                                                                    .cartUpsell
                                                                    .CUBodyFontSize,
                                                            color: customizationData
                                                                .cartUpsell
                                                                .CUBodyColor,
                                                        }}
                                                    >
                                                        <strike>
                                                            {
                                                                product.compare_price
                                                            }
                                                        </strike>
                                                    </span>
                                                </div>
                                                <div
                                                    className={
                                                        style.lm_rec_product_action
                                                    }
                                                >
                                                    <button
                                                        className="lm_rec_product_action_btn"
                                                        type="button"
                                                        style={{
                                                            fontSize:
                                                                customizationData
                                                                    .cartUpsell
                                                                    .CUBuyBtnFontSize,
                                                            color: hoverState[
                                                                product.id
                                                            ]
                                                                ? customizationData
                                                                      .cartUpsell
                                                                      .CUBtnTextHoverColor
                                                                : customizationData
                                                                      .cartUpsell
                                                                      .CUBtnTextColor,
                                                            background:
                                                                hoverState[
                                                                    product.id
                                                                ]
                                                                    ? customizationData
                                                                          .cartUpsell
                                                                          .CUBtnBGHoverColor
                                                                    : customizationData
                                                                          .cartUpsell
                                                                          .CUBtnBGColor,
                                                        }}
                                                        onMouseEnter={() =>
                                                            handleMouseEnter(
                                                                product.id
                                                            )
                                                        }
                                                        onMouseLeave={() =>
                                                            handleMouseLeave(
                                                                product.id
                                                            )
                                                        }
                                                        onClick={() => {
                                                            setSliderProduct(
                                                                product
                                                            );
                                                            setShowBottomSlider(
                                                                true
                                                            );
                                                        }}
                                                    >
                                                        {
                                                            customizationData
                                                                .cartUpsell
                                                                .CUBuyBtnText
                                                        }
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Drawer Footer */}
                    <div
                        className={style.lm_drawer_cart_footer}
                        style={{
                            background: customizationData.cartHeader.DCBGColor,
                        }}
                    >
                        <div
                            className={style.lm_cart_footer_sub_total}
                            style={{
                                fontSize:
                                    customizationData.bottomSection
                                        .BSPrimaryFontSize,
                                color: customizationData.bottomSection.BSColor,
                            }}
                        >
                            <div>
                                {customizationData.bottomSection.BSSubtotalText}{" "}
                                :{" "}
                            </div>
                            <div className={style.lm_cart_footer_total_price}>
                                $40.00
                            </div>
                        </div>
                        {customizationData.bottomSection
                            .BSCheckoutTextEnable && (
                            <div
                                className={style.lm_cart_footer_message}
                                style={{
                                    fontSize:
                                        customizationData.bottomSection
                                            .BSSecondaryFontSize,
                                    color: customizationData.bottomSection
                                        .BSColor,
                                }}
                            >
                                {
                                    customizationData.bottomSection
                                        .BSCheckoutMsgText
                                }
                            </div>
                        )}
                        {customizationData?.bottomSection
                            ?.BSCheckoutButtonEnable && (
                            <div
                                className={style.lm_cart_footer_button_wrapper}
                            >
                                <button
                                    style={{
                                        fontSize:
                                            customizationData.bottomSection
                                                .BSCheckoutBtnFontSize,
                                        color: checkoutBtnHover
                                            ? customizationData.bottomSection
                                                  .BSBtnTextHoverColor
                                            : customizationData.bottomSection
                                                  .BSBtnTextColor,
                                        background: checkoutBtnHover
                                            ? customizationData.bottomSection
                                                  .BSBtnBGHoverColor
                                            : customizationData.bottomSection
                                                  .BSBtnBGColor,
                                    }}
                                    onMouseEnter={() => {
                                        setCheckoutBtnHover(true);
                                    }}
                                    onMouseLeave={() => {
                                        setCheckoutBtnHover(false);
                                    }}
                                >
                                    {
                                        customizationData.bottomSection
                                            .BSCheckoutBtnText
                                    }
                                </button>
                            </div>
                        )}
                        {!customizationData?.bottomSection
                            ?.BSCheckoutButtonEnable &&
                            customizationData.bottomSection
                                .BSViewCartEnable && (
                                <div
                                    className={
                                        style.lm_cart_footer_button_wrapper
                                    }
                                >
                                    <button
                                        // href="javascript:void(0)"
                                        // className={style.lm_cart_footer_link}
                                        style={{
                                            fontSize:
                                                customizationData.bottomSection
                                                    .BSCheckoutBtnFontSize,
                                            color: checkoutBtnHover
                                                ? customizationData
                                                      .bottomSection
                                                      .BSBtnTextHoverColor
                                                : customizationData
                                                      .bottomSection
                                                      .BSBtnTextColor,
                                            background: checkoutBtnHover
                                                ? customizationData
                                                      .bottomSection
                                                      .BSBtnBGHoverColor
                                                : customizationData
                                                      .bottomSection
                                                      .BSBtnBGColor,
                                        }}
                                        onMouseEnter={() => {
                                            setCheckoutBtnHover(true);
                                        }}
                                        onMouseLeave={() => {
                                            setCheckoutBtnHover(false);
                                        }}
                                    >
                                        {
                                            customizationData.bottomSection
                                                .BSViewCartText
                                        }
                                    </button>
                                </div>
                            )}
                        {customizationData.bottomSection.BSContinueEnable && (
                            <a
                                href="javascript:void(0)"
                                className={style.lm_cart_footer_link}
                                style={{
                                    fontSize:
                                        customizationData.bottomSection
                                            .BSSecondaryFontSize,
                                    color: customizationData.bottomSection
                                        .BSColor,
                                }}
                            >
                                {customizationData.bottomSection.BSContinueText}
                            </a>
                        )}
                    </div>

                    {/* Bottom Slider */}
                    <BottomSlider
                        showBottomSlider={showBottomSlider}
                        sliderProduct={sliderProduct}
                        customizationData={customizationData}
                        handleBottomSlider={() => {
                            setShowBottomSlider(false);
                        }}
                    />
                </div>
            </div>
        </>
    );
}
