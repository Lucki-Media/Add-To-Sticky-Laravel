import React, { useState } from "react";
import { GeneralSettings } from "./GeneralSettings.jsx";
import { BuyNowSettings } from "./BuyNowSettings.jsx";
import {
    ChevronRightMinor,
    BuyButtonMajor,
    SettingsMinor,
} from "@shopify/polaris-icons";
import "../css/index.css";
import { SiderBarSettings } from "../StaticData/sidebarData.js";
import { Button, Card, Icon, Layout } from "@shopify/polaris";
export function SideBar(props) {
    const [menu, setMenu] = useState("0");
    const [enable, setEnable] = useState(props.enable);
    const navigateToSubMenu = (submenu) => {
        setMenu(submenu);
        props.OnMenuReturn(submenu);
    };

    const handleCallback = (e) => {
        props.dataCallback(e);
    };

    /*ENABLE BUTTON START*/
    const handleEnable = (value) => {
        setEnable(!value);
    };
    /*ENABLE BUTTON END*/

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
                                enable={enable}
                                callback={handleCallback}
                            />
                        )}

                        {menu === "2" && (
                            <BuyNowSettings
                                OnReturnToSidebar={navigateToSubMenu}
                                // json_style_data={props.json_style_data}
                                callback={handleCallback}
                            />
                        )}
                    </Layout.Section>
                </Layout>
            </div>
        </div>
    );
}
