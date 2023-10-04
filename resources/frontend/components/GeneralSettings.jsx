import {
    Card,
    Text,
    Checkbox,
    FullscreenBar,
    Icon,
    Layout,
    TextStyle,
    Heading,
    RangeSlider,
    Select,
    RadioButton,
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
// import { Text } from "react-bootstrap/lib/Navbar";
export function GeneralSettings(props) {
    const [settings, setSettings] = useState("0");
    const [data, setData] = useState([]);
    const [enable, setEnable] = useState(true);
    const [defaultTemplate, setDefaultTemplate] = useState(1);
    /*GENERAL SETTINGS CONSTANTS*/
    const [position, setPosition] = useState(props.position);
    const [showGeneralSettings, setShowGeneralSettings] = useState(false);
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
    const [containerHeight, setContainerHeight] = useState(
        props.containerHeight
    );

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
            position: position,
            checkDesktop: checkDesktop,
            checkMobile: checkMobile,
            containerHeight: containerHeight,
            gsAction: gsAction,
            gsBgColor: gsBgColor,
            gsBold: gsBold,
            gsDisplayCondition: gsDisplayCondition,
            gsFontFamily: gsFontFamily,
            gsFontsize: gsFontsize,
            gsItalic: gsItalic,
            gsOffsetValue: gsOffsetValue,
            gsPriceColor: gsPriceColor,
            gsPriceFontsize: gsPriceFontsize,
            gsTitleColor: gsTitleColor,
            gsUnderline: gsUnderline,
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
                        min={50}
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
                <span className="display_setting_subtitle">
                    Background Color
                </span>
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
