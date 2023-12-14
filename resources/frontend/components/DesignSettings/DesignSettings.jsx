import {
    Badge,
    Card,
    Checkbox,
    FormLayout,
    Heading,
    RadioButton,
    RangeSlider,
    TextField,
} from "@shopify/polaris";
import FontPicker from "font-picker-react";
import React, { useCallback, useEffect, useState } from "react";
import { ColorPlate } from "../colorPlate";
import Switch from "react-switch";

function DesignSettings(props) {
    const [gsFontFamily, setGsFontFamily] = useState(props.gsFontFamily);
    const [gsBgColor, setGsBgColor] = useState(props.gsBgColor);
    const [containerHeight, setContainerHeight] = useState(
        props.containerHeight
    );
    const [gsOffsetValue, setGsOffsetValue] = useState(props.gsOffsetValue);
    const [position, setPosition] = useState(props.position);
    const [gsTitleColor, setGsTitleColor] = useState(props.gsTitleColor);
    const [gsFontsize, setGsFontsize] = useState(props.gsFontsize);
    const [gsBold, setGsBold] = useState(props.gsBold);
    const [gsItalic, setGsItalic] = useState(props.gsItalic);
    const [gsUnderline, setGsUnderLine] = useState(props.gsUnderline);
    const [gsPriceFontsize, setGsPriceFontsize] = useState(
        props.gsPriceFontsize
    );
    const [gsPriceColor, setGsPriceColor] = useState(props.gsPriceColor);
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
    const [isChecked, setChecked] = useState(false);

    const handleSwitchChange = (checked) => {
        setChecked(checked);
    };

    /*FONT FAMILY GENERAL SETTINGS*/
    const handleFontChange = (value) => {
        setGsFontFamily(value.family);
    };

    //BAR SETTINGS START
    const handleBGColor = useCallback((value) => setGsBgColor(value), []);

    const handleHeightSliderChange = useCallback(
        (value) => setContainerHeight(value),
        []
    );
    const handlePositionChange = (key) => {
        setPosition(key);
    };

    const handleOffsetSliderChange = useCallback(
        (value) => setGsOffsetValue(value),
        []
    );
    //BAR SETTINGS END
    // PRODUCT TITLE START
    const handleTitleColor = useCallback((value) => setGsTitleColor(value), []);
    const handleRangeSliderChange = useCallback(
        (value) => setGsFontsize(value),
        []
    );
    const handleBold = useCallback((newChecked) => setGsBold(newChecked), []);
    const handleItalic = useCallback(
        (newChecked) => setGsItalic(newChecked),
        []
    );
    const handleUnderline = useCallback(
        (newChecked) => setGsUnderLine(newChecked),
        []
    );
    // PRODUCT TITLE END

    // PRICE SETTINGS START
    const handlePriceRangeSliderChange = useCallback(
        (value) => setGsPriceFontsize(value),
        []
    );
    const handlePriceColor = useCallback((value) => setGsPriceColor(value), []);
    // PRICE SETTINGS END

    //BUY NOW BUTTON SETTINGS START
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
    //BUY NOW BUTTON SETTINGS END

    useEffect(() => {
        callbackFunction();
    }, [
        // IT WILL SEND LATEST DATA OF ALL STATES
        gsFontFamily,
        gsBgColor,
        containerHeight,
        gsOffsetValue,
        position,
        gsTitleColor,
        gsFontsize,
        gsBold,
        gsItalic,
        gsUnderline,
        gsPriceFontsize,
        gsPriceColor,
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

    var transfer_data = {
        general_settings: {
            selectedTemplate: props.selectedTemplate,
            checkMobile: props.checkMobile,
            checkDesktop: props.checkDesktop,
            gsAction: props.gsAction,
            gsDisplayCondition: props.gsDisplayCondition,
        },
        design_settings: {
            gsFontFamily: gsFontFamily,
            gsBgColor: gsBgColor,
            containerHeight: containerHeight,
            gsOffsetValue: gsOffsetValue,
            position: position,
            gsTitleColor: gsTitleColor,
            gsFontsize: gsFontsize,
            gsBold: gsBold,
            gsItalic: gsItalic,
            gsUnderline: gsUnderline,
            gsPriceFontsize: gsPriceFontsize,
            gsPriceColor: gsPriceColor,
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
        },
    };
    const callbackFunction = useCallback(() => {
        props.callback(transfer_data);
    }, [transfer_data]);

    return (
        <div>
            <Card.Subsection>
                <Heading>Design Settings</Heading>
            </Card.Subsection>
            <Card.Subsection>
                <span className="display_setting_subtitle">Font Family </span>
                <div className="font_picker_popup">
                    <FontPicker
                        apiKey="AIzaSyBRCzvluQdkcyQkKHPjLwltLe2HrkUd5Bs"
                        activeFontFamily={gsFontFamily}
                        onChange={handleFontChange}
                    />
                </div>
            </Card.Subsection>
            <Card>
                <Card.Section>
                    <Card.Subsection>
                        <Heading>Bar</Heading>
                    </Card.Subsection>
                    <Card.Subsection>
                        <FormLayout>
                            {/* First row */}
                            <FormLayout.Group condensed>
                                <div>
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
                                <div>
                                    <span className="display_setting_subtitle">
                                        Position
                                    </span>
                                    <div className="lm_sticky_position">
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
                            </FormLayout.Group>

                            {/* Second row */}
                            <FormLayout.Group condensed>
                                <div>
                                    <span className="display_setting_subtitle">
                                        Offset
                                    </span>
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
                                <div>
                                    <span className="display_setting_subtitle">
                                        Height
                                    </span>
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
                            </FormLayout.Group>
                        </FormLayout>
                    </Card.Subsection>
                </Card.Section>
                <Card.Section>
                    <Card.Subsection>
                        <Heading>Product Title</Heading>
                    </Card.Subsection>
                    <Card.Subsection>
                        <FormLayout>
                            {/* First row */}
                            <FormLayout.Group condensed>
                                <div>
                                    <span className="display_setting_subtitle">
                                        Color
                                    </span>
                                    <div>
                                        <ColorPlate
                                            defaultColor={gsTitleColor}
                                            onChildResult={handleTitleColor}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <span className="display_setting_subtitle">
                                        Font-size
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
                            </FormLayout.Group>

                            {/* Second row */}
                            <FormLayout.Group condensed>
                                <div>
                                    <span className="display_setting_subtitle">
                                        Style
                                    </span>
                                    <div className="lm_sticky_format_style">
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
                            </FormLayout.Group>
                        </FormLayout>
                    </Card.Subsection>
                </Card.Section>
                <Card.Section>
                    <Card.Subsection>
                        <Heading>Price</Heading>
                    </Card.Subsection>
                    <Card.Subsection>
                        <FormLayout>
                            {/* First row */}
                            <FormLayout.Group condensed>
                                <div>
                                    <span className="display_setting_subtitle">
                                        Color
                                    </span>
                                    <div>
                                        <ColorPlate
                                            defaultColor={gsPriceColor}
                                            onChildResult={handlePriceColor}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <span className="display_setting_subtitle">
                                        Font-size
                                    </span>
                                    <div className="font_picker_popup">
                                        <RangeSlider
                                            label={`${gsPriceFontsize} px`}
                                            value={gsPriceFontsize}
                                            min={8}
                                            max={40}
                                            onChange={
                                                handlePriceRangeSliderChange
                                            }
                                            output
                                        />
                                    </div>
                                </div>
                            </FormLayout.Group>
                        </FormLayout>
                    </Card.Subsection>
                </Card.Section>
                <Card.Section>
                    <Card.Subsection>
                        <Heading>Buy Now Button</Heading>
                    </Card.Subsection>
                    <Card.Subsection>
                        <Card.Subsection>
                            <FormLayout>
                                <FormLayout.Group condensed>
                                    <div>
                                        <span className="display_setting_subtitle">
                                            Edit Text
                                        </span>
                                        <div className="setting_title">
                                            <span className="show_sticky_span">
                                                Buy Now Button Animation is{" "}
                                                {isChecked ? (
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
                                                {/* <b>{enable === true ? "Enabled" : "Disabled"}</b>{" "} */}
                                            </span>
                                            <Switch
                                                onChange={handleSwitchChange}
                                                checked={isChecked}
                                                uncheckedIcon={null}
                                                checkedIcon={null}
                                            />
                                        </div>
                                    </div>
                                </FormLayout.Group>
                            </FormLayout>
                        </Card.Subsection>
                        <Card.Subsection>
                            <FormLayout>
                                {/* First row */}
                                <FormLayout.Group condensed>
                                    <div>
                                        <span className="display_setting_subtitle">
                                            Edit Text
                                        </span>
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
                                    <div>
                                        <span className="display_setting_subtitle">
                                            Unavailable
                                        </span>
                                        <div className="buy_now__textfield">
                                            <TextField
                                                value={unavailable}
                                                onChange={
                                                    handleUnavailableTextField
                                                }
                                                autoComplete="off"
                                                maxLength={15}
                                                placeholder="Example: Unavailable"
                                                showCharacterCount
                                            />
                                        </div>
                                    </div>
                                </FormLayout.Group>
                            </FormLayout>
                        </Card.Subsection>
                        <Card.Subsection>
                            <FormLayout>
                                {/* Third row */}
                                <FormLayout.Group condensed>
                                    <div>
                                        <span className="display_setting_subtitle">
                                            Style
                                        </span>
                                        <div className="lm_sticky_format_style">
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
                                </FormLayout.Group>
                                {/* Fourth row */}
                                <FormLayout.Group condensed>
                                    <div>
                                        <span className="display_setting_subtitle">
                                            Text Color
                                        </span>
                                        <div>
                                            <ColorPlate
                                                defaultColor={btnTextColor}
                                                onChildResult={
                                                    handlebtnTextColor
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <span className="display_setting_subtitle">
                                            Background Color
                                        </span>
                                        <div>
                                            <ColorPlate
                                                defaultColor={btnBgColor}
                                                onChildResult={handlebtnBGColor}
                                            />
                                        </div>
                                    </div>
                                </FormLayout.Group>
                                {/* Fifth row */}
                                <FormLayout.Group condensed>
                                    <div>
                                        <span className="display_setting_subtitle">
                                            Text Hover Color
                                        </span>
                                        <div>
                                            <ColorPlate
                                                defaultColor={btnTexthoverColor}
                                                onChildResult={
                                                    handletexthoverColor
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <span className="display_setting_subtitle">
                                            Background Hover Color
                                        </span>
                                        <div>
                                            <ColorPlate
                                                defaultColor={btnBgHoverColor}
                                                onChildResult={
                                                    handlebgHoverColor
                                                }
                                            />
                                        </div>
                                    </div>
                                </FormLayout.Group>
                            </FormLayout>
                        </Card.Subsection>
                        <Card.Subsection>
                            <FormLayout>
                                {/* Seventh row */}
                                <FormLayout.Group condensed>
                                    <div>
                                        <span className="display_setting_subtitle">
                                            Border Color
                                        </span>
                                        <div>
                                            <ColorPlate
                                                defaultColor={btnBorderColor}
                                                onChildResult={
                                                    handleborderColor
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <span className="display_setting_subtitle">
                                            Border Hover Color
                                        </span>
                                        <div>
                                            <ColorPlate
                                                defaultColor={
                                                    btnBorderHoverColor
                                                }
                                                onChildResult={
                                                    handlebordeHoverColor
                                                }
                                            />
                                        </div>
                                    </div>
                                </FormLayout.Group>
                                {/* Sixth row */}
                                <FormLayout.Group condensed>
                                    <div>
                                        <span className="display_setting_subtitle">
                                            Border Thickness
                                        </span>
                                        <div className="font_picker_popup">
                                            <RangeSlider
                                                label={`${btnBorderThickness} px`}
                                                value={btnBorderThickness}
                                                min={0}
                                                max={10}
                                                onChange={
                                                    handleBorderSliderChange
                                                }
                                                output
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <span className="display_setting_subtitle">
                                            Border Radius
                                        </span>
                                        <div className="font_picker_popup">
                                            <RangeSlider
                                                label={`${btnBorderRadius} px`}
                                                value={btnBorderRadius}
                                                min={0}
                                                max={50}
                                                onChange={
                                                    handleRadiusSliderChange
                                                }
                                                output
                                            />
                                        </div>
                                    </div>
                                </FormLayout.Group>
                            </FormLayout>
                        </Card.Subsection>
                    </Card.Subsection>
                </Card.Section>
            </Card>
        </div>
    );
}

export default DesignSettings;
