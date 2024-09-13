import {
    Badge,
    BlockStack,
    Card,
    Divider,
    InlineStack,
    Text,
} from "@shopify/polaris";
import React, { useCallback, useEffect, useState } from "react";
import Switch from "react-switch";
import "../../css/index.css";
import ProductSelection from "../ProductSelection/ProductSelection";
import newGif from "../../../../public/images/new.gif";

export default function HomePageSettings({
    homePageProductData,
    homePageDataCallback,
}) {
    const [productSwitch, setProductSwitch] = useState(true);
    const [homePageProduct, setHomePageProduct] = useState(homePageProductData);

    // HOME PAGE PRODUCT SWITCH LOGIC
    const handleSwitchChange = (checked) => {
        setProductSwitch(checked);
        setHomePageProduct("");
    };

    // HANDLING MAIN JSON DATA START
    useEffect(() => {
        callbackFunction();
    }, [homePageProduct]);

    const callbackFunction = useCallback(() => {
        homePageDataCallback(homePageProduct);
    }, [homePageProduct]);
    // HANDLING MAIN JSON DATA END

    return (
        <Card sectioned>
            <BlockStack gap={200}>
                <InlineStack blockAlign="center" gap={200}>
                    <Text variant="headingLg" fontWeight="medium">
                        Home Page Settings
                    </Text>
                    <img
                        src={newGif}
                        style={{ width: 50, verticalAlign: "middle" }}
                    />
                </InlineStack>
            </BlockStack>

            <div style={{ margin: "15px 0" }}>
                <Divider borderColor="border" />
            </div>

            {/* Show Product on home page */}
            <div className="setting_title">
                <Text
                    variant="bodyLg"
                    as="span"
                    alignment="start"
                    fontWeight="medium"
                >
                    Show specific product on homepage?{" "}
                    {productSwitch ? (
                        <span className="lm_sticky_custom_badge_success">
                            <Badge tone="success">Yes</Badge>
                        </span>
                    ) : (
                        <span className="lm_sticky_custom_badge_critical">
                            <Badge tone="critical">No</Badge>
                        </span>
                    )}
                </Text>
                <Switch
                    onChange={handleSwitchChange}
                    checked={productSwitch}
                    uncheckedIcon={null}
                    checkedIcon={null}
                />
            </div>

            {/* Product Selection */}
            {productSwitch && (
                <ProductSelection
                    homePageProduct={homePageProduct}
                    productSelectionCallBack={(value) =>
                        setHomePageProduct(value)
                    }
                />
            )}
        </Card>
    );
}
