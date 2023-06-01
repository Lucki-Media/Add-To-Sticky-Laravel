import React, { useEffect, useState } from "react";
import styles from "./lmquotebtn.module.css";
import { useCookies } from "react-cookie";

const QuoteButton = (props) => {
    const [count, setCount] = useState('0');
    const [cookies, setCookie, removeCookie] = useCookies("LM_Quote_sessionId");

    useEffect(() => {
        const getQuotedProductCount = async () => {
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    shop_domain: window.location.host,
                    session_id: cookies.LM_Quote_sessionId,
                }),
            };
            const res = await fetch(
                `${process.env.REACT_APP_API_URL}` +
                    "getQuotedProductCount",
                    requestOptions
            );
            const set_count = await res.json();
            if (props.data === undefined) {
                setCount(set_count.data);
            } else {
                setCount(props.data);
            }
        };
        getQuotedProductCount();
    }, [count]);

    let handlePush = async (e) => {
        window.location.href =
            "https://" + window.location.host + "/pages/lm-request-for-quote";
    };
    return (
        <div>
            <style>
                    {`
                        #lm_rotate_button {
                            background: ${window.LMSettingsScript.general_settings.sticky_btn_bg};
                            color: ${window.LMSettingsScript.general_settings.sticky_btn_txt};
                            border-color: transparent;
                        }

                `}
            </style>
            <div className={styles.lm_fab_container}>
                <div className={styles.lm_fab}>
                    <div onClick={handlePush}>
                        <input
                            className="btn button button--full-width"
                            type="button"
                            value={`Quote (${
                                props.data === undefined ? count : props.data
                            })`}
                            id="lm_rotate_button"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuoteButton;
