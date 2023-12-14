import {
    Icon,
    Card,
    Page,
    Button,
    RangeSlider,
    TextField,
    Layout,
    Select,
    Scrollable,
    Checkbox,
    RadioButton,
    Toast,
    Frame,
    SkeletonPage,
    SkeletonBodyText,
    TextContainer,
    SkeletonDisplayText,
    Loading,
    Spinner,
    EmptyState,
    FullscreenBar,
    ButtonGroup,
    Box,
} from "@shopify/polaris";
import "../css/index.css";
import {
    ChevronLeftMinor,
    ExitMajor,
    ChevronRightMinor,
    ChevronDownMinor,
    SettingsMajor,
    CheckoutMajor,
} from "@shopify/polaris-icons";
import { Scrollbars } from "react-custom-scrollbars";
import { useNavigate } from "react-router-dom";
import { useState, useCallback, useEffect } from "react";
import TemplateData from "../StaticData/templateData";
import TemplateStyle from "../StaticData/TemplateStyle";
import FontPicker from "font-picker-react";
import { ColorPlate } from "../components/colorPlate";
import CartTemplate1 from "../Templates/CartTemplate.jsx";
import CartTemplate2 from "../Templates/CartTemplate2.jsx";
import CartTemplate3 from "../Templates/CartTemplate3.jsx";
import CartTemplate4 from "../Templates/CartTemplate4.jsx";
import CartTemplate5 from "../Templates/CartTemplate5.jsx";
import CartTemplate6 from "../Templates/CartTemplate6.jsx";
import CartTemplate7 from "../Templates/CartTemplate7.jsx";
import CartTemplate8 from "../Templates/CartTemplate8.jsx";
import axios from "axios";
import { SideBar } from "../components/SideBar";

export default function AddToCartSticky() {
    const shop_url = document.getElementById("shopOrigin").value;
    const navigate = useNavigate();
    const [menu, setMenu] = useState("0");
    const [loading, setLoading] = useState(false);
    const [saveLoader, setSaveLoader] = useState(false);
    const [showTable, setShowTable] = useState(false);
    const [isFullscreen, setFullscreen] = useState(true);

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
    const [data, setData] = useState([]);
    const [enable, setEnable] = useState(true);
    const [animationEnable, setAnimationEnable] = useState(true);
    const [defaultTemplate, setDefaultTemplate] = useState(1);
    /*GENERAL SETTINGS CONSTANTS*/
    const [position, setPosition] = useState("Top");
    const [showGeneralSettings, setShowGeneralSettings] = useState(false);
    const [checkMobile, setCheckMobile] = useState(false);
    const [checkDesktop, setCheckDesktop] = useState(false);
    const [gsBold, setGsBold] = useState(false);
    const [gsFontsize, setGsFontsize] = useState(20);
    const [gsPriceFontsize, setGsPriceFontsize] = useState(20);
    const [gsItalic, setGsItalic] = useState(false);
    const [gsUnderline, setGsUnderLine] = useState(false);
    const [gsFontFamily, setGsFontFamily] = useState("Roboto");
    const [gsTitleColor, setGsTitleColor] = useState("rgba(0, 0, 0, 0)");
    const [gsPriceColor, setGsPriceColor] = useState("rgba(255, 0, 0, 1)");
    const [gsBgColor, setGsBgColor] = useState("rgba(0, 1, 255, 1)");
    const [gsOffsetValue, setGsOffsetValue] = useState(0);
    const [gsAction, setGsAction] = useState("1");
    const [gsDisplayCondition, setGsDisplayCondition] = useState("1");
    const [containerHeight, setContainerHeight] = useState(70);
    const [showGenDisplaySetting, setShowGenDisplaySetting] = useState(false);
    const [showGenStyle, setShowGenStyle] = useState(false);
    const [showGenLayout, setShowGenLayout] = useState(false);
    const [showGenAction, setShowGenAction] = useState(false);

    /*BUY NOW CONSTANTS*/
    const [buyNowSettings, setBuyNowSettings] = useState(false);
    const [editText, setEditText] = useState("BUY NOW");
    // const [soldOut, setSoldOut] = useState("Sold out");
    const [unavailable, setUnavailable] = useState("Unavailable");
    const [btnWidthValue, setBtnWidthValue] = useState(125);
    const [btnheightValue, setBtnHeightValue] = useState(35);
    const [btnFontsize, setBtnFontsize] = useState(20);
    const [btnBorderThickness, setBtnBorderThickness] = useState(1);
    const [btnBorderRadius, setBtnBorderRadius] = useState(15);
    const [btnBold, setBtnBold] = useState(false);
    const [btnItalic, setBtnItalic] = useState(false);
    const [btnUnderline, setBtnUnderline] = useState(false);
    const [btnTextColor, setBtnTextColor] = useState("rgba(0, 1, 0, 1)");
    const [btnBgColor, setBtnBgColor] = useState("rgba(0, 1, 234, 1)");
    const [btnTexthoverColor, setBtnTexthoverColor] =
        useState("rgba(0, 144, 1, 1)");
    const [btnBgHoverColor, setBtnBgHoverColor] = useState("rgba(0, 1, 0, 1)");
    const [btnBorderColor, setBtnBorderColor] = useState("rgba(0, 1, 143, 1)");
    const [btnBorderHoverColor, setBtnBorderHoverColor] =
        useState("rgba(1, 255, 0, 1)");
    const [transferData, SetTransferData] = useState();
    const handleSelectedTemplateOption = (data) => {
        setMenu(data);
    };
    const handleTransferData = (data) => {
        setEnable(data.enable);
        setAnimationEnable(data.animationEnable);
        /*GENERAL SETTINGS VALUES*/
        setCheckDesktop(data.checkDesktop);
        setCheckMobile(data.checkMobile);
        setPosition(data.position);
        setGsFontsize(data.gsFontsize);
        setGsPriceFontsize(data.gsPriceFontsize);
        setGsFontFamily(data.gsFontFamily);
        setGsBold(data.gsBold);
        setGsItalic(data.gsItalic);
        setGsUnderLine(data.gsUnderline);
        setGsTitleColor(data.gsTitleColor);
        setContainerHeight(data.containerHeight);
        setGsPriceColor(data.gsPriceColor);
        setGsBgColor(data.gsBgColor);
        setGsOffsetValue(data.gsOffsetValue);
        setGsDisplayCondition(data.gsDisplayCondition);
        setGsAction(data.gsAction);
        //BUYNOW
        setEditText(data.editText);
        setUnavailable(data.unavailable);
        setBtnWidthValue(data.btnWidthValue);
        setBtnHeightValue(data.btnheightValue);
        setBtnFontsize(data.btnFontsize);
        setBtnBorderThickness(data.btnBorderThickness);
        setBtnBorderRadius(data.btnBorderRadius);
        setBtnBold(data.btnBold);
        setBtnItalic(data.btnItalic);
        setBtnUnderline(data.btnUnderline);
        setBtnTextColor(data.btnTextColor);
        setBtnBgColor(data.btnBgColor);
        setBtnTexthoverColor(data.btnTexthoverColor);
        setBtnBgHoverColor(data.btnBgHoverColor);
        setBtnBorderColor(data.btnBorderColor);
        setBtnBorderHoverColor(data.btnBorderHoverColor);
    };
    const getAddToStickyCartData = async () => {
        try {
            const response = await fetch(
                "api/getAddToStickyCartData/" + shop_url
            );
            const data = await response.json();
            // console.log(data.data);
            setData(data.data);
            setEnable(data.data.enable);
            setAnimationEnable(data.data.animationEnable);
            setDefaultTemplate(data.data.defaultTemplate);
            setPosition(data.data.current_template.general_settings.position);
            setGsFontsize(
                data.data.current_template.general_settings.gsFontsize
            );
            setCheckDesktop(
                data.data.current_template.general_settings.checkDesktop
            );
            setCheckMobile(
                data.data.current_template.general_settings.checkMobile
            );
            setGsFontFamily(
                data.data.current_template.general_settings.gsFontFamily
            );
            setGsBold(data.data.current_template.general_settings.gsBold);
            setGsItalic(data.data.current_template.general_settings.gsItalic);
            setGsUnderLine(
                data.data.current_template.general_settings.gsUnderline
            );
            setGsTitleColor(
                data.data.current_template.general_settings.gsTitleColor
            );
            setContainerHeight(
                data.data.current_template.general_settings.containerHeight
            );
            setGsPriceColor(
                data.data.current_template.general_settings.gsPriceColor
            );
            setGsBgColor(data.data.current_template.general_settings.gsBgColor);
            setGsOffsetValue(
                data.data.current_template.general_settings.gsOffsetValue
            );
            setGsDisplayCondition(
                data.data.current_template.general_settings.gsDisplayCondition
            );
            setGsAction(data.data.current_template.general_settings.gsAction);
            setEditText(data.data.current_template.buy_btn_settings.editText);
            // setSoldOut(data.data.current_template.buy_btn_settings.soldOut);
            setUnavailable(
                data.data.current_template.buy_btn_settings.unavailable
            );
            setBtnHeightValue(
                data.data.current_template.buy_btn_settings.btnheightValue
            );
            setBtnWidthValue(
                data.data.current_template.buy_btn_settings.btnWidthValue
            );
            setBtnFontsize(
                data.data.current_template.buy_btn_settings.btnFontsize
            );
            setBtnBold(data.data.current_template.buy_btn_settings.btnBold);
            setBtnItalic(data.data.current_template.buy_btn_settings.btnItalic);
            setBtnUnderline(
                data.data.current_template.buy_btn_settings.btnUnderline
            );
            setBtnTextColor(
                data.data.current_template.buy_btn_settings.btnTextColor
            );
            setBtnBgColor(
                data.data.current_template.buy_btn_settings.btnBgColor
            );
            setBtnTexthoverColor(
                data.data.current_template.buy_btn_settings.btnTexthoverColor
            );
            setBtnBgHoverColor(
                data.data.current_template.buy_btn_settings.btnBgHoverColor
            );
            setBtnBorderThickness(
                data.data.current_template.buy_btn_settings.btnBorderThickness
            );
            setBtnBorderRadius(
                data.data.current_template.buy_btn_settings.btnBorderRadius
            );
            setBtnBorderColor(
                data.data.current_template.buy_btn_settings.btnBorderColor
            );
            setBtnBorderHoverColor(
                data.data.current_template.buy_btn_settings.btnBorderHoverColor
            );
            setShowTable(true);
            setSaveLoader(true);
        } catch (err) {
            console.log(err);
        }
    };

    // TEMPLATE DATA START
    const handleChange = (key) => {
        // console.log(data);
        setDefaultTemplate(key);
        var currentData;
        switch (key) {
            case 1:
                currentData = data.template_1;
                break;
            case 2:
                currentData = data.template_2;
                break;
            case 3:
                currentData = data.template_3;
                break;
            case 4:
                currentData = data.template_4;
                break;
            case 5:
                currentData = data.template_5;
                break;
            case 6:
                currentData = data.template_6;
                break;
            case 7:
                currentData = data.template_7;
                break;
            case 8:
                currentData = data.template_8;
                break;

            default:
                currentData = data.current_template;
                break;
        }
        // console.log(data);
        // setEnable(data.enable);
        // setAnimationEnable(data.animationEnable);
        /*GENERAL SETTINGS VALUES*/
        setCheckDesktop(currentData.general_settings.checkDesktop);
        setCheckMobile(currentData.general_settings.checkMobile);
        setPosition(currentData.general_settings.position);
        setGsFontsize(currentData.general_settings.gsFontsize);
        setGsPriceFontsize(currentData.general_settings.gsPriceFontsize);
        setGsFontFamily(currentData.general_settings.gsFontFamily);
        setGsBold(currentData.general_settings.gsBold);
        setGsItalic(currentData.general_settings.gsItalic);
        setGsUnderLine(currentData.general_settings.gsUnderline);
        setGsTitleColor(currentData.general_settings.gsTitleColor);
        setContainerHeight(currentData.general_settings.containerHeight);
        setGsPriceColor(currentData.general_settings.gsPriceColor);
        setGsBgColor(currentData.general_settings.gsBgColor);
        setGsOffsetValue(currentData.general_settings.gsOffsetValue);
        setGsDisplayCondition(currentData.general_settings.gsDisplayCondition);
        setGsAction(currentData.general_settings.gsAction);
        /*BUY NOW BUTTON VALUES*/
        setEditText(currentData.buy_btn_settings.editText);
        // setSoldOut(currentData.buy_btn_settings.soldOut);
        setUnavailable(currentData.buy_btn_settings.unavailable);
        setBtnHeightValue(currentData.buy_btn_settings.btnheightValue);
        setBtnWidthValue(currentData.buy_btn_settings.btnWidthValue);
        setBtnFontsize(currentData.buy_btn_settings.btnFontsize);
        setBtnBold(currentData.buy_btn_settings.btnBold);
        setBtnItalic(currentData.buy_btn_settings.btnItalic);
        setBtnUnderline(currentData.buy_btn_settings.btnUnderline);
        setBtnTextColor(currentData.buy_btn_settings.btnTextColor);
        setBtnBgColor(currentData.buy_btn_settings.btnBgColor);
        setBtnTexthoverColor(currentData.buy_btn_settings.btnTexthoverColor);
        setBtnBgHoverColor(currentData.buy_btn_settings.btnBgHoverColor);
        setBtnBorderThickness(currentData.buy_btn_settings.btnBorderThickness);
        setBtnBorderRadius(currentData.buy_btn_settings.btnBorderRadius);
        setBtnBorderColor(currentData.buy_btn_settings.btnBorderColor);
        setBtnBorderHoverColor(
            currentData.buy_btn_settings.btnBorderHoverColor
        );
    };
    // TEMPLATE DATA END
    // DASHBOARD REDIRECT START
    const handleClick = (data) => {
        navigate("/");
    };
    //   DASHBOARD REDIRECT END
    let handleSave = async () => {
        try {
            let payLoad = {
                shop_domain: document.getElementById("shopOrigin").value,
                enable: enable,
                animationEnable: animationEnable,
                defaultTemplate: defaultTemplate,
                /*GENERAL SETTINGS START*/
                checkDesktop: checkDesktop,
                position: position,
                checkMobile: checkMobile,
                gsFontFamily: gsFontFamily,
                gsFontsize: gsFontsize,
                gsPriceFontsize: gsPriceFontsize,
                gsBold: gsBold,
                gsItalic: gsItalic,
                gsUnderline: gsUnderline,
                gsTitleColor: gsTitleColor,
                gsPriceColor: gsPriceColor,
                gsBgColor: gsBgColor,
                gsOffsetValue: gsOffsetValue,
                gsAction: gsAction,
                gsDisplayCondition: gsDisplayCondition,
                /*GENERAL SETTINGS END*/
                /*BUY NOW START*/
                editText: editText,
                // soldOut: soldOut,
                unavailable: unavailable,
                btnWidthValue: btnWidthValue,
                btnheightValue: btnheightValue,
                btnFontsize: btnFontsize,
                containerHeight: containerHeight,
                btnBorderThickness: btnBorderThickness,
                btnBorderRadius: btnBorderRadius,
                btnBold: btnBold,
                btnItalic: btnItalic,
                btnUnderline: btnUnderline,
                btnTextColor: btnTextColor,
                btnBgColor: btnBgColor,
                btnTexthoverColor: btnTexthoverColor,
                btnBgHoverColor: btnBgHoverColor,
                btnBorderColor: btnBorderColor,
                btnBorderHoverColor: btnBorderHoverColor,
                /*BUY NOW END*/
            };
            setLoading(true);
            setSaveLoader(false);
            let response = await axios.post("/api/saveAddToStickyCartData", {
                data: payLoad,
            });
            if (response.data.status == true) {
                // console.log("success");
                setSaveLoader(true);
                setLoading(false);
                getAddToStickyCartData();
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
    // USE EFFECT
    useEffect(() => {
        getAddToStickyCartData();
    }, []);
    // COLOR CHANGE HANDLES END

    const handleActionClick = useCallback(() => {
        setFullscreen(false);
    }, []);
    // console.log("data");
    // console.log(data);
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
                <Frame>
                    <div className="main_app_page">
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
                                            Sticky Add To Cart
                                        </p>
                                    </div>
                                    <ButtonGroup>
                                        <Button onClick={() => {}}>
                                            Discard
                                        </Button>
                                        <Button
                                            variant="primary"
                                            onClick={() => {}}
                                        >
                                            Save
                                        </Button>
                                    </ButtonGroup>
                                </div>
                            </FullscreenBar>
                        </div>

                        <Page fullWidth>
                            <div className="lm_sticky_layout">
                                {" "}
                                <Layout>
                                    <Layout.Section oneThird>
                                        <SideBar />
                                    </Layout.Section>
                                    <Layout.Section>
                                        <Card>
                                            <Box shadow="300">
                                                <img
                                                    alt=""
                                                    width="100%"
                                                    height="auto"
                                                    src="data:image/jpeg;base64,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"
                                                />
                                            </Box>
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
