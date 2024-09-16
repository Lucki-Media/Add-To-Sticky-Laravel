import { Card } from "@shopify/polaris";
import React from "react";
import proimage from "../../../assets/productimage.png";
import "../../../css/index.css";

export default function MobilePreview() {
    return (
        <div
            classname="mobile_preview_section"
            style={{ maxWidth: 450, margin: "auto" }}
        >
            <Card padding="0">
                <div className="lm_sticky_box">
                    <div className="lm_product_block">
                        <div className="product_details product_details_mobile">
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
