import React, { useEffect, useState } from "react";
import style from "./Drawer.module.css";
import { QuantityPicker } from "react-qty-picker";
import getSymbolFromCurrency from "currency-symbol-map";

export default function Drawer({
    isOpen,
    customizationData,
    showCartUpsell,
    CUProducts,
    handleClose,
    cartData,
    cartUpdated,
}) {
    const [checkoutBtnHover, setCheckoutBtnHover] = useState(false);
    const [hoverState, setHoverState] = useState({});

    // Cart Items States
    const [cartDetail, setCartDetail] = useState(cartData);
    const [cartCount, setCartCount] = useState(0);
    const [cartItems, setCartItems] = useState([]);
    const [FSBwidth, setFSBwidth] = useState(0);
    const [FSBprice, setFSBprice] = useState(0);

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

    // Set Dynamic data
    useEffect(() => {
        let cart_total_price = (Number(cartDetail.total_price) / 100).toFixed(
            2
        );
        setFSBwidth(
            (cart_total_price * 100) /
                Number(customizationData.shippingBar.FSBShippingTarget)
        );
        setFSBprice(
            Number(customizationData.shippingBar.FSBShippingTarget) -
                Number(cart_total_price)
        );
        setCartCount(cartDetail.item_count);
        setCartItems(cartDetail.items);

        cartUpdated();
    }, [cartDetail]);

    // Cart Update API call
    const CartUpdate = async (variant_id, quantity) => {
        try {
            var formData = new FormData();
            formData.append("updates[" + variant_id + "]", quantity);

            fetch("https://" + window.location.host + "/cart/update.js", {
                method: "POST",
                body: formData,
            })
                .then(async (response) => {
                    var res = await response.json();
                    setCartDetail(res);
                    setCartItems(res.items);
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <>
            <style>
                {`
                    @import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");
                        .lm_drawer {
                            font-family : Inter !important;
                        }

                    .lm_quantity_picker .quantity-picker .quantity-display {
                        width: 2.5rem !important;
                        padding: 0.25rem;
                        font-size: ${customizationData.productList.PLFontSize}px;
                        border: 0;
                        border-top: 0 solid #dbdbdb;
                        border-bottom: 0 solid #dbdbdb;
                        text-align: center;
                        color: ${customizationData.productList.PLTextColor};
                    }
                    .lm_quantity_picker .quantity-modifier {
                        height: 100%;
                        width: 2.5rem;
                        font-size: ${customizationData.productList.PLFontSize}px;
                        background: #f3f3f3;
                        color: ${customizationData.productList.PLTextColor};
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
                onClick={handleClose}
            >
                <div
                    className={`${style.lm_drawer} ${
                        isOpen && style.lm_drawer_open
                    } lm_drawer`}
                    style={{
                        background: customizationData.cartHeader.DCBGColor,
                    }}
                    onClick={(e) => e.stopPropagation()}
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
                            onClick={handleClose}
                        >
                            &times;
                        </span>
                    </div>

                    {cartCount > 0 ? (
                        <>
                            <div className={style.lm_drawer_content}>
                                {/* Free Shipping Bar */}
                                {customizationData.shippingBar.FSBenable && (
                                    <div
                                        className={
                                            style.lm_drawer_free_shipping_bar
                                        }
                                    >
                                        <div
                                            className={
                                                style.lm_free_shipping_heading
                                            }
                                            style={{
                                                fontSize:
                                                    customizationData
                                                        .shippingBar
                                                        .FSBPrimaryFontSize,
                                                color: customizationData
                                                    .shippingBar.FSBColor,
                                            }}
                                        >
                                            {FSBprice > 0
                                                ? customizationData.shippingBar.FSBReminderText.replace(
                                                      "{'price'}",
                                                      FSBprice.toFixed(2)
                                                  )
                                                : customizationData.shippingBar
                                                      .FSBWinningText}
                                        </div>
                                        <div
                                            className={
                                                style.lm_shipping_bar__outer_div
                                            }
                                            style={{
                                                background: `rgba(${hexToRgb(
                                                    customizationData
                                                        .shippingBar.FSBColor
                                                )}, 0.08)`,
                                            }}
                                        >
                                            <div
                                                className={
                                                    style.lm_shipping_bar_inner_div
                                                }
                                                style={{
                                                    background:
                                                        customizationData
                                                            .shippingBar
                                                            .FSBColor,
                                                    width:
                                                        FSBwidth > 100
                                                            ? "100%"
                                                            : FSBwidth + "%",
                                                }}
                                            ></div>
                                        </div>
                                        <span
                                            className={
                                                style.lm_shipping_bar_sub_title
                                            }
                                            style={{
                                                fontSize:
                                                    customizationData
                                                        .shippingBar
                                                        .FSBSecondaryFontSize,
                                                color: customizationData
                                                    .shippingBar.FSBColor,
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
                                <div
                                    className={
                                        style.lm_drawer_cart_item_wrapper
                                    }
                                >
                                    <table
                                        className={style.lm_drawer_cart_items}
                                    >
                                        <tbody>
                                            {cartItems.map((item) => (
                                                <tr
                                                    className={
                                                        style.lm_cart_drawer_item_row
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
                                                    key={item.id}
                                                >
                                                    <td
                                                        className={
                                                            style.lm_cart_item_media
                                                        }
                                                    >
                                                        <a
                                                            href={
                                                                window.location
                                                                    .origin +
                                                                "/products/" +
                                                                item.handle +
                                                                "?variant=" +
                                                                item.variant_id
                                                            }
                                                            className={
                                                                style.lm_cart_item_link
                                                            }
                                                        >
                                                            <img
                                                                src={item.image}
                                                                alt=""
                                                                className={
                                                                    style.lm_cart_item_img
                                                                }
                                                            />
                                                        </a>
                                                    </td>
                                                    <td
                                                        className={
                                                            style.lm_cart_item_media
                                                        }
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
                                                                    href={
                                                                        window
                                                                            .location
                                                                            .origin +
                                                                        "/products/" +
                                                                        item.handle +
                                                                        "?variant=" +
                                                                        item.variant_id
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
                                                                    {
                                                                        item.product_title
                                                                    }
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
                                                                    {getSymbolFromCurrency(
                                                                        cartDetail.currency
                                                                    ) +
                                                                        item.presentment_price}
                                                                </div>
                                                            </div>
                                                            <div
                                                                className={
                                                                    style.lm_cart_item_varient_wrapper
                                                                }
                                                            >
                                                                {!item.product_has_only_default_variant &&
                                                                    item.options_with_values.map(
                                                                        (
                                                                            variant
                                                                        ) => (
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
                                                                                        {
                                                                                            variant.name
                                                                                        }

                                                                                        :{" "}
                                                                                    </strong>
                                                                                </span>
                                                                                <span>
                                                                                    {
                                                                                        variant.value
                                                                                    }
                                                                                </span>
                                                                            </div>
                                                                        )
                                                                    )}
                                                            </div>
                                                            <div
                                                                className={
                                                                    style.lm_cart_item_footer
                                                                }
                                                            >
                                                                <div
                                                                    id={
                                                                        "lm_sticky_container__qty_picker_" +
                                                                        item.variant_id
                                                                    }
                                                                    className={`lm_quantity_picker ${style.lm_quantity_selector}`}
                                                                >
                                                                    <QuantityPicker
                                                                        id={
                                                                            item.variant_id
                                                                        }
                                                                        className={
                                                                            style.quantity12
                                                                        }
                                                                        min={1}
                                                                        max={10}
                                                                        value={
                                                                            item.quantity
                                                                        }
                                                                        onChange={(
                                                                            newQuantity
                                                                        ) => {
                                                                            CartUpdate(
                                                                                item.variant_id,
                                                                                newQuantity
                                                                            );
                                                                        }}
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
                                                                    {getSymbolFromCurrency(
                                                                        cartDetail.currency
                                                                    ) +
                                                                        (
                                                                            Number(
                                                                                item.line_price
                                                                            ) /
                                                                            100
                                                                        ).toFixed(
                                                                            2
                                                                        )}
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
                                                                onClick={() => {
                                                                    CartUpdate(
                                                                        item.variant_id,
                                                                        0
                                                                    );
                                                                }}
                                                            >
                                                                &times;
                                                            </span>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                {/* Recommended Products */}
                                {showCartUpsell && CUProducts.length > 0 && (
                                    <div
                                        className={
                                            style.lm_recommended_products_wrapper
                                        }
                                    >
                                        <div
                                            className={
                                                style.lm_recommendation_header
                                            }
                                            style={{
                                                fontSize:
                                                    customizationData.cartUpsell
                                                        .CUHeadingFontSize,
                                                color: customizationData
                                                    .cartUpsell.CUHeadingColor,
                                            }}
                                        >
                                            {
                                                customizationData.cartUpsell
                                                    .CUHeadingText
                                            }
                                        </div>
                                        <div
                                            className={
                                                style.lm_recommendation_list
                                            }
                                        >
                                            {CUProducts.map((product) => (
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
                                                        <a
                                                            href={
                                                                window.location
                                                                    .origin +
                                                                "/products/" +
                                                                product.handle
                                                            }
                                                        >
                                                            <img
                                                                src={
                                                                    product.featured_image
                                                                }
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
                                                            href={
                                                                window.location
                                                                    .origin +
                                                                "/products/" +
                                                                product.handle
                                                            }
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
                                                                {getSymbolFromCurrency(
                                                                    cartDetail.currency
                                                                ) +
                                                                    (
                                                                        Number(
                                                                            product.price
                                                                        ) / 100
                                                                    ).toFixed(
                                                                        2
                                                                    )}
                                                            </span>
                                                            {product.compare_at_price &&
                                                                product.compare_at_price >
                                                                    0 && (
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
                                                                            {getSymbolFromCurrency(
                                                                                cartDetail.currency
                                                                            ) +
                                                                                (
                                                                                    Number(
                                                                                        product.compare_at_price
                                                                                    ) /
                                                                                    100
                                                                                ).toFixed(
                                                                                    2
                                                                                )}
                                                                        </strike>
                                                                    </span>
                                                                )}
                                                        </div>
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
                                                                        product
                                                                            .id
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
                                                        >
                                                            {
                                                                customizationData
                                                                    .cartUpsell
                                                                    .CUBuyBtnText
                                                            }
                                                        </button>
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
                                    background:
                                        customizationData.cartHeader.DCBGColor,
                                }}
                            >
                                <div
                                    className={style.lm_cart_footer_sub_total}
                                    style={{
                                        fontSize:
                                            customizationData.bottomSection
                                                .BSPrimaryFontSize,
                                        color: customizationData.bottomSection
                                            .BSColor,
                                    }}
                                >
                                    <div>
                                        {
                                            customizationData.bottomSection
                                                .BSSubtotalText
                                        }{" "}
                                        :{" "}
                                    </div>
                                    <div
                                        className={
                                            style.lm_cart_footer_total_price
                                        }
                                    >
                                        {getSymbolFromCurrency(
                                            cartDetail.currency
                                        ) +
                                            (
                                                Number(cartDetail.total_price) /
                                                100
                                            ).toFixed(2)}
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
                                            color: customizationData
                                                .bottomSection.BSColor,
                                        }}
                                    >
                                        {
                                            customizationData.bottomSection
                                                .BSCheckoutMsgText
                                        }
                                    </div>
                                )}
                                <div
                                    className={
                                        style.lm_cart_footer_button_wrapper
                                    }
                                >
                                    <button
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
                                        onClick={() => {
                                            window.location.href = "/checkout";
                                        }}
                                    >
                                        {
                                            customizationData.bottomSection
                                                .BSCheckoutBtnText
                                        }
                                    </button>
                                </div>
                                {customizationData.bottomSection
                                    .BSContinueEnable && (
                                    <a
                                        href="javascript:void(0)"
                                        className={style.lm_cart_footer_link}
                                        style={{
                                            fontSize:
                                                customizationData.bottomSection
                                                    .BSSecondaryFontSize,
                                            color: customizationData
                                                .bottomSection.BSColor,
                                        }}
                                        onClick={handleClose}
                                    >
                                        {
                                            customizationData.bottomSection
                                                .BSContinueText
                                        }
                                    </a>
                                )}
                                {customizationData.bottomSection
                                    .BSViewCartEnable && (
                                    <a
                                        href="javascript:void(0)"
                                        className={style.lm_cart_footer_link}
                                        style={{
                                            fontSize:
                                                customizationData.bottomSection
                                                    .BSSecondaryFontSize,
                                            color: customizationData
                                                .bottomSection.BSColor,
                                        }}
                                        onClick={handleClose}
                                    >
                                        {
                                            customizationData.bottomSection
                                                .BSViewCartText
                                        }
                                    </a>
                                )}
                            </div>
                        </>
                    ) : (
                        // Empty state details
                        <div className={style.lm_empty_cart_wrapper}>
                            <div
                                className={style.lm_empty_cart_heading}
                                style={{
                                    fontSize:
                                        customizationData.shippingBar
                                            .FSBPrimaryFontSize,
                                    color: customizationData.shippingBar
                                        .FSBColor,
                                }}
                            >
                                {customizationData.emptyCart.ECContentText}
                            </div>
                            <div className={style.lm_empty_cart_button_wrapper}>
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
                                    onClick={() => {
                                        window.location.href = "/checkout";
                                    }}
                                >
                                    {customizationData.emptyCart.ECButtonText}
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            ;
        </>
    );
}
