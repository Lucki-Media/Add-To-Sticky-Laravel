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
    const [CUPLSelection, setCUPLSelection] = useState(
        drawerCartData.cartUpsell.CUPLSelection
    );
    const [CUPLManualSelection, setCUPLManualSelection] = useState(
        drawerCartData.cartUpsell.CUPLManualSelection
    );
    const [SelectedCollectionID, setSelectedCollectionID] = useState(
        drawerCartData.cartUpsell.SelectedCollectionID
    );
    const [SelectedProductIDs, setSelectedProductIDs] = useState(
        drawerCartData.cartUpsell.SelectedProductIDs
    );

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

    // Notification Bar Font Size Handle Event
    // const handleFontSize = (event) => {
    //     console.log("event.target.value");
    //     console.log(event);
    //     setGsNotificationBarFontSize(event.target.value);
    // };

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

    // Notification Bar Height Handle Event
    // const handleHeight = (event) => {
    //     console.log("event.target.value");
    //     console.log(event);
    //     setGsNotificationBarHeight(event);
    // };

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
        setSelectedProductIDs(props.SelectedProductIDs);
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
            SelectedProductIDs: SelectedProductIDs,
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
