import {
    Card,
    Checkbox,
    FullscreenBar,
    Icon,
    Layout,
    TextStyle,
    Text,
    RangeSlider,
    Select,
    RadioButton,
    TextField,
    Heading,
} from "@shopify/polaris";
import React, { useCallback, useEffect, useState } from "react";
import {
    ChevronRightMinor,
    ChecklistAlternateMajor,
    BuyButtonVerticalLayoutMajor,
    TextMajor,
} from "@shopify/polaris-icons";
import "../css/index.css";
import { ColorPlate } from "./colorPlate";
import FontPicker from "font-picker-react";

export function BuyNowSettings(props) {
    const [settings, setSettings] = useState("0");
    /*BUY NOW CONSTANTS*/
    // const [soldOut, setSoldOut] = useState("Sold out");
    const [editText, setEditText] = useState(props.editText);
    const [unavailable, setUnavailable] = useState(props.unavailable);
    const [btnWidthValue, setBtnWidthValue] = useState(props.btnWidthValue);
    const [btnheightValue, setBtnHeightValue] = useState(props.btnheightValue);
    const [btnFontsize, setBtnFontsize] = useState(props.btnFontsize);
    const [btnBorderThickness, setBtnBorderThickness] = useState(
        props.btnBorderThickness
    );
    const [btnBorderRadius, setBtnBorderRadius] = useState(
        props.btnBorderRadius
    );
    const [btnBold, setBtnBold] = useState(props.btnBold);
    const [btnItalic, setBtnItalic] = useState(props.btnItalic);
    const [btnUnderline, setBtnUnderline] = useState(props.btnUnderline);
    const [btnTextColor, setBtnTextColor] = useState(props.btnTextColor);
    const [btnBgColor, setBtnBgColor] = useState(props.btnBgColor);
    const [btnTexthoverColor, setBtnTexthoverColor] = useState(
        props.btnTexthoverColor
    );
    const [btnBgHoverColor, setBtnBgHoverColor] = useState(
        props.btnBgHoverColor
    );
    const [btnBorderColor, setBtnBorderColor] = useState(props.btnBorderColor);
    const [btnBorderHoverColor, setBtnBorderHoverColor] = useState(
        props.btnBorderHoverColor
    );

    useEffect(() => {
        setEditText(props.editText);
        setUnavailable(props.unavailable);
        setBtnWidthValue(props.btnWidthValue);
        setBtnHeightValue(props.btnheightValue);
        setBtnFontsize(props.btnFontsize);
        setBtnBorderThickness(props.btnBorderThickness);
        setBtnBorderRadius(props.btnBorderRadius);
        setBtnBold(props.btnBold);
        setBtnItalic(props.btnItalic);
        setBtnUnderline(props.btnUnderline);
        setBtnTextColor(props.btnTextColor);
        setBtnBgColor(props.btnBgColor);
        setBtnTexthoverColor(props.btnTexthoverColor);
        setBtnBgHoverColor(props.btnBgHoverColor);
        setBtnBorderColor(props.btnBorderColor);
        setBtnBorderHoverColor(props.btnBorderHoverColor);
    }, [props]);

    // CALLBACK FUNCTION TO SEND PROPS START
    useEffect(() => {
        callbackFunction();
    }, [
        // IT WILL SEND LATEST DATA OF ALL STATES
        editText,
        unavailable,
        btnWidthValue,
        btnheightValue,
        btnFontsize,
        btnBorderThickness,
        btnBorderRadius,
        btnBold,
        btnItalic,
        btnUnderline,
        btnTextColor,
        btnBgColor,
        btnTexthoverColor,
        btnBgHoverColor,
        btnBorderColor,
        btnBorderHoverColor,
    ]);

    const callbackFunction = useCallback(() => {
        props.callback({
            enable: props.enable,
            animationEnable: props.animationEnable,
            //BUYNOW
            editText: editText,
            unavailable: unavailable,
            btnWidthValue: btnWidthValue,
            btnheightValue: btnheightValue,
            btnFontsize: btnFontsize,
            btnBorderThickness: btnBorderThickness,
            btnBorderRadius: btnBorderRadius,
            btnBold: btnBold,
            btnItalic: btnItalic,
            btnUnderline: btnUnderline,
            btnTextColor: btnTextColor,
            btnBgColor: btnBgColor,
            btnTexthoverColor: btnTexthoverColor,
            btnBgHoverColor: btnBgHoverColor,
            btnBorderColor: btnBorderColor,
            btnBorderHoverColor: btnBorderHoverColor,
            //GENERAL
            position: props.position,
            checkMobile: props.checkMobile,
            checkDesktop: props.checkDesktop,
            gsBold: props.gsBold,
            gsFontsize: props.gsFontsize,
            gsPriceFontsize: props.gsPriceFontsize,
            gsItalic: props.gsItalic,
            gsUnderline: props.gsUnderline,
            gsFontFamily: props.gsFontFamily,
            gsTitleColor: props.gsTitleColor,
            gsPriceColor: props.gsPriceColor,
            gsBgColor: props.gsBgColor,
            gsOffsetValue: props.gsOffsetValue,
            gsAction: props.gsAction,
            gsDisplayCondition: props.gsDisplayCondition,
            gsNotificationBarText: props.gsNotificationBarText,
            gsNotificationBarItalic: props.gsNotificationBarItalic,
            gsNotificationBarBold: props.gsNotificationBarBold,
            gsNotificationBarTextColor: props.gsNotificationBarTextColor,
            gsNotificationBarBgColor: props.gsNotificationBarBgColor,
            gsNotificationBarFontSize: props.gsNotificationBarFontSize,
            gsNotificationBarHeight: props.gsNotificationBarHeight,
            containerHeight: props.containerHeight,
            enableUpSell: props.enableUpSell,
            CUPLSelection: props.CUPLSelection,
            CUPLManualSelection: props.CUPLManualSelection,
            SelectedCollectionID: props.SelectedCollectionID,
            SelectedProductIDs: props.SelectedProductIDs,
            CUHeadingText: props.CUHeadingText,
            CUBuyBtnText: props.CUBuyBtnText,
            CUHeadingFontSize: props.CUHeadingFontSize,
            CUBodyFontSize: props.CUBodyFontSize,
            CUBuyBtnFontSize: props.CUBuyBtnFontSize,
            CUBackgroundColor: props.CUBackgroundColor,
            CUHeadingBGColor: props.CUHeadingBGColor,
            CUHeadingColor: props.CUHeadingColor,
            CUBodyColor: props.CUBodyColor,
            CUBodyTextColor: props.CUBodyTextColor,
            CUBtnTextColor: props.CUBtnTextColor,
            CUBtnBGColor: props.CUBtnBGColor,
            CUBtnTextHoverColor: props.CUBtnTextHoverColor,
            CUBtnBGHoverColor: props.CUBtnBGHoverColor,
            CUBorderRadius: props.CUBorderRadius,
            USPosition: props.USPosition,
        });
    }, [
        editText,
        unavailable,
        btnWidthValue,
        btnheightValue,
        btnFontsize,
        btnBorderThickness,
        btnBorderRadius,
        btnBold,
        btnItalic,
        btnUnderline,
        btnTextColor,
        btnBgColor,
        btnTexthoverColor,
        btnBgHoverColor,
        btnBorderColor,
        btnBorderHoverColor,
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

    /*BUY NOW BTN TEXT START*/
    // EDIT TEXT
    const handleEditTextField = (val) => {
        setEditText(val);
    };
    // SOLD OUT
    // const handleSoldOutTextField = (val) => {
    //     setSoldOut(val);
    // };
    // UNAVAILABLE
    const handleUnavailableTextField = (val) => {
        setUnavailable(val);
    };
    /*BUY NOW BTN TEXT END*/

    /*BUY NOW BTN STYLE START*/
    // WIDTH
    const handleWidthSliderChange = useCallback(
        (value) => setBtnWidthValue(value),
        []
    );
    // BUY NOW BTN HEIGHT
    const handleBuyButtonHeightSliderChange = useCallback(
        (value) => setBtnHeightValue(value),
        []
    );
    //BUY NOW  FONT SIZE
    const handleFontSizeSliderChange = useCallback(
        (value) => setBtnFontsize(value),
        []
    );
    // BUY NOW  STYLE
    const handleBoldButton = useCallback(
        (newChecked) => setBtnBold(newChecked),
        []
    );
    const handleItalicButton = useCallback(
        (newChecked) => setBtnItalic(newChecked),
        []
    );
    const handleUnderlineButton = useCallback(
        (newChecked) => setBtnUnderline(newChecked),
        []
    );
    // BORDER THIKNESS
    const handleBorderSliderChange = useCallback(
        (value) => setBtnBorderThickness(value),
        []
    );

    // BORDER RADIUS
    const handleRadiusSliderChange = useCallback(
        (value) => setBtnBorderRadius(value),
        []
    );
    /*BUY NOW BTN STYLE END*/

    // BTN TEXT COLOR
    const handlebtnTextColor = useCallback(
        (value) => setBtnTextColor(value),
        []
    );

    // TEXT HOVER COLOR
    const handletexthoverColor = useCallback(
        (value) => setBtnTexthoverColor(value),
        []
    );

    // BG HOVER COLOR
    const handlebgHoverColor = useCallback(
        (value) => setBtnBgHoverColor(value),
        []
    );

    // BTN BG COLOR
    const handlebtnBGColor = useCallback((value) => setBtnBgColor(value), []);

    // BORDER COLOR
    const handleborderColor = useCallback(
        (value) => setBtnBorderColor(value),
        []
    );

    // BORDER HOVER COLOR
    const handlebordeHoverColor = useCallback(
        (value) => setBtnBorderHoverColor(value),
        []
    );
    // COLOR CHANGE HANDLES END

    // RENDER BUT NOW SETTINGS OPTIONS
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
                                    <Icon source={TextMajor} />
                                    <span className="show_sticky_span">
                                        Text
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
                                    <Icon
                                        source={BuyButtonVerticalLayoutMajor}
                                    />
                                    <span className="show_sticky_span">
                                        Border
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

    // RENDER TEXT SETTINGS OPTIONS
    const renderTextSettingsOptions = () => (
        <div>
            <div className="settings___title">
                <Heading variant="headingLg" as="h5">
                    Text Settings
                </Heading>
            </div>

            <div className="style__wrapper_div">
                <span className="display_setting_subtitle">Edit Text</span>
                <div className="buy_now__textfield">
                    <TextField
                        value={editText}
                        onChange={handleEditTextField}
                        autoComplete="off"
                        maxLength={15}
                        placeholder="Example: BUY NOW"
                        showCharacterCount
                    />
                </div>
            </div>

            {/* Sold out */}
            {/* <div className="style__wrapper_div">
                <span className="display_setting_subtitle">
                    Sold out
                </span>
                <div className="buy_now__textfield">
                    <TextField
                        value={soldOut}
                        onChange={
                            handleSoldOutTextField
                        }
                        maxLength={15}
                        autoComplete="off"
                        placeholder="Example: Sold out"
                        showCharacterCount
                    />
                </div>
            </div> */}

            {/* Unavailable */}
            <div className="style__wrapper_div">
                <span className="display_setting_subtitle">Unavailable</span>
                <div className="buy_now__textfield">
                    <TextField
                        value={unavailable}
                        onChange={handleUnavailableTextField}
                        autoComplete="off"
                        maxLength={15}
                        placeholder="Example: Unavailable"
                        showCharacterCount
                    />
                </div>
            </div>
        </div>
    );

    // RENDER SYLE SETTINGS OPTIONS
    const renderStyleSettingsOptions = () => (
        <div>
            <div className="settings___title">
                <Heading variant="headingLg" as="h5">
                    Style Settings
                </Heading>
            </div>

            <div className="style__wrapper_div">
                <span className="display_setting_subtitle">Width</span>
                <div className="font_picker_popup">
                    <RangeSlider
                        label={`${btnWidthValue} px`}
                        value={btnWidthValue}
                        min={0}
                        max={250}
                        onChange={handleWidthSliderChange}
                        output
                    />
                </div>
            </div>

            {/* Height */}
            <div className="style__wrapper_div">
                <span className="display_setting_subtitle">Height</span>
                <div className="font_picker_popup">
                    <RangeSlider
                        label={`${btnheightValue} px`}
                        value={btnheightValue}
                        min={0}
                        max={250}
                        onChange={handleBuyButtonHeightSliderChange}
                        output
                    />
                </div>
            </div>

            {/* Font-size */}
            <div className="style__wrapper_div">
                <span className="display_setting_subtitle">Font-size</span>
                <div className="font_picker_popup">
                    <RangeSlider
                        label={`${btnFontsize} px`}
                        value={btnFontsize}
                        min={8}
                        max={50}
                        onChange={handleFontSizeSliderChange}
                        output
                    />
                </div>
            </div>

            {/* Style */}
            <div className="style__wrapper_div">
                <span className="display_setting_subtitle">Style</span>
                <div className="">
                    <Checkbox
                        label="Bold"
                        checked={btnBold}
                        onChange={handleBoldButton}
                    />
                    <br />
                    <Checkbox
                        label="Italic"
                        checked={btnItalic}
                        onChange={handleItalicButton}
                    />
                    <br />
                    <Checkbox
                        label="Underline"
                        checked={btnUnderline}
                        onChange={handleUnderlineButton}
                    />
                </div>
            </div>

            {/* Text Color */}
            <div className="style__wrapper_div">
                <span className="display_setting_subtitle">Text Color</span>
                <div>
                    <ColorPlate
                        defaultColor={btnTextColor}
                        onChildResult={handlebtnTextColor}
                    />
                </div>
            </div>

            {/* Background Color */}
            <div className="style__wrapper_div">
                <span className="display_setting_subtitle">BG Color</span>
                <div>
                    <ColorPlate
                        defaultColor={btnBgColor}
                        onChildResult={handlebtnBGColor}
                    />
                </div>
            </div>

            {/* Text Hover Color */}
            <div className="style__wrapper_div">
                <span className="display_setting_subtitle">
                    Text Hover Color
                </span>
                <div>
                    <ColorPlate
                        defaultColor={btnTexthoverColor}
                        onChildResult={handletexthoverColor}
                    />
                </div>
            </div>

            {/* Background Hover Color */}
            <div className="style__wrapper_div">
                <span className="display_setting_subtitle">BG Hover Color</span>
                <div>
                    <ColorPlate
                        defaultColor={btnBgHoverColor}
                        onChildResult={handlebgHoverColor}
                    />
                </div>
            </div>
        </div>
    );

    // RENDER BORDER SETTINGS OPTIONS
    const renderBorderSettingsOptions = () => (
        <div>
            <div className="settings___title">
                <Heading variant="headingLg" as="h5">
                    Border Settings
                </Heading>
            </div>

            {/* Border Thickness */}
            <div className="style__wrapper_div">
                <span className="display_setting_subtitle">
                    Border Thickness
                </span>
                <div className="font_picker_popup">
                    <RangeSlider
                        label={`${btnBorderThickness} px`}
                        value={btnBorderThickness}
                        min={0}
                        max={10}
                        onChange={handleBorderSliderChange}
                        output
                    />
                </div>
            </div>

            {/* Border Radius */}
            <div className="style__wrapper_div">
                <span className="display_setting_subtitle">Border Radius</span>
                <div className="font_picker_popup">
                    <RangeSlider
                        label={`${btnBorderRadius} px`}
                        value={btnBorderRadius}
                        min={0}
                        max={50}
                        onChange={handleRadiusSliderChange}
                        output
                    />
                </div>
            </div>

            {/* Border Color */}
            <div className="style__wrapper_div">
                <span className="display_setting_subtitle">Border Color</span>
                <div>
                    <ColorPlate
                        defaultColor={btnBorderColor}
                        onChildResult={handleborderColor}
                    />
                </div>
            </div>

            {/* Border Hover Color */}
            <div className="style__wrapper_div">
                <span className="display_setting_subtitle">
                    Border Hover Color
                </span>
                <div>
                    <ColorPlate
                        defaultColor={btnBorderHoverColor}
                        onChildResult={handlebordeHoverColor}
                    />
                </div>
            </div>
        </div>
    );
    return (
        <>
            <FullscreenBar onAction={handleActionClick}>
                <p className="fullscreen_title">Buy Now Settings</p>
            </FullscreenBar>

            {settings === "0" && renderSettingsOptions()}
            {settings === "1" && renderTextSettingsOptions()}
            {settings === "2" && renderStyleSettingsOptions()}
            {settings === "3" && renderBorderSettingsOptions()}
        </>
    );
}
