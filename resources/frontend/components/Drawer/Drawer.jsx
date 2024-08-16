import React from "react";
import style from "../../css/Drawer.module.css";
import proimage from "../../assets/productimage.png";
import { QuantityPicker } from "react-qty-picker";
import recommendedProducts from "../../assets/recommendedProducts.js";

export default function Drawer({ isOpen, customizationData }) {
    return (
        <>
            <style>
                {`
                    .lm_quantity_picker .quantity-picker .quantity-display {
                        width: 1.5rem !important;
                        padding: 0.25rem;
                        font-size: 0.8rem;
                        border: 0;
                        border-top: 0 solid #dbdbdb;
                        border-bottom: 0 solid #dbdbdb;
                        text-align: center;
                    }
                    .lm_quantity_picker .quantity-modifier {
                        height: 100%;
                        width: 1.5rem;
                        font-size: 0.8rem;
                        background: #f3f3f3;
                        color: #000;
                        opacity: .5;
                        border: 0 solid #dbdbdb;
                        text-align: center;
                        cursor: pointer;
                    }
                    .lm_quantity_picker .quantity-picker {
                        border: 1px solid #dddddd8c;
                    }`}
            </style>
            <div
                className={`${style.lm_drawer_wrapper} ${
                    isOpen && style.lm_drawer_open
                }`}
            >
                <div
                    className={`${style.lm_drawer} ${
                        isOpen && style.lm_drawer_open
                    } ${style.lm_drawer_right}`}
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
                                >
                                    <div
                                        className={
                                            style.lm_shipping_bar_inner_div
                                        }
                                    ></div>
                                </div>
                                <span
                                    className={style.lm_shipping_bar_sub_title}
                                    style={{
                                        fontSize:
                                            customizationData.shippingBar
                                                .FSBSecondaryFontSize,
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
                                                >
                                                    <a href="javascript:void(0)">
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
                                                    >
                                                        $40.00
                                                    </div>
                                                    <div
                                                        className={
                                                            style.lm_cart_item_compare_price
                                                        }
                                                    >
                                                        $50.00
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
                                                        className={`lm_quantity_picker ${style.lm_quantity_selector}`}
                                                    >
                                                        <QuantityPicker
                                                            className={
                                                                style.quantity12
                                                            }
                                                            min={1}
                                                            max={10}
                                                        />
                                                    </div>
                                                    <div
                                                        className={
                                                            style.lm_cart_item_price
                                                        }
                                                    >
                                                        $40.00
                                                    </div>
                                                </div>
                                                <span
                                                    className={
                                                        style.lm_cart_item_remove_icon
                                                    }
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
                        <div className={style.lm_recommended_products_wrapper}>
                            <div className={style.lm_recommendation_header}>
                                Recommended Products
                            </div>
                            <div className={style.lm_recommendation_list}>
                                {recommendedProducts.map((product) => (
                                    <div
                                        className={style.lm_recommended_product}
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
                                            >
                                                {product.title}
                                            </a>
                                            <div
                                                className={
                                                    style.lm_rec_product_price
                                                }
                                            >
                                                <span>
                                                    {product.actual_price}
                                                </span>
                                                <span>
                                                    <strike>
                                                        {product.compare_price}
                                                    </strike>
                                                </span>
                                            </div>
                                        </div>
                                        <div
                                            className={
                                                style.lm_rec_product_action
                                            }
                                        >
                                            <button type="button">Buy</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Drawer Footer */}
                    <div className={style.lm_drawer_cart_footer}>
                        <div className={style.lm_cart_footer_sub_total}>
                            <div>Subtotal : </div>
                            <div className={style.lm_cart_footer_total_price}>
                                $40.00
                            </div>
                        </div>
                        <div className={style.lm_cart_footer_message}>
                            Taxes and shipping calculated at checkout
                        </div>
                        <div className={style.lm_cart_footer_button_wrapper}>
                            <button>Checkout</button>
                        </div>
                        <a
                            href="javascript:void(0)"
                            className={style.lm_cart_footer_link}
                        >
                            Continue Shopping
                        </a>
                        <a
                            href="javascript:void(0)"
                            className={style.lm_cart_footer_link}
                        >
                            View Cart
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
