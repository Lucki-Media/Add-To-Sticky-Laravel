import {
    Checkbox,
    Text,
    Select,
    Divider,
    BlockStack,
    Badge,
    FormLayout,
    RangeSlider,
} from "@shopify/polaris";
import React, { useCallback, useEffect, useState } from "react";
import "../../css/index.css";
import Switch from "react-switch";
import ProductSelection from "./ProductSelection";

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
    /*DISPLAY SETTING START GENERAL SETTINGS*/

    useEffect(() => {
        setCheckMobile(props.checkMobile);
        setCheckDesktop(props.checkDesktop);
        setGsAction(props.gsAction);
        setGsDisplayCondition(props.gsDisplayCondition);
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
    ]);

    var transfer_data = {
        general_settings: {
            homePageProduct: homePageProduct,
            checkMobile: checkMobile,
            checkDesktop: checkDesktop,
            gsAction: gsAction,
            gsDisplayCondition: gsDisplayCondition,
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

            <BlockStack gap="500">
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
                            <div className="lm_sticky_format_style">

                            <FormLayout>
                                <TextField label="Notification Bar " onChange={() => {}} autoComplete="off" />
                                <TextField
                                    type="email"
                                    label="Account email"
                                    onChange={() => {}}
                                    autoComplete="email"
                                />
                                </FormLayout>

                                <Checkbox
                                    label="Bold"
                                    checked={""}
                                    onChange={""}
                                />
                                <br />
                                <Checkbox
                                    label="Italic"
                                    checked={""}
                                    onChange={""}
                                />
                                <br />
                                <Checkbox
                                    label="Underline"
                                    checked={""}
                                    onChange={""}
                                />
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
                                <input type="color" value={""} onChange={""} />
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
                                <input type="color" value={""} onChange={""} />
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
                                Text Hover Color
                            </Text>
                            <div className="lm_sticky_color_box">
                                <input type="color" value={""} onChange={""} />
                            </div>
                        </div>
                        <div>
                            <Text
                                variant="headingMd"
                                as="span"
                                fontWeight="medium"
                            >
                                BG Hover Color
                            </Text>
                            <div className="lm_sticky_color_box">
                                <input type="color" value={""} onChange={""} />
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
                                Width
                            </Text>
                            <div className="font_picker_popup">
                                <RangeSlider
                                    label=""
                                    value=""
                                    min={0}
                                    max={250}
                                    onChange=""
                                    output
                                />
                            </div>
                        </div>
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
                                    value=""
                                    min={30}
                                    max={150}
                                    onChange=""
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
                                Font-size
                            </Text>
                            <div className="font_picker_popup">
                                <RangeSlider
                                    label=""
                                    value=""
                                    min={8}
                                    max={50}
                                    onChange=""
                                    output
                                />
                            </div>
                        </div>
                    </FormLayout.Group>
                </FormLayout>
            </BlockStack>

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
