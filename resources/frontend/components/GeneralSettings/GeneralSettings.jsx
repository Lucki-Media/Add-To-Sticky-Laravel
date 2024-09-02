import {
    Checkbox,
    Text,
    Select,
    Divider,
    BlockStack,
    Badge,
    FormLayout,
    RangeSlider,
    TextField,
    Card,
    InlineGrid,
    InlineError,
    InlineStack,
    RadioButton,
} from "@shopify/polaris";
import React, { useCallback, useEffect, useState } from "react";
import "../../css/index.css";
import Switch from "react-switch";
import ProductSelection from "./ProductSelection";
import ProductListSelection from "../DrawerSettings/CartUpsellSettings/ProductListSelection";
import drawerCartData from "../../assets/drawerCartData.js";

function GeneralSettings(props) {
    const [productSwitch, setProductSwitch] = useState(
        props.homePageProduct !== "" &&
            props.homePageProduct !== null &&
            props.homePageProduct !== undefined
    );
    const [homePageProduct, setHomePageProduct] = useState(
        props.homePageProduct
    );
    const [checkMobile, setCheckMobile] = useState(props.checkMobile);
    const [checkDesktop, setCheckDesktop] = useState(props.checkDesktop);
    const [gsAction, setGsAction] = useState(props.gsAction);
    const [gsDisplayCondition, setGsDisplayCondition] = useState(
        props.gsDisplayCondition
    );

    const [gsNotificationBarText, setGsNotificationBarText] = useState(
        props.gsNotificationBarText
    );

    const [gsNotificationBarItalic, setGsNotificationBarItalic] = useState(
        props.gsNotificationBarItalic
    );

    const [gsNotificationBarBold, setGsNotificationBarBold] = useState(
        props.gsNotificationBarBold
    );

    const [gsNotificationBarTextColor, setGsNotificationBarTextColor] =
        useState(props.gsNotificationBarTextColor);

    const [gsNotificationBarBgColor, setGsNotificationBarBgColor] = useState(
        props.gsNotificationBarBgColor
    );

    const [gsNotificationBarFontSize, setGsNotificationBarFontSize] = useState(
        props.gsNotificationBarFontSize
    );

    const [gsNotificationBarHeight, setGsNotificationBarHeight] = useState(
        props.gsNotificationBarHeight
    );

    const [enableUpSell, setEnableUpSell] = useState(props.enableUpSell);

    // PRODUCT LIST SELECTION STATES
    const [CUPLSelection, setCUPLSelection] = useState(props.CUPLSelection);

    const [CUPLManualSelection, setCUPLManualSelection] = useState(
        props.CUPLManualSelection
    );
    const [SelectedCollectionID, setSelectedCollectionID] = useState(
        props.SelectedCollectionID
    );
    const [SelectedProductIDs, setSelectedProductIDs] = useState(
        props.SelectedProductIDs
    );

    const [CUHeadingText, setCUHeadingText] = useState(props.CUHeadingText);
    const [CUBuyBtnText, setCUBuyBtnText] = useState(props.CUBuyBtnText);
    const [CUHeadingFontSize, setCUHeadingFontSize] = useState(
        props.CUHeadingFontSize
    );
    const [CUBodyFontSize, setCUBodyFontSize] = useState(props.CUBodyFontSize);

    const [CUBuyBtnFontSize, setCUBuyBtnFontSize] = useState(
        props.CUBuyBtnFontSize
    );
    const [CUBackgroundColor, setCUBackgroundColor] = useState(
        props.CUBackgroundColor
    );
    const [CUHeadingBGColor, setCUHeadingBGColor] = useState(
        props.CUHeadingBGColor
    );
    const [CUHeadingColor, setCUHeadingColor] = useState(props.CUHeadingColor);

    const [CUBodyColor, setCUBodyColor] = useState(props.CUBodyColor);
    const [CUBtnTextColor, setCUBtnTextColor] = useState(props.CUBtnTextColor);
    const [CUBtnBGColor, setCUBtnBGColor] = useState(props.CUBtnBGColor);
    const [CUBtnTextHoverColor, setCUBtnTextHoverColor] = useState(
        props.CUBtnTextHoverColor
    );
    const [CUBtnBGHoverColor, setCUBtnBGHoverColor] = useState(
        props.CUBtnBGHoverColor
    );
    const [CUBorderRadius, setCUBorderRadius] = useState(props.CUBorderRadius);

    // HOME PAGE PRODUCT SWITCH LOGIC
    const handleSwitchChange = (checked) => {
        setProductSwitch(checked);
        setHomePageProduct("");
    };

    /*DISPLAY SETTING START GENERAL SETTINGS*/
    const handlecheckboxMobile = useCallback(
        (newChecked) => setCheckMobile(newChecked),
        []
    );

    const handlecheckboxDesktop = useCallback(
        (newChecked) => setCheckDesktop(newChecked),
        []
    );
    /*DISPLAY SETTING END GENERAL SETTINGS*/

    /*ACTION GENERAL SETTINGS*/
    const handleSelectGSChange = useCallback((value) => setGsAction(value), []);
    const optionsGS = [
        { label: "Go to Cart", value: "1" },
        { label: "Go to Checkout", value: "2" },
        { label: "Stay on Same Page", value: "3" },
    ];

    /*DISPLAY CONDITION GENERAL SETTINGS*/
    const handleConditionChange = useCallback(
        (value) => setGsDisplayCondition(value),
        []
    );
    const conditions = [
        { label: "Always show", value: "1" },
        {
            label: "Only when add to cart is not visible",
            value: "2",
        },
        {
            label: "Only when user has scrolled down and surpassed the 'Add to cart' button",
            value: "3",
        },
    ];

    // Notification Bar Text Field Handle Event
    const handleNbTextFieldChange = useCallback(
        (value) => setGsNotificationBarText(value),
        []
    );

    // Notification Bar Italic Style Handle Event
    const handleItalic = useCallback(
        (newChecked) => setGsNotificationBarItalic(newChecked),
        []
    );

    // Notification Bar Bold Weight Handle Event
    const handleBold = useCallback(
        (newChecked) => setGsNotificationBarBold(newChecked),
        []
    );

    // Notification Bar Text Color Handle Event
    const handleTextColor = (event) => {
        setGsNotificationBarTextColor(event.target.value);
    };

    // Notification Bar Text Color Handle Event
    const handleBgColor = (event) => {
        setGsNotificationBarBgColor(event.target.value);
    };

    const handleFontSize = useCallback(
        (newChecked) => setGsNotificationBarFontSize(newChecked),
        []
    );

    const handleHeight = useCallback(
        (newChecked) => setGsNotificationBarHeight(newChecked),
        []
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
        console.log("CUHeadingText");
        console.log(CUHeadingText);
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

    console.log("CUBodyFontSize");
    console.log(CUBodyFontSize);

    // UPSELL POPUP BUY BUTTON TEXT FONT SIZE
    const handleCUBuyBtnFontSize = useCallback(
        (value) => setCUBuyBtnFontSize(value),
        []
    );

    // UPSELL POPUP HEADING Background COLOR
    const handleCUHeadingBGColor = (val) => {
        setCUHeadingBGColor(val);
    };

    // UPSELL POPUP Body Background COLOR
    const handleCUBackgroundColor = (val) => {
        setCUBackgroundColor(val);
    };

    // UPSELL POPUP HEADING COLOR
    const handleCUHeadingColor = (event) => {
        setCUHeadingColor(event.target.value);
    };

    // UPSELL POPUP BODY COLOR
    const handleCUBodyColor = (event) => {
        setCUBodyColor(event.target.value);
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

    // UPSELL POPUP Border Radius
    const handleCUBorderRadius = (event) => {
        setCUBorderRadius(event.target.value);
    };

    /*DISPLAY SETTING START GENERAL SETTINGS*/

    useEffect(() => {
        setCheckMobile(props.checkMobile);
        setCheckDesktop(props.checkDesktop);
        setGsAction(props.gsAction);
        setGsDisplayCondition(props.gsDisplayCondition);
        setGsNotificationBarText(props.gsNotificationBarText);
        setGsNotificationBarItalic(props.gsNotificationBarItalic);
        setGsNotificationBarBold(props.gsNotificationBarBold);
        setGsNotificationBarTextColor(props.gsNotificationBarTextColor);
        setGsNotificationBarBgColor(props.gsNotificationBarBgColor);
        setGsNotificationBarFontSize(props.gsNotificationBarFontSize);
        setGsNotificationBarHeight(props.gsNotificationBarHeight);
        setEnableUpSell(props.enableUpSell);
        setCUPLSelection(props.CUPLSelection);
        setCUPLManualSelection(props.CUPLManualSelection);
        setSelectedCollectionID(props.SelectedCollectionID);
        setCUHeadingText(props.CUHeadingText);
        setCUBuyBtnText(props.CUBuyBtnText);
        setCUHeadingFontSize(props.CUHeadingFontSize);
        setCUBodyFontSize(props.CUBodyFontSize);
        setCUBuyBtnFontSize(props.CUBuyBtnFontSize);
        setCUBackgroundColor(props.CUBackgroundColor);
        setCUHeadingBGColor(props.CUHeadingBGColor);
        setCUBodyColor(props.CUBodyColor);
        setCUHeadingColor(props.CUHeadingColor);
        setCUBodyColor(props.CUBodyColor);
        setCUBtnTextColor(props.CUBtnTextColor);
        setCUBtnBGColor(props.CUBtnBGColor);
        setCUBtnTextHoverColor(props.CUBtnTextHoverColor);
        setCUBtnBGHoverColor(props.CUBtnBGHoverColor);
        setCUBorderRadius(props.CUBorderRadius);
    }, [props]);

    useEffect(() => {
        callbackFunction();
    }, [
        // IT WILL SEND LATEST DATA OF ALL STATES
        homePageProduct,
        checkMobile,
        checkDesktop,
        gsAction,
        gsDisplayCondition,
        gsNotificationBarText,
        gsNotificationBarItalic,
        gsNotificationBarBold,
        gsNotificationBarTextColor,
        gsNotificationBarBgColor,
        gsNotificationBarFontSize,
        gsNotificationBarHeight,
        enableUpSell,
        CUPLSelection,
        CUPLManualSelection,
        SelectedCollectionID,
        SelectedProductIDs,
        CUHeadingText,
        CUBuyBtnText,
        CUHeadingFontSize,
        CUBodyFontSize,
        CUBuyBtnFontSize,
        CUBackgroundColor,
        CUHeadingBGColor,
        CUHeadingColor,
        CUBodyColor,
        CUBtnTextColor,
        CUBtnBGColor,
        CUBtnTextHoverColor,
        CUBtnBGHoverColor,
        CUBorderRadius,
    ]);

    var transfer_data = {
        general_settings: {
            homePageProduct: homePageProduct,
            checkMobile: checkMobile,
            checkDesktop: checkDesktop,
            gsAction: gsAction,
            gsDisplayCondition: gsDisplayCondition,
            gsNotificationBarText: gsNotificationBarText,
            gsNotificationBarItalic: gsNotificationBarItalic,
            gsNotificationBarBold: gsNotificationBarBold,
            gsNotificationBarTextColor: gsNotificationBarTextColor,
            gsNotificationBarBgColor: gsNotificationBarBgColor,
            gsNotificationBarFontSize: gsNotificationBarFontSize,
            gsNotificationBarHeight: gsNotificationBarHeight,
            enableUpSell: enableUpSell,
            CUPLSelection: CUPLSelection,
            CUPLManualSelection: CUPLManualSelection,
            SelectedCollectionID: SelectedCollectionID,

            CUHeadingText: CUHeadingText,
            CUBuyBtnText: CUBuyBtnText,
            CUHeadingFontSize: CUHeadingFontSize,
            CUBodyFontSize: CUBodyFontSize,
            CUBuyBtnFontSize: CUBuyBtnFontSize,
            CUBackgroundColor: CUBackgroundColor,
            CUHeadingBGColor: CUHeadingBGColor,
            CUHeadingColor: CUHeadingColor,
            CUBodyColor: CUBodyColor,
            CUBtnTextColor: CUBtnTextColor,
            CUBtnBGColor: CUBtnBGColor,
            CUBtnTextHoverColor: CUBtnTextHoverColor,
            CUBtnBGHoverColor: CUBtnBGHoverColor,
            CUBorderRadius: CUBorderRadius,
        },
        design_settings: {
            gsFontFamily: props.gsFontFamily,
            animationEnable: props.animationEnable,
            gsBgColor: props.gsBgColor,
            containerHeight: props.containerHeight,
            gsOffsetValue: props.gsOffsetValue,
            position: props.position,
            gsTitleColor: props.gsTitleColor,
            gsFontsize: props.gsFontsize,
            gsBold: props.gsBold,
            gsItalic: props.gsItalic,
            gsUnderline: props.gsUnderline,
            gsPriceFontsize: props.gsPriceFontsize,
            gsPriceColor: props.gsPriceColor,
            editText: props.editText,
            unavailable: props.unavailable,
            btnWidthValue: props.btnWidthValue,
            btnheightValue: props.btnheightValue,
            btnFontsize: props.btnFontsize,
            btnBorderThickness: props.btnBorderThickness,
            btnBorderRadius: props.btnBorderRadius,
            btnBold: props.btnBold,
            btnItalic: props.btnItalic,
            btnUnderline: props.btnUnderline,
            btnTextColor: props.btnTextColor,
            btnBgColor: props.btnBgColor,
            btnTexthoverColor: props.btnTexthoverColor,
            btnBgHoverColor: props.btnBgHoverColor,
            btnBorderColor: props.btnBorderColor,
            btnBorderHoverColor: props.btnBorderHoverColor,
        },
    };
    const callbackFunction = useCallback(() => {
        props.callback(transfer_data);
    }, [transfer_data]);
    return (
        <div>
            <Text variant="headingLg" fontWeight="medium">
                General Settings
            </Text>

            <div style={{ margin: "15px 0" }}>
                <Divider borderColor="border" />
            </div>

            {/* Device Settings */}
            <BlockStack gap="200">
                <Text variant="headingMd" as="span" fontWeight="medium">
                    Device Settings
                </Text>
                <div className="style__wrapper_div">
                    <Checkbox
                        label="Desktop"
                        checked={checkDesktop}
                        onChange={handlecheckboxDesktop}
                    />
                    <Checkbox
                        label="Mobile"
                        checked={checkMobile}
                        onChange={handlecheckboxMobile}
                    />
                </div>
                <Text
                    variant="headingMd"
                    as="span"
                    fontWeight="regular"
                    tone="subdued"
                >
                    (<strong>Note:</strong> On which device you would like to
                    show Add To Cart Sticky on your store)
                </Text>
            </BlockStack>

            <div style={{ margin: "15px 0" }}>
                <Divider borderColor="border" />
            </div>

            {/* Button Action onclick */}
            <BlockStack gap="200">
                <Text variant="headingMd" as="span" fontWeight="medium">
                    Button Action onclick
                </Text>
                <Select
                    label="Button Action onclick"
                    options={optionsGS}
                    onChange={handleSelectGSChange}
                    value={gsAction}
                    labelHidden
                />
            </BlockStack>

            {gsAction === "3" && (
                <div style={{ margin: "15px 0" }}>
                    <Divider borderColor="border" />
                </div>
            )}

            {/* Notification Bar Settings */}
            {gsAction === "3" && (
                <BlockStack gap="500">
                    <div
                        style={{
                            boxShadow: "rgba(227, 227, 227, 1) 5px 5px",
                            borderRadius: "12px",
                        }}
                    >
                        <Card>
                            <FormLayout>
                                {/* Third row */}
                                <FormLayout.Group condensed>
                                    <div>
                                        <Text
                                            variant="headingMd"
                                            as="span"
                                            fontWeight="medium"
                                        >
                                            Notification Bar Settings
                                        </Text>
                                        <div style={{ margin: "5px 0" }}>
                                            <Divider borderColor="transparent" />
                                        </div>
                                        <FormLayout>
                                            <TextField
                                                value={gsNotificationBarText}
                                                onChange={
                                                    handleNbTextFieldChange
                                                }
                                                placeholder="Add Notification Content"
                                                autoComplete="off"
                                            />
                                        </FormLayout>
                                        <div style={{ margin: "5px 0" }}>
                                            <Divider borderColor="transparent" />
                                        </div>
                                        <div className="lm_sticky_format_style">
                                            <Checkbox
                                                label="Bold"
                                                checked={gsNotificationBarBold}
                                                onChange={handleBold}
                                            />
                                            <br />
                                            <Checkbox
                                                label="Italic"
                                                checked={
                                                    gsNotificationBarItalic
                                                }
                                                onChange={handleItalic}
                                            />
                                            <br />
                                        </div>
                                    </div>
                                </FormLayout.Group>
                                {/* Fourth row */}
                                <FormLayout.Group condensed>
                                    <div>
                                        <Text
                                            variant="headingMd"
                                            as="span"
                                            fontWeight="medium"
                                        >
                                            Text Color
                                        </Text>
                                        <div className="lm_sticky_color_box">
                                            <input
                                                type="color"
                                                value={
                                                    gsNotificationBarTextColor
                                                }
                                                onChange={handleTextColor}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <Text
                                            variant="headingMd"
                                            as="span"
                                            fontWeight="medium"
                                        >
                                            BG Color
                                        </Text>
                                        <div className="lm_sticky_color_box">
                                            <input
                                                type="color"
                                                value={gsNotificationBarBgColor}
                                                onChange={handleBgColor}
                                            />
                                        </div>
                                    </div>
                                </FormLayout.Group>
                                {/* Fifth row */}
                                <FormLayout.Group condensed>
                                    <div>
                                        <Text
                                            variant="headingMd"
                                            as="span"
                                            fontWeight="medium"
                                        >
                                            Font-size
                                        </Text>
                                        <div className="font_picker_popup">
                                            <RangeSlider
                                                label=""
                                                value={
                                                    gsNotificationBarFontSize
                                                }
                                                min={8}
                                                max={30}
                                                onChange={handleFontSize}
                                                output
                                            />
                                        </div>
                                    </div>
                                </FormLayout.Group>
                                <FormLayout.Group condensed>
                                    <div>
                                        <Text
                                            variant="headingMd"
                                            as="span"
                                            fontWeight="medium"
                                        >
                                            Height
                                        </Text>
                                        <div className="font_picker_popup">
                                            <RangeSlider
                                                label=""
                                                value={gsNotificationBarHeight}
                                                min={5}
                                                max={20}
                                                onChange={handleHeight}
                                                output
                                            />
                                        </div>
                                    </div>
                                </FormLayout.Group>
                            </FormLayout>
                            <div style={{ margin: "15px 0" }}>
                                <Divider borderColor="border" />
                            </div>
                            {/* UpSell Popup */}
                            <InlineGrid columns={["twoThirds", "oneThird"]}>
                                <Text
                                    variant="bodyLg"
                                    as="span"
                                    alignment="start"
                                    fontWeight="medium"
                                >
                                    UpSell Popup
                                    {enableUpSell ? (
                                        <span className="lm_sticky_custom_badge_success">
                                            <Badge tone="success">
                                                Enabled
                                            </Badge>
                                        </span>
                                    ) : (
                                        <span className="lm_sticky_custom_badge_critical">
                                            <Badge tone="critical">
                                                Disabled
                                            </Badge>
                                        </span>
                                    )}
                                </Text>
                                <Switch
                                    onChange={handleUpSellSwitchChange}
                                    checked={enableUpSell}
                                    uncheckedIcon={null}
                                    checkedIcon={null}
                                />
                            </InlineGrid>
                            {enableUpSell && (
                                <BlockStack>
                                    <div style={{ margin: "15px 0" }}>
                                        <Divider borderColor="border" />
                                    </div>
                                    {/* Product List Selection */}
                                    <ProductListSelection
                                        productListCallback={
                                            handleProductListCallback
                                        }
                                        CUPLSelection={CUPLSelection}
                                        CUPLManualSelection={
                                            CUPLManualSelection
                                        }
                                        SelectedCollectionID={
                                            SelectedCollectionID
                                        }
                                        SelectedProductIDs={SelectedProductIDs}
                                    />
                                    <div style={{ margin: "15px 0" }}>
                                        <Divider borderColor="border" />
                                    </div>

                                    <Text
                                        variant="headingMd"
                                        as="span"
                                        fontWeight="medium"
                                    >
                                        UpSell Popup Settings
                                    </Text>

                                    <div style={{ margin: "15px 0" }}>
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
                                                onChange={
                                                    handleCUHeadingTextField
                                                }
                                                autoComplete="off"
                                                maxLength={30}
                                                id="CUHeadingText"
                                                placeholder="Example: Recommended Products"
                                                showCharacterCount
                                            />
                                            {(CUHeadingText == "" ||
                                                CUHeadingText == null) && (
                                                <div
                                                    style={{ marginTop: "4px" }}
                                                >
                                                    <InlineError
                                                        message={
                                                            "This field is required"
                                                        }
                                                        fieldID={
                                                            "CUHeadingText"
                                                        }
                                                    />
                                                </div>
                                            )}
                                        </BlockStack>

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
                                                onChange={
                                                    handleCUBuyBtnTextField
                                                }
                                                autoComplete="off"
                                                maxLength={10}
                                                id="CUBuyBtnText"
                                                placeholder="Example: Buy"
                                                showCharacterCount
                                            />
                                            {(CUBuyBtnText == "" ||
                                                CUBuyBtnText == null) && (
                                                <div
                                                    style={{ marginTop: "4px" }}
                                                >
                                                    <InlineError
                                                        message={
                                                            "This field is required"
                                                        }
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
                                                onChange={
                                                    handleCUHeadingFontSize
                                                }
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
                                                onChange={
                                                    handleCUBuyBtnFontSize
                                                }
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
                                                min={5}
                                                max={20}
                                                onChange={handleCUBorderRadius}
                                                output
                                            />
                                        </BlockStack>
                                    </FormLayout.Group>
                                    {/* Font-Size and radio buttons end*/}

                                    {/* Colors start */}
                                    <FormLayout.Group condensed>
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
                                                    onChange={
                                                        handleCUBackgroundColor
                                                    }
                                                />
                                            </div>
                                        </BlockStack>

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
                                                    onChange={
                                                        handleCUHeadingBGColor
                                                    }
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
                                                    onChange={
                                                        handleCUHeadingColor
                                                    }
                                                />
                                            </div>
                                        </BlockStack>

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
                                                    onChange={
                                                        handleCUBtnTextColor
                                                    }
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
                                                    onChange={
                                                        handleCUBtnBGColor
                                                    }
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
                                                    onChange={
                                                        handleCUBtnTextHoverColor
                                                    }
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
                                                    onChange={
                                                        handleCUBtnBGHoverColor
                                                    }
                                                />
                                            </div>
                                        </BlockStack>
                                    </FormLayout.Group>
                                    {/* Colors end */}
                                </BlockStack>
                            )}
                        </Card>
                    </div>
                </BlockStack>
            )}

            <div style={{ margin: "15px 0" }}>
                <Divider borderColor="border" />
            </div>

            {/* Display Condition */}
            <BlockStack gap="200">
                <Text variant="headingMd" as="span" fontWeight="medium">
                    Display Condition
                </Text>
                <Select
                    label="Display Condition"
                    options={conditions}
                    onChange={handleConditionChange}
                    value={gsDisplayCondition}
                    labelHidden
                />
            </BlockStack>

            <div style={{ margin: "15px 0" }}>
                <Divider borderColor="border" />
            </div>

            {/* Show Product on home page */}
            <div className="setting_title">
                <Text
                    variant="bodyLg"
                    as="span"
                    alignment="start"
                    fontWeight="medium"
                >
                    Show specific product on homepage?{" "}
                    {productSwitch ? (
                        <span className="lm_sticky_custom_badge_success">
                            <Badge tone="success">Yes</Badge>
                        </span>
                    ) : (
                        <span className="lm_sticky_custom_badge_critical">
                            <Badge tone="critical">No</Badge>
                        </span>
                    )}
                </Text>
                <Switch
                    onChange={handleSwitchChange}
                    checked={productSwitch}
                    uncheckedIcon={null}
                    checkedIcon={null}
                />
            </div>

            {/* Product Selection */}
            {productSwitch && (
                <ProductSelection
                    homePageProduct={homePageProduct}
                    productSelectionCallBack={(value) =>
                        setHomePageProduct(value)
                    }
                />
            )}
        </div>
    );
}

export default GeneralSettings;
