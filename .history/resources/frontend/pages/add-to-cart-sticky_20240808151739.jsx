import {
    Badge,
    BlockStack,
    Button,
    ButtonGroup,
    Card,
    Frame,
    FullscreenBar,
    Layout,
    Loading,
    Page,
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
import isEqual from "lodash/isEqual";
import CartTemplate1 from "../Templates/CartTemplate.jsx";
import CartTemplate2 from "../Templates/CartTemplate2.jsx";
import CartTemplate3 from "../Templates/CartTemplate3.jsx";
import CartTemplate4 from "../Templates/CartTemplate4.jsx";
import CartTemplate5 from "../Templates/CartTemplate5.jsx";
import CartTemplate6 from "../Templates/CartTemplate6.jsx";
import CartTemplate7 from "../Templates/CartTemplate7.jsx";
import CartTemplate8 from "../Templates/CartTemplate8.jsx";
import proimage from "../assets/productimage.png";
import axios from "axios";
import Switch from "react-switch";
import { SideBar } from "../components/SideBar";
import "../css/index.css";

export default function AddToCartSticky() {
    // Getting Shop Domain
    const shop_url = document.getElementById("shopOrigin").value;

    // loading states
    const [showTable, setShowTable] = useState(false);
    const [saveLoader, setSaveLoader] = useState(false);

    const [data, setData] = useState([]);
    const [enable, setEnable] = useState(true);
    const [homePageProduct, setHomePageProduct] = useState();
    const [animationEnable, setAnimationEnable] = useState(true);
    const [defaultTemplate, setDefaultTemplate] = useState("2");
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
    const [gsBgColor, setGsBgColor] = useState("#ffffff");
    const [gsOffsetValue, setGsOffsetValue] = useState(0);
    const [gsAction, setGsAction] = useState("1");
    const [gsDisplayCondition, setGsDisplayCondition] = useState("1");
    const [gsNotificationBarText, setGsNotificationBarText] = useState("");
    const [gsNotificationBarItalic, setGsNotificationBarItalic] =
        useState(false);
    const [gsNotificationBarTitleColor, setGsNotificationBarTitleColor] =
        useState("#ffffff");
    const [gsNotificationBarBgColor, setGsNotificationBarBgColor] =
        useState("#000000");
    const [gsNotificationBarFontsize, setGsNotificationBarFontsize] =
        useState(12);
    const [gsNotificationBarHeight, setGsNotificationBarHeight] = useState(35);
    const [containerHeight, setContainerHeight] = useState(70);
    /*BUY NOW CONSTANTS*/
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
    const [originalDefaultTemplate, setOriginalDefaultTemplate] = useState("2");
    const [originalHomePageProduct, setOriginalHomePageProduct] = useState();

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

    // SAVE BUTTON LOGIC
    useEffect(() => {
        setIsSaveButtonDisabled(isEqual(transferData, APIresponse));
        if (
            enable !== originalEnable ||
            defaultTemplate !== originalDefaultTemplate ||
            homePageProduct !== originalHomePageProduct
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
        originalHomePageProduct,
    ]);

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
                    containerHeight: parseInt(
                        data.data.current_template.general_settings
                            .containerHeight
                    ),
                    gsOffsetValue: parseInt(
                        data.data.current_template.general_settings
                            .gsOffsetValue
                    ),
                    position:
                        data.data.current_template.general_settings.position,
                    gsTitleColor:
                        data.data.current_template.general_settings
                            .gsTitleColor,
                    gsFontsize: parseInt(
                        data.data.current_template.general_settings.gsFontsize
                    ),
                    gsBold: data.data.current_template.general_settings.gsBold,
                    gsItalic:
                        data.data.current_template.general_settings.gsItalic,
                    gsUnderline:
                        data.data.current_template.general_settings.gsUnderline,
                    gsPriceFontsize: parseInt(
                        data.data.current_template.general_settings
                            .gsPriceFontsize
                    ),
                    gsPriceColor:
                        data.data.current_template.general_settings
                            .gsPriceColor,
                    editText:
                        data.data.current_template.buy_btn_settings.editText,
                    unavailable:
                        data.data.current_template.buy_btn_settings.unavailable,
                    btnWidthValue: parseInt(
                        data.data.current_template.buy_btn_settings
                            .btnWidthValue
                    ),
                    btnheightValue: parseInt(
                        data.data.current_template.buy_btn_settings
                            .btnheightValue
                    ),
                    btnFontsize: parseInt(
                        data.data.current_template.buy_btn_settings.btnFontsize
                    ),
                    btnBorderThickness: parseInt(
                        data.data.current_template.buy_btn_settings
                            .btnBorderThickness
                    ),
                    btnBorderRadius: parseInt(
                        data.data.current_template.buy_btn_settings
                            .btnBorderRadius
                    ),
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
                    gsNotificationBarText:
                        data.data.current_template.general_settings
                            .gsNotificationBarText,
                },
                design_settings: {
                    gsFontFamily:
                        data.data.current_template.general_settings
                            .gsFontFamily,
                    animationEnable: data.data.animationEnable,
                    gsBgColor:
                        data.data.current_template.general_settings.gsBgColor,
                    containerHeight: parseInt(
                        data.data.current_template.general_settings
                            .containerHeight
                    ),
                    gsOffsetValue: parseInt(
                        data.data.current_template.general_settings
                            .gsOffsetValue
                    ),
                    position:
                        data.data.current_template.general_settings.position,
                    gsTitleColor:
                        data.data.current_template.general_settings
                            .gsTitleColor,
                    gsFontsize: parseInt(
                        data.data.current_template.general_settings.gsFontsize
                    ),
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
                    btnWidthValue: parseInt(
                        data.data.current_template.buy_btn_settings
                            .btnWidthValue
                    ),
                    btnheightValue: parseInt(
                        data.data.current_template.buy_btn_settings
                            .btnheightValue
                    ),
                    btnFontsize: parseInt(
                        data.data.current_template.buy_btn_settings.btnFontsize
                    ),
                    btnBorderThickness: parseInt(
                        data.data.current_template.buy_btn_settings
                            .btnBorderThickness
                    ),
                    btnBorderRadius: parseInt(
                        data.data.current_template.buy_btn_settings
                            .btnBorderRadius
                    ),
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
            setOriginalHomePageProduct(data.data.homePageProduct);
            setHomePageProduct(data.data.homePageProduct);
            setOriginalEnable(data.data.enable);
            setAnimationEnable(data.data.animationEnable);
            setDefaultTemplate(data.data.defaultTemplate.toString());
            setOriginalDefaultTemplate(data.data.defaultTemplate.toString());
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
            setGsNotificationBarText(
                data.data.current_template.general_settings
                    .gsNotificationBarText
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
            // setIsSaveButtonDisabled(true);
        } catch (err) {
            console.log(err);
        }
    };

    // SAVE API
    let handleSave = async () => {
        try {
            let payLoad = {
                shop_domain: document.getElementById("shopOrigin").value,
                enable: enable,
                homePageProduct: homePageProduct,
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
                gsNotificationBarText: gsNotificationBarText,
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
            setSaveLoader(false);
            let response = await axios.post("/api/saveAddToStickyCartData", {
                data: payLoad,
            });
            if (response.data.status == true) {
                SetTransferData(response.data);
                SetAPIresponse(response.data);
                setData(response.data);
                // console.log("success");
                setSaveLoader(true);
                getAddToStickyCartData();
                setToastContent(response.data.message);
                toggleActive();
                // setIsSaveButtonDisabled(true);
            } else {
                setToastContent1(response.data.message);
                toggleActive1();
            }
        } catch (err) {
            console.log(err);
        }
    };

    // SWITCH LOGIC
    const handleSwitchChange = (checked) => {
        setEnable(checked);
    };

    // SELECT LOGIC STARTS
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
    const handleSelectTemplateChange = useCallback((value) => {
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
        setGsNotificationBarText(
            currentData.general_settings.gsNotificationBarText
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
        setBtnTexthoverColor(currentData.buy_btn_settings.btnTexthoverColor);
        setBtnBgHoverColor(currentData.buy_btn_settings.btnBgHoverColor);
        setBtnBorderThickness(currentData.buy_btn_settings.btnBorderThickness);
        setBtnBorderRadius(currentData.buy_btn_settings.btnBorderRadius);
        setBtnBorderColor(currentData.buy_btn_settings.btnBorderColor);
        setBtnBorderHoverColor(
            currentData.buy_btn_settings.btnBorderHoverColor
        );
        // setIsSaveButtonDisabled(true);
    });

    const handleTransferData = (data) => {
        setSaveLoader(false);
        // console.log("data");
        // console.log(data);
        SetTransferData({
            general_settings: {
                checkDesktop: data.general_settings.checkDesktop,
                checkMobile: data.general_settings.checkMobile,
                gsAction: data.general_settings.gsAction,
                gsDisplayCondition: data.general_settings.gsDisplayCondition,
                gsNotificationBarText:
                    data.general_settings.gsNotificationBarText,
            },
            design_settings: {
                gsFontFamily: data.design_settings.gsFontFamily,
                animationEnable: data.design_settings.animationEnable,
                gsBgColor: data.design_settings.gsBgColor,
                containerHeight: parseInt(data.design_settings.containerHeight),
                gsOffsetValue: parseInt(data.design_settings.gsOffsetValue),
                position: data.design_settings.position,
                gsTitleColor: data.design_settings.gsTitleColor,
                gsFontsize: parseInt(data.design_settings.gsFontsize),
                gsBold: data.design_settings.gsBold,
                gsItalic: data.design_settings.gsItalic,
                gsUnderline: data.design_settings.gsUnderline,
                gsPriceFontsize: parseInt(data.design_settings.gsPriceFontsize),
                gsPriceColor: data.design_settings.gsPriceColor,
                editText: data.design_settings.editText,
                unavailable: data.design_settings.unavailable,
                btnWidthValue: parseInt(data.design_settings.btnWidthValue),
                btnheightValue: parseInt(data.design_settings.btnheightValue),
                btnFontsize: parseInt(data.design_settings.btnFontsize),
                btnBorderThickness: parseInt(
                    data.design_settings.btnBorderThickness
                ),
                btnBorderRadius: parseInt(data.design_settings.btnBorderRadius),
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
        setGsNotificationBarText(data.general_settings.gsNotificationBarText);
        setHomePageProduct(data.general_settings.homePageProduct);
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
        // setIsSaveButtonDisabled(true);
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
                <Frame>
                    <div className="lm_sticky_main_app_page">
                        <div
                            className={`${
                                isSaveButtonDisabled ? "" : "showDiscardButton"
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
                                            {isSaveButtonDisabled
                                                ? "Sticky Add To Cart"
                                                : "Unsaved Changes"}
                                        </p>
                                    </div>
                                    <ButtonGroup>
                                        <Button
                                            size="large"
                                            onClick={handleSave}
                                            disabled={isSaveButtonDisabled}
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
                                            <Card>
                                                <div className="setting_title">
                                                    <Text
                                                        variant="bodyLg"
                                                        as="span"
                                                        alignment="start"
                                                        fontWeight="medium"
                                                    >
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
                                                    </Text>
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
                                                        options={options}
                                                        onChange={(value) => {
                                                            setDefaultTemplate(
                                                                value
                                                            );
                                                            handleSelectTemplateChange(
                                                                value
                                                            );
                                                        }}
                                                        value={defaultTemplate}
                                                        labelHidden
                                                    />
                                                </BlockStack>
                                            </Card>
                                            <SideBar
                                                dataCallback={
                                                    handleTransferData
                                                }
                                                position={position}
                                                checkMobile={checkMobile}
                                                checkDesktop={checkDesktop}
                                                gsBold={gsBold}
                                                gsFontsize={gsFontsize}
                                                gsPriceFontsize={
                                                    gsPriceFontsize
                                                }
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
                                                gsNotificationBarText={
                                                    gsNotificationBarText
                                                }
                                                containerHeight={
                                                    containerHeight
                                                }
                                                enable={enable}
                                                homePageProduct={
                                                    homePageProduct
                                                }
                                                animationEnable={
                                                    animationEnable
                                                }
                                                editText={editText}
                                                // soldOut={soldOut}
                                                unavailable={unavailable}
                                                btnWidthValue={btnWidthValue}
                                                btnheightValue={btnheightValue}
                                                btnFontsize={btnFontsize}
                                                btnBorderThickness={
                                                    btnBorderThickness
                                                }
                                                btnBorderRadius={
                                                    btnBorderRadius
                                                }
                                                btnBold={btnBold}
                                                btnItalic={btnItalic}
                                                btnUnderline={btnUnderline}
                                                btnTextColor={btnTextColor}
                                                btnBgColor={btnBgColor}
                                                btnTexthoverColor={
                                                    btnTexthoverColor
                                                }
                                                btnBgHoverColor={
                                                    btnBgHoverColor
                                                }
                                                btnBorderColor={btnBorderColor}
                                                btnBorderHoverColor={
                                                    btnBorderHoverColor
                                                }
                                            />
                                        </BlockStack>
                                    </Layout.Section>
                                    <Layout.Section>
                                        <div className="preview_section">
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
                                                            <div
                                                            // style={{
                                                            //     height:
                                                            //         position !==
                                                            //         "Top"
                                                            //             ? 0
                                                            //             : containerHeight,
                                                            //     marginTop:
                                                            //         position !==
                                                            //         "Top"
                                                            //             ? 50
                                                            //             : 20,
                                                            // }}
                                                            >
                                                                {defaultTemplate ===
                                                                "1" ? (
                                                                    <CartTemplate1
                                                                        template_data={
                                                                            data.template_1
                                                                        }
                                                                        enable={
                                                                            enable
                                                                        }
                                                                        animationEnable={
                                                                            animationEnable
                                                                        }
                                                                        defaultTemplate={
                                                                            defaultTemplate
                                                                        }
                                                                        position={
                                                                            position
                                                                        }
                                                                        checkMobile={
                                                                            checkMobile
                                                                        }
                                                                        checkDesktop={
                                                                            checkDesktop
                                                                        }
                                                                        gsBold={
                                                                            gsBold
                                                                        }
                                                                        gsFontsize={
                                                                            gsFontsize
                                                                        }
                                                                        gsPriceFontsize={
                                                                            gsPriceFontsize
                                                                        }
                                                                        gsItalic={
                                                                            gsItalic
                                                                        }
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
                                                                        gsAction={
                                                                            gsAction
                                                                        }
                                                                        gsDisplayCondition={
                                                                            gsDisplayCondition
                                                                        }
                                                                        gsNotificationBarText={
                                                                            gsNotificationBarText
                                                                        }
                                                                        editText={
                                                                            editText
                                                                        }
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
                                                                        btnBold={
                                                                            btnBold
                                                                        }
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
                                                                {defaultTemplate ===
                                                                "2" ? (
                                                                    <CartTemplate2
                                                                        template_data={
                                                                            data.template_2
                                                                        }
                                                                        enable={
                                                                            enable
                                                                        }
                                                                        animationEnable={
                                                                            animationEnable
                                                                        }
                                                                        defaultTemplate={
                                                                            defaultTemplate
                                                                        }
                                                                        position={
                                                                            position
                                                                        }
                                                                        checkMobile={
                                                                            checkMobile
                                                                        }
                                                                        checkDesktop={
                                                                            checkDesktop
                                                                        }
                                                                        gsBold={
                                                                            gsBold
                                                                        }
                                                                        gsFontsize={
                                                                            gsFontsize
                                                                        }
                                                                        gsPriceFontsize={
                                                                            gsPriceFontsize
                                                                        }
                                                                        gsItalic={
                                                                            gsItalic
                                                                        }
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
                                                                        gsAction={
                                                                            gsAction
                                                                        }
                                                                        gsDisplayCondition={
                                                                            gsDisplayCondition
                                                                        }
                                                                        gsNotificationBarText={
                                                                            gsNotificationBarText
                                                                        }
                                                                        editText={
                                                                            editText
                                                                        }
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
                                                                        btnBold={
                                                                            btnBold
                                                                        }
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
                                                                {defaultTemplate ===
                                                                "3" ? (
                                                                    <CartTemplate3
                                                                        template_data={
                                                                            data.template_3
                                                                        }
                                                                        enable={
                                                                            enable
                                                                        }
                                                                        animationEnable={
                                                                            animationEnable
                                                                        }
                                                                        defaultTemplate={
                                                                            defaultTemplate
                                                                        }
                                                                        position={
                                                                            position
                                                                        }
                                                                        checkMobile={
                                                                            checkMobile
                                                                        }
                                                                        checkDesktop={
                                                                            checkDesktop
                                                                        }
                                                                        gsBold={
                                                                            gsBold
                                                                        }
                                                                        gsFontsize={
                                                                            gsFontsize
                                                                        }
                                                                        gsPriceFontsize={
                                                                            gsPriceFontsize
                                                                        }
                                                                        gsItalic={
                                                                            gsItalic
                                                                        }
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
                                                                        gsAction={
                                                                            gsAction
                                                                        }
                                                                        gsDisplayCondition={
                                                                            gsDisplayCondition
                                                                        }
                                                                        gsNotificationBarText={
                                                                            gsNotificationBarText
                                                                        }
                                                                        editText={
                                                                            editText
                                                                        }
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
                                                                        btnBold={
                                                                            btnBold
                                                                        }
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
                                                                {defaultTemplate ===
                                                                "4" ? (
                                                                    <CartTemplate4
                                                                        template_data={
                                                                            data.template_4
                                                                        }
                                                                        enable={
                                                                            enable
                                                                        }
                                                                        animationEnable={
                                                                            animationEnable
                                                                        }
                                                                        defaultTemplate={
                                                                            defaultTemplate
                                                                        }
                                                                        position={
                                                                            position
                                                                        }
                                                                        checkMobile={
                                                                            checkMobile
                                                                        }
                                                                        checkDesktop={
                                                                            checkDesktop
                                                                        }
                                                                        gsBold={
                                                                            gsBold
                                                                        }
                                                                        gsFontsize={
                                                                            gsFontsize
                                                                        }
                                                                        gsPriceFontsize={
                                                                            gsPriceFontsize
                                                                        }
                                                                        gsItalic={
                                                                            gsItalic
                                                                        }
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
                                                                        gsAction={
                                                                            gsAction
                                                                        }
                                                                        gsDisplayCondition={
                                                                            gsDisplayCondition
                                                                        }
                                                                        gsNotificationBarText={
                                                                            gsNotificationBarText
                                                                        }
                                                                        editText={
                                                                            editText
                                                                        }
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
                                                                        btnBold={
                                                                            btnBold
                                                                        }
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
                                                                {defaultTemplate ===
                                                                "5" ? (
                                                                    <CartTemplate5
                                                                        template_data={
                                                                            data.template_5
                                                                        }
                                                                        enable={
                                                                            enable
                                                                        }
                                                                        animationEnable={
                                                                            animationEnable
                                                                        }
                                                                        defaultTemplate={
                                                                            defaultTemplate
                                                                        }
                                                                        position={
                                                                            position
                                                                        }
                                                                        checkMobile={
                                                                            checkMobile
                                                                        }
                                                                        checkDesktop={
                                                                            checkDesktop
                                                                        }
                                                                        gsBold={
                                                                            gsBold
                                                                        }
                                                                        gsFontsize={
                                                                            gsFontsize
                                                                        }
                                                                        gsPriceFontsize={
                                                                            gsPriceFontsize
                                                                        }
                                                                        gsItalic={
                                                                            gsItalic
                                                                        }
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
                                                                        gsAction={
                                                                            gsAction
                                                                        }
                                                                        gsDisplayCondition={
                                                                            gsDisplayCondition
                                                                        }
                                                                        gsNotificationBarText={
                                                                            gsNotificationBarText
                                                                        }
                                                                        editText={
                                                                            editText
                                                                        }
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
                                                                        btnBold={
                                                                            btnBold
                                                                        }
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
                                                                {defaultTemplate ===
                                                                "6" ? (
                                                                    <CartTemplate6
                                                                        template_data={
                                                                            data.template_6
                                                                        }
                                                                        enable={
                                                                            enable
                                                                        }
                                                                        animationEnable={
                                                                            animationEnable
                                                                        }
                                                                        defaultTemplate={
                                                                            defaultTemplate
                                                                        }
                                                                        position={
                                                                            position
                                                                        }
                                                                        checkMobile={
                                                                            checkMobile
                                                                        }
                                                                        checkDesktop={
                                                                            checkDesktop
                                                                        }
                                                                        gsBold={
                                                                            gsBold
                                                                        }
                                                                        gsFontsize={
                                                                            gsFontsize
                                                                        }
                                                                        gsPriceFontsize={
                                                                            gsPriceFontsize
                                                                        }
                                                                        gsItalic={
                                                                            gsItalic
                                                                        }
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
                                                                        gsAction={
                                                                            gsAction
                                                                        }
                                                                        gsDisplayCondition={
                                                                            gsDisplayCondition
                                                                        }
                                                                        gsNotificationBarText={
                                                                            gsNotificationBarText
                                                                        }
                                                                        editText={
                                                                            editText
                                                                        }
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
                                                                        btnBold={
                                                                            btnBold
                                                                        }
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
                                                                {defaultTemplate ===
                                                                "7" ? (
                                                                    <CartTemplate7
                                                                        template_data={
                                                                            data.template_7
                                                                        }
                                                                        enable={
                                                                            enable
                                                                        }
                                                                        animationEnable={
                                                                            animationEnable
                                                                        }
                                                                        defaultTemplate={
                                                                            defaultTemplate
                                                                        }
                                                                        position={
                                                                            position
                                                                        }
                                                                        checkMobile={
                                                                            checkMobile
                                                                        }
                                                                        checkDesktop={
                                                                            checkDesktop
                                                                        }
                                                                        gsBold={
                                                                            gsBold
                                                                        }
                                                                        gsFontsize={
                                                                            gsFontsize
                                                                        }
                                                                        gsPriceFontsize={
                                                                            gsPriceFontsize
                                                                        }
                                                                        gsItalic={
                                                                            gsItalic
                                                                        }
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
                                                                        gsAction={
                                                                            gsAction
                                                                        }
                                                                        gsDisplayCondition={
                                                                            gsDisplayCondition
                                                                        }
                                                                        gsNotificationBarText={
                                                                            gsNotificationBarText
                                                                        }
                                                                        editText={
                                                                            editText
                                                                        }
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
                                                                        btnBold={
                                                                            btnBold
                                                                        }
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
                                                                {defaultTemplate ===
                                                                "8" ? (
                                                                    <CartTemplate8
                                                                        template_data={
                                                                            data.template_8
                                                                        }
                                                                        enable={
                                                                            enable
                                                                        }
                                                                        animationEnable={
                                                                            animationEnable
                                                                        }
                                                                        defaultTemplate={
                                                                            defaultTemplate
                                                                        }
                                                                        position={
                                                                            position
                                                                        }
                                                                        checkMobile={
                                                                            checkMobile
                                                                        }
                                                                        checkDesktop={
                                                                            checkDesktop
                                                                        }
                                                                        gsBold={
                                                                            gsBold
                                                                        }
                                                                        gsFontsize={
                                                                            gsFontsize
                                                                        }
                                                                        gsPriceFontsize={
                                                                            gsPriceFontsize
                                                                        }
                                                                        gsItalic={
                                                                            gsItalic
                                                                        }
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
                                                                        gsAction={
                                                                            gsAction
                                                                        }
                                                                        gsDisplayCondition={
                                                                            gsDisplayCondition
                                                                        }
                                                                        gsNotificationBarText={
                                                                            gsNotificationBarText
                                                                        }
                                                                        editText={
                                                                            editText
                                                                        }
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
                                                                        btnBold={
                                                                            btnBold
                                                                        }
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
