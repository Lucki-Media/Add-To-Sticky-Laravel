import {
    BlockStack,
    FormLayout,
    InlineStack,
    RadioButton,
    Select,
    Text,
} from "@shopify/polaris";
import React, { useCallback, useEffect, useState } from "react";
import ManualProductSelection from "./ManualProductSelection";
import CollectionSelection from "./CollectionSelection";

export default function ProductListSelection(props) {
    const [CUPLSelection, setCUPLSelection] = useState(props.CUPLSelection);
    const [CUPLManualSelection, setCUPLManualSelection] = useState(
        props.CUPLManualSelection
    );

    const [SelectedCollectionID, setSelectedCollectionID] = useState(
        props.SelectedCollectionID
    );
    const [SelectedProductIDs, setSelectedProductIDs] = useState(
        props.SelectedProductIDs
    );

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
    const handleCollectionCallback = (data) => {
        setSelectedCollectionID(data);
    };

    // PRODUCT CALLBACK HANDLE
    const handleProductCallback = (data) => {
        setSelectedProductIDs(data);
    };

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
                            />
                        ) : (
                            <CollectionSelection
                                collectionCallback={handleCollectionCallback}
                                SelectedCollectionID={SelectedCollectionID}
                            />
                        )}
                    </>
                }
        </BlockStack>
    );
}
