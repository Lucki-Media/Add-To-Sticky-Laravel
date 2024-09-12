import {
    BlockStack,
    Card,
    Checkbox,
    Divider,
    FormLayout,
    Select,
    Text,
} from "@shopify/polaris";
import React, { useCallback, useState } from "react";

export default function GeneralSettings({ currentTemplate }) {
    const [checkMobile, setCheckMobile] = useState(
        currentTemplate.general_settings.checkMobile
    );
    const [checkDesktop, setCheckDesktop] = useState(
        currentTemplate.general_settings.checkDesktop
    );
    const [gsAction, setGsAction] = useState(
        currentTemplate.general_settings.gsAction
    );
    const [gsDisplayCondition, setGsDisplayCondition] = useState(
        currentTemplate.general_settings.gsDisplayCondition
    );

    /*DISPLAY SETTING START GENERAL SETTINGS*/
    const handlecheckboxMobile = useCallback(
        (newChecked) => setCheckMobile(newChecked),
        []
    );

    const handlecheckboxDesktop = useCallback(
        (newChecked) => setCheckDesktop(newChecked),
        []
    );

    /*ACTION GENERAL SETTINGS*/
    const handleSelectGSChange = useCallback((value) => setGsAction(value), []);
    const optionsGS = [
        { label: "Go to Cart", value: "1" },
        { label: "Go to Checkout", value: "2" },
        { label: "Stay on Same Page", value: "3" },
    ];

    /*DISPLAY CONDITION GENERAL SETTINGS*/
    const handleConditionChange = useCallback(
        (value) => setGsDisplayCondition(value),
        []
    );
    const conditions = [
        { label: "Always show", value: "1" },
        {
            label: "Only when add to cart is not visible",
            value: "2",
        },
        {
            label: "Only when user has scrolled down and surpassed the 'Add to cart' button",
            value: "3",
        },
    ];

    return (
        <Card sectioned>
            <Text variant="headingLg" fontWeight="medium">
                General Settings
            </Text>

            <div style={{ margin: "15px 0" }}>
                <Divider borderColor="border" />
            </div>

            <FormLayout>
                {/* Device Settings */}
                <FormLayout.Group condensed>
                    <BlockStack gap="200">
                        <Text variant="headingMd" as="span" fontWeight="medium">
                            Device Settings
                        </Text>
                        <div className="style__wrapper_div">
                            <Checkbox
                                label="Desktop"
                                checked={checkDesktop}
                                onChange={handlecheckboxDesktop}
                            />
                            <Checkbox
                                label="Mobile"
                                checked={checkMobile}
                                onChange={handlecheckboxMobile}
                            />
                        </div>
                        <Text
                            variant="headingMd"
                            as="span"
                            fontWeight="regular"
                            tone="subdued"
                        >
                            (<strong>Note:</strong> On which device you would
                            like to show Add To Cart Sticky on your store)
                        </Text>
                    </BlockStack>
                </FormLayout.Group>

                <Divider borderColor="border" />

                {/* Button Action Onclick */}
                <FormLayout.Group condensed>
                    <BlockStack gap="200">
                        <Text
                            variant="bodyLg"
                            as="span"
                            alignment="start"
                            fontWeight="medium"
                        >
                            Button Action Onclick
                        </Text>
                        <Select
                            label="Button Action Onclick"
                            options={optionsGS}
                            onChange={handleSelectGSChange}
                            value={gsAction}
                            labelHidden
                        />
                    </BlockStack>
                </FormLayout.Group>

                {/* Display Condition */}
                <FormLayout.Group condensed>
                    <BlockStack gap="200">
                        <Text
                            variant="bodyLg"
                            as="span"
                            alignment="start"
                            fontWeight="medium"
                        >
                            Display Condition
                        </Text>
                        <Select
                            label="Display Condition"
                            options={conditions}
                            onChange={handleConditionChange}
                            value={gsDisplayCondition}
                            labelHidden
                        />
                    </BlockStack>
                </FormLayout.Group>
            </FormLayout>
        </Card>
    );
}
