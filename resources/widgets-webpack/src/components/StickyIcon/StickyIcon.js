import React, { useEffect, useState } from "react";
import styles from "./lmquotebtn.module.css";
import { useCookies } from "react-cookie";
import defaultSticky from "./defaultSticky";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartArrowDown,
  faCartPlus,
  faCartShopping,
  faBasketShopping,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import cart from "shopify-cartjs";
const StickyIcon = (props) => {
  // const navigate = useNavigate();
  const [enable, setEnable] = useState(true);
  const [value, setValue] = useState(1);
  const [selected, setSelected] = useState("1");
  const [rangeValue, setRangeValue] = useState(60);
  const [countNumber, setCountNumber] = useState(countNumber ? countNumber : 0);
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
  const [count, setCount] = useState("0");
  const [cookies, setCookie, removeCookie] = useCookies("LM_Quote_sessionId");
  // const handleClick = (data) => {
  //   navigate("/");
  // };
  useEffect(() => {
    // console.log(cart.updateItem());
    /* CART COUNT API CALL START*/
    const getCartCount = async () => {
      const res = axios
        .get("https://" + window.location.host + "/cart.json")
        .then((response) => {
          setCountNumber(response.data.item_count);
        });
    };
    /* CART COUNT API CALL END*/
    /*ADDING EVENT LISTENER TO UPDATE CART COUNT START*/
    if (window.meta.page.pageType === "product") {
      document
        .querySelectorAll(".lm-quote-add-to-cart-q78er")
        .forEach((button) => {
          button.addEventListener("click", () => {
            setTimeout(function () {
              getCartCount();
            }, 1000);
          });
        });
    }
    /*ADDING EVENT LISTENER TO UPDATE CART COUNT END*/
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
    // setCountNumber(defaultSticky.count_num);
    setCountValue(defaultSticky.count_size);
    setCountFontValue(defaultSticky.count_font_size);
    setCountColor(defaultSticky.count_color);
    setCountHoverColor(defaultSticky.count_hover_color);
    setCountBGColor(defaultSticky.countBG_color);
    setCountBGHoverColor(defaultSticky.countBG_hover_color);
    getCartCount();
  }, [countNumber]);
  // ICON STYLE START
  // ICON HOVER
  const handleIconEnter = () => {
    setIconHover(true);
  };

  const handleIconLeave = () => {
    setIconHover(false);
  };

  // COUNT HOVER
  const handleCountEnter = () => {
    setCountHover(true);
  };

  const handleCountLeave = () => {
    setCountHover(false);
  };
  // COUNT END

  return (
    <div>
      <div className={styles.main_sticky___div}>
        <div
          className={styles.stickyCart__icon}
          style={{
            position: "fixed",
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
              className={styles.sticky_Count}
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
    </div>
  );
};

export default StickyIcon;
