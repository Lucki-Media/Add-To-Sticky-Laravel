import {
    InlineStack,
    Card,
    Checkbox,
    Divider,
    FormLayout,
    Text,
    BlockStack,
    TextField,
    InlineError,
    RangeSlider,
} from "@shopify/polaris";
import React, { useCallback, useState } from "react";

export default function BottomSectionSettings() {
    const [BSCheckoutTextEnable, setBSCheckoutTextEnable] = useState(false);
    const [BSContinueEnable, setBSContinueEnable] = useState(false);
    const [BSViewCartEnable, setBSViewCartEnable] = useState(false);

    const [BSSubtotalText, setBSSubtotalText] = useState("Subtotal");
    const [BSCheckoutMsgText, setBSCheckoutMsgText] = useState(
        "Taxes and shipping calculated at checkout"
    );
    const [BSCheckoutBtnText, setBSCheckoutBtnText] = useState("Checkout");
    const [BSContinueText, setBSContinueText] = useState("Continue Shopping");
    const [BSViewCartText, setBSViewCartText] = useState("View Cart");

    const [BSPrimaryFontSize, setBSPrimaryFontSize] = useState(14);
    const [BSSecondaryFontSize, setBSSecondaryFontSize] = useState(12);
    const [BSCheckoutBtnFontSize, setBSCheckoutBtnFontSize] = useState(18);

    const [BSBtnTextColor, setBSBtnTextColor] = useState("#FFF");
    const [BSBtnBGColor, setBSBtnBGColor] = useState("#000");
    const [BSBtnTextHoverColor, setBSBtnTextHoverColor] = useState("#FFF");
    const [BSBtnBGHoverColor, setBSBtnBGHoverColor] = useState("#000");
    const [BSColor, setBSColor] = useState("#000");

    // CHECKOUT TEXT ENABLE LOGIC
    const handleBSCheckoutTextEnable = useCallback(
        (newChecked) => setBSCheckoutTextEnable(newChecked),
        []
    );

    // CONTINUE TEXT ENABLE LOGIC
    const handleBSContinueEnable = useCallback(
        (newChecked) => setBSContinueEnable(newChecked),
        []
    );

    // VIEW CART TEXT ENABLE LOGIC
    const handleBSViewCartEnable = useCallback(
        (newChecked) => setBSViewCartEnable(newChecked),
        []
    );

    // SUBTOTAL TEXT
    const handleBSSubtotalTextField = (val) => {
        setBSSubtotalText(val);
    };

    // CHECKOUT MESSAGE TEXT
    const handleBSCheckoutMsgTextField = (val) => {
        setBSCheckoutMsgText(val);
    };

    // CHECKOUT BUTTON TEXT
    const handleBSCheckoutBtnTextField = (val) => {
        setBSCheckoutBtnText(val);
    };

    // CONTINUE SHOPPING TEXT
    const handleBSContinueTextField = (val) => {
        setBSContinueText(val);
    };

    // VIEW CART TEXT
    const handleBSViewCartTextField = (val) => {
        setBSViewCartText(val);
    };

    // PRIMARY FONT SIZE
    const handleBSPrimaryFontSize = useCallback(
        (value) => setBSPrimaryFontSize(value),
        []
    );

    // SECONDARY FONT SIZE
    const handleBSSecondaryFontSize = useCallback(
        (value) => setBSSecondaryFontSize(value),
        []
    );

    // CHECKOUT BUTTON TEXT FONT SIZE
    const handleBSCheckoutBtnFontSize = useCallback(
        (value) => setBSCheckoutBtnFontSize(value),
        []
    );

    // BUTTON TEXT COLOR
    const handleBSBtnTextColor = (event) => {
        setBSBtnTextColor(event.target.value);
    };

    // BUTTON BG COLOR
    const handleBSBtnBGColor = (event) => {
        setBSBtnBGColor(event.target.value);
    };

    // BUTTON TEXT HOVER COLOR
    const handleBSBtnTextHoverColor = (event) => {
        setBSBtnTextHoverColor(event.target.value);
    };

    // BUTTON BG HOVER COLOR
    const handleBSBtnBGHoverColor = (event) => {
        setBSBtnBGHoverColor(event.target.value);
    };

    // BOTTOM SECTION COLOR
    const handleBSColor = (event) => {
        setBSColor(event.target.value);
    };

    return (
        <Card sectioned>
            <Text variant="headingLg" fontWeight="medium">
                Bottom Section
            </Text>

            <div style={{ margin: "15px 0" }}>
                <Divider borderColor="border" />
            </div>

            <BlockStack gap="025">
                {/* Checkout Text */}
                <Checkbox
                    label="Enable Checkout Text"
                    checked={BSCheckoutTextEnable}
                    onChange={handleBSCheckoutTextEnable}
                />

                {/* Continue Shopping Option */}
                <Checkbox
                    label="Enable Continue Shopping Option"
                    checked={BSContinueEnable}
                    onChange={handleBSContinueEnable}
                />

                {/* View Cart Option */}
                <Checkbox
                    label=" Enable View Cart Option"
                    checked={BSViewCartEnable}
                    onChange={handleBSViewCartEnable}
                />
            </BlockStack>

            <div style={{ margin: "15px 0" }}>
                <Divider borderColor="border" />
            </div>

            <FormLayout>
                {/* Textfields Start */}
                <FormLayout.Group condensed>
                    {/* Subtotal Text */}
                    <BlockStack gap="200">
                        <Text variant="headingMd" as="span" fontWeight="medium">
                            Subtotal Text
                        </Text>
                        <TextField
                            error={
                                BSSubtotalText == "" || BSSubtotalText == null
                            }
                            value={BSSubtotalText ?? ""}
                            onChange={handleBSSubtotalTextField}
                            autoComplete="off"
                            maxLength={20}
                            id="BSSubtotalText"
                            placeholder="Example: Subtotal"
                            showCharacterCount
                        />
                        {(BSSubtotalText == "" || BSSubtotalText == null) && (
                            <div style={{ marginTop: "4px" }}>
                                <InlineError
                                    message={"This field is required"}
                                    fieldID={"BSSubtotalText"}
                                />
                            </div>
                        )}
                    </BlockStack>

                    {/* Checkout Button Text */}
                    <BlockStack gap="200">
                        <Text variant="headingMd" as="span" fontWeight="medium">
                            Checkout Button Text
                        </Text>
                        <TextField
                            error={
                                BSCheckoutBtnText == "" ||
                                BSCheckoutBtnText == null
                            }
                            value={BSCheckoutBtnText ?? ""}
                            onChange={handleBSCheckoutBtnTextField}
                            autoComplete="off"
                            maxLength={20}
                            id="BSCheckoutBtnText"
                            placeholder="Example: Checkout"
                            showCharacterCount
                        />
                        {(BSCheckoutBtnText == "" ||
                            BSCheckoutBtnText == null) && (
                            <div style={{ marginTop: "4px" }}>
                                <InlineError
                                    message={"This field is required"}
                                    fieldID={"BSCheckoutBtnText"}
                                />
                            </div>
                        )}
                    </BlockStack>
                </FormLayout.Group>

                <FormLayout.Group condensed>
                    {/* Checkout Message Text */}
                    <BlockStack gap="200">
                        <Text variant="headingMd" as="span" fontWeight="medium">
                            Checkout Message Text
                        </Text>
                        <TextField
                            error={
                                BSCheckoutMsgText == "" ||
                                BSCheckoutMsgText == null
                            }
                            value={BSCheckoutMsgText ?? ""}
                            onChange={handleBSCheckoutMsgTextField}
                            autoComplete="off"
                            maxLength={60}
                            id="BSCheckoutMsgText"
                            placeholder="Example: Taxes and shipping calculated at checkout"
                            showCharacterCount
                        />
                        {(BSCheckoutMsgText == "" ||
                            BSCheckoutMsgText == null) && (
                            <div style={{ marginTop: "4px" }}>
                                <InlineError
                                    message={"This field is required"}
                                    fieldID={"BSCheckoutMsgText"}
                                />
                            </div>
                        )}
                    </BlockStack>
                </FormLayout.Group>

                <FormLayout.Group condensed>
                    {/* Continue Shopping Text */}
                    <BlockStack gap="200">
                        <Text variant="headingMd" as="span" fontWeight="medium">
                            Continue Shopping Text
                        </Text>
                        <TextField
                            error={
                                BSContinueText == "" || BSContinueText == null
                            }
                            value={BSContinueText ?? ""}
                            onChange={handleBSContinueTextField}
                            autoComplete="off"
                            maxLength={20}
                            id="BSContinueText"
                            placeholder="Example: Continue Shopping"
                            showCharacterCount
                        />
                        {(BSContinueText == "" || BSContinueText == null) && (
                            <div style={{ marginTop: "4px" }}>
                                <InlineError
                                    message={"This field is required"}
                                    fieldID={"BSContinueText"}
                                />
                            </div>
                        )}
                    </BlockStack>
                </FormLayout.Group>

                <FormLayout.Group condensed>
                    {/* View Cart Text */}
                    <BlockStack gap="200">
                        <Text variant="headingMd" as="span" fontWeight="medium">
                            View Cart Text
                        </Text>
                        <TextField
                            error={
                                BSViewCartText == "" || BSViewCartText == null
                            }
                            value={BSViewCartText ?? ""}
                            onChange={handleBSViewCartTextField}
                            autoComplete="off"
                            maxLength={20}
                            id="BSViewCartText"
                            placeholder="Example: View Cart"
                            showCharacterCount
                        />
                        {(BSViewCartText == "" || BSViewCartText == null) && (
                            <div style={{ marginTop: "4px" }}>
                                <InlineError
                                    message={"This field is required"}
                                    fieldID={"BSViewCartText"}
                                />
                            </div>
                        )}
                    </BlockStack>
                </FormLayout.Group>
                {/* Textfields End */}

                {/* Font-size and Color Start */}
                <FormLayout.Group condensed>
                    {/* Primary Font Size */}
                    <BlockStack gap="0">
                        <Text variant="headingMd" as="span" fontWeight="medium">
                            Primary Font
                        </Text>
                        <RangeSlider
                            label={`${BSPrimaryFontSize} px`}
                            value={BSPrimaryFontSize}
                            min={10}
                            max={18}
                            onChange={handleBSPrimaryFontSize}
                            output
                        />
                    </BlockStack>

                    {/* Secondary Font Size */}
                    <BlockStack gap="0">
                        <Text variant="headingMd" as="span" fontWeight="medium">
                            Secondary Font
                        </Text>
                        <RangeSlider
                            label={`${BSSecondaryFontSize} px`}
                            value={BSSecondaryFontSize}
                            min={10}
                            max={18}
                            onChange={handleBSSecondaryFontSize}
                            output
                        />
                    </BlockStack>
                </FormLayout.Group>

                <FormLayout.Group condensed>
                    {/* Checkout Button Font Size */}
                    <BlockStack gap="0">
                        <Text variant="headingMd" as="span" fontWeight="medium">
                            Button Font
                        </Text>
                        <RangeSlider
                            label={`${BSCheckoutBtnFontSize} px`}
                            value={BSCheckoutBtnFontSize}
                            min={14}
                            max={24}
                            onChange={handleBSCheckoutBtnFontSize}
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
                                value={BSColor}
                                onChange={handleBSColor}
                            />
                        </div>
                    </BlockStack>
                </FormLayout.Group>

                <FormLayout.Group condensed>
                    {/* Button Text Color */}
                    <BlockStack gap="0">
                        <Text variant="headingMd" as="span" fontWeight="medium">
                            Button Text Color
                        </Text>
                        <div className="lm_sticky_color_box">
                            <input
                                type="color"
                                value={BSBtnTextColor}
                                onChange={handleBSBtnTextColor}
                            />
                        </div>
                    </BlockStack>

                    {/* Button BG Color */}
                    <BlockStack gap="0">
                        <Text variant="headingMd" as="span" fontWeight="medium">
                            Button BG Color
                        </Text>
                        <div className="lm_sticky_color_box">
                            <input
                                type="color"
                                value={BSBtnBGColor}
                                onChange={handleBSBtnBGColor}
                            />
                        </div>
                    </BlockStack>
                </FormLayout.Group>

                <FormLayout.Group condensed>
                    {/* Button Text Hover Color */}
                    <BlockStack gap="0">
                        <Text variant="headingMd" as="span" fontWeight="medium">
                            Button Text Hover Color
                        </Text>
                        <div className="lm_sticky_color_box">
                            <input
                                type="color"
                                value={BSBtnTextHoverColor}
                                onChange={handleBSBtnTextHoverColor}
                            />
                        </div>
                    </BlockStack>

                    {/* Button BG Hover Color */}
                    <BlockStack gap="0">
                        <Text variant="headingMd" as="span" fontWeight="medium">
                            Button BG Hover Color
                        </Text>
                        <div className="lm_sticky_color_box">
                            <input
                                type="color"
                                value={BSBtnBGHoverColor}
                                onChange={handleBSBtnBGHoverColor}
                            />
                        </div>
                    </BlockStack>
                </FormLayout.Group>
                {/* Font-size and Color End */}
            </FormLayout>
        </Card>
    );
}
