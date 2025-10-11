import {
    BlockStack,
    Box,
    Button,
    ButtonGroup,
    Card,
    Divider,
    Frame,
    FullscreenBar,
    Icon,
    InlineStack,
    Layout,
    Modal,
    Page,
    Text,
} from "@shopify/polaris";
import { CheckIcon } from "@shopify/polaris-icons";
import React, { useCallback, useEffect, useState } from "react";
import "../css/index.css";

export default function StickyCart() {
    const shop_url = document.getElementById("shopOrigin").value;

    const [activePlan, setActivePlan] = useState(1); // 1=Free Plan , 2=monthly plan , 3=annual plan
    const [planOption, setPlanOption] = useState(1); //1=pay monthly, 2=pay annually
    const [showWarning, setShowWarning] = useState(false);
    const [loading, setLoading] = useState(false);

    const handlePlanOption = useCallback(
        (index) => {
            if (planOption === index) return;
            setPlanOption(index);
        },
        [planOption]
    );

    const freePlanFeatures = [
        "All Customization Features",
        "StickyBar",
        "Notification Bar",
        "Sticky Cart & Cart Drawer",
        "Free Shipping Bar",
    ];

    const premiumPlanFeatures = [
        <b>All Free Plan Features</b>,
        "UpSell Popup",
        "Cart Upsell",
        "Fully Customizable Product Selection",
        "Product Add To Cart From Cart Drawer",
    ];

    // handle function for plan change
    const handlePlanChange = async (option) => {
        // Show Banner first if merchant downgrades the Plan
        if (option === 1) {
            setShowWarning(true);
        } else {
            // call plan Upgrade API
            planUpgrade(option);
        }
    };

    // API CALL TO GET UPDATE DATA
    const planUpgrade = async (option) => {
        setLoading(true);
        try {
            const response = await fetch(
                "api/updatePricingPlan/" + shop_url + "/" + option
            );
            const data = await response.json();
            // console.log("data");
            // console.log(data);
            setLoading(false); // remain it false
            if (data.data !== "") {
                window.top.location.href = data.data;
                setActivePlan(data.data.plan_id);
            } else {
                getPlanData();
            }
        } catch (err) {
            console.log(err);
        }
    };

    // API CALL TO GET PLAN DATA
    const getPlanData = async () => {
        setLoading(true);
        const response = await fetch("api/getPlanData/" + shop_url);
        if (response.ok) {
            const responseData = await response.json();
            // console.log("getPlanData");
            // console.log(responseData.data);
            setActivePlan(responseData.data);
            setPlanOption(responseData.data === 3 ? 2 : 1);
            setLoading(false);
        }
    };

    useEffect(() => {
        getPlanData();
    }, []);

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
                                <ButtonGroup>
                                    <Button
                                        size="large"
                                        variant="primary"
                                        url="https://forms.gle/CTSsW3kpKgVturgX7"
                                        external
                                    >
                                        Get Support
                                    </Button>
                                </ButtonGroup>
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
                                    Pay Annually
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
                                        <Button
                                            fullWidth
                                            size="large"
                                            disabled={activePlan === 1}
                                            loading={loading}
                                            variant={
                                                activePlan === 1
                                                    ? ""
                                                    : "primary"
                                            }
                                            onClick={() => {
                                                handlePlanChange(1);
                                            }}
                                        >
                                            <Text
                                                as="span"
                                                variant="headingLg"
                                                fontWeight="medium"
                                            >
                                                {activePlan === 1
                                                    ? "Active"
                                                    : "Activate Plan"}
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
                                                $
                                                {planOption === 2 ? 7.99 : 9.99}
                                                /month
                                            </Text>
                                            {planOption === 2 && (
                                                <Text
                                                    variant="bodyLg"
                                                    as="span"
                                                    alignment="start"
                                                    tone="subdued"
                                                >
                                                    (save approx. 20%)
                                                </Text>
                                            )}
                                        </InlineStack>
                                        {planOption === 2 && (
                                            // pay annual selected
                                            <Button
                                                fullWidth
                                                size="large"
                                                disabled={activePlan === 3}
                                                loading={loading}
                                                variant={
                                                    activePlan === 3
                                                        ? ""
                                                        : "primary"
                                                }
                                                onClick={() => {
                                                    handlePlanChange(3);
                                                }}
                                            >
                                                <Text
                                                    as="span"
                                                    variant="headingLg"
                                                    fontWeight="medium"
                                                >
                                                    {activePlan === 3
                                                        ? "Active"
                                                        : "Activate Plan"}
                                                </Text>
                                            </Button>
                                        )}
                                        {planOption === 1 && (
                                            // pay monthly selected
                                            <Button
                                                fullWidth
                                                size="large"
                                                disabled={activePlan === 2}
                                                loading={loading}
                                                variant={
                                                    activePlan === 2
                                                        ? ""
                                                        : "primary"
                                                }
                                                onClick={() => {
                                                    handlePlanChange(2);
                                                }}
                                            >
                                                <Text
                                                    as="span"
                                                    variant="headingLg"
                                                    fontWeight="medium"
                                                >
                                                    {activePlan === 2
                                                        ? "Active"
                                                        : "Activate Plan"}
                                                </Text>
                                            </Button>
                                        )}
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

                {/* WARNING BANNER */}
                {showWarning && (
                    <Modal
                        open={showWarning}
                        onClose={() => {
                            setShowWarning(false);
                        }}
                        title={
                            <Text
                                as="span"
                                variant="headingLg"
                                fontWeight="medium"
                            >
                                Are you sure you want to activate the Free Plan?
                            </Text>
                        }
                        primaryAction={{
                            content: "Activate",
                            onAction: () => {
                                setShowWarning(false);
                                planUpgrade(1);
                            },
                        }}
                        secondaryActions={[
                            {
                                content: "Cancel",
                                onAction: () => {
                                    setShowWarning(false);
                                },
                            },
                        ]}
                    >
                        <Modal.Section>
                            <Box padding="300">
                                <Text
                                    variant="bodyLg"
                                    as="p"
                                    alignment="justify"
                                >
                                    By downgrading, you will lose access to all
                                    premium features.We value your experience
                                    with us. If there's anything specific that
                                    prompted this decision, please let us know.
                                    We're here to help and make your experience
                                    better! Feel free to reach out if you have
                                    any questions or need assistance.
                                </Text>
                            </Box>
                        </Modal.Section>
                    </Modal>
                )}
            </Frame>
        </>
    );
}
