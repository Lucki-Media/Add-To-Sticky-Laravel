import {
    Badge,
    BlockStack,
    Card,
    Checkbox,
    Divider,
    FormLayout,
    InlineError,
    RadioButton,
    RangeSlider,
    Text,
    TextField,
} from "@shopify/polaris";
import FontPicker from "font-picker-react";
import React, { useCallback, useEffect, useState } from "react";
import Switch from "react-switch";
import "../../css/index.css";

function DesignSettings(props) {
    const [gsFontFamily, setGsFontFamily] = useState(props.gsFontFamily);
    const [animationEnable, setAnimationEnable] = useState(
        props.animationEnable
    );
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
    const handleSwitchChange = (checked) => {
        setAnimationEnable(checked);
    };

    /*FONT FAMILY GENERAL SETTINGS*/
    const handleFontChange = (value) => {
        setGsFontFamily(value.family);
    };

    //BAR SETTINGS START
    const handleBGColor = (event) => {
        setGsBgColor(event.target.value);
    };
    //   = useCallback((value) => setGsBgColor(value), []);

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
    const handleTitleColor = (event) => {
        setGsTitleColor(event.target.value);
    };
    // = useCallback((value) => setGsTitleColor(value), []);
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
    const handlePriceColor = (event) => {
        setGsPriceColor(event.target.value);
    };
    // = useCallback((value) => setGsPriceColor(value), []);
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
    const handlebtnTextColor = (event) => {
        setBtnTextColor(event.target.value);
    };
    // = useCallback(
    //     (value) => setBtnTextColor(value),
    //     []
    // );

    // TEXT HOVER COLOR
    const handletexthoverColor = (event) => {
        setBtnTexthoverColor(event.target.value);
    };
    // = useCallback(
    //     (value) => setBtnTexthoverColor(value),
    //     []
    // );

    // BG HOVER COLOR
    const handlebgHoverColor = (event) => {
        setBtnBgHoverColor(event.target.value);
    };
    // = useCallback(
    //     (value) => setBtnBgHoverColor(value),
    //     []
    // );

    // BTN BG COLOR
    const handlebtnBGColor = (event) => {
        setBtnBgColor(event.target.value);
    };
    // = useCallback((value) => setBtnBgColor(value), []);

    // BORDER COLOR
    const handleborderColor = (event) => {
        setBtnBorderColor(event.target.value);
    };
    // = useCallback(
    //     (value) => setBtnBorderColor(value),
    //     []
    // );

    // BORDER HOVER COLOR
    const handlebordeHoverColor = (event) => {
        setBtnBorderHoverColor(event.target.value);
    };
    // = useCallback(
    //     (value) => setBtnBorderHoverColor(value),
    //     []
    // );
    // COLOR CHANGE HANDLES END
    //BUY NOW BUTTON SETTINGS END

    useEffect(() => {
        setGsFontFamily(props.gsFontFamily);
        setAnimationEnable(props.animationEnable);
        setGsBgColor(props.gsBgColor);
        setContainerHeight(props.containerHeight);
        setGsOffsetValue(props.gsOffsetValue);
        setPosition(props.position);
        setGsTitleColor(props.gsTitleColor);
        setGsFontsize(props.gsFontsize);
        setGsBold(props.gsBold);
        setGsItalic(props.gsItalic);
        setGsUnderLine(props.gsUnderline);
        setGsPriceFontsize(props.gsPriceFontsize);
        setGsPriceColor(props.gsPriceColor);
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

    useEffect(() => {
        callbackFunction();
    }, [
        // IT WILL SEND LATEST DATA OF ALL STATES
        gsFontFamily,
        animationEnable,
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
            homePageProduct: props.homePageProduct,
            checkMobile: props.checkMobile,
            checkDesktop: props.checkDesktop,
            gsAction: props.gsAction,
            gsDisplayCondition: props.gsDisplayCondition,
            gsNotificationBarText: props.gsNotificationBarText,
            gsNotificationBarItalic: props.gsNotificationBarItalic,
            gsNotificationBarBold: props.gsNotificationBarBold,
            gsNotificationBarTextColor: props.gsNotificationBarTextColor,
            gsNotificationBarBgColor: props.gsNotificationBarBgColor,
            gsNotificationBarFontSize: props.gsNotificationBarFontSize,
            gsNotificationBarHeight: props.gsNotificationBarHeight,
            enableUpSell: props.enableUpSell,
            CUPLSelection: props.CUPLSelection,
            CUPLManualSelection: props.CUPLManualSelection,
            SelectedCollectionID: props.SelectedCollectionID,
            SelectedProductIDs: props.SelectedProductIDs,
        },
        design_settings: {
            gsFontFamily: gsFontFamily,
            animationEnable: animationEnable,
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
            <Text variant="headingLg" fontWeight="medium">
                Design Settings
            </Text>

            <div style={{ margin: "15px 0" }}>
                <Divider borderColor="border" />
            </div>

            {/* BAR LOGIC */}
            <div className="lm_ds_title">Bar</div>
            <FormLayout>
                {/* First row */}
                <FormLayout.Group condensed>
                    <div>
                        <Text variant="headingMd" as="span" fontWeight="medium">
                            BG Color
                        </Text>
                        <div className="lm_sticky_color_box">
                            <input
                                type="color"
                                value={gsBgColor}
                                onChange={handleBGColor}
                            />
                            {/* <ColorPlate
                                            defaultColor={gsBgColor}
                                            onChildResult={handleBGColor}
                                        /> */}
                        </div>
                    </div>
                    <div>
                        <Text variant="headingMd" as="span" fontWeight="medium">
                            Position
                        </Text>
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
                        <Text variant="headingMd" as="span" fontWeight="medium">
                            Offset
                        </Text>
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
                        <Text variant="headingMd" as="span" fontWeight="medium">
                            Height
                        </Text>
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
                </FormLayout.Group>
            </FormLayout>

            <div style={{ margin: "15px 0" }}>
                <Divider borderColor="border" />
            </div>

            {/* PRODUCT TITLE LOGIC */}
            <div className="lm_ds_title">Product Title</div>
            <FormLayout>
                {/* First row */}
                <FormLayout.Group condensed>
                    <div>
                        <Text variant="headingMd" as="span" fontWeight="medium">
                            Color
                        </Text>
                        <div className="lm_sticky_color_box">
                            <input
                                type="color"
                                value={gsTitleColor}
                                onChange={handleTitleColor}
                            />
                            {/* <ColorPlate
                                            defaultColor={gsTitleColor}
                                            onChildResult={handleTitleColor}
                                        /> */}
                        </div>
                    </div>
                    <div>
                        <Text variant="headingMd" as="span" fontWeight="medium">
                            Font-size
                        </Text>
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
                        <Text variant="headingMd" as="span" fontWeight="medium">
                            Style
                        </Text>
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

            <div style={{ margin: "15px 0" }}>
                <Divider borderColor="border" />
            </div>

            {/* PRICE LOGIC */}
            <div className="lm_ds_title">Price</div>

            <FormLayout>
                {/* First row */}
                <FormLayout.Group condensed>
                    <div>
                        <Text variant="headingMd" as="span" fontWeight="medium">
                            Color
                        </Text>
                        <div className="lm_sticky_color_box">
                            <input
                                type="color"
                                value={gsPriceColor}
                                onChange={handlePriceColor}
                            />
                            {/* <ColorPlate
                                            defaultColor={gsPriceColor}
                                            onChildResult={handlePriceColor}
                                        /> */}
                        </div>
                    </div>
                    <div>
                        <Text variant="headingMd" as="span" fontWeight="medium">
                            Font-size
                        </Text>
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
                </FormLayout.Group>
            </FormLayout>

            <div style={{ margin: "15px 0" }}>
                <Divider borderColor="border" />
            </div>

            {/* BUY NOW BUTTON LOGIC */}
            <BlockStack gap="200">
                <div className="lm_ds_title">Buy Now Button</div>
                <FormLayout>
                    <FormLayout.Group condensed>
                        <BlockStack gap="200">
                            <div className="setting_title">
                                <Text
                                    variant="bodyLg"
                                    as="span"
                                    alignment="start"
                                    fontWeight="medium"
                                >
                                    Buy Now Button Animation is
                                    {animationEnable ? (
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
                                    onChange={handleSwitchChange}
                                    checked={animationEnable}
                                    uncheckedIcon={null}
                                    checkedIcon={null}
                                />
                            </div>
                            <Text
                                variant="headingMd"
                                as="span"
                                fontWeight="regular"
                                tone="subdued"
                            >
                                (<strong>Note:</strong> Enabling Button
                                Animation globally activates them 
                                across all templates.)
                            </Text>
                        </BlockStack>
                    </FormLayout.Group>
                </FormLayout>

                <div style={{ margin: "15px 0" }}>
                    <Divider borderColor="border" />
                </div>

                <FormLayout>
                    {/* First row */}
                    <FormLayout.Group condensed>
                        <div>
                            <Text
                                variant="headingMd"
                                as="span"
                                fontWeight="medium"
                            >
                                Edit Text
                            </Text>
                            <div className="buy_now__textfield">
                                <TextField
                                    error={editText == "" || editText == null}
                                    value={editText ?? ""}
                                    onChange={handleEditTextField}
                                    autoComplete="off"
                                    maxLength={15}
                                    id="editText"
                                    placeholder="Example: BUY NOW"
                                    showCharacterCount
                                />
                                {(editText == "" || editText == null) && (
                                    <div style={{ marginTop: "4px" }}>
                                        <InlineError
                                            message={"This field is required"}
                                            fieldID={"editText"}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                        <div>
                            <Text
                                variant="headingMd"
                                as="span"
                                fontWeight="medium"
                            >
                                Unavailable
                            </Text>
                            <div className="buy_now__textfield">
                                <TextField
                                    error={
                                        unavailable == "" || unavailable == null
                                    }
                                    value={unavailable ?? ""}
                                    onChange={handleUnavailableTextField}
                                    autoComplete="off"
                                    maxLength={15}
                                    placeholder="Example: Unavailable"
                                    id="unavailable"
                                    showCharacterCount
                                    required
                                />
                                {(unavailable == "" || unavailable == null) && (
                                    <div style={{ marginTop: "4px" }}>
                                        <InlineError
                                            message={"This field is required"}
                                            fieldID={"unavailable"}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </FormLayout.Group>
                </FormLayout>

                <div style={{ margin: "15px 0" }}>
                    <Divider borderColor="border" />
                </div>

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
                                    Style
                                </Text>
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
                                        value={btnTextColor}
                                        onChange={handlebtnTextColor}
                                    />
                                    {/* <ColorPlate
                                                defaultColor={btnTextColor}
                                                onChildResult={
                                                    handlebtnTextColor
                                                }
                                            /> */}
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
                                        value={btnBgColor}
                                        onChange={handlebtnBGColor}
                                    />
                                    {/* <ColorPlate
                                                defaultColor={btnBgColor}
                                                onChildResult={handlebtnBGColor}
                                            /> */}
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
                                    <input
                                        type="color"
                                        value={btnTexthoverColor}
                                        onChange={handletexthoverColor}
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
                                        value={btnBgHoverColor}
                                        onChange={handlebgHoverColor}
                                    />
                                    {/* <ColorPlate
                                                defaultColor={btnBgHoverColor}
                                                onChildResult={
                                                    handlebgHoverColor
                                                }
                                            /> */}
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
                                        label={`${btnWidthValue} px`}
                                        value={btnWidthValue}
                                        min={0}
                                        max={250}
                                        onChange={handleWidthSliderChange}
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
                                        label={`${btnheightValue} px`}
                                        value={btnheightValue}
                                        min={30}
                                        max={150}
                                        onChange={
                                            handleBuyButtonHeightSliderChange
                                        }
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
                                        label={`${btnFontsize} px`}
                                        value={btnFontsize}
                                        min={8}
                                        max={50}
                                        onChange={handleFontSizeSliderChange}
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

                <FormLayout>
                    {/* Seventh row */}
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
                                    value={btnBorderColor}
                                    onChange={handleborderColor}
                                />
                                {/* <ColorPlate
                                                defaultColor={btnBorderColor}
                                                onChildResult={
                                                    handleborderColor
                                                }
                                            /> */}
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
                                    value={btnBorderHoverColor}
                                    onChange={handlebordeHoverColor}
                                />
                            </div>
                        </div>
                    </FormLayout.Group>
                    {/* Sixth row */}
                    <FormLayout.Group condensed>
                        <div>
                            <Text
                                variant="headingMd"
                                as="span"
                                fontWeight="medium"
                            >
                                Border Thickness
                            </Text>
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
                        <div>
                            <Text
                                variant="headingMd"
                                as="span"
                                fontWeight="medium"
                            >
                                Border Radius
                            </Text>
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
                    </FormLayout.Group>
                </FormLayout>
            </BlockStack>
        </div>
    );
}

export default DesignSettings;
