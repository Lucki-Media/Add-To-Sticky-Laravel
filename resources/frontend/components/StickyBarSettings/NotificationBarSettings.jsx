import {
    BlockStack,
    Card,
    Divider,
    FormLayout,
    InlineError,
    Text,
    TextField,
} from "@shopify/polaris";
import React, { useCallback, useState } from "react";

export default function NotificationBarSettings() {
    const [gsNotificationBarText, setGsNotificationBarText] = useState("Hello");

    // Notification Bar Text Field Handle Event
    const handleNbTextFieldChange = useCallback(
        (value) => setGsNotificationBarText(value),
        []
    );

    return (
        <Card sectioned>
            <BlockStack gap={200}>
                <Text variant="headingLg" fontWeight="medium">
                    Notification Bar Settings
                </Text>
                <Text
                    variant="headingMd"
                    as="span"
                    fontWeight="regular"
                    tone="subdued"
                >
                    (<strong>Note:</strong> You can utilize this feature only if
                    you have selected "Stay on Same Page" for Button Action
                    onclick.)
                </Text>
            </BlockStack>

            <div style={{ margin: "15px 0" }}>
                <Divider borderColor="border" />
            </div>

            <FormLayout>
                {/* Notification Text */}
                <FormLayout.Group condensed>
                    <BlockStack gap={200}>
                        <Text variant="headingMd" as="span" fontWeight="medium">
                            Notification Text
                        </Text>
                        <TextField
                            error={
                                gsNotificationBarText == "" ||
                                gsNotificationBarText == null
                            }
                            value={gsNotificationBarText ?? ""}
                            onChange={handleNbTextFieldChange}
                            autoComplete="off"
                            maxLength={60}
                            id="gsNotificationBarText"
                            placeholder="Example: Yayy! Product Added to Cart!"
                            showCharacterCount
                        />
                        {(gsNotificationBarText == "" ||
                            gsNotificationBarText == null) && (
                            <div
                                style={{
                                    marginTop: "4px",
                                }}
                            >
                                <InlineError
                                    message={"This field is required"}
                                    fieldID={"gsNotificationBarText"}
                                />
                            </div>
                        )}
                    </BlockStack>
                </FormLayout.Group>
            </FormLayout>
        </Card>
    );
}
