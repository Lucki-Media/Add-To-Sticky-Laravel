import { useState } from "react";
import { Card, Icon } from "@shopify/polaris";
import { Toast } from "@shopify/app-bridge-react";
import {
    HomeMajor,
    ChevronRightMinor,
    CheckoutMajor,
    QuestionMarkMajor,
    AddProductMajor,
} from "@shopify/polaris-icons";
import Data from "../StaticData/sidebarData";
import "../css/sidebar.css";
import { useLocation, useNavigate } from "react-router-dom";

export function SideBar() {
    var activeClass;
    var activePageName;
    const location = useLocation();
    const navigate = useNavigate();

    if (location.pathname === "/add-to-cart-sticky") {
        activePageName = "Add To Cart Sticky";
    } else if (location.pathname === "/sticky-cart") {
        activePageName = "Sticky cart";
    } else if (location.pathname === "/sticky-faq") {
        activePageName = "FAQs";
    } else {
        activePageName = "Dashboard";
    }

    const handleClick = (data) => {
        navigate(data);
    };

    return (
        <>
            <div className="sidebar_title">{activePageName}</div>
            {Data.map(
                (item) => (
                    (activeClass =
                        location.pathname === item.path
                            ? "sidebar_card active"
                            : "sidebar_card"),
                    (
                        <div
                            className={activeClass}
                            key={item.key}
                            onClick={() => handleClick(item.path)}
                        >
                            <Card>
                                <div className="sidebar_icon">
                                    {item.icon === "HomeMajor" && (
                                        <Icon source={HomeMajor} color="base" />
                                    )}
                                    {item.icon === "CheckoutMajor" && (
                                        <Icon
                                            source={CheckoutMajor}
                                            color="base"
                                        />
                                    )}
                                    {item.icon === "AddProductMajor" && (
                                        <Icon
                                            source={AddProductMajor}
                                            color="base"
                                        />
                                    )}
                                    {item.icon === "QuestionMarkMajor" && (
                                        <Icon
                                            source={QuestionMarkMajor}
                                            color="base"
                                        />
                                    )}
                                    {/* <span className="sidebar_text" >{item.icon}</span>  */}
                                    <span className="sidebar_text">
                                        {item.title}
                                    </span>
                                </div>
                                <div>
                                    <Icon
                                        source={ChevronRightMinor}
                                        color="base"
                                    />
                                </div>
                            </Card>
                        </div>
                    )
                )
            )}
        </>
    );
}
