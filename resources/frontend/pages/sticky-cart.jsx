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
    const navigateToSubMenu = (submenu) => {
        setMenu(submenu);
    };

    const templateOptions = [
        { label: "Shopping Cart", value: "1" },
        { label: "Cart With Plus", value: "2" },
        { label: "Cart With Down Arrow", value: "3" },
        { label: "Shopping Basket", value: "4" },
        { label: "Shopping Bag", value: "5" },
    ];

    //  HANDLE NAVIGATION ON CLICK ON BACK BUTTON START
    const handleActionClick = useCallback(() => {
        if (menu !== "0") {
            setMenu("0");
        }
    });

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
    const [enableSticky, setEnableSticky] = useState(true);
    const [defaultTemplate, setDefaultTemplate] = useState("1");
    const [action, setAction] = useState("1");
    const [btnSize, setBtnSize] = useState(60);
    const [bgColor, setBgColor] = useState("#000000");
    const [bgHoverColor, setBgHoverColor] = useState("#000000");
    const [borderSize, setBorderSize] = useState(1);
    const [borderColor, setBorderColor] = useState("#000000");
    const [borderHoverColor, setBorderHoverColor] = useState("#000000");
    const [positionTop, setPositionTop] = useState(20);
    const [positionBottom, setPositionBottom] = useState(0);
    const [positionLeft, setPositionLeft] = useState(0);
    const [positionRight, setPositionRight] = useState(1);
    const [iconSize, setIconSize] = useState(20);
    const [iconColor, setIconColor] = useState("#000000");
    const [iconHoverColor, setIconHoverColor] = useState("#f08080");
    const [enableCount, setEnableCount] = useState(false);
    const [numberCount, setNumberCount] = useState(1);
    const [countSize, setCountSize] = useState(16);
    const [countFontSize, setCountFontSize] = useState(14);
    const [countColor, setCountColor] = useState("#000000");
    const [countHoverColor, setCountHoverColor] = useState("#000000");
    const [countBgColor, setCountBgColor] = useState("#000000");
    const [countBgHoverColor, setCountBgHoverColor] = useState("#000000");

    const handleClick = (data) => {
        navigate("/");
    };
    const getStickyCartData = async () => {
        try {
            const response = await fetch("api/getStickyCartData/" + shop_url);
            const data = await response.json();
            setStickyCartData(data.data);
            setEnableSticky(data.data.enableSticky);
            setDefaultTemplate(data.data.defaultTemplate.toString());
            setAction(data.data.current_template.action);
            setBtnSize(data.data.current_template.btnSize);
            setBgColor(data.data.current_template.bgColor);
            setBgHoverColor(data.data.current_template.bgHoverColor);
            setBorderSize(data.data.current_template.borderSize);
            setBorderColor(data.data.current_template.borderColor);
            setBorderHoverColor(data.data.current_template.borderHoverColor);
            setPositionTop(data.data.current_template.positionTop);
            setPositionBottom(data.data.current_template.positionBottom);
            setPositionLeft(data.data.current_template.positionLeft);
            setPositionRight(data.data.current_template.positionRight);
            setIconSize(data.data.current_template.iconSize);
            setIconColor(data.data.current_template.iconColor);
            setIconHoverColor(data.data.current_template.iconHoverColor);
            setEnableCount(data.data.current_template.enableCount);
            setNumberCount(data.data.current_template.numberCount);
            setCountSize(data.data.current_template.countSize);
            setCountFontSize(data.data.current_template.countFontSize);
            setCountColor(data.data.current_template.countColor);
            setCountHoverColor(data.data.current_template.countHoverColor);
            setCountBgColor(data.data.current_template.countBgColor);
            setCountBgHoverColor(data.data.current_template.countBgHoverColor);
            setShowTable(true);
            setSaveLoader(true);
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
            console.log("currentData");
            console.log(currentData);
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
        [stickyCartData]
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
            } else {
                setToastContent1(response.data.message);
                toggleActive1();
            }
        } catch (err) {
            console.log(err);
        }
    };
    //COUNT END

    //GENERAL SETTING START
    // ACTION
    const handleSelectChange = useCallback((value) => setAction(value), []);
    const options = [
        { label: "Go to Cart", value: "1" },
        { label: "Go to Checkout", value: "2" },
    ];

    //SIZE
    const handleRangeSliderChange = useCallback(
        (value) => setBtnSize(value),
        []
    );

    // BG COLOR
    const handleBGColor = (event) => {
        setBgColor(event.target.value);
    };
    // = useCallback((value) => setBgColor(value), []);

    // BG HOVER COLOR
    const handleBGHoverColor = (event) => {
        setBgHoverColor(event.target.value);
    };
    // = useCallback(
    //     (value) => setBgHoverColor(value),
    //     []
    // );

    // BORDER SIZE
    const handleBorderSliderChange = useCallback(
        (value) => setBorderSize(value),
        []
    );

    // BORDER COLOR
    const handleBorderColor = (event) => {
        setBorderColor(event.target.value);
    };
    // = useCallback((value) => setBorderColor(value), []);

    // BORDER HOVER COLOR
    const handleBorderHoverColor = (event) => {
        setBorderHoverColor(event.target.value);
    };
    // = useCallback(
    //     (value) => setBorderHoverColor(value),
    //     []
    // );

    //GENERAL SETTING RND

    //POSITION START
    //TOP
    const handleEditTopField = (value) => {
        setPositionTop(value);
    };
    //LEFT
    const handleEditLeftField = useCallback(
        (value) => setPositionLeft(value),
        []
    );
    //BOTTOM
    const handleEditBottomField = useCallback(
        (value) => setPositionBottom(value),
        []
    );
    //RIGHT
    const handleEditRightField = useCallback(
        (value) => setPositionRight(value),
        []
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
        (value) => setIconSize(value),
        []
    );

    // ICON COLOR
    const handleIconColor = (event) => {
        setIconColor(event.target.value);
    };
    // = useCallback((value) => setIconColor(value), []);

    // ICON HOVER COLOR
    const handleIconHoverColor = (event) => {
        setIconHoverColor(event.target.value);
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
    };

    // COUNT SIZE
    const handleCountSliderChange = useCallback(
        (value) => setCountSize(value),
        []
    );
    // COUNT FONT
    const handleCountFontSliderChange = useCallback(
        (value) => setCountFontSize(value),
        []
    );

    // COUNT COLOR
    const handleCountColor = (event) => {
        setCountColor(event.target.value);
    };
    // = useCallback((value) => setCountColor(value), []);

    // COUNT HOVER COLOR
    const handleCountHoverColor = (event) => {
        setCountHoverColor(event.target.value);
    };
    // = useCallback(
    //     (value) => setCountHoverColor(value),
    //     []
    // );

    // COUNT BG  COLOR
    const handleBGCountColor = (event) => {
        setCountBgColor(event.target.value);
    };
    // = useCallback(
    //     (value) => setCountBgColor(value),
    //     []
    // );

    // COUNT BG HOVER COLOR
    const handleBGCountHoverColor = (event) => {
        setCountBgHoverColor(event.target.value);
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
    };
    // console.log("defaultTemplate");
    // console.log(typeof defaultTemplate);
    // console.log(defaultTemplate);
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
                                            Sticky Cart
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
                                                                        min={0}
                                                                        max={50}
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
                                                                        max={50}
                                                                        onChange={
                                                                            handleEditLeftField
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
                                                        </FormLayout.Group>
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
                                        <Card>
                                            <div className="lm_sticky_box">
                                                <Box shadow="300">
                                                    <img
                                                        alt=""
                                                        width="100%"
                                                        height="auto"
                                                        src="data:image/jpeg;base64,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"
                                                    />
                                                </Box>
                                                <div>
                                                    {enableSticky === true ? (
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
                                                                    bottom:
                                                                        positionBottom ===
                                                                        0
                                                                            ? ""
                                                                            : positionBottom +
                                                                              "%",
                                                                    left:
                                                                        positionLeft ===
                                                                        0
                                                                            ? ""
                                                                            : positionLeft +
                                                                              "%",
                                                                    right:
                                                                        positionRight ===
                                                                        0
                                                                            ? ""
                                                                            : positionRight +
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
