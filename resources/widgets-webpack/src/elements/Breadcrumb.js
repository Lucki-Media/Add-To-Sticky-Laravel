import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
// import { useNavigate } from "react-router-dom";
import styles from "./breadcrumb.module.css";

const Breadcumb = (props) => {
    const [getInitData, setGetInitData] = useState([]);
    const [getsettingcookies, setsettingcookies] = useCookies([
        "_shopify_ringsetting",
    ]);
    const [getdiamondcookies, setdiamondcookies] = useCookies([
        "_shopify_diamondsetting",
    ]);
    const [getDiamondCookie, setDiamondCookie] = useState(false);
    const [getsettingcookie, setsettingcookie] = useState(false);
    const [cookies, setCookie, removeCookie] = useCookies([]);
    // const navigate = useNavigate();

    var currentNavValue = "settings";
    //console.log(currentNavValue);

    useEffect(() => {
        if (
            getsettingcookies._shopify_ringsetting &&
            getsettingcookies._shopify_ringsetting[0].setting_id
        ) {
            setsettingcookie(true);
        }
        if (
            getdiamondcookies._shopify_diamondsetting &&
            getdiamondcookies._shopify_diamondsetting[0].diamondId
        ) {
            setDiamondCookie(true);
        }
        const getInitTool = async () => {
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ shop_domain: window.location.host }),
            };
            try {
                const res = await fetch(
                    "https://rb-advance-dev.partners.gemfind.com/api/initToolApi",
                    requestOptions
                );
                const initData = await res.json();
                console.log(initData);
                setGetInitData(initData.data[0]);
            } catch (error) {
                console.log(error);
            }
        };
        getInitTool();
    }, []);

    const handlenavigation = (e) => {
        e.preventDefault();
        console.log(e.target.id);
        if (e.target.id === "completering") {
            if (getDiamondCookie === true && getsettingcookie === true) {
                var redirect_url =
                    "https://" +
                    window.Shopify.shop +
                    "/apps/ringbuilderadvance/completering";
                window.location.href = redirect_url;
            }
        }
        if (e.target.id === "settings") {
            if (getInitData.is_api === "false") {
                window.location.href = "/collections/ringbuilder-settings";
            } else {
                // navigate("/apps/ringbuilderadvance/" + e.target.id);
            }

            //Remove diamond cookies on tab toggling
            if (
                getsettingcookies._shopify_ringsetting &&
                getsettingcookies._shopify_ringsetting[0].setting_id
            ) {
                removeCookie("_shopify_ringsetting", { path: "/" });
            }
        }
        if (e.target.id === "diamondtools") {
            //Remove ring setting cookies on tab toggling
            if (
                getdiamondcookies._shopify_diamondsetting &&
                getdiamondcookies._shopify_diamondsetting[0].diamondId
            ) {
                removeCookie("_shopify_diamondsetting", { path: "/" });
            }
            window.location.href = "/apps/ringbuilderadvance/" + e.target.id;
        }
    };

    return (
        <>
            <li
                className={`${styles.tabLi} ${
                    currentNavValue === props.Data.urlkey ? styles.active : ""
                }`}
            >
                <div className={styles.breadCumbs}>
                    <a
                        href="#"
                        id={`${props.Data.urlkey}`}
                        onClick={handlenavigation}
                    >
                        <span
                            id={`${props.Data.urlkey}`}
                            className={styles.tabTitle}
                        >
                            {props.Data.subTitle}{" "}
                            <strong id={`${props.Data.urlkey}`}>
                                {props.Data.title}
                            </strong>
                        </span>
                        {props.Data.image === "ringIcon" && (
                            <i
                                className={`${styles.ringIcon} ${styles.tabIcon}`}
                                id={`${props.Data.urlkey}`}
                            ></i>
                        )}
                        {props.Data.image === "diamondIcon" && (
                            <i
                                className={`${styles.diamondIcon} ${styles.tabIcon}`}
                                id={`${props.Data.urlkey}`}
                            ></i>
                        )}
                        {props.Data.image === "finalringIcon" && (
                            <i
                                className={`${styles.finalringIcon} ${styles.tabIcon}`}
                                id={`${props.Data.urlkey}`}
                            ></i>
                        )}
                    </a>
                </div>
            </li>
        </>
    );
};

export default Breadcumb;
