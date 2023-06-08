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
} from "@shopify/polaris";
import "../css/index.css";
import { useNavigate } from "react-router-dom";

import { ChevronLeftMinor, ExitMajor } from "@shopify/polaris-icons";
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

export default function StickyCart() {
    const shop_url = document.getElementById("shopOrigin").value;
    const navigate = useNavigate();
    const [iconHover, setIconHover] = useState(false);
    const [stickyCartData, setStickyCartData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showTable, setShowTable] = useState(false);
    const [countHover, setCountHover] = useState(false);

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
    const [defaultTemplate, setDefaultTemplate] = useState(1);
    const [action, setAction] = useState("1");
    const [btnSize, setBtnSize] = useState(60);
    const [bgColor, setBgColor] = useState("rgba(0, 0, 0, 0)");
    const [bgHoverColor, setBgHoverColor] = useState("rgba(0, 0, 0, 0)");
    const [borderSize, setBorderSize] = useState(1);
    const [borderColor, setBorderColor] = useState("rgba(0, 0, 0, 0)");
    const [borderHoverColor, setBorderHoverColor] =
        useState("rgba(0, 0, 0, 0)");
    const [positionTop, setPositionTop] = useState(20);
    const [positionBottom, setPositionBottom] = useState(0);
    const [positionLeft, setPositionLeft] = useState(0);
    const [positionRight, setPositionRight] = useState(1);
    const [iconSize, setIconSize] = useState(20);
    const [iconColor, setIconColor] = useState("rgba(0, 0, 0, 0)");
    const [iconHoverColor, setIconHoverColor] = useState(
        "rgba(240, 128, 128, 1)"
    );
    const [enableCount, setEnableCount] = useState(false);
    const [numberCount, setNumberCount] = useState(1);
    const [countSize, setCountSize] = useState(16);
    const [countFontSize, setCountFontSize] = useState(14);
    const [countColor, setCountColor] = useState("rgba(0, 0, 0, 0)");
    const [countHoverColor, setCountHoverColor] = useState("rgba(0, 0, 0, 0)");
    const [countBgColor, setCountBgColor] = useState("rgba(0, 0, 0, 0)");
    const [countBgHoverColor, setCountBgHoverColor] =
        useState("rgba(0, 0, 0, 0)");

    const handleClick = (data) => {
        navigate("/");
    };
    const getStickyCartData = async () => {
        try {
            const response = await fetch("api/getStickyCartData/" + shop_url);
            const data = await response.json();
            setStickyCartData(data.data);
            setEnableSticky(data.data.enableSticky);
            setDefaultTemplate(data.data.defaultTemplate);
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
        } catch (err) {
            console.log(err);
        }
    };

    // USE EFFECT
    useEffect(() => {
        getStickyCartData();
    }, []);

    //ICON SELECT
    const handleChange = (key) => {
        setDefaultTemplate(key);
        var currentData;
        switch (key) {
            case 1:
                currentData = stickyCartData.sticky_template_1;
                break;
            case 2:
                currentData = stickyCartData.sticky_template_2;
                break;
            case 3:
                currentData = stickyCartData.sticky_template_3;
                break;
            case 4:
                currentData = stickyCartData.sticky_template_4;
                break;
            case 5:
                currentData = stickyCartData.sticky_template_5;
            default:
                currentData = stickyCartData.current_template;
                break;
        }
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
    };

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
            setShowTable(false);
            let response = await axios.post("/api/saveStickyCartData", {
                data: payLoad,
            });
            if (response.data.status == true) {
                // console.log("success");
                setShowTable(true);
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
    const handleBGColor = useCallback((value) => setBgColor(value), []);

    // BG HOVER COLOR
    const handleBGHoverColor = useCallback(
        (value) => setBgHoverColor(value),
        []
    );

    // BORDER SIZE
    const handleBorderSliderChange = useCallback(
        (value) => setBorderSize(value),
        []
    );

    // BORDER COLOR
    const handleBorderColor = useCallback((value) => setBorderColor(value), []);

    // BORDER HOVER COLOR
    const handleBorderHoverColor = useCallback(
        (value) => setBorderHoverColor(value),
        []
    );

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
    const handleIconColor = useCallback((value) => setIconColor(value), []);

    // ICON HOVER COLOR
    const handleIconHoverColor = useCallback(
        (value) => setIconHoverColor(value),
        []
    );

    // ICON STYLE START

    //COUNT START
    //ENABLE
    const handlecheckbox = useCallback(
        (newChecked) => setEnableCount(newChecked),
        []
    );

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
    const handleCountColor = useCallback((value) => setCountColor(value), []);

    // COUNT HOVER COLOR
    const handleCountHoverColor = useCallback(
        (value) => setCountHoverColor(value),
        []
    );

    // COUNT BG  COLOR
    const handleBGCountColor = useCallback(
        (value) => setCountBgColor(value),
        []
    );

    // COUNT BG HOVER COLOR
    const handleBGCountHoverColor = useCallback(
        (value) => setCountBgHoverColor(value),
        []
    );

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
    // console.log("bgColor");
    // console.log(bgColor);
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
    } else {
        return (
            <>
                <Frame>
                    <div className="topbar_title">LM ADD TO CART STICKY</div>
                    {enableSticky === true ? (
                        <div className="main_sticky___div">
                            <div
                                className="stickyCart__icon"
                                style={{
                                    position: "absolute",
                                    fontSize: iconSize,
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
                                    background: iconHover
                                        ? bgHoverColor
                                        : bgColor,
                                    height: btnSize,
                                    width: btnSize,
                                    top:
                                        positionTop === 0
                                            ? ""
                                            : positionTop + "%",
                                    bottom:
                                        positionBottom === 0
                                            ? ""
                                            : positionBottom + "%",
                                    left:
                                        positionLeft === 0
                                            ? ""
                                            : positionLeft + "%",
                                    right:
                                        positionRight === 0
                                            ? ""
                                            : positionRight + "%",
                                }}
                                onMouseEnter={handleIconEnter}
                                onMouseLeave={handleIconLeave}
                            >
                                {enableCount === true ? (
                                    <span
                                        className="sticky_Count"
                                        style={{
                                            background: countHover
                                                ? countBgHoverColor
                                                : countBgColor,
                                            width: countSize,
                                            height: countSize,
                                            fontSize: countFontSize,
                                            color: countHover
                                                ? countHoverColor
                                                : countColor,
                                        }}
                                        onMouseEnter={handleCountEnter}
                                        onMouseLeave={handleCountLeave}
                                    >
                                        {numberCount}
                                    </span>
                                ) : (
                                    ""
                                )}
                                {defaultTemplate === 1 ? (
                                    <FontAwesomeIcon icon={faCartShopping} />
                                ) : (
                                    ""
                                )}
                                {defaultTemplate === 2 ? (
                                    <FontAwesomeIcon icon={faCartPlus} />
                                ) : (
                                    ""
                                )}
                                {defaultTemplate === 3 ? (
                                    <FontAwesomeIcon icon={faCartArrowDown} />
                                ) : (
                                    ""
                                )}
                                {defaultTemplate === 4 ? (
                                    <FontAwesomeIcon icon={faBasketShopping} />
                                ) : (
                                    ""
                                )}
                                {defaultTemplate === 5 ? (
                                    <FontAwesomeIcon icon={faBagShopping} />
                                ) : (
                                    ""
                                )}
                            </div>
                        </div>
                    ) : (
                        ""
                    )}
                    <div className="main_app_page">
                        <Page>
                            <Card>
                                <div className="lm_add_to_sticky_top_bar_header_bottom">
                                    <div
                                        className="lm_add_to_sticky_top_bar_header_out"
                                        onClick={handleClick}
                                    >
                                        <Icon source={ExitMajor} color="base" />{" "}
                                        <div>Dashboard</div>
                                    </div>
                                    <Button
                                        loading={loading}
                                        onClick={handleSave}
                                        primary
                                    >
                                        Save
                                    </Button>
                                    {toastMarkup}
                                    {toastMarkup1}
                                </div>
                            </Card>
                            <Layout>
                                <Layout.Section oneThird>
                                    {/* <div
                                className="dashboard_tag"
                                onClick={handleClick}
                            >
                                <Icon source={ChevronLeftMinor} color="base" />{" "}
                                Dashboard
                            </div>
                            <div className="sidebar_title">Sticky cart</div> */}
                                    {/* cart enable disable card */}
                                    <Scrollable
                                        style={{ height: "700px" }}
                                        horizontal={false}
                                    >
                                        <div className="show_stickyCart">
                                            <Card sectioned>
                                                <span className="show_sticky_span">
                                                    Sticky cart is
                                                    <b>
                                                        {enableSticky === true
                                                            ? " Enabled"
                                                            : " Disabled"}
                                                    </b>
                                                </span>
                                                {/* <div className="show_cart_btn"> */}
                                                <Button
                                                    primary
                                                    onClick={() => {
                                                        handleEnable(
                                                            enableSticky
                                                        );
                                                    }}
                                                >
                                                    {enableSticky === true
                                                        ? "Disable"
                                                        : "Enable"}
                                                </Button>
                                            </Card>

                                            {/* GENERAL SETTING */}
                                            <span className="display_setting_title">
                                                GENERAL SETTING{" "}
                                            </span>
                                            <Card sectioned>
                                                {/* Action */}
                                                <div className="style__wrapper_div">
                                                    <span className="display_setting_subtitle">
                                                        Action
                                                    </span>
                                                    <div className="display_select_drop_down">
                                                        <Select
                                                            options={options}
                                                            onChange={
                                                                handleSelectChange
                                                            }
                                                            value={action}
                                                        />
                                                    </div>
                                                </div>

                                                {/* Size */}
                                                <div className="style__wrapper_div">
                                                    <span className="display_setting_subtitle">
                                                        Size
                                                    </span>
                                                    <div className="font_picker_popup">
                                                        <RangeSlider
                                                            label={`${btnSize} px`}
                                                            value={btnSize}
                                                            min={10}
                                                            max={100}
                                                            onChange={
                                                                handleRangeSliderChange
                                                            }
                                                            output
                                                        />
                                                    </div>
                                                </div>

                                                {/* Background Color */}
                                                <div className="style__wrapper_div">
                                                    <span className="display_setting_subtitle">
                                                        Background Color
                                                    </span>
                                                    <div>
                                                        <ColorPlate
                                                            defaultColor={
                                                                bgColor
                                                            }
                                                            onChildResult={
                                                                handleBGColor
                                                            }
                                                        />
                                                    </div>
                                                </div>

                                                {/* Background Hover Color */}
                                                <div className="style__wrapper_div">
                                                    <span className="display_setting_subtitle">
                                                        Background Hover Color
                                                    </span>
                                                    <div>
                                                        <ColorPlate
                                                            defaultColor={
                                                                bgHoverColor
                                                            }
                                                            onChildResult={
                                                                handleBGHoverColor
                                                            }
                                                        />
                                                    </div>
                                                </div>

                                                {/* Border Size */}
                                                <div className="style__wrapper_div">
                                                    <span className="display_setting_subtitle">
                                                        Border Size
                                                    </span>
                                                    <div className="font_picker_popup">
                                                        <RangeSlider
                                                            label={`${borderSize} px`}
                                                            value={borderSize}
                                                            min={0}
                                                            max={10}
                                                            onChange={
                                                                handleBorderSliderChange
                                                            }
                                                            output
                                                        />
                                                    </div>
                                                </div>

                                                {/* Border Color */}
                                                <div className="style__wrapper_div">
                                                    <span className="display_setting_subtitle">
                                                        Border Color
                                                    </span>
                                                    <div>
                                                        <ColorPlate
                                                            defaultColor={
                                                                borderColor
                                                            }
                                                            onChildResult={
                                                                handleBorderColor
                                                            }
                                                        />
                                                    </div>
                                                </div>

                                                {/* Border Hover Color */}
                                                <div className="style__wrapper_div">
                                                    <span className="display_setting_subtitle">
                                                        Border Hover Color
                                                    </span>
                                                    <div>
                                                        <ColorPlate
                                                            defaultColor={
                                                                borderHoverColor
                                                            }
                                                            onChildResult={
                                                                handleBorderHoverColor
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                            </Card>

                                            {/* POSITION */}
                                            <span className="display_setting_title">
                                                POSITION{" "}
                                            </span>
                                            <Card sectioned>
                                                {/* Top */}
                                                <div className="style__wrapper_div">
                                                    <span className="display_setting_subtitle">
                                                        Top
                                                    </span>
                                                    <div className="font_picker_popup">
                                                        <RangeSlider
                                                            label={`${positionTop}%`}
                                                            value={positionTop}
                                                            min={0}
                                                            max={100}
                                                            onChange={
                                                                handleEditTopField
                                                            }
                                                            output
                                                        />
                                                    </div>
                                                </div>

                                                {/* Left */}
                                                <div className="style__wrapper_div">
                                                    <span className="display_setting_subtitle">
                                                        Left
                                                    </span>
                                                    <div className="font_picker_popup">
                                                        <RangeSlider
                                                            label={`${positionLeft}%`}
                                                            value={positionLeft}
                                                            min={0}
                                                            max={100}
                                                            onChange={
                                                                handleEditLeftField
                                                            }
                                                            output
                                                        />
                                                    </div>
                                                </div>

                                                {/* Bottom */}
                                                <div className="style__wrapper_div">
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
                                                            max={100}
                                                            onChange={
                                                                handleEditBottomField
                                                            }
                                                            output
                                                        />
                                                    </div>
                                                </div>

                                                {/* Right */}
                                                <div className="style__wrapper_div">
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
                                                            max={100}
                                                            onChange={
                                                                handleEditRightField
                                                            }
                                                            output
                                                        />
                                                    </div>
                                                </div>
                                            </Card>

                                            {/* ICON */}
                                            <span className="display_setting_title">
                                                ICON{" "}
                                            </span>
                                            <Card sectioned>
                                                {/* Icon Size */}
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

                                                {/* Icon Color */}
                                                <div className="style__wrapper_div">
                                                    <span className="display_setting_subtitle">
                                                        Icon Color
                                                    </span>
                                                    <div>
                                                        <ColorPlate
                                                            defaultColor={
                                                                iconColor
                                                            }
                                                            onChildResult={
                                                                handleIconColor
                                                            }
                                                        />
                                                    </div>
                                                </div>

                                                {/* Icon Hover Color */}
                                                <div className="style__wrapper_div">
                                                    <span className="display_setting_subtitle">
                                                        Icon Hover Color
                                                    </span>
                                                    <div>
                                                        <ColorPlate
                                                            defaultColor={
                                                                iconHoverColor
                                                            }
                                                            onChildResult={
                                                                handleIconHoverColor
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                            </Card>

                                            {/* CART COUNT */}
                                            <span className="display_setting_title">
                                                CART COUNT{" "}
                                            </span>

                                            <Card sectioned>
                                                {/* Enable COUNT */}
                                                <div className="style__wrapper_div">
                                                    <Checkbox
                                                        label="Enable"
                                                        checked={enableCount}
                                                        onChange={
                                                            handlecheckbox
                                                        }
                                                    />
                                                </div>

                                                {/* Size */}
                                                <div className="style__wrapper_div">
                                                    <span className="display_setting_subtitle">
                                                        Size
                                                    </span>
                                                    <div className="font_picker_popup">
                                                        <RangeSlider
                                                            label={`${countSize} px`}
                                                            value={countSize}
                                                            min={8}
                                                            max={40}
                                                            onChange={
                                                                handleCountSliderChange
                                                            }
                                                            output
                                                        />
                                                    </div>
                                                </div>

                                                {/* Font Size */}
                                                <div className="style__wrapper_div">
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

                                                {/*  Color */}
                                                <div className="style__wrapper_div">
                                                    <span className="display_setting_subtitle">
                                                        {" "}
                                                        Count Color
                                                    </span>
                                                    <div>
                                                        <ColorPlate
                                                            defaultColor={
                                                                countColor
                                                            }
                                                            onChildResult={
                                                                handleCountColor
                                                            }
                                                        />
                                                    </div>
                                                </div>

                                                {/*  Hover Color */}
                                                <div className="style__wrapper_div">
                                                    <span className="display_setting_subtitle">
                                                        Count Hover Color
                                                    </span>
                                                    <div>
                                                        <ColorPlate
                                                            defaultColor={
                                                                countHoverColor
                                                            }
                                                            onChildResult={
                                                                handleCountHoverColor
                                                            }
                                                        />
                                                    </div>
                                                </div>

                                                {/* Background  Color */}
                                                <div className="style__wrapper_div">
                                                    <span className="display_setting_subtitle">
                                                        Background Color
                                                    </span>
                                                    <div>
                                                        <ColorPlate
                                                            defaultColor={
                                                                countBgColor
                                                            }
                                                            onChildResult={
                                                                handleBGCountColor
                                                            }
                                                        />
                                                    </div>
                                                </div>

                                                {/* Background  Hover Color */}
                                                <div className="style__wrapper_div">
                                                    <span className="display_setting_subtitle">
                                                        Background Hover Color
                                                    </span>
                                                    <div>
                                                        <ColorPlate
                                                            defaultColor={
                                                                countBgHoverColor
                                                            }
                                                            onChildResult={
                                                                handleBGCountHoverColor
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                            </Card>
                                        </div>
                                    </Scrollable>
                                </Layout.Section>
                                <Layout.Section>
                                    {/* <div className="save_template_btn">
                                <Button primary>Save</Button>
                            </div> */}
                                    <div style={{ marginTop: "10px" }}>
                                        <Card sectioned>
                                            <div className="template___Card">
                                                Choose the sticky cart template
                                            </div>
                                            <div className="">
                                                {stickyData.map((item) => (
                                                    <div
                                                        className="sticky_child"
                                                        key={item.key}
                                                    >
                                                        <div>
                                                            <RadioButton
                                                                label={
                                                                    item.label
                                                                }
                                                                id={item.key}
                                                                checked={
                                                                    defaultTemplate ===
                                                                    item.key
                                                                }
                                                                name="stickyCart"
                                                                onChange={() => {
                                                                    handleChange(
                                                                        item.key
                                                                    );
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </Card>
                                    </div>
                                </Layout.Section>
                            </Layout>
                        </Page>
                    </div>
                </Frame>
            </>
        );
    }
}
