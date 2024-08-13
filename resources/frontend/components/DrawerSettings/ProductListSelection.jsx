import {
    BlockStack,
    FormLayout,
    InlineStack,
    RadioButton,
    Select,
    Text,
} from "@shopify/polaris";
import React, { useCallback, useState } from "react";

export default function ProductListSelection() {
    const [CUPLSelection, setCUPLSelection] = useState("1");
    const [CUPLManualSelection, setCUPLManualSelection] = useState("1");

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

            <FormLayout.Group condensed>
                <BlockStack gap="200">
                    <Text variant="headingMd" as="span" fontWeight="medium">
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
        </BlockStack>
    );
}
