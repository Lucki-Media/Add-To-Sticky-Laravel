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

export default function StickyCart() {
    // Getting Shop Domain
    const shop_url = document.getElementById("shopOrigin").value;

    const [showSettings, setShowSettings] = useState(1);

    // loading states
    const [showTable, setShowTable] = useState(false);
    const [saveLoader, setSaveLoader] = useState(false);

    const [stickyCartData, setStickyCartData] = useState([]);
    const [originalenableSticky, setoriginalEnableSticky] = useState(true);
    const [enableSticky, setEnableSticky] = useState(true);
    const [originaldefaultTemplate, setoriginalDefaultTemplate] = useState("1");
    const [defaultTemplate, setDefaultTemplate] = useState("1");
    const [originalaction, setoriginalAction] = useState("1");
    const [action, setAction] = useState("1");
    const [originalbtnSize, setoriginalBtnSize] = useState(60);
    const [btnSize, setBtnSize] = useState(60);
    const [originalbgColor, setoriginalBgColor] = useState("#000000");
    const [bgColor, setBgColor] = useState("#000000");
    const [originalbgHoverColor, setoriginalBgHoverColor] = useState("#000000");
    const [bgHoverColor, setBgHoverColor] = useState("#000000");
    const [originalborderSize, setoriginalBorderSize] = useState(1);
    const [borderSize, setBorderSize] = useState(1);
    const [originalborderColor, setoriginalBorderColor] = useState("#000000");
    const [borderColor, setBorderColor] = useState("#000000");
    const [originalborderHoverColor, setoriginalBorderHoverColor] =
        useState("#000000");
    const [borderHoverColor, setBorderHoverColor] = useState("#000000");
    const [originalpositionTop, setoriginalPositionTop] = useState(20);
    const [positionTop, setPositionTop] = useState(20);
    const [originalpositionLeft, setoriginalPositionLeft] = useState(0);
    const [positionLeft, setPositionLeft] = useState(0);
    const [originaliconSize, setoriginalIconSize] = useState(20);
    const [iconSize, setIconSize] = useState(20);
    const [originaliconColor, setoriginalIconColor] = useState("#000000");
    const [iconColor, setIconColor] = useState("#000000");
    const [originaliconHoverColor, setoriginalIconHoverColor] =
        useState("#f08080");
    const [iconHoverColor, setIconHoverColor] = useState("#f08080");
    const [originalenableCount, setoriginalEnableCount] = useState(false);
    const [enableCount, setEnableCount] = useState(false);
    const [numberCount, setNumberCount] = useState(1);
    const [originalcountSize, setoriginalCountSize] = useState(16);
    const [countSize, setCountSize] = useState(16);
    const [originalcountFontSize, setoriginalCountFontSize] = useState(14);
    const [countFontSize, setCountFontSize] = useState(14);
    const [originalcountColor, setoriginalCountColor] = useState("#000000");
    const [countColor, setCountColor] = useState("#000000");
    const [originalcountHoverColor, setoriginalCountHoverColor] =
        useState("#000000");
    const [countHoverColor, setCountHoverColor] = useState("#000000");
    const [originalcountBgColor, setoriginalCountBgColor] = useState("#000000");
    const [countBgColor, setCountBgColor] = useState("#000000");
    const [originalcountBgHoverColor, setoriginalCountBgHoverColor] =
        useState("#000000");
    const [countBgHoverColor, setCountBgHoverColor] = useState("#000000");
    const [unsavedChanges, setUnsavedChanges] = useState(true);

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
        setAction(iconData.action);
        setBtnSize(iconData.btnSize);
        setBgColor(iconData.bgColor);
        setBgHoverColor(iconData.bgHoverColor);
        setBorderSize(iconData.borderSize);
        setBorderColor(iconData.borderColor);
        setBorderHoverColor(iconData.borderHoverColor);
        setPositionTop(iconData.positionTop);
        setPositionLeft(iconData.positionLeft);
        setIconSize(iconData.iconSize);
        setIconColor(iconData.iconColor);
        setIconHoverColor(iconData.iconHoverColor);
        setEnableCount(iconData.enableCount);
        setNumberCount(iconData.numberCount);
        setCountSize(iconData.countSize);
        setCountFontSize(iconData.countFontSize);
        setCountColor(iconData.countColor);
        setCountHoverColor(iconData.countHoverColor);
        setCountBgColor(iconData.countBgColor);
        setCountBgHoverColor(iconData.countBgHoverColor);
        setUnsavedChanges(iconData.unsavedChanges);
    };

    // INIT API
    const getStickyCartData = async () => {
        try {
            const response = await fetch("api/getStickyCartData/" + shop_url);
            const data = await response.json();
            setStickyCartData(data.data);
            setoriginalEnableSticky(data.data.enableSticky);
            setEnableSticky(data.data.enableSticky);
            setoriginalDefaultTemplate(data.data.defaultTemplate.toString());
            setDefaultTemplate(data.data.defaultTemplate.toString());
            setoriginalAction(data.data.current_template.action);
            setAction(data.data.current_template.action);
            setoriginalBtnSize(data.data.current_template.btnSize);
            setBtnSize(data.data.current_template.btnSize);
            setoriginalBgColor(data.data.current_template.bgColor);
            setBgColor(data.data.current_template.bgColor);
            setoriginalBgHoverColor(data.data.current_template.bgHoverColor);
            setBgHoverColor(data.data.current_template.bgHoverColor);
            setoriginalBorderSize(data.data.current_template.borderSize);
            setBorderSize(data.data.current_template.borderSize);
            setoriginalBorderColor(data.data.current_template.borderColor);
            setBorderColor(data.data.current_template.borderColor);
            setoriginalBorderHoverColor(
                data.data.current_template.borderHoverColor
            );
            setBorderHoverColor(data.data.current_template.borderHoverColor);
            setoriginalPositionTop(data.data.current_template.positionTop);
            setPositionTop(data.data.current_template.positionTop);
            setoriginalPositionLeft(data.data.current_template.positionLeft);
            setPositionLeft(data.data.current_template.positionLeft);
            setoriginalIconSize(data.data.current_template.iconSize);
            setIconSize(data.data.current_template.iconSize);
            setoriginalIconColor(data.data.current_template.iconColor);
            setIconColor(data.data.current_template.iconColor);
            setoriginalIconHoverColor(
                data.data.current_template.iconHoverColor
            );
            setIconHoverColor(data.data.current_template.iconHoverColor);
            setoriginalEnableCount(data.data.current_template.enableCount);
            setEnableCount(data.data.current_template.enableCount);
            setNumberCount(data.data.current_template.numberCount);
            setoriginalCountSize(data.data.current_template.countSize);
            setCountSize(data.data.current_template.countSize);
            setoriginalCountFontSize(data.data.current_template.countFontSize);
            setCountFontSize(data.data.current_template.countFontSize);
            setoriginalCountColor(data.data.current_template.countColor);
            setCountColor(data.data.current_template.countColor);
            setoriginalCountHoverColor(
                data.data.current_template.countHoverColor
            );
            setCountHoverColor(data.data.current_template.countHoverColor);
            setoriginalCountBgColor(data.data.current_template.countBgColor);
            setCountBgColor(data.data.current_template.countBgColor);
            setoriginalCountBgHoverColor(
                data.data.current_template.countBgHoverColor
            );
            setCountBgHoverColor(data.data.current_template.countBgHoverColor);
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
                action: action,
                btnSize: btnSize,
                bgColor: bgColor,
                bgHoverColor: bgHoverColor,
                borderSize: borderSize,
                borderColor: borderColor,
                borderHoverColor: borderHoverColor,
                positionTop: positionTop,
                positionLeft: positionLeft,
                iconSize: iconSize,
                iconColor: iconColor,
                iconHoverColor: iconHoverColor,
                enableCount: enableCount,
                numberCount: numberCount,
                countSize: countSize,
                countFontSize: countFontSize,
                countColor: countColor,
                countHoverColor: countHoverColor,
                countBgColor: countBgColor,
                countBgHoverColor: countBgHoverColor,
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
                                                : "Sticky Cart"}
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
                                                iconCallBack={
                                                    handleIconCallBack
                                                }
                                                stickyCartData={stickyCartData}
                                                originalenableSticky={
                                                    originalenableSticky
                                                }
                                                enableSticky={enableSticky}
                                                originaldefaultTemplate={
                                                    originaldefaultTemplate
                                                }
                                                defaultTemplate={
                                                    defaultTemplate
                                                }
                                                originalaction={originalaction}
                                                action={action}
                                                originalbtnSize={
                                                    originalbtnSize
                                                }
                                                btnSize={btnSize}
                                                originalbgColor={
                                                    originalbgColor
                                                }
                                                bgColor={bgColor}
                                                originalbgHoverColor={
                                                    originalbgHoverColor
                                                }
                                                bgHoverColor={bgHoverColor}
                                                originalborderSize={
                                                    originalborderSize
                                                }
                                                borderSize={borderSize}
                                                originalborderColor={
                                                    originalborderColor
                                                }
                                                borderColor={borderColor}
                                                originalborderHoverColor={
                                                    originalborderHoverColor
                                                }
                                                borderHoverColor={
                                                    borderHoverColor
                                                }
                                                originalpositionTop={
                                                    originalpositionTop
                                                }
                                                positionTop={positionTop}
                                                originalpositionLeft={
                                                    originalpositionLeft
                                                }
                                                positionLeft={positionLeft}
                                                originaliconSize={
                                                    originaliconSize
                                                }
                                                iconSize={iconSize}
                                                originaliconColor={
                                                    originaliconColor
                                                }
                                                iconColor={iconColor}
                                                originaliconHoverColor={
                                                    originaliconHoverColor
                                                }
                                                iconHoverColor={iconHoverColor}
                                                originalenableCount={
                                                    originalenableCount
                                                }
                                                enableCount={enableCount}
                                                numberCount={numberCount}
                                                originalcountSize={
                                                    originalcountSize
                                                }
                                                countSize={countSize}
                                                originalcountFontSize={
                                                    originalcountFontSize
                                                }
                                                countFontSize={countFontSize}
                                                originalcountColor={
                                                    originalcountColor
                                                }
                                                countColor={countColor}
                                                originalcountHoverColor={
                                                    originalcountHoverColor
                                                }
                                                countHoverColor={
                                                    countHoverColor
                                                }
                                                originalcountBgColor={
                                                    originalcountBgColor
                                                }
                                                countBgColor={countBgColor}
                                                originalcountBgHoverColor={
                                                    originalcountBgHoverColor
                                                }
                                                countBgHoverColor={
                                                    countBgHoverColor
                                                }
                                                unsavedChanges={unsavedChanges}
                                            />
                                        )}
                                        {showSettings === 2 && (
                                            <DrawerSettings />
                                        )}
                                    </Layout.Section>
                                    <Layout.Section>
                                        <StickyCartPreview
                                            onPreviewChange={handleShowSettings}
                                            enableSticky={enableSticky}
                                            iconSize={iconSize}
                                            iconHoverColor={iconHoverColor}
                                            borderSize={borderSize}
                                            iconColor={iconColor}
                                            borderHoverColor={borderHoverColor}
                                            borderColor={borderColor}
                                            bgHoverColor={bgHoverColor}
                                            bgColor={bgColor}
                                            btnSize={btnSize}
                                            positionTop={positionTop}
                                            positionLeft={positionLeft}
                                            enableCount={enableCount}
                                            countBgHoverColor={
                                                countBgHoverColor
                                            }
                                            countBgColor={countBgColor}
                                            countSize={countSize}
                                            countFontSize={countFontSize}
                                            countHoverColor={countHoverColor}
                                            countColor={countColor}
                                            numberCount={numberCount}
                                            defaultTemplate={defaultTemplate}
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
