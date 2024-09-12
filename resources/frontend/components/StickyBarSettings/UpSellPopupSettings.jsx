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
import "../../css/index.css";
import Switch from "react-switch";
import ProductListSelection from "../DrawerSettings/CartUpsellSettings/ProductListSelection";

export default function UpSellPopupSettings() {
    const [enableUpSell, setEnableUpSell] = useState(true);

    // PRODUCT LIST SELECTION STATES
    const [CUPLSelection, setCUPLSelection] = useState();
    const [CUPLManualSelection, setCUPLManualSelection] = useState();
    const [SelectedCollectionID, setSelectedCollectionID] = useState();
    const [SelectedProductIDs, setSelectedProductIDs] = useState();

    const [CUHeadingText, setCUHeadingText] = useState("Hello");
    const [CUBuyBtnText, setCUBuyBtnText] = useState("Buy");
    const [USPosition, setUSPosition] = useState("right");

    const [CUHeadingFontSize, setCUHeadingFontSize] = useState(20);
    const [CUBodyFontSize, setCUBodyFontSize] = useState(14);
    const [CUBuyBtnFontSize, setCUBuyBtnFontSize] = useState(14);
    const [CUBorderRadius, setCUBorderRadius] = useState(8);

    const [CUBackgroundColor, setCUBackgroundColor] = useState("#000000");
    const [CUHeadingBGColor, setCUHeadingBGColor] = useState("#ffffff");
    const [CUHeadingColor, setCUHeadingColor] = useState("#ffffff");
    const [CUBodyColor, setCUBodyColor] = useState("#DEDEDE");
    const [CUBodyTextColor, setCUBodyTextColor] = useState("#000000");
    const [CUBtnTextColor, setCUBtnTextColor] = useState("#000000");
    const [CUBtnBGColor, setCUBtnBGColor] = useState("#ffffff");
    const [CUBtnTextHoverColor, setCUBtnTextHoverColor] = useState("#000000");
    const [CUBtnBGHoverColor, setCUBtnBGHoverColor] = useState("#ffffff");

    // SWITCH LOGIC
    const handleUpSellSwitchChange = (checked) => {
        setEnableUpSell(checked);
    };

    // HANDLE PRODUCT LIST CALLBACK
    const handleProductListCallback = (callbackData) => {
        setCUPLSelection(callbackData.CUPLSelection);
        setCUPLManualSelection(callbackData.CUPLManualSelection);
        setSelectedCollectionID(callbackData.SelectedCollectionID);
        setSelectedProductIDs(callbackData.SelectedProductIDs);
    };

    // UPSELL POPUP HEADING TEXT
    const handleCUHeadingTextField = (val) => {
        setCUHeadingText(val);
    };

    // UPSELL POPUP BUY BUTTON TEXT
    const handleCUBuyBtnTextField = (val) => {
        setCUBuyBtnText(val);
    };

    // UPSELL POPUP HEADING FONT SIZE
    const handleCUHeadingFontSize = useCallback(
        (value) => setCUHeadingFontSize(value),
        []
    );

    // UPSELL POPUP BODY FONT SIZE
    const handleCUBodyFontSize = useCallback(
        (value) => setCUBodyFontSize(value),
        []
    );

    // UPSELL POPUP BUY BUTTON TEXT FONT SIZE
    const handleCUBuyBtnFontSize = useCallback(
        (value) => setCUBuyBtnFontSize(value),
        []
    );

    // UPSELL POPUP Border Radius
    const handleCUBorderRadius = (value) => {
        setCUBorderRadius(value);
    };

    // POSITION
    const handleUSPositionChange = (key) => {
        setUSPosition(key);
    };

    // UPSELL POPUP HEADING Background COLOR
    const handleCUHeadingBGColor = (event) => {
        setCUHeadingBGColor(event.target.value);
    };

    // UPSELL POPUP Body Background COLOR
    const handleCUBackgroundColor = (event) => {
        setCUBackgroundColor(event.target.value);
    };

    // UPSELL POPUP HEADING COLOR
    const handleCUHeadingColor = (event) => {
        setCUHeadingColor(event.target.value);
    };

    // UPSELL POPUP BODY COLOR
    const handleCUBodyColor = (event) => {
        setCUBodyColor(event.target.value);
    };

    // UPSELL POPUP BODY COLOR
    const handleCUBodyTextColor = (event) => {
        setCUBodyTextColor(event.target.value);
    };

    // UPSELL POPUP BUTTON TEXT COLOR
    const handleCUBtnTextColor = (event) => {
        setCUBtnTextColor(event.target.value);
    };

    // UPSELL POPUP BUTTON BG COLOR
    const handleCUBtnBGColor = (event) => {
        setCUBtnBGColor(event.target.value);
    };

    // UPSELL POPUP BUTTON TEXT HOVER COLOR
    const handleCUBtnTextHoverColor = (event) => {
        setCUBtnTextHoverColor(event.target.value);
    };

    // UPSELL POPUP BUTTON BG HOVER COLOR
    const handleCUBtnBGHoverColor = (event) => {
        setCUBtnBGHoverColor(event.target.value);
    };

    return (
        <Card sectioned>
            <BlockStack gap={200}>
                <Text variant="headingLg" fontWeight="medium">
                    UpSell Popup Settings
                </Text>
                <Text
                    variant="headingMd"
                    as="span"
                    fontWeight="regular"
                    tone="subdued"
                >
                    (<strong>Note:</strong> You can utilize this feature only if
                    you have selected "Stay on Same Page" for Button Action
                    onclick.)
                </Text>
            </BlockStack>

            <div style={{ margin: "15px 0" }}>
                <Divider borderColor="border" />
            </div>

            <div className="setting_title">
                <Text
                    variant="bodyLg"
                    as="span"
                    alignment="start"
                    fontWeight="medium"
                >
                    UpSell Popup is{" "}
                    {enableUpSell ? (
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
                    onChange={handleUpSellSwitchChange}
                    checked={enableUpSell}
                    uncheckedIcon={null}
                    checkedIcon={null}
                />
            </div>

            {enableUpSell && (
                <BlockStack>
                    <div style={{ margin: "15px 0" }}>
                        <Divider borderColor="border" />
                    </div>

                    {/* Product List Selection */}
                    <ProductListSelection
                        productListCallback={handleProductListCallback}
                        CUPLSelection={CUPLSelection}
                        CUPLManualSelection={CUPLManualSelection}
                        SelectedCollectionID={SelectedCollectionID}
                        SelectedProductIDs={SelectedProductIDs}
                    />

                    <div style={{ margin: "15px 0" }}>
                        <Divider borderColor="border" />
                    </div>

                    <FormLayout>
                        {/* Heading Text */}
                        <FormLayout.Group condensed>
                            <BlockStack gap="200">
                                <Text
                                    variant="headingMd"
                                    as="span"
                                    fontWeight="medium"
                                >
                                    Heading Text
                                </Text>
                                <TextField
                                    error={
                                        CUHeadingText == "" ||
                                        CUHeadingText == null
                                    }
                                    value={CUHeadingText ?? ""}
                                    onChange={handleCUHeadingTextField}
                                    autoComplete="off"
                                    maxLength={30}
                                    id="CUHeadingText"
                                    placeholder="Example: Recommended Products"
                                    showCharacterCount
                                />
                                {(CUHeadingText == "" ||
                                    CUHeadingText == null) && (
                                    <div style={{ marginTop: "4px" }}>
                                        <InlineError
                                            message={"This field is required"}
                                            fieldID={"CUHeadingText"}
                                        />
                                    </div>
                                )}
                            </BlockStack>
                        </FormLayout.Group>

                        {/* Buy Button Text */}
                        <FormLayout.Group condensed>
                            <BlockStack gap="200">
                                <Text
                                    variant="headingMd"
                                    as="span"
                                    fontWeight="medium"
                                >
                                    Buy Button Text
                                </Text>
                                <TextField
                                    error={
                                        CUBuyBtnText == "" ||
                                        CUBuyBtnText == null
                                    }
                                    value={CUBuyBtnText ?? ""}
                                    onChange={handleCUBuyBtnTextField}
                                    autoComplete="off"
                                    maxLength={10}
                                    id="CUBuyBtnText"
                                    placeholder="Example: Buy"
                                    showCharacterCount
                                />
                                {(CUBuyBtnText == "" ||
                                    CUBuyBtnText == null) && (
                                    <div style={{ marginTop: "4px" }}>
                                        <InlineError
                                            message={"This field is required"}
                                            fieldID={"CUBuyBtnText"}
                                        />
                                    </div>
                                )}
                            </BlockStack>
                        </FormLayout.Group>

                        {/* Font-Size and radius start*/}
                        <FormLayout.Group condensed>
                            {/* Heading Font Size */}
                            <BlockStack gap="0">
                                <Text
                                    variant="headingMd"
                                    as="span"
                                    fontWeight="medium"
                                >
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
                                <Text
                                    variant="headingMd"
                                    as="span"
                                    fontWeight="medium"
                                >
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
                            <BlockStack gap="0">
                                <Text
                                    variant="headingMd"
                                    as="span"
                                    fontWeight="medium"
                                >
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

                            <BlockStack gap="0">
                                <Text
                                    variant="headingMd"
                                    as="span"
                                    fontWeight="medium"
                                >
                                    Border Radius
                                </Text>
                                <RangeSlider
                                    label={`${CUBorderRadius} px`}
                                    value={CUBorderRadius}
                                    min={0}
                                    max={20}
                                    onChange={handleCUBorderRadius}
                                    output
                                />
                            </BlockStack>
                        </FormLayout.Group>

                        {/* Colors and position start */}
                        <FormLayout.Group condensed>
                            {/* Position */}
                            <BlockStack gap="0">
                                <Text
                                    variant="headingMd"
                                    as="span"
                                    fontWeight="medium"
                                >
                                    Position
                                </Text>
                                <InlineStack gap="200">
                                    <RadioButton
                                        label={"Left"}
                                        id={"left"}
                                        checked={USPosition === "left"}
                                        name="USPosition"
                                        onChange={() => {
                                            handleUSPositionChange("left");
                                        }}
                                    />
                                    <RadioButton
                                        label={"Right"}
                                        id={"right"}
                                        checked={USPosition === "right"}
                                        name="USPosition"
                                        onChange={() => {
                                            handleUSPositionChange("right");
                                        }}
                                    />
                                </InlineStack>
                            </BlockStack>

                            {/* Popup BG Color */}
                            <BlockStack gap="0">
                                <Text
                                    variant="headingMd"
                                    as="span"
                                    fontWeight="medium"
                                >
                                    Popup BG Color
                                </Text>
                                <div className="lm_sticky_color_box">
                                    <input
                                        type="color"
                                        value={CUBackgroundColor}
                                        onChange={handleCUBackgroundColor}
                                    />
                                </div>
                            </BlockStack>
                        </FormLayout.Group>

                        <FormLayout.Group condensed>
                            {/* Heading BG Color */}
                            <BlockStack gap="0">
                                <Text
                                    variant="headingMd"
                                    as="span"
                                    fontWeight="medium"
                                >
                                    Heading BG Color
                                </Text>
                                <div className="lm_sticky_color_box">
                                    <input
                                        type="color"
                                        value={CUHeadingBGColor}
                                        onChange={handleCUHeadingBGColor}
                                    />
                                </div>
                            </BlockStack>

                            {/* Heading Color */}
                            <BlockStack gap="0">
                                <Text
                                    variant="headingMd"
                                    as="span"
                                    fontWeight="medium"
                                >
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
                        </FormLayout.Group>

                        <FormLayout.Group condensed>
                            {/* Body BG Color */}
                            <BlockStack gap="0">
                                <Text
                                    variant="headingMd"
                                    as="span"
                                    fontWeight="medium"
                                >
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

                            {/* Body Text Color */}
                            <BlockStack gap="0">
                                <Text
                                    variant="headingMd"
                                    as="span"
                                    fontWeight="medium"
                                >
                                    Body Text Color
                                </Text>
                                <div className="lm_sticky_color_box">
                                    <input
                                        type="color"
                                        value={CUBodyTextColor}
                                        onChange={handleCUBodyTextColor}
                                    />
                                </div>
                            </BlockStack>
                        </FormLayout.Group>

                        <FormLayout.Group condensed>
                            {/* Button Text Color */}
                            <BlockStack gap="200">
                                <Text
                                    variant="headingMd"
                                    as="span"
                                    fontWeight="medium"
                                >
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
                            <BlockStack gap="200">
                                <Text
                                    variant="headingMd"
                                    as="span"
                                    fontWeight="medium"
                                >
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
                            <BlockStack gap="200">
                                <Text
                                    variant="headingMd"
                                    as="span"
                                    fontWeight="medium"
                                >
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
                            <BlockStack gap="200">
                                <Text
                                    variant="headingMd"
                                    as="span"
                                    fontWeight="medium"
                                >
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
                    </FormLayout>
                </BlockStack>
            )}
        </Card>
    );
}
