import {
    BlockStack,
    Box,
    Button,
    InlineStack,
    Text,
    Thumbnail,
} from "@shopify/polaris";
import React, { useCallback, useEffect, useState } from "react";
import { ImageIcon } from "@shopify/polaris-icons";
import { ResourcePicker } from "@shopify/app-bridge-react";

export default function CollectionSelection(props) {
    const [isPickerOpen, setIsPickerOpen] = useState(false);
    const [SelectedCollectionID, setSelectedCollectionID] = useState(() => {
        if (
            typeof props.SelectedCollectionID === "string" &&
            props.SelectedCollectionID.trim() !== ""
        ) {
            try {
                return JSON.parse(props.SelectedCollectionID);
            } catch (error) {
                console.error("Error parsing SelectedCollectionID:", error);
                return {}; // Fallback to an empty object in case of error
            }
        }
        return props.SelectedCollectionID || {};
    });

    // Handling Collection Selection
    const handleCollectionSelection = (payload) => {
        const data = {
            id: payload.selection[0].id,
            handle: payload.selection[0].handle,
            title: payload.selection[0].title,
            imageSrc: payload.selection[0].image?.originalSrc,
        };
        setSelectedCollectionID(data);
        setIsPickerOpen(false);
    };

    const handlePickerClose = () => {
        setIsPickerOpen(false);
    };

    useEffect(() => {
        callbackFunction();
    }, [SelectedCollectionID]);

    const callbackFunction = useCallback(() => {
        props.collectionCallback(
            SelectedCollectionID !== undefined
                ? JSON.stringify(SelectedCollectionID)
                : ""
        );
    }, [SelectedCollectionID]);

    return (
        <BlockStack gap="200">
            {/* ResourcePicker */}
            {isPickerOpen && (
                <ResourcePicker
                    resourceType="Collection"
                    open={isPickerOpen}
                    onSelection={handleCollectionSelection}
                    onCancel={handlePickerClose}
                    showVariants={false}
                    selectMultiple={false}
                />
            )}

            <Box
                padding="300"
                background="bg-surface-secondary-hover"
                borderRadius="150"
            >
                <BlockStack gap="200">
                    <InlineStack align="space-between">
                        <Text as={"h2"} variant="bodyLg" fontWeight="semibold">
                            Target Collection
                        </Text>
                        {SelectedCollectionID &&
                            SelectedCollectionID?.handle !== undefined && (
                                <Button
                                    variant="plain"
                                    onClick={() => setIsPickerOpen(true)}
                                >
                                    Change Collection
                                </Button>
                            )}
                    </InlineStack>
                    {SelectedCollectionID &&
                    Object.keys(SelectedCollectionID).length > 0 ? (
                        <Box
                            padding="200"
                            background="bg-surface-secondary-hover"
                            borderRadius="100"
                        >
                            <InlineStack
                                align="start"
                                blockAlign="center"
                                gap={400}
                            >
                                <Thumbnail
                                    source={
                                        SelectedCollectionID?.imageSrc ||
                                        ImageIcon
                                    }
                                    size="small"
                                />
                                <Text
                                    variant="bodyMd"
                                    fontWeight="medium"
                                    as="span"
                                >
                                    {SelectedCollectionID?.title}
                                </Text>
                            </InlineStack>
                        </Box>
                    ) : (
                        <BlockStack gap="200">
                            <Button
                                onClick={() => setIsPickerOpen(true)}
                                id="select-target-collection"
                            >
                                Select Collection
                            </Button>
                        </BlockStack>
                    )}
                </BlockStack>
            </Box>
        </BlockStack>
    );
}
