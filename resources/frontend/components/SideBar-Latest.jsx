import React, { useEffect, useState } from "react";
import { GeneralSettings } from "./GeneralSettings.jsx";
import { BuyNowSettings } from "./BuyNowSettings.jsx";
import {
    ChevronRightMinor,
    BuyButtonMajor,
    SettingsMinor,
} from "@shopify/polaris-icons";
import "../css/index.css";
import { Button, Card, Icon, Layout } from "@shopify/polaris";
export function SideBar(props) {
    const [menu, setMenu] = useState("0");
    const [enable, setEnable] = useState(props.enable);
    const [animationEnable, setAnimationEnable] = useState(props.animationEnable);
    const navigateToSubMenu = (submenu) => {
        setMenu(submenu);
        props.OnMenuReturn(submenu);
    };
    useEffect(() => {
        handleCallback(props);
    }, [enable, animationEnable]);

    const handleCallback = (e) => {
        props.dataCallback({
            enable: enable,
            animationEnable: animationEnable,
            //GENERAL
            position: e.position,
            checkDesktop: e.checkDesktop,
            checkMobile: e.checkMobile,
            containerHeight: e.containerHeight,
            gsAction: e.gsAction,
            gsBgColor: e.gsBgColor,
            gsBold: e.gsBold,
            gsDisplayCondition: e.gsDisplayCondition,
            gsFontFamily: e.gsFontFamily,
            gsFontsize: e.gsFontsize,
            gsItalic: e.gsItalic,
            gsOffsetValue: e.gsOffsetValue,
            gsPriceColor: e.gsPriceColor,
            gsPriceFontsize: e.gsPriceFontsize,
            gsTitleColor: e.gsTitleColor,
            gsUnderline: e.gsUnderline,
            //BUYNOW
            editText: e.editText,
            unavailable: e.unavailable,
            btnWidthValue: e.btnWidthValue,
            btnheightValue: e.btnheightValue,
            btnFontsize: e.btnFontsize,
            btnBorderThickness: e.btnBorderThickness,
            btnBorderRadius: e.btnBorderRadius,
            btnBold: e.btnBold,
            btnItalic: e.btnItalic,
            btnUnderline: e.btnUnderline,
            btnTextColor: e.btnTextColor,
            btnBgColor: e.btnBgColor,
            btnTexthoverColor: e.btnTexthoverColor,
            btnBgHoverColor: e.btnBgHoverColor,
            btnBorderColor: e.btnBorderColor,
            btnBorderHoverColor: e.btnBorderHoverColor,
        });
    };

    /*ENABLE BUTTON START*/
    const handleEnable = (value) => {
        setEnable(!value);
    };
    /*ENABLE BUTTON END*/

    /*ENABLE ANIMATION BUTTON START*/
    const handleAnimationEnable = (value) => {
        setAnimationEnable(!value);
    };
    /*ENABLE ANIMATION BUTTON END*/

    const renderOptions = () => (
        <div>
            <div className="general_setting_title">
                <Layout>
                    <Layout.Section>
                        <Card sectioned>
                            <div className="setting_title">
                                <span className="show_sticky_span">
                                    Add To Cart Sticky is{" "}
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
                                    {enable === true ? "Disable" : "Enable"}
                                </Button>
                            </div>
                        </Card>
                    </Layout.Section>
                </Layout>
            </div>
            <div className="general_setting_title">
                <Layout>
                    <Layout.Section>
                        <Card sectioned>
                            <div className="setting_title">
                                <span className="show_sticky_span">
                                    Buy Now Button Animation is{" "}
                                    <b>
                                        {animationEnable === true
                                            ? "Enabled"
                                            : "Disabled"}
                                    </b>{" "}
                                </span>
                                {/* <div className="show_cart_btn"> */}
                                <Button
                                    primary
                                    onClick={() => {
                                        handleAnimationEnable(animationEnable);
                                    }}
                                >
                                    {animationEnable === true ? "Disable" : "Enable"}
                                </Button>
                            </div>
                        </Card>
                    </Layout.Section>
                </Layout>
            </div>
            <div
                className="general_setting_title"
                onClick={() => navigateToSubMenu("1")}
            >
                <Layout>
                    <Layout.Section>
                        <Card sectioned>
                            <div className="setting_title">
                                <div style={{ display: "flex" }}>
                                    <Icon source={SettingsMinor} />
                                    <span className="show_sticky_span">
                                        General Settings
                                    </span>
                                </div>
                                <span>
                                    {<Icon source={ChevronRightMinor} />}
                                </span>
                            </div>
                        </Card>
                    </Layout.Section>
                </Layout>
            </div>
            <div
                className="general_setting_title"
                onClick={() => navigateToSubMenu("2")}
            >
                <Layout>
                    <Layout.Section>
                        <Card sectioned>
                            <div className="setting_title">
                                <div style={{ display: "flex" }}>
                                    <Icon source={BuyButtonMajor} />
                                    <span className="show_sticky_span">
                                        Buy Now Settings
                                    </span>
                                </div>
                                <span>
                                    {<Icon source={ChevronRightMinor} />}
                                </span>
                            </div>
                        </Card>
                    </Layout.Section>
                </Layout>
            </div>
        </div>
    );

    return (
        <div style={{ marginTop: "26px" }}>
            <div>
                <Layout>
                    <Layout.Section oneThird>
                        {menu === "0" && renderOptions()}

                        {menu === "1" && (
                            <GeneralSettings
                                OnReturnToSidebar={navigateToSubMenu}
                                enable={enable}
                                animationEnable={animationEnable}
                                //GENERAL
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
                                //BUYNOW
                                editText={props.editText}
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
                                callback={handleCallback}
                            />
                        )}

                        {menu === "2" && (
                            <BuyNowSettings
                                OnReturnToSidebar={navigateToSubMenu}
                                enable={enable}
                                animationEnable={animationEnable}
                                //GENERAL
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
                                //BUYNOW
                                editText={props.editText}
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
                                callback={handleCallback}
                            />
                        )}
                    </Layout.Section>
                </Layout>
            </div>
        </div>
    );
}
