import { Card } from "@shopify/polaris";
import React from "react";
import proimage from "../../../assets/productimage.png";
import "../../../css/index.css";
import CartTemplate1 from "../../../Templates/CartTemplate";
import CartTemplate2 from "../../../Templates/CartTemplate2";
import CartTemplate3 from "../../../Templates/CartTemplate3";
import CartTemplate4 from "../../../Templates/CartTemplate4";
import CartTemplate5 from "../../../Templates/CartTemplate5";
import CartTemplate6 from "../../../Templates/CartTemplate6";
import CartTemplate7 from "../../../Templates/CartTemplate7";
import CartTemplate8 from "../../../Templates/CartTemplate8";
import UpSellBottomSheet from "../../../pages/UpSellBottomSheet";

export default function DesktopPreview({ stickyBarData }) {
    return (
        <div classname="preview_section">
            <Card padding="0">
                <div className="lm_sticky_box">
                    <div class="lm_screen_bar">
                        <div class="r_1"></div>
                        <div class="r_1"></div>
                        <div class="r_1"></div>
                        <div class="sq_1"></div>
                    </div>
                    <div className="lm_product_block">
                        <div className="product_details">
                            {String(stickyBarData.defaultTemplate) === "1" &&
                                stickyBarData.current_template.general_settings
                                    .checkDesktop === true && (
                                    <CartTemplate1
                                        enable={stickyBarData.enable}
                                        animationEnable={
                                            stickyBarData.animationEnable
                                        }
                                        current_template={
                                            stickyBarData.current_template
                                        }
                                    />
                                )}

                            {String(stickyBarData.defaultTemplate) === "2" &&
                                stickyBarData.current_template.general_settings
                                    .checkDesktop === true && (
                                    <CartTemplate2
                                        enable={stickyBarData.enable}
                                        animationEnable={
                                            stickyBarData.animationEnable
                                        }
                                        current_template={
                                            stickyBarData.current_template
                                        }
                                    />
                                )}

                            {String(stickyBarData.defaultTemplate) === "3" &&
                                stickyBarData.current_template.general_settings
                                    .checkDesktop === true && (
                                    <CartTemplate3
                                        enable={stickyBarData.enable}
                                        animationEnable={
                                            stickyBarData.animationEnable
                                        }
                                        current_template={
                                            stickyBarData.current_template
                                        }
                                    />
                                )}

                            {String(stickyBarData.defaultTemplate) === "4" &&
                                stickyBarData.current_template.general_settings
                                    .checkDesktop === true && (
                                    <CartTemplate4
                                        enable={stickyBarData.enable}
                                        animationEnable={
                                            stickyBarData.animationEnable
                                        }
                                        current_template={
                                            stickyBarData.current_template
                                        }
                                    />
                                )}

                            {String(stickyBarData.defaultTemplate) === "5" &&
                                stickyBarData.current_template.general_settings
                                    .checkDesktop === true && (
                                    <CartTemplate5
                                        enable={stickyBarData.enable}
                                        animationEnable={
                                            stickyBarData.animationEnable
                                        }
                                        current_template={
                                            stickyBarData.current_template
                                        }
                                    />
                                )}

                            {String(stickyBarData.defaultTemplate) === "6" &&
                                stickyBarData.current_template.general_settings
                                    .checkDesktop === true && (
                                    <CartTemplate6
                                        enable={stickyBarData.enable}
                                        animationEnable={
                                            stickyBarData.animationEnable
                                        }
                                        current_template={
                                            stickyBarData.current_template
                                        }
                                    />
                                )}

                            {String(stickyBarData.defaultTemplate) === "7" &&
                                stickyBarData.current_template.general_settings
                                    .checkDesktop === true && (
                                    <CartTemplate7
                                        enable={stickyBarData.enable}
                                        animationEnable={
                                            stickyBarData.animationEnable
                                        }
                                        current_template={
                                            stickyBarData.current_template
                                        }
                                    />
                                )}

                            {String(stickyBarData.defaultTemplate) === "8" &&
                                stickyBarData.current_template.general_settings
                                    .checkDesktop === true && (
                                    <CartTemplate8
                                        enable={stickyBarData.enable}
                                        animationEnable={
                                            stickyBarData.animationEnable
                                        }
                                        current_template={
                                            stickyBarData.current_template
                                        }
                                    />
                                )}

                            {/* Upsell Popup */}
                            <UpSellBottomSheet
                                upsellPopupData={
                                    stickyBarData.current_template
                                        .general_settings
                                }
                            />

                            <div className="pagewidth">
                                <div className="product_details_main">
                                    <div className="product_image">
                                        <div className="product_imagess">
                                            <img src={proimage} alt="" />
                                        </div>
                                    </div>

                                    <div className="p_details">
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
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
}
