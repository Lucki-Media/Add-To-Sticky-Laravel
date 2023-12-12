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
                                        <EmptyState
                                            heading="Manage your inventory transfers"
                                            action={{ content: "Add transfer" }}
                                            secondaryAction={{
                                                content: "Learn more",
                                                url: "https://help.shopify.com",
                                            }}
                                            image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
                                        >
                                            <p>
                                                Track and receive your incoming
                                                inventory from suppliers.
                                            </p>
                                        </EmptyState>
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
