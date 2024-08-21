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
import React, { useCallback, useEffect, useState } from "react";

export default function BottomSectionSettings(props) {
    const [BSCheckoutTextEnable, setBSCheckoutTextEnable] = useState(
        props.customizationData.bottomSection.BSCheckoutTextEnable
    );
    const [BSContinueEnable, setBSContinueEnable] = useState(
        props.customizationData.bottomSection.BSContinueEnable
    );
    const [BSViewCartEnable, setBSViewCartEnable] = useState(
        props.customizationData.bottomSection.BSViewCartEnable
    );

    const [BSSubtotalText, setBSSubtotalText] = useState(
        props.customizationData.bottomSection.BSSubtotalText
    );
    const [BSCheckoutMsgText, setBSCheckoutMsgText] = useState(
        props.customizationData.bottomSection.BSCheckoutMsgText
    );
    const [BSCheckoutBtnText, setBSCheckoutBtnText] = useState(
        props.customizationData.bottomSection.BSCheckoutBtnText
    );
    const [BSContinueText, setBSContinueText] = useState(
        props.customizationData.bottomSection.BSContinueText
    );
    const [BSViewCartText, setBSViewCartText] = useState(
        props.customizationData.bottomSection.BSViewCartText
    );

    const [BSPrimaryFontSize, setBSPrimaryFontSize] = useState(
        props.customizationData.bottomSection.BSPrimaryFontSize
    );
    const [BSSecondaryFontSize, setBSSecondaryFontSize] = useState(
        props.customizationData.bottomSection.BSSecondaryFontSize
    );
    const [BSCheckoutBtnFontSize, setBSCheckoutBtnFontSize] = useState(
        props.customizationData.bottomSection.BSCheckoutBtnFontSize
    );

    const [BSBtnTextColor, setBSBtnTextColor] = useState(
        props.customizationData.bottomSection.BSBtnTextColor
    );
    const [BSBtnBGColor, setBSBtnBGColor] = useState(
        props.customizationData.bottomSection.BSBtnBGColor
    );
    const [BSBtnTextHoverColor, setBSBtnTextHoverColor] = useState(
        props.customizationData.bottomSection.BSBtnTextHoverColor
    );
    const [BSBtnBGHoverColor, setBSBtnBGHoverColor] = useState(
        props.customizationData.bottomSection.BSBtnBGHoverColor
    );
    const [BSColor, setBSColor] = useState(
        props.customizationData.bottomSection.BSColor
    );

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

    // HANDLING MAIN JSON DATA START
    var jsonData = {
        enableDrawer: props.customizationData.enableDrawer,
        cartHeader: props.customizationData.cartHeader,
        emptyCart: props.customizationData.emptyCart,
        shippingBar: props.customizationData.shippingBar,
        productList: props.customizationData.productList,
        cartUpsell: props.customizationData.cartUpsell,
        bottomSection: {
            BSCheckoutTextEnable: BSCheckoutTextEnable,
            BSContinueEnable: BSContinueEnable,
            BSViewCartEnable: BSViewCartEnable,
            BSSubtotalText: BSSubtotalText,
            BSCheckoutMsgText: BSCheckoutMsgText,
            BSCheckoutBtnText: BSCheckoutBtnText,
            BSContinueText: BSContinueText,
            BSViewCartText: BSViewCartText,
            BSPrimaryFontSize: BSPrimaryFontSize,
            BSSecondaryFontSize: BSSecondaryFontSize,
            BSCheckoutBtnFontSize: BSCheckoutBtnFontSize,
            BSBtnTextColor: BSBtnTextColor,
            BSBtnBGColor: BSBtnBGColor,
            BSBtnTextHoverColor: BSBtnTextHoverColor,
            BSBtnBGHoverColor: BSBtnBGHoverColor,
            BSColor: BSColor,
        },
    };

    useEffect(() => {
        callbackFunction();
    }, [
        BSCheckoutTextEnable,
        BSContinueEnable,
        BSViewCartEnable,
        BSSubtotalText,
        BSCheckoutMsgText,
        BSCheckoutBtnText,
        BSContinueText,
        BSViewCartText,
        BSPrimaryFontSize,
        BSSecondaryFontSize,
        BSCheckoutBtnFontSize,
        BSBtnTextColor,
        BSBtnBGColor,
        BSBtnTextHoverColor,
        BSBtnBGHoverColor,
        BSColor,
    ]);

    const callbackFunction = useCallback(() => {
        props.settingDataCallback(jsonData);
    }, [jsonData]);
    // HANDLING MAIN JSON DATA END

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
                    disabled={BSViewCartEnable} // Because we need to show only one from continue or view cart button
                />

                {/* View Cart Option */}
                <Checkbox
                    label=" Enable View Cart Option"
                    checked={BSViewCartEnable}
                    onChange={handleBSViewCartEnable}
                    disabled={BSContinueEnable} //  Because we need to show only one from continue or view cart button
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

                {BSCheckoutTextEnable && (
                    <FormLayout.Group condensed>
                        {/* Checkout Message Text */}
                        <BlockStack gap="200">
                            <Text
                                variant="headingMd"
                                as="span"
                                fontWeight="medium"
                            >
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
                )}

                {BSContinueEnable && (
                    <FormLayout.Group condensed>
                        {/* Continue Shopping Text */}
                        <BlockStack gap="200">
                            <Text
                                variant="headingMd"
                                as="span"
                                fontWeight="medium"
                            >
                                Continue Shopping Text
                            </Text>
                            <TextField
                                error={
                                    BSContinueText == "" ||
                                    BSContinueText == null
                                }
                                value={BSContinueText ?? ""}
                                onChange={handleBSContinueTextField}
                                autoComplete="off"
                                maxLength={20}
                                id="BSContinueText"
                                placeholder="Example: Continue Shopping"
                                showCharacterCount
                            />
                            {(BSContinueText == "" ||
                                BSContinueText == null) && (
                                <div style={{ marginTop: "4px" }}>
                                    <InlineError
                                        message={"This field is required"}
                                        fieldID={"BSContinueText"}
                                    />
                                </div>
                            )}
                        </BlockStack>
                    </FormLayout.Group>
                )}

                {BSViewCartEnable && (
                    <FormLayout.Group condensed>
                        {/* View Cart Text */}
                        <BlockStack gap="200">
                            <Text
                                variant="headingMd"
                                as="span"
                                fontWeight="medium"
                            >
                                View Cart Text
                            </Text>
                            <TextField
                                error={
                                    BSViewCartText == "" ||
                                    BSViewCartText == null
                                }
                                value={BSViewCartText ?? ""}
                                onChange={handleBSViewCartTextField}
                                autoComplete="off"
                                maxLength={20}
                                id="BSViewCartText"
                                placeholder="Example: View Cart"
                                showCharacterCount
                            />
                            {(BSViewCartText == "" ||
                                BSViewCartText == null) && (
                                <div style={{ marginTop: "4px" }}>
                                    <InlineError
                                        message={"This field is required"}
                                        fieldID={"BSViewCartText"}
                                    />
                                </div>
                            )}
                        </BlockStack>
                    </FormLayout.Group>
                )}
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
