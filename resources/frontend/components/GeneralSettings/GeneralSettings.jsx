import { Card, Checkbox, Select, TextField } from "@shopify/polaris";
import React, { useCallback, useState } from "react";
import "../../css/index.css";

function GeneralSettings() {
    const [selected, setSelected] = useState("today");
    const [checkMobile, setCheckMobile] = useState("");
    const [checkDesktop, setCheckDesktop] = useState("");
    const [gsAction, setGsAction] = useState();
    const [gsDisplayCondition, setGsDisplayCondition] = useState();

    const handleSelectChange = useCallback((value) => setSelected(value), []);

    const options = [
        { label: "Style 1", value: "style_1" },
        { label: "Style 2", value: "style_2" },
        { label: "Style 3", value: "style_3" },
        { label: "Style 4", value: "style_4" },
        { label: "Style 5", value: "style_5" },
        { label: "Style 6", value: "style_6" },
        { label: "Style 7", value: "style_7" },
        { label: "Style 8", value: "style_8" },
    ];
    /*DISPLAY SETTING START GENERAL SETTINGS*/
    const handlecheckboxMobile = useCallback(
        (newChecked) => setCheckMobile(newChecked),
        []
    );

    const handlecheckboxDesktop = useCallback(
        (newChecked) => setCheckDesktop(newChecked),
        []
    );
    /*DISPLAY SETTING END GENERAL SETTINGS*/

    /*ACTION GENERAL SETTINGS*/
    const handleSelectGSChange = useCallback((value) => setGsAction(value), []);
    const optionsGS = [
        { label: "Go to Cart", value: "1" },
        { label: "Go to Checkout", value: "2" },
    ];

    /*DISPLAY CONDITION GENERAL SETTINGS*/
    const handleConditionChange = useCallback(
        (value) => setGsDisplayCondition(value),
        []
    );
    const conditions = [
        { label: "Always show", value: "1" },
        {
            label: "Only when add to cart is not visible",
            value: "2",
        },
        {
            label: "Only when user has scrolled down and surpassed the 'Add to cart' button",
            value: "3",
        },
    ];
    /*DISPLAY SETTING START GENERAL SETTINGS*/
    return (
        <div>
            <Card.Subsection>
                <Text variant="h1">General Settings</Text>
            </Card.Subsection>
            <Card.Subsection>
                <Select
                    label="Select Template"
                    options={options}
                    onChange={handleSelectChange}
                    value={selected}
                />
            </Card.Subsection>
            <Card.Subsection>
                <span className="display_setting_subtitle">
                    Device Settings
                </span>
                <div className="style__wrapper_div">
                    <Checkbox
                        label="Desktop"
                        checked={checkDesktop}
                        onChange={handlecheckboxDesktop}
                    />
                    <Checkbox
                        label="Mobile"
                        checked={checkMobile}
                        onChange={handlecheckboxMobile}
                    />
                </div>
            </Card.Subsection>
            <Card.Subsection>
                <Select
                    label="Button Action onclick"
                    options={optionsGS}
                    onChange={handleSelectGSChange}
                    value={gsAction}
                />
            </Card.Subsection>
            <Card.Subsection>
                <Select
                    label="Display Condition"
                    options={conditions}
                    onChange={handleConditionChange}
                    value={gsDisplayCondition}
                />
            </Card.Subsection>
        </div>
    );
}

export default GeneralSettings;
