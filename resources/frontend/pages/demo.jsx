import {
    Card,
    Frame,
    FullscreenBar,
    Layout,
    Page,
    Text,
} from "@shopify/polaris";
import React from "react";
import "../css/index.css";

export default function StickyCart() {
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
                        <Layout>
                            {/* Free Plan  */}
                            <Layout.Section variant="oneHalf">
                                <Card>
                                    <Text
                                        variant="headingLg"
                                        as="h5"
                                        alignment="center"
                                    >
                                        Free Plan
                                    </Text>
                                    <Text
                                        variant="bodyLg"
                                        as="p"
                                        alignment="justify"
                                    >
                                        Everything you want to get started.
                                    </Text>
                                </Card>
                            </Layout.Section>

                            {/* Premium Plan  */}
                            <Layout.Section variant="oneHalf">
                                <Card>
                                    <Text
                                        variant="headingLg"
                                        as="h5"
                                        alignment="center"
                                    >
                                        Premium Plan
                                    </Text>
                                    <Text
                                        variant="bodyLg"
                                        as="p"
                                        alignment="justify"
                                    >
                                        Rais your sell with adavanced featured
                                        cart.
                                    </Text>
                                </Card>
                            </Layout.Section>
                        </Layout>
                    </Page>
                </div>
            </Frame>
        </>
    );
}
