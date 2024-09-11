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
import Switch from "react-switch";
import "../../css/index.css";
import ProductListSelection from "./CartUpsellSettings/ProductListSelection";
import { MagicIcon } from "@shopify/polaris-icons";

export default function CartUpsellSettings(props) {
    const [CUEnable, setCUEnable] = useState(
        props.customizationData.cartUpsell.CUEnable
    );
    const [CULayout, setCULayout] = useState(
        props.customizationData.cartUpsell.CULayout
    );

    const [CUHeadingText, setCUHeadingText] = useState(
        props.customizationData.cartUpsell.CUHeadingText
    );
    const [CUBuyBtnText, setCUBuyBtnText] = useState(
        props.customizationData.cartUpsell.CUBuyBtnText
    );

    const [CUHeadingFontSize, setCUHeadingFontSize] = useState(
        props.customizationData.cartUpsell.CUHeadingFontSize
    );
    const [CUBodyFontSize, setCUBodyFontSize] = useState(
        props.customizationData.cartUpsell.CUBodyFontSize
    );
    const [CUBuyBtnFontSize, setCUBuyBtnFontSize] = useState(
        props.customizationData.cartUpsell.CUBuyBtnFontSize
    );

    const [CUHeadingTextColor, setCUHeadingTextColor] = useState(
        props.customizationData.cartUpsell.CUHeadingTextColor
    );

    const [CUHeadingBGColor, setCUHeadingBGColor] = useState(
        props.customizationData.cartUpsell.CUHeadingBGColor
    );
    const [CUBodyColor, setCUBodyColor] = useState(
        props.customizationData.cartUpsell.CUBodyColor
    );
    const [CUBtnTextColor, setCUBtnTextColor] = useState(
        props.customizationData.cartUpsell.CUBtnTextColor
    );
    const [CUBtnBGColor, setCUBtnBGColor] = useState(
        props.customizationData.cartUpsell.CUBtnBGColor
    );
    const [CUBtnTextHoverColor, setCUBtnTextHoverColor] = useState(
        props.customizationData.cartUpsell.CUBtnTextHoverColor
    );
    const [CUBtnBGHoverColor, setCUBtnBGHoverColor] = useState(
        props.customizationData.cartUpsell.CUBtnBGHoverColor
    );

    // PRODUCT LIST SELECTION STATES
    const [CUPLSelection, setCUPLSelection] = useState(
        props.customizationData.cartUpsell.CUPLSelection
    );
    const [CUPLManualSelection, setCUPLManualSelection] = useState(
        props.customizationData.cartUpsell.CUPLManualSelection
    );
    const [SelectedCollectionID, setSelectedCollectionID] = useState(
        props.customizationData.cartUpsell.SelectedCollectionID
    );
    const [SelectedProductIDs, setSelectedProductIDs] = useState(
        props.customizationData.cartUpsell.SelectedProductIDs
    );

    // ENABLE CART UPSELL BUTTON LOGIC
    const handleEnable = (value) => {
        setCUEnable(!value);
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

    // HEADING BG COLOR
    const handleCUHeadingBGColor = (event) => {
        setCUHeadingBGColor(event.target.value);
    };

    // HEADING TEXT COLOR
    const handleCUHeadingTextColor = (event) => {
        setCUHeadingTextColor(event.target.value);
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

    // HANDLE PRODUCT LIST CALLBACK
    const handleProductListCallback = (callbackData) => {
        setCUPLSelection(callbackData.CUPLSelection);
        setCUPLManualSelection(callbackData.CUPLManualSelection);
        setSelectedCollectionID(callbackData.SelectedCollectionID);
        setSelectedProductIDs(callbackData.SelectedProductIDs);
    };

    // HANDLING MAIN JSON DATA START
    var jsonData = {
        enableDrawer: props.customizationData.enableDrawer,
        cartHeader: props.customizationData.cartHeader,
        emptyCart: props.customizationData.emptyCart,
        shippingBar: props.customizationData.shippingBar,
        productList: props.customizationData.productList,
        cartUpsell: {
            CUEnable: CUEnable,
            CULayout: CULayout,
            CUHeadingText: CUHeadingText,
            CUBuyBtnText: CUBuyBtnText,
            CUHeadingFontSize: CUHeadingFontSize,
            CUBodyFontSize: CUBodyFontSize,
            CUBuyBtnFontSize: CUBuyBtnFontSize,
            CUHeadingBGColor: CUHeadingBGColor,
            CUHeadingTextColor: CUHeadingTextColor,
            CUBodyColor: CUBodyColor,
            CUBtnTextColor: CUBtnTextColor,
            CUBtnBGColor: CUBtnBGColor,
            CUBtnTextHoverColor: CUBtnTextHoverColor,
            CUBtnBGHoverColor: CUBtnBGHoverColor,
            CUPLSelection: CUPLSelection,
            CUPLManualSelection: CUPLManualSelection,
            SelectedCollectionID: SelectedCollectionID,
            SelectedProductIDs: SelectedProductIDs,
        },
        bottomSection: props.customizationData.bottomSection,
    };

    useEffect(() => {
        callbackFunction();
    }, [
        CUEnable,
        CULayout,
        CUHeadingText,
        CUBuyBtnText,
        CUHeadingFontSize,
        CUBodyFontSize,
        CUBuyBtnFontSize,
        CUHeadingBGColor,
        CUHeadingTextColor,
        CUBodyColor,
        CUBtnTextColor,
        CUBtnBGColor,
        CUBtnTextHoverColor,
        CUBtnBGHoverColor,
        CUPLSelection,
        CUPLManualSelection,
        SelectedCollectionID,
        SelectedProductIDs,
    ]);

    const callbackFunction = useCallback(() => {
        props.settingDataCallback(jsonData);
    }, [jsonData]);
    // HANDLING MAIN JSON DATA END

    return (
        <Card sectioned>
            <BlockStack gap={200}>
                <Text variant="headingLg" fontWeight="medium">
                    Cart Upsell Settings{" "}
                    <span style={{ verticalAlign: "middle", paddingLeft: 5 }}>
                        <Badge tone="info-strong" icon={MagicIcon}>
                            Premium
                        </Badge>
                    </span>
                </Text>
                <Text
                    variant="headingMd"
                    as="span"
                    fontWeight="regular"
                    tone="subdued"
                >
                    (<strong>Note:</strong> You can utilize this feature only if
                    you have activated the premium plan.)
                </Text>
            </BlockStack>

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

                {CUEnable && (
                    <BlockStack gap="400">
                        <div style={{ margin: "0" }}>
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

                        <div style={{ margin: "0" }}>
                            <Divider borderColor="border" />
                        </div>

                        {/* Text fields */}
                        <FormLayout.Group condensed>
                            {/* Heading Text */}
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

                        <FormLayout.Group condensed>
                            {/* Buy Button Text */}
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

                        {/* Font-Size and radio buttons start*/}
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
                            {/* Buy Button Font Size */}
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

                            {/* Layout */}
                            <BlockStack gap="200">
                                <Text
                                    variant="headingMd"
                                    as="span"
                                    fontWeight="medium"
                                >
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

                            {/* Heading Text Color */}
                            <BlockStack gap="0">
                                <Text
                                    variant="headingMd"
                                    as="span"
                                    fontWeight="medium"
                                >
                                    Heading Text Color
                                </Text>
                                <div className="lm_sticky_color_box">
                                    <input
                                        type="color"
                                        value={CUHeadingTextColor}
                                        onChange={handleCUHeadingTextColor}
                                    />
                                </div>
                            </BlockStack>
                        </FormLayout.Group>

                        <FormLayout.Group condensed>
                            {/* Body Color */}
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
                        </FormLayout.Group>

                        <FormLayout.Group condensed>
                            {/* Button Text Color */}
                            <BlockStack gap="0">
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
                            <BlockStack gap="0">
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
                            <BlockStack gap="0">
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
                            <BlockStack gap="0">
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
                        {/* Colors end */}
                    </BlockStack>
                )}
            </FormLayout>
        </Card>
    );
}
