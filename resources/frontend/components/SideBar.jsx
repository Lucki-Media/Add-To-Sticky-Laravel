import React, { useState } from "react";
import DesignSettings from "./DesignSettings/DesignSettings";
import GeneralSettings from "./GeneralSettings/GeneralSettings";
import { Badge, Button, Card } from "@shopify/polaris";
import Switch from "react-switch";
import "../css/index.css";

export function SideBar(props) {
    const [isChecked, setChecked] = useState(false);

    const handleSwitchChange = (checked) => {
        setChecked(checked);
    };

    const handleCallback = (e) => {
        props.dataCallback(e);
    };
    return (
        <div>
            <Card sectioned>
                <div className="setting_title">
                    <span className="show_sticky_span">
                        Sticky Add To Cart is{" "}
                        {isChecked ? (
                            <span className="lm_sticky_custom_badge_success">
                                <Badge tone="success">Enabled</Badge>
                            </span>
                        ) : (
                            <span className="lm_sticky_custom_badge_critical">
                                <Badge tone="critical">Disabled</Badge>
                            </span>
                        )}
                        {/* <b>{enable === true ? "Enabled" : "Disabled"}</b>{" "} */}
                    </span>
                    <Switch
                        onChange={handleSwitchChange}
                        checked={isChecked}
                        uncheckedIcon={null}
                        checkedIcon={null}
                    />
                </div>
            </Card>
            <Card sectioned>
                <GeneralSettings
                    callback={handleCallback}
                    position={props.position}
                    checkMobile={props.checkMobile}
                    checkDesktop={props.checkDesktop}
                    gsBold={props.gsBold}
                    gsFontsize={props.gsFontsize}
                    gsPriceFontsize={props.gsPriceFontsize}
                    gsItalic={props.gsItalic}
                    gsUnderline={props.gsUnderline}
                    gsFontFamily={props.gsFontFamily}
                    gsTitleColor={props.gsTitleColor}
                    gsPriceColor={props.gsPriceColor}
                    gsBgColor={props.gsBgColor}
                    gsOffsetValue={props.gsOffsetValue}
                    gsAction={props.gsAction}
                    gsDisplayCondition={props.gsDisplayCondition}
                    containerHeight={props.containerHeight}
                    enable={props.enable}
                    animationEnable={props.animationEnable}
                    buyNowSettings={props.buyNowSettings}
                    editText={props.editText}
                    // soldOut={props.soldOut}
                    unavailable={props.unavailable}
                    btnWidthValue={props.btnWidthValue}
                    btnheightValue={props.btnheightValue}
                    btnFontsize={props.btnFontsize}
                    btnBorderThickness={props.btnBorderThickness}
                    btnBorderRadius={props.btnBorderRadius}
                    btnBold={props.btnBold}
                    btnItalic={props.btnItalic}
                    btnUnderline={props.btnUnderline}
                    btnTextColor={props.btnTextColor}
                    btnBgColor={props.btnBgColor}
                    btnTexthoverColor={props.btnTexthoverColor}
                    btnBgHoverColor={props.btnBgHoverColor}
                    btnBorderColor={props.btnBorderColor}
                    btnBorderHoverColor={props.btnBorderHoverColor}
                />
            </Card>
            <Card sectioned>
                <DesignSettings
                    callback={handleCallback}
                    position={props.position}
                    checkMobile={props.checkMobile}
                    checkDesktop={props.checkDesktop}
                    gsBold={props.gsBold}
                    gsFontsize={props.gsFontsize}
                    gsPriceFontsize={props.gsPriceFontsize}
                    gsItalic={props.gsItalic}
                    gsUnderline={props.gsUnderline}
                    gsFontFamily={props.gsFontFamily}
                    gsTitleColor={props.gsTitleColor}
                    gsPriceColor={props.gsPriceColor}
                    gsBgColor={props.gsBgColor}
                    gsOffsetValue={props.gsOffsetValue}
                    gsAction={props.gsAction}
                    gsDisplayCondition={props.gsDisplayCondition}
                    containerHeight={props.containerHeight}
                    enable={props.enable}
                    animationEnable={props.animationEnable}
                    buyNowSettings={props.buyNowSettings}
                    editText={props.editText}
                    // soldOut={props.soldOut}
                    unavailable={props.unavailable}
                    btnWidthValue={props.btnWidthValue}
                    btnheightValue={props.btnheightValue}
                    btnFontsize={props.btnFontsize}
                    btnBorderThickness={props.btnBorderThickness}
                    btnBorderRadius={props.btnBorderRadius}
                    btnBold={props.btnBold}
                    btnItalic={props.btnItalic}
                    btnUnderline={props.btnUnderline}
                    btnTextColor={props.btnTextColor}
                    btnBgColor={props.btnBgColor}
                    btnTexthoverColor={props.btnTexthoverColor}
                    btnBgHoverColor={props.btnBgHoverColor}
                    btnBorderColor={props.btnBorderColor}
                    btnBorderHoverColor={props.btnBorderHoverColor}
                />
            </Card>
        </div>
    );
}
