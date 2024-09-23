import { Card } from "@shopify/polaris";
import React from "react";
import proimage from "../../../assets/productimage.png";
import "../../../css/index.css";
import MobileCartTemplate1 from "../../../Templates/MobileCartTemplate";
import MobileCartTemplate2 from "../../../Templates/MobileCartTemplate2";
import MobileCartTemplate3 from "../../../Templates/MobileCartTemplate3";
import MobileCartTemplate4 from "../../../Templates/MobileCartTemplate4";
import MobileCartTemplate5 from "../../../Templates/MobileCartTemplate5";
import MobileCartTemplate6 from "../../../Templates/MobileCartTemplate6";
import MobileCartTemplate7 from "../../../Templates/MobileCartTemplate7";
import MobileCartTemplate8 from "../../../Templates/MobileCartTemplate8";
import UpSellBottomSheet from "../../../pages/UpSellBottomSheet";

export default function MobilePreview({ stickyBarData }) {
    return (
        <div
            classname="mobile_preview_section"
            style={{ maxWidth: 450, margin: "auto" }}
        >
            <Card padding="0">
                <div className="lm_sticky_box">
                    <div className="lm_product_block">
                        <div className="product_details product_details_mobile">
                            {String(stickyBarData.defaultTemplate) === "1" &&
                                stickyBarData.current_template.general_settings
                                    .checkMobile === true && (
                                    <MobileCartTemplate1
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
                                    .checkMobile === true && (
                                    <MobileCartTemplate2
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
                                    .checkMobile === true && (
                                    <MobileCartTemplate3
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
                                    .checkMobile === true && (
                                    <MobileCartTemplate4
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
                                    .checkMobile === true && (
                                    <MobileCartTemplate5
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
                                    .checkMobile === true && (
                                    <MobileCartTemplate6
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
                                    .checkMobile === true && (
                                    <MobileCartTemplate7
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
                                    .checkMobile === true && (
                                    <MobileCartTemplate8
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
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
}
