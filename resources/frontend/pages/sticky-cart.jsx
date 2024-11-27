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
import React, { useCallback, useEffect, useState } from "react";
import "../css/index.css";
import StickyCartPreview from "../components/Preview/StickyCartPreview";
import StickyIconSettings from "../components/StickyCartUpsell/StickyIconSettings";
import DrawerSettings from "../components/StickyCartUpsell/DrawerSettings";
import drawerCartData from "../assets/drawerCartData.js";
import stickyIconData from "../assets/stickyIconData.js";
import { isEqual } from "lodash";

export default function StickyCart() {
    // Getting Shop Domain
    const shop_url = document.getElementById("shopOrigin").value;

    const [showSettings, setShowSettings] = useState(1);
    const [unsavedChanges, setUnsavedChanges] = useState(true);

    // Device selection states
    const [activePreview, setActivePreview] = useState(2);
    const [selectedDevice, setSelectedDevice] = useState(0);

    // loading states
    const [showTable, setShowTable] = useState(false);
    const [saveLoader, setSaveLoader] = useState(false);

    // STICKY ICON DATA
    const [stickyData, setStickyData] = useState(stickyIconData);
    const [stickyAPIResponse, setStickyAPIResponse] = useState(stickyIconData);
    const [stickyCartData, setStickyCartData] = useState([]);

    const [originalenableSticky, setoriginalEnableSticky] = useState(true);
    const [enableSticky, setEnableSticky] = useState(true);

    const [originaldefaultTemplate, setoriginalDefaultTemplate] = useState("1");
    const [defaultTemplate, setDefaultTemplate] = useState("1");

    // DRAWER STATES
    const [customizationData, setCustomizationData] = useState(drawerCartData);
    const [drawerAPIResponse, setDrawerAPIResponse] = useState(drawerCartData);

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
        getStickyCartData();
    }, []);

    const handleIconCallBack = (iconData) => {
        setEnableSticky(iconData.enableSticky);
        setDefaultTemplate(iconData.defaultTemplate.toString());
        setStickyData(iconData.transfer_data);
    };

    // INIT API
    const getStickyCartData = async () => {
        try {
            const response = await fetch("api/getStickyCartData/" + shop_url);
            const data = await response.json();

            // STICKY ICON DATA
            setStickyCartData(data.data);
            setoriginalEnableSticky(data.data.enableSticky);
            setEnableSticky(data.data.enableSticky);
            setoriginalDefaultTemplate(data.data.defaultTemplate.toString());
            setDefaultTemplate(data.data.defaultTemplate.toString());
            setStickyData(data.data.current_template);
            setStickyAPIResponse(data.data.current_template);

            // DRAWER CART DATA
            setCustomizationData(data.data.drawer_cart_data);
            setDrawerAPIResponse(data.data.drawer_cart_data);

            setShowTable(true);
            setSaveLoader(true);
            setUnsavedChanges(true);
        } catch (err) {
            console.log(err);
        }
    };

    // SAVE API
    let handleSave = async () => {
        try {
            let payLoad = {
                shop_domain: document.getElementById("shopOrigin").value,
                enableSticky: enableSticky,
                defaultTemplate: defaultTemplate,
                stickyData: stickyData,
                drawer_cart_data: customizationData,
            };
            setSaveLoader(false);
            let response = await axios.post("/api/saveStickyCartData", {
                data: payLoad,
            });
            if (response.data.status == true) {
                // console.log("success");
                setSaveLoader(true);
                getStickyCartData();
                setToastContent(response.data.message);
                toggleActive();
                setUnsavedChanges(true);
            } else {
                setToastContent1(response.data.message);
                toggleActive1();
            }
        } catch (err) {
            console.log(err);
        }
    };

    const handleShowSettings = (activePreview) => {
        setShowSettings(activePreview);
    };

    // HANDLE DRAWER DATA CALLBACK
    const handleDrawerDataCallback = (data) => {
        setCustomizationData(data);
    };

    // SAVE BUTTON LOGIC
    useEffect(() => {
        setUnsavedChanges(
            isEqual(customizationData, drawerAPIResponse) &&
                isEqual(stickyData, stickyAPIResponse) &&
                String(originaldefaultTemplate) === String(defaultTemplate) &&
                originalenableSticky === enableSticky
        );
    }, [
        customizationData,
        drawerAPIResponse,
        stickyData,
        stickyAPIResponse,
        originaldefaultTemplate,
        defaultTemplate,
        originalenableSticky,
        enableSticky,
    ]);

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
                <style>
                    {`
                            @import url("https://fonts.googleapis.com/css2?family=Oswald&display=swap");
                            .apply-font{
                                font-family : Oswald;
                            }
                        `}
                </style>
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
                                                : "Drawer Cart"}
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
                                        {showSettings === 1 && (
                                            <StickyIconSettings
                                                enableSticky={enableSticky}
                                                stickyData={stickyData}
                                                iconCallBack={
                                                    handleIconCallBack
                                                }
                                                stickyCartData={stickyCartData}
                                                defaultTemplate={
                                                    defaultTemplate
                                                }
                                            />
                                        )}
                                        {showSettings === 2 && (
                                            <DrawerSettings
                                                drawerDataCallback={
                                                    handleDrawerDataCallback
                                                }
                                                customizationData={
                                                    customizationData
                                                }
                                            />
                                        )}
                                    </Layout.Section>
                                    <Layout.Section>
                                        <StickyCartPreview
                                            stickyData={stickyData}
                                            onPreviewChange={handleShowSettings}
                                            enableSticky={enableSticky}
                                            defaultTemplate={defaultTemplate}
                                            // Drawer props
                                            customizationData={
                                                customizationData
                                            }
                                            activePreview={activePreview}
                                            selectedDevice={selectedDevice}
                                            activePreviewCallback={(e) => {
                                                setActivePreview(e);
                                            }}
                                            selectedDeviceCallback={(e) => {
                                                setSelectedDevice(e);
                                            }}
                                        />
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
