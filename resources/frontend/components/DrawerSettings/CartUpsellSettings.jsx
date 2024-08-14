import {
    Badge,
    BlockStack,
    Card,
    Divider,
    FormLayout,
    InlineError,
    InlineStack,
    RadioButton,
    RangeSlider,
    Text,
    TextField,
} from "@shopify/polaris";
import React, { useCallback, useState } from "react";
import Switch from "react-switch";
import "../../css/index.css";
import ProductListSelection from "./CartUpsellSettings/ProductListSelection";

export default function CartUpsellSettings() {
    const [CUEnable, setCUEnable] = useState(true);
    const [CULayout, setCULayout] = useState("List");

    const [CUHeadingText, setCUHeadingText] = useState("Recommended Products");
    const [CUBuyBtnText, setCUBuyBtnText] = useState("Checkout");

    const [CUHeadingFontSize, setCUHeadingFontSize] = useState(16);
    const [CUBodyFontSize, setCUBodyFontSize] = useState(14);
    const [CUBuyBtnFontSize, setCUBuyBtnFontSize] = useState(14);

    const [CUHeadingColor, setCUHeadingColor] = useState("#FFF");
    const [CUBodyColor, setCUBodyColor] = useState("#FFF");
    const [CUBtnTextColor, setCUBtnTextColor] = useState("#FFF");
    const [CUBtnBGColor, setCUBtnBGColor] = useState("#000");
    const [CUBtnTextHoverColor, setCUBtnTextHoverColor] = useState("#FFF");
    const [CUBtnBGHoverColor, setCUBtnBGHoverColor] = useState("#000");

    // ENABLE CART UPSELL BUTTON LOGIC
    const handleEnable = (value) => {
        setCUEnable(!value);
        // setUnsavedchanges(isEqual(!value, props.originalenableSticky));
    };

    // LAYOUT LOGIC
    const handleCULayoutChange = (key) => {
        setCULayout(key);
    };

    // HEADING TEXT
    const handleCUHeadingTextField = (val) => {
        setCUHeadingText(val);
    };

    // BUY BUTTON TEXT
    const handleCUBuyBtnTextField = (val) => {
        setCUBuyBtnText(val);
    };

    // HEADING FONT SIZE
    const handleCUHeadingFontSize = useCallback(
        (value) => setCUHeadingFontSize(value),
        []
    );

    // BODY FONT SIZE
    const handleCUBodyFontSize = useCallback(
        (value) => setCUBodyFontSize(value),
        []
    );

    // BUY BUTTON TEXT FONT SIZE
    const handleCUBuyBtnFontSize = useCallback(
        (value) => setCUBuyBtnFontSize(value),
        []
    );

    // HEADING COLOR
    const handleCUHeadingColor = (event) => {
        setCUHeadingColor(event.target.value);
    };

    // BODY COLOR
    const handleCUBodyColor = (event) => {
        setCUBodyColor(event.target.value);
    };

    // BUTTON TEXT COLOR
    const handleCUBtnTextColor = (event) => {
        setCUBtnTextColor(event.target.value);
    };

    // BUTTON BG COLOR
    const handleCUBtnBGColor = (event) => {
        setCUBtnBGColor(event.target.value);
    };

    // BUTTON TEXT HOVER COLOR
    const handleCUBtnTextHoverColor = (event) => {
        setCUBtnTextHoverColor(event.target.value);
    };

    // BUTTON BG HOVER COLOR
    const handleCUBtnBGHoverColor = (event) => {
        setCUBtnBGHoverColor(event.target.value);
    };

    return (
        <Card sectioned>
            <Text variant="headingLg" fontWeight="medium">
                Cart Upsell Settings
            </Text>

            <div style={{ margin: "15px 0" }}>
                <Divider borderColor="border" />
            </div>

            <FormLayout>
                <FormLayout.Group condensed>
                    <div className="setting_title">
                        <Text
                            variant="bodyLg"
                            as="span"
                            alignment="start"
                            fontWeight="medium"
                        >
                            Cart Upsell is{" "}
                            {CUEnable ? (
                                <span className="lm_sticky_custom_badge_success">
                                    <Badge tone="success">Enabled</Badge>
                                </span>
                            ) : (
                                <span className="lm_sticky_custom_badge_critical">
                                    <Badge tone="critical">Disabled</Badge>
                                </span>
                            )}
                        </Text>
                        <Switch
                            onChange={() => {
                                handleEnable(CUEnable);
                            }}
                            checked={CUEnable}
                            uncheckedIcon={null}
                            checkedIcon={null}
                        />
                    </div>
                </FormLayout.Group>

                <div style={{ margin: "0" }}>
                    <Divider borderColor="border" />
                </div>

                {/* Product List Selection */}
                <ProductListSelection />

                <div style={{ margin: "0" }}>
                    <Divider borderColor="border" />
                </div>

                {/* Text fields */}
                <FormLayout.Group condensed>
                    {/* Heading Text */}
                    <BlockStack gap="200">
                        <Text variant="headingMd" as="span" fontWeight="medium">
                            Heading Text
                        </Text>
                        <TextField
                            error={CUHeadingText == "" || CUHeadingText == null}
                            value={CUHeadingText ?? ""}
                            onChange={handleCUHeadingTextField}
                            autoComplete="off"
                            maxLength={30}
                            id="CUHeadingText"
                            placeholder="Example: Recommended Products"
                            showCharacterCount
                        />
                        {(CUHeadingText == "" || CUHeadingText == null) && (
                            <div style={{ marginTop: "4px" }}>
                                <InlineError
                                    message={"This field is required"}
                                    fieldID={"CUHeadingText"}
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
                            error={CUBuyBtnText == "" || CUBuyBtnText == null}
                            value={CUBuyBtnText ?? ""}
                            onChange={handleCUBuyBtnTextField}
                            autoComplete="off"
                            maxLength={10}
                            id="CUBuyBtnText"
                            placeholder="Example: Checkout"
                            showCharacterCount
                        />
                        {(CUBuyBtnText == "" || CUBuyBtnText == null) && (
                            <div style={{ marginTop: "4px" }}>
                                <InlineError
                                    message={"This field is required"}
                                    fieldID={"CUBuyBtnText"}
                                />
                            </div>
                        )}
                    </BlockStack>
                </FormLayout.Group>

                {/* Font-Size and radio buttons start*/}
                <FormLayout.Group condensed>
                    {/* Heading Font Size */}
                    <BlockStack gap="0">
                        <Text variant="headingMd" as="span" fontWeight="medium">
                            Heading Font
                        </Text>
                        <RangeSlider
                            label={`${CUHeadingFontSize} px`}
                            value={CUHeadingFontSize}
                            min={14}
                            max={24}
                            onChange={handleCUHeadingFontSize}
                            output
                        />
                    </BlockStack>

                    {/* Body Font Size */}
                    <BlockStack gap="0">
                        <Text variant="headingMd" as="span" fontWeight="medium">
                            Body Font
                        </Text>
                        <RangeSlider
                            label={`${CUBodyFontSize} px`}
                            value={CUBodyFontSize}
                            min={10}
                            max={16}
                            onChange={handleCUBodyFontSize}
                            output
                        />
                    </BlockStack>
                </FormLayout.Group>

                <FormLayout.Group condensed>
                    {/* Buy Button Font Size */}
                    <BlockStack gap="0">
                        <Text variant="headingMd" as="span" fontWeight="medium">
                            Button Font
                        </Text>
                        <RangeSlider
                            label={`${CUBuyBtnFontSize} px`}
                            value={CUBuyBtnFontSize}
                            min={10}
                            max={16}
                            onChange={handleCUBuyBtnFontSize}
                            output
                        />
                    </BlockStack>

                    {/* Layout */}
                    <BlockStack gap="200">
                        <Text variant="headingMd" as="span" fontWeight="medium">
                            Layout
                        </Text>
                        <InlineStack gap="1200" wrap={false}>
                            <RadioButton
                                label={"List"}
                                id={"List"}
                                checked={CULayout === "List"}
                                name="CULayout"
                                onChange={() => {
                                    handleCULayoutChange("List");
                                }}
                            />
                            <RadioButton
                                label={"Slider"}
                                id={"Slider"}
                                checked={CULayout === "Slider"}
                                name="CULayout"
                                onChange={() => {
                                    handleCULayoutChange("Slider");
                                }}
                            />
                        </InlineStack>
                    </BlockStack>
                </FormLayout.Group>
                {/* Font-Size and radio buttons end*/}

                {/* Colors start */}
                <FormLayout.Group condensed>
                    {/* Heading Color */}
                    <BlockStack gap="0">
                        <Text variant="headingMd" as="span" fontWeight="medium">
                            Heading Color
                        </Text>
                        <div className="lm_sticky_color_box">
                            <input
                                type="color"
                                value={CUHeadingColor}
                                onChange={handleCUHeadingColor}
                            />
                        </div>
                    </BlockStack>

                    {/* Body Color */}
                    <BlockStack gap="0">
                        <Text variant="headingMd" as="span" fontWeight="medium">
                            Body Color
                        </Text>
                        <div className="lm_sticky_color_box">
                            <input
                                type="color"
                                value={CUBodyColor}
                                onChange={handleCUBodyColor}
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
                                value={CUBtnTextColor}
                                onChange={handleCUBtnTextColor}
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
                                value={CUBtnBGColor}
                                onChange={handleCUBtnBGColor}
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
                                value={CUBtnTextHoverColor}
                                onChange={handleCUBtnTextHoverColor}
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
                                value={CUBtnBGHoverColor}
                                onChange={handleCUBtnBGHoverColor}
                            />
                        </div>
                    </BlockStack>
                </FormLayout.Group>
                {/* Colors end */}
            </FormLayout>
        </Card>
    );
}
