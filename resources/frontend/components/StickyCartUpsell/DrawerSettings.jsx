import { Badge, BlockStack, Card, Text } from "@shopify/polaris";
import React, { useState } from "react";
import Switch from "react-switch";
import "../../css/index.css";
import CartHeaderSettings from "../DrawerSettings/CartHeaderSettings";
import ShippingBarSettings from "../DrawerSettings/ShippingBarSettings";
import ProductListSettings from "../DrawerSettings/ProductListSettings";
import EmptyCartSettings from "../DrawerSettings/EmptyCartSettings";
import CartUpsellSettings from "../DrawerSettings/CartUpsellSettings";
import BottomSectionSettings from "../DrawerSettings/BottomSectionSettings";

export default function DrawerSettings() {
    const [enableDrawer, setEnableDrawer] = useState(true);

    // ENABLE DRAWER BUTTON LOGIC
    const handleEnable = (value) => {
        setEnableDrawer(!value);
        // setUnsavedChanges(isEqual(!value, props.originalenableSticky));
    };

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
            <CartHeaderSettings />

            {/* Empty Cart Settings */}
            <EmptyCartSettings />

            {/* Free Shipping Bar Settings */}
            <ShippingBarSettings />

            {/* Product List Settings */}
            <ProductListSettings />

            {/* Cart Upsell Settings */}
            <CartUpsellSettings />

            {/* Bottom Section Settings */}
            <BottomSectionSettings />
        </BlockStack>
    );
}
