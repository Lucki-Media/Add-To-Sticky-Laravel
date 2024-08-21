import {
    BlockStack,
    FormLayout,
    InlineStack,
    RadioButton,
    Select,
    SkeletonBodyText,
    SkeletonThumbnail,
    Text,
} from "@shopify/polaris";
import React, { useCallback, useEffect, useState } from "react";
import ManualProductSelection from "./ManualProductSelection";
import CollectionSelection from "./CollectionSelection";

export default function ProductListSelection(props) {
    // Getting Shop Domain
    const shop_url = document.getElementById("shopOrigin").value;

    const [loadingState, setLoadingState] = useState(true);
    const [CUPLSelection, setCUPLSelection] = useState(props.CUPLSelection);
    const [CUPLManualSelection, setCUPLManualSelection] = useState(
        props.CUPLManualSelection
    );

    const [SelectedCollectionID, setSelectedCollectionID] = useState(
        props.SelectedCollectionID
    );
    const [collectionResponse, setCollectionResponse] = useState([]);

    const [SelectedProductIDs, setSelectedProductIDs] = useState(
        props.SelectedProductIDs
    );
    const [productResponse, setProductResponse] = useState([]);

    // PRODUCT LIST LOGIC
    const handleCUPLSelectionChange = (key) => {
        setCUPLSelection(key);
    };

    // MANUAL SELECTION OPTIONS
    const CUPLManualOptions = [
        { label: "Manual Products", value: "1" },
        { label: "Specific Collection", value: "2" },
    ];
    const handleCUPLManualSelection = useCallback(
        (value) => setCUPLManualSelection(value),
        []
    );

    // COLLECTION CALLBACK HANDLE
    const handleCollectionCallback = (id) => {
        setSelectedCollectionID(id[0]);
    };

    // PRODUCT CALLBACK HANDLE
    const handleProductCallback = (data) => {
        setSelectedProductIDs(data);
    };

    // API CALL
    const getManualSelectionData = async () => {
        try {
            setLoadingState(true);
            const response = await fetch(
                "api/getManualSelectionData/" + shop_url
            );
            const data = await response.json();
            setCollectionResponse(data.data.collection_data);
            setProductResponse(data.data.product_data);
            setLoadingState(false);
        } catch (err) {
            console.log(err);
        }
    };

    // USE EFFECT
    useEffect(() => {
        if (CUPLSelection === "2") {
            getManualSelectionData();
        }
    }, [CUPLSelection]);

    // HANDLE CALLBACK
    useEffect(() => {
        callbackFunction();
    }, [
        CUPLSelection,
        CUPLManualSelection,
        SelectedCollectionID,
        SelectedProductIDs,
    ]);

    const callbackFunction = useCallback(() => {
        props.productListCallback({
            CUPLSelection: CUPLSelection,
            CUPLManualSelection: CUPLManualSelection,
            SelectedCollectionID: SelectedCollectionID,
            SelectedProductIDs: SelectedProductIDs,
        });
    }, [
        CUPLSelection,
        CUPLManualSelection,
        SelectedCollectionID,
        SelectedProductIDs,
    ]);
    
    return (
        <BlockStack gap="300">
            <FormLayout.Group condensed>
                {/* Product Selection Method */}
                <BlockStack gap="200">
                    <Text variant="headingMd" as="span" fontWeight="medium">
                        Product List Select
                    </Text>
                    <InlineStack gap="500" wrap={false}>
                        <RadioButton
                            label={"Default Recommendation"}
                            id={"CUPLSelection1"}
                            checked={CUPLSelection === "1"}
                            name="CUPLSelection"
                            onChange={() => {
                                handleCUPLSelectionChange("1");
                            }}
                        />
                        <RadioButton
                            label={"Manually Select"}
                            id={"CUPLSelection2"}
                            checked={CUPLSelection === "2"}
                            name="CUPLSelection"
                            onChange={() => {
                                handleCUPLSelectionChange("2");
                            }}
                        />
                    </InlineStack>
                </BlockStack>
            </FormLayout.Group>

            {CUPLSelection === "2" &&
                (loadingState ? (
                    <>
                        <SkeletonBodyText lines={3} />
                        <InlineStack
                            gap="400"
                            align="space-between"
                            wrap={false}
                        >
                            <SkeletonThumbnail size="small" />
                            <SkeletonBodyText />
                        </InlineStack>
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
                        <FormLayout.Group condensed>
                            <BlockStack gap="200">
                                <Text
                                    variant="headingMd"
                                    as="span"
                                    fontWeight="medium"
                                >
                                    Manual Selection
                                </Text>
                                <Select
                                    label="Manual Selection"
                                    options={CUPLManualOptions}
                                    onChange={handleCUPLManualSelection}
                                    value={CUPLManualSelection}
                                    labelHidden
                                />
                            </BlockStack>
                        </FormLayout.Group>
                        {CUPLManualSelection === "1" ? (
                            <ManualProductSelection
                                productCallback={handleProductCallback}
                                SelectedProductIDs={SelectedProductIDs}
                                productResponse={productResponse}
                            />
                        ) : (
                            <CollectionSelection
                                collectionCallback={handleCollectionCallback}
                                SelectedCollectionID={SelectedCollectionID}
                                collectionResponse={collectionResponse}
                            />
                        )}
                    </>
                ))}
        </BlockStack>
    );
}
