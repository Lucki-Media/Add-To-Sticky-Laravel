import React, { useState } from "react";
import DesignSettings from "./DesignSettings/DesignSettings";
import GeneralSettings from "./GeneralSettings/GeneralSettings";
import { Badge, Button, Card } from "@shopify/polaris";
import Switch from "react-switch";
import "../css/index.css";

export function SideBar() {
    const [isChecked, setChecked] = useState(false);

    const handleSwitchChange = (checked) => {
        setChecked(checked);
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
