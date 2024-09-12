import { Badge, BlockStack, Card, Select, Text } from "@shopify/polaris";
import React, { useCallback, useEffect, useState } from "react";
import Switch from "react-switch";
import "../../css/index.css";
import GeneralSettings from "./GeneralSettings";
import NotificationBarSettings from "./NotificationBarSettings";
import UpSellPopupSettings from "./UpSellPopupSettings";
import HomePageSettings from "./HomePageSettings";
import DesignSettings from "./DesignSettings";

export default function StickyBarSettings(props) {
    const [enable, setEnable] = useState(props.stickyBarData.enable);
    const [defaultTemplate, setDefaultTemplate] = useState(
        String(props.stickyBarData.defaultTemplate)
    );
    const [currentTemplate, setCurrentTemplate] = useState(
        props.stickyBarData.current_template
    );
    console.log(currentTemplate);

    // Template options
    const templateOptions = [
        { label: "Style 1", value: "1" },
        { label: "Style 2", value: "2" },
        { label: "Style 3", value: "3" },
        { label: "Style 4", value: "4" },
        { label: "Style 5", value: "5" },
        { label: "Style 6", value: "6" },
        { label: "Style 7", value: "7" },
        { label: "Style 8", value: "8" },
    ];

    // ENABLE BUTTON LOGIC
    const handleEnable = (value) => {
        setEnable(!value);
    };

    // HANDLE TEMPLATE CHANGE
    const handleChange = useCallback(
        (value) => {
            switch (value) {
                case "1":
                    setCurrentTemplate(props.stickyBarData.template_1);
                    break;
                case "2":
                    setCurrentTemplate(props.stickyBarData.template_2);
                    break;
                case "3":
                    setCurrentTemplate(props.stickyBarData.template_3);
                    break;
                case "4":
                    setCurrentTemplate(props.stickyBarData.template_4);
                    break;
                case "5":
                    setCurrentTemplate(props.stickyBarData.template_5);
                    break;
                case "6":
                    setCurrentTemplate(props.stickyBarData.template_6);
                    break;
                case "7":
                    setCurrentTemplate(props.stickyBarData.template_7);
                    break;
                case "8":
                    setCurrentTemplate(props.stickyBarData.template_8);
                    break;

                default:
                    setCurrentTemplate(props.stickyBarData.current_template);
                    break;
            }
        },
        [props.stickyBarData]
    );

    // HANDLE CALLBACK
    const handleDataCallback = (data) => {
        setCurrentTemplate(data);
    };

    // HANDLING STICKY BAR DATA START
    var jsonData = {
        ...props.stickyBarData,
        enable: enable,
        current_template: currentTemplate,
        defaultTemplate: defaultTemplate,
    };

    useEffect(() => {
        stickyDataCallBack();
    }, [enable, defaultTemplate, currentTemplate]);

    const stickyDataCallBack = useCallback(() => {
        props.sbDataCallback(jsonData);
    }, [jsonData]);

    return (
        <BlockStack gap="400">
            {/* Sticky Bar Enable */}
            {/* <Card>
                <div className="setting_title">
                    <Text
                        variant="bodyLg"
                        as="span"
                        alignment="start"
                        fontWeight="medium"
                    >
                        Sticky Add To Cart is{" "}
                        {enable ? (
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
                            handleEnable(enable);
                        }}
                        checked={enable}
                        uncheckedIcon={null}
                        checkedIcon={null}
                    />
                </div>
            </Card> */}

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
            {/* <GeneralSettings currentTemplate={currentTemplate} /> */}

            {/* Notification Bar Settings */}
            <NotificationBarSettings
                currentTemplate={currentTemplate}
                sbSettingDataCallback={handleDataCallback}
            />

            {/* UpSell Popup Settings */}
            {/* <UpSellPopupSettings currentTemplate={currentTemplate} /> */}

            {/* Home Page Settings */}
            {/* <HomePageSettings currentTemplate={currentTemplate} /> */}

            {/* Design Settings */}
            {/* <DesignSettings
                callback={() => {
                    console.log("called ....");
                }}
                currentTemplate={currentTemplate}
            /> */}
        </BlockStack>
    );
}
