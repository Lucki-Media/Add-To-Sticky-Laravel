import {
    BlockStack,
    Card,
    Divider,
    FormLayout,
    InlineError,
    RangeSlider,
    Text,
    TextField,
} from "@shopify/polaris";
import React, { useCallback, useState } from "react";
import "../../css/index.css";

export default function CartHeaderSettings() {
    const [DCTitleText, setDCTitleText] = useState("Your Cart");
    const [DCTitleFontSize, setDCTitleFontSize] = useState(20);
    const [DCBGColor, setDCBGColor] = useState("#FFF");
    const [DCTitleColor, setDCTitleColor] = useState("#000");

    // TITLE TEXT
    const handleDCTitleTextField = (val) => {
        setDCTitleText(val);
    };

    // TITLE FONT SIZE
    const handleDCTitleFontSize = useCallback(
        (value) => setDCTitleFontSize(value),
        []
    );

    // CART BG COLOR
    const handleDCBGColor = (event) => {
        setDCBGColor(event.target.value);
    };

    // CART TITLE COLOR
    const handleDCTitleColor = (event) => {
        setDCTitleColor(event.target.value);
    };

    return (
        <Card sectioned>
            <Text variant="headingLg" fontWeight="medium">
                Cart Header Settings
            </Text>

            <div style={{ margin: "15px 0" }}>
                <Divider borderColor="border" />
            </div>

            <FormLayout>
                <FormLayout.Group condensed>
                    {/* Cart Title Text */}
                    <BlockStack gap="200">
                        <Text variant="headingMd" as="span" fontWeight="medium">
                            Cart Title Text
                        </Text>
                        <TextField
                            error={DCTitleText == "" || DCTitleText == null}
                            value={DCTitleText ?? ""}
                            onChange={handleDCTitleTextField}
                            autoComplete="off"
                            maxLength={30}
                            id="DCTitleText"
                            placeholder="Example: Your Cart"
                            showCharacterCount
                        />
                        {(DCTitleText == "" || DCTitleText == null) && (
                            <div style={{ marginTop: "4px" }}>
                                <InlineError
                                    message={"This field is required"}
                                    fieldID={"DCTitleText"}
                                />
                            </div>
                        )}
                    </BlockStack>
                </FormLayout.Group>

                <FormLayout.Group condensed>
                    {/* Cart Title Font Size */}
                    <BlockStack gap="0">
                        <Text variant="headingMd" as="span" fontWeight="medium">
                            Title Font-size
                        </Text>
                        <RangeSlider
                            label={`${DCTitleFontSize} px`}
                            value={DCTitleFontSize}
                            min={14}
                            max={30}
                            onChange={handleDCTitleFontSize}
                            output
                        />
                    </BlockStack>
                </FormLayout.Group>

                <FormLayout.Group condensed>
                    {/* Cart BG Color */}
                    <BlockStack gap="0">
                        <Text variant="headingMd" as="span" fontWeight="medium">
                            Cart BG Color
                        </Text>
                        <div className="lm_sticky_color_box">
                            <input
                                type="color"
                                value={DCBGColor}
                                onChange={handleDCBGColor}
                            />
                        </div>
                    </BlockStack>

                    {/* Cart Title Color */}
                    <BlockStack gap="0">
                        <Text variant="headingMd" as="span" fontWeight="medium">
                            Cart Title Color
                        </Text>
                        <div className="lm_sticky_color_box">
                            <input
                                type="color"
                                value={DCTitleColor}
                                onChange={handleDCTitleColor}
                            />
                        </div>
                    </BlockStack>
                </FormLayout.Group>
            </FormLayout>
        </Card>
    );
}
