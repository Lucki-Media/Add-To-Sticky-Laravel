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
    Badge,
    Banner,
} from "@shopify/polaris";
import "../css/index.css";
import { useState, useCallback, useEffect } from "react";
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
import { Box } from "@material-ui/core";
import Switch from "react-switch";
import isEqual from "lodash/isEqual";

export default function AddToCartSticky() {
    const shop_url = document.getElementById("shopOrigin").value;
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
    const [animationEnable, setAnimationEnable] = useState(true);
    const [defaultTemplate, setDefaultTemplate] = useState("1");
    /*GENERAL SETTINGS CONSTANTS*/
    const [position, setPosition] = useState("Top");
    const [checkMobile, setCheckMobile] = useState(false);
    const [checkDesktop, setCheckDesktop] = useState(false);
    const [gsBold, setGsBold] = useState(false);
    const [gsFontsize, setGsFontsize] = useState(16);
    const [gsPriceFontsize, setGsPriceFontsize] = useState(14);
    const [gsItalic, setGsItalic] = useState(false);
    const [gsUnderline, setGsUnderLine] = useState(false);
    const [gsFontFamily, setGsFontFamily] = useState("Roboto");
    const [gsTitleColor, setGsTitleColor] = useState("#000000");
    const [gsPriceColor, setGsPriceColor] = useState("#ff0000");
    const [gsBgColor, setGsBgColor] = useState("#0001ff");
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
    const [btnTextColor, setBtnTextColor] = useState("0, 1, 0, 1");
    const [btnBgColor, setBtnBgColor] = useState("0, 1, 234, 1");
    const [btnTexthoverColor, setBtnTexthoverColor] = useState("#009001");
    const [btnBgHoverColor, setBtnBgHoverColor] = useState("#000100");
    const [btnBorderColor, setBtnBorderColor] = useState("#00018f");
    const [btnBorderHoverColor, setBtnBorderHoverColor] =
        useState("rgba(1, 255, 0, 1)");
    const [transferData, SetTransferData] = useState([]);
    const [APIresponse, SetAPIresponse] = useState([]);
    const [isSaveButtonDisabled, setIsSaveButtonDisabled] = useState(true);
    const [originalEnable, setOriginalEnable] = useState(true);
    const [originalDefaultTemplate, setOriginalDefaultTemplate] = useState("1");

    const getAddToStickyCartData = async () => {
        try {
            const response = await fetch(
                "api/getAddToStickyCartData/" + shop_url
            );
            const data = await response.json();
            SetTransferData({
                general_settings: {
                    checkDesktop:
                        data.data.current_template.general_settings
                            .checkDesktop,
                    checkMobile:
                        data.data.current_template.general_settings.checkMobile,
                    gsAction:
                        data.data.current_template.general_settings.gsAction,
                    gsDisplayCondition:
                        data.data.current_template.general_settings
                            .gsDisplayCondition,
                },
                design_settings: {
                    gsFontFamily:
                        data.data.current_template.general_settings
                            .gsFontFamily,
                    animationEnable: data.data.animationEnable,
                    gsBgColor:
                        data.data.current_template.general_settings.gsBgColor,
                    containerHeight:
                        data.data.current_template.general_settings
                            .containerHeight,
                    gsOffsetValue:
                        data.data.current_template.general_settings
                            .gsOffsetValue,
                    position:
                        data.data.current_template.general_settings.position,
                    gsTitleColor:
                        data.data.current_template.general_settings
                            .gsTitleColor,
                    gsFontsize:
                        data.data.current_template.general_settings.gsFontsize,
                    gsBold: data.data.current_template.general_settings.gsBold,
                    gsItalic:
                        data.data.current_template.general_settings.gsItalic,
                    gsUnderline:
                        data.data.current_template.general_settings.gsUnderline,
                    gsPriceFontsize:
                        data.data.current_template.general_settings
                            .gsPriceFontsize,
                    gsPriceColor:
                        data.data.current_template.general_settings
                            .gsPriceColor,
                    editText:
                        data.data.current_template.buy_btn_settings.editText,
                    unavailable:
                        data.data.current_template.buy_btn_settings.unavailable,
                    btnWidthValue:
                        data.data.current_template.buy_btn_settings
                            .btnWidthValue,
                    btnheightValue:
                        data.data.current_template.buy_btn_settings
                            .btnheightValue,
                    btnFontsize:
                        data.data.current_template.buy_btn_settings.btnFontsize,
                    btnBorderThickness:
                        data.data.current_template.buy_btn_settings
                            .btnBorderThickness,
                    btnBorderRadius:
                        data.data.current_template.buy_btn_settings
                            .btnBorderRadius,
                    btnBold:
                        data.data.current_template.buy_btn_settings.btnBold,
                    btnItalic:
                        data.data.current_template.buy_btn_settings.btnItalic,
                    btnUnderline:
                        data.data.current_template.buy_btn_settings
                            .btnUnderline,
                    btnTextColor:
                        data.data.current_template.buy_btn_settings
                            .btnTextColor,
                    btnBgColor:
                        data.data.current_template.buy_btn_settings.btnBgColor,
                    btnTexthoverColor:
                        data.data.current_template.buy_btn_settings
                            .btnTexthoverColor,
                    btnBgHoverColor:
                        data.data.current_template.buy_btn_settings
                            .btnBgHoverColor,
                    btnBorderColor:
                        data.data.current_template.buy_btn_settings
                            .btnBorderColor,
                    btnBorderHoverColor:
                        data.data.current_template.buy_btn_settings
                            .btnBorderHoverColor,
                },
            });
            SetAPIresponse({
                general_settings: {
                    checkDesktop:
                        data.data.current_template.general_settings
                            .checkDesktop,
                    checkMobile:
                        data.data.current_template.general_settings.checkMobile,
                    gsAction:
                        data.data.current_template.general_settings.gsAction,
                    gsDisplayCondition:
                        data.data.current_template.general_settings
                            .gsDisplayCondition,
                },
                design_settings: {
                    gsFontFamily:
                        data.data.current_template.general_settings
                            .gsFontFamily,
                    animationEnable: data.data.animationEnable,
                    gsBgColor:
                        data.data.current_template.general_settings.gsBgColor,
                    containerHeight:
                        data.data.current_template.general_settings
                            .containerHeight,
                    gsOffsetValue:
                        data.data.current_template.general_settings
                            .gsOffsetValue,
                    position:
                        data.data.current_template.general_settings.position,
                    gsTitleColor:
                        data.data.current_template.general_settings
                            .gsTitleColor,
                    gsFontsize:
                        data.data.current_template.general_settings.gsFontsize,
                    gsBold: data.data.current_template.general_settings.gsBold,
                    gsItalic:
                        data.data.current_template.general_settings.gsItalic,
                    gsUnderline:
                        data.data.current_template.general_settings.gsUnderline,
                    gsPriceFontsize:
                        data.data.current_template.general_settings
                            .gsPriceFontsize,
                    gsPriceColor:
                        data.data.current_template.general_settings
                            .gsPriceColor,
                    editText:
                        data.data.current_template.buy_btn_settings.editText,
                    unavailable:
                        data.data.current_template.buy_btn_settings.unavailable,
                    btnWidthValue:
                        data.data.current_template.buy_btn_settings
                            .btnWidthValue,
                    btnheightValue:
                        data.data.current_template.buy_btn_settings
                            .btnheightValue,
                    btnFontsize:
                        data.data.current_template.buy_btn_settings.btnFontsize,
                    btnBorderThickness:
                        data.data.current_template.buy_btn_settings
                            .btnBorderThickness,
                    btnBorderRadius:
                        data.data.current_template.buy_btn_settings
                            .btnBorderRadius,
                    btnBold:
                        data.data.current_template.buy_btn_settings.btnBold,
                    btnItalic:
                        data.data.current_template.buy_btn_settings.btnItalic,
                    btnUnderline:
                        data.data.current_template.buy_btn_settings
                            .btnUnderline,
                    btnTextColor:
                        data.data.current_template.buy_btn_settings
                            .btnTextColor,
                    btnBgColor:
                        data.data.current_template.buy_btn_settings.btnBgColor,
                    btnTexthoverColor:
                        data.data.current_template.buy_btn_settings
                            .btnTexthoverColor,
                    btnBgHoverColor:
                        data.data.current_template.buy_btn_settings
                            .btnBgHoverColor,
                    btnBorderColor:
                        data.data.current_template.buy_btn_settings
                            .btnBorderColor,
                    btnBorderHoverColor:
                        data.data.current_template.buy_btn_settings
                            .btnBorderHoverColor,
                },
            });
            // console.log(data.data);
            setData(data.data);
            setEnable(data.data.enable);
            setAnimationEnable(data.data.animationEnable);
            // setDefaultTemplate(data.data.defaultTemplate);
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
            setGsPriceFontsize(
                data.data.current_template.general_settings.gsPriceFontsize
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
    // USE EFFECT
    useEffect(() => {
        getAddToStickyCartData();
    }, []);
    const handleTransferData = (data) => {
        setSaveLoader(false);
        console.log("data");
        console.log(data);
        SetTransferData({
            general_settings: {
                checkDesktop: data.general_settings.checkDesktop,
                checkMobile: data.general_settings.checkMobile,
                gsAction: data.general_settings.gsAction,
                gsDisplayCondition: data.general_settings.gsDisplayCondition,
            },
            design_settings: {
                gsFontFamily: data.design_settings.gsFontFamily,
                animationEnable: data.design_settings.animationEnable,
                gsBgColor: data.design_settings.gsBgColor,
                containerHeight: data.design_settings.containerHeight,
                gsOffsetValue: data.design_settings.gsOffsetValue,
                position: data.design_settings.position,
                gsTitleColor: data.design_settings.gsTitleColor,
                gsFontsize: data.design_settings.gsFontsize,
                gsBold: data.design_settings.gsBold,
                gsItalic: data.design_settings.gsItalic,
                gsUnderline: data.design_settings.gsUnderline,
                gsPriceFontsize: data.design_settings.gsPriceFontsize,
                gsPriceColor: data.design_settings.gsPriceColor,
                editText: data.design_settings.editText,
                unavailable: data.design_settings.unavailable,
                btnWidthValue: data.design_settings.btnWidthValue,
                btnheightValue: data.design_settings.btnheightValue,
                btnFontsize: data.design_settings.btnFontsize,
                btnBorderThickness: data.design_settings.btnBorderThickness,
                btnBorderRadius: data.design_settings.btnBorderRadius,
                btnBold: data.design_settings.btnBold,
                btnItalic: data.design_settings.btnItalic,
                btnUnderline: data.design_settings.btnUnderline,
                btnTextColor: data.design_settings.btnTextColor,
                btnBgColor: data.design_settings.btnBgColor,
                btnTexthoverColor: data.design_settings.btnTexthoverColor,
                btnBgHoverColor: data.design_settings.btnBgHoverColor,
                btnBorderColor: data.design_settings.btnBorderColor,
                btnBorderHoverColor: data.design_settings.btnBorderHoverColor,
            },
        });
        /*GENERAL SETTINGS VALUES*/
        setCheckDesktop(data.general_settings.checkDesktop);
        setCheckMobile(data.general_settings.checkMobile);
        setGsAction(data.general_settings.gsAction);
        setGsDisplayCondition(data.general_settings.gsDisplayCondition);
        //DESIGN SETTINGS
        setPosition(data.design_settings.position);
        setAnimationEnable(data.design_settings.animationEnable);
        setGsFontsize(data.design_settings.gsFontsize);
        setGsPriceFontsize(data.design_settings.gsPriceFontsize);
        setGsFontFamily(data.design_settings.gsFontFamily);
        setGsBold(data.design_settings.gsBold);
        setGsItalic(data.design_settings.gsItalic);
        setGsUnderLine(data.design_settings.gsUnderline);
        setGsTitleColor(data.design_settings.gsTitleColor);
        setContainerHeight(data.design_settings.containerHeight);
        setGsPriceColor(data.design_settings.gsPriceColor);
        setGsBgColor(data.design_settings.gsBgColor);
        setGsOffsetValue(data.design_settings.gsOffsetValue);
        setEditText(data.design_settings.editText);
        setUnavailable(data.design_settings.unavailable);
        setBtnWidthValue(data.design_settings.btnWidthValue);
        setBtnHeightValue(data.design_settings.btnheightValue);
        setBtnFontsize(data.design_settings.btnFontsize);
        setBtnBorderThickness(data.design_settings.btnBorderThickness);
        setBtnBorderRadius(data.design_settings.btnBorderRadius);
        setBtnBold(data.design_settings.btnBold);
        setBtnItalic(data.design_settings.btnItalic);
        setBtnUnderline(data.design_settings.btnUnderline);
        setBtnTextColor(data.design_settings.btnTextColor);
        setBtnBgColor(data.design_settings.btnBgColor);
        setBtnTexthoverColor(data.design_settings.btnTexthoverColor);
        setBtnBgHoverColor(data.design_settings.btnBgHoverColor);
        setBtnBorderColor(data.design_settings.btnBorderColor);
        setBtnBorderHoverColor(data.design_settings.btnBorderHoverColor);
        setSaveLoader(true);
    };
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
                SetTransferData(response.data);
                SetAPIresponse(response.data);
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
    const handleSwitchChange = (checked) => {
        setEnable(checked);
    };
    const options = [
        { label: "Style 1", value: "1" },
        { label: "Style 2", value: "2" },
        { label: "Style 3", value: "3" },
        { label: "Style 4", value: "4" },
        { label: "Style 5", value: "5" },
        { label: "Style 6", value: "6" },
        { label: "Style 7", value: "7" },
        { label: "Style 8", value: "8" },
    ];
    const handleSelectTemplateChange = useCallback(
        (value) => {
            var currentData;
            switch (value) {
                case "1":
                    currentData = data.template_1;
                    break;
                case "2":
                    currentData = data.template_2;
                    break;
                case "3":
                    currentData = data.template_3;
                    break;
                case "4":
                    currentData = data.template_4;
                    break;
                case "5":
                    currentData = data.template_5;
                    break;
                case "6":
                    currentData = data.template_6;
                    break;
                case "7":
                    currentData = data.template_7;
                    break;
                case "8":
                    currentData = data.template_8;
                    break;

                default:
                    currentData = data.current_template;
                    break;
            }
            console.log("currentData");
            console.log(currentData);
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
            setGsDisplayCondition(
                currentData.general_settings.gsDisplayCondition
            );
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
            setBtnTexthoverColor(
                currentData.buy_btn_settings.btnTexthoverColor
            );
            setBtnBgHoverColor(currentData.buy_btn_settings.btnBgHoverColor);
            setBtnBorderThickness(
                currentData.buy_btn_settings.btnBorderThickness
            );
            setBtnBorderRadius(currentData.buy_btn_settings.btnBorderRadius);
            setBtnBorderColor(currentData.buy_btn_settings.btnBorderColor);
            setBtnBorderHoverColor(
                currentData.buy_btn_settings.btnBorderHoverColor
            );
        },
        [data]
    );
    // TO ENABLE OR DISABLE SAVE BUTTON
    useEffect(() => {
        setIsSaveButtonDisabled(isEqual(transferData, APIresponse));
        if (
            enable !== originalEnable ||
            defaultTemplate !== originalDefaultTemplate
        ) {
            setIsSaveButtonDisabled(false);
        }
    }, [
        transferData,
        APIresponse,
        enable,
        defaultTemplate,
        originalEnable,
        originalDefaultTemplate,
    ]);

    // COLOR CHANGE HANDLES END
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
                                            Sticky Add To Cart
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
                        <div
                            style={{
                                visibility: isSaveButtonDisabled
                                    ? "hidden"
                                    : "visible",
                                opacity: isSaveButtonDisabled ? 0 : 1,
                                height: isSaveButtonDisabled ? 0 : 64,
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
                        </div>

                        <Page fullWidth>
                            <div className="lm_sticky_layout">
                                {" "}
                                <Layout>
                                    <Layout.Section oneThird>
                                        <Card sectioned>
                                            <div className="setting_title">
                                                <span className="show_sticky_span">
                                                    Sticky Add To Cart is{" "}
                                                    {enable ? (
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
                                                    onChange={
                                                        handleSwitchChange
                                                    }
                                                    checked={enable}
                                                    uncheckedIcon={null}
                                                    checkedIcon={null}
                                                />
                                            </div>
                                        </Card>
                                        <Card sectioned>
                                            <Select
                                                label="Select Template"
                                                options={options}
                                                onChange={(value) => {
                                                    setDefaultTemplate(value);
                                                    handleSelectTemplateChange(
                                                        value
                                                    );
                                                }}
                                                value={defaultTemplate}
                                            />
                                        </Card>

                                        <SideBar
                                            dataCallback={handleTransferData}
                                            position={position}
                                            checkMobile={checkMobile}
                                            checkDesktop={checkDesktop}
                                            gsBold={gsBold}
                                            gsFontsize={gsFontsize}
                                            gsPriceFontsize={gsPriceFontsize}
                                            gsItalic={gsItalic}
                                            gsUnderline={gsUnderline}
                                            gsFontFamily={gsFontFamily}
                                            gsTitleColor={gsTitleColor}
                                            gsPriceColor={gsPriceColor}
                                            gsBgColor={gsBgColor}
                                            gsOffsetValue={gsOffsetValue}
                                            gsAction={gsAction}
                                            gsDisplayCondition={
                                                gsDisplayCondition
                                            }
                                            containerHeight={containerHeight}
                                            enable={enable}
                                            animationEnable={animationEnable}
                                            buyNowSettings={buyNowSettings}
                                            editText={editText}
                                            // soldOut={soldOut}
                                            unavailable={unavailable}
                                            btnWidthValue={btnWidthValue}
                                            btnheightValue={btnheightValue}
                                            btnFontsize={btnFontsize}
                                            btnBorderThickness={
                                                btnBorderThickness
                                            }
                                            btnBorderRadius={btnBorderRadius}
                                            btnBold={btnBold}
                                            btnItalic={btnItalic}
                                            btnUnderline={btnUnderline}
                                            btnTextColor={btnTextColor}
                                            btnBgColor={btnBgColor}
                                            btnTexthoverColor={
                                                btnTexthoverColor
                                            }
                                            btnBgHoverColor={btnBgHoverColor}
                                            btnBorderColor={btnBorderColor}
                                            btnBorderHoverColor={
                                                btnBorderHoverColor
                                            }
                                        />
                                    </Layout.Section>
                                    <Layout.Section>
                                        <Card>
                                            <div className="lm_sticky_box">
                                                <Box shadow="300">
                                                    <img
                                                        alt=""
                                                        width="100%"
                                                        height="auto"
                                                        src={`images/ProductDetail.png`}
                                                    />
                                                </Box>
                                                <div
                                                    style={{
                                                        height:
                                                            position !== "Top"
                                                                ? 0
                                                                : containerHeight,
                                                        marginTop:
                                                            position !== "Top"
                                                                ? 50
                                                                : 20,
                                                    }}
                                                >
                                                    {defaultTemplate === "1" ? (
                                                        <CartTemplate1
                                                            template_data={
                                                                data.template_1
                                                            }
                                                            enable={enable}
                                                            animationEnable={
                                                                animationEnable
                                                            }
                                                            defaultTemplate={
                                                                defaultTemplate
                                                            }
                                                            position={position}
                                                            checkMobile={
                                                                checkMobile
                                                            }
                                                            checkDesktop={
                                                                checkDesktop
                                                            }
                                                            gsBold={gsBold}
                                                            gsFontsize={
                                                                gsFontsize
                                                            }
                                                            gsPriceFontsize={
                                                                gsPriceFontsize
                                                            }
                                                            gsItalic={gsItalic}
                                                            gsUnderline={
                                                                gsUnderline
                                                            }
                                                            gsFontFamily={
                                                                gsFontFamily
                                                            }
                                                            gsTitleColor={
                                                                gsTitleColor
                                                            }
                                                            gsPriceColor={
                                                                gsPriceColor
                                                            }
                                                            gsBgColor={
                                                                gsBgColor
                                                            }
                                                            gsOffsetValue={
                                                                gsOffsetValue
                                                            }
                                                            gsAction={gsAction}
                                                            gsDisplayCondition={
                                                                gsDisplayCondition
                                                            }
                                                            buyNowSettings={
                                                                buyNowSettings
                                                            }
                                                            editText={editText}
                                                            // soldOut={soldOut}
                                                            unavailable={
                                                                unavailable
                                                            }
                                                            btnWidthValue={
                                                                btnWidthValue
                                                            }
                                                            btnheightValue={
                                                                btnheightValue
                                                            }
                                                            btnFontsize={
                                                                btnFontsize
                                                            }
                                                            containerHeight={
                                                                containerHeight
                                                            }
                                                            btnBorderThickness={
                                                                btnBorderThickness
                                                            }
                                                            btnBorderRadius={
                                                                btnBorderRadius
                                                            }
                                                            btnBold={btnBold}
                                                            btnItalic={
                                                                btnItalic
                                                            }
                                                            btnUnderline={
                                                                btnUnderline
                                                            }
                                                            btnTextColor={
                                                                btnTextColor
                                                            }
                                                            btnBgColor={
                                                                btnBgColor
                                                            }
                                                            btnTexthoverColor={
                                                                btnTexthoverColor
                                                            }
                                                            btnBgHoverColor={
                                                                btnBgHoverColor
                                                            }
                                                            btnBorderColor={
                                                                btnBorderColor
                                                            }
                                                            btnBorderHoverColor={
                                                                btnBorderHoverColor
                                                            }
                                                        />
                                                    ) : (
                                                        ""
                                                    )}
                                                    {defaultTemplate === "2" ? (
                                                        <CartTemplate2
                                                            template_data={
                                                                data.template_2
                                                            }
                                                            enable={enable}
                                                            animationEnable={
                                                                animationEnable
                                                            }
                                                            defaultTemplate={
                                                                defaultTemplate
                                                            }
                                                            position={position}
                                                            checkMobile={
                                                                checkMobile
                                                            }
                                                            checkDesktop={
                                                                checkDesktop
                                                            }
                                                            gsBold={gsBold}
                                                            gsFontsize={
                                                                gsFontsize
                                                            }
                                                            gsPriceFontsize={
                                                                gsPriceFontsize
                                                            }
                                                            gsItalic={gsItalic}
                                                            gsUnderline={
                                                                gsUnderline
                                                            }
                                                            gsFontFamily={
                                                                gsFontFamily
                                                            }
                                                            gsTitleColor={
                                                                gsTitleColor
                                                            }
                                                            gsPriceColor={
                                                                gsPriceColor
                                                            }
                                                            gsBgColor={
                                                                gsBgColor
                                                            }
                                                            gsOffsetValue={
                                                                gsOffsetValue
                                                            }
                                                            gsAction={gsAction}
                                                            gsDisplayCondition={
                                                                gsDisplayCondition
                                                            }
                                                            buyNowSettings={
                                                                buyNowSettings
                                                            }
                                                            editText={editText}
                                                            // soldOut={soldOut}
                                                            unavailable={
                                                                unavailable
                                                            }
                                                            btnWidthValue={
                                                                btnWidthValue
                                                            }
                                                            btnheightValue={
                                                                btnheightValue
                                                            }
                                                            btnFontsize={
                                                                btnFontsize
                                                            }
                                                            containerHeight={
                                                                containerHeight
                                                            }
                                                            btnBorderThickness={
                                                                btnBorderThickness
                                                            }
                                                            btnBorderRadius={
                                                                btnBorderRadius
                                                            }
                                                            btnBold={btnBold}
                                                            btnItalic={
                                                                btnItalic
                                                            }
                                                            btnUnderline={
                                                                btnUnderline
                                                            }
                                                            btnTextColor={
                                                                btnTextColor
                                                            }
                                                            btnBgColor={
                                                                btnBgColor
                                                            }
                                                            btnTexthoverColor={
                                                                btnTexthoverColor
                                                            }
                                                            btnBgHoverColor={
                                                                btnBgHoverColor
                                                            }
                                                            btnBorderColor={
                                                                btnBorderColor
                                                            }
                                                            btnBorderHoverColor={
                                                                btnBorderHoverColor
                                                            }
                                                        />
                                                    ) : (
                                                        ""
                                                    )}
                                                    {defaultTemplate === "3" ? (
                                                        <CartTemplate3
                                                            template_data={
                                                                data.template_3
                                                            }
                                                            enable={enable}
                                                            animationEnable={
                                                                animationEnable
                                                            }
                                                            defaultTemplate={
                                                                defaultTemplate
                                                            }
                                                            position={position}
                                                            checkMobile={
                                                                checkMobile
                                                            }
                                                            checkDesktop={
                                                                checkDesktop
                                                            }
                                                            gsBold={gsBold}
                                                            gsFontsize={
                                                                gsFontsize
                                                            }
                                                            gsPriceFontsize={
                                                                gsPriceFontsize
                                                            }
                                                            gsItalic={gsItalic}
                                                            gsUnderline={
                                                                gsUnderline
                                                            }
                                                            gsFontFamily={
                                                                gsFontFamily
                                                            }
                                                            gsTitleColor={
                                                                gsTitleColor
                                                            }
                                                            gsPriceColor={
                                                                gsPriceColor
                                                            }
                                                            gsBgColor={
                                                                gsBgColor
                                                            }
                                                            gsOffsetValue={
                                                                gsOffsetValue
                                                            }
                                                            gsAction={gsAction}
                                                            gsDisplayCondition={
                                                                gsDisplayCondition
                                                            }
                                                            buyNowSettings={
                                                                buyNowSettings
                                                            }
                                                            editText={editText}
                                                            // soldOut={soldOut}
                                                            unavailable={
                                                                unavailable
                                                            }
                                                            btnWidthValue={
                                                                btnWidthValue
                                                            }
                                                            btnheightValue={
                                                                btnheightValue
                                                            }
                                                            btnFontsize={
                                                                btnFontsize
                                                            }
                                                            containerHeight={
                                                                containerHeight
                                                            }
                                                            btnBorderThickness={
                                                                btnBorderThickness
                                                            }
                                                            btnBorderRadius={
                                                                btnBorderRadius
                                                            }
                                                            btnBold={btnBold}
                                                            btnItalic={
                                                                btnItalic
                                                            }
                                                            btnUnderline={
                                                                btnUnderline
                                                            }
                                                            btnTextColor={
                                                                btnTextColor
                                                            }
                                                            btnBgColor={
                                                                btnBgColor
                                                            }
                                                            btnTexthoverColor={
                                                                btnTexthoverColor
                                                            }
                                                            btnBgHoverColor={
                                                                btnBgHoverColor
                                                            }
                                                            btnBorderColor={
                                                                btnBorderColor
                                                            }
                                                            btnBorderHoverColor={
                                                                btnBorderHoverColor
                                                            }
                                                        />
                                                    ) : (
                                                        ""
                                                    )}
                                                    {defaultTemplate === "4" ? (
                                                        <CartTemplate4
                                                            template_data={
                                                                data.template_4
                                                            }
                                                            enable={enable}
                                                            animationEnable={
                                                                animationEnable
                                                            }
                                                            defaultTemplate={
                                                                defaultTemplate
                                                            }
                                                            position={position}
                                                            checkMobile={
                                                                checkMobile
                                                            }
                                                            checkDesktop={
                                                                checkDesktop
                                                            }
                                                            gsBold={gsBold}
                                                            gsFontsize={
                                                                gsFontsize
                                                            }
                                                            gsPriceFontsize={
                                                                gsPriceFontsize
                                                            }
                                                            gsItalic={gsItalic}
                                                            gsUnderline={
                                                                gsUnderline
                                                            }
                                                            gsFontFamily={
                                                                gsFontFamily
                                                            }
                                                            gsTitleColor={
                                                                gsTitleColor
                                                            }
                                                            gsPriceColor={
                                                                gsPriceColor
                                                            }
                                                            gsBgColor={
                                                                gsBgColor
                                                            }
                                                            gsOffsetValue={
                                                                gsOffsetValue
                                                            }
                                                            gsAction={gsAction}
                                                            gsDisplayCondition={
                                                                gsDisplayCondition
                                                            }
                                                            buyNowSettings={
                                                                buyNowSettings
                                                            }
                                                            editText={editText}
                                                            // soldOut={soldOut}
                                                            unavailable={
                                                                unavailable
                                                            }
                                                            btnWidthValue={
                                                                btnWidthValue
                                                            }
                                                            btnheightValue={
                                                                btnheightValue
                                                            }
                                                            btnFontsize={
                                                                btnFontsize
                                                            }
                                                            containerHeight={
                                                                containerHeight
                                                            }
                                                            btnBorderThickness={
                                                                btnBorderThickness
                                                            }
                                                            btnBorderRadius={
                                                                btnBorderRadius
                                                            }
                                                            btnBold={btnBold}
                                                            btnItalic={
                                                                btnItalic
                                                            }
                                                            btnUnderline={
                                                                btnUnderline
                                                            }
                                                            btnTextColor={
                                                                btnTextColor
                                                            }
                                                            btnBgColor={
                                                                btnBgColor
                                                            }
                                                            btnTexthoverColor={
                                                                btnTexthoverColor
                                                            }
                                                            btnBgHoverColor={
                                                                btnBgHoverColor
                                                            }
                                                            btnBorderColor={
                                                                btnBorderColor
                                                            }
                                                            btnBorderHoverColor={
                                                                btnBorderHoverColor
                                                            }
                                                        />
                                                    ) : (
                                                        ""
                                                    )}
                                                    {defaultTemplate === "5" ? (
                                                        <CartTemplate5
                                                            template_data={
                                                                data.template_5
                                                            }
                                                            enable={enable}
                                                            animationEnable={
                                                                animationEnable
                                                            }
                                                            defaultTemplate={
                                                                defaultTemplate
                                                            }
                                                            position={position}
                                                            checkMobile={
                                                                checkMobile
                                                            }
                                                            checkDesktop={
                                                                checkDesktop
                                                            }
                                                            gsBold={gsBold}
                                                            gsFontsize={
                                                                gsFontsize
                                                            }
                                                            gsPriceFontsize={
                                                                gsPriceFontsize
                                                            }
                                                            gsItalic={gsItalic}
                                                            gsUnderline={
                                                                gsUnderline
                                                            }
                                                            gsFontFamily={
                                                                gsFontFamily
                                                            }
                                                            gsTitleColor={
                                                                gsTitleColor
                                                            }
                                                            gsPriceColor={
                                                                gsPriceColor
                                                            }
                                                            gsBgColor={
                                                                gsBgColor
                                                            }
                                                            gsOffsetValue={
                                                                gsOffsetValue
                                                            }
                                                            gsAction={gsAction}
                                                            gsDisplayCondition={
                                                                gsDisplayCondition
                                                            }
                                                            buyNowSettings={
                                                                buyNowSettings
                                                            }
                                                            editText={editText}
                                                            // soldOut={soldOut}
                                                            unavailable={
                                                                unavailable
                                                            }
                                                            btnWidthValue={
                                                                btnWidthValue
                                                            }
                                                            btnheightValue={
                                                                btnheightValue
                                                            }
                                                            btnFontsize={
                                                                btnFontsize
                                                            }
                                                            containerHeight={
                                                                containerHeight
                                                            }
                                                            btnBorderThickness={
                                                                btnBorderThickness
                                                            }
                                                            btnBorderRadius={
                                                                btnBorderRadius
                                                            }
                                                            btnBold={btnBold}
                                                            btnItalic={
                                                                btnItalic
                                                            }
                                                            btnUnderline={
                                                                btnUnderline
                                                            }
                                                            btnTextColor={
                                                                btnTextColor
                                                            }
                                                            btnBgColor={
                                                                btnBgColor
                                                            }
                                                            btnTexthoverColor={
                                                                btnTexthoverColor
                                                            }
                                                            btnBgHoverColor={
                                                                btnBgHoverColor
                                                            }
                                                            btnBorderColor={
                                                                btnBorderColor
                                                            }
                                                            btnBorderHoverColor={
                                                                btnBorderHoverColor
                                                            }
                                                        />
                                                    ) : (
                                                        ""
                                                    )}
                                                    {defaultTemplate === "6" ? (
                                                        <CartTemplate6
                                                            template_data={
                                                                data.template_6
                                                            }
                                                            enable={enable}
                                                            animationEnable={
                                                                animationEnable
                                                            }
                                                            defaultTemplate={
                                                                defaultTemplate
                                                            }
                                                            position={position}
                                                            checkMobile={
                                                                checkMobile
                                                            }
                                                            checkDesktop={
                                                                checkDesktop
                                                            }
                                                            gsBold={gsBold}
                                                            gsFontsize={
                                                                gsFontsize
                                                            }
                                                            gsPriceFontsize={
                                                                gsPriceFontsize
                                                            }
                                                            gsItalic={gsItalic}
                                                            gsUnderline={
                                                                gsUnderline
                                                            }
                                                            gsFontFamily={
                                                                gsFontFamily
                                                            }
                                                            gsTitleColor={
                                                                gsTitleColor
                                                            }
                                                            gsPriceColor={
                                                                gsPriceColor
                                                            }
                                                            gsBgColor={
                                                                gsBgColor
                                                            }
                                                            gsOffsetValue={
                                                                gsOffsetValue
                                                            }
                                                            gsAction={gsAction}
                                                            gsDisplayCondition={
                                                                gsDisplayCondition
                                                            }
                                                            buyNowSettings={
                                                                buyNowSettings
                                                            }
                                                            editText={editText}
                                                            // soldOut={soldOut}
                                                            unavailable={
                                                                unavailable
                                                            }
                                                            btnWidthValue={
                                                                btnWidthValue
                                                            }
                                                            btnheightValue={
                                                                btnheightValue
                                                            }
                                                            btnFontsize={
                                                                btnFontsize
                                                            }
                                                            containerHeight={
                                                                containerHeight
                                                            }
                                                            btnBorderThickness={
                                                                btnBorderThickness
                                                            }
                                                            btnBorderRadius={
                                                                btnBorderRadius
                                                            }
                                                            btnBold={btnBold}
                                                            btnItalic={
                                                                btnItalic
                                                            }
                                                            btnUnderline={
                                                                btnUnderline
                                                            }
                                                            btnTextColor={
                                                                btnTextColor
                                                            }
                                                            btnBgColor={
                                                                btnBgColor
                                                            }
                                                            btnTexthoverColor={
                                                                btnTexthoverColor
                                                            }
                                                            btnBgHoverColor={
                                                                btnBgHoverColor
                                                            }
                                                            btnBorderColor={
                                                                btnBorderColor
                                                            }
                                                            btnBorderHoverColor={
                                                                btnBorderHoverColor
                                                            }
                                                        />
                                                    ) : (
                                                        ""
                                                    )}
                                                    {defaultTemplate === "7" ? (
                                                        <CartTemplate7
                                                            template_data={
                                                                data.template_7
                                                            }
                                                            enable={enable}
                                                            animationEnable={
                                                                animationEnable
                                                            }
                                                            defaultTemplate={
                                                                defaultTemplate
                                                            }
                                                            position={position}
                                                            checkMobile={
                                                                checkMobile
                                                            }
                                                            checkDesktop={
                                                                checkDesktop
                                                            }
                                                            gsBold={gsBold}
                                                            gsFontsize={
                                                                gsFontsize
                                                            }
                                                            gsPriceFontsize={
                                                                gsPriceFontsize
                                                            }
                                                            gsItalic={gsItalic}
                                                            gsUnderline={
                                                                gsUnderline
                                                            }
                                                            gsFontFamily={
                                                                gsFontFamily
                                                            }
                                                            gsTitleColor={
                                                                gsTitleColor
                                                            }
                                                            gsPriceColor={
                                                                gsPriceColor
                                                            }
                                                            gsBgColor={
                                                                gsBgColor
                                                            }
                                                            gsOffsetValue={
                                                                gsOffsetValue
                                                            }
                                                            gsAction={gsAction}
                                                            gsDisplayCondition={
                                                                gsDisplayCondition
                                                            }
                                                            buyNowSettings={
                                                                buyNowSettings
                                                            }
                                                            editText={editText}
                                                            // soldOut={soldOut}
                                                            unavailable={
                                                                unavailable
                                                            }
                                                            btnWidthValue={
                                                                btnWidthValue
                                                            }
                                                            btnheightValue={
                                                                btnheightValue
                                                            }
                                                            btnFontsize={
                                                                btnFontsize
                                                            }
                                                            containerHeight={
                                                                containerHeight
                                                            }
                                                            btnBorderThickness={
                                                                btnBorderThickness
                                                            }
                                                            btnBorderRadius={
                                                                btnBorderRadius
                                                            }
                                                            btnBold={btnBold}
                                                            btnItalic={
                                                                btnItalic
                                                            }
                                                            btnUnderline={
                                                                btnUnderline
                                                            }
                                                            btnTextColor={
                                                                btnTextColor
                                                            }
                                                            btnBgColor={
                                                                btnBgColor
                                                            }
                                                            btnTexthoverColor={
                                                                btnTexthoverColor
                                                            }
                                                            btnBgHoverColor={
                                                                btnBgHoverColor
                                                            }
                                                            btnBorderColor={
                                                                btnBorderColor
                                                            }
                                                            btnBorderHoverColor={
                                                                btnBorderHoverColor
                                                            }
                                                        />
                                                    ) : (
                                                        ""
                                                    )}
                                                    {defaultTemplate === "8" ? (
                                                        <CartTemplate8
                                                            template_data={
                                                                data.template_8
                                                            }
                                                            enable={enable}
                                                            animationEnable={
                                                                animationEnable
                                                            }
                                                            defaultTemplate={
                                                                defaultTemplate
                                                            }
                                                            position={position}
                                                            checkMobile={
                                                                checkMobile
                                                            }
                                                            checkDesktop={
                                                                checkDesktop
                                                            }
                                                            gsBold={gsBold}
                                                            gsFontsize={
                                                                gsFontsize
                                                            }
                                                            gsPriceFontsize={
                                                                gsPriceFontsize
                                                            }
                                                            gsItalic={gsItalic}
                                                            gsUnderline={
                                                                gsUnderline
                                                            }
                                                            gsFontFamily={
                                                                gsFontFamily
                                                            }
                                                            gsTitleColor={
                                                                gsTitleColor
                                                            }
                                                            gsPriceColor={
                                                                gsPriceColor
                                                            }
                                                            gsBgColor={
                                                                gsBgColor
                                                            }
                                                            gsOffsetValue={
                                                                gsOffsetValue
                                                            }
                                                            gsAction={gsAction}
                                                            gsDisplayCondition={
                                                                gsDisplayCondition
                                                            }
                                                            buyNowSettings={
                                                                buyNowSettings
                                                            }
                                                            editText={editText}
                                                            // soldOut={soldOut}
                                                            unavailable={
                                                                unavailable
                                                            }
                                                            btnWidthValue={
                                                                btnWidthValue
                                                            }
                                                            btnheightValue={
                                                                btnheightValue
                                                            }
                                                            btnFontsize={
                                                                btnFontsize
                                                            }
                                                            containerHeight={
                                                                containerHeight
                                                            }
                                                            btnBorderThickness={
                                                                btnBorderThickness
                                                            }
                                                            btnBorderRadius={
                                                                btnBorderRadius
                                                            }
                                                            btnBold={btnBold}
                                                            btnItalic={
                                                                btnItalic
                                                            }
                                                            btnUnderline={
                                                                btnUnderline
                                                            }
                                                            btnTextColor={
                                                                btnTextColor
                                                            }
                                                            btnBgColor={
                                                                btnBgColor
                                                            }
                                                            btnTexthoverColor={
                                                                btnTexthoverColor
                                                            }
                                                            btnBgHoverColor={
                                                                btnBgHoverColor
                                                            }
                                                            btnBorderColor={
                                                                btnBorderColor
                                                            }
                                                            btnBorderHoverColor={
                                                                btnBorderHoverColor
                                                            }
                                                        />
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
