import {
    BlockStack,
    Card,
    Checkbox,
    Divider,
    FormLayout,
    InlineError,
    RangeSlider,
    Text,
    TextField,
} from "@shopify/polaris";
import React, { useCallback, useEffect, useState } from "react";

export default function NotificationBarSettings({
    currentTemplate,
    sbSettingDataCallback,
}) {
    const [gsNotificationBarText, setGsNotificationBarText] = useState(
        currentTemplate.general_settings.gsNotificationBarText
    );
    const [gsNotificationBarItalic, setGsNotificationBarItalic] = useState(
        currentTemplate.general_settings.gsNotificationBarItalic
    );
    const [gsNotificationBarBold, setGsNotificationBarBold] = useState(
        currentTemplate.general_settings.gsNotificationBarBold
    );
    const [gsNotificationBarTextColor, setGsNotificationBarTextColor] =
        useState(currentTemplate.general_settings.gsNotificationBarTextColor);
    const [gsNotificationBarBgColor, setGsNotificationBarBgColor] = useState(
        currentTemplate.general_settings.gsNotificationBarBgColor
    );
    const [gsNotificationBarFontSize, setGsNotificationBarFontSize] = useState(
        currentTemplate.general_settings.gsNotificationBarFontSize
    );
    const [gsNotificationBarHeight, setGsNotificationBarHeight] = useState(
        currentTemplate.general_settings.gsNotificationBarHeight
    );

    // Notification Bar Text Field Handle Event
    const handleNbTextFieldChange = useCallback(
        (value) => setGsNotificationBarText(value),
        []
    );

    // Notification Bar Italic Style Handle Event
    const handleItalic = useCallback(
        (newChecked) => setGsNotificationBarItalic(newChecked),
        []
    );

    // Notification Bar Bold Weight Handle Event
    const handleBold = useCallback(
        (newChecked) => setGsNotificationBarBold(newChecked),
        []
    );

    // Notification Bar Text Color Handle Event
    const handleTextColor = (event) => {
        setGsNotificationBarTextColor(event.target.value);
    };

    // Notification Bar Text Color Handle Event
    const handleBgColor = (event) => {
        setGsNotificationBarBgColor(event.target.value);
    };

    // Notification Bar Font Size Handle Event
    const handleFontSize = useCallback(
        (newChecked) => setGsNotificationBarFontSize(newChecked),
        []
    );

    // Notification Bar Height Handle Event
    const handleHeight = useCallback(
        (newChecked) => setGsNotificationBarHeight(newChecked),
        []
    );

    // HANDLING MAIN JSON DATA START
    var jsonData = {
        buy_btn_settings: currentTemplate.buy_btn_settings,
        general_settings: {
            ...currentTemplate.general_settings,
            gsNotificationBarText: gsNotificationBarText,
            gsNotificationBarItalic: gsNotificationBarItalic,
            gsNotificationBarBold: gsNotificationBarBold,
            gsNotificationBarTextColor: gsNotificationBarTextColor,
            gsNotificationBarBgColor: gsNotificationBarBgColor,
            gsNotificationBarFontSize: gsNotificationBarFontSize,
            gsNotificationBarHeight: gsNotificationBarHeight,
        },
    };

    useEffect(() => {
        callbackFunction();
    }, [
        gsNotificationBarText,
        gsNotificationBarItalic,
        gsNotificationBarBold,
        gsNotificationBarTextColor,
        gsNotificationBarBgColor,
        gsNotificationBarFontSize,
        gsNotificationBarHeight,
    ]);

    const callbackFunction = useCallback(() => {
        sbSettingDataCallback(jsonData);
    }, [jsonData]);
    // HANDLING MAIN JSON DATA END

    return (
        <Card sectioned>
            <BlockStack gap={200}>
                <Text variant="headingLg" fontWeight="medium">
                    Notification Bar Settings
                </Text>
                <Text
                    variant="headingMd"
                    as="span"
                    fontWeight="regular"
                    tone="subdued"
                >
                    (<strong>Note:</strong> You can utilize this feature only if
                    you have selected "Stay on Same Page" for Button Action
                    onclick.)
                </Text>
            </BlockStack>

            <div style={{ margin: "15px 0" }}>
                <Divider borderColor="border" />
            </div>

            <FormLayout>
                {/* Notification Text */}
                <FormLayout.Group condensed>
                    <BlockStack gap={200}>
                        <Text variant="headingMd" as="span" fontWeight="medium">
                            Notification Text
                        </Text>
                        <TextField
                            error={
                                gsNotificationBarText == "" ||
                                gsNotificationBarText == null
                            }
                            value={gsNotificationBarText ?? ""}
                            onChange={handleNbTextFieldChange}
                            autoComplete="off"
                            maxLength={60}
                            id="gsNotificationBarText"
                            placeholder="Example: Yayy! Product Added to Cart!"
                            showCharacterCount
                        />
                        {(gsNotificationBarText == "" ||
                            gsNotificationBarText == null) && (
                            <div
                                style={{
                                    marginTop: "4px",
                                }}
                            >
                                <InlineError
                                    message={"This field is required"}
                                    fieldID={"gsNotificationBarText"}
                                />
                            </div>
                        )}
                    </BlockStack>
                </FormLayout.Group>

                {/* Text Bold and Italic */}
                <FormLayout.Group condensed>
                    <Checkbox
                        label="Bold"
                        checked={gsNotificationBarBold}
                        onChange={handleBold}
                    />
                    <Checkbox
                        label="Italic"
                        checked={gsNotificationBarItalic}
                        onChange={handleItalic}
                    />
                </FormLayout.Group>

                {/* Colors */}
                <FormLayout.Group condensed>
                    <div>
                        <Text variant="headingMd" as="span" fontWeight="medium">
                            Text Color
                        </Text>
                        <div className="lm_sticky_color_box">
                            <input
                                type="color"
                                value={gsNotificationBarTextColor}
                                onChange={handleTextColor}
                            />
                        </div>
                    </div>

                    <div>
                        <Text variant="headingMd" as="span" fontWeight="medium">
                            BG Color
                        </Text>
                        <div className="lm_sticky_color_box">
                            <input
                                type="color"
                                value={gsNotificationBarBgColor}
                                onChange={handleBgColor}
                            />
                        </div>
                    </div>
                </FormLayout.Group>

                {/* Sliders */}
                <FormLayout.Group condensed>
                    {/* Heading Font Size */}
                    <BlockStack gap="0">
                        <Text variant="headingMd" as="span" fontWeight="medium">
                            Font-size
                        </Text>
                        <RangeSlider
                            label={`${gsNotificationBarFontSize} px`}
                            value={gsNotificationBarFontSize}
                            min={8}
                            max={30}
                            onChange={handleFontSize}
                            output
                        />
                    </BlockStack>

                    {/* Body Font Size */}
                    <BlockStack gap="0">
                        <Text variant="headingMd" as="span" fontWeight="medium">
                            Height
                        </Text>
                        <RangeSlider
                            label={`${gsNotificationBarHeight} px`}
                            value={gsNotificationBarHeight}
                            min={5}
                            max={20}
                            onChange={handleHeight}
                            output
                        />
                    </BlockStack>
                </FormLayout.Group>
            </FormLayout>
        </Card>
    );
}
