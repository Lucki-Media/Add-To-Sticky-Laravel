import { BlockStack } from "@shopify/polaris";
import React, { useCallback, useEffect, useState } from "react";
import "../../css/index.css";
import CartHeaderSettings from "../DrawerSettings/CartHeaderSettings";
import ShippingBarSettings from "../DrawerSettings/ShippingBarSettings";
import ProductListSettings from "../DrawerSettings/ProductListSettings";
import EmptyCartSettings from "../DrawerSettings/EmptyCartSettings";
import CartUpsellSettings from "../DrawerSettings/CartUpsellSettings";
import BottomSectionSettings from "../DrawerSettings/BottomSectionSettings";
import EnableSettings from "../DrawerSettings/EnableSettings";

export default function DrawerSettings(props) {
    const [customizationData, setCustomizationData] = useState(
        props.customizationData
    );

    // HANDLE CALLBACK
    const handleDataCallback = (data) => {
        setCustomizationData(data);
    };

    // HANDLING MAIN JSON DATA START
    useEffect(() => {
        callbackFunction();
    }, [customizationData]);

    const callbackFunction = useCallback(() => {
        props.drawerDataCallback(customizationData);
    }, [customizationData]);
    // HANDLING MAIN JSON DATA END

    return (
        <BlockStack gap="400">
            {/* Drawer Cart Enable */}
            <EnableSettings
                customizationData={customizationData}
                settingDataCallback={handleDataCallback}
            />

            {/* Cart Header Settings */}
            <CartHeaderSettings
                customizationData={customizationData}
                settingDataCallback={handleDataCallback}
            />

            {/* Empty Cart Settings */}
            <EmptyCartSettings
                customizationData={customizationData}
                settingDataCallback={handleDataCallback}
            />

            {/* Free Shipping Bar Settings */}
            <ShippingBarSettings
                customizationData={customizationData}
                settingDataCallback={handleDataCallback}
            />

            {/* Product List Settings */}
            <ProductListSettings
                customizationData={customizationData}
                settingDataCallback={handleDataCallback}
            />

            {/* Cart Upsell Settings */}
            <CartUpsellSettings
                customizationData={customizationData}
                settingDataCallback={handleDataCallback}
            />

            {/* Bottom Section Settings */}
            <BottomSectionSettings
                customizationData={customizationData}
                settingDataCallback={handleDataCallback}
            />
        </BlockStack>
    );
}
