import {
    BlockStack,
    Card,
    Divider,
    FormLayout,
    RangeSlider,
    Text,
} from "@shopify/polaris";
import React, { useCallback, useEffect, useState } from "react";
import "../../css/index.css";

export default function ProductListSettings(props) {
    const [PLFontSize, setPLFontSize] = useState(
        props.customizationData.productList.PLFontSize
    );
    const [PLTextColor, setPLTextColor] = useState(
        props.customizationData.productList.PLTextColor
    );

    // FONT SIZE
    const handlePLFontSize = useCallback((value) => setPLFontSize(value), []);

    // TEXT COLOR
    const handlePLTextColor = (event) => {
        setPLTextColor(event.target.value);
    };

    // HANDLING MAIN JSON DATA START
    var jsonData = {
        enableDrawer: props.customizationData.enableDrawer,
        cartHeader: props.customizationData.cartHeader,
        emptyCart: props.customizationData.emptyCart,
        shippingBar: props.customizationData.shippingBar,
        productList: {
            PLFontSize: PLFontSize,
            PLTextColor: PLTextColor,
        },
        cartUpsell: props.customizationData.cartUpsell,
        bottomSection: props.customizationData.bottomSection,
    };

    useEffect(() => {
        callbackFunction();
    }, [PLFontSize, PLTextColor]);

    const callbackFunction = useCallback(() => {
        props.settingDataCallback(jsonData);
    }, [jsonData]);
    // HANDLING MAIN JSON DATA END

    return (
        <Card sectioned>
            <Text variant="headingLg" fontWeight="medium">
                Product List Settings
            </Text>

            <div style={{ margin: "15px 0" }}>
                <Divider borderColor="border" />
            </div>

            <FormLayout>
                <FormLayout.Group condensed>
                    {/* Font Size */}
                    <BlockStack gap="0">
                        <Text variant="headingMd" as="span" fontWeight="medium">
                            Font-size
                        </Text>
                        <RangeSlider
                            label={`${PLFontSize} px`}
                            value={PLFontSize}
                            min={10}
                            max={16}
                            onChange={handlePLFontSize}
                            output
                        />
                    </BlockStack>

                    {/* Text Color */}
                    <BlockStack gap="0">
                        <Text variant="headingMd" as="span" fontWeight="medium">
                            Text Color
                        </Text>
                        <div className="lm_sticky_color_box">
                            <input
                                type="color"
                                value={PLTextColor}
                                onChange={handlePLTextColor}
                            />
                        </div>
                    </BlockStack>
                </FormLayout.Group>
            </FormLayout>
        </Card>
    );
}
