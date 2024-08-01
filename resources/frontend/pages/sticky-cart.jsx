import {
    Badge,
    BlockStack,
    Button,
    ButtonGroup,
    Card,
    Divider,
    FormLayout,
    Frame,
    FullscreenBar,
    Layout,
    Loading,
    Page,
    RangeSlider,
    Select,
    SkeletonBodyText,
    SkeletonDisplayText,
    SkeletonPage,
    Spinner,
    Text,
    TextContainer,
    Toast,
} from "@shopify/polaris";
import React, { useCallback, useEffect, useState } from "react";
import Switch from "react-switch";
import { isEqual } from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import proimage from "../assets/productimage.png";
import {
    faCartArrowDown,
    faCartPlus,
    faCartShopping,
    faBasketShopping,
    faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import "../css/index.css";

export default function StickyCart() {
    // Getting Shop Domain
    const shop_url = document.getElementById("shopOrigin").value;

    // loading states
    const [showTable, setShowTable] = useState(false);
    const [saveLoader, setSaveLoader] = useState(false);

    const [iconHover, setIconHover] = useState(false);
    const [stickyCartData, setStickyCartData] = useState([]);
    const [countHover, setCountHover] = useState(false);
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
    // const [positionRight, setPositionRight] = useState(1);
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

    const templateOptions = [
        { label: "Shopping Cart", value: "1" },
        { label: "Cart With Plus", value: "2" },
        { label: "Cart With Down Arrow", value: "3" },
        { label: "Shopping Basket", value: "4" },
        { label: "Shopping Bag", value: "5" },
    ];

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
            // setPositionRight(data.data.current_template.positionRight);
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
                // positionRight: positionRight,
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

    // ENABLE BUTTON LOGIC
    const handleEnable = (value) => {
        setEnableSticky(!value);
        setUnsavedChanges(isEqual(!value, originalenableSticky));
    };

    //ENABLE COUNT SHOW LOGIC
    const handlecheckbox = (value) => {
        setEnableCount(!value);
        setUnsavedChanges(isEqual(!value, originalenableCount));
    };

    // ICON HOVER
    const handleIconEnter = () => {
        setIconHover(true);
    };

    const handleIconLeave = () => {
        setIconHover(false);
    };

    // COUNT HOVER
    const handleCountEnter = () => {
        setCountHover(true);
    };

    const handleCountLeave = () => {
        setCountHover(false);
    };

    //ICON SELECT
    const handleChange = useCallback(
        (value) => {
            setUnsavedChanges(isEqual(value, originaldefaultTemplate));
            var currentData;
            switch (value) {
                case "1":
                    currentData = stickyCartData.sticky_template_1;
                    break;
                case "2":
                    currentData = stickyCartData.sticky_template_2;
                    break;
                case "3":
                    currentData = stickyCartData.sticky_template_3;
                    break;
                case "4":
                    currentData = stickyCartData.sticky_template_4;
                    break;
                case "5":
                    currentData = stickyCartData.sticky_template_5;
                    break;
                default:
                    currentData = stickyCartData.current_template;
                    break;
            }
            // console.log("currentData");
            // console.log(currentData);
            setEnableSticky(stickyCartData.enableSticky);
            setAction(currentData.action);
            setBtnSize(currentData.btnSize);
            setBgColor(currentData.bgColor);
            setBgHoverColor(currentData.bgHoverColor);
            setBorderSize(currentData.borderSize);
            setBorderColor(currentData.borderColor);
            setBorderHoverColor(currentData.borderHoverColor);
            setPositionTop(currentData.positionTop);
            setPositionLeft(currentData.positionLeft);
            // setPositionRight(currentData.positionRight);
            setIconSize(currentData.iconSize);
            setIconColor(currentData.iconColor);
            setIconHoverColor(currentData.iconHoverColor);
            setEnableCount(currentData.enableCount);
            setNumberCount(currentData.numberCount);
            setCountSize(currentData.countSize);
            setCountFontSize(currentData.countFontSize);
            setCountColor(currentData.countColor);
            setCountHoverColor(currentData.countHoverColor);
            setCountBgColor(currentData.countBgColor);
            setCountBgHoverColor(currentData.countBgHoverColor);
        },
        [stickyCartData, originaldefaultTemplate]
    );

    // ACTION
    const handleSelectChange = useCallback(
        (value) => {
            setAction(value), setUnsavedChanges(isEqual(value, originalaction));
        },
        [originalaction]
    );
    const options = [
        { label: "Go to Cart", value: "1" },
        { label: "Go to Checkout", value: "2" },
    ];

    //SIZE
    const handleRangeSliderChange = useCallback(
        (value) => {
            setBtnSize(value),
                setUnsavedChanges(isEqual(value, originalbtnSize));
        },

        [originalbtnSize]
    );

    // BORDER SIZE
    const handleBorderSliderChange = useCallback(
        (value) => {
            setBorderSize(value),
                setUnsavedChanges(isEqual(value, originalborderSize));
        },
        [originalborderSize]
    );

    // BG COLOR
    const handleBGColor = (event) => {
        setBgColor(event.target.value);
        setUnsavedChanges(isEqual(event.target.value, originalbgColor));
    };

    // BG HOVER COLOR
    const handleBGHoverColor = (event) => {
        setBgHoverColor(event.target.value);
        setUnsavedChanges(isEqual(event.target.value, originalbgHoverColor));
    };

    // BORDER COLOR
    const handleBorderColor = (event) => {
        setBorderColor(event.target.value);
        setUnsavedChanges(isEqual(event.target.value, originalborderColor));
    };

    // BORDER HOVER COLOR
    const handleBorderHoverColor = (event) => {
        setBorderHoverColor(event.target.value);
        setUnsavedChanges(
            isEqual(event.target.value, originalborderHoverColor)
        );
    };

    //TOP
    const handleEditTopField = useCallback(
        (value) => {
            setPositionTop(value),
                setUnsavedChanges(isEqual(value, originalpositionTop));
        },

        [originalpositionTop]
    );

    //LEFT
    const handleEditLeftField = useCallback(
        (value) => {
            setPositionLeft(value),
                setUnsavedChanges(isEqual(value, originalpositionLeft));
        },

        [originalpositionLeft]
    );

    //ICON SIZE
    const handleIconSliderChange = useCallback(
        (value) => {
            setIconSize(value),
                setUnsavedChanges(isEqual(value, originaliconSize));
        },

        [originaliconSize]
    );

    // ICON COLOR
    const handleIconColor = (event) => {
        setIconColor(event.target.value);
        setUnsavedChanges(isEqual(event.target.value, originaliconColor));
    };

    // ICON HOVER COLOR
    const handleIconHoverColor = (event) => {
        setIconHoverColor(event.target.value);
        setUnsavedChanges(isEqual(event.target.value, originaliconHoverColor));
    };

    // COUNT SIZE
    const handleCountSliderChange = useCallback(
        (value) => {
            setCountSize(value),
                setUnsavedChanges(isEqual(value, originalcountSize));
        },

        [originalcountSize]
    );
    // COUNT FONT
    const handleCountFontSliderChange = useCallback(
        (value) => {
            setCountFontSize(value),
                setUnsavedChanges(isEqual(value, originalcountFontSize));
        },

        [originalcountFontSize]
    );

    // COUNT COLOR
    const handleCountColor = (event) => {
        setCountColor(event.target.value);
        setUnsavedChanges(isEqual(event.target.value, originalcountColor));
    };

    // COUNT HOVER COLOR
    const handleCountHoverColor = (event) => {
        setCountHoverColor(event.target.value);
        setUnsavedChanges(isEqual(event.target.value, originalcountHoverColor));
    };

    // COUNT BG  COLOR
    const handleBGCountColor = (event) => {
        setCountBgColor(event.target.value);
        setUnsavedChanges(isEqual(event.target.value, originalcountBgColor));
    };

    // COUNT BG HOVER COLOR
    const handleBGCountHoverColor = (event) => {
        setCountBgHoverColor(event.target.value);
        setUnsavedChanges(
            isEqual(event.target.value, originalcountBgHoverColor)
        );
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
                    <div className="lm_sticky_main_app_page">
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
                                        <BlockStack gap="400">
                                            {/* Sticky Enable */}
                                            <Card>
                                                <div className="setting_title">
                                                    <Text
                                                        variant="bodyLg"
                                                        as="span"
                                                        alignment="start"
                                                        fontWeight="medium"
                                                    >
                                                        Sticky Cart is{" "}
                                                        {enableSticky ? (
                                                            <span className="lm_sticky_custom_badge_success">
                                                                <Badge tone="success">
                                                                    Enabled
                                                                </Badge>
                                                            </span>
                                                        ) : (
                                                            <span className="lm_sticky_custom_badge_critical">
                                                                <Badge tone="critical">
                                                                    Disabled
                                                                </Badge>
                                                            </span>
                                                        )}
                                                    </Text>
                                                    <Switch
                                                        onChange={() => {
                                                            handleEnable(
                                                                enableSticky
                                                            );
                                                        }}
                                                        checked={enableSticky}
                                                        uncheckedIcon={null}
                                                        checkedIcon={null}
                                                    />
                                                </div>
                                            </Card>

                                            {/* Select Template */}
                                            <Card>
                                                <BlockStack gap="200">
                                                    <Text
                                                        variant="bodyLg"
                                                        as="span"
                                                        alignment="start"
                                                        fontWeight="medium"
                                                    >
                                                        Select Template
                                                    </Text>
                                                    <Select
                                                        label="Select Template"
                                                        options={
                                                            templateOptions
                                                        }
                                                        onChange={(value) => {
                                                            setDefaultTemplate(
                                                                value
                                                            );
                                                            handleChange(value);
                                                        }}
                                                        value={defaultTemplate}
                                                        labelHidden
                                                    />
                                                </BlockStack>
                                            </Card>

                                            {/* General Settings */}
                                            <Card sectioned>
                                                <Text
                                                    variant="headingLg"
                                                    fontWeight="medium"
                                                >
                                                    General Settings
                                                </Text>

                                                <div
                                                    style={{ margin: "15px 0" }}
                                                >
                                                    <Divider borderColor="border" />
                                                </div>

                                                {/* Action */}
                                                <BlockStack gap="200">
                                                    <Text
                                                        variant="headingMd"
                                                        as="span"
                                                        fontWeight="medium"
                                                    >
                                                        Action
                                                    </Text>
                                                    <Select
                                                        label="Action"
                                                        options={options}
                                                        onChange={
                                                            handleSelectChange
                                                        }
                                                        value={action}
                                                        labelHidden
                                                    />
                                                </BlockStack>

                                                <div
                                                    style={{ margin: "15px 0" }}
                                                >
                                                    <Divider borderColor="border" />
                                                </div>

                                                <FormLayout>
                                                    <FormLayout.Group condensed>
                                                        <div>
                                                            <Text
                                                                variant="headingMd"
                                                                as="span"
                                                                fontWeight="medium"
                                                            >
                                                                Size
                                                            </Text>
                                                            <div className="font_picker_popup">
                                                                <RangeSlider
                                                                    label={`${btnSize} px`}
                                                                    value={
                                                                        btnSize
                                                                    }
                                                                    min={10}
                                                                    max={100}
                                                                    onChange={
                                                                        handleRangeSliderChange
                                                                    }
                                                                    output
                                                                />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <Text
                                                                variant="headingMd"
                                                                as="span"
                                                                fontWeight="medium"
                                                            >
                                                                Border Size
                                                            </Text>
                                                            <div className="font_picker_popup">
                                                                <RangeSlider
                                                                    label={`${borderSize} px`}
                                                                    value={
                                                                        borderSize
                                                                    }
                                                                    min={0}
                                                                    max={10}
                                                                    onChange={
                                                                        handleBorderSliderChange
                                                                    }
                                                                    output
                                                                />
                                                            </div>
                                                        </div>
                                                    </FormLayout.Group>
                                                    <FormLayout.Group condensed>
                                                        <div>
                                                            <Text
                                                                variant="headingMd"
                                                                as="span"
                                                                fontWeight="medium"
                                                            >
                                                                BG Color
                                                            </Text>
                                                            <div className="lm_sticky_color_box">
                                                                <input
                                                                    type="color"
                                                                    value={
                                                                        bgColor
                                                                    }
                                                                    onChange={
                                                                        handleBGColor
                                                                    }
                                                                />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <Text
                                                                variant="headingMd"
                                                                as="span"
                                                                fontWeight="medium"
                                                            >
                                                                BG Hover Color
                                                            </Text>
                                                            <div className="lm_sticky_color_box">
                                                                <input
                                                                    type="color"
                                                                    value={
                                                                        bgHoverColor
                                                                    }
                                                                    onChange={
                                                                        handleBGHoverColor
                                                                    }
                                                                />
                                                            </div>
                                                        </div>
                                                    </FormLayout.Group>
                                                    <FormLayout.Group condensed>
                                                        <div>
                                                            <Text
                                                                variant="headingMd"
                                                                as="span"
                                                                fontWeight="medium"
                                                            >
                                                                Border Color
                                                            </Text>
                                                            <div className="lm_sticky_color_box">
                                                                <input
                                                                    type="color"
                                                                    value={
                                                                        borderColor
                                                                    }
                                                                    onChange={
                                                                        handleBorderColor
                                                                    }
                                                                />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <Text
                                                                variant="headingMd"
                                                                as="span"
                                                                fontWeight="medium"
                                                            >
                                                                Border Hover
                                                                Color
                                                            </Text>
                                                            <div className="lm_sticky_color_box">
                                                                <input
                                                                    type="color"
                                                                    value={
                                                                        borderHoverColor
                                                                    }
                                                                    onChange={
                                                                        handleBorderHoverColor
                                                                    }
                                                                />
                                                            </div>
                                                        </div>
                                                    </FormLayout.Group>
                                                </FormLayout>
                                            </Card>

                                            {/* Position Settings */}
                                            <Card sectioned>
                                                <Text
                                                    variant="headingLg"
                                                    fontWeight="medium"
                                                >
                                                    Position Settings
                                                </Text>

                                                <div
                                                    style={{ margin: "15px 0" }}
                                                >
                                                    <Divider borderColor="border" />
                                                </div>

                                                <FormLayout>
                                                    <FormLayout.Group condensed>
                                                        <div>
                                                            <Text
                                                                variant="headingMd"
                                                                as="span"
                                                                fontWeight="medium"
                                                            >
                                                                Top
                                                            </Text>
                                                            <div className="font_picker_popup">
                                                                <RangeSlider
                                                                    label={`${positionTop}%`}
                                                                    value={
                                                                        positionTop
                                                                    }
                                                                    min={1}
                                                                    max={90}
                                                                    onChange={
                                                                        handleEditTopField
                                                                    }
                                                                    output
                                                                />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <Text
                                                                variant="headingMd"
                                                                as="span"
                                                                fontWeight="medium"
                                                            >
                                                                Left
                                                            </Text>
                                                            <div className="font_picker_popup">
                                                                <RangeSlider
                                                                    label={`${positionLeft}%`}
                                                                    value={
                                                                        positionLeft
                                                                    }
                                                                    min={0}
                                                                    max={95}
                                                                    onChange={
                                                                        handleEditLeftField
                                                                    }
                                                                    output
                                                                />
                                                            </div>
                                                        </div>
                                                    </FormLayout.Group>
                                                </FormLayout>
                                            </Card>

                                            {/* Icon Settings */}
                                            <Card sectioned>
                                                <Text
                                                    variant="headingLg"
                                                    fontWeight="medium"
                                                >
                                                    Icon Settings
                                                </Text>

                                                <div
                                                    style={{ margin: "15px 0" }}
                                                >
                                                    <Divider borderColor="border" />
                                                </div>

                                                <div className="style__wrapper_div">
                                                    <Text
                                                        variant="headingMd"
                                                        as="span"
                                                        fontWeight="medium"
                                                    >
                                                        Icon Size
                                                    </Text>
                                                    <div className="font_picker_popup">
                                                        <RangeSlider
                                                            label={`${iconSize} px`}
                                                            value={iconSize}
                                                            min={11}
                                                            max={50}
                                                            onChange={
                                                                handleIconSliderChange
                                                            }
                                                            output
                                                        />
                                                    </div>
                                                </div>

                                                <FormLayout>
                                                    <FormLayout.Group condensed>
                                                        <div>
                                                            <Text
                                                                variant="headingMd"
                                                                as="span"
                                                                fontWeight="medium"
                                                            >
                                                                Icon Color
                                                            </Text>
                                                            <div className="lm_sticky_color_box">
                                                                <input
                                                                    type="color"
                                                                    value={
                                                                        iconColor
                                                                    }
                                                                    onChange={
                                                                        handleIconColor
                                                                    }
                                                                />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <Text
                                                                variant="headingMd"
                                                                as="span"
                                                                fontWeight="medium"
                                                            >
                                                                Icon Hover Color
                                                            </Text>
                                                            <div className="lm_sticky_color_box">
                                                                <input
                                                                    type="color"
                                                                    value={
                                                                        iconHoverColor
                                                                    }
                                                                    onChange={
                                                                        handleIconHoverColor
                                                                    }
                                                                />
                                                            </div>
                                                        </div>
                                                    </FormLayout.Group>
                                                </FormLayout>
                                            </Card>

                                            {/* Cart Count Settings */}
                                            <Card sectioned>
                                                <Text
                                                    variant="headingLg"
                                                    fontWeight="medium"
                                                >
                                                    Cart Count Settings
                                                </Text>

                                                <div
                                                    style={{ margin: "15px 0" }}
                                                >
                                                    <Divider borderColor="border" />
                                                </div>

                                                <div className="setting_title">
                                                    <Text
                                                        variant="bodyLg"
                                                        as="span"
                                                        alignment="start"
                                                        fontWeight="medium"
                                                    >
                                                        Sticky Cart Count is{" "}
                                                        {enableCount ? (
                                                            <span className="lm_sticky_custom_badge_success">
                                                                <Badge tone="success">
                                                                    Enabled
                                                                </Badge>
                                                            </span>
                                                        ) : (
                                                            <span className="lm_sticky_custom_badge_critical">
                                                                <Badge tone="critical">
                                                                    Disabled
                                                                </Badge>
                                                            </span>
                                                        )}
                                                    </Text>
                                                    <Switch
                                                        onChange={() => {
                                                            handlecheckbox(
                                                                enableCount
                                                            );
                                                        }}
                                                        checked={enableCount}
                                                        uncheckedIcon={null}
                                                        checkedIcon={null}
                                                    />
                                                </div>

                                                <div
                                                    style={{ margin: "15px 0" }}
                                                >
                                                    <Divider borderColor="border" />
                                                </div>

                                                <FormLayout>
                                                    <FormLayout.Group condensed>
                                                        <div>
                                                            <Text
                                                                variant="headingMd"
                                                                as="span"
                                                                fontWeight="medium"
                                                            >
                                                                Size
                                                            </Text>

                                                            <div className="font_picker_popup">
                                                                <RangeSlider
                                                                    label={`${countSize} px`}
                                                                    value={
                                                                        countSize
                                                                    }
                                                                    min={8}
                                                                    max={40}
                                                                    onChange={
                                                                        handleCountSliderChange
                                                                    }
                                                                    output
                                                                />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <Text
                                                                variant="headingMd"
                                                                as="span"
                                                                fontWeight="medium"
                                                            >
                                                                Font Size
                                                            </Text>

                                                            <div className="font_picker_popup">
                                                                <RangeSlider
                                                                    label={`${countFontSize} px`}
                                                                    value={
                                                                        countFontSize
                                                                    }
                                                                    min={8}
                                                                    max={40}
                                                                    onChange={
                                                                        handleCountFontSliderChange
                                                                    }
                                                                    output
                                                                />
                                                            </div>
                                                        </div>
                                                    </FormLayout.Group>
                                                    <FormLayout.Group condensed>
                                                        <div>
                                                            <Text
                                                                variant="headingMd"
                                                                as="span"
                                                                fontWeight="medium"
                                                            >
                                                                Count Color
                                                            </Text>

                                                            <div className="lm_sticky_color_box">
                                                                <input
                                                                    type="color"
                                                                    value={
                                                                        countColor
                                                                    }
                                                                    onChange={
                                                                        handleCountColor
                                                                    }
                                                                />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <Text
                                                                variant="headingMd"
                                                                as="span"
                                                                fontWeight="medium"
                                                            >
                                                                Count Hover
                                                                Color
                                                            </Text>

                                                            <div className="lm_sticky_color_box">
                                                                <input
                                                                    type="color"
                                                                    value={
                                                                        countHoverColor
                                                                    }
                                                                    onChange={
                                                                        handleCountHoverColor
                                                                    }
                                                                />
                                                            </div>
                                                        </div>
                                                    </FormLayout.Group>
                                                    <FormLayout.Group condensed>
                                                        <div>
                                                            <Text
                                                                variant="headingMd"
                                                                as="span"
                                                                fontWeight="medium"
                                                            >
                                                                BG Color
                                                            </Text>

                                                            <div className="lm_sticky_color_box">
                                                                <input
                                                                    type="color"
                                                                    value={
                                                                        countBgColor
                                                                    }
                                                                    onChange={
                                                                        handleBGCountColor
                                                                    }
                                                                />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <Text
                                                                variant="headingMd"
                                                                as="span"
                                                                fontWeight="medium"
                                                            >
                                                                BG Hover Color
                                                            </Text>

                                                            <div className="lm_sticky_color_box">
                                                                <input
                                                                    type="color"
                                                                    value={
                                                                        countBgHoverColor
                                                                    }
                                                                    onChange={
                                                                        handleBGCountHoverColor
                                                                    }
                                                                />
                                                            </div>
                                                        </div>
                                                    </FormLayout.Group>
                                                </FormLayout>
                                            </Card>
                                        </BlockStack>
                                    </Layout.Section>
                                    <Layout.Section>
                                        <div classname="preview_section">
                                            <Card>
                                                <div className="lm_sticky_box">
                                                    <div class="lm_screen_bar">
                                                        <div class="r_1"></div>
                                                        <div class="r_1"></div>
                                                        <div class="r_1"></div>
                                                        <div class="sq_1"></div>
                                                    </div>
                                                    <div className="lm_product_block">
                                                        <div className="product_details">
                                                            <div>
                                                                {enableSticky ===
                                                                true ? (
                                                                    <div className="main_sticky___div">
                                                                        <div
                                                                            className="stickyCart__icon"
                                                                            style={{
                                                                                position:
                                                                                    "absolute",
                                                                                fontSize:
                                                                                    iconSize,
                                                                                color: iconHover
                                                                                    ? iconHoverColor
                                                                                    : iconColor,
                                                                                border: iconHover
                                                                                    ? borderSize +
                                                                                      "px solid " +
                                                                                      borderHoverColor
                                                                                    : borderSize +
                                                                                      "px solid " +
                                                                                      borderColor,
                                                                                background:
                                                                                    iconHover
                                                                                        ? bgHoverColor
                                                                                        : bgColor,
                                                                                height: btnSize,
                                                                                width: btnSize,
                                                                                top:
                                                                                    positionTop ===
                                                                                    0
                                                                                        ? ""
                                                                                        : positionTop +
                                                                                          "%",
                                                                                left:
                                                                                    positionLeft ===
                                                                                    0
                                                                                        ? ""
                                                                                        : positionLeft +
                                                                                          "%",
                                                                            }}
                                                                            onMouseEnter={
                                                                                handleIconEnter
                                                                            }
                                                                            onMouseLeave={
                                                                                handleIconLeave
                                                                            }
                                                                        >
                                                                            {enableCount ===
                                                                            true ? (
                                                                                <span
                                                                                    className="sticky_Count"
                                                                                    style={{
                                                                                        background:
                                                                                            countHover
                                                                                                ? countBgHoverColor
                                                                                                : countBgColor,
                                                                                        width: countSize,
                                                                                        height: countSize,
                                                                                        fontSize:
                                                                                            countFontSize,
                                                                                        color: countHover
                                                                                            ? countHoverColor
                                                                                            : countColor,
                                                                                    }}
                                                                                    onMouseEnter={
                                                                                        handleCountEnter
                                                                                    }
                                                                                    onMouseLeave={
                                                                                        handleCountLeave
                                                                                    }
                                                                                >
                                                                                    {
                                                                                        numberCount
                                                                                    }
                                                                                </span>
                                                                            ) : (
                                                                                ""
                                                                            )}
                                                                            {defaultTemplate ===
                                                                            "1" ? (
                                                                                <FontAwesomeIcon
                                                                                    icon={
                                                                                        faCartShopping
                                                                                    }
                                                                                />
                                                                            ) : (
                                                                                ""
                                                                            )}
                                                                            {defaultTemplate ===
                                                                            "2" ? (
                                                                                <FontAwesomeIcon
                                                                                    icon={
                                                                                        faCartPlus
                                                                                    }
                                                                                />
                                                                            ) : (
                                                                                ""
                                                                            )}
                                                                            {defaultTemplate ===
                                                                            "3" ? (
                                                                                <FontAwesomeIcon
                                                                                    icon={
                                                                                        faCartArrowDown
                                                                                    }
                                                                                />
                                                                            ) : (
                                                                                ""
                                                                            )}
                                                                            {defaultTemplate ===
                                                                            "4" ? (
                                                                                <FontAwesomeIcon
                                                                                    icon={
                                                                                        faBasketShopping
                                                                                    }
                                                                                />
                                                                            ) : (
                                                                                ""
                                                                            )}
                                                                            {defaultTemplate ===
                                                                            "5" ? (
                                                                                <FontAwesomeIcon
                                                                                    icon={
                                                                                        faBagShopping
                                                                                    }
                                                                                />
                                                                            ) : (
                                                                                ""
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                ) : (
                                                                    ""
                                                                )}
                                                            </div>
                                                            <div className="pagewidth">
                                                                <div className="product_details_main">
                                                                    <div className="product_image">
                                                                        <div className="product_imagess">
                                                                            <img
                                                                                src={
                                                                                    proimage
                                                                                }
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                    </div>

                                                                    <div className="p_details">
                                                                        <h2>
                                                                            Juice
                                                                            Bottle
                                                                            Mockup
                                                                            (Red)
                                                                        </h2>
                                                                        <span>
                                                                            <strike>
                                                                                $50.00
                                                                            </strike>{" "}
                                                                            $4.00
                                                                        </span>
                                                                        <a className="addtocartbtn">
                                                                            Add
                                                                            to
                                                                            cart
                                                                        </a>
                                                                        <div className="product_content">
                                                                            The
                                                                            Juice
                                                                            Bottle
                                                                            Mockup
                                                                            (Red)
                                                                            features
                                                                            a
                                                                            realistic
                                                                            red
                                                                            juice
                                                                            bottle,
                                                                            ideal
                                                                            for
                                                                            showcasing
                                                                            beverage
                                                                            branding.
                                                                            It
                                                                            provides
                                                                            a
                                                                            high-quality,
                                                                            customizable
                                                                            template
                                                                            for
                                                                            marketing
                                                                            and
                                                                            packaging
                                                                            designs,
                                                                            making
                                                                            it
                                                                            perfect
                                                                            for
                                                                            visualizing
                                                                            labels
                                                                            on
                                                                            fruit
                                                                            juices,
                                                                            smoothies,
                                                                            or
                                                                            energy
                                                                            drinks.
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Card>
                                        </div>
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
