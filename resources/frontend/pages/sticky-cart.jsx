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
} from "@shopify/polaris";
import "../css/index.css";
import { useNavigate } from "react-router-dom";
import { ChevronLeftMinor } from "@shopify/polaris-icons";
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
  const navigate = useNavigate();

  const [enable, setEnable] = useState(true);
  const [value, setValue] = useState(1);
  const [selected, setSelected] = useState("1");
  const [rangeValue, setRangeValue] = useState(60);
  const [countNumber, setCountNumber] = useState(1);
  const [countValue, setCountValue] = useState(16);
  const [countHover, setCountHover] = useState(false);
  const [countFontValue, setCountFontValue] = useState(14);
  const [iconValue, setIconValue] = useState(20);
  const [iconHover, setIconHover] = useState(false);
  const [bgColor, setbgColor] = useState(
    defaultSticky.bg_color ? defaultSticky.bg_color : "rgba(0, 0, 0, 0)"
  );
  const [bgHoverColor, setbgHoverColor] = useState(
    defaultSticky.bg_hover_color
      ? defaultSticky.bg_hover_color
      : "rgba(0, 0, 0, 0)"
  );
  const [borderValue, setBorder] = useState(1);
  const [borderColor, setborderColor] = useState(
    defaultSticky.border_color ? defaultSticky.border_color : "rgba(0, 0, 0, 0)"
  );
  const [radiusColor, setradiusColor] = useState(
    defaultSticky.border_hover_color
      ? defaultSticky.border_hover_color
      : "rgba(0, 0, 0, 0)"
  );
  const [iconColor, setIconColor] = useState(
    defaultSticky.icon_color ? defaultSticky.icon_color : "rgba(0, 0, 0, 0)"
  );
  const [iconHoverColor, setIconHoverColor] = useState(
    defaultSticky.icon_hover_color
      ? defaultSticky.icon_hover_color
      : "rgba(0, 0, 0, 0)"
  );
  const [CountColor, setCountColor] = useState(
    defaultSticky.count_color ? defaultSticky.count_color : "rgba(0, 0, 0, 0)"
  );
  const [countHoverColor, setCountHoverColor] = useState(
    defaultSticky.count_hover_color
      ? defaultSticky.count_hover_color
      : "rgba(0, 0, 0, 0)"
  );
  const [countBGColor, setCountBGColor] = useState(
    defaultSticky.countBG_color
      ? defaultSticky.countBG_color
      : "rgba(0, 0, 0, 0)"
  );
  const [countBGHoverColor, setCountBGHoverColor] = useState(
    defaultSticky.countBG_hover_color
      ? defaultSticky.countBG_hover_color
      : "rgba(0, 0, 0, 0)"
  );
  const [editTop, setEditTop] = useState(20);
  const [editRight, setEditRight] = useState(1);
  const [editLeft, setEditLeft] = useState(0);
  const [editBottom, setEditBottom] = useState(0);
  const [check, setCheck] = useState(false);

  const handleClick = (data) => {
    navigate("/");
  };

  // USE EFFECT
  useEffect(() => {
    console.log(defaultSticky);
    setEnable(defaultSticky.enable_sticky);
    setValue(defaultSticky.default_template);
    setSelected(defaultSticky.action_value);
    setRangeValue(defaultSticky.main_size);
    setbgColor(defaultSticky.bg_color);
    setbgHoverColor(defaultSticky.bg_hover_color);
    setBorder(defaultSticky.border_size);
    setborderColor(defaultSticky.border_color);
    setradiusColor(defaultSticky.border_hover_color);
    setEditTop(defaultSticky.pos_top);
    setEditBottom(defaultSticky.pos_bottom);
    setEditLeft(defaultSticky.pos_left);
    setEditRight(defaultSticky.pos_right);
    setIconValue(defaultSticky.icon_size);
    setIconColor(defaultSticky.icon_color);
    setIconHoverColor(defaultSticky.icon_hover_color);
    setCheck(defaultSticky.enable_count);
    setCountNumber(defaultSticky.count_num);
    setCountValue(defaultSticky.count_size);
    setCountFontValue(defaultSticky.count_font_size);
    setCountColor(defaultSticky.count_color);
    setCountHoverColor(defaultSticky.count_hover_color);
    setCountBGColor(defaultSticky.countBG_color);
    setCountBGHoverColor(defaultSticky.countBG_hover_color);
  }, []);

  //GENERAL SETTING START
  // ACTION
  const handleSelectChange = useCallback((value) => setSelected(value), []);
  const options = [
    { label: "Go to Cart", value: "1" },
    { label: "Go to Checkout", value: "2" },
  ];

  //SIZE
  const handleRangeSliderChange = useCallback(
    (value) => setRangeValue(value),
    []
  );

  // BG COLOR
  const handleBGColor = useCallback((value) => setbgColor(value), []);

  // BG HOVER COLOR
  const handleBGHoverColor = useCallback((value) => setbgHoverColor(value), []);

  // BORDER SIZE
  const handleBorderSliderChange = useCallback((value) => setBorder(value), []);

  // BORDER COLOR
  const handleBorderColor = useCallback((value) => setborderColor(value), []);

  // BORDER HOVER COLOR
  const handleBorderHoverColor = useCallback(
    (value) => setradiusColor(value),
    []
  );

  //GENERAL SETTING RND

  //POSITION START
  //TOP
  const handleEditTopField = (value) => {
    setEditTop(value);
  };
  // const handleEditTopField = useCallback((value) => setEditTop(value), []);

  //LEFT
  const handleEditLeftField = useCallback((value) => setEditLeft(value), []);

  //BOTTOM
  const handleEditBottomField = useCallback(
    (value) => setEditBottom(value),
    []
  );

  //RIGHT
  const handleEditRightField = useCallback((value) => setEditRight(value), []);
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
    (value) => setIconValue(value),
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
  const handlecheckbox = useCallback((newChecked) => setCheck(newChecked), []);

  // COUNT SIZE
  const handleCountSliderChange = useCallback(
    (value) => setCountValue(value),
    []
  );
  // COUNT FONT
  const handleCountFontSliderChange = useCallback(
    (value) => setCountFontValue(value),
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
  const handleBGCountColor = useCallback((value) => setCountBGColor(value), []);

  // COUNT BG HOVER COLOR
  const handleBGCountHoverColor = useCallback(
    (value) => setCountBGHoverColor(value),
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
    setEnable(!value);
  };

  //ICON SELECT
  const handleChange = (key) => {
    setValue(key);
  };

  return (
    <>
      {enable === true ? (
        <div className="main_sticky___div">
          <div
            className="stickyCart__icon"
            style={{
              position: "absolute",
              fontSize: iconValue,
              color: iconHover ? iconHoverColor : iconColor,
              border: iconHover
                ? borderValue + "px solid " + radiusColor
                : borderValue + "px solid " + borderColor,
              background: iconHover ? bgHoverColor : bgColor,
              height: rangeValue,
              width: rangeValue,
              top: editTop === 0 ? "" : editTop + "%",
              bottom: editBottom === 0 ? "" : editBottom + "%",
              left: editLeft === 0 ? "" : editLeft + "%",
              right: editRight === 0 ? "" : editRight + "%",
            }}
            onMouseEnter={handleIconEnter}
            onMouseLeave={handleIconLeave}
          >
            {check === true ? (
              <span
                className="sticky_Count"
                style={{
                  background: countHover ? countBGHoverColor : countBGColor,
                  width: countValue,
                  height: countValue,
                  fontSize: countFontValue,
                  color: countHover ? countHoverColor : CountColor,
                }}
                onMouseEnter={handleCountEnter}
                onMouseLeave={handleCountLeave}
              >
                {countNumber}
              </span>
            ) : (
              ""
            )}
            {value === 1 ? <FontAwesomeIcon icon={faCartShopping} /> : ""}
            {value === 2 ? <FontAwesomeIcon icon={faCartPlus} /> : ""}
            {value === 3 ? <FontAwesomeIcon icon={faCartArrowDown} /> : ""}
            {value === 4 ? <FontAwesomeIcon icon={faBasketShopping} /> : ""}
            {value === 5 ? <FontAwesomeIcon icon={faBagShopping} /> : ""}
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="topbar_title">LM ADD TO CART STICKY</div>
      <div className="main_app_page">
        <Page>
          <Layout>
            <Layout.Section oneThird>
              <div className="dashboard_tag" onClick={handleClick}>
                <Icon source={ChevronLeftMinor} color="base" /> Dashboard
              </div>
              <div className="sidebar_title">Sticky cart</div>
              {/* cart enable disable card */}
              <Scrollable style={{ height: "700px" }} horizontal={false}>
                <div className="show_stickyCart">
                  <Card sectioned>
                    <span className="show_sticky_span">
                      Sticky cart is
                      <b>{enable === true ? " Enabled" : " Disabled"}</b>
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

                  {/* GENERAL SETTING */}
                  <span className="display_setting_title">
                    GENERAL SETTING{" "}
                  </span>
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

                    {/* Size */}
                    <div className="style__wrapper_div">
                      <span className="display_setting_subtitle">Size</span>
                      <div className="font_picker_popup">
                        <RangeSlider
                          label={`${rangeValue} px`}
                          value={rangeValue}
                          min={10}
                          max={100}
                          onChange={handleRangeSliderChange}
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
                          defaultColor={bgColor}
                          onChildResult={handleBGColor}
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
                          onChildResult={handleBGHoverColor}
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
                          label={`${borderValue} px`}
                          value={borderValue}
                          min={0}
                          max={10}
                          onChange={handleBorderSliderChange}
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
                          onChildResult={handleBorderColor}
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
                          onChildResult={handleBorderHoverColor}
                        />
                      </div>
                    </div>
                  </Card>

                  {/* POSITION */}
                  <span className="display_setting_title">POSITION </span>
                  <Card sectioned>
                    {/* Top */}
                    <div className="style__wrapper_div">
                      <span className="display_setting_subtitle">Top</span>
                      <div className="font_picker_popup">
                        <RangeSlider
                          label={`${editTop}%`}
                          value={editTop}
                          min={0}
                          max={100}
                          onChange={handleEditTopField}
                          output
                        />
                      </div>
                    </div>

                    {/* Left */}
                    <div className="style__wrapper_div">
                      <span className="display_setting_subtitle">Left</span>
                      <div className="font_picker_popup">
                        <RangeSlider
                          label={`${editLeft}%`}
                          value={editLeft}
                          min={0}
                          max={100}
                          onChange={handleEditLeftField}
                          output
                        />
                      </div>
                    </div>

                    {/* Bottom */}
                    <div className="style__wrapper_div">
                      <span className="display_setting_subtitle">Bottom</span>
                      <div className="font_picker_popup">
                        <RangeSlider
                          label={`${editBottom}%`}
                          value={editBottom}
                          min={0}
                          max={100}
                          onChange={handleEditBottomField}
                          output
                        />
                      </div>
                    </div>

                    {/* Right */}
                    <div className="style__wrapper_div">
                      <span className="display_setting_subtitle">Right</span>
                      <div className="font_picker_popup">
                        <RangeSlider
                          label={`${editRight}%`}
                          value={editRight}
                          min={0}
                          max={100}
                          onChange={handleEditRightField}
                          output
                        />
                      </div>
                    </div>
                  </Card>

                  {/* ICON */}
                  <span className="display_setting_title">ICON </span>
                  <Card sectioned>
                    {/* Icon Size */}
                    <div className="style__wrapper_div">
                      <span className="display_setting_subtitle">
                        Icon Size
                      </span>
                      <div className="font_picker_popup">
                        <RangeSlider
                          label={`${iconValue} px`}
                          value={iconValue}
                          min={11}
                          max={50}
                          onChange={handleIconSliderChange}
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
                          defaultColor={iconColor}
                          onChildResult={handleIconColor}
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
                          defaultColor={iconHoverColor}
                          onChildResult={handleIconHoverColor}
                        />
                      </div>
                    </div>
                  </Card>

                  {/* CART COUNT */}
                  <span className="display_setting_title">CART COUNT </span>

                  <Card sectioned>
                    {/* Enable COUNT */}
                    <div className="style__wrapper_div">
                      <Checkbox
                        label="Enable"
                        checked={check}
                        onChange={handlecheckbox}
                      />
                    </div>

                    {/* Size */}
                    <div className="style__wrapper_div">
                      <span className="display_setting_subtitle">Size</span>
                      <div className="font_picker_popup">
                        <RangeSlider
                          label={`${countValue} px`}
                          value={countValue}
                          min={8}
                          max={40}
                          onChange={handleCountSliderChange}
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
                          label={`${countFontValue} px`}
                          value={countFontValue}
                          min={8}
                          max={40}
                          onChange={handleCountFontSliderChange}
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
                          defaultColor={CountColor}
                          onChildResult={handleCountColor}
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
                          defaultColor={countHoverColor}
                          onChildResult={handleCountHoverColor}
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
                          defaultColor={countBGColor}
                          onChildResult={handleBGCountColor}
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
                          defaultColor={countBGHoverColor}
                          onChildResult={handleBGCountHoverColor}
                        />
                      </div>
                    </div>
                  </Card>
                </div>
              </Scrollable>
            </Layout.Section>
            <Layout.Section>
              <div className="save_template_btn">
                <Button primary>Save</Button>
              </div>
              <Card sectioned>
                <div className="template___Card">
                  Choose the sticky cart template
                </div>
                <div className="">
                  {stickyData.map((item) => (
                    <div className="sticky_child" key={item.key}>
                      <div>
                        <RadioButton
                          label={item.label}
                          id={item.key}
                          checked={value === item.key}
                          name="stickyCart"
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
