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
import React, { useCallback, useEffect, useState } from "react";
import "../../css/index.css";
import Switch from "react-switch";
import ProductListSelection from "../DrawerSettings/CartUpsellSettings/ProductListSelection";
import newGif from "../../../../public/images/new.gif";
import { MagicIcon } from "@shopify/polaris-icons";

export default function UpSellPopupSettings({
    currentTemplate,
    sbSettingDataCallback,
}) {
    const [enableUpSell, setEnableUpSell] = useState(
        currentTemplate?.general_settings?.enableUpSell ?? false
    );

    // PRODUCT LIST SELECTION STATES
    const [CUPLSelection, setCUPLSelection] = useState(
        currentTemplate?.general_settings?.CUPLSelection ?? "1"
    );
    const [CUPLManualSelection, setCUPLManualSelection] = useState(
        currentTemplate?.general_settings?.CUPLManualSelection ?? "1"
    );
    const [SelectedCollectionID, setSelectedCollectionID] = useState(
        currentTemplate?.general_settings?.SelectedCollectionID ?? ""
    );
    const [SelectedProductIDs, setSelectedProductIDs] = useState(
        currentTemplate?.general_settings?.SelectedProductIDs ?? []
    );

    const [CUHeadingText, setCUHeadingText] = useState(
        currentTemplate?.general_settings?.CUHeadingText ??
            "Recommended Products"
    );
    const [CUBuyBtnText, setCUBuyBtnText] = useState(
        currentTemplate?.general_settings?.CUBuyBtnText ?? "Buy"
    );
    const [USPosition, setUSPosition] = useState(
        currentTemplate?.general_settings?.USPosition ?? "left"
    );

    const [CUHeadingFontSize, setCUHeadingFontSize] = useState(
        currentTemplate?.general_settings?.CUHeadingFontSize ?? 15
    );
    const [CUBodyFontSize, setCUBodyFontSize] = useState(
        currentTemplate?.general_settings?.CUBodyFontSize ?? 14
    );
    const [CUBuyBtnFontSize, setCUBuyBtnFontSize] = useState(
        currentTemplate?.general_settings?.CUBuyBtnFontSize ?? 14
    );
    const [CUBorderRadius, setCUBorderRadius] = useState(
        currentTemplate?.general_settings?.CUBorderRadius ?? 0
    );

    const [CUBackgroundColor, setCUBackgroundColor] = useState(
        currentTemplate?.general_settings?.CUBackgroundColor ?? "#fffafa"
    );
    const [CUHeadingBGColor, setCUHeadingBGColor] = useState(
        currentTemplate?.general_settings?.CUHeadingBGColor ?? "#000000"
    );
    const [CUHeadingColor, setCUHeadingColor] = useState(
        currentTemplate?.general_settings?.CUHeadingColor ?? "#ffffff"
    );
    const [CUBodyColor, setCUBodyColor] = useState(
        currentTemplate?.general_settings?.CUBodyColor ?? "#eef1f2"
    );
    const [CUBodyTextColor, setCUBodyTextColor] = useState(
        currentTemplate?.general_settings?.CUBodyTextColor ?? "#050505"
    );
    const [CUBtnTextColor, setCUBtnTextColor] = useState(
        currentTemplate?.general_settings?.CUBtnTextColor ?? "#ffffff"
    );
    const [CUBtnBGColor, setCUBtnBGColor] = useState(
        currentTemplate?.general_settings?.CUBtnBGColor ?? "#000000"
    );
    const [CUBtnTextHoverColor, setCUBtnTextHoverColor] = useState(
        currentTemplate?.general_settings?.CUBtnTextHoverColor ?? "#000000"
    );
    const [CUBtnBGHoverColor, setCUBtnBGHoverColor] = useState(
        currentTemplate?.general_settings?.CUBtnBGHoverColor ?? "#ffffff"
    );

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

    // HANDLING MAIN JSON DATA START
    var jsonData = {
        buy_btn_settings: currentTemplate.buy_btn_settings,
        general_settings: {
            ...currentTemplate.general_settings,
            enableUpSell: enableUpSell,
            CUPLSelection: CUPLSelection,
            CUPLManualSelection: CUPLManualSelection,
            SelectedCollectionID: SelectedCollectionID,
            SelectedProductIDs: SelectedProductIDs,
            CUHeadingText: CUHeadingText,
            CUBuyBtnText: CUBuyBtnText,
            USPosition: USPosition,
            CUHeadingFontSize: CUHeadingFontSize,
            CUBodyFontSize: CUBodyFontSize,
            CUBuyBtnFontSize: CUBuyBtnFontSize,
            CUBorderRadius: CUBorderRadius,
            CUBackgroundColor: CUBackgroundColor,
            CUHeadingBGColor: CUHeadingBGColor,
            CUHeadingColor: CUHeadingColor,
            CUBodyColor: CUBodyColor,
            CUBodyTextColor: CUBodyTextColor,
            CUBtnTextColor: CUBtnTextColor,
            CUBtnBGColor: CUBtnBGColor,
            CUBtnTextHoverColor: CUBtnTextHoverColor,
            CUBtnBGHoverColor: CUBtnBGHoverColor,
        },
    };

    useEffect(() => {
        callbackFunction();
    }, [
        enableUpSell,
        CUPLSelection,
        CUPLManualSelection,
        SelectedCollectionID,
        SelectedProductIDs,
        CUHeadingText,
        CUBuyBtnText,
        USPosition,
        CUHeadingFontSize,
        CUBodyFontSize,
        CUBuyBtnFontSize,
        CUBorderRadius,
        CUBackgroundColor,
        CUHeadingBGColor,
        CUHeadingColor,
        CUBodyColor,
        CUBodyTextColor,
        CUBtnTextColor,
        CUBtnBGColor,
        CUBtnTextHoverColor,
        CUBtnBGHoverColor,
    ]);

    const callbackFunction = useCallback(() => {
        sbSettingDataCallback(jsonData);
    }, [jsonData]);
    // HANDLING MAIN JSON DATA END

    useEffect(() => {
        setEnableUpSell(
            currentTemplate?.general_settings?.enableUpSell ?? false
        );
    }, [currentTemplate?.general_settings?.enableUpSell]);

    useEffect(() => {
        setCUPLSelection(
            currentTemplate?.general_settings?.CUPLSelection ?? "1"
        );
    }, [currentTemplate?.general_settings?.CUPLSelection]);

    useEffect(() => {
        setCUPLManualSelection(
            currentTemplate?.general_settings?.CUPLManualSelection ?? "1"
        );
    }, [currentTemplate?.general_settings?.CUPLManualSelection]);

    useEffect(() => {
        setSelectedCollectionID(
            currentTemplate?.general_settings?.SelectedCollectionID ?? ""
        );
    }, [currentTemplate?.general_settings?.SelectedCollectionID]);

    useEffect(() => {
        setSelectedProductIDs(
            currentTemplate?.general_settings?.SelectedProductIDs ?? []
        );
    }, [currentTemplate?.general_settings?.SelectedProductIDs]);

    useEffect(() => {
        setCUHeadingText(
            currentTemplate?.general_settings?.CUHeadingText ??
                "Recommended Products"
        );
    }, [currentTemplate?.general_settings?.CUHeadingText]);

    useEffect(() => {
        setCUBuyBtnText(
            currentTemplate?.general_settings?.CUBuyBtnText ?? "Buy"
        );
    }, [currentTemplate?.general_settings?.CUBuyBtnText]);

    useEffect(() => {
        setUSPosition(currentTemplate?.general_settings?.USPosition ?? "left");
    }, [currentTemplate?.general_settings?.USPosition]);

    useEffect(() => {
        setCUHeadingFontSize(
            currentTemplate?.general_settings?.CUHeadingFontSize ?? 15
        );
    }, [currentTemplate?.general_settings?.CUHeadingFontSize]);

    useEffect(() => {
        setCUBodyFontSize(
            currentTemplate?.general_settings?.CUBodyFontSize ?? 14
        );
    }, [currentTemplate?.general_settings?.CUBodyFontSize]);

    useEffect(() => {
        setCUBuyBtnFontSize(
            currentTemplate?.general_settings?.CUBuyBtnFontSize ?? 14
        );
    }, [currentTemplate?.general_settings?.CUBuyBtnFontSize]);

    useEffect(() => {
        setCUBorderRadius(
            currentTemplate?.general_settings?.CUBorderRadius ?? 0
        );
    }, [currentTemplate?.general_settings?.CUBorderRadius]);

    useEffect(() => {
        setCUBackgroundColor(
            currentTemplate?.general_settings?.CUBackgroundColor ?? "#fffafa"
        );
    }, [currentTemplate?.general_settings?.CUBackgroundColor]);

    useEffect(() => {
        setCUHeadingBGColor(
            currentTemplate?.general_settings?.CUHeadingBGColor ?? "#000000"
        );
    }, [currentTemplate?.general_settings?.CUHeadingBGColor]);

    useEffect(() => {
        setCUHeadingColor(
            currentTemplate?.general_settings?.CUHeadingColor ?? "#ffffff"
        );
    }, [currentTemplate?.general_settings?.CUHeadingColor]);

    useEffect(() => {
        setCUBodyColor(
            currentTemplate?.general_settings?.CUBodyColor ?? "#eef1f2"
        );
    }, [currentTemplate?.general_settings?.CUBodyColor]);

    useEffect(() => {
        setCUBodyTextColor(
            currentTemplate?.general_settings?.CUBodyTextColor ?? "#050505"
        );
    }, [currentTemplate?.general_settings?.CUBodyTextColor]);

    useEffect(() => {
        setCUBtnTextColor(
            currentTemplate?.general_settings?.CUBtnTextColor ?? "#ffffff"
        );
    }, [currentTemplate?.general_settings?.CUBtnTextColor]);

    useEffect(() => {
        setCUBtnBGColor(
            currentTemplate?.general_settings?.CUBtnBGColor ?? "#000000"
        );
    }, [currentTemplate?.general_settings?.CUBtnBGColor]);

    useEffect(() => {
        setCUBtnTextHoverColor(
            currentTemplate?.general_settings?.CUBtnTextHoverColor ?? "#000000"
        );
    }, [currentTemplate?.general_settings?.CUBtnTextHoverColor]);

    useEffect(() => {
        setCUBtnBGHoverColor(
            currentTemplate?.general_settings?.CUBtnBGHoverColor ?? "#ffffff"
        );
    }, [currentTemplate?.general_settings?.CUBtnBGHoverColor]);

    return (
        <Card sectioned>
            <BlockStack gap={200}>
                <InlineStack blockAlign="center" gap={200}>
                    <Text variant="headingLg" fontWeight="medium">
                        UpSell Popup Settings
                    </Text>
                    <Badge tone="info-strong" icon={MagicIcon}>
                        Premium
                    </Badge>
                    <img
                        src={newGif}
                        style={{ width: 50, verticalAlign: "middle" }}
                    />
                </InlineStack>
                <Text
                    variant="headingMd"
                    as="span"
                    fontWeight="regular"
                    tone="subdued"
                >
                    (<strong>Note:</strong> You can utilize this feature only if
                    you have selected "Stay on Same Page" for Button Action
                    onclick and activated the premium plan.)
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
