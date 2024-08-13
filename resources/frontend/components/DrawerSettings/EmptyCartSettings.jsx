import {
    BlockStack,
    Card,
    Divider,
    FormLayout,
    Text,
    TextField,
} from "@shopify/polaris";
import React, { useState } from "react";

export default function EmptyCartSettings() {
    const [ECContentText, setECContentText] = useState(
        "Oops! Your Cart is Empty!"
    );
    const [ECButtonText, setECButtonText] = useState("Continue Shopping");

    // CONTENT TEXT
    const handleECContentTextField = (val) => {
        setECContentText(val);
    };

    // BUTTON TEXT
    const handleECButtonTextField = (val) => {
        setECButtonText(val);
    };

    return (
        <Card sectioned>
            <Text variant="headingLg" fontWeight="medium">
                Empty Cart Settings
            </Text>

            <div style={{ margin: "15px 0" }}>
                <Divider borderColor="border" />
            </div>

            <FormLayout>
                <FormLayout.Group condensed>
                    {/* Empty Cart Content Text */}
                    <BlockStack gap="200">
                        <Text variant="headingMd" as="span" fontWeight="medium">
                            Empty Cart Content Text
                        </Text>
                        <TextField
                            error={ECContentText == "" || ECContentText == null}
                            value={ECContentText ?? ""}
                            onChange={handleECContentTextField}
                            autoComplete="off"
                            maxLength={60}
                            id="ECContentText"
                            placeholder="Example: Oops! Your Cart is Empty!"
                            showCharacterCount
                        />
                        {(ECContentText == "" || ECContentText == null) && (
                            <div style={{ marginTop: "4px" }}>
                                <InlineError
                                    message={"This field is required"}
                                    fieldID={"ECContentText"}
                                />
                            </div>
                        )}
                    </BlockStack>
                </FormLayout.Group>

                <FormLayout.Group condensed>
                    {/* Empty Cart Button Text */}
                    <BlockStack gap="200">
                        <Text variant="headingMd" as="span" fontWeight="medium">
                            Empty Cart Button Text
                        </Text>
                        <TextField
                            error={ECButtonText == "" || ECButtonText == null}
                            value={ECButtonText ?? ""}
                            onChange={handleECButtonTextField}
                            autoComplete="off"
                            maxLength={20}
                            id="ECButtonText"
                            placeholder="Example: Continue Shopping"
                            showCharacterCount
                        />
                        {(ECButtonText == "" || ECButtonText == null) && (
                            <div style={{ marginTop: "4px" }}>
                                <InlineError
                                    message={"This field is required"}
                                    fieldID={"ECButtonText"}
                                />
                            </div>
                        )}
                    </BlockStack>
                </FormLayout.Group>
            </FormLayout>
        </Card>
    );
}
