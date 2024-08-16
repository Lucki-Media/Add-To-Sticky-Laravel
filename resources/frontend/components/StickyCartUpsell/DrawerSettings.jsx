import { Badge, BlockStack, Card, Text } from "@shopify/polaris";
import React, { useCallback, useEffect, useState } from "react";
import Switch from "react-switch";
import "../../css/index.css";
import CartHeaderSettings from "../DrawerSettings/CartHeaderSettings";
import ShippingBarSettings from "../DrawerSettings/ShippingBarSettings";
import ProductListSettings from "../DrawerSettings/ProductListSettings";
import EmptyCartSettings from "../DrawerSettings/EmptyCartSettings";
import CartUpsellSettings from "../DrawerSettings/CartUpsellSettings";
import BottomSectionSettings from "../DrawerSettings/BottomSectionSettings";

export default function DrawerSettings(props) {
    const [enableDrawer, setEnableDrawer] = useState(true);
    const [customizationData, setCustomizationData] = useState(
        props.customizationData
    );

    // ENABLE DRAWER BUTTON LOGIC
    const handleEnable = (value) => {
        setEnableDrawer(!value);
        // setUnsavedChanges(isEqual(!value, props.originalenableSticky));
    };

    // HANDLE CALLBACK
    // const handleDataCallback = (data) => {
    //     setCustomizationData(data);
    //     callbackFunction(); // Call it directly after setting the data.
    // };

    // const callbackFunction = useCallback(() => {
    //     props.drawerDataCallback(customizationData);
    // }, [customizationData]);

    return (
        <BlockStack gap="400">
            {/* Drawer Cart Enable */}
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

            {/* Cart Header Settings */}
            <CartHeaderSettings
                customizationData={customizationData}
                // settingDataCallback={handleDataCallback}
            />

            {/* Empty Cart Settings */}
            <EmptyCartSettings
                customizationData={customizationData}
                // settingDataCallback={handleDataCallback}
            />

            {/* Free Shipping Bar Settings */}
            <ShippingBarSettings
                customizationData={customizationData}
                // settingDataCallback={handleDataCallback}
            />

            {/* Product List Settings */}
            <ProductListSettings
                customizationData={customizationData}
                // settingDataCallback={handleDataCallback}
            />

            {/* Cart Upsell Settings */}
            <CartUpsellSettings
                customizationData={customizationData}
                // settingDataCallback={handleDataCallback}
            />

            {/* Bottom Section Settings */}
            <BottomSectionSettings
                customizationData={customizationData}
                // settingDataCallback={handleDataCallback}
            />
        </BlockStack>
    );
}
