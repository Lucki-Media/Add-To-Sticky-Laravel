import React, { useState } from "react";
import "../../../css/index.css";
import { Card } from "@shopify/polaris";
import proimage from "../../../assets/productimage.png";
import Drawer from "../../Drawer/Drawer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCartArrowDown,
    faCartPlus,
    faCartShopping,
    faBasketShopping,
    faBagShopping,
} from "@fortawesome/free-solid-svg-icons";

export default function MobilePreview(props) {
    const [iconHover, setIconHover] = useState(false);
    const [countHover, setCountHover] = useState(false);

    // ICON HOVER
    const handleIconEnter = () => {
        setIconHover(true);
    };

    const handleIconLeave = () => {
        setIconHover(false);
    };

    // COUNT HOVER
    const handleCountEnter = () => {
        setCountHover(true);
    };

    const handleCountLeave = () => {
        setCountHover(false);
    };

    return (
        <div
            classname="mobile_preview_section"
            style={{ maxWidth: 450, margin: "auto" }}
        >
            <Card padding="0">
                <div className="lm_sticky_box">
                    <div className="lm_product_block">
                        <div className="product_details product_details_mobile">
                            <div>
                                {props.enableSticky === true &&
                                    props.activePreview === 1 && (
                                        <div className="main_sticky___div">
                                            <div
                                                className="stickyCart__icon"
                                                style={{
                                                    position: "absolute",
                                                    fontSize:
                                                        props.stickyData
                                                            .iconSize,
                                                    color: iconHover
                                                        ? props.stickyData
                                                              .iconHoverColor
                                                        : props.stickyData
                                                              .iconColor,
                                                    border: iconHover
                                                        ? props.stickyData
                                                              .borderSize +
                                                          "px solid " +
                                                          props.stickyData
                                                              .borderHoverColor
                                                        : props.stickyData
                                                              .borderSize +
                                                          "px solid " +
                                                          props.stickyData
                                                              .borderColor,
                                                    background: iconHover
                                                        ? props.stickyData
                                                              .bgHoverColor
                                                        : props.stickyData
                                                              .bgColor,
                                                    height: props.stickyData
                                                        .btnSize,
                                                    width: props.stickyData
                                                        .btnSize,
                                                    top:
                                                        props.stickyData
                                                            .positionTop === 0
                                                            ? ""
                                                            : props.stickyData
                                                                  .positionTop +
                                                              "%",
                                                    left:
                                                        props.stickyData
                                                            .positionLeft === 0
                                                            ? ""
                                                            : props.stickyData
                                                                  .positionLeft +
                                                              "%",
                                                    marginLeft:
                                                        props.stickyData
                                                            .positionLeft > 90
                                                            ? `-${props.stickyData.btnSize}px`
                                                            : "",
                                                    marginTop:
                                                        props.stickyData
                                                            .positionTop > 90
                                                            ? `-${props.stickyData.btnSize}px`
                                                            : "",
                                                }}
                                                onMouseEnter={handleIconEnter}
                                                onMouseLeave={handleIconLeave}
                                            >
                                                {props.stickyData
                                                    .enableCount === true ? (
                                                    <span
                                                        className="sticky_Count"
                                                        style={{
                                                            background:
                                                                countHover
                                                                    ? props
                                                                          .stickyData
                                                                          .countBgHoverColor
                                                                    : props
                                                                          .stickyData
                                                                          .countBgColor,
                                                            width: props
                                                                .stickyData
                                                                .countSize,
                                                            height: props
                                                                .stickyData
                                                                .countSize,
                                                            fontSize:
                                                                props.stickyData
                                                                    .countFontSize,
                                                            color: countHover
                                                                ? props
                                                                      .stickyData
                                                                      .countHoverColor
                                                                : props
                                                                      .stickyData
                                                                      .countColor,
                                                        }}
                                                        onMouseEnter={
                                                            handleCountEnter
                                                        }
                                                        onMouseLeave={
                                                            handleCountLeave
                                                        }
                                                    >
                                                        {
                                                            props.stickyData
                                                                .numberCount
                                                        }
                                                    </span>
                                                ) : (
                                                    ""
                                                )}
                                                {props.defaultTemplate ===
                                                "1" ? (
                                                    <FontAwesomeIcon
                                                        icon={faCartShopping}
                                                    />
                                                ) : (
                                                    ""
                                                )}
                                                {props.defaultTemplate ===
                                                "2" ? (
                                                    <FontAwesomeIcon
                                                        icon={faCartPlus}
                                                    />
                                                ) : (
                                                    ""
                                                )}
                                                {props.defaultTemplate ===
                                                "3" ? (
                                                    <FontAwesomeIcon
                                                        icon={faCartArrowDown}
                                                    />
                                                ) : (
                                                    ""
                                                )}
                                                {props.defaultTemplate ===
                                                "4" ? (
                                                    <FontAwesomeIcon
                                                        icon={faBasketShopping}
                                                    />
                                                ) : (
                                                    ""
                                                )}
                                                {props.defaultTemplate ===
                                                "5" ? (
                                                    <FontAwesomeIcon
                                                        icon={faBagShopping}
                                                    />
                                                ) : (
                                                    ""
                                                )}
                                            </div>
                                        </div>
                                    )}
                            </div>
                            <div className="pagewidth">
                                <div className="product_details_main product_details_main_mobile">
                                    <div className="product_image product_image_mobile">
                                        <div className="product_imagess product_images_mobile">
                                            <img src={proimage} alt="" />
                                        </div>
                                    </div>

                                    <div className="p_details p_details_mobile">
                                        <h2>Juice Bottle Mockup (Red)</h2>
                                        <span>
                                            <strike>$50.00</strike> $40.00
                                        </span>
                                        <a className="addtocartbtn">
                                            Add to cart
                                        </a>
                                        <div className="product_content">
                                            The Juice Bottle Mockup (Red)
                                            features a realistic red juice
                                            bottle, ideal for showcasing
                                            beverage branding. It provides a
                                            high-quality, customizable template
                                            for marketing and packaging designs,
                                            making it perfect for visualizing
                                            labels on fruit juices, smoothies,
                                            or energy drinks.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Drawer
                                isOpen={
                                    props.activePreview === 2 &&
                                    props.customizationData.enableDrawer
                                }
                                customizationData={props.customizationData}
                            />
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
}
