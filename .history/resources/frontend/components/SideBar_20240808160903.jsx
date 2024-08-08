import React, { useState } from "react";
import DesignSettings from "./DesignSettings/DesignSettings";
import GeneralSettings from "./GeneralSettings/GeneralSettings";
import { Badge, BlockStack, Button, Card } from "@shopify/polaris";
import "../css/index.css";

export function SideBar(props) {
    const handleCallback = (e) => {
        props.dataCallback(e);
    };

    return (
        <BlockStack gap="400">
            <Card sectioned>
                <GeneralSettings
                    callback={handleCallback}
                    position={props.position}
                    homePageProduct={props.homePageProduct}
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
                    gsNotificationBarText={props.gsNotificationBarText}
                    containerHeight={props.containerHeight}
                    animationEnable={props.animationEnable}
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
                    homePageProduct={props.homePageProduct}
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
                    gsNotificationBarText={props.gsNotificationBarText}
                    containerHeight={props.containerHeight}
                    animationEnable={props.animationEnable}
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
        </BlockStack>
    );
}
