import {
    BlockStack,
    Box,
    Button,
    InlineStack,
    Text,
    Thumbnail,
} from "@shopify/polaris";
import React, { useCallback, useEffect, useState } from "react";
import { ResourcePicker } from "@shopify/app-bridge-react";
import { ImageIcon, XIcon } from "@shopify/polaris-icons";

export default function ManualProductSelection(props) {
    const [isPickerOpen, setIsPickerOpen] = useState(false);

    const [SelectedProductIDs, setSelectedProductIDs] = useState(
        props.SelectedProductIDs || []
    );

    // Handling Product Selection
    const handleProductSelection = (payload) => {
        const data = payload.selection.map((product) => {
            return {
                id: product.id,
                handle: product.handle,
                title: product.title,
                imageSrc: product.images?.[0]?.originalSrc,
            };
        });

        setSelectedProductIDs(data);
        setIsPickerOpen(false);
    };

    const handlePickerClose = () => {
        setIsPickerOpen(false);
    };

    const removeProduct = useCallback(
        (productHandle) => () => {
            const productOptions = [...SelectedProductIDs];

            // Find the index of the product in the array where the handle matches
            const index = productOptions.findIndex(
                (product) => product.handle === productHandle.handle
            );

            // If found, remove it
            if (index !== -1) {
                productOptions.splice(index, 1);
            }
            setSelectedProductIDs(productOptions);
        },
        [SelectedProductIDs]
    );

    // Product Sections
    const productSection = SelectedProductIDs.map((option) => {
        return (
            <Box
                padding="400"
                background="bg-surface-secondary-hover"
                borderRadius="100"
            >
                <InlineStack align="space-between" blockAlign="center">
                    <InlineStack align="start" gap={200}>
                        <Thumbnail
                            source={option?.imageSrc || ImageIcon}
                            size="small"
                        />
                        <Text variant="bodyMd" fontWeight="medium" as="span">
                            {option?.title}
                        </Text>
                    </InlineStack>
                    <Button
                        icon={XIcon}
                        variant="plain"
                        tone="base"
                        onClick={removeProduct(option)}
                    />
                </InlineStack>
            </Box>
        );
    });

    const callbackFunction = useCallback(() => {
        props.productCallback(SelectedProductIDs);
    }, [SelectedProductIDs]);

    useEffect(() => {
        callbackFunction();
    }, [SelectedProductIDs]);

    return (
        <div>
            {/* ResourcePicker */}
            {isPickerOpen && (
                <ResourcePicker
                    resourceType="Product"
                    open={isPickerOpen}
                    onSelection={handleProductSelection}
                    onCancel={handlePickerClose}
                    showVariants={false}
                    selectMultiple={3}
                    initialSelectionIds={SelectedProductIDs.map((product) => {
                        return { id: product.id };
                    })}
                />
            )}

            <BlockStack gap="200">
                <InlineStack align="space-between">
                    <Text as={"h2"} variant="bodyLg" fontWeight="semibold">
                        Select upto 3 products for Upsell
                    </Text>
                </InlineStack>

                <BlockStack gap="200">
                    {SelectedProductIDs.length < 3 && (
                        <BlockStack gap="200">
                            <Button
                                onClick={() => setIsPickerOpen(true)}
                                id="select-target-collection"
                            >
                                Select Product
                            </Button>
                        </BlockStack>
                    )}
                    {SelectedProductIDs.length > 0 && (
                        <BlockStack gap={100}>{productSection} </BlockStack>
                    )}
                </BlockStack>
            </BlockStack>
        </div>
    );
}
