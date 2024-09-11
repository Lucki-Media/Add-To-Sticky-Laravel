import React, { useCallback, useEffect, useState } from "react";
import "../css/index.css";
import {
    Button,
    ButtonGroup,
    Card,
    Frame,
    FullscreenBar,
    Layout,
    Loading,
    Page,
    SkeletonBodyText,
    SkeletonDisplayText,
    SkeletonPage,
    Spinner,
    TextContainer,
    Toast,
} from "@shopify/polaris";
import StickyBarSettings from "../components/StickyBarSettings/StickyBarSettings";
import StickyBarPreview from "../components/Preview/StickyBarPreview";

export default function AddToCartSticky() {
    // Getting Shop Domain
    const shop_url = document.getElementById("shopOrigin").value;

    const [unsavedChanges, setUnsavedChanges] = useState(true);

    // loading states
    const [showTable, setShowTable] = useState(false);
    const [saveLoader, setSaveLoader] = useState(false);

    // sticky bar data
    const [stickyBarData, setStickyBarData] = useState([]);

    //toast for success
    const [toastContent, setToastContent] = useState();
    const [toastActive, setToastActive] = useState(false);
    const toggleToastActive = () => {
        setToastActive(!toastActive);
    };
    const toggleActive = useCallback(
        () => setToastActive((toastActive) => !toastActive),
        []
    );
    const toastMarkup = toastActive ? (
        <Toast content={toastContent} onDismiss={toggleToastActive} />
    ) : null;

    //toast for error
    const [toastContent1, setToastContent1] = useState();
    const [toastActive1, setToastActive1] = useState(false);
    const toggleToastActive1 = () => {
        setToastActive1(!toastActive1);
    };
    const toggleActive1 = useCallback(
        () => setToastActive1((toastActive1) => !toastActive1),
        []
    );
    const toastMarkup1 = toastActive1 ? (
        <Toast content={toastContent1} error onDismiss={toggleToastActive1} />
    ) : null;

    // USE EFFECT
    useEffect(() => {
        getAddToStickyCartData();
    }, []);

    // INIT API
    const getAddToStickyCartData = async () => {
        try {
            const response = await fetch(
                "api/getAddToStickyCartData/" + shop_url
            );
            const data = await response.json();
            console.log(data.data);

            // Stickybar data
            setStickyBarData(data.data);

            setShowTable(true);
            setSaveLoader(true);
        } catch (err) {
            console.log(err);
        }
    };

    // SAVE API
    let handleSave = async () => {
        console.log(123);
    };

    if (showTable === false) {
        return (
            <div>
                <Frame>
                    <Card>
                        <SkeletonPage primaryAction>
                            <Layout>
                                <Layout.Section>
                                    <Card sectioned>
                                        <SkeletonBodyText />
                                    </Card>
                                    <Card sectioned>
                                        <TextContainer>
                                            <SkeletonDisplayText size="small" />
                                            <SkeletonBodyText />
                                        </TextContainer>
                                    </Card>
                                </Layout.Section>
                            </Layout>
                        </SkeletonPage>
                    </Card>
                </Frame>
            </div>
        );
    } else if (saveLoader === false) {
        return (
            <div>
                <Frame>
                    <Loading />
                    <div style={{ marginLeft: "50%", marginTop: "20%" }}>
                        <Spinner
                            accessibilityLabel="Spinner example"
                            size="large"
                        />
                    </div>
                </Frame>
            </div>
        );
    } else {
        return (
            <>
                <Frame>
                    <div className="">
                        <div
                            className={`${
                                !unsavedChanges ? "showDiscardButton" : ""
                            } lm_sticky_fullscreenbar`}
                        >
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
                                            {!unsavedChanges
                                                ? "Unsaved Changes"
                                                : "Sticky Add To Cart"}
                                        </p>
                                    </div>
                                    <ButtonGroup>
                                        <Button
                                            size="large"
                                            onClick={handleSave}
                                            disabled={unsavedChanges}
                                        >
                                            Save
                                        </Button>
                                        {toastMarkup}
                                        {toastMarkup1}
                                    </ButtonGroup>
                                </div>
                            </FullscreenBar>
                        </div>

                        <Page fullWidth>
                            <div className="lm_sticky_layout">
                                <Layout>
                                    <Layout.Section variant="oneThird">
                                        <StickyBarSettings
                                            stickyBarData={stickyBarData}
                                        />
                                    </Layout.Section>
                                    <Layout.Section>
                                        <StickyBarPreview />
                                    </Layout.Section>
                                </Layout>
                            </div>
                        </Page>
                    </div>
                </Frame>
            </>
        );
    }
}
