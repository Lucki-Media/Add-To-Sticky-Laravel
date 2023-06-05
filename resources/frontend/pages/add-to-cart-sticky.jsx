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
} from "@shopify/polaris";
import "../css/index.css";
import {
  ChevronLeftMinor,
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
import axios from "axios";

export default function AddToCartSticky() {
    const shop_url = document.getElementById("shopOrigin").value;
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [enable, setEnable] = useState(true);
    const [value, setValue] = useState(1);
    /*GENERAL SETTINGS CONSTANTS*/
    const [posValue, setPosValue] = useState("Top");
    const [showGeneralSettings, setShowGeneralSettings] = useState(false);
    const [checkMobile, setCheckMobile] = useState(false);
    const [checkDesktop, setCheckDesktop] = useState(false);
    const [bold, setBold] = useState(false);
    const [rangeValue, setRangeValue] = useState(20);
    const [italic, setItalic] = useState(false);
    const [underline, setUnderLine] = useState(false);
    const [fontFamily, setFontFamily] = useState("Roboto");
    const [titleColor, setTitleColor] = useState(
        TemplateStyle.current_template.general_settings.font_title_color
        ? TemplateStyle.current_template.general_settings.font_title_color
        : "rgba(0, 0, 0, 0)"
    );
    const [priceColor, setPriceColor] = useState(
        TemplateStyle.current_template.general_settings.font_price_color
        ? TemplateStyle.current_template.general_settings.font_price_color
        : "rgba(255, 0, 0, 1)"
    );
    const [bgColor, setBgColor] = useState(
        TemplateStyle.current_template.general_settings.font_bg_color
        ? TemplateStyle.current_template.general_settings.font_bg_color
        : "rgba(0, 1, 255, 1)"
    );
    const [offsetValue, setOffsetValue] = useState(0);
    const [selected, setSelected] = useState("1");
    const [conditionValue, setConditionValue] = useState("1");

    /*BUY NOW CONSTANTS*/
    const [buyNowSettings, setBuyNowSettings] = useState(false);
    const [editText, setEditText] = useState("BUY NOW");
    const [soldOut, setSoldOut] = useState("Sold out");
    const [unavailable, setUnavailable] = useState("Unavailable");
    const [widthValue, setWidthValue] = useState(125);
    const [buttonheightValue, setButtonHeightValue] = useState(35);
    const [fontSizeValue, setFontSizeValue] = useState(20);
    const [btnSizeValue, setBtnSizeValue] = useState(20);
    const [heightValue, setHeightValue] = useState(70);
    const [borderValue, setBorder] = useState(1);
    const [radiusValue, setRadius] = useState(15);
    const [boldButton, setBoldButton] = useState(false);
    const [italicButton, setItalicButton] = useState(false);
    const [underlineButton, setUnderLineButton] = useState(false);
    const [btnTextColor, setBtnTextColor] = useState(
        TemplateStyle.current_template.general_settings.btn_text_color
        ? TemplateStyle.current_template.general_settings.btn_text_color
        : "rgba(0, 1, 0, 1)"
    );
    const [btnBGColor, setBtnBGColor] = useState(
        TemplateStyle.current_template.general_settings.btn_bg_color
        ? TemplateStyle.current_template.general_settings.btn_bg_color
        : "rgba(0, 1, 234, 1)"
    );
    const [texthoverColor, setTexthoverColor] = useState(
        TemplateStyle.current_template.general_settings.btn_text_hover_color
        ? TemplateStyle.current_template.general_settings.btn_text_hover_color
        : "rgba(0, 144, 1, 1)"
    );
    const [bgHoverColor, setBgHoverColor] = useState(
        TemplateStyle.current_template.general_settings.btn_bg_hover_color
        ? TemplateStyle.current_template.general_settings.btn_bg_hover_color
        : "rgba(0, 1, 0, 1)"
    );
    const [borderColor, setBorderColor] = useState(
        TemplateStyle.current_template.general_settings.btn_border_color
        ? TemplateStyle.current_template.general_settings.btn_border_color
        : "rgba(0, 1, 143, 1)"
    );
    const [radiusColor, setRadiusColor] = useState(
        TemplateStyle.current_template.general_settings.btn_border_hover_color
        ? TemplateStyle.current_template.general_settings.btn_border_hover_color
        : "rgba(1, 255, 0, 1)"
    );
    const getAddToStickyCartData = async () => {
        try {
            const response = await fetch("api/getAddToStickyCartData/"+ shop_url);
            const data = await response.json();
            console.log(data.data);
            setData(data.data)
            setEnable(data.data.add_to_cart_sticky);
            setValue(data.data.default_template);
            setPosValue(data.data.current_template.general_settings.posValue);
            setRangeValue(data.data.current_template.general_settings.rangeValue);
            setCheckDesktop(data.data.current_template.general_settings.desktop);
            setCheckMobile(data.data.current_template.general_settings.mobile);
            setFontFamily(data.data.current_template.general_settings.font_family);
            setBold(data.data.current_template.general_settings.font_bold);
            setItalic(data.data.current_template.general_settings.font_italic);
            setUnderLine(
            data.data.current_template.general_settings.font_underline
            );
            setTitleColor(
            data.data.current_template.general_settings.font_title_color
            );
            setHeightValue(data.data.current_template.general_settings.font_height);
            setPriceColor(
            data.data.current_template.general_settings.font_price_color
            );
            setBgColor(data.data.current_template.general_settings.font_bg_color);
            setOffsetValue(data.data.current_template.general_settings.offsetValue);
            setConditionValue(data.data.current_template.general_settings.conditionValue);
            setSelected(data.data.current_template.general_settings.selectedAction);
            setEditText(data.data.current_template.buy_btn_settings.edit_text);
            setSoldOut(data.data.current_template.buy_btn_settings.sold_out);
            setUnavailable(data.data.current_template.buy_btn_settings.unavailable);
            setButtonHeightValue(
            data.data.current_template.buy_btn_settings.btn_height
            );
            setWidthValue(data.data.current_template.buy_btn_settings.btn_width);
            setFontSizeValue(data.data.current_template.buy_btn_settings.font_size);
            setBtnSizeValue(data.data.current_template.buy_btn_settings.btn_size);
            setBoldButton(data.data.current_template.buy_btn_settings.btn_bold);
            setItalicButton(data.data.current_template.buy_btn_settings.btn_italic);
            setUnderLine(data.data.current_template.buy_btn_settings.btn_underline);
            setBtnTextColor(
            data.data.current_template.buy_btn_settings.btn_text_color
            );
            setBtnBGColor(data.data.current_template.buy_btn_settings.btn_bg_color);
            setTexthoverColor(
            data.data.current_template.buy_btn_settings.btn_text_hover_color
            );
            setBgHoverColor(
            data.data.current_template.buy_btn_settings.btn_bg_hover_color
            );
            setBorder(data.data.current_template.buy_btn_settings.btn_border);
            setRadius(
            data.data.current_template.buy_btn_settings.btn_border_radius
            );
            setBorderColor(
            data.data.current_template.buy_btn_settings.btn_border_color
            );
            setRadiusColor(
            data.data.current_template.buy_btn_settings.btn_border_hover_color
            );
            // return data;
        } catch (err) {
            console.log(err);
        }
    };
    // USE EFFECT
    useEffect(() => {
        getAddToStickyCartData();
        // setEnable(TemplateStyle.add_to_cart_sticky);
        // setValue(TemplateStyle.default_template);
        // setCheckDesktop(TemplateStyle.current_template.general_settings.desktop);
        // setCheckMobile(TemplateStyle.current_template.general_settings.mobile);
        // setFontFamily(TemplateStyle.current_template.general_settings.font_family);
        // setFontSizeValue(TemplateStyle.current_template.general_settings.font_size);
        // setBold(TemplateStyle.current_template.general_settings.font_bold);
        // setItalic(TemplateStyle.current_template.general_settings.font_italic);
        // setUnderLine(
        //   TemplateStyle.current_template.general_settings.font_underline
        // );
        // setTitleColor(
        //   TemplateStyle.current_template.general_settings.font_title_color
        // );
        // setHeightValue(TemplateStyle.current_template.general_settings.font_height);
        // setPriceColor(
        //   TemplateStyle.current_template.general_settings.font_price_color
        // );
        // setBgColor(TemplateStyle.current_template.general_settings.font_bg_color);
        // setEditText(TemplateStyle.current_template.buy_btn_settings.edit_text);
        // setSoldOut(TemplateStyle.current_template.buy_btn_settings.sold_out);
        // setUnavailable(TemplateStyle.current_template.buy_btn_settings.unavailable);
        // setButtonHeightValue(
        //   TemplateStyle.current_template.buy_btn_settings.btn_height
        // );
        // setWidthValue(TemplateStyle.current_template.buy_btn_settings.btn_width);
        // setBtnSizeValue(TemplateStyle.current_template.buy_btn_settings.btn_size);
        // setBoldButton(TemplateStyle.current_template.buy_btn_settings.btn_bold);
        // setItalicButton(TemplateStyle.current_template.buy_btn_settings.btn_italic);
        // setUnderLine(TemplateStyle.current_template.buy_btn_settings.btn_underline);
        // setBtnTextColor(
        //   TemplateStyle.current_template.buy_btn_settings.btn_text_color
        // );
        // setBtnBGColor(TemplateStyle.current_template.buy_btn_settings.btn_bg_color);
        // setTexthoverColor(
        //   TemplateStyle.current_template.buy_btn_settings.btn_text_hover_color
        // );
        // setBgHoverColor(
        //   TemplateStyle.current_template.buy_btn_settings.btn_bg_hover_color
        // );
        // setBorder(TemplateStyle.current_template.buy_btn_settings.btn_border);
        // setRadius(
        //   TemplateStyle.current_template.buy_btn_settings.btn_border_radius
        // );
        // setBorderColor(
        //   TemplateStyle.current_template.buy_btn_settings.btn_border_color
        // );
        // setRadiusColor(
        //   TemplateStyle.current_template.buy_btn_settings.btn_border_hover_color
        // );
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
        setFontFamily(value.family);
    };

    /*TITLE FONT SIZE GENERAL SETTINGS*/
    const handleRangeSliderChange = useCallback(
        (value) => setRangeValue(value),
        []
    );

    /*TITLE STYLE GENERAL SETTINGS*/
    const handleBold = useCallback((newChecked) => setBold(newChecked), []);
    const handleItalic = useCallback((newChecked) => setItalic(newChecked), []);
    const handleUnderline = useCallback(
        (newChecked) => setUnderLine(newChecked),
        []
    );
    /*TITLE STYLE GENERAL SETTINGS*/

    /*HEIGHT BUY NOW*/
    const handleHeightSliderChange = useCallback(
        (value) => setHeightValue(value),
        []
    );
    /*HEIGHT BUY NOW*/

    /*STYLE PART END*/

    /*LAYOUT PART START*/
    /*POSITION GENERAL SETTINGS*/
    const handlePositionChange = (key) => {
        setPosValue(key);
    };
    /*POSITION GENERAL SETTINGS*/

    /*OFFSET GENERAL SETTINGS*/
    const handleOffsetSliderChange = useCallback(
        (value) => setOffsetValue(value),
        []
    );
    /*LAYOUT PART END*/

    /*ACTION GENERAL SETTINGS*/
    const handleSelectChange = useCallback((value) => setSelected(value), []);
    const options = [
        { label: "Go to Cart", value: "1" },
        { label: "Go to Checkout", value: "2" },
    ];

    /*DISPLAY CONDITION GENERAL SETTINGS*/
    const handleConditionChange = useCallback(
        (value) => setConditionValue(value),
        []
    );
    const conditions = [
        { label: "Always show", value: "1" },
        {
        label: "Only when add to cart is not visible",
        value: "2",
        },
        {
        label:
            "Only when user has scrolled down and surpassed the 'Add to cart' button",
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
    const handleTitleColor = useCallback((value) => setTitleColor(value), []);

    // PRICE COLOR
    const handlePriceColor = useCallback((value) => setPriceColor(value), []);

    // PRICE COLOR
    const handleBGColor = useCallback((value) => setBgColor(value), []);

    /*BUY NOW BTN TEXT START*/
    // EDIT TEXT
    const handleEditTextField = (val) => {
        setEditText(val);
    };
    // SOLD OUT
    const handleSoldOutTextField = (val) => {
        setSoldOut(val);
    };
    // UNAVAILABLE
    const handleUnavailableTextField = (val) => {
        setUnavailable(val);
    };
    /*BUY NOW BTN TEXT END*/

    /*BUY NOW BTN STYLE START*/
    // WIDTH
    const handleWidthSliderChange = useCallback(
        (value) => setWidthValue(value),
        []
    );
    // BUY NOW BTN HEIGHT
    const handleBuyButtonHeightSliderChange = useCallback(
        (value) => setButtonHeightValue(value),
        []
    );
    //BUY NOW  FONT SIZE
    const handleFontSizeSliderChange = useCallback(
        (value) => setFontSizeValue(value),
        []
    );
    // BUY NOW  STYLE
    const handleBoldButton = useCallback(
        (newChecked) => setBoldButton(newChecked),
        []
    );
    const handleItalicButton = useCallback(
        (newChecked) => setItalicButton(newChecked),
        []
    );
    const handleUnderlineButton = useCallback(
        (newChecked) => setUnderLineButton(newChecked),
        []
    );
    // BORDER THIKNESS
    const handleBorderSliderChange = useCallback((value) => setBorder(value), []);

    // BORDER RADIUS
    const handleRadiusSliderChange = useCallback((value) => setRadius(value), []);
    /*BUY NOW BTN STYLE END*/

    // BTN TEXT COLOR
    const handlebtnTextColor = useCallback((value) => setBtnTextColor(value), []);

    // TEXT HOVER COLOR
    const handletexthoverColor = useCallback(
        (value) => setTexthoverColor(value),
        []
    );

    // BG HOVER COLOR
    const handlebgHoverColor = useCallback((value) => setBgHoverColor(value), []);

    // BTN BG COLOR
    const handlebtnBGColor = useCallback((value) => setBtnBGColor(value), []);

    // BORDER COLOR
    const handleborderColor = useCallback((value) => setBorderColor(value), []);

    // BORDER HOVER COLOR
    const handlebordeHoverColor = useCallback(
        (value) => setRadiusColor(value),
        []
    );
    // COLOR CHANGE HANDLES END

    // TEMPLATE DATA START
    const handleChange = (key) => {
        console.log(data);
        setValue(key);
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

        default:
            currentData = data.current_template;
            break;
        }
        console.log(currentData);
        setEnable(data.add_to_cart_sticky);
        setCheckDesktop(currentData.general_settings.desktop);
        setCheckMobile(currentData.general_settings.mobile);
        setPosValue(currentData.general_settings.posValue);
        setRangeValue(currentData.general_settings.rangeValue);
        setFontFamily(currentData.general_settings.font_family);
        setBold(currentData.general_settings.font_bold);
        setItalic(currentData.general_settings.font_italic);
        setUnderLine(currentData.general_settings.font_underline);
        setTitleColor(currentData.general_settings.font_title_color);
        setHeightValue(currentData.general_settings.font_height);
        setPriceColor(currentData.general_settings.font_price_color);
        setBgColor(currentData.general_settings.font_bg_color);
        setOffsetValue(currentData.general_settings.offsetValue);
        setConditionValue(currentData.general_settings.conditionValue);
        setSelected(currentData.general_settings.selectedAction);
        setEditText(currentData.buy_btn_settings.edit_text);
        setSoldOut(currentData.buy_btn_settings.sold_out);
        setUnavailable(currentData.buy_btn_settings.unavailable);
        setButtonHeightValue(currentData.buy_btn_settings.btn_height);
        setWidthValue(currentData.buy_btn_settings.btn_width);
        setFontSizeValue(currentData.buy_btn_settings.font_size);
        setBtnSizeValue(currentData.buy_btn_settings.btn_size);
        setBoldButton(currentData.buy_btn_settings.btn_bold);
        setItalicButton(currentData.buy_btn_settings.btn_italic);
        setUnderLine(currentData.buy_btn_settings.btn_underline);
        setBtnTextColor(currentData.buy_btn_settings.btn_text_color);
        setBtnBGColor(currentData.buy_btn_settings.btn_bg_color);
        setTexthoverColor(currentData.buy_btn_settings.btn_text_hover_color);
        setBgHoverColor(currentData.buy_btn_settings.btn_bg_hover_color);
        setBorder(currentData.buy_btn_settings.btn_border);
        setRadius(currentData.buy_btn_settings.btn_border_radius);
        setBorderColor(currentData.buy_btn_settings.btn_border_color);
        setRadiusColor(currentData.buy_btn_settings.btn_border_hover_color);
    };
    // TEMPLATE DATA END
    // DASHBOARD REDIRECT START
    const handleClick = (data) => {
        navigate("/");
    };
    //   DASHBOARD REDIRECT END
    let handleSave = async() => {
        try {
            let payLoad = {
                shop_domain: document.getElementById("shopOrigin").value,
                enable : enable ,
                value  : value,
                /*GENERAL SETTINGS START*/
                checkDesktop : checkDesktop ,
                posValue : posValue ,
                checkMobile : checkMobile ,
                fontFamily : fontFamily ,
                rangeValue : rangeValue ,
                bold : bold ,
                italic : italic ,
                underline : underline ,
                titleColor : titleColor ,
                priceColor : priceColor ,
                bgColor : bgColor ,
                offsetValue : offsetValue ,
                selectedAction : selected ,
                conditionValue : conditionValue ,
                /*GENERAL SETTINGS END*/
                /*BUY NOW START*/
                editText : editText ,
                soldOut : soldOut ,
                unavailable : unavailable ,
                widthValue : widthValue ,
                buttonheightValue : buttonheightValue ,
                fontSizeValue : fontSizeValue ,
                btnSizeValue : btnSizeValue ,
                heightValue : heightValue ,
                borderValue : borderValue ,
                radiusValue : radiusValue ,
                boldButton : boldButton ,
                italicButton : italicButton ,
                underlineButton : underlineButton ,
                btnTextColor : btnTextColor ,
                btnBGColor : btnBGColor ,
                texthoverColor : texthoverColor ,
                bgHoverColor : bgHoverColor ,
                borderColor : borderColor ,
                radiusColor : radiusColor ,
                /*BUY NOW END*/
            };
            let response = await axios.post("/api/saveAddToStickyCartData", {
                data: payLoad,
            });
            // console.log("window.sessionToken");
            // console.log(window.sessionToken);
            // console.log(response);
            if (response.data.status == true) {
                // console.log("success");
                // setToastContent(response.data.message);
                // toggleActive();
            } else {
                // setToastContent1(response.data.message);
                // toggleActive1();
            }
            // setLoading(false);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
        <div className="topbar_title">LM ADD TO CART STICKY</div>

        <div style={{ height: heightValue, marginTop: 50 }}>
            {value === 1 ? <CartTemplate1 /> : ""}
            {value === 2 ? <CartTemplate2 /> : ""}
            {value === 3 ? <CartTemplate3 /> : ""}
            {value === 4 ? <CartTemplate4 /> : ""}
        </div>
        <div className="main_app_page" style={{ marginTop: 30 }}>
            <Page>
            <Layout>
                <Layout.Section oneThird>
                <div className="dashboard_tag" onClick={handleClick}>
                    <Icon source={ChevronLeftMinor} color="base" /> Dashboard
                </div>
                <div className="sidebar_title">Add To Sticky Cart</div>
                {/* cart enable disable card */}
                <div className="show_stickyCart">
                    <Card sectioned>
                    <span className="show_sticky_span">
                        Add To Sticky Cart is{" "}
                        <b>{enable === true ? "Enabled" : "Disabled"}</b>{" "}
                    </span>
                    {/* <div className="show_cart_btn"> */}
                    <Button
                        primary
                        onClick={() => {
                        handleEnable(enable);
                        }}
                    >
                        {enable === true ? "Disable" : "Enable"}
                    </Button>
                    </Card>
                </div>

                {/* general Cart Settings */}
                <div
                    className="general_setting_title"
                    onClick={() => {
                    hanldeShowGeneralSetting(showGeneralSettings);
                    }}
                >
                    <Card sectioned>
                    <span className="general_setting_icon">
                        <Icon source={SettingsMajor} color="base" />
                    </span>
                    <div className="setting_title">
                        <span className="show_sticky_span">General Settings</span>
                        <span>
                        {showGeneralSettings === true ? (
                            <Icon source={ChevronDownMinor} />
                        ) : (
                            <Icon source={ChevronRightMinor} />
                        )}
                        </span>
                    </div>
                    </Card>
                </div>

                {showGeneralSettings === true ? (
                    <Scrollable style={{ height: "500px" }} horizontal={false}>
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
                            onChange={handlecheckboxDesktop}
                        />
                        <br />
                        <Checkbox
                            label="Mobile"
                            checked={checkMobile}
                            onChange={handlecheckboxMobile}
                        />
                        </Card>

                        {/* style part */}
                        <span className="display_setting_title">STYLE </span>
                        <Card sectioned>
                        {/* font family */}
                        <div className="style__wrapper_div">
                            <span className="display_setting_subtitle">
                            Font Family{" "}
                            </span>
                            <div className="font_picker_popup">
                            <FontPicker
                                apiKey="AIzaSyBRCzvluQdkcyQkKHPjLwltLe2HrkUd5Bs"
                                activeFontFamily={fontFamily}
                                onChange={handleFontChange}
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
                                label={`${rangeValue} px`}
                                value={rangeValue}
                                min={8}
                                max={40}
                                onChange={handleRangeSliderChange}
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
                                checked={bold}
                                onChange={handleBold}
                            />
                            <br />
                            <Checkbox
                                label="Italic"
                                checked={italic}
                                onChange={handleItalic}
                            />
                            <br />
                            <Checkbox
                                label="Underline"
                                checked={underline}
                                onChange={handleUnderline}
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
                                defaultColor={titleColor}
                                onChildResult={handleTitleColor}
                            />
                            </div>
                        </div>

                        {/* Height */}
                        <div className="style__wrapper_div">
                            <span className="display_setting_subtitle">Height</span>
                            <div className="font_picker_popup">
                            <RangeSlider
                                label={`${heightValue} px`}
                                value={heightValue}
                                min={50}
                                max={150}
                                onChange={handleHeightSliderChange}
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
                                defaultColor={priceColor}
                                onChildResult={handlePriceColor}
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
                                defaultColor={bgColor}
                                onChildResult={handleBGColor}
                            />
                            </div>
                        </div>
                        </Card>

                        {/* layout part */}
                        <span className="display_setting_title">LAYOUT </span>
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
                                checked={posValue === "Top"}
                                name="position"
                                onChange={() => {
                                    handlePositionChange("Top");
                                }}
                            />
                            <br />
                            <RadioButton
                                label={"Bottom"}
                                id={"Bottom"}
                                checked={posValue === "Bottom"}
                                name="position"
                                onChange={() => {
                                    handlePositionChange("Bottom");
                                }}
                            />
                            </div>
                        </div>

                        {/* Offset */}
                        <div className="style__wrapper_div">
                            <span className="display_setting_subtitle">Offset</span>
                            <div className="font_picker_popup">
                            <RangeSlider
                                label={`${offsetValue} px`}
                                value={offsetValue}
                                min={0}
                                max={250}
                                onChange={handleOffsetSliderChange}
                                output
                            />
                            </div>
                        </div>
                        </Card>

                        {/* action part */}
                        <span className="display_setting_title">ACTION </span>
                        <Card sectioned>
                        {/* Action */}
                        <div className="style__wrapper_div">
                            <span className="display_setting_subtitle">Action</span>
                            <div className="display_select_drop_down">
                            <Select
                                options={options}
                                onChange={handleSelectChange}
                                value={selected}
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
                                options={conditions}
                                onChange={handleConditionChange}
                                value={conditionValue}
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
                        <Icon source={CheckoutMajor} color="base" />
                    </span>
                    <div className="setting_title">
                        <span className="show_sticky_span">Buy Now Button</span>
                        <span>
                        {buyNowSettings === true ? (
                            <Icon source={ChevronDownMinor} />
                        ) : (
                            <Icon source={ChevronRightMinor} />
                        )}
                        </span>
                    </div>
                    </Card>
                </div>

                {buyNowSettings === true ? (
                    <Scrollable style={{ height: "500px" }} horizontal={false}>
                    <div className="overall_general_content">
                        {/* TEXT part */}
                        <span className="display_setting_title">TEXT </span>
                        <Card sectioned>
                        {/* Edit Text */}
                        <div className="style__wrapper_div">
                            <span className="display_setting_subtitle">
                            Edit Text
                            </span>
                            <div className="buy_now__textfield">
                            <TextField
                                value={editText}
                                onChange={handleEditTextField}
                                autoComplete="off"
                                maxLength={15}
                                placeholder="Example: BUY NOW"
                                showCharacterCount
                            />
                            </div>
                        </div>

                        {/* Sold out */}
                        <div className="style__wrapper_div">
                            <span className="display_setting_subtitle">
                            Sold out
                            </span>
                            <div className="buy_now__textfield">
                            <TextField
                                value={soldOut}
                                onChange={handleSoldOutTextField}
                                maxLength={15}
                                autoComplete="off"
                                placeholder="Example: Sold out"
                                showCharacterCount
                            />
                            </div>
                        </div>

                        {/* Unavailable */}
                        <div className="style__wrapper_div">
                            <span className="display_setting_subtitle">
                            Unavailable
                            </span>
                            <div className="buy_now__textfield">
                            <TextField
                                value={unavailable}
                                onChange={handleUnavailableTextField}
                                autoComplete="off"
                                maxLength={15}
                                placeholder="Example: Unavailable"
                                showCharacterCount
                            />
                            </div>
                        </div>
                        </Card>

                        {/* style part */}
                        <span className="display_setting_title">STYLE </span>
                        <Card sectioned>
                        {/* Width */}
                        <div className="style__wrapper_div">
                            <span className="display_setting_subtitle">Width</span>
                            <div className="font_picker_popup">
                            <RangeSlider
                                label={`${widthValue} px`}
                                value={widthValue}
                                min={0}
                                max={250}
                                onChange={handleWidthSliderChange}
                                output
                            />
                            </div>
                        </div>

                        {/* Height */}
                        <div className="style__wrapper_div">
                            <span className="display_setting_subtitle">Height</span>
                            <div className="font_picker_popup">
                            <RangeSlider
                                label={`${buttonheightValue} px`}
                                value={buttonheightValue}
                                min={0}
                                max={250}
                                onChange={handleBuyButtonHeightSliderChange}
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
                                label={`${fontSizeValue} px`}
                                value={fontSizeValue}
                                min={8}
                                max={50}
                                onChange={handleFontSizeSliderChange}
                                output
                            />
                            </div>
                        </div>

                        {/* Style */}
                        <div className="style__wrapper_div">
                            <span className="display_setting_subtitle">Style</span>
                            <div className="">
                            <Checkbox
                                label="Bold"
                                checked={boldButton}
                                onChange={handleBoldButton}
                            />
                            <br />
                            <Checkbox
                                label="Italic"
                                checked={italicButton}
                                onChange={handleItalicButton}
                            />
                            <br />
                            <Checkbox
                                label="Underline"
                                checked={underlineButton}
                                onChange={handleUnderlineButton}
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
                                defaultColor={btnTextColor}
                                onChildResult={handlebtnTextColor}
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
                                defaultColor={btnBGColor}
                                onChildResult={handlebtnBGColor}
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
                                defaultColor={texthoverColor}
                                onChildResult={handletexthoverColor}
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
                                defaultColor={bgHoverColor}
                                onChildResult={handlebgHoverColor}
                            />
                            </div>
                        </div>
                        </Card>

                        {/* border part */}
                        <span className="display_setting_title">BORDER </span>
                        <Card sectioned>
                        {/* Border Thickness */}
                        <div className="style__wrapper_div">
                            <span className="display_setting_subtitle">
                            Border Thickness
                            </span>
                            <div className="font_picker_popup">
                            <RangeSlider
                                label={`${borderValue} px`}
                                value={borderValue}
                                min={0}
                                max={10}
                                onChange={handleBorderSliderChange}
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
                                label={`${radiusValue} px`}
                                value={radiusValue}
                                min={0}
                                max={50}
                                onChange={handleRadiusSliderChange}
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
                                defaultColor={borderColor}
                                onChildResult={handleborderColor}
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
                                defaultColor={radiusColor}
                                onChildResult={handlebordeHoverColor}
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
                <div className="save_template_btn">
                    <Button onClick={handleSave} primary>Save</Button>
                </div>
                <Card sectioned>
                    <div className="template___Card apply-font">
                    Choose the sticky Add to Cart template
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
                            label={item.label}
                            id={item.key}
                            checked={value === item.key}
                            name="template"
                            onChange={() => {
                                handleChange(item.key);
                            }}
                            />
                        </div>
                        </div>
                    ))}
                    </div>
                </Card>
                </Layout.Section>
            </Layout>
            </Page>
        </div>
        </>
    );
}
