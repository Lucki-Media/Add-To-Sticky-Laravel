import React, { useCallback, useEffect, useState } from "react";
import "../../css/index.css";
import {
    BlockStack,
    Box,
    Button,
    ButtonGroup,
    Card,
    Icon,
    InlineStack,
    Tabs,
    Text,
} from "@shopify/polaris";
import { DesktopIcon, MobileIcon } from "@shopify/polaris-icons";
import MobilePreview from "./StickyCart/MobilePreview";
import DesktopPreview from "./StickyCart/DesktopPreview";
import newGif from "../../../../public/images/new.gif";

export default function StickyCartPreview(props) {
    const handleActivePreview = useCallback(
        (index) => {
            if (props.activePreview === index) return;
            props.activePreviewCallback(index);
        },
        [props.activePreview]
    );

    // Device Selection Logic Start
    const handleDeviceTabChange = useCallback(
        (selectedTabIndex) => props.selectedDeviceCallback(selectedTabIndex),
        []
    );

    const deviceTabs = [
        {
            id: "desktop",
            content: <Icon source={DesktopIcon} tone="primary" />,
            accessibilityLabel: "All customers",
            panelID: "desktop",
        },
        {
            id: "mobile",
            content: <Icon source={MobileIcon} tone="primary" />,
            panelID: "mobile",
        },
    ];
    // Device Selection Logic End

    useEffect(() => {
        props.onPreviewChange(props.activePreview);
    }, [props.activePreview]);

    return (
        <div classname="preview_section">
            <Card>
                <BlockStack gap="400">
                    {/* Heading Part */}
                    <InlineStack gap="400" align="space-between">
                        <Text as="h2" variant="headingLg" id="preview_title">
                            Preview
                        </Text>
                        <Box
                            background="bg-fill-transparent"
                            borderColor="border"
                            borderWidth="025"
                            borderRadius="200"
                            padding="025"
                        >
                            <Tabs
                                tabs={deviceTabs}
                                selected={props.selectedDevice}
                                onSelect={handleDeviceTabChange}
                                fitted
                            ></Tabs>
                        </Box>
                        <div
                            style={{
                                background: "rgba(0, 0, 0, .02)",
                                border: "1px solid #e3e3e3",
                                borderRadius: 8,
                                padding: 8,
                            }}
                        >
                            <ButtonGroup variant="segmented">
                                <Button
                                    size="large"
                                    variant={
                                        props.activePreview === 1 ? "primary" : ""
                                    }
                                    onClick={() => handleActivePreview(1)}
                                >
                                    Sticky Icon
                                </Button>
                                <Button
                                    size="large"
                                    variant={
                                        props.activePreview === 2 ? "primary" : ""
                                    }
                                    onClick={() => handleActivePreview(2)}
                                >
                                    Drawer Cart{" "}
                                    <img
                                        src={newGif}
                                        style={{
                                            width: 30,
                                            verticalAlign: "middle",
                                        }}
                                    />
                                </Button>
                            </ButtonGroup>
                        </div>
                    </InlineStack>

                    {/* Preview Section  */}
                    <Box>
                        {/* If desktop preview is selected */}
                        {props.selectedDevice === 0 && (
                            <DesktopPreview
                                activePreview={props.activePreview}
                                stickyData={props.stickyData}
                                enableSticky={props.enableSticky}
                                defaultTemplate={props.defaultTemplate}
                                // Drawer props
                                customizationData={props.customizationData}
                            />
                        )}

                        {/* If mobile preview is selected */}
                        {props.selectedDevice === 1 && (
                            <MobilePreview
                                activePreview={props.activePreview}
                                stickyData={props.stickyData}
                                enableSticky={props.enableSticky}
                                defaultTemplate={props.defaultTemplate}
                                // Drawer props
                                customizationData={props.customizationData}
                            />
                        )}
                    </Box>
                </BlockStack>
            </Card>
        </div>
    );
}
