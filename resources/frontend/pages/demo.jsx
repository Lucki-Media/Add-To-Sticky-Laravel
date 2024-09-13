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
import isEqual from "lodash/isEqual";

export default function AddToCartSticky() {
    // Getting Shop Domain
    const shop_url = document.getElementById("shopOrigin").value;

    const [unsavedChanges, setUnsavedChanges] = useState(true);
    const [APIresponse, setAPIresponse] = useState([]);

     // Device selection states
     const [selectedDevice, setSelectedDevice] = useState(0);

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

    // HANDLE DATA CALLBACK
    const handleSBDataCallback = (data) => {
        setStickyBarData(data);
    };

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

            // Stickybar data
            setStickyBarData(data.data);
            setAPIresponse(data.data);

            setShowTable(true);
            setSaveLoader(true);
        } catch (err) {
            console.log(err);
        }
    };

    // SAVE API
    let handleSave = async () => {
        try {
            setSaveLoader(false);

            // set changed details for particular selected template
            switch (String(stickyBarData.defaultTemplate)) {
                case "1":
                    stickyBarData.template_1 = stickyBarData.current_template;
                    break;
                case "2":
                    stickyBarData.template_2 = stickyBarData.current_template;
                    break;
                case "3":
                    stickyBarData.template_3 = stickyBarData.current_template;
                    break;
                case "4":
                    stickyBarData.template_4 = stickyBarData.current_template;
                    break;
                case "5":
                    stickyBarData.template_5 = stickyBarData.current_template;
                    break;
                case "6":
                    stickyBarData.template_6 = stickyBarData.current_template;
                    break;
                case "7":
                    stickyBarData.template_7 = stickyBarData.current_template;
                    break;
                case "8":
                    stickyBarData.template_8 = stickyBarData.current_template;
                    break;
                default:
                    stickyBarData.current_template =
                        stickyBarData.current_template;
                    break;
            }

            // Call Save API
            let response = await axios.post(
                "/api/saveAddToStickyCartData",
                stickyBarData
            );
            if (response.data.status == true) {
                setStickyBarData(response.data.data);
                setAPIresponse(response.data.data);

                setSaveLoader(true);
                getAddToStickyCartData();
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

    // SAVE BUTTON LOGIC
    useEffect(() => {
        setUnsavedChanges(isEqual(stickyBarData, APIresponse));
    }, [stickyBarData, APIresponse]);

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
                                            sbDataCallback={
                                                handleSBDataCallback
                                            }
                                            stickyBarData={stickyBarData}
                                        />
                                    </Layout.Section>
                                    <Layout.Section>
                                        <StickyBarPreview 
                                        stickyBarData={stickyBarData}
                                        selectedDevice={selectedDevice}
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
