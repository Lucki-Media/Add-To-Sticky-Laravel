import {
    Autocomplete,
    BlockStack,
    Box,
    Button,
    Icon,
    InlineStack,
    SkeletonBodyText,
    SkeletonThumbnail,
    Text,
    Thumbnail,
} from "@shopify/polaris";
import React, { useCallback, useEffect, useState } from "react";
import { SearchIcon, XIcon } from "@shopify/polaris-icons";
import noImage from "../../assets/no_image.jpg";

export default function ProductSelection(props) {
    // Getting Shop Domain
    const shop_url = document.getElementById("shopOrigin").value;

    const [loadingState, setLoadingState] = useState(true);
    const [homePageProduct, setHomePageProduct] = useState(
        props.homePageProduct
    );
    const [selectedItem, setSelectedItem] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [options, setOptions] = useState([]);
    const [deselectedOptions, setDeselectedOptions] = useState([]);
    const [productResponse, setProductResponse] = useState([]);

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
            // Find the object with the matching id
            const product = productResponse.find(
                (option) => String(option.id) === String(selected)
            );

            // Transform the found product into the desired structure
            const selectedObject = product
                ? {
                      id: String(product.id),
                      title: product.title,
                      src:
                          product.image && product.image.src
                              ? product.image.src
                              : noImage,
                  }
                : null;

            // Update the selected options and item state
            setSelectedOptions(selected);
            setSelectedItem(selectedObject);
            setHomePageProduct(String(selected));
        },
        [productResponse]
    );

    const removeProduct = () => {
        setSelectedItem([]);
        setSelectedOptions([]);
        setHomePageProduct("");
    };

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

    useEffect(() => {
        props.productSelectionCallBack(homePageProduct);
    }, [homePageProduct]);

    // INIT API
    const getAllProducts = async () => {
        try {
            setLoadingState(true);
            const response = await fetch("api/getAllProducts/" + shop_url);
            const data = await response.json();
            // console.log(data.data.products);

            var productArray = data.data.products.map((product) => ({
                media: (
                    <Thumbnail
                        source={
                            product.image && product.image.src
                                ? product.image.src
                                : noImage
                        }
                        size="small"
                    />
                ),
                value: String(product.id),
                label: product.title,
            }));

            setProductResponse(data.data.products);
            setDeselectedOptions(productArray);
            setOptions(productArray);

            // set product showcase code start
            let selected = [props.homePageProduct];

            // Find the object with the matching id
            const product = data.data.products.find(
                (option) => String(option.id) === String(selected)
            );

            // Transform the found product into the desired structure
            const selectedObject = product
                ? {
                      id: String(product.id),
                      title: product.title,
                      src:
                          product.image && product.image.src
                              ? product.image.src
                              : noImage,
                  }
                : null;

            // Update the selected options and item state
            setSelectedOptions(selected);
            setSelectedItem(selectedObject);
            setHomePageProduct(String(selected));
            // set product showcase code end

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

                        {selectedItem && selectedItem.id !== undefined && (
                            <Box
                                padding="400"
                                background="bg-surface-secondary-hover"
                                borderRadius="100"
                            >
                                <InlineStack
                                    align="space-between"
                                    blockAlign="center"
                                >
                                    <InlineStack align="start" gap={200}>
                                        <Thumbnail
                                            source={selectedItem.src}
                                            size="small"
                                        />
                                        <Text
                                            variant="bodyMd"
                                            fontWeight="medium"
                                            as="span"
                                        >
                                            {selectedItem.title}
                                        </Text>
                                    </InlineStack>
                                    <Button
                                        icon={XIcon}
                                        variant="plain"
                                        tone="base"
                                        onClick={removeProduct}
                                    />
                                </InlineStack>
                            </Box>
                        )}
                    </>
                )}
            </BlockStack>
        </div>
    );
}
