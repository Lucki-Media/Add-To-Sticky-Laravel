import {
    BlockStack,
    Box,
    Button,
    Card,
    Divider,
    Frame,
    FullscreenBar,
    Icon,
    InlineStack,
    Layout,
    Page,
    Text,
} from "@shopify/polaris";
import { CheckIcon } from "@shopify/polaris-icons";
import React, { useCallback, useState } from "react";
import "../css/index.css";

export default function StickyCart() {
    const [planOption, setPlanOption] = useState(1);

    const handlePlanOption = useCallback(
        (index) => {
            if (planOption === index) return;
            setPlanOption(index);
        },
        [planOption]
    );

    const freePlanFeatures = [1, 2, 3, 4, 5];

    const premiumPlanFeatures = [5, 6, 7, 8, 9];

    return (
        <>
            <Frame>
                <div className="">
                    <div className="lm_sticky_fullscreenbar">
                        <FullscreenBar>
                            <div
                                style={{
                                    display: "flex",
                                    flexGrow: 1,
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    paddingLeft: "1rem",
                                    paddingRight: "1rem",
                                }}
                            >
                                <div
                                    style={{
                                        marginLeft: "1rem",
                                        flexGrow: 1,
                                    }}
                                >
                                    <p className="fullscreen_title">
                                        Pricing Plans
                                    </p>
                                </div>
                            </div>
                        </FullscreenBar>
                    </div>

                    <Page>
                        <div className="lm_sticky_pricing_plans">
                            <Button
                                size="large"
                                // pressed=
                                variant={
                                    planOption === 1 ? "primary" : "tertiary"
                                }
                                onClick={() => handlePlanOption(1)}
                            >
                                <span style={{ padding: "0 16px" }}>
                                    Pay Monthly
                                </span>
                            </Button>
                            <Button
                                size="large"
                                // pressed=
                                variant={
                                    planOption === 2 ? "primary" : "tertiary"
                                }
                                onClick={() => handlePlanOption(2)}
                            >
                                <span style={{ padding: "0 16px" }}>
                                    Pay Anually
                                </span>
                            </Button>
                        </div>

                        <Layout>
                            {/* Free Plan  */}
                            <Layout.Section variant="oneThird">
                                <Card>
                                    <BlockStack gap="500">
                                        <BlockStack gap="100">
                                            <Text
                                                variant="headingLg"
                                                as="h5"
                                                alignment="start"
                                            >
                                                Free Plan
                                            </Text>
                                            <Text
                                                variant="bodyLg"
                                                as="p"
                                                alignment="justify"
                                            >
                                                Everything you want to get
                                                started.
                                            </Text>
                                        </BlockStack>
                                        <Divider borderColor="border" />
                                        <Text
                                            variant="headingXl"
                                            as="span"
                                            alignment="start"
                                        >
                                            Free
                                        </Text>
                                        <Button fullWidth size="large">
                                            <Text as="span" variant="headingLg">
                                                Active
                                            </Text>
                                        </Button>
                                        <Divider borderColor="border" />
                                        <Box padding="200">
                                            <BlockStack gap="400">
                                                {freePlanFeatures.map(
                                                    (topic) => (
                                                        <InlineStack
                                                            align="start"
                                                            gap={200}
                                                        >
                                                            <span>
                                                                <Icon
                                                                    tone="primary"
                                                                    source={
                                                                        CheckIcon
                                                                    }
                                                                />
                                                            </span>
                                                            <Text
                                                                as="span"
                                                                variant="bodyLg"
                                                            >
                                                                {topic}
                                                            </Text>
                                                        </InlineStack>
                                                    )
                                                )}
                                            </BlockStack>
                                        </Box>
                                    </BlockStack>
                                </Card>
                            </Layout.Section>

                            {/* Premium Plan  */}
                            <Layout.Section variant="oneThird">
                                <Card>
                                    <BlockStack gap="500">
                                        <BlockStack gap="100">
                                            <Text
                                                variant="headingLg"
                                                as="h5"
                                                alignment="start"
                                            >
                                                Premium Plan
                                            </Text>
                                            <Text
                                                variant="bodyLg"
                                                as="p"
                                                alignment="justify"
                                            >
                                                Rais your sell with adavanced
                                                featured cart.
                                            </Text>
                                        </BlockStack>
                                        <Divider borderColor="border" />
                                        <InlineStack gap="100" blockAlign="end">
                                            <Text
                                                variant="headingXl"
                                                as="span"
                                                alignment="start"
                                            >
                                                $9.99/month
                                            </Text>
                                            <Text
                                                variant="bodyLg"
                                                as="span"
                                                alignment="start"
                                                tone="subdued"
                                            >
                                                (save approx. 20%)
                                            </Text>
                                        </InlineStack>
                                        <Button
                                            fullWidth
                                            variant="primary"
                                            size="large"
                                        >
                                            <Text as="span" variant="headingLg">
                                                Upgrade
                                            </Text>
                                        </Button>
                                        <Divider borderColor="border" />
                                        <Box padding="200">
                                            <BlockStack gap="400">
                                                {premiumPlanFeatures.map(
                                                    (topic) => (
                                                        <InlineStack
                                                            align="start"
                                                            gap={200}
                                                        >
                                                            <span>
                                                                <Icon
                                                                    tone="primary"
                                                                    source={
                                                                        CheckIcon
                                                                    }
                                                                />
                                                            </span>
                                                            <Text
                                                                as="span"
                                                                variant="bodyLg"
                                                            >
                                                                {topic}
                                                            </Text>
                                                        </InlineStack>
                                                    )
                                                )}
                                            </BlockStack>
                                        </Box>
                                    </BlockStack>
                                </Card>
                            </Layout.Section>
                        </Layout>
                    </Page>
                </div>
            </Frame>
        </>
    );
}
