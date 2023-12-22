import {
    Icon,
    Page,
    Layout,
    Card,
    Button,
    RadioButton,
    Select,
    RangeSlider,
    TextField,
    Checkbox,
    Scrollable,
    Toast,
    Frame,
    SkeletonPage,
    SkeletonBodyText,
    TextContainer,
    SkeletonDisplayText,
    Loading,
    Spinner,
    FullscreenBar,
    ButtonGroup,
    Badge,
    Heading,
    FormLayout,
    Banner,
} from "@shopify/polaris";
import "../css/index.css";
import { useNavigate } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars";
import Switch from "react-switch";

import {
    CartMajor,
    FaviconMajor,
    ExitMajor,
    ChevronRightMinor,
    LocationMajor,
    SettingsMinor,
} from "@shopify/polaris-icons";
import { useState, useCallback, useEffect } from "react";
import stickyData from "../StaticData/stickyData";
import defaultSticky from "../StaticData/defaultSticky";
import { ColorPlate } from "../components/colorPlate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCartArrowDown,
    faCartPlus,
    faCartShopping,
    faBasketShopping,
    faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import { Box } from "@material-ui/core";
import { isEqual } from "lodash";

export default function StickyCart() {
    const [menu, setMenu] = useState("0");
    const shop_url = document.getElementById("shopOrigin").value;
    const navigate = useNavigate();
    const [fontFamily, setfontFamily] = useState("Oswald");
    const [iconHover, setIconHover] = useState(false);
    const [stickyCartData, setStickyCartData] = useState([]);
    const [saveLoader, setSaveLoader] = useState(false);
    const [loading, setLoading] = useState(false);
    const [showTable, setShowTable] = useState(false);
    const [countHover, setCountHover] = useState(false);

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
    const [originalpositionBottom, setoriginalPositionBottom] = useState(0);
    const [positionBottom, setPositionBottom] = useState(0);
    const [originalpositionLeft, setoriginalPositionLeft] = useState(0);
    const [positionLeft, setPositionLeft] = useState(0);
    const [originalpositionRight, setoriginalPositionRight] = useState(1);
    const [positionRight, setPositionRight] = useState(1);
    const [originaliconSize, setoriginalIconSize] = useState(20);
    const [iconSize, setIconSize] = useState(20);
    const [originaliconColor, setoriginalIconColor] = useState("#000000");
    const [iconColor, setIconColor] = useState("#000000");
    const [originaliconHoverColor, setoriginalIconHoverColor] =
        useState("#f08080");
    const [iconHoverColor, setIconHoverColor] = useState("#f08080");
    const [originalenableCount, setoriginalEnableCount] = useState(false);
    const [enableCount, setEnableCount] = useState(false);
    const [originalnumberCount, setoriginalNumberCount] = useState(1);
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
    const handleClick = (data) => {
        navigate("/");
    };
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
            setoriginalPositionBottom(
                data.data.current_template.positionBottom
            );
            setPositionBottom(data.data.current_template.positionBottom);
            setoriginalPositionLeft(data.data.current_template.positionLeft);
            setPositionLeft(data.data.current_template.positionLeft);
            setoriginalPositionRight(data.data.current_template.positionRight);
            setPositionRight(data.data.current_template.positionRight);
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
            setoriginalNumberCount(data.data.current_template.numberCount);
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

    // USE EFFECT
    useEffect(() => {
        getStickyCartData();
        getAddToStickyCartData();
    }, []);

    //COUNT FONT FAMILY
    const getAddToStickyCartData = async () => {
        try {
            const response = await fetch(
                "api/getAddToStickyCartData/" + shop_url
            );
            const data = await response.json();
            // const response = await fetch(
            //     `${process.env.REACT_APP_API_URL}` +
            //         "getAddToStickyCartData/" +
            //         window.Shopify.shop
            // );
            // const data = await response.json();
            console.log(
                data.data.current_template.general_settings.gsFontFamily
            );
            setfontFamily(
                data.data.current_template.general_settings.gsFontFamily
            );
        } catch (err) {
            console.log(err);
        }
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
            setPositionBottom(currentData.positionBottom);
            setPositionLeft(currentData.positionLeft);
            setPositionRight(currentData.positionRight);
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
                positionBottom: positionBottom,
                positionLeft: positionLeft,
                positionRight: positionRight,
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
            setLoading(true);
            setSaveLoader(false);
            let response = await axios.post("/api/saveStickyCartData", {
                data: payLoad,
            });
            if (response.data.status == true) {
                // console.log("success");
                setSaveLoader(true);
                setLoading(false);
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
    //GENERAL SETTING START
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

    // BG COLOR
    const handleBGColor = (event) => {
        setBgColor(event.target.value);
        setUnsavedChanges(isEqual(event.target.value, originalbgColor));
    };
    // = useCallback((value) => setBgColor(value), []);

    // BG HOVER COLOR
    const handleBGHoverColor = (event) => {
        setBgHoverColor(event.target.value);
        setUnsavedChanges(isEqual(event.target.value, originalbgHoverColor));
    };
    // = useCallback(
    //     (value) => setBgHoverColor(value),
    //     []
    // );

    // BORDER SIZE
    const handleBorderSliderChange = useCallback(
        (value) => {
            setBorderSize(value),
                setUnsavedChanges(isEqual(value, originalborderSize));
        },
        [originalborderSize]
    );

    // BORDER COLOR
    const handleBorderColor = (event) => {
        setBorderColor(event.target.value);
        setUnsavedChanges(isEqual(event.target.value, originalborderColor));
    };
    // = useCallback((value) => setBorderColor(value), []);

    // BORDER HOVER COLOR
    const handleBorderHoverColor = (event) => {
        setBorderHoverColor(event.target.value);
        setUnsavedChanges(
            isEqual(event.target.value, originalborderHoverColor)
        );
    };
    // = useCallback(
    //     (value) => setBorderHoverColor(value),
    //     []
    // );

    //GENERAL SETTING RND

    //POSITION START
    //TOP
    const handleEditTopField = useCallback(
        (value) => {
            setPositionTop(value),
                setUnsavedChanges(isEqual(value, originalpositionTop));
        },

        [originalpositionTop]
    );
    // (value) => {
    //     setPositionTop(value);
    //     setUnsavedChanges(isEqual(!value, originalpositionTop));
    // };
    //LEFT
    const handleEditLeftField = useCallback(
        (value) => {
            setPositionLeft(value),
                setUnsavedChanges(isEqual(value, originalpositionLeft));
        },

        [originalpositionLeft]
    );
    //BOTTOM
    const handleEditBottomField = useCallback(
        (value) => {
            setPositionBottom(value),
                setUnsavedChanges(isEqual(value, originalpositionBottom));
        },

        [originalpositionBottom]
    );
    //RIGHT
    const handleEditRightField = useCallback(
        (value) => {
            setPositionRight(value),
                setUnsavedChanges(isEqual(value, originalpositionRight));
        },

        [originalpositionRight]
    );
    //POSITION END

    // ICON STYLE START
    // ICON HOVER
    const handleIconEnter = () => {
        setIconHover(true);
    };

    const handleIconLeave = () => {
        setIconHover(false);
    };
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
    // = useCallback((value) => setIconColor(value), []);

    // ICON HOVER COLOR
    const handleIconHoverColor = (event) => {
        setIconHoverColor(event.target.value);
        setUnsavedChanges(isEqual(event.target.value, originaliconHoverColor));
    };
    // = useCallback(
    //     (value) => setIconHoverColor(value),
    //     []
    // );

    // ICON STYLE START

    //COUNT START
    //ENABLE
    const handlecheckbox = (value) => {
        setEnableCount(!value);
        setUnsavedChanges(isEqual(!value, originalenableCount));
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
    // = useCallback((value) => setCountColor(value), []);

    // COUNT HOVER COLOR
    const handleCountHoverColor = (event) => {
        setCountHoverColor(event.target.value);
        setUnsavedChanges(isEqual(event.target.value, originalcountHoverColor));
    };
    // = useCallback(
    //     (value) => setCountHoverColor(value),
    //     []
    // );

    // COUNT BG  COLOR
    const handleBGCountColor = (event) => {
        setCountBgColor(event.target.value);
        setUnsavedChanges(isEqual(event.target.value, originalcountBgColor));
    };
    // = useCallback(
    //     (value) => setCountBgColor(value),
    //     []
    // );

    // COUNT BG HOVER COLOR
    const handleBGCountHoverColor = (event) => {
        setCountBgHoverColor(event.target.value);
        setUnsavedChanges(
            isEqual(event.target.value, originalcountBgHoverColor)
        );
    };
    // = useCallback(
    //     (value) => setCountBgHoverColor(value),
    //     []
    // );

    // COUNT HOVER
    const handleCountEnter = () => {
        setCountHover(true);
    };

    const handleCountLeave = () => {
        setCountHover(false);
    };
    //COUNT END

    // ENABLE BUTTON START
    const handleEnable = (value) => {
        setEnableSticky(!value);
        setUnsavedChanges(isEqual(!value, originalenableSticky));
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
                        {" "}
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
                        @import url("https://fonts.googleapis.com/css2?family=${fontFamily}&display=swap");
                        .apply-font{
                            font-family : ${fontFamily};
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
                                        <Button primary onClick={handleSave}>
                                            Save
                                        </Button>
                                        {toastMarkup}
                                        {toastMarkup1}
                                    </ButtonGroup>
                                </div>
                            </FullscreenBar>
                        </div>
                        {/* <div
                            style={{
                                visibility: unsavedChanges
                                    ? "hidden"
                                    : "visible",
                                opacity: unsavedChanges ? 0 : 1,
                                height: unsavedChanges ? 0 : 64,
                                transition: "all 1s ease-in-out",
                                position: "sticky",
                                top: "4.25rem",
                                zIndex: "99",
                            }}
                        >
                            <Banner
                                title="Remember to save your changes!!"
                                tone="warning"
                                status="warning"
                            />
                        </div> */}
                        <Page fullWidth>
                            <div className="lm_sticky_layout">
                                <Layout>
                                    <Layout.Section oneThird>
                                        <Card sectioned>
                                            <div className="setting_title">
                                                <span className="show_sticky_span">
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
                                                    {/* <b>{enable === true ? "Enabled" : "Disabled"}</b>{" "} */}
                                                </span>
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
                                        <Card sectioned>
                                            <div className="lm_sticky_select">
                                                <Select
                                                    label="Select Template"
                                                    options={templateOptions}
                                                    onChange={(value) => {
                                                        setDefaultTemplate(
                                                            value
                                                        );
                                                        handleChange(value);
                                                    }}
                                                    value={defaultTemplate}
                                                />
                                            </div>
                                        </Card>

                                        <Card sectioned>
                                            <div>
                                                <Card.Subsection>
                                                    <Heading variant="h1">
                                                        General Settings
                                                    </Heading>
                                                </Card.Subsection>
                                                <Card.Subsection>
                                                    <span className="display_setting_subtitle">
                                                        Action
                                                    </span>
                                                    <div className="style__wrapper_div">
                                                        <div className="display_select_drop_down lm_sticky_select">
                                                            <Select
                                                                options={
                                                                    options
                                                                }
                                                                onChange={
                                                                    handleSelectChange
                                                                }
                                                                value={action}
                                                            />
                                                        </div>
                                                    </div>
                                                </Card.Subsection>
                                                <Card.Subsection>
                                                    <FormLayout>
                                                        <FormLayout.Group
                                                            condensed
                                                        >
                                                            <div>
                                                                <span className="display_setting_subtitle">
                                                                    Size
                                                                </span>
                                                                <div className="font_picker_popup">
                                                                    <RangeSlider
                                                                        label={`${btnSize} px`}
                                                                        value={
                                                                            btnSize
                                                                        }
                                                                        min={10}
                                                                        max={
                                                                            100
                                                                        }
                                                                        onChange={
                                                                            handleRangeSliderChange
                                                                        }
                                                                        output
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <span className="display_setting_subtitle">
                                                                    Border Size
                                                                </span>
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
                                                        <FormLayout.Group
                                                            condensed
                                                        >
                                                            <div>
                                                                <span className="display_setting_subtitle">
                                                                    Background
                                                                    Color
                                                                </span>
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
                                                                    {/* <ColorPlate
                                                                        defaultColor={
                                                                            bgColor
                                                                        }
                                                                        onChildResult={
                                                                            handleBGColor
                                                                        }
                                                                    /> */}
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <span className="display_setting_subtitle">
                                                                    Background
                                                                    Hover Color
                                                                </span>
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
                                                                    {/* <ColorPlate
                                                                        defaultColor={
                                                                            bgHoverColor
                                                                        }
                                                                        onChildResult={
                                                                            handleBGHoverColor
                                                                        }
                                                                    /> */}
                                                                </div>
                                                            </div>
                                                        </FormLayout.Group>
                                                        <FormLayout.Group
                                                            condensed
                                                        >
                                                            <div>
                                                                <span className="display_setting_subtitle">
                                                                    Border Color
                                                                </span>
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
                                                                    {/* <ColorPlate
                                                                        defaultColor={
                                                                            borderColor
                                                                        }
                                                                        onChildResult={
                                                                            handleBorderColor
                                                                        }
                                                                    /> */}
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <span className="display_setting_subtitle">
                                                                    Border Hover
                                                                    Color
                                                                </span>
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
                                                                    {/* <ColorPlate
                                                                        defaultColor={
                                                                            borderHoverColor
                                                                        }
                                                                        onChildResult={
                                                                            handleBorderHoverColor
                                                                        }
                                                                    /> */}
                                                                </div>
                                                            </div>
                                                        </FormLayout.Group>
                                                    </FormLayout>
                                                </Card.Subsection>
                                            </div>
                                        </Card>

                                        <Card sectioned>
                                            <div>
                                                <Card.Subsection>
                                                    <Heading variant="h1">
                                                        Position Settings
                                                    </Heading>
                                                </Card.Subsection>

                                                <Card.Subsection>
                                                    <FormLayout>
                                                        <FormLayout.Group
                                                            condensed
                                                        >
                                                            <div>
                                                                <span className="display_setting_subtitle">
                                                                    Top
                                                                </span>
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
                                                                <span className="display_setting_subtitle">
                                                                    Left
                                                                </span>
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
                                                        {/* <FormLayout.Group
                                                            condensed
                                                        >
                                                            <div>
                                                                <span className="display_setting_subtitle">
                                                                    Bottom
                                                                </span>
                                                                <div className="font_picker_popup">
                                                                    <RangeSlider
                                                                        label={`${positionBottom}%`}
                                                                        value={
                                                                            positionBottom
                                                                        }
                                                                        min={0}
                                                                        max={50}
                                                                        onChange={
                                                                            handleEditBottomField
                                                                        }
                                                                        output
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <span className="display_setting_subtitle">
                                                                    Right
                                                                </span>
                                                                <div className="font_picker_popup">
                                                                    <RangeSlider
                                                                        label={`${positionRight}%`}
                                                                        value={
                                                                            positionRight
                                                                        }
                                                                        min={0}
                                                                        max={50}
                                                                        onChange={
                                                                            handleEditRightField
                                                                        }
                                                                        output
                                                                    />
                                                                </div>
                                                            </div>
                                                        </FormLayout.Group> */}
                                                    </FormLayout>
                                                </Card.Subsection>
                                            </div>
                                        </Card>

                                        <Card sectioned>
                                            <div>
                                                <Card.Subsection>
                                                    <Heading variant="h1">
                                                        Icon Settings
                                                    </Heading>
                                                </Card.Subsection>
                                                <Card.Subsection>
                                                    <div className="style__wrapper_div">
                                                        <span className="display_setting_subtitle">
                                                            Icon Size
                                                        </span>
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
                                                </Card.Subsection>
                                                <Card.Subsection>
                                                    <FormLayout>
                                                        <FormLayout.Group
                                                            condensed
                                                        >
                                                            <div>
                                                                <span className="display_setting_subtitle">
                                                                    Icon Color
                                                                </span>
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
                                                                    {/* <ColorPlate
                                                                        defaultColor={
                                                                            iconColor
                                                                        }
                                                                        onChildResult={
                                                                            handleIconColor
                                                                        }
                                                                    /> */}
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <span className="display_setting_subtitle">
                                                                    Icon Hover
                                                                    Color
                                                                </span>
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
                                                                    {/* <ColorPlate
                                                                        defaultColor={
                                                                            iconHoverColor
                                                                        }
                                                                        onChildResult={
                                                                            handleIconHoverColor
                                                                        }
                                                                    /> */}
                                                                </div>
                                                            </div>
                                                        </FormLayout.Group>
                                                    </FormLayout>
                                                </Card.Subsection>
                                            </div>
                                        </Card>

                                        <Card sectioned>
                                            <div>
                                                <Card.Subsection>
                                                    <Heading variant="h1">
                                                        Cart Count Settings
                                                    </Heading>
                                                </Card.Subsection>
                                                <Card.Subsection>
                                                    <div className="style__wrapper_div">
                                                        <div className="setting_title">
                                                            <span className="show_sticky_span">
                                                                Sticky Cart
                                                                Count is{" "}
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
                                                                {/* <b>{enable === true ? "Enabled" : "Disabled"}</b>{" "} */}
                                                            </span>
                                                            <Switch
                                                                onChange={() => {
                                                                    handlecheckbox(
                                                                        enableCount
                                                                    );
                                                                }}
                                                                checked={
                                                                    enableCount
                                                                }
                                                                uncheckedIcon={
                                                                    null
                                                                }
                                                                checkedIcon={
                                                                    null
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                </Card.Subsection>
                                                <Card.Subsection>
                                                    <FormLayout>
                                                        <FormLayout.Group
                                                            condensed
                                                        >
                                                            <div>
                                                                <span className="display_setting_subtitle">
                                                                    Size
                                                                </span>
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
                                                                <span className="display_setting_subtitle">
                                                                    Font Size
                                                                </span>
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
                                                        <FormLayout.Group
                                                            condensed
                                                        >
                                                            <div>
                                                                <span className="display_setting_subtitle">
                                                                    {" "}
                                                                    Count Color
                                                                </span>
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
                                                                    {/* <ColorPlate
                                                                        defaultColor={
                                                                            countColor
                                                                        }
                                                                        onChildResult={
                                                                            handleCountColor
                                                                        }
                                                                    /> */}
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <span className="display_setting_subtitle">
                                                                    Count Hover
                                                                    Color
                                                                </span>
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
                                                                    {/* <ColorPlate
                                                                        defaultColor={
                                                                            countHoverColor
                                                                        }
                                                                        onChildResult={
                                                                            handleCountHoverColor
                                                                        }
                                                                    /> */}
                                                                </div>
                                                            </div>
                                                        </FormLayout.Group>
                                                        <FormLayout.Group
                                                            condensed
                                                        >
                                                            <div>
                                                                <span className="display_setting_subtitle">
                                                                    Background
                                                                    Color
                                                                </span>
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
                                                                    {/* <ColorPlate
                                                                        defaultColor={
                                                                            countBgColor
                                                                        }
                                                                        onChildResult={
                                                                            handleBGCountColor
                                                                        }
                                                                    /> */}
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <span className="display_setting_subtitle">
                                                                    Background
                                                                    Hover Color
                                                                </span>
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
                                                                    {/* <ColorPlate
                                                                        defaultColor={
                                                                            countBgHoverColor
                                                                        }
                                                                        onChildResult={
                                                                            handleBGCountHoverColor
                                                                        }
                                                                    /> */}
                                                                </div>
                                                            </div>
                                                        </FormLayout.Group>
                                                    </FormLayout>
                                                </Card.Subsection>
                                            </div>
                                        </Card>
                                        {/* <Card>
                                            {menu === "0" && renderOptions()}
                                            {menu === "1" &&
                                                renderGeneralSettingsOptions()}
                                            {menu === "2" &&
                                                renderPositionSettingsOptions()}
                                            {menu === "3" &&
                                                renderIconSettingsOptions()}
                                            {menu === "4" &&
                                                renderCartCountSettingsOptions()}
                                        </Card> */}
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
                                                            <div className="pagewidth">
                                                                <div className="product_details_main">
                                                                    <div className="product_image">
                                                                        <div className="product_imagess">
                                                                            <img
                                                                                src={`images/cart-bag-image2.png`}
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                    </div>

                                                                    <div className="p_details">
                                                                        <h2>
                                                                            Demo
                                                                            Product
                                                                        </h2>
                                                                        <span>
                                                                            $20.00
                                                                        </span>
                                                                        <a className="addtocartbtn">
                                                                            Add
                                                                            to
                                                                            cart
                                                                        </a>
                                                                        <div className="product_content">
                                                                            {" "}
                                                                            Lorem
                                                                            Ipsum
                                                                            has
                                                                            been
                                                                            the
                                                                            industry's
                                                                            standard
                                                                            dummy
                                                                            text
                                                                            ever
                                                                            since
                                                                            the
                                                                            1500s,
                                                                            when
                                                                            an
                                                                            unknown
                                                                            printer
                                                                            took
                                                                            a
                                                                            galley
                                                                            of
                                                                            type
                                                                            and
                                                                            scrambled
                                                                            it
                                                                            to
                                                                            make
                                                                            a
                                                                            type
                                                                            specimen
                                                                            book.
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <Box shadow="300">
                                                    <img
                                                        alt=""
                                                        width="100%"
                                                        height="auto"
                                                        src={`images/ProductDetail.png`}
                                                    />
                                                </Box> */}
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
                                                                        // bottom:
                                                                        //     positionBottom ===
                                                                        //     0
                                                                        //         ? ""
                                                                        //         : positionBottom +
                                                                        //           "%",
                                                                        left:
                                                                            positionLeft ===
                                                                            0
                                                                                ? ""
                                                                                : positionLeft +
                                                                                  "%",
                                                                        // right:
                                                                        //     positionRight ===
                                                                        //     0
                                                                        //         ? ""
                                                                        //         : positionRight +
                                                                        //           "%",
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
                                                                            className="apply-font sticky_Count"
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
