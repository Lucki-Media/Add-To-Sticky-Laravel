import React from "react";
import "./index.module.css";

function LoginPrice() {
    if (window.LMSettingsScript.hide_price_settings.hide_price === "3") {
        return (
            <div>
                <button
                    title="Submit"
                    className="btn button preference-btn lm_add_to_quote_button"
                    style={{
                        background: `${window.LMSettingsScript.hide_price_settings.quote_btn_bg}`,
                        colour: `${window.LMSettingsScript.hide_price_settings.quote_btn_txt}`,
                        cursor: "pointer",
                        position: "relative",
                        /* color: #fff, */
                        fontSize: "14px",
                        textAlign: "center",
                        width: "70%",
                        marginTop: "5px",
                        marginBottom: "12px",
                        zIndex: "9999999",
                    }}
                    onClick={(e) => {
                        e.preventDefault();
                        window.location.href =
                            "https://" +
                            `${window.LMSettingsScript.shop}` +
                            "/account/login?return_url=" +
                            window.location.href;
                    }}
                >
                    <span>
                        {
                            window.LMSettingsScript.translation_settings
                                .login_price_btn_txt
                        }
                    </span>
                </button>
                {/* <a id="lm_login_price_class" href="#!">
                    {
                        window.LMSettingsScript.translation_settings
                            .login_price_btn_txt
                    }
                </a> */}
            </div>
        );
    } else {
        return (
            <div
            // className={styles.lm_add_to_quote_button}
            // style={{
            //     background: `${window.LMSettingsScript.hide_price_settings.all_btn_bg}`,
            //     colour: `${window.LMSettingsScript.hide_price_settings.all_btn_txt}`,
            // }}
            >
                <button
                    title="Submit"
                    className="btn button preference-btn lm_add_to_quote_button"
                    style={{
                        background: `${window.LMSettingsScript.hide_price_settings.all_btn_bg}`,
                        colour: `${window.LMSettingsScript.hide_price_settings.all_btn_txt}`,
                        cursor: "pointer",
                        position: "relative",
                        /* color: #fff, */
                        fontSize: "14px",
                        textAlign: "center",
                        width: "70%",
                        marginTop: "5px",
                        marginBottom: "12px",
                        zIndex: "9999999",
                    }}
                    onClick={(e) => {
                        e.preventDefault();
                        window.location.href =
                            "https://" +
                            `${window.LMSettingsScript.shop}` +
                            "/account/login?return_url=" +
                            window.location.href;
                    }}
                >
                    <span>
                        {
                            window.LMSettingsScript.translation_settings
                                .login_price_btn_txt
                        }
                    </span>
                </button>
                {/* <a id="lm_login_price_class" href="#!">
                    {
                        window.LMSettingsScript.translation_settings
                            .login_price_btn_txt
                    }
                </a> */}
            </div>
        );
    }
}

export default LoginPrice;
