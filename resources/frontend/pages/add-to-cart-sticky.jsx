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

export default function AddToCartSticky() {
    const shop_url = document.getElementById("shopOrigin").value;
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [saveLoader, setSaveLoader] = useState(false);
    const [showTable, setShowTable] = useState(false);

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
    const [defaultTemplate, setDefaultTemplate] = useState(1);
    /*GENERAL SETTINGS CONSTANTS*/
    const [position, setPosition] = useState("Top");
    const [showGeneralSettings, setShowGeneralSettings] = useState(false);
    const [checkMobile, setCheckMobile] = useState(false);
    const [checkDesktop, setCheckDesktop] = useState(false);
    const [gsBold, setGsBold] = useState(false);
    const [gsFontsize, setGsFontsize] = useState(20);
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
    const getAddToStickyCartData = async () => {
        try {
            const response = await fetch(
                "api/getAddToStickyCartData/" + shop_url
            );
            const data = await response.json();
            // console.log(data.data);
            setData(data.data);
            setEnable(data.data.enable);
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
        // console.log(currentData);
        setEnable(data.enable);
        /*GENERAL SETTINGS VALUES*/
        setCheckDesktop(currentData.general_settings.checkDesktop);
        setCheckMobile(currentData.general_settings.checkMobile);
        setPosition(currentData.general_settings.position);
        setGsFontsize(currentData.general_settings.gsFontsize);
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
                defaultTemplate: defaultTemplate,
                /*GENERAL SETTINGS START*/
                checkDesktop: checkDesktop,
                position: position,
                checkMobile: checkMobile,
                gsFontFamily: gsFontFamily,
                gsFontsize: gsFontsize,
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

    /*ENABLE BUTTON START*/
    const handleEnable = (value) => {
        setEnable(!value);
    };
    /*ENABLE BUTTON END*/

    /*GENERAL SETTINGS SHOW START*/
    const hanldeShowGeneralSetting = (value) => {
        setBuyNowSettings(false);
        setShowGeneralSettings(!value);
    };
    /*GENERAL SETTINGS SHOW END*/

    /*BUY NOW SHOW START*/
    const hanldeBuyNowSetting = (value) => {
        setShowGeneralSettings(false);
        setBuyNowSettings(!value);
    };
    /*BUY NOW SHOW END*/

    /*STYLE PART START*/
    /*FONT FAMILY GENERAL SETTINGS*/
    const handleFontChange = (value) => {
        setGsFontFamily(value.family);
    };

    /*TITLE FONT SIZE GENERAL SETTINGS*/
    const handleRangeSliderChange = useCallback(
        (value) => setGsFontsize(value),
        []
    );

    /*TITLE STYLE GENERAL SETTINGS*/
    const handleBold = useCallback((newChecked) => setGsBold(newChecked), []);
    const handleItalic = useCallback(
        (newChecked) => setGsItalic(newChecked),
        []
    );
    const handleUnderline = useCallback(
        (newChecked) => setGsUnderLine(newChecked),
        []
    );
    /*TITLE STYLE GENERAL SETTINGS*/

    /*HEIGHT BUY NOW*/
    const handleHeightSliderChange = useCallback(
        (value) => setContainerHeight(value),
        []
    );
    /*HEIGHT BUY NOW*/

    /*STYLE PART END*/

    /*LAYOUT PART START*/
    /*POSITION GENERAL SETTINGS*/
    const handlePositionChange = (key) => {
        setPosition(key);
    };
    /*POSITION GENERAL SETTINGS*/

    /*OFFSET GENERAL SETTINGS*/
    const handleOffsetSliderChange = useCallback(
        (value) => setGsOffsetValue(value),
        []
    );
    /*LAYOUT PART END*/

    /*ACTION GENERAL SETTINGS*/
    const handleSelectChange = useCallback((value) => setGsAction(value), []);
    const options = [
        { label: "Go to Cart", value: "1" },
        { label: "Go to Checkout", value: "2" },
    ];

    /*DISPLAY CONDITION GENERAL SETTINGS*/
    const handleConditionChange = useCallback(
        (value) => setGsDisplayCondition(value),
        []
    );
    const conditions = [
        { label: "Always show", value: "1" },
        {
            label: "Only when add to cart is not visible",
            value: "2",
        },
        {
            label: "Only when user has scrolled down and surpassed the 'Add to cart' button",
            value: "3",
        },
    ];
    /*DISPLAY SETTING START GENERAL SETTINGS*/
    const handlecheckboxMobile = useCallback(
        (newChecked) => setCheckMobile(newChecked),
        []
    );

    const handlecheckboxDesktop = useCallback(
        (newChecked) => setCheckDesktop(newChecked),
        []
    );
    /*DISPLAY SETTING END GENERAL SETTINGS*/

    // COLOR CHANGE HANDLES START GENERAL SETTINGS*/
    // TITLE COLOR
    const handleTitleColor = useCallback((value) => setGsTitleColor(value), []);

    // PRICE COLOR
    const handlePriceColor = useCallback((value) => setGsPriceColor(value), []);

    // PRICE COLOR
    const handleBGColor = useCallback((value) => setGsBgColor(value), []);

    /*BUY NOW BTN TEXT START*/
    // EDIT TEXT
    const handleEditTextField = (val) => {
        setEditText(val);
    };
    // SOLD OUT
    // const handleSoldOutTextField = (val) => {
    //     setSoldOut(val);
    // };
    // UNAVAILABLE
    const handleUnavailableTextField = (val) => {
        setUnavailable(val);
    };
    /*BUY NOW BTN TEXT END*/

    /*BUY NOW BTN STYLE START*/
    // WIDTH
    const handleWidthSliderChange = useCallback(
        (value) => setBtnWidthValue(value),
        []
    );
    // BUY NOW BTN HEIGHT
    const handleBuyButtonHeightSliderChange = useCallback(
        (value) => setBtnHeightValue(value),
        []
    );
    //BUY NOW  FONT SIZE
    const handleFontSizeSliderChange = useCallback(
        (value) => setBtnFontsize(value),
        []
    );
    // BUY NOW  STYLE
    const handleBoldButton = useCallback(
        (newChecked) => setBtnBold(newChecked),
        []
    );
    const handleItalicButton = useCallback(
        (newChecked) => setBtnItalic(newChecked),
        []
    );
    const handleUnderlineButton = useCallback(
        (newChecked) => setBtnUnderline(newChecked),
        []
    );
    // BORDER THIKNESS
    const handleBorderSliderChange = useCallback(
        (value) => setBtnBorderThickness(value),
        []
    );

    // BORDER RADIUS
    const handleRadiusSliderChange = useCallback(
        (value) => setBtnBorderRadius(value),
        []
    );
    /*BUY NOW BTN STYLE END*/

    // BTN TEXT COLOR
    const handlebtnTextColor = useCallback(
        (value) => setBtnTextColor(value),
        []
    );

    // TEXT HOVER COLOR
    const handletexthoverColor = useCallback(
        (value) => setBtnTexthoverColor(value),
        []
    );

    // BG HOVER COLOR
    const handlebgHoverColor = useCallback(
        (value) => setBtnBgHoverColor(value),
        []
    );

    // BTN BG COLOR
    const handlebtnBGColor = useCallback((value) => setBtnBgColor(value), []);

    // BORDER COLOR
    const handleborderColor = useCallback(
        (value) => setBtnBorderColor(value),
        []
    );

    // BORDER HOVER COLOR
    const handlebordeHoverColor = useCallback(
        (value) => setBtnBorderHoverColor(value),
        []
    );
    // COLOR CHANGE HANDLES END
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
                    <div className="topbar_title">LM ADD TO CART STICKY</div>

                    <div style={{ height: containerHeight, marginTop: 50 }}>
                        {defaultTemplate === 1 ? (
                            <CartTemplate1
                                template_data={data.template_1}
                                enable={enable}
                                defaultTemplate={defaultTemplate}
                                position={position}
                                checkMobile={checkMobile}
                                checkDesktop={checkDesktop}
                                gsBold={gsBold}
                                gsFontsize={gsFontsize}
                                gsItalic={gsItalic}
                                gsUnderline={gsUnderline}
                                gsFontFamily={gsFontFamily}
                                gsTitleColor={gsTitleColor}
                                gsPriceColor={gsPriceColor}
                                gsBgColor={gsBgColor}
                                gsOffsetValue={gsOffsetValue}
                                gsAction={gsAction}
                                gsDisplayCondition={gsDisplayCondition}
                                buyNowSettings={buyNowSettings}
                                editText={editText}
                                // soldOut={soldOut}
                                unavailable={unavailable}
                                btnWidthValue={btnWidthValue}
                                btnheightValue={btnheightValue}
                                btnFontsize={btnFontsize}
                                containerHeight={containerHeight}
                                btnBorderThickness={btnBorderThickness}
                                btnBorderRadius={btnBorderRadius}
                                btnBold={btnBold}
                                btnItalic={btnItalic}
                                btnUnderline={btnUnderline}
                                btnTextColor={btnTextColor}
                                btnBgColor={btnBgColor}
                                btnTexthoverColor={btnTexthoverColor}
                                btnBgHoverColor={btnBgHoverColor}
                                btnBorderColor={btnBorderColor}
                                btnBorderHoverColor={btnBorderHoverColor}
                            />
                        ) : (
                            ""
                        )}
                        {defaultTemplate === 2 ? (
                            <CartTemplate2
                                template_data={data.template_2}
                                enable={enable}
                                defaultTemplate={defaultTemplate}
                                position={position}
                                checkMobile={checkMobile}
                                checkDesktop={checkDesktop}
                                gsBold={gsBold}
                                gsFontsize={gsFontsize}
                                gsItalic={gsItalic}
                                gsUnderline={gsUnderline}
                                gsFontFamily={gsFontFamily}
                                gsTitleColor={gsTitleColor}
                                gsPriceColor={gsPriceColor}
                                gsBgColor={gsBgColor}
                                gsOffsetValue={gsOffsetValue}
                                gsAction={gsAction}
                                gsDisplayCondition={gsDisplayCondition}
                                buyNowSettings={buyNowSettings}
                                editText={editText}
                                // soldOut={soldOut}
                                unavailable={unavailable}
                                btnWidthValue={btnWidthValue}
                                btnheightValue={btnheightValue}
                                btnFontsize={btnFontsize}
                                containerHeight={containerHeight}
                                btnBorderThickness={btnBorderThickness}
                                btnBorderRadius={btnBorderRadius}
                                btnBold={btnBold}
                                btnItalic={btnItalic}
                                btnUnderline={btnUnderline}
                                btnTextColor={btnTextColor}
                                btnBgColor={btnBgColor}
                                btnTexthoverColor={btnTexthoverColor}
                                btnBgHoverColor={btnBgHoverColor}
                                btnBorderColor={btnBorderColor}
                                btnBorderHoverColor={btnBorderHoverColor}
                            />
                        ) : (
                            ""
                        )}
                        {defaultTemplate === 3 ? (
                            <CartTemplate3
                                template_data={data.template_3}
                                enable={enable}
                                defaultTemplate={defaultTemplate}
                                position={position}
                                checkMobile={checkMobile}
                                checkDesktop={checkDesktop}
                                gsBold={gsBold}
                                gsFontsize={gsFontsize}
                                gsItalic={gsItalic}
                                gsUnderline={gsUnderline}
                                gsFontFamily={gsFontFamily}
                                gsTitleColor={gsTitleColor}
                                gsPriceColor={gsPriceColor}
                                gsBgColor={gsBgColor}
                                gsOffsetValue={gsOffsetValue}
                                gsAction={gsAction}
                                gsDisplayCondition={gsDisplayCondition}
                                buyNowSettings={buyNowSettings}
                                editText={editText}
                                // soldOut={soldOut}
                                unavailable={unavailable}
                                btnWidthValue={btnWidthValue}
                                btnheightValue={btnheightValue}
                                btnFontsize={btnFontsize}
                                containerHeight={containerHeight}
                                btnBorderThickness={btnBorderThickness}
                                btnBorderRadius={btnBorderRadius}
                                btnBold={btnBold}
                                btnItalic={btnItalic}
                                btnUnderline={btnUnderline}
                                btnTextColor={btnTextColor}
                                btnBgColor={btnBgColor}
                                btnTexthoverColor={btnTexthoverColor}
                                btnBgHoverColor={btnBgHoverColor}
                                btnBorderColor={btnBorderColor}
                                btnBorderHoverColor={btnBorderHoverColor}
                            />
                        ) : (
                            ""
                        )}
                        {defaultTemplate === 4 ? (
                            <CartTemplate4
                                template_data={data.template_4}
                                enable={enable}
                                defaultTemplate={defaultTemplate}
                                position={position}
                                checkMobile={checkMobile}
                                checkDesktop={checkDesktop}
                                gsBold={gsBold}
                                gsFontsize={gsFontsize}
                                gsItalic={gsItalic}
                                gsUnderline={gsUnderline}
                                gsFontFamily={gsFontFamily}
                                gsTitleColor={gsTitleColor}
                                gsPriceColor={gsPriceColor}
                                gsBgColor={gsBgColor}
                                gsOffsetValue={gsOffsetValue}
                                gsAction={gsAction}
                                gsDisplayCondition={gsDisplayCondition}
                                buyNowSettings={buyNowSettings}
                                editText={editText}
                                // soldOut={soldOut}
                                unavailable={unavailable}
                                btnWidthValue={btnWidthValue}
                                btnheightValue={btnheightValue}
                                btnFontsize={btnFontsize}
                                containerHeight={containerHeight}
                                btnBorderThickness={btnBorderThickness}
                                btnBorderRadius={btnBorderRadius}
                                btnBold={btnBold}
                                btnItalic={btnItalic}
                                btnUnderline={btnUnderline}
                                btnTextColor={btnTextColor}
                                btnBgColor={btnBgColor}
                                btnTexthoverColor={btnTexthoverColor}
                                btnBgHoverColor={btnBgHoverColor}
                                btnBorderColor={btnBorderColor}
                                btnBorderHoverColor={btnBorderHoverColor}
                            />
                        ) : (
                            ""
                        )}
                        {defaultTemplate === 5 ? (
                            <CartTemplate5
                                template_data={data.template_5}
                                enable={enable}
                                defaultTemplate={defaultTemplate}
                                position={position}
                                checkMobile={checkMobile}
                                checkDesktop={checkDesktop}
                                gsBold={gsBold}
                                gsFontsize={gsFontsize}
                                gsItalic={gsItalic}
                                gsUnderline={gsUnderline}
                                gsFontFamily={gsFontFamily}
                                gsTitleColor={gsTitleColor}
                                gsPriceColor={gsPriceColor}
                                gsBgColor={gsBgColor}
                                gsOffsetValue={gsOffsetValue}
                                gsAction={gsAction}
                                gsDisplayCondition={gsDisplayCondition}
                                buyNowSettings={buyNowSettings}
                                editText={editText}
                                // soldOut={soldOut}
                                unavailable={unavailable}
                                btnWidthValue={btnWidthValue}
                                btnheightValue={btnheightValue}
                                btnFontsize={btnFontsize}
                                containerHeight={containerHeight}
                                btnBorderThickness={btnBorderThickness}
                                btnBorderRadius={btnBorderRadius}
                                btnBold={btnBold}
                                btnItalic={btnItalic}
                                btnUnderline={btnUnderline}
                                btnTextColor={btnTextColor}
                                btnBgColor={btnBgColor}
                                btnTexthoverColor={btnTexthoverColor}
                                btnBgHoverColor={btnBgHoverColor}
                                btnBorderColor={btnBorderColor}
                                btnBorderHoverColor={btnBorderHoverColor}
                            />
                        ) : (
                            ""
                        )}
                        {defaultTemplate === 6 ? (
                            <CartTemplate6
                                template_data={data.template_6}
                                enable={enable}
                                defaultTemplate={defaultTemplate}
                                position={position}
                                checkMobile={checkMobile}
                                checkDesktop={checkDesktop}
                                gsBold={gsBold}
                                gsFontsize={gsFontsize}
                                gsItalic={gsItalic}
                                gsUnderline={gsUnderline}
                                gsFontFamily={gsFontFamily}
                                gsTitleColor={gsTitleColor}
                                gsPriceColor={gsPriceColor}
                                gsBgColor={gsBgColor}
                                gsOffsetValue={gsOffsetValue}
                                gsAction={gsAction}
                                gsDisplayCondition={gsDisplayCondition}
                                buyNowSettings={buyNowSettings}
                                editText={editText}
                                // soldOut={soldOut}
                                unavailable={unavailable}
                                btnWidthValue={btnWidthValue}
                                btnheightValue={btnheightValue}
                                btnFontsize={btnFontsize}
                                containerHeight={containerHeight}
                                btnBorderThickness={btnBorderThickness}
                                btnBorderRadius={btnBorderRadius}
                                btnBold={btnBold}
                                btnItalic={btnItalic}
                                btnUnderline={btnUnderline}
                                btnTextColor={btnTextColor}
                                btnBgColor={btnBgColor}
                                btnTexthoverColor={btnTexthoverColor}
                                btnBgHoverColor={btnBgHoverColor}
                                btnBorderColor={btnBorderColor}
                                btnBorderHoverColor={btnBorderHoverColor}
                            />
                        ) : (
                            ""
                        )}
                        {defaultTemplate === 7 ? (
                            <CartTemplate7
                                template_data={data.template_7}
                                enable={enable}
                                defaultTemplate={defaultTemplate}
                                position={position}
                                checkMobile={checkMobile}
                                checkDesktop={checkDesktop}
                                gsBold={gsBold}
                                gsFontsize={gsFontsize}
                                gsItalic={gsItalic}
                                gsUnderline={gsUnderline}
                                gsFontFamily={gsFontFamily}
                                gsTitleColor={gsTitleColor}
                                gsPriceColor={gsPriceColor}
                                gsBgColor={gsBgColor}
                                gsOffsetValue={gsOffsetValue}
                                gsAction={gsAction}
                                gsDisplayCondition={gsDisplayCondition}
                                buyNowSettings={buyNowSettings}
                                editText={editText}
                                // soldOut={soldOut}
                                unavailable={unavailable}
                                btnWidthValue={btnWidthValue}
                                btnheightValue={btnheightValue}
                                btnFontsize={btnFontsize}
                                containerHeight={containerHeight}
                                btnBorderThickness={btnBorderThickness}
                                btnBorderRadius={btnBorderRadius}
                                btnBold={btnBold}
                                btnItalic={btnItalic}
                                btnUnderline={btnUnderline}
                                btnTextColor={btnTextColor}
                                btnBgColor={btnBgColor}
                                btnTexthoverColor={btnTexthoverColor}
                                btnBgHoverColor={btnBgHoverColor}
                                btnBorderColor={btnBorderColor}
                                btnBorderHoverColor={btnBorderHoverColor}
                            />
                        ) : (
                            ""
                        )}
                        {defaultTemplate === 8 ? (
                            <CartTemplate8
                                template_data={data.template_8}
                                enable={enable}
                                defaultTemplate={defaultTemplate}
                                position={position}
                                checkMobile={checkMobile}
                                checkDesktop={checkDesktop}
                                gsBold={gsBold}
                                gsFontsize={gsFontsize}
                                gsItalic={gsItalic}
                                gsUnderline={gsUnderline}
                                gsFontFamily={gsFontFamily}
                                gsTitleColor={gsTitleColor}
                                gsPriceColor={gsPriceColor}
                                gsBgColor={gsBgColor}
                                gsOffsetValue={gsOffsetValue}
                                gsAction={gsAction}
                                gsDisplayCondition={gsDisplayCondition}
                                buyNowSettings={buyNowSettings}
                                editText={editText}
                                // soldOut={soldOut}
                                unavailable={unavailable}
                                btnWidthValue={btnWidthValue}
                                btnheightValue={btnheightValue}
                                btnFontsize={btnFontsize}
                                containerHeight={containerHeight}
                                btnBorderThickness={btnBorderThickness}
                                btnBorderRadius={btnBorderRadius}
                                btnBold={btnBold}
                                btnItalic={btnItalic}
                                btnUnderline={btnUnderline}
                                btnTextColor={btnTextColor}
                                btnBgColor={btnBgColor}
                                btnTexthoverColor={btnTexthoverColor}
                                btnBgHoverColor={btnBgHoverColor}
                                btnBorderColor={btnBorderColor}
                                btnBorderHoverColor={btnBorderHoverColor}
                            />
                        ) : (
                            ""
                        )}
                    </div>
                    <div className="main_app_page" style={{ marginTop: 30 }}>
                        <Page>
                            <Card>
                                <div className="lm_add_to_sticky_top_bar_header_bottom">
                                    <div
                                        className="lm_add_to_sticky_top_bar_header_out"
                                        onClick={handleClick}
                                    >
                                        <Icon source={ExitMajor} color="base" />{" "}
                                        <div>
                                            Dashboard /{" "}
                                            <strong>Add To Sticky Cart</strong>
                                        </div>
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
                                    {/* cart enable disable card */}
                                    <div className="show_stickyCart">
                                        <Card sectioned>
                                            <span className="show_sticky_span">
                                                Add To Sticky Cart is{" "}
                                                <b>
                                                    {enable === true
                                                        ? "Enabled"
                                                        : "Disabled"}
                                                </b>{" "}
                                            </span>
                                            {/* <div className="show_cart_btn"> */}
                                            <Button
                                                primary
                                                onClick={() => {
                                                    handleEnable(enable);
                                                }}
                                            >
                                                {enable === true
                                                    ? "Disable"
                                                    : "Enable"}
                                            </Button>
                                        </Card>
                                    </div>

                                    {/* general Cart Settings */}
                                    <div
                                        className="general_setting_title"
                                        onClick={() => {
                                            hanldeShowGeneralSetting(
                                                showGeneralSettings
                                            );
                                        }}
                                    >
                                        <Card sectioned>
                                            <span className="general_setting_icon">
                                                <Icon
                                                    source={SettingsMajor}
                                                    color="base"
                                                />
                                            </span>
                                            <div className="setting_title">
                                                <span className="show_sticky_span">
                                                    General Settings
                                                </span>
                                                <span>
                                                    {showGeneralSettings ===
                                                    true ? (
                                                        <Icon
                                                            source={
                                                                ChevronDownMinor
                                                            }
                                                        />
                                                    ) : (
                                                        <Icon
                                                            source={
                                                                ChevronRightMinor
                                                            }
                                                        />
                                                    )}
                                                </span>
                                            </div>
                                        </Card>
                                    </div>

                                    {showGeneralSettings === true ? (
                                        <Scrollable
                                            style={{ height: "500px" }}
                                            horizontal={false}
                                        >
                                            <div className="overall_general_content">
                                                {/* DISPLAY SETTING */}
                                                <span className="display_setting_title">
                                                    DISPLAY SETTING{" "}
                                                </span>
                                                <Card sectioned>
                                                    {/* <div className="show_cart_btn"> */}
                                                    <Checkbox
                                                        label="Desktop"
                                                        checked={checkDesktop}
                                                        onChange={
                                                            handlecheckboxDesktop
                                                        }
                                                    />
                                                    <br />
                                                    <Checkbox
                                                        label="Mobile"
                                                        checked={checkMobile}
                                                        onChange={
                                                            handlecheckboxMobile
                                                        }
                                                    />
                                                </Card>

                                                {/* style part */}
                                                <span className="display_setting_title">
                                                    STYLE{" "}
                                                </span>
                                                <Card sectioned>
                                                    {/* font family */}
                                                    <div className="style__wrapper_div">
                                                        <span className="display_setting_subtitle">
                                                            Font Family{" "}
                                                        </span>
                                                        <div className="font_picker_popup">
                                                            <FontPicker
                                                                apiKey="AIzaSyBRCzvluQdkcyQkKHPjLwltLe2HrkUd5Bs"
                                                                activeFontFamily={
                                                                    gsFontFamily
                                                                }
                                                                onChange={
                                                                    handleFontChange
                                                                }
                                                            />
                                                        </div>
                                                    </div>

                                                    {/* Title Font-size */}
                                                    <div className="style__wrapper_div">
                                                        <span className="display_setting_subtitle">
                                                            Title Font-size
                                                        </span>
                                                        <div className="font_picker_popup">
                                                            <RangeSlider
                                                                label={`${gsFontsize} px`}
                                                                value={
                                                                    gsFontsize
                                                                }
                                                                min={8}
                                                                max={40}
                                                                onChange={
                                                                    handleRangeSliderChange
                                                                }
                                                                output
                                                            />
                                                        </div>
                                                    </div>

                                                    {/* Title Style */}
                                                    <div className="style__wrapper_div">
                                                        <span className="display_setting_subtitle">
                                                            Title Style
                                                        </span>
                                                        <div className="">
                                                            <Checkbox
                                                                label="Bold"
                                                                checked={gsBold}
                                                                onChange={
                                                                    handleBold
                                                                }
                                                            />
                                                            <br />
                                                            <Checkbox
                                                                label="Italic"
                                                                checked={
                                                                    gsItalic
                                                                }
                                                                onChange={
                                                                    handleItalic
                                                                }
                                                            />
                                                            <br />
                                                            <Checkbox
                                                                label="Underline"
                                                                checked={
                                                                    gsUnderline
                                                                }
                                                                onChange={
                                                                    handleUnderline
                                                                }
                                                            />
                                                        </div>
                                                    </div>

                                                    {/* Title Color */}
                                                    <div className="style__wrapper_div">
                                                        <span className="display_setting_subtitle">
                                                            Title Color
                                                        </span>
                                                        <div>
                                                            <ColorPlate
                                                                defaultColor={
                                                                    gsTitleColor
                                                                }
                                                                onChildResult={
                                                                    handleTitleColor
                                                                }
                                                            />
                                                        </div>
                                                    </div>

                                                    {/* Height */}
                                                    <div className="style__wrapper_div">
                                                        <span className="display_setting_subtitle">
                                                            Height
                                                        </span>
                                                        <div className="font_picker_popup">
                                                            <RangeSlider
                                                                label={`${containerHeight} px`}
                                                                value={
                                                                    containerHeight
                                                                }
                                                                min={50}
                                                                max={150}
                                                                onChange={
                                                                    handleHeightSliderChange
                                                                }
                                                                output
                                                            />
                                                        </div>
                                                    </div>

                                                    {/* Price Color */}
                                                    <div className="style__wrapper_div">
                                                        <span className="display_setting_subtitle">
                                                            Price Color
                                                        </span>
                                                        <div>
                                                            <ColorPlate
                                                                defaultColor={
                                                                    gsPriceColor
                                                                }
                                                                onChildResult={
                                                                    handlePriceColor
                                                                }
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
                                                                    gsBgColor
                                                                }
                                                                onChildResult={
                                                                    handleBGColor
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                </Card>

                                                {/* layout part */}
                                                <span className="display_setting_title">
                                                    LAYOUT{" "}
                                                </span>
                                                <Card sectioned>
                                                    {/* Position */}
                                                    <div className="style__wrapper_div">
                                                        <span className="display_setting_subtitle">
                                                            Position
                                                        </span>
                                                        <div>
                                                            <RadioButton
                                                                label={"Top"}
                                                                id={"Top"}
                                                                checked={
                                                                    position ===
                                                                    "Top"
                                                                }
                                                                name="position"
                                                                onChange={() => {
                                                                    handlePositionChange(
                                                                        "Top"
                                                                    );
                                                                }}
                                                            />
                                                            <br />
                                                            <RadioButton
                                                                label={"Bottom"}
                                                                id={"Bottom"}
                                                                checked={
                                                                    position ===
                                                                    "Bottom"
                                                                }
                                                                name="position"
                                                                onChange={() => {
                                                                    handlePositionChange(
                                                                        "Bottom"
                                                                    );
                                                                }}
                                                            />
                                                        </div>
                                                    </div>

                                                    {/* Offset */}
                                                    <div className="style__wrapper_div">
                                                        <span className="display_setting_subtitle">
                                                            Offset
                                                        </span>
                                                        <div className="font_picker_popup">
                                                            <RangeSlider
                                                                label={`${gsOffsetValue} px`}
                                                                value={
                                                                    gsOffsetValue
                                                                }
                                                                min={0}
                                                                max={250}
                                                                onChange={
                                                                    handleOffsetSliderChange
                                                                }
                                                                output
                                                            />
                                                        </div>
                                                    </div>
                                                </Card>

                                                {/* action part */}
                                                <span className="display_setting_title">
                                                    ACTION{" "}
                                                </span>
                                                <Card sectioned>
                                                    {/* Action */}
                                                    <div className="style__wrapper_div">
                                                        <span className="display_setting_subtitle">
                                                            Action
                                                        </span>
                                                        <div className="display_select_drop_down">
                                                            <Select
                                                                options={
                                                                    options
                                                                }
                                                                onChange={
                                                                    handleSelectChange
                                                                }
                                                                value={gsAction}
                                                            />
                                                        </div>
                                                    </div>

                                                    {/* Display Condition */}
                                                    <div className="style__wrapper_div">
                                                        <span className="display_setting_subtitle">
                                                            Display Condition
                                                        </span>
                                                        <div className="display_select_drop_down">
                                                            <Select
                                                                options={
                                                                    conditions
                                                                }
                                                                onChange={
                                                                    handleConditionChange
                                                                }
                                                                value={
                                                                    gsDisplayCondition
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                </Card>
                                            </div>
                                        </Scrollable>
                                    ) : (
                                        ""
                                    )}

                                    {/* buy now Settings */}
                                    <div
                                        className="general_setting_title"
                                        onClick={() => {
                                            hanldeBuyNowSetting(buyNowSettings);
                                        }}
                                    >
                                        <Card sectioned>
                                            <span className="general_setting_icon">
                                                <Icon
                                                    source={CheckoutMajor}
                                                    color="base"
                                                />
                                            </span>
                                            <div className="setting_title">
                                                <span className="show_sticky_span">
                                                    Buy Now Button
                                                </span>
                                                <span>
                                                    {buyNowSettings === true ? (
                                                        <Icon
                                                            source={
                                                                ChevronDownMinor
                                                            }
                                                        />
                                                    ) : (
                                                        <Icon
                                                            source={
                                                                ChevronRightMinor
                                                            }
                                                        />
                                                    )}
                                                </span>
                                            </div>
                                        </Card>
                                    </div>

                                    {buyNowSettings === true ? (
                                        <Scrollable
                                            style={{ height: "500px" }}
                                            horizontal={false}
                                        >
                                            <div className="overall_general_content">
                                                {/* TEXT part */}
                                                <span className="display_setting_title">
                                                    TEXT{" "}
                                                </span>
                                                <Card sectioned>
                                                    {/* Edit Text */}
                                                    <div className="style__wrapper_div">
                                                        <span className="display_setting_subtitle">
                                                            Edit Text
                                                        </span>
                                                        <div className="buy_now__textfield">
                                                            <TextField
                                                                value={editText}
                                                                onChange={
                                                                    handleEditTextField
                                                                }
                                                                autoComplete="off"
                                                                maxLength={15}
                                                                placeholder="Example: BUY NOW"
                                                                showCharacterCount
                                                            />
                                                        </div>
                                                    </div>

                                                    {/* Sold out */}
                                                    {/* <div className="style__wrapper_div">
                                                        <span className="display_setting_subtitle">
                                                            Sold out
                                                        </span>
                                                        <div className="buy_now__textfield">
                                                            <TextField
                                                                value={soldOut}
                                                                onChange={
                                                                    handleSoldOutTextField
                                                                }
                                                                maxLength={15}
                                                                autoComplete="off"
                                                                placeholder="Example: Sold out"
                                                                showCharacterCount
                                                            />
                                                        </div>
                                                    </div> */}

                                                    {/* Unavailable */}
                                                    <div className="style__wrapper_div">
                                                        <span className="display_setting_subtitle">
                                                            Unavailable
                                                        </span>
                                                        <div className="buy_now__textfield">
                                                            <TextField
                                                                value={
                                                                    unavailable
                                                                }
                                                                onChange={
                                                                    handleUnavailableTextField
                                                                }
                                                                autoComplete="off"
                                                                maxLength={15}
                                                                placeholder="Example: Unavailable"
                                                                showCharacterCount
                                                            />
                                                        </div>
                                                    </div>
                                                </Card>

                                                {/* style part */}
                                                <span className="display_setting_title">
                                                    STYLE{" "}
                                                </span>
                                                <Card sectioned>
                                                    {/* Width */}
                                                    <div className="style__wrapper_div">
                                                        <span className="display_setting_subtitle">
                                                            Width
                                                        </span>
                                                        <div className="font_picker_popup">
                                                            <RangeSlider
                                                                label={`${btnWidthValue} px`}
                                                                value={
                                                                    btnWidthValue
                                                                }
                                                                min={0}
                                                                max={250}
                                                                onChange={
                                                                    handleWidthSliderChange
                                                                }
                                                                output
                                                            />
                                                        </div>
                                                    </div>

                                                    {/* Height */}
                                                    <div className="style__wrapper_div">
                                                        <span className="display_setting_subtitle">
                                                            Height
                                                        </span>
                                                        <div className="font_picker_popup">
                                                            <RangeSlider
                                                                label={`${btnheightValue} px`}
                                                                value={
                                                                    btnheightValue
                                                                }
                                                                min={0}
                                                                max={250}
                                                                onChange={
                                                                    handleBuyButtonHeightSliderChange
                                                                }
                                                                output
                                                            />
                                                        </div>
                                                    </div>

                                                    {/* Font-size */}
                                                    <div className="style__wrapper_div">
                                                        <span className="display_setting_subtitle">
                                                            Font-size
                                                        </span>
                                                        <div className="font_picker_popup">
                                                            <RangeSlider
                                                                label={`${btnFontsize} px`}
                                                                value={
                                                                    btnFontsize
                                                                }
                                                                min={8}
                                                                max={50}
                                                                onChange={
                                                                    handleFontSizeSliderChange
                                                                }
                                                                output
                                                            />
                                                        </div>
                                                    </div>

                                                    {/* Style */}
                                                    <div className="style__wrapper_div">
                                                        <span className="display_setting_subtitle">
                                                            Style
                                                        </span>
                                                        <div className="">
                                                            <Checkbox
                                                                label="Bold"
                                                                checked={
                                                                    btnBold
                                                                }
                                                                onChange={
                                                                    handleBoldButton
                                                                }
                                                            />
                                                            <br />
                                                            <Checkbox
                                                                label="Italic"
                                                                checked={
                                                                    btnItalic
                                                                }
                                                                onChange={
                                                                    handleItalicButton
                                                                }
                                                            />
                                                            <br />
                                                            <Checkbox
                                                                label="Underline"
                                                                checked={
                                                                    btnUnderline
                                                                }
                                                                onChange={
                                                                    handleUnderlineButton
                                                                }
                                                            />
                                                        </div>
                                                    </div>

                                                    {/* Text Color */}
                                                    <div className="style__wrapper_div">
                                                        <span className="display_setting_subtitle">
                                                            Text Color
                                                        </span>
                                                        <div>
                                                            <ColorPlate
                                                                defaultColor={
                                                                    btnTextColor
                                                                }
                                                                onChildResult={
                                                                    handlebtnTextColor
                                                                }
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
                                                                    btnBgColor
                                                                }
                                                                onChildResult={
                                                                    handlebtnBGColor
                                                                }
                                                            />
                                                        </div>
                                                    </div>

                                                    {/* Text Hover Color */}
                                                    <div className="style__wrapper_div">
                                                        <span className="display_setting_subtitle">
                                                            Text Hover Color
                                                        </span>
                                                        <div>
                                                            <ColorPlate
                                                                defaultColor={
                                                                    btnTexthoverColor
                                                                }
                                                                onChildResult={
                                                                    handletexthoverColor
                                                                }
                                                            />
                                                        </div>
                                                    </div>

                                                    {/* Background Hover Color */}
                                                    <div className="style__wrapper_div">
                                                        <span className="display_setting_subtitle">
                                                            Background Hover
                                                            Color
                                                        </span>
                                                        <div>
                                                            <ColorPlate
                                                                defaultColor={
                                                                    btnBgHoverColor
                                                                }
                                                                onChildResult={
                                                                    handlebgHoverColor
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                </Card>

                                                {/* border part */}
                                                <span className="display_setting_title">
                                                    BORDER{" "}
                                                </span>
                                                <Card sectioned>
                                                    {/* Border Thickness */}
                                                    <div className="style__wrapper_div">
                                                        <span className="display_setting_subtitle">
                                                            Border Thickness
                                                        </span>
                                                        <div className="font_picker_popup">
                                                            <RangeSlider
                                                                label={`${btnBorderThickness} px`}
                                                                value={
                                                                    btnBorderThickness
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

                                                    {/* Border Radius */}
                                                    <div className="style__wrapper_div">
                                                        <span className="display_setting_subtitle">
                                                            Border Radius
                                                        </span>
                                                        <div className="font_picker_popup">
                                                            <RangeSlider
                                                                label={`${btnBorderRadius} px`}
                                                                value={
                                                                    btnBorderRadius
                                                                }
                                                                min={0}
                                                                max={50}
                                                                onChange={
                                                                    handleRadiusSliderChange
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
                                                                    btnBorderColor
                                                                }
                                                                onChildResult={
                                                                    handleborderColor
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
                                                                    btnBorderHoverColor
                                                                }
                                                                onChildResult={
                                                                    handlebordeHoverColor
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                </Card>
                                            </div>
                                        </Scrollable>
                                    ) : (
                                        ""
                                    )}
                                </Layout.Section>

                                <Layout.Section>
                                    <div style={{ marginTop: "10px" }}>
                                        <Card sectioned>
                                            <div className="template___Card apply-font">
                                                Choose the sticky Add to Cart
                                                template
                                            </div>
                                            <div className="template_option">
                                                {TemplateData.map((item) => (
                                                    <div
                                                        className="template_option_sticky sticky_child"
                                                        key={item.key}
                                                    >
                                                        <img
                                                            src={item.image}
                                                            alt="Template"
                                                            height="150px"
                                                            width="250px"
                                                        />
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
                                                                name="template"
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
