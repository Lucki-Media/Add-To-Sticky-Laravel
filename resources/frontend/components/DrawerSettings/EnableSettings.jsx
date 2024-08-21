import { Badge, Card, Text } from "@shopify/polaris";
import Switch from "react-switch";
import React, { useCallback, useEffect, useState } from "react";

export default function EnableSettings(props) {
    const [enableDrawer, setEnableDrawer] = useState(
        props.customizationData.enableDrawer
    );

    // ENABLE DRAWER BUTTON LOGIC
    const handleEnable = (value) => {
        setEnableDrawer(!value);
    };

    // HANDLING MAIN JSON DATA START
    var jsonData = {
        enableDrawer: enableDrawer,
        cartHeader: props.customizationData.cartHeader,
        emptyCart: props.customizationData.emptyCart,
        shippingBar: props.customizationData.shippingBar,
        productList: props.customizationData.productList,
        cartUpsell: props.customizationData.cartUpsell,
        bottomSection: props.customizationData.bottomSection,
    };

    useEffect(() => {
        callbackFunction();
    }, [enableDrawer]);

    const callbackFunction = useCallback(() => {
        props.settingDataCallback(jsonData);
    }, [jsonData]);
    // HANDLING MAIN JSON DATA END

    return (
        <Card>
            <div className="setting_title">
                <Text
                    variant="bodyLg"
                    as="span"
                    alignment="start"
                    fontWeight="medium"
                >
                    Drawer Cart is{" "}
                    {enableDrawer ? (
                        <span className="lm_sticky_custom_badge_success">
                            <Badge tone="success">Enabled</Badge>
                        </span>
                    ) : (
                        <span className="lm_sticky_custom_badge_critical">
                            <Badge tone="critical">Disabled</Badge>
                        </span>
                    )}
                </Text>
                <Switch
                    onChange={() => {
                        handleEnable(enableDrawer);
                    }}
                    checked={enableDrawer}
                    uncheckedIcon={null}
                    checkedIcon={null}
                />
            </div>
        </Card>
    );
}
