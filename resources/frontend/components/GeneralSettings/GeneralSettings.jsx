import {
    Card,
    Checkbox,
    Text,
    Select,
    TextField,
    Divider,
    BlockStack,
} from "@shopify/polaris";
import React, { useCallback, useEffect, useState } from "react";
import "../../css/index.css";

function GeneralSettings(props) {
    const [checkMobile, setCheckMobile] = useState(props.checkMobile);
    const [checkDesktop, setCheckDesktop] = useState(props.checkDesktop);
    const [gsAction, setGsAction] = useState(props.gsAction);
    const [gsDisplayCondition, setGsDisplayCondition] = useState(
        props.gsDisplayCondition
    );

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
        checkMobile,
        checkDesktop,
        gsAction,
        gsDisplayCondition,
    ]);

    var transfer_data = {
        general_settings: {
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
        </div>
    );
}

export default GeneralSettings;
