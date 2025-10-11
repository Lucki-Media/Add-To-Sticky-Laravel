import React, { useEffect, useState } from "react";
import "./productList.module.css";
import "./customModal.css";
import { useCookies } from "react-cookie";
import { Modal } from "react-responsive-modal";
if (
    window.meta.page.pageType === "collection" ||
    window.meta.page.pageType === "home"
) {
    require("./customModal.css");
}

const ProductListPage = (props) => {
    const [openSecond, setOpenSecond] = useState(false);
    const [cookies, setCookie, removeCookie] = useCookies("LM_Quote_sessionId");

    const onOpenSecondModal = (e) => {
        setOpenSecond(true);
    };

    useEffect(() => {
        setOnLoadCookie();
    }, []);

    const setOnLoadCookie = () => {
        if (!cookies.LM_Quote_sessionId) {
            var randomstring = require("randomstring");
            let cookieKey = randomstring.generate(); //size 49 by default
            setCookie("LM_Quote_sessionId", cookieKey, { path: "/" });
        }
    };

    let handleAddToQuoteToast = async (e) => {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                shop_domain: window.location.host,
                session_id: cookies.LM_Quote_sessionId,
                product_id: props.props,
            }),
        };
        try {
            const res = await fetch(
                `${process.env.REACT_APP_API_URL}` + "addToQuoteCollection",
                requestOptions
            );
            const quote_data = await res.json();
            const res1 = await fetch(
                `${process.env.REACT_APP_API_URL}` +  
                    "getQuotedProductCount",
                    requestOptions
            );
            const set_count = await res1.json();
            props.callback(set_count.data);
            props.toastCallback(
                `${window.LMSettingsScript.translation_settings.toast}`
            );
        } catch (error) {
            console.log();
        }
    };
    let handleAddToQuote = async (e) => {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                shop_domain: window.location.host,
                session_id: cookies.LM_Quote_sessionId,
                product_id: props.props,
            }),
        };
        try {
            const res = await fetch(
                `${process.env.REACT_APP_API_URL}` + "addToQuoteCollection",
                requestOptions
            );
            const quote_data = await res.json();
            const res1 = await fetch(
                `${process.env.REACT_APP_API_URL}` +
                    "getQuotedProductCount",
                    requestOptions
            );
            const set_count = await res1.json();
            props.callback(set_count.data);
        } catch (error) {
            console.log();
        }
    };
    if (window.LMSettingsScript.general_settings.msg_type === "1") {
        return (
            <>
                <style>
                    {`
                        .lm_add_to_quote_button{
                            background: ${window.LMSettingsScript.general_settings.require_btn_bg};
                        }
                        .lm_add_to_quote_button span {
                            color: ${window.LMSettingsScript.general_settings.require_btn_txt};
                        }
                `}
                </style>
                {/* <div className="lm_add_to_quote_button"> */}
                <button
                    type="button"
                    // title="Submit"
                    className="btn button preference-btn lm_add_to_quote_button"
                    onClick={() => {
                        onOpenSecondModal();
                        handleAddToQuote();
                    }}
                >
                    <span>
                        {
                            window.LMSettingsScript.translation_settings
                                .req_qyt_txt
                        }
                    </span>
                </button>
                {/* <a
                        id="hello_buoy"
                        href="#!"
                        onClick={() => {
                            onOpenSecondModal();
                            handleAddToQuote();
                        }}
                    >
                        {
                            window.LMSettingsScript.translation_settings
                                .req_qyt_txt
                        }
                    </a> */}
                <Modal
                    open={openSecond}
                    onClose={() => setOpenSecond(false)}
                    center
                    classNames={{
                        overlay: "popup_Overlay",
                        modal: "popup-form",
                    }}
                >
                    <div className="Diamond-form">
                        <div className="requested-form">
                            <p>
                                The product <strong>{props.props}</strong> is
                                added to your quote.
                            </p>
                        </div>
                        <form>
                            <div>
                                <div className="prefrence-action">
                                    <div className="prefrence-action action moveUp">
                                        <button
                                            title="Submit"
                                            className="btn button preference-btn"
                                            onClick={() => setOpenSecond(false)}
                                        >
                                            <span>
                                                {
                                                    window.LMSettingsScript
                                                        .translation_settings
                                                        .cont_shop_btn_txt
                                                }
                                            </span>
                                        </button>
                                        <button
                                            // type="submit"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                window.location.href =
                                                    "https://" +
                                                    window.location.host +
                                                    "/pages/lm-request-for-quote";
                                            }}
                                            title="Submit"
                                            className="btn button preference-btn"
                                        >
                                            <span>View Quote</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </Modal>
                {/* </div> */}
            </>
        );
    } else if (window.LMSettingsScript.general_settings.msg_type === "2") {
        return (
            <>
                <style>
                    {`
                        .lm_add_to_quote_button{
                            background: ${window.LMSettingsScript.general_settings.require_btn_bg};
                        }
                        .lm_add_to_quote_button span {
                            color: ${window.LMSettingsScript.general_settings.require_btn_txt};
                        }
                `}
                </style>
                {/* <div className="lm_add_to_quote_button"> */}
                <button
                    type="button"
                    // title="Submit"
                    className="btn button preference-btn lm_add_to_quote_button"
                    onClick={(e) => {
                        handleAddToQuote();
                        e.preventDefault();
                        window.location.href =
                            "https://" +
                            window.location.host +
                            "/pages/lm-request-for-quote";
                    }}
                >
                    <span>
                        {
                            window.LMSettingsScript.translation_settings
                                .req_qyt_txt
                        }
                    </span>
                </button>
                {/* </div> */}
                {/* <div className="lm_add_to_quote_button">
                    <a
                        id="hello_buoy"
                        href="#!"
                        onClick={(e) => {
                            handleAddToQuote();
                            e.preventDefault();
                            window.location.href =
                                "https://" +
                                window.location.host +
                                "/pages/lm-request-for-quote";
                        }}
                    >
                        {
                            window.LMSettingsScript.translation_settings
                                .req_qyt_txt
                        }
                    </a>
                </div> */}
            </>
        );
    } else {
        return (
            <>
                <style>
                    {`
                        .lm_add_to_quote_button{
                            background: ${window.LMSettingsScript.general_settings.require_btn_bg};
                        }
                        .lm_add_to_quote_button span {
                            color: ${window.LMSettingsScript.general_settings.require_btn_txt};
                        }
                `}
                </style>
                {/* <div className="lm_add_to_quote_button"> */}
                <button
                    type="button"
                    // title="Submit"
                    className="btn button preference-btn lm_add_to_quote_button"
                    onClick={(e) => {
                        handleAddToQuoteToast();
                    }}
                >
                    <span>
                        {
                            window.LMSettingsScript.translation_settings
                                .req_qyt_txt
                        }
                    </span>
                </button>
                {/* <a
                        id="hello_buoy"
                        href="#!"
                        onClick={(e) => {
                            handleAddToQuoteToast();
                        }}
                    >
                        {
                            window.LMSettingsScript.translation_settings
                                .req_qyt_txt
                        }
                    </a> */}
                {/* </div> */}
            </>
        );
    }
};

export default ProductListPage;
