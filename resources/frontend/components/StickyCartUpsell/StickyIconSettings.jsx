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
    const [originalenableSticky, setoriginalEnableSticky] = useState(
        props.originalenableSticky
    );
    const [enableSticky, setEnableSticky] = useState(props.enableSticky);
    const [originaldefaultTemplate, setoriginalDefaultTemplate] = useState(
        props.originaldefaultTemplate
    );
    const [defaultTemplate, setDefaultTemplate] = useState(
        props.defaultTemplate
    );
    const [originalaction, setoriginalAction] = useState(props.originalaction);
    const [action, setAction] = useState(props.action);
    const [originalbtnSize, setoriginalBtnSize] = useState(
        props.originalbtnSize
    );
    const [btnSize, setBtnSize] = useState(props.btnSize);
    const [originalbgColor, setoriginalBgColor] = useState(
        props.originalbgColor
    );
    const [bgColor, setBgColor] = useState(props.bgColor);
    const [originalbgHoverColor, setoriginalBgHoverColor] = useState(
        props.originalbgHoverColor
    );
    const [bgHoverColor, setBgHoverColor] = useState(props.bgHoverColor);
    const [originalborderSize, setoriginalBorderSize] = useState(
        props.originalborderSize
    );
    const [borderSize, setBorderSize] = useState(props.borderSize);
    const [originalborderColor, setoriginalBorderColor] = useState(
        props.originalborderColor
    );
    const [borderColor, setBorderColor] = useState(props.borderColor);
    const [originalborderHoverColor, setoriginalBorderHoverColor] = useState(
        props.originalborderHoverColor
    );
    const [borderHoverColor, setBorderHoverColor] = useState(
        props.borderHoverColor
    );
    const [originalpositionTop, setoriginalPositionTop] = useState(
        props.originalpositionTop
    );
    const [positionTop, setPositionTop] = useState(props.positionTop);
    const [originalpositionLeft, setoriginalPositionLeft] = useState(
        props.originalpositionLeft
    );
    const [positionLeft, setPositionLeft] = useState(props.positionLeft);
    const [originaliconSize, setoriginalIconSize] = useState(
        props.originaliconSize
    );
    const [iconSize, setIconSize] = useState(props.iconSize);
    const [originaliconColor, setoriginalIconColor] = useState(
        props.originaliconColor
    );
    const [iconColor, setIconColor] = useState(props.iconColor);
    const [originaliconHoverColor, setoriginalIconHoverColor] = useState(
        props.originaliconHoverColor
    );
    const [iconHoverColor, setIconHoverColor] = useState(props.iconHoverColor);
    const [originalenableCount, setoriginalEnableCount] = useState(
        props.originalenableCount
    );
    const [enableCount, setEnableCount] = useState(props.enableCount);
    const [numberCount, setNumberCount] = useState(props.numberCount);
    const [originalcountSize, setoriginalCountSize] = useState(
        props.originalcountSize
    );
    const [countSize, setCountSize] = useState(props.countSize);
    const [originalcountFontSize, setoriginalCountFontSize] = useState(
        props.originalcountFontSize
    );
    const [countFontSize, setCountFontSize] = useState(props.countFontSize);
    const [originalcountColor, setoriginalCountColor] = useState(
        props.originalcountColor
    );
    const [countColor, setCountColor] = useState(props.countColor);
    const [originalcountHoverColor, setoriginalCountHoverColor] = useState(
        props.originalcountHoverColor
    );
    const [countHoverColor, setCountHoverColor] = useState(
        props.countHoverColor
    );
    const [originalcountBgColor, setoriginalCountBgColor] = useState(
        props.originalcountBgColor
    );
    const [countBgColor, setCountBgColor] = useState(props.countBgColor);
    const [originalcountBgHoverColor, setoriginalCountBgHoverColor] = useState(
        props.originalcountBgHoverColor
    );
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
        setUnsavedChanges(isEqual(!value, originalenableSticky));
    };

    //ENABLE COUNT SHOW LOGIC
    const handlecheckbox = (value) => {
        setEnableCount(!value);
        setUnsavedChanges(isEqual(!value, originalenableCount));
    };

    //ICON SELECT
    const handleChange = useCallback(
        (value) => {
            setUnsavedChanges(isEqual(value, originaldefaultTemplate));
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
        [props.stickyCartData, originaldefaultTemplate]
    );

    // ACTION
    const handleSelectChange = useCallback(
        (value) => {
            setAction(value), setUnsavedChanges(isEqual(value, originalaction));
        },
        [originalaction]
    );
    const options = [
        { label: "Go to Cart", value: "1" },
        { label: "Go to Checkout", value: "2" },
    ];

    //SIZE
    const handleRangeSliderChange = useCallback(
        (value) => {
            setBtnSize(value),
                setUnsavedChanges(isEqual(value, originalbtnSize));
        },

        [originalbtnSize]
    );

    // BORDER SIZE
    const handleBorderSliderChange = useCallback(
        (value) => {
            setBorderSize(value),
                setUnsavedChanges(isEqual(value, originalborderSize));
        },
        [originalborderSize]
    );

    // BG COLOR
    const handleBGColor = (event) => {
        setBgColor(event.target.value);
        setUnsavedChanges(isEqual(event.target.value, originalbgColor));
    };

    // BG HOVER COLOR
    const handleBGHoverColor = (event) => {
        setBgHoverColor(event.target.value);
        setUnsavedChanges(isEqual(event.target.value, originalbgHoverColor));
    };

    // BORDER COLOR
    const handleBorderColor = (event) => {
        setBorderColor(event.target.value);
        setUnsavedChanges(isEqual(event.target.value, originalborderColor));
    };

    // BORDER HOVER COLOR
    const handleBorderHoverColor = (event) => {
        setBorderHoverColor(event.target.value);
        setUnsavedChanges(
            isEqual(event.target.value, originalborderHoverColor)
        );
    };
    //TOP
    const handleEditTopField = useCallback(
        (value) => {
            setPositionTop(value),
                setUnsavedChanges(isEqual(value, originalpositionTop));
        },

        [originalpositionTop]
    );
    //LEFT
    const handleEditLeftField = useCallback(
        (value) => {
            setPositionLeft(value),
                setUnsavedChanges(isEqual(value, originalpositionLeft));
        },

        [originalpositionLeft]
    );
    //ICON SIZE
    const handleIconSliderChange = useCallback(
        (value) => {
            setIconSize(value),
                setUnsavedChanges(isEqual(value, originaliconSize));
        },

        [originaliconSize]
    );

    // ICON COLOR
    const handleIconColor = (event) => {
        setIconColor(event.target.value);
        setUnsavedChanges(isEqual(event.target.value, originaliconColor));
    };

    // ICON HOVER COLOR
    const handleIconHoverColor = (event) => {
        setIconHoverColor(event.target.value);
        setUnsavedChanges(isEqual(event.target.value, originaliconHoverColor));
    };

    // COUNT SIZE
    const handleCountSliderChange = useCallback(
        (value) => {
            setCountSize(value),
                setUnsavedChanges(isEqual(value, originalcountSize));
        },

        [originalcountSize]
    );
    // COUNT FONT
    const handleCountFontSliderChange = useCallback(
        (value) => {
            setCountFontSize(value),
                setUnsavedChanges(isEqual(value, originalcountFontSize));
        },

        [originalcountFontSize]
    );

    // COUNT COLOR
    const handleCountColor = (event) => {
        setCountColor(event.target.value);
        setUnsavedChanges(isEqual(event.target.value, originalcountColor));
    };

    // COUNT HOVER COLOR
    const handleCountHoverColor = (event) => {
        setCountHoverColor(event.target.value);
        setUnsavedChanges(isEqual(event.target.value, originalcountHoverColor));
    };

    // COUNT BG  COLOR
    const handleBGCountColor = (event) => {
        setCountBgColor(event.target.value);
        setUnsavedChanges(isEqual(event.target.value, originalcountBgColor));
    };

    // COUNT BG HOVER COLOR
    const handleBGCountHoverColor = (event) => {
        setCountBgHoverColor(event.target.value);
        setUnsavedChanges(
            isEqual(event.target.value, originalcountBgHoverColor)
        );
    };

    useEffect(() => {
        callbackFunction();
    }, [
        // IT WILL SEND LATEST DATA OF ALL STATES
        originalenableSticky,
        enableSticky,
        originaldefaultTemplate,
        defaultTemplate,
        originalaction,
        action,
        originalbtnSize,
        btnSize,
        originalbgColor,
        bgColor,
        originalbgHoverColor,
        bgHoverColor,
        originalborderSize,
        borderSize,
        originalborderColor,
        borderColor,
        originalborderHoverColor,
        borderHoverColor,
        originalpositionTop,
        positionTop,
        originalpositionLeft,
        positionLeft,
        originaliconSize,
        iconSize,
        originaliconColor,
        iconColor,
        originaliconHoverColor,
        iconHoverColor,
        originalenableCount,
        enableCount,
        numberCount,
        originalcountSize,
        countSize,
        originalcountFontSize,
        countFontSize,
        originalcountColor,
        countColor,
        originalcountHoverColor,
        countHoverColor,
        originalcountBgColor,
        countBgColor,
        originalcountBgHoverColor,
        countBgHoverColor,
        unsavedChanges,
    ]);

    var transfer_data = {
        originalenableSticky: originalenableSticky,
        enableSticky: enableSticky,
        originaldefaultTemplate: originaldefaultTemplate,
        defaultTemplate: defaultTemplate,
        originalaction: originalaction,
        action: action,
        originalbtnSize: originalbtnSize,
        btnSize: btnSize,
        originalbgColor: originalbgColor,
        bgColor: bgColor,
        originalbgHoverColor: originalbgHoverColor,
        bgHoverColor: bgHoverColor,
        originalborderSize: originalborderSize,
        borderSize: borderSize,
        originalborderColor: originalborderColor,
        borderColor: borderColor,
        originalborderHoverColor: originalborderHoverColor,
        borderHoverColor: borderHoverColor,
        originalpositionTop: originalpositionTop,
        positionTop: positionTop,
        originalpositionLeft: originalpositionLeft,
        positionLeft: positionLeft,
        originaliconSize: originaliconSize,
        iconSize: iconSize,
        originaliconColor: originaliconColor,
        iconColor: iconColor,
        originaliconHoverColor: originaliconHoverColor,
        iconHoverColor: iconHoverColor,
        originalenableCount: originalenableCount,
        enableCount: enableCount,
        numberCount: numberCount,
        originalcountSize: originalcountSize,
        countSize: countSize,
        originalcountFontSize: originalcountFontSize,
        countFontSize: countFontSize,
        originalcountColor: originalcountColor,
        countColor: countColor,
        originalcountHoverColor: originalcountHoverColor,
        countHoverColor: countHoverColor,
        originalcountBgColor: originalcountBgColor,
        countBgColor: countBgColor,
        originalcountBgHoverColor: originalcountBgHoverColor,
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
