import React, { useState } from "react";
import { StickyIconSettings } from "./StickyIconSettings.jsx";
import {
    ChevronRightMinor,
    BuyButtonMajor,
    SettingsMinor,
} from "@shopify/polaris-icons";
import "../css/index.css";
import { Button, Card, Icon, Layout } from "@shopify/polaris";

function StickyIconSideBar(props) {
    const [menu, setMenu] = useState("0");
    const [enableSticky, setEnableSticky] = useState(props.enable);
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
                                    Sticky cart is
                                    <b>
                                        {enableSticky === true
                                            ? " Enabled"
                                            : " Disabled"}
                                    </b>
                                </span>
                                {/* <div className="show_cart_btn"> */}
                                <Button
                                    primary
                                    onClick={() => {
                                        handleEnable(enableSticky);
                                    }}
                                >
                                    {enableSticky === true
                                        ? "Disable"
                                        : "Enable"}
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
    return <div>StickyIconSideBar</div>;
}

export default StickyIconSideBar;
