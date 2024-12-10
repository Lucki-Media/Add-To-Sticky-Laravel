import {
    BlockStack,
    Box,
    Button,
    InlineStack,
    Text,
    Thumbnail,
} from "@shopify/polaris";
import React, { useEffect, useState } from "react";
import { ResourcePicker } from "@shopify/app-bridge-react";
import { XIcon, ImageIcon } from "@shopify/polaris-icons";

export default function ProductSelection(props) {
    const [isPickerOpen, setIsPickerOpen] = useState(false);
    const [homePageProduct, setHomePageProduct] = useState(() => {
        if (
            typeof props.homePageProduct === "string" &&
            props.homePageProduct.trim() !== ""
        ) {
            try {
                return JSON.parse(props.homePageProduct);
            } catch (error) {
                console.error("Error parsing homePageProduct:", error);
                return {}; // Fallback to an empty object in case of error
            }
        }
        return props.homePageProduct || {};
    });

    // Handling Product Selection
    const handleProductSelection = (payload) => {
        const data = {
            id: payload.selection[0].id,
            handle: payload.selection[0].handle,
            title: payload.selection[0].title,
            imageSrc: payload.selection[0].images?.[0]?.originalSrc,
        };
        setHomePageProduct(data);
        setIsPickerOpen(false);
    };

    const handlePickerClose = () => {
        setIsPickerOpen(false);
        setHomePageProduct();
    };

    const removeProduct = () => {
        setHomePageProduct();
    };

    useEffect(() => {
        props.productSelectionCallBack(
            homePageProduct !== undefined ? JSON.stringify(homePageProduct) : ""
        );
    }, [homePageProduct]);

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
                    selectMultiple={false}
                />
            )}

            {/* Home Page Product */}
            <Box
                padding="300"
                background="bg-surface-secondary-hover"
                borderRadius="150"
            >
                <BlockStack gap="200">
                    <InlineStack align="space-between">
                        <Text as={"h2"} variant="bodyLg" fontWeight="semibold">
                            Target Product
                        </Text>
                        {homePageProduct?.id && (
                            <Button
                                variant="plain"
                                onClick={() => setIsPickerOpen(true)}
                            >
                                Change Product
                            </Button>
                        )}
                    </InlineStack>
                    {homePageProduct &&
                    Object.keys(homePageProduct).length > 0 ? (
                        <InlineStack align="space-between" blockAlign="center">
                            <Box width="15%" padding="0">
                                <Thumbnail
                                    source={
                                        homePageProduct?.imageSrc || ImageIcon
                                    }
                                    size="small"
                                />
                            </Box>
                            <Box width="75%" padding="200">
                                <Text
                                    variant="bodyMd"
                                    fontWeight="medium"
                                    as="span"
                                >
                                    {homePageProduct?.title}
                                </Text>
                            </Box>
                            <Box width="10%" padding="200">
                                <Button
                                    icon={XIcon}
                                    variant="plain"
                                    tone="base"
                                    onClick={removeProduct}
                                />
                            </Box>
                        </InlineStack>
                    ) : (
                        <BlockStack gap="200">
                            <Button
                                onClick={() => setIsPickerOpen(true)}
                                id="select-target-product"
                            >
                                Select Product
                            </Button>
                        </BlockStack>
                    )}
                </BlockStack>
            </Box>
        </div>
    );
}
