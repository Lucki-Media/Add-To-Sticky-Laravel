import {
    BlockStack,
    Card,
    Divider,
    FormLayout,
    Text,
    TextField,
} from "@shopify/polaris";
import React, { useCallback, useEffect, useState } from "react";

export default function EmptyCartSettings(props) {
    const [ECContentText, setECContentText] = useState(
        props.customizationData.emptyCart.ECContentText
    );
    const [ECButtonText, setECButtonText] = useState(
        props.customizationData.emptyCart.ECButtonText
    );

    // CONTENT TEXT
    const handleECContentTextField = (val) => {
        setECContentText(val);
    };

    // BUTTON TEXT
    const handleECButtonTextField = (val) => {
        setECButtonText(val);
    };

    // HANDLING MAIN JSON DATA START
    var jsonData = {
        enableDrawer: props.customizationData.enableDrawer,
        cartHeader: props.customizationData.cartHeader,
        emptyCart: {
            ECContentText: ECContentText,
            ECButtonText: ECButtonText,
        },
        shippingBar: props.customizationData.shippingBar,
        productList: props.customizationData.productList,
        cartUpsell: props.customizationData.cartUpsell,
        bottomSection: props.customizationData.bottomSection,
    };

    useEffect(() => {
        callbackFunction();
    }, [ECContentText, ECButtonText]);

    const callbackFunction = useCallback(() => {
        props.settingDataCallback(jsonData);
    }, [jsonData]);
    // HANDLING MAIN JSON DATA END

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
