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
import { useAuthenticatedFetch } from "../hooks";
import axios from "axios";

export default function AddToCartSticky() {
  const shop_url = document.getElementById("shopOrigin").value;
  const fetch = useAuthenticatedFetch();
  const navigate = useNavigate();
  const [enable, setEnable] = useState(true);
  const [value, setValue] = useState(1);
  const [posValue, setPosValue] = useState("Top");
  const [showGeneralSettings, setShowGeneralSettings] = useState(false);
  const [buyNowSettings, setBuyNowSettings] = useState(false);
  const [checkMobile, setCheckMobile] = useState(false);
  const [checkDesktop, setCheckDesktop] = useState(false);
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [underline, setUnderLine] = useState(false);
  const [boldButton, setBoldButton] = useState(false);
  const [italicButton, setItalicButton] = useState(false);
  const [underlineButton, setUnderLineButton] = useState(false);
  const [fontFamily, setFontFamily] = useState("Roboto");
  const [titleColor, setTitleColor] = useState(
    TemplateStyle.current_template.general_settings.font_title_color
      ? TemplateStyle.current_template.general_settings.font_title_color
      : "rgba(0, 0, 0, 0)"
  );
  const [priceColor, setpriceColor] = useState(
    TemplateStyle.current_template.general_settings.font_price_color
      ? TemplateStyle.current_template.general_settings.font_price_color
      : "rgba(255, 0, 0, 1)"
  );
  const [bgColor, setbgColor] = useState(
    TemplateStyle.current_template.general_settings.font_bg_color
      ? TemplateStyle.current_template.general_settings.font_bg_color
      : "rgba(0, 1, 255, 1)"
  );
  const [btnTextColor, setbtnTextColor] = useState(
    TemplateStyle.current_template.general_settings.btn_text_color
      ? TemplateStyle.current_template.general_settings.btn_text_color
      : "rgba(0, 1, 0, 1)"
  );
  const [btnBGColor, setbtnBGColor] = useState(
    TemplateStyle.current_template.general_settings.btn_bg_color
      ? TemplateStyle.current_template.general_settings.btn_bg_color
      : "rgba(0, 1, 234, 1)"
  );
  const [texthoverColor, settexthoverColor] = useState(
    TemplateStyle.current_template.general_settings.btn_text_hover_color
      ? TemplateStyle.current_template.general_settings.btn_text_hover_color
      : "rgba(0, 144, 1, 1)"
  );
  const [bgHoverColor, setbgHoverColor] = useState(
    TemplateStyle.current_template.general_settings.btn_bg_hover_color
      ? TemplateStyle.current_template.general_settings.btn_bg_hover_color
      : "rgba(0, 1, 0, 1)"
  );
  const [borderColor, setborderColor] = useState(
    TemplateStyle.current_template.general_settings.btn_border_color
      ? TemplateStyle.current_template.general_settings.btn_border_color
      : "rgba(0, 1, 143, 1)"
  );
  const [radiusColor, setradiusColor] = useState(
    TemplateStyle.current_template.general_settings.btn_border_hover_color
      ? TemplateStyle.current_template.general_settings.btn_border_hover_color
      : "rgba(1, 255, 0, 1)"
  );
  const [FontSizeValue, setFontSizeValue] = useState(20);
  const [rangeValue, setRangeValue] = useState(20);
  const [heightValue, setHeightValue] = useState(70);
  const [buttonheightValue, setButtonHeightValue] = useState(35);
  const [widthValue, setWidthValue] = useState(125);
  const [borderValue, setBorder] = useState(1);
  const [radiusValue, setRadius] = useState(15);
  const [offsetValue, setOffsetValue] = useState(0);
  const [selected, setSelected] = useState("1");
  const [conditionValue, setConditionValue] = useState("1");
  const [editText, setEditText] = useState("BUY NOW");
  const [soldOut, setSoldOut] = useState("Sold out");
  const [unavailable, setUnavailable] = useState("Unavailable");
//   const fetchDashboardData = async () => {
//     axios
//       .post("https://lmaddtocartstickydev.luckistore.in/add_to_sticky_cart", {
//         shop_domain: shop_url,
//       })
//       .then((response) => {
//         setSacArray(response.data.data.sac_month_wise);
//         setSCartArray(response.data.data.s_cart_month_wise);
//         setSacCount(response.data.data.sac_count);
//         setSCartCount(response.data.data.s_cart_count);
//         setShowTable(true);
//       });
//   };
  // USE EFFECT
  useEffect(() => {
    // fetchDashboardData();
    // const getAllData = async () => {
    //   const res = axios
    //     .post("http://localhost:53891/add_to_sticky_cart", {
    //       shop_domain: new URL(window.location).searchParams.get("shop"),
    //     })
    //     .then((response) => {
    //       console.log(response);
    //       // setCountNumber(response.data.item_count);
    //     });
    // };
    // getAllData();
    // const singleProduct = async () => {
    //   try {
    //     const response = await fetch("/sticky_cart");
    //     // const data = await response.json();
    //     console.log(response);
    //     // return data;
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };
    // singleProduct();
    console.log(TemplateStyle);
    setEnable(TemplateStyle.add_to_cart_sticky);
    setValue(TemplateStyle.default_template);
    setCheckDesktop(TemplateStyle.current_template.general_settings.desktop);
    setCheckMobile(TemplateStyle.current_template.general_settings.mobile);
    setFontFamily(TemplateStyle.current_template.general_settings.font_family);
    setFontSizeValue(TemplateStyle.current_template.general_settings.font_size);
    setBold(TemplateStyle.current_template.general_settings.font_bold);
    setItalic(TemplateStyle.current_template.general_settings.font_italic);
    setUnderLine(
      TemplateStyle.current_template.general_settings.font_underline
    );
    setTitleColor(
      TemplateStyle.current_template.general_settings.font_title_color
    );
    setHeightValue(TemplateStyle.current_template.general_settings.font_height);
    setpriceColor(
      TemplateStyle.current_template.general_settings.font_price_color
    );
    setbgColor(TemplateStyle.current_template.general_settings.font_bg_color);
    setEditText(TemplateStyle.current_template.buy_btn_settings.edit_text);
    setSoldOut(TemplateStyle.current_template.buy_btn_settings.sold_out);
    setUnavailable(TemplateStyle.current_template.buy_btn_settings.unavailable);
    setButtonHeightValue(
      TemplateStyle.current_template.buy_btn_settings.btn_height
    );
    setWidthValue(TemplateStyle.current_template.buy_btn_settings.btn_width);
    setFontSizeValue(TemplateStyle.current_template.buy_btn_settings.btn_size);
    setBoldButton(TemplateStyle.current_template.buy_btn_settings.btn_bold);
    setItalicButton(TemplateStyle.current_template.buy_btn_settings.btn_italic);
    setUnderLine(TemplateStyle.current_template.buy_btn_settings.btn_underline);
    setbtnTextColor(
      TemplateStyle.current_template.buy_btn_settings.btn_text_color
    );
    setbtnBGColor(TemplateStyle.current_template.buy_btn_settings.btn_bg_color);
    settexthoverColor(
      TemplateStyle.current_template.buy_btn_settings.btn_text_hover_color
    );
    setbgHoverColor(
      TemplateStyle.current_template.buy_btn_settings.btn_bg_hover_color
    );
    setBorder(TemplateStyle.current_template.buy_btn_settings.btn_border);
    setRadius(
      TemplateStyle.current_template.buy_btn_settings.btn_border_radius
    );
    setborderColor(
      TemplateStyle.current_template.buy_btn_settings.btn_border_color
    );
    setradiusColor(
      TemplateStyle.current_template.buy_btn_settings.btn_border_hover_color
    );
  }, []);

  // ENABLE BUTTON START
  const handleEnable = (value) => {
    setEnable(!value);
  };

  // ENABLE BUTTON END

  //GENERAL SETTINGS SHOW START
  const hanldeShowGeneralSetting = (value) => {
    setBuyNowSettings(false);
    setShowGeneralSettings(!value);
  };
  //GENERAL SETTINGS SHOW END

  //BUY NOW SHOW START
  const hanldeBuyNowSetting = (value) => {
    setShowGeneralSettings(false);
    setBuyNowSettings(!value);
  };
  //BUY NOW SHOW END

  // STYLE PART START
  //  FONT FAMILY
  const handleFontChange = (value) => {
    setFontFamily(value.family);
  };

  //TITLE FONT SIZE
  const handleRangeSliderChange = useCallback(
    (value) => setRangeValue(value),
    []
  );

  // TITLE STYLE
  const handleBold = useCallback((newChecked) => setBold(newChecked), []);
  const handleItalic = useCallback((newChecked) => setItalic(newChecked), []);
  const handleUnderline = useCallback(
    (newChecked) => setUnderLine(newChecked),
    []
  );

  // HEIGHT
  const handleHeightSliderChange = useCallback(
    (value) => setHeightValue(value),
    []
  );

  // STYLE PART END

  // LAYOUT PART START
  // POSITION
  const handlePositionChange = (key) => {
    setPosValue(key);
  };

  // OFFSET
  const handleOffsetSliderChange = useCallback(
    (value) => setOffsetValue(value),
    []
  );

  // LAYOUT PART END

  // ACTION PART START
  // ACTION
  const handleSelectChange = useCallback((value) => setSelected(value), []);
  const options = [
    { label: "Go to Cart", value: "1" },
    { label: "Go to Checkout", value: "2" },
  ];

  //DISPLAY CONDITION
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

  // ACTION PART START

  // ACTION PART END

  // BUY NOW BTN TEXT START
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

  // BUY NOW BTN TEXT END

  // BUY NOW BTN STYLE START
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

  // BUY NOW BTN STYLE END

  // BORDER PART START
  // BORDER THIKNESS
  const handleBorderSliderChange = useCallback((value) => setBorder(value), []);

  // BORDER RADIUS
  const handleRadiusSliderChange = useCallback((value) => setRadius(value), []);
  // BORDER PART END

  // DISPLAY SETTING START
  const handlecheckboxMobile = useCallback(
    (newChecked) => setCheckMobile(newChecked),
    []
  );

  const handlecheckboxDesktop = useCallback(
    (newChecked) => setCheckDesktop(newChecked),
    []
  );
  // DISPLAY SETTING END

  // COLOR CHANGE HANDLES START
  // TITLE COLOR
  const handleTitleColor = useCallback((value) => setTitleColor(value), []);

  // PRICE COLOR
  const handlePriceColor = useCallback((value) => setpriceColor(value), []);

  // PRICE COLOR
  const handleBGColor = useCallback((value) => setbgColor(value), []);

  // BTN TEXT COLOR
  const handlebtnTextColor = useCallback((value) => setbtnTextColor(value), []);

  // TEXT HOVER COLOR
  const handletexthoverColor = useCallback(
    (value) => settexthoverColor(value),
    []
  );

  // BG HOVER COLOR
  const handlebgHoverColor = useCallback((value) => setbgHoverColor(value), []);

  // BTN BG COLOR
  const handlebtnBGColor = useCallback((value) => setbtnBGColor(value), []);

  // BORDER COLOR
  const handleborderColor = useCallback((value) => setborderColor(value), []);

  // BORDER HOVER COLOR
  const handlebordeHoverColor = useCallback(
    (value) => setradiusColor(value),
    []
  );
  // COLOR CHANGE HANDLES END

  // TEMPLATE DATA START
  const handleChange = (key) => {
    setValue(key);
    var currentData;
    switch (key) {
      case 1:
        currentData = TemplateStyle.template_1;
        break;
      case 2:
        currentData = TemplateStyle.template_2;
        break;
      case 3:
        currentData = TemplateStyle.template_3;
        break;
      case 4:
        currentData = TemplateStyle.template_4;
        break;

      default:
        currentData = TemplateStyle.current_template;
        break;
    }
    // console.log(currentData);
    setEnable(TemplateStyle.add_to_cart_sticky);
    setCheckDesktop(currentData.general_settings.desktop);
    setCheckMobile(currentData.general_settings.mobile);
    setFontFamily(currentData.general_settings.font_family);
    setFontSizeValue(currentData.general_settings.font_size);
    setBold(currentData.general_settings.font_bold);
    setItalic(currentData.general_settings.font_italic);
    setUnderLine(currentData.general_settings.font_underline);
    setTitleColor(currentData.general_settings.font_title_color);
    setHeightValue(currentData.general_settings.font_height);
    setpriceColor(currentData.general_settings.font_price_color);
    setbgColor(currentData.general_settings.font_bg_color);
    setEditText(currentData.buy_btn_settings.edit_text);
    setSoldOut(currentData.buy_btn_settings.sold_out);
    setUnavailable(currentData.buy_btn_settings.unavailable);
    setButtonHeightValue(currentData.buy_btn_settings.btn_height);
    setWidthValue(currentData.buy_btn_settings.btn_width);
    setFontSizeValue(currentData.buy_btn_settings.btn_size);
    setBoldButton(currentData.buy_btn_settings.btn_bold);
    setItalicButton(currentData.buy_btn_settings.btn_italic);
    setUnderLine(currentData.buy_btn_settings.btn_underline);
    setbtnTextColor(currentData.buy_btn_settings.btn_text_color);
    setbtnBGColor(currentData.buy_btn_settings.btn_bg_color);
    settexthoverColor(currentData.buy_btn_settings.btn_text_hover_color);
    setbgHoverColor(currentData.buy_btn_settings.btn_bg_hover_color);
    setBorder(currentData.buy_btn_settings.btn_border);
    setRadius(currentData.buy_btn_settings.btn_border_radius);
    setborderColor(currentData.buy_btn_settings.btn_border_color);
    setradiusColor(currentData.buy_btn_settings.btn_border_hover_color);
  };
  // TEMPLATE DATA END

  // DASHBOARD REDIRECT START
  const handleClick = (data) => {
    navigate("/");
  };
  // DASHBOARD REDIRECT END

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
                            label={`${FontSizeValue} px`}
                            value={FontSizeValue}
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
                <Button primary>Save</Button>
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
