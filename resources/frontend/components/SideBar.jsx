import React from "react";
import DesignSettings from "./DesignSettings.jsx/DesignSettings";
import GeneralSettings from "./GeneralSettings/GeneralSettings";
import { Button, Card } from "@shopify/polaris";

export function SideBar() {
    return (
        <div>
            <Card sectioned>
                <div className="setting_title">
                    <span className="show_sticky_span">
                        Add To Cart Sticky is{" "}
                        {/* <b>{enable === true ? "Enabled" : "Disabled"}</b>{" "} */}
                    </span>
                    {/* <div className="show_cart_btn"> */}
                    <Button
                        primary
                        // onClick={() => {
                        //     handleEnable(enable);
                        // }}
                    >
                        {/* {enable === true ? "Disable" : "Enable"} */}
                    </Button>
                </div>
            </Card>
            <Card sectioned>
                <GeneralSettings />
            </Card>
            <Card sectioned>
                <DesignSettings />
            </Card>
            <Card sectioned>
                <DesignSettings />
            </Card>
            <Card sectioned>
                <DesignSettings />
            </Card>
            <Card sectioned>
                <DesignSettings />
            </Card>
            <Card sectioned>
                <DesignSettings />
            </Card>
            <Card sectioned>
                <DesignSettings />
            </Card>
            <Card sectioned>
                <DesignSettings />
            </Card>
            <Card sectioned>
                <DesignSettings />
            </Card>
            <Card sectioned>
                <DesignSettings />
            </Card>
            <Card sectioned>
                <DesignSettings />
            </Card>
            <Card sectioned>
                <DesignSettings />
            </Card>
            <Card sectioned>
                <DesignSettings />
            </Card>
            <Card sectioned>
                <DesignSettings />
            </Card>
            <Card sectioned>
                <DesignSettings />
            </Card>
            <Card sectioned>
                <DesignSettings />
            </Card>
            <Card sectioned>
                <DesignSettings />
            </Card>
            <Card sectioned>
                <DesignSettings />
            </Card>
            <Card sectioned>
                <DesignSettings />
            </Card>
            <Card sectioned>
                <DesignSettings />
            </Card>
            <Card sectioned>
                <DesignSettings />
            </Card>
            <Card sectioned>
                <DesignSettings />
            </Card>
            <Card sectioned>
                <DesignSettings />
            </Card>
            <Card sectioned>
                <DesignSettings />
            </Card>
            <Card sectioned>
                <DesignSettings />
            </Card>
            <Card sectioned>
                <DesignSettings />
            </Card>
            <Card sectioned>
                <DesignSettings />
            </Card>
            <Card sectioned>
                <DesignSettings />
            </Card>
            <Card sectioned>
                <DesignSettings />
            </Card>
        </div>
    );
}
