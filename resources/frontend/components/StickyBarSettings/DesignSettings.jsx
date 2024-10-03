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
import React, { useCallback, useEffect, useState } from "react";
import Switch from "react-switch";
import "../../css/index.css";

function DesignSettings({
    animationEnableData,
    currentTemplate,
    designSettingsCallback,
}) {
    const [animationEnable, setAnimationEnable] = useState(animationEnableData);

    const [gsBgColor, setGsBgColor] = useState(
        currentTemplate.general_settings.gsBgColor
    );
    const [containerHeight, setContainerHeight] = useState(
        currentTemplate.general_settings.containerHeight
    );
    const [gsOffsetValue, setGsOffsetValue] = useState(
        currentTemplate.general_settings.gsOffsetValue
    );
    const [position, setPosition] = useState(
        currentTemplate.general_settings.position
    );
    const [gsTitleColor, setGsTitleColor] = useState(
        currentTemplate.general_settings.gsTitleColor
    );
    const [gsFontsize, setGsFontsize] = useState(
        currentTemplate.general_settings.gsFontsize
    );
    const [gsBold, setGsBold] = useState(
        currentTemplate.general_settings.gsBold
    );
    const [gsItalic, setGsItalic] = useState(
        currentTemplate.general_settings.gsItalic
    );
    const [gsUnderline, setGsUnderLine] = useState(
        currentTemplate.general_settings.gsUnderline
    );
    const [gsPriceFontsize, setGsPriceFontsize] = useState(
        currentTemplate.general_settings.gsPriceFontsize
    );
    const [gsPriceColor, setGsPriceColor] = useState(
        currentTemplate.general_settings.gsPriceColor
    );

    const [editText, setEditText] = useState(
        currentTemplate.buy_btn_settings.editText
    );
    const [unavailable, setUnavailable] = useState(
        currentTemplate.buy_btn_settings.unavailable
    );
    const [btnWidthValue, setBtnWidthValue] = useState(
        currentTemplate.buy_btn_settings.btnWidthValue
    );
    const [btnheightValue, setBtnHeightValue] = useState(
        currentTemplate.buy_btn_settings.btnheightValue
    );
    const [btnFontsize, setBtnFontsize] = useState(
        currentTemplate.buy_btn_settings.btnFontsize
    );
    const [btnBorderThickness, setBtnBorderThickness] = useState(
        currentTemplate.buy_btn_settings.btnBorderThickness
    );
    const [btnBorderRadius, setBtnBorderRadius] = useState(
        currentTemplate.buy_btn_settings.btnBorderRadius
    );
    const [btnBold, setBtnBold] = useState(
        currentTemplate.buy_btn_settings.btnBold
    );
    const [btnItalic, setBtnItalic] = useState(
        currentTemplate.buy_btn_settings.btnItalic
    );
    const [btnUnderline, setBtnUnderline] = useState(
        currentTemplate.buy_btn_settings.btnUnderline
    );
    const [btnTextColor, setBtnTextColor] = useState(
        currentTemplate.buy_btn_settings.btnTextColor
    );
    const [btnBgColor, setBtnBgColor] = useState(
        currentTemplate.buy_btn_settings.btnBgColor
    );
    const [btnTexthoverColor, setBtnTexthoverColor] = useState(
        currentTemplate.buy_btn_settings.btnTexthoverColor
    );
    const [btnBgHoverColor, setBtnBgHoverColor] = useState(
        currentTemplate.buy_btn_settings.btnBgHoverColor
    );
    const [btnBorderColor, setBtnBorderColor] = useState(
        currentTemplate.buy_btn_settings.btnBorderColor
    );
    const [btnBorderHoverColor, setBtnBorderHoverColor] = useState(
        currentTemplate.buy_btn_settings.btnBorderHoverColor
    );

    // ANIMATION SWITCH LOGIC
    const handleSwitchChange = (checked) => {
        setAnimationEnable(checked);
    };

    //BAR SETTINGS START
    const handleBGColor = (event) => {
        setGsBgColor(event.target.value);
    };

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
    // PRICE SETTINGS END

    //BUY NOW BUTTON SETTINGS START
    /*BUY NOW BTN TEXT START*/
    // EDIT TEXT
    const handleEditTextField = (val) => {
        setEditText(val);
    };
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

    // TEXT HOVER COLOR
    const handletexthoverColor = (event) => {
        setBtnTexthoverColor(event.target.value);
    };

    // BG HOVER COLOR
    const handlebgHoverColor = (event) => {
        setBtnBgHoverColor(event.target.value);
    };

    // BTN BG COLOR
    const handlebtnBGColor = (event) => {
        setBtnBgColor(event.target.value);
    };

    // BORDER COLOR
    const handleborderColor = (event) => {
        setBtnBorderColor(event.target.value);
    };

    // BORDER HOVER COLOR
    const handlebordeHoverColor = (event) => {
        setBtnBorderHoverColor(event.target.value);
    };
    // COLOR CHANGE HANDLES END
    //BUY NOW BUTTON SETTINGS END

    // HANDLING MAIN JSON DATA START
    var jsonData = {
        general_settings: {
            ...currentTemplate.general_settings,
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
        },
        buy_btn_settings: {
            ...currentTemplate.buy_btn_settings,
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

    useEffect(() => {
        callbackFunction();
    }, [
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

    const callbackFunction = useCallback(() => {
        designSettingsCallback(jsonData, animationEnable);
    }, [jsonData, animationEnable]);
    // HANDLING MAIN JSON DATA END

    useEffect(() => {
        setGsBgColor(currentTemplate.general_settings.gsBgColor);
        setContainerHeight(currentTemplate.general_settings.containerHeight);
        setGsOffsetValue(currentTemplate.general_settings.gsOffsetValue);
        setPosition(currentTemplate.general_settings.position);
        setGsTitleColor(currentTemplate.general_settings.gsTitleColor);
        setGsFontsize(currentTemplate.general_settings.gsFontsize);
        setGsBold(currentTemplate.general_settings.gsBold);
        setGsItalic(currentTemplate.general_settings.gsItalic);
        setGsUnderLine(currentTemplate.general_settings.gsUnderline);
        setGsPriceFontsize(currentTemplate.general_settings.gsPriceFontsize);
        setGsPriceColor(currentTemplate.general_settings.gsPriceColor);

        setEditText(currentTemplate.buy_btn_settings.editText);
        setUnavailable(currentTemplate.buy_btn_settings.unavailable);
        setBtnWidthValue(currentTemplate.buy_btn_settings.btnWidthValue);
        setBtnHeightValue(currentTemplate.buy_btn_settings.btnheightValue);
        setBtnFontsize(currentTemplate.buy_btn_settings.btnFontsize);
        setBtnBorderThickness(
            currentTemplate.buy_btn_settings.btnBorderThickness
        );
        setBtnBorderRadius(currentTemplate.buy_btn_settings.btnBorderRadius);
        setBtnBold(currentTemplate.buy_btn_settings.btnBold);
        setBtnItalic(currentTemplate.buy_btn_settings.btnItalic);
        setBtnUnderline(currentTemplate.buy_btn_settings.btnUnderline);
        setBtnTextColor(currentTemplate.buy_btn_settings.btnTextColor);
        setBtnBgColor(currentTemplate.buy_btn_settings.btnBgColor);
        setBtnTexthoverColor(
            currentTemplate.buy_btn_settings.btnTexthoverColor
        );
        setBtnBgHoverColor(currentTemplate.buy_btn_settings.btnBgHoverColor);
        setBtnBorderColor(currentTemplate.buy_btn_settings.btnBorderColor);
        setBtnBorderHoverColor(
            currentTemplate.buy_btn_settings.btnBorderHoverColor
        );
    }, [currentTemplate]);

    return (
        <Card sectioned>
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
                                max={32}
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
                                max={32}
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
                <div className="lm_ds_title">StickyBar Button</div>
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
                                    StickyBar Button Animation is
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
                                Animation globally activates them across all
                                templates.)
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
                                        min={50}
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
                                        max={32}
                                        onChange={handleFontSizeSliderChange}
                                        output
                                    />
                                </div>
                            </div>
                            <div></div>
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
        </Card>
    );
}

export default DesignSettings;
