import {
    Badge,
    BlockStack,
    Card,
    Divider,
    FormLayout,
    RangeSlider,
    Select,
    Text,
} from "@shopify/polaris";
import React, { useCallback, useEffect, useState } from "react";
import Switch from "react-switch";
import "../../css/index.css";
import { isEqual } from "lodash";

export default function StickyIconSettings(props) {
    const [enableSticky, setEnableSticky] = useState(props.enableSticky);
    const [defaultTemplate, setDefaultTemplate] = useState(
        props.defaultTemplate
    );
    const [action, setAction] = useState(props.action);
    const [btnSize, setBtnSize] = useState(props.btnSize);
    const [bgColor, setBgColor] = useState(props.bgColor);
    const [bgHoverColor, setBgHoverColor] = useState(props.bgHoverColor);
    const [borderSize, setBorderSize] = useState(props.borderSize);
    const [borderColor, setBorderColor] = useState(props.borderColor);
    const [borderHoverColor, setBorderHoverColor] = useState(
        props.borderHoverColor
    );
    const [positionTop, setPositionTop] = useState(props.positionTop);
    const [positionLeft, setPositionLeft] = useState(props.positionLeft);
    const [iconSize, setIconSize] = useState(props.iconSize);
    const [iconColor, setIconColor] = useState(props.iconColor);
    const [iconHoverColor, setIconHoverColor] = useState(props.iconHoverColor);
    const [enableCount, setEnableCount] = useState(props.enableCount);
    const [numberCount, setNumberCount] = useState(props.numberCount);
    const [countSize, setCountSize] = useState(props.countSize);
    const [countFontSize, setCountFontSize] = useState(props.countFontSize);
    const [countColor, setCountColor] = useState(props.countColor);
    const [countHoverColor, setCountHoverColor] = useState(
        props.countHoverColor
    );
    const [countBgColor, setCountBgColor] = useState(props.countBgColor);
    const [countBgHoverColor, setCountBgHoverColor] = useState(
        props.countBgHoverColor
    );
    const [unsavedChanges, setUnsavedChanges] = useState(props.unsavedChanges);

    const templateOptions = [
        { label: "Shopping Cart", value: "1" },
        { label: "Cart With Plus", value: "2" },
        { label: "Cart With Down Arrow", value: "3" },
        { label: "Shopping Basket", value: "4" },
        { label: "Shopping Bag", value: "5" },
    ];

    // ENABLE BUTTON LOGIC
    const handleEnable = (value) => {
        setEnableSticky(!value);
        setUnsavedChanges(isEqual(!value, props.originalenableSticky));
    };

    //ENABLE COUNT SHOW LOGIC
    const handlecheckbox = (value) => {
        setEnableCount(!value);
        setUnsavedChanges(isEqual(!value, props.originalenableCount));
    };

    //ICON SELECT
    const handleChange = useCallback(
        (value) => {
            setUnsavedChanges(isEqual(value, props.originaldefaultTemplate));
            var currentData;
            switch (value) {
                case "1":
                    currentData = props.stickyCartData.sticky_template_1;
                    break;
                case "2":
                    currentData = props.stickyCartData.sticky_template_2;
                    break;
                case "3":
                    currentData = props.stickyCartData.sticky_template_3;
                    break;
                case "4":
                    currentData = props.stickyCartData.sticky_template_4;
                    break;
                case "5":
                    currentData = props.stickyCartData.sticky_template_5;
                    break;
                default:
                    currentData = props.stickyCartData.current_template;
                    break;
            }
            // console.log("currentData");
            // console.log(currentData);
            setEnableSticky(props.stickyCartData.enableSticky);
            setAction(currentData.action);
            setBtnSize(currentData.btnSize);
            setBgColor(currentData.bgColor);
            setBgHoverColor(currentData.bgHoverColor);
            setBorderSize(currentData.borderSize);
            setBorderColor(currentData.borderColor);
            setBorderHoverColor(currentData.borderHoverColor);
            setPositionTop(currentData.positionTop);
            setPositionLeft(currentData.positionLeft);
            setIconSize(currentData.iconSize);
            setIconColor(currentData.iconColor);
            setIconHoverColor(currentData.iconHoverColor);
            setEnableCount(currentData.enableCount);
            setNumberCount(currentData.numberCount);
            setCountSize(currentData.countSize);
            setCountFontSize(currentData.countFontSize);
            setCountColor(currentData.countColor);
            setCountHoverColor(currentData.countHoverColor);
            setCountBgColor(currentData.countBgColor);
            setCountBgHoverColor(currentData.countBgHoverColor);
        },
        [props.stickyCartData, props.originaldefaultTemplate]
    );

    // ACTION
    const handleSelectChange = useCallback(
        (value) => {
            setAction(value),
                setUnsavedChanges(isEqual(value, props.originalaction));
        },
        [props.originalaction]
    );
    const options = [
        { label: "Go to Cart", value: "1" },
        { label: "Go to Checkout", value: "2" },
    ];

    //SIZE
    const handleRangeSliderChange = useCallback(
        (value) => {
            setBtnSize(value),
                setUnsavedChanges(isEqual(value, props.originalbtnSize));
        },

        [props.originalbtnSize]
    );

    // BORDER SIZE
    const handleBorderSliderChange = useCallback(
        (value) => {
            setBorderSize(value),
                setUnsavedChanges(isEqual(value, props.originalborderSize));
        },
        [props.originalborderSize]
    );

    // BG COLOR
    const handleBGColor = (event) => {
        setBgColor(event.target.value);
        setUnsavedChanges(isEqual(event.target.value, props.originalbgColor));
    };

    // BG HOVER COLOR
    const handleBGHoverColor = (event) => {
        setBgHoverColor(event.target.value);
        setUnsavedChanges(
            isEqual(event.target.value, props.originalbgHoverColor)
        );
    };

    // BORDER COLOR
    const handleBorderColor = (event) => {
        setBorderColor(event.target.value);
        setUnsavedChanges(
            isEqual(event.target.value, props.originalborderColor)
        );
    };

    // BORDER HOVER COLOR
    const handleBorderHoverColor = (event) => {
        setBorderHoverColor(event.target.value);
        setUnsavedChanges(
            isEqual(event.target.value, props.originalborderHoverColor)
        );
    };
    //TOP
    const handleEditTopField = useCallback(
        (value) => {
            setPositionTop(value),
                setUnsavedChanges(isEqual(value, props.originalpositionTop));
        },

        [props.originalpositionTop]
    );
    //LEFT
    const handleEditLeftField = useCallback(
        (value) => {
            setPositionLeft(value),
                setUnsavedChanges(isEqual(value, props.originalpositionLeft));
        },

        [props.originalpositionLeft]
    );
    //ICON SIZE
    const handleIconSliderChange = useCallback(
        (value) => {
            setIconSize(value),
                setUnsavedChanges(isEqual(value, props.originaliconSize));
        },

        [props.originaliconSize]
    );

    // ICON COLOR
    const handleIconColor = (event) => {
        setIconColor(event.target.value);
        setUnsavedChanges(isEqual(event.target.value, props.originaliconColor));
    };

    // ICON HOVER COLOR
    const handleIconHoverColor = (event) => {
        setIconHoverColor(event.target.value);
        setUnsavedChanges(
            isEqual(event.target.value, props.originaliconHoverColor)
        );
    };

    // COUNT SIZE
    const handleCountSliderChange = useCallback(
        (value) => {
            setCountSize(value),
                setUnsavedChanges(isEqual(value, props.originalcountSize));
        },

        [props.originalcountSize]
    );
    // COUNT FONT
    const handleCountFontSliderChange = useCallback(
        (value) => {
            setCountFontSize(value),
                setUnsavedChanges(isEqual(value, props.originalcountFontSize));
        },

        [props.originalcountFontSize]
    );

    // COUNT COLOR
    const handleCountColor = (event) => {
        setCountColor(event.target.value);
        setUnsavedChanges(
            isEqual(event.target.value, props.originalcountColor)
        );
    };

    // COUNT HOVER COLOR
    const handleCountHoverColor = (event) => {
        setCountHoverColor(event.target.value);
        setUnsavedChanges(
            isEqual(event.target.value, props.originalcountHoverColor)
        );
    };

    // COUNT BG  COLOR
    const handleBGCountColor = (event) => {
        setCountBgColor(event.target.value);
        setUnsavedChanges(
            isEqual(event.target.value, props.originalcountBgColor)
        );
    };

    // COUNT BG HOVER COLOR
    const handleBGCountHoverColor = (event) => {
        setCountBgHoverColor(event.target.value);
        setUnsavedChanges(
            isEqual(event.target.value, props.originalcountBgHoverColor)
        );
    };

    useEffect(() => {
        callbackFunction();
    }, [
        // IT WILL SEND LATEST DATA OF ALL STATES
        enableSticky,
        defaultTemplate,
        action,
        btnSize,
        bgColor,
        bgHoverColor,
        borderSize,
        borderColor,
        borderHoverColor,
        positionTop,
        positionLeft,
        iconSize,
        iconColor,
        iconHoverColor,
        enableCount,
        numberCount,
        countSize,
        countFontSize,
        countColor,
        countHoverColor,
        countBgColor,
        countBgHoverColor,
        unsavedChanges,
    ]);

    var transfer_data = {
        enableSticky: enableSticky,
        defaultTemplate: defaultTemplate,
        action: action,
        btnSize: btnSize,
        bgColor: bgColor,
        bgHoverColor: bgHoverColor,
        borderSize: borderSize,
        borderColor: borderColor,
        borderHoverColor: borderHoverColor,
        positionTop: positionTop,
        positionLeft: positionLeft,
        iconSize: iconSize,
        iconColor: iconColor,
        iconHoverColor: iconHoverColor,
        enableCount: enableCount,
        numberCount: numberCount,
        countSize: countSize,
        countFontSize: countFontSize,
        countColor: countColor,
        countHoverColor: countHoverColor,
        countBgColor: countBgColor,
        countBgHoverColor: countBgHoverColor,
        unsavedChanges: unsavedChanges,
    };
    const callbackFunction = useCallback(() => {
        props.iconCallBack(transfer_data);
    }, [transfer_data]);

    return (
        <BlockStack gap="400">
            {/* Sticky Enable */}
            <Card>
                <div className="setting_title">
                    <Text
                        variant="bodyLg"
                        as="span"
                        alignment="start"
                        fontWeight="medium"
                    >
                        Sticky Cart is{" "}
                        {enableSticky ? (
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
                            handleEnable(enableSticky);
                        }}
                        checked={enableSticky}
                        uncheckedIcon={null}
                        checkedIcon={null}
                    />
                </div>
            </Card>

            {/* Select Template */}
            <Card>
                <BlockStack gap="200">
                    <Text
                        variant="bodyLg"
                        as="span"
                        alignment="start"
                        fontWeight="medium"
                    >
                        Select Template
                    </Text>
                    <Select
                        label="Select Template"
                        options={templateOptions}
                        onChange={(value) => {
                            setDefaultTemplate(value);
                            handleChange(value);
                        }}
                        value={defaultTemplate}
                        labelHidden
                    />
                </BlockStack>
            </Card>

            {/* General Settings */}
            <Card sectioned>
                <Text variant="headingLg" fontWeight="medium">
                    General Settings
                </Text>

                <div style={{ margin: "15px 0" }}>
                    <Divider borderColor="border" />
                </div>

                {/* Action */}
                <BlockStack gap="200">
                    <Text variant="headingMd" as="span" fontWeight="medium">
                        Action
                    </Text>
                    <Select
                        label="Action"
                        options={options}
                        onChange={handleSelectChange}
                        value={action}
                        labelHidden
                    />
                    <Text
                        variant="headingMd"
                        as="span"
                        fontWeight="regular"
                        tone="subdued"
                    >
                        (<strong>Note:</strong> You can utilize this feature
                        when the Drawer Cart is inactive.)
                    </Text>
                </BlockStack>

                <div style={{ margin: "15px 0" }}>
                    <Divider borderColor="border" />
                </div>

                <FormLayout>
                    <FormLayout.Group condensed>
                        <div>
                            <Text
                                variant="headingMd"
                                as="span"
                                fontWeight="medium"
                            >
                                Size
                            </Text>
                            <div className="font_picker_popup">
                                <RangeSlider
                                    label={`${btnSize} px`}
                                    value={btnSize}
                                    min={10}
                                    max={100}
                                    onChange={handleRangeSliderChange}
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
                                Border Size
                            </Text>
                            <div className="font_picker_popup">
                                <RangeSlider
                                    label={`${borderSize} px`}
                                    value={borderSize}
                                    min={0}
                                    max={10}
                                    onChange={handleBorderSliderChange}
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
                                BG Color
                            </Text>
                            <div className="lm_sticky_color_box">
                                <input
                                    type="color"
                                    value={bgColor}
                                    onChange={handleBGColor}
                                />
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
                                <input
                                    type="color"
                                    value={bgHoverColor}
                                    onChange={handleBGHoverColor}
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
                                Border Color
                            </Text>
                            <div className="lm_sticky_color_box">
                                <input
                                    type="color"
                                    value={borderColor}
                                    onChange={handleBorderColor}
                                />
                            </div>
                        </div>
                        <div>
                            <Text
                                variant="headingMd"
                                as="span"
                                fontWeight="medium"
                            >
                                Border Hover Color
                            </Text>
                            <div className="lm_sticky_color_box">
                                <input
                                    type="color"
                                    value={borderHoverColor}
                                    onChange={handleBorderHoverColor}
                                />
                            </div>
                        </div>
                    </FormLayout.Group>
                </FormLayout>
            </Card>

            {/* Position Settings */}
            <Card sectioned>
                <Text variant="headingLg" fontWeight="medium">
                    Position Settings
                </Text>

                <div style={{ margin: "15px 0" }}>
                    <Divider borderColor="border" />
                </div>

                <FormLayout>
                    <FormLayout.Group condensed>
                        <div>
                            <Text
                                variant="headingMd"
                                as="span"
                                fontWeight="medium"
                            >
                                Top
                            </Text>
                            <div className="font_picker_popup">
                                <RangeSlider
                                    label={`${positionTop}%`}
                                    value={positionTop}
                                    min={1}
                                    max={90}
                                    onChange={handleEditTopField}
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
                                Left
                            </Text>
                            <div className="font_picker_popup">
                                <RangeSlider
                                    label={`${positionLeft}%`}
                                    value={positionLeft}
                                    min={0}
                                    max={95}
                                    onChange={handleEditLeftField}
                                    output
                                />
                            </div>
                        </div>
                    </FormLayout.Group>
                </FormLayout>
            </Card>

            {/* Icon Settings */}
            <Card sectioned>
                <Text variant="headingLg" fontWeight="medium">
                    Icon Settings
                </Text>

                <div style={{ margin: "15px 0" }}>
                    <Divider borderColor="border" />
                </div>

                <div className="style__wrapper_div">
                    <Text variant="headingMd" as="span" fontWeight="medium">
                        Icon Size
                    </Text>
                    <div className="font_picker_popup">
                        <RangeSlider
                            label={`${iconSize} px`}
                            value={iconSize}
                            min={11}
                            max={50}
                            onChange={handleIconSliderChange}
                            output
                        />
                    </div>
                </div>

                <FormLayout>
                    <FormLayout.Group condensed>
                        <div>
                            <Text
                                variant="headingMd"
                                as="span"
                                fontWeight="medium"
                            >
                                Icon Color
                            </Text>
                            <div className="lm_sticky_color_box">
                                <input
                                    type="color"
                                    value={iconColor}
                                    onChange={handleIconColor}
                                />
                            </div>
                        </div>
                        <div>
                            <Text
                                variant="headingMd"
                                as="span"
                                fontWeight="medium"
                            >
                                Icon Hover Color
                            </Text>
                            <div className="lm_sticky_color_box">
                                <input
                                    type="color"
                                    value={iconHoverColor}
                                    onChange={handleIconHoverColor}
                                />
                            </div>
                        </div>
                    </FormLayout.Group>
                </FormLayout>
            </Card>

            {/* Cart Count Settings */}
            <Card sectioned>
                <Text variant="headingLg" fontWeight="medium">
                    Cart Count Settings
                </Text>

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
                        Sticky Cart Count is{" "}
                        {enableCount ? (
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
                            handlecheckbox(enableCount);
                        }}
                        checked={enableCount}
                        uncheckedIcon={null}
                        checkedIcon={null}
                    />
                </div>

                <div style={{ margin: "15px 0" }}>
                    <Divider borderColor="border" />
                </div>

                <FormLayout>
                    <FormLayout.Group condensed>
                        <div>
                            <Text
                                variant="headingMd"
                                as="span"
                                fontWeight="medium"
                            >
                                Size
                            </Text>

                            <div className="font_picker_popup">
                                <RangeSlider
                                    label={`${countSize} px`}
                                    value={countSize}
                                    min={8}
                                    max={40}
                                    onChange={handleCountSliderChange}
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
                                Font Size
                            </Text>

                            <div className="font_picker_popup">
                                <RangeSlider
                                    label={`${countFontSize} px`}
                                    value={countFontSize}
                                    min={8}
                                    max={40}
                                    onChange={handleCountFontSliderChange}
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
                                Count Color
                            </Text>

                            <div className="lm_sticky_color_box">
                                <input
                                    type="color"
                                    value={countColor}
                                    onChange={handleCountColor}
                                />
                            </div>
                        </div>
                        <div>
                            <Text
                                variant="headingMd"
                                as="span"
                                fontWeight="medium"
                            >
                                Count Hover Color
                            </Text>

                            <div className="lm_sticky_color_box">
                                <input
                                    type="color"
                                    value={countHoverColor}
                                    onChange={handleCountHoverColor}
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
                                BG Color
                            </Text>

                            <div className="lm_sticky_color_box">
                                <input
                                    type="color"
                                    value={countBgColor}
                                    onChange={handleBGCountColor}
                                />
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
                                <input
                                    type="color"
                                    value={countBgHoverColor}
                                    onChange={handleBGCountHoverColor}
                                />
                            </div>
                        </div>
                    </FormLayout.Group>
                </FormLayout>
            </Card>
        </BlockStack>
    );
}
