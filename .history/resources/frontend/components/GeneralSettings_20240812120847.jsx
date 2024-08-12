import {
    Card,
    Checkbox,
    FullscreenBar,
    Icon,
    Layout,
    RangeSlider,
    Select,
    RadioButton,
    Text,
    Heading,
} from "@shopify/polaris";
import React, { useCallback, useEffect, useState } from "react";
import {
    ChevronRightMinor,
    ChecklistAlternateMajor,
    Columns2Major,
    TransactionMajor,
    ToolsMajor,
} from "@shopify/polaris-icons";
import "../css/index.css";
import { ColorPlate } from "./colorPlate";
import FontPicker from "font-picker-react";
export function GeneralSettings(props) {
    const [settings, setSettings] = useState("0");
    /*GENERAL SETTINGS CONSTANTS*/
    const [position, setPosition] = useState(props.position);
    const [checkMobile, setCheckMobile] = useState(props.checkMobile);
    const [checkDesktop, setCheckDesktop] = useState(props.checkDesktop);
    const [gsBold, setGsBold] = useState(props.gsBold);
    const [gsFontsize, setGsFontsize] = useState(props.gsFontsize);
    const [gsPriceFontsize, setGsPriceFontsize] = useState(
        props.gsPriceFontsize
    );
    const [gsItalic, setGsItalic] = useState(props.gsItalic);
    const [gsUnderline, setGsUnderLine] = useState(props.gsUnderline);
    const [gsFontFamily, setGsFontFamily] = useState(props.gsFontFamily);
    const [gsTitleColor, setGsTitleColor] = useState(props.gsTitleColor);
    const [gsPriceColor, setGsPriceColor] = useState(props.gsPriceColor);
    const [gsBgColor, setGsBgColor] = useState(props.gsBgColor);
    const [gsOffsetValue, setGsOffsetValue] = useState(props.gsOffsetValue);
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

    const [containerHeight, setContainerHeight] = useState(
        props.containerHeight
    );

    // console.log(gsBgColor);
    useEffect(() => {
        setPosition(props.position);
        setCheckMobile(props.checkMobile);
        setCheckDesktop(props.checkDesktop);
        setGsBold(props.gsBold);
        setGsFontsize(props.gsFontsize);
        setGsPriceFontsize(props.gsPriceFontsize);
        setGsItalic(props.gsItalic);
        setGsUnderLine(props.gsUnderline);
        setGsFontFamily(props.gsFontFamily);
        setGsTitleColor(props.gsTitleColor);
        setGsPriceColor(props.gsPriceColor);
        setGsBgColor(props.gsBgColor);
        setGsOffsetValue(props.gsOffsetValue);
        setGsAction(props.gsAction);
        setGsDisplayCondition(props.gsDisplayCondition);
        setGsNotificationBarText(props.gsNotificationBarText);
        setGsNotificationBarItalic(props.gsNotificationBarItalic);
        setGsNotificationBarBold(props.gsNotificationBarBold);
        setGsNotificationBarTextColor(props.gsNotificationBarTextColor);
        setGsNotificationBarBgColor(props.gsNotificationBarBgColor);
        setContainerHeight(props.containerHeight);
    }, [props]);

    // CALLBACK FUNCTION TO SEND PROPS START
    useEffect(() => {
        callbackFunction();
    }, [
        // IT WILL SEND LATEST DATA OF ALL STATES
        position,
        checkDesktop,
        checkMobile,
        containerHeight,
        gsAction,
        gsBgColor,
        gsBold,
        gsDisplayCondition,
        gsNotificationBarText,
        gsNotificationBarItalic,
        gsNotificationBarBold,
        gsNotificationBarTextColor,
        gsNotificationBarBgColor,
        gsFontFamily,
        gsFontsize,
        gsItalic,
        gsOffsetValue,
        gsPriceColor,
        gsPriceFontsize,
        gsTitleColor,
        gsUnderline,
    ]);

    const callbackFunction = useCallback(() => {
        props.callback({
            enable: props.enable,
            animationEnable: props.animationEnable,
            //GENERAL
            position: position,
            checkDesktop: checkDesktop,
            checkMobile: checkMobile,
            containerHeight: containerHeight,
            gsAction: gsAction,
            gsBgColor: gsBgColor,
            gsBold: gsBold,
            gsDisplayCondition: gsDisplayCondition,
            gsNotificationBarText: gsNotificationBarText,
            gsNotificationBarItalic: gsNotificationBarItalic,
            gsNotificationBarBold: gsNotificationBarBold,
            gsFontFamily: gsFontFamily,
            gsFontsize: gsFontsize,
            gsItalic: gsItalic,
            gsOffsetValue: gsOffsetValue,
            gsPriceColor: gsPriceColor,
            gsPriceFontsize: gsPriceFontsize,
            gsTitleColor: gsTitleColor,
            gsUnderline: gsUnderline,
            //BUYNOW
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
        });
    }, [
        position,
        checkDesktop,
        checkMobile,
        containerHeight,
        gsAction,
        gsBgColor,
        gsBold,
        gsDisplayCondition,
        gsNotificationBarText,
        gsNotificationBarItalic,
        gsNotificationBarBold,
        gsFontFamily,
        gsFontsize,
        gsItalic,
        gsOffsetValue,
        gsPriceColor,
        gsPriceFontsize,
        gsTitleColor,
        gsUnderline,
    ]);
    // CALLBACK FUNCTION TO SEND PROPS END

    //  HANDLE NAVIGATION ON CLICK ON BACK BUTTON START
    const handleActionClick = useCallback(() => {
        if (settings !== "0") {
            setSettings("0");
        } else {
            props.OnReturnToSidebar("0");
        }
    });

    const navigateToSettings = (submenu) => {
        setSettings(submenu);
    };
    //  HANDLE NAVIGATION ON CLICK ON BACK BUTTON END

    /*STYLE PART START*/
    /*FONT FAMILY GENERAL SETTINGS*/
    const handleFontChange = (value) => {
        setGsFontFamily(value.family);
    };

    /*TITLE FONT SIZE GENERAL SETTINGS*/
    const handleRangeSliderChange = useCallback(
        (value) => setGsFontsize(value),
        []
    );

    /*PRICE FONT SIZE GENERAL SETTINGS*/
    const handlePriceRangeSliderChange = useCallback(
        (value) => setGsPriceFontsize(value),
        []
    );

    /*TITLE STYLE GENERAL SETTINGS*/
    const handleBold = useCallback((newChecked) => setGsBold(newChecked), []);
    const handleItalic = useCallback(
        (newChecked) => setGsItalic(newChecked),
        []
    );
    const handleUnderline = useCallback(
        (newChecked) => setGsUnderLine(newChecked),
        []
    );
    /*TITLE STYLE GENERAL SETTINGS*/

    /*HEIGHT BUY NOW*/
    const handleHeightSliderChange = useCallback(
        (value) => setContainerHeight(value),
        []
    );
    /*HEIGHT BUY NOW*/

    /*STYLE PART END*/

    /*LAYOUT PART START*/
    /*POSITION GENERAL SETTINGS*/
    const handlePositionChange = (key) => {
        setPosition(key);
    };
    /*POSITION GENERAL SETTINGS*/

    /*OFFSET GENERAL SETTINGS*/
    const handleOffsetSliderChange = useCallback(
        (value) => setGsOffsetValue(value),
        []
    );
    /*LAYOUT PART END*/

    /*ACTION GENERAL SETTINGS*/
    const handleSelectChange = useCallback((value) => setGsAction(value), []);
    const options = [
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
    const handlecheckboxMobile = useCallback(
        (newChecked) => setCheckMobile(newChecked),
        []
    );

    const handlecheckboxDesktop = useCallback(
        (newChecked) => setCheckDesktop(newChecked),
        []
    );
    /*DISPLAY SETTING END GENERAL SETTINGS*/

    // COLOR CHANGE HANDLES START GENERAL SETTINGS*/
    // TITLE COLOR
    const handleTitleColor = useCallback((value) => setGsTitleColor(value), []);

    // PRICE COLOR
    const handlePriceColor = useCallback((value) => setGsPriceColor(value), []);

    // PRICE COLOR
    const handleBGColor = useCallback((value) => setGsBgColor(value), []);

    // RENDER GENERAL SETTINGS OPTIONS
    const renderSettingsOptions = () => (
        <div>
            <div
                className="general_setting_title"
                onClick={() => navigateToSettings("1")}
            >
                <Layout>
                    <Layout.Section>
                        <Card sectioned>
                            <div className="setting_title">
                                <div style={{ display: "flex" }}>
                                    <Icon source={ToolsMajor} />
                                    <span className="show_sticky_span">
                                        Display Settings
                                    </span>
                                </div>
                                <span>
                                    {<Icon source={ChevronRightMinor} />}
                                </span>
                            </div>
                        </Card>
                    </Layout.Section>
                </Layout>
            </div>
            <div
                className="general_setting_title"
                onClick={() => navigateToSettings("2")}
            >
                <Layout>
                    <Layout.Section>
                        <Card sectioned>
                            <div className="setting_title">
                                <div style={{ display: "flex" }}>
                                    <Icon source={ChecklistAlternateMajor} />
                                    <span className="show_sticky_span">
                                        Style
                                    </span>
                                </div>
                                <span>
                                    {<Icon source={ChevronRightMinor} />}
                                </span>
                            </div>
                        </Card>
                    </Layout.Section>
                </Layout>
            </div>
            <div
                className="general_setting_title"
                onClick={() => navigateToSettings("3")}
            >
                <Layout>
                    <Layout.Section>
                        <Card sectioned>
                            <div className="setting_title">
                                <div style={{ display: "flex" }}>
                                    <Icon source={Columns2Major} />
                                    <span className="show_sticky_span">
                                        Layout
                                    </span>
                                </div>
                                <span>
                                    {<Icon source={ChevronRightMinor} />}
                                </span>
                            </div>
                        </Card>
                    </Layout.Section>
                </Layout>
            </div>
            <div
                className="general_setting_title"
                onClick={() => navigateToSettings("4")}
            >
                <Layout>
                    <Layout.Section>
                        <Card sectioned>
                            <div className="setting_title">
                                <div style={{ display: "flex" }}>
                                    <Icon source={TransactionMajor} />
                                    <span className="show_sticky_span">
                                        Action
                                    </span>
                                </div>
                                <span>
                                    {<Icon source={ChevronRightMinor} />}
                                </span>
                            </div>
                        </Card>
                    </Layout.Section>
                </Layout>
            </div>
        </div>
    );

    // RENDER DISPLAY SETTINGS OPTIONS
    const renderDisplaySettingsOptions = () => (
        <div>
            <div className="settings___title">
                <Heading variant="headingLg" as="h5">
                    Display Settings
                </Heading>
            </div>

            {/* POPUP TITLE TEXT */}
            <div className="style__wrapper_div">
                <Checkbox
                    label="Desktop"
                    checked={checkDesktop}
                    onChange={handlecheckboxDesktop}
                />
                <br />
                <Checkbox
                    label="Mobile"
                    checked={checkMobile}
                    onChange={handlecheckboxMobile}
                />
            </div>
        </div>
    );
    // RENDER DISPLAY SETTINGS OPTIONS
    const renderStyleSettingsOptions = () => (
        <div>
            <div className="settings___title">
                <Heading variant="headingLg" as="h5">
                    Style Settings
                </Heading>
            </div>
            {/* font family */}
            <div className="style__wrapper_div">
                <span className="display_setting_subtitle">Font Family </span>
                <div className="font_picker_popup">
                    <FontPicker
                        apiKey="AIzaSyBRCzvluQdkcyQkKHPjLwltLe2HrkUd5Bs"
                        activeFontFamily={gsFontFamily}
                        onChange={handleFontChange}
                    />
                </div>
            </div>

            {/* Title Font-size */}
            <div className="style__wrapper_div">
                <span className="display_setting_subtitle">
                    Title Font-size
                </span>
                <div className="font_picker_popup">
                    <RangeSlider
                        label={`${gsFontsize} px`}
                        value={gsFontsize}
                        min={8}
                        max={40}
                        onChange={handleRangeSliderChange}
                        output
                    />
                </div>
            </div>

            {/* Price Font-size */}
            <div className="style__wrapper_div">
                <span className="display_setting_subtitle">
                    Price Font-size
                </span>
                <div className="font_picker_popup">
                    <RangeSlider
                        label={`${gsPriceFontsize} px`}
                        value={gsPriceFontsize}
                        min={8}
                        max={40}
                        onChange={handlePriceRangeSliderChange}
                        output
                    />
                </div>
            </div>

            <div className="style__wrapper_div">
                <span className="display_setting_subtitle">Title Style</span>
                <div className="">
                    <Checkbox
                        label="Bold"
                        checked={gsBold}
                        onChange={handleBold}
                    />
                    <br />
                    <Checkbox
                        label="Italic"
                        checked={gsItalic}
                        onChange={handleItalic}
                    />
                    <br />
                    <Checkbox
                        label="Underline"
                        checked={gsUnderline}
                        onChange={handleUnderline}
                    />
                </div>
            </div>

            {/* Title Color */}
            <div className="style__wrapper_div">
                <span className="display_setting_subtitle">Title Color</span>
                <div>
                    <ColorPlate
                        defaultColor={gsTitleColor}
                        onChildResult={handleTitleColor}
                    />
                </div>
            </div>

            {/* Height */}
            <div className="style__wrapper_div">
                <span className="display_setting_subtitle">Height</span>
                <div className="font_picker_popup">
                    <RangeSlider
                        label={`${containerHeight} px`}
                        value={containerHeight}
                        min={70}
                        max={150}
                        onChange={handleHeightSliderChange}
                        output
                    />
                </div>
            </div>

            {/* Price Color */}
            <div className="style__wrapper_div">
                <span className="display_setting_subtitle">Price Color</span>
                <div>
                    <ColorPlate
                        defaultColor={gsPriceColor}
                        onChildResult={handlePriceColor}
                    />
                </div>
            </div>

            {/* Background Color */}
            <div className="style__wrapper_div">
                <span className="display_setting_subtitle">BG Color</span>
                <div>
                    <ColorPlate
                        defaultColor={gsBgColor}
                        onChildResult={handleBGColor}
                    />
                </div>
            </div>
        </div>
    );

    // RENDER LAYOUT SETTINGS OPTIONS
    const renderActionSettingsOptions = () => (
        <div>
            <div className="settings___title">
                <Heading variant="headingLg" as="h5">
                    Action
                </Heading>
            </div>

            <div className="style__wrapper_div">
                <span className="display_setting_subtitle">Action</span>
                <div className="display_select_drop_down">
                    <Select
                        options={options}
                        onChange={handleSelectChange}
                        value={gsAction}
                    />
                </div>
            </div>

            {/* Display Condition */}
            <div className="style__wrapper_div">
                <span className="display_setting_subtitle">
                    Display Condition
                </span>
                <div className="display_select_drop_down">
                    <Select
                        options={conditions}
                        onChange={handleConditionChange}
                        value={gsDisplayCondition}
                    />
                </div>
            </div>
        </div>
    );

    // RENDER LAYOUT SETTINGS OPTIONS
    const renderLayoutSettingsOptions = () => (
        <div>
            <div className="settings___title">
                <Heading variant="headingLg" as="h5">
                    Layout
                </Heading>
            </div>

            {/* Position */}
            <div className="style__wrapper_div">
                <span className="display_setting_subtitle">Position</span>
                <div>
                    <RadioButton
                        label={"Top"}
                        id={"Top"}
                        checked={position === "Top"}
                        name="position"
                        onChange={() => {
                            handlePositionChange("Top");
                        }}
                    />
                    <br />
                    <RadioButton
                        label={"Bottom"}
                        id={"Bottom"}
                        checked={position === "Bottom"}
                        name="position"
                        onChange={() => {
                            handlePositionChange("Bottom");
                        }}
                    />
                </div>
            </div>

            {/* Offset */}
            <div className="style__wrapper_div">
                <span className="display_setting_subtitle">Offset</span>
                <div className="font_picker_popup">
                    <RangeSlider
                        label={`${gsOffsetValue} px`}
                        value={gsOffsetValue}
                        min={0}
                        max={250}
                        onChange={handleOffsetSliderChange}
                        output
                    />
                </div>
            </div>
        </div>
    );
    return (
        <>
            <FullscreenBar onAction={handleActionClick}>
                <p className="fullscreen_title">General Settings</p>
            </FullscreenBar>

            {settings === "0" && renderSettingsOptions()}

            {settings === "1" && renderDisplaySettingsOptions()}

            {settings === "2" && renderStyleSettingsOptions()}

            {settings === "3" && renderLayoutSettingsOptions()}

            {settings === "4" && renderActionSettingsOptions()}
        </>
    );
}
