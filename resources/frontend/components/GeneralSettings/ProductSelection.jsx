import {
    Autocomplete,
    BlockStack,
    Button,
    Icon,
    InlineStack,
    ResourceItem,
    ResourceList,
    SkeletonBodyText,
    SkeletonThumbnail,
    Text,
    Thumbnail,
} from "@shopify/polaris";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { SearchIcon, XIcon } from "@shopify/polaris-icons";

export default function ProductSelection() {
    // Getting Shop Domain
    const shop_url = document.getElementById("shopOrigin").value;

    const deselectedOptions = useMemo(
        () => [
            {
                media: "https://burst.shopifycdn.com/photos/freelance-designer-working-on-laptop.jpg?width=746",
                value: "rustic",
                label: "Rustic",
            },
            {
                media: "https://burst.shopifycdn.com/photos/freelance-designer-working-on-laptop.jpg?width=746",
                value: "antique",
                label: "Antique",
            },
            {
                media: "https://burst.shopifycdn.com/photos/freelance-designer-working-on-laptop.jpg?width=746",
                value: "vinyl",
                label: "Vinyl",
            },
            {
                media: "https://burst.shopifycdn.com/photos/freelance-designer-working-on-laptop.jpg?width=746",
                value: "vintage",
                label: "Vintage",
            },
            {
                media: "https://burst.shopifycdn.com/photos/freelance-designer-working-on-laptop.jpg?width=746",
                value: "refurbished",
                label: "Refurbished",
            },
        ],
        []
    );
    const [loadingState, setLoadingState] = useState(true);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [options, setOptions] = useState(deselectedOptions);

    const updateText = useCallback(
        (value) => {
            setInputValue(value);

            if (value === "") {
                setOptions(deselectedOptions);
                return;
            }

            const filterRegex = new RegExp(value, "i");
            const resultOptions = deselectedOptions.filter((option) =>
                option.label.match(filterRegex)
            );
            setOptions(resultOptions);
        },
        [deselectedOptions]
    );

    const updateSelection = useCallback(
        (selected) => {
            const selectedValue = selected.map((selectedItem) => {
                const matchedOption = options.find((option) => {
                    return option.value.match(selectedItem);
                });
                return matchedOption && matchedOption.label;
            });

            setSelectedOptions(selected);
            setInputValue(selectedValue[0] || "");
        },
        [options]
    );

    const textField = (
        <Autocomplete.TextField
            onChange={updateText}
            label="Search Product"
            labelHidden
            value={inputValue}
            prefix={<Icon source={SearchIcon} tone="base" />}
            placeholder="Search"
            autoComplete="off"
        />
    );

    useEffect(() => {
        getAllProducts();
    }, []);

    // INIT API
    const getAllProducts = async () => {
        try {
            setLoadingState(true);
            const response = await fetch("api/getAllProducts/" + shop_url);
            const data = await response.json();
            console.log(data.data);
            setLoadingState(false);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div style={{ marginTop: 15 }}>
            <BlockStack gap="200">
                {loadingState ? (
                    <>
                        <SkeletonBodyText lines={1} />
                        <InlineStack
                            gap="400"
                            align="space-between"
                            wrap={false}
                        >
                            <SkeletonThumbnail size="small" />
                            <SkeletonBodyText />
                        </InlineStack>
                    </>
                ) : (
                    <>
                        <Text variant="headingMd" as="span" fontWeight="medium">
                            Select Product you want to show on homepage
                        </Text>
                        <div style={{ maxHeight: "225px" }}>
                            <Autocomplete
                                options={options}
                                selected={selectedOptions}
                                onSelect={updateSelection}
                                textField={textField}
                            />
                        </div>

                        <ResourceList
                            resourceName={{
                                singular: "Product",
                                plural: "Products",
                            }}
                            items={[
                                {
                                    id: "145",
                                    url: "#",
                                    avatarSource:
                                        "https://burst.shopifycdn.com/photos/freelance-designer-working-on-laptop.jpg?width=746",
                                    name: "Yi So-Yeon",
                                    location: "Gwangju, South Korea",
                                    lastOrder: "Emerald Silk Gown",
                                },
                            ]}
                            renderItem={(item) => {
                                const { id, name } = item;
                                return (
                                    <ResourceItem
                                        verticalAlignment="center"
                                        id={id}
                                        media={
                                            <Thumbnail
                                                source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
                                                size="small"
                                            />
                                        }
                                        name={name}
                                    >
                                        <InlineStack align="space-between">
                                            <Text
                                                variant="bodyMd"
                                                fontWeight="medium"
                                                as="span"
                                            >
                                                {name}
                                            </Text>

                                            <Button
                                                icon={XIcon}
                                                variant="plain"
                                                tone="base"
                                                onClick={() =>
                                                    console.log("hello...")
                                                }
                                            />
                                        </InlineStack>
                                    </ResourceItem>
                                );
                            }}
                        />
                    </>
                )}
            </BlockStack>
        </div>
    );
}
