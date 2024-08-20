import {
    Badge,
    BlockStack,
    Card,
    Divider,
    FormLayout,
    InlineError,
    RangeSlider,
    Text,
    TextField,
} from "@shopify/polaris";
import React, { useCallback, useEffect, useState } from "react";
import Switch from "react-switch";
import "../../css/index.css";

export default function ShippingBarSettings(props) {
    const [FSBenable, setFSBenable] = useState(
        props.customizationData.shippingBar.FSBenable
    );
    const [FSBShippingTarget, setFSBShippingTarget] = useState(
        props.customizationData.shippingBar.FSBShippingTarget
    );
    const [FSBReminderText, setFSBReminderText] = useState(
        props.customizationData.shippingBar.FSBReminderText
    );
    const [FSBWinningText, setFSBWinningText] = useState(
        props.customizationData.shippingBar.FSBWinningText
    );
    const [FSBSecondaryText, setFSBSecondaryText] = useState(
        props.customizationData.shippingBar.FSBSecondaryText
    );
    const [FSBPrimaryFontSize, setFSBPrimaryFontSize] = useState(
        props.customizationData.shippingBar.FSBPrimaryFontSize
    );
    const [FSBSecondaryFontSize, setFSBSecondaryFontSize] = useState(
        props.customizationData.shippingBar.FSBSecondaryFontSize
    );
    const [FSBColor, setFSBColor] = useState(
        props.customizationData.shippingBar.FSBColor
    );

    // ENABLE SHIPPING BAR BUTTON LOGIC
    const handleEnable = (value) => {
        setFSBenable(!value);
        // setUnsavedchanges(isEqual(!value, props.originalenableSticky));
    };

    // SHIPPING TARGET
    const handleFSBShippingTargetField = (val) => {
        setFSBShippingTarget(val);
    };

    // REMINDER TEXT
    const handleFSBReminderTextField = (val) => {
        setFSBReminderText(val);
    };

    // WINNING TEXT
    const handleFSBWinningTextField = (val) => {
        setFSBWinningText(val);
    };

    // SECONDARY TEXT
    const handleFSBSecondaryTextField = (val) => {
        setFSBSecondaryText(val);
    };

    // PRIMARY FONT SIZE
    const handleFSBPrimaryFontSize = useCallback(
        (value) => setFSBPrimaryFontSize(value),
        []
    );

    // SECONDARY FONT SIZE
    const handleFSBSecondaryFontSize = useCallback(
        (value) => setFSBSecondaryFontSize(value),
        []
    );

    // COLOR
    const handleFSBColor = (event) => {
        setFSBColor(event.target.value);
    };

    // HANDLING MAIN JSON DATA START
    var jsonData = {
        enableDrawer: props.customizationData.enableDrawer,
        cartHeader: props.customizationData.cartHeader,
        emptyCart: props.customizationData.emptyCart,
        shippingBar: {
            FSBenable: FSBenable,
            FSBShippingTarget: FSBShippingTarget,
            FSBReminderText: FSBReminderText,
            FSBWinningText: FSBWinningText,
            FSBSecondaryText: FSBSecondaryText,
            FSBPrimaryFontSize: FSBPrimaryFontSize,
            FSBSecondaryFontSize: FSBSecondaryFontSize,
            FSBColor: FSBColor,
        },
        productList: props.customizationData.productList,
        cartUpsell: props.customizationData.cartUpsell,
        bottomSection: props.customizationData.bottomSection,
    };

    useEffect(() => {
        callbackFunction();
    }, [
        FSBenable,
        FSBShippingTarget,
        FSBReminderText,
        FSBWinningText,
        FSBSecondaryText,
        FSBPrimaryFontSize,
        FSBSecondaryFontSize,
        FSBColor,
    ]);

    const callbackFunction = useCallback(() => {
        props.settingDataCallback(jsonData);
    }, [jsonData]);
    // HANDLING MAIN JSON DATA END

    return (
        <Card sectioned>
            <Text variant="headingLg" fontWeight="medium">
                Free Shipping Bar Settings
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
                            Free Shipping Bar is{" "}
                            {FSBenable ? (
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
                                handleEnable(FSBenable);
                            }}
                            checked={FSBenable}
                            uncheckedIcon={null}
                            checkedIcon={null}
                        />
                    </div>
                </FormLayout.Group>

                {FSBenable && (
                    <BlockStack gap="400">
                        <div style={{ margin: "0" }}>
                            <Divider borderColor="border" />
                        </div>

                        <FormLayout.Group condensed>
                            {/* Shipping Target */}
                            <BlockStack gap="200">
                                <Text
                                    variant="headingMd"
                                    as="span"
                                    fontWeight="medium"
                                >
                                    Shipping Target
                                </Text>
                                <TextField
                                    error={
                                        FSBShippingTarget == "" ||
                                        FSBShippingTarget == null ||
                                        FSBShippingTarget < 1 ||
                                        FSBShippingTarget > 10000
                                    }
                                    value={FSBShippingTarget ?? ""}
                                    onChange={handleFSBShippingTargetField}
                                    autoComplete="off"
                                    min={1}
                                    max={10000}
                                    type="number"
                                    id="FSBShippingTarget"
                                />
                                {(FSBShippingTarget == "" ||
                                    FSBShippingTarget == null ||
                                    FSBShippingTarget < 1 ||
                                    FSBShippingTarget > 10000) && (
                                    <div style={{ marginTop: "4px" }}>
                                        <InlineError
                                            message={
                                                "Enter Valid Data in this field"
                                            }
                                            fieldID={"FSBShippingTarget"}
                                        />
                                    </div>
                                )}
                            </BlockStack>
                        </FormLayout.Group>

                        <FormLayout.Group condensed>
                            {/* Reminder Text */}
                            <BlockStack gap="200">
                                <Text
                                    variant="headingMd"
                                    as="span"
                                    fontWeight="medium"
                                >
                                    Reminder Text
                                </Text>
                                <TextField
                                    error={
                                        FSBReminderText == "" ||
                                        FSBReminderText == null
                                    }
                                    value={FSBReminderText ?? ""}
                                    onChange={handleFSBReminderTextField}
                                    autoComplete="off"
                                    maxLength={60}
                                    id="FSBReminderText"
                                    placeholder="Example: Little Far to get free shipping"
                                    showCharacterCount
                                />
                                {(FSBReminderText == "" ||
                                    FSBReminderText == null) && (
                                    <div style={{ marginTop: "4px" }}>
                                        <InlineError
                                            message={"This field is required"}
                                            fieldID={"FSBReminderText"}
                                        />
                                    </div>
                                )}
                            </BlockStack>
                        </FormLayout.Group>

                        <FormLayout.Group condensed>
                            {/* Winning Text */}
                            <BlockStack gap="200">
                                <Text
                                    variant="headingMd"
                                    as="span"
                                    fontWeight="medium"
                                >
                                    Winning Text
                                </Text>
                                <TextField
                                    error={
                                        FSBWinningText == "" ||
                                        FSBWinningText == null
                                    }
                                    value={FSBWinningText ?? ""}
                                    onChange={handleFSBWinningTextField}
                                    autoComplete="off"
                                    maxLength={60}
                                    id="FSBWinningText"
                                    placeholder="Example: Yayy! You won Free Shipping"
                                    showCharacterCount
                                />
                                {(FSBWinningText == "" ||
                                    FSBWinningText == null) && (
                                    <div style={{ marginTop: "4px" }}>
                                        <InlineError
                                            message={"This field is required"}
                                            fieldID={"FSBWinningText"}
                                        />
                                    </div>
                                )}
                            </BlockStack>
                        </FormLayout.Group>

                        <FormLayout.Group condensed>
                            {/* Secondary Text */}
                            <BlockStack gap="200">
                                <Text
                                    variant="headingMd"
                                    as="span"
                                    fontWeight="medium"
                                >
                                    Secondary Text
                                </Text>
                                <TextField
                                    error={
                                        FSBSecondaryText == "" ||
                                        FSBSecondaryText == null
                                    }
                                    value={FSBSecondaryText ?? ""}
                                    onChange={handleFSBSecondaryTextField}
                                    autoComplete="off"
                                    maxLength={60}
                                    id="FSBSecondaryText"
                                    placeholder="Example: Add products to receive free shipping"
                                    showCharacterCount
                                />
                                {(FSBSecondaryText == "" ||
                                    FSBSecondaryText == null) && (
                                    <div style={{ marginTop: "4px" }}>
                                        <InlineError
                                            message={"This field is required"}
                                            fieldID={"FSBSecondaryText"}
                                        />
                                    </div>
                                )}
                            </BlockStack>
                        </FormLayout.Group>

                        <FormLayout.Group condensed>
                            {/* Primary Font Size */}
                            <BlockStack gap="0">
                                <Text
                                    variant="headingMd"
                                    as="span"
                                    fontWeight="medium"
                                >
                                    Primary Font-size
                                </Text>
                                <RangeSlider
                                    label={`${FSBPrimaryFontSize} px`}
                                    value={FSBPrimaryFontSize}
                                    min={14}
                                    max={30}
                                    onChange={handleFSBPrimaryFontSize}
                                    output
                                />
                            </BlockStack>

                            {/* Secondary Font Size */}
                            <BlockStack gap="0">
                                <Text
                                    variant="headingMd"
                                    as="span"
                                    fontWeight="medium"
                                >
                                    Secondary Font-size
                                </Text>
                                <RangeSlider
                                    label={`${FSBSecondaryFontSize} px`}
                                    value={FSBSecondaryFontSize}
                                    min={12}
                                    max={24}
                                    onChange={handleFSBSecondaryFontSize}
                                    output
                                />
                            </BlockStack>
                        </FormLayout.Group>

                        <FormLayout.Group condensed>
                            {/* Color */}
                            <BlockStack gap="0">
                                <Text
                                    variant="headingMd"
                                    as="span"
                                    fontWeight="medium"
                                >
                                    Color
                                </Text>
                                <div className="lm_sticky_color_box">
                                    <input
                                        type="color"
                                        value={FSBColor}
                                        onChange={handleFSBColor}
                                    />
                                </div>
                            </BlockStack>
                        </FormLayout.Group>
                    </BlockStack>
                )}
            </FormLayout>
        </Card>
    );
}
