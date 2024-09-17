import {
    BlockStack,
    Box,
    Card,
    Icon,
    InlineStack,
    Tabs,
    Text,
} from "@shopify/polaris";
import React, { useCallback } from "react";
import { DesktopIcon, MobileIcon } from "@shopify/polaris-icons";
import DesktopPreview from "./StickyBar/DesktopPreview";
import MobilePreview from "./StickyBar/MobilePreview";

export default function StickyBarPreview({
    stickyBarData,
    selectedDevice,
    selectedDeviceCallback,
}) {
    // Device Selection Logic Start
    const handleDeviceTabChange = useCallback(
        (selectedTabIndex) => selectedDeviceCallback(selectedTabIndex),
        []
    );

    const deviceTabs = [
        {
            id: "desktop",
            content: <Icon source={DesktopIcon} tone="primary" />,
            panelID: "desktop",
        },
        {
            id: "mobile",
            content: <Icon source={MobileIcon} tone="primary" />,
            panelID: "mobile",
        },
    ];
    // Device Selection Logic End

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
                                selected={selectedDevice}
                                onSelect={handleDeviceTabChange}
                                fitted
                            ></Tabs>
                        </Box>
                        <div
                            style={{
                                display: "block !important",
                                width: "100px",
                            }}
                        ></div>
                    </InlineStack>

                    {/* Preview Section  */}
                    <Box>
                        {/* If desktop preview is selected */}
                        {selectedDevice === 0 && (
                            <DesktopPreview stickyBarData={stickyBarData} />
                        )}

                        {/* If mobile preview is selected */}
                        {selectedDevice === 1 && (
                            <MobilePreview stickyBarData={stickyBarData} />
                        )}
                    </Box>
                </BlockStack>
            </Card>
        </div>
    );
}
