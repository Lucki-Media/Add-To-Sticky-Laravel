import {
    BlockStack,
    Card,
    Divider,
    FormLayout,
    RangeSlider,
    Text,
} from "@shopify/polaris";
import React, { useCallback, useState } from "react";
import "../../css/index.css";

export default function ProductListSettings() {
    const [PLFontSize, setPLFontSize] = useState(14);
    const [PLTextColor, setPLTextColor] = useState("#000");

    // FONT SIZE
    const handlePLFontSize = useCallback((value) => setPLFontSize(value), []);

    // TEXT COLOR
    const handlePLTextColor = (event) => {
        setPLTextColor(event.target.value);
    };

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
