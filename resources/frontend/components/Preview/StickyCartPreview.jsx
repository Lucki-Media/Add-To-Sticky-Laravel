import React, { useCallback, useEffect, useState } from "react";
import "../../css/index.css";
import {
    BlockStack,
    Box,
    Button,
    ButtonGroup,
    Card,
    Icon,
    InlineStack,
    Tabs,
    Text,
} from "@shopify/polaris";
import { DesktopIcon, MobileIcon } from "@shopify/polaris-icons";
import proimage from "../../assets/productimage.png";
import Drawer from "../Drawer/Drawer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCartArrowDown,
    faCartPlus,
    faCartShopping,
    faBasketShopping,
    faBagShopping,
} from "@fortawesome/free-solid-svg-icons";

export default function StickyCartPreview(props) {
    // Device selection states
    const [activePreview, setActivePreview] = useState(1);
    const [selectedDevice, setSelectedDevice] = useState(0);

    // Sticky icon states
    const [iconHover, setIconHover] = useState(false);
    const [countHover, setCountHover] = useState(false);

    const handleActivePreview = useCallback(
        (index) => {
            if (activePreview === index) return;
            setActivePreview(index);
        },
        [activePreview]
    );

    // Device Selection Logic Start
    const handleDeviceTabChange = useCallback(
        (selectedTabIndex) => setSelectedDevice(selectedTabIndex),
        []
    );

    const deviceTabs = [
        {
            id: "desktop",
            content: <Icon source={DesktopIcon} tone="primary" />,
            accessibilityLabel: "All customers",
            panelID: "desktop",
        },
        {
            id: "mobile",
            content: <Icon source={MobileIcon} tone="primary" />,
            panelID: "mobile",
        },
    ];
    // Device Selection Logic End

    // ICON HOVER
    const handleIconEnter = () => {
        setIconHover(true);
    };

    const handleIconLeave = () => {
        setIconHover(false);
    };

    // COUNT HOVER
    const handleCountEnter = () => {
        setCountHover(true);
    };

    const handleCountLeave = () => {
        setCountHover(false);
    };

    useEffect(() => {
        props.onPreviewChange(activePreview);
    }, [activePreview]);

    return (
        <div classname="preview_section">
            <Card>
                <BlockStack gap="400">
                    {/* Heading Part */}
                    <InlineStack gap="400" align="space-between">
                        <Text as="h2" variant="headingLg" id="preview_title">
                            Preview
                        </Text>
                        <Box
                            background="bg-fill-transparent"
                            borderColor="border"
                            borderWidth="025"
                            borderRadius="200"
                            padding="025"
                        >
                            <Tabs
                                tabs={deviceTabs}
                                selected={selectedDevice}
                                onSelect={handleDeviceTabChange}
                                fitted
                            ></Tabs>
                        </Box>
                        <div
                            style={{
                                background: "rgba(0, 0, 0, .02)",
                                border: "1px solid #e3e3e3",
                                borderRadius: 8,
                                padding: 8,
                            }}
                        >
                            <ButtonGroup variant="segmented">
                                <Button
                                    size="large"
                                    // pressed=
                                    variant={
                                        activePreview === 1 ? "primary" : ""
                                    }
                                    onClick={() => handleActivePreview(1)}
                                >
                                    Sticky Icon
                                </Button>
                                <Button
                                    size="large"
                                    // pressed=
                                    variant={
                                        activePreview === 2 ? "primary" : ""
                                    }
                                    onClick={() => handleActivePreview(2)}
                                >
                                    Drawer Cart
                                </Button>
                            </ButtonGroup>
                        </div>
                    </InlineStack>

                    {/* Preview Section  */}
                    <Box>
                        {/* If desktop preview is selected */}
                        {selectedDevice === 0 && (
                            <div classname="preview_section">
                                <Card padding="0">
                                    <div className="lm_sticky_box">
                                        <div class="lm_screen_bar">
                                            <div class="r_1"></div>
                                            <div class="r_1"></div>
                                            <div class="r_1"></div>
                                            <div class="sq_1"></div>
                                        </div>
                                        <div className="lm_product_block">
                                            <div className="product_details">
                                                <div>
                                                    {props.enableSticky ===
                                                        true &&
                                                    activePreview === 1 ? (
                                                        <div className="main_sticky___div">
                                                            <div
                                                                className="stickyCart__icon"
                                                                style={{
                                                                    position:
                                                                        "absolute",
                                                                    fontSize:
                                                                        props.iconSize,
                                                                    color: iconHover
                                                                        ? props.iconHoverColor
                                                                        : props.iconColor,
                                                                    border: iconHover
                                                                        ? props.borderSize +
                                                                          "px solid " +
                                                                          props.borderHoverColor
                                                                        : props.borderSize +
                                                                          "px solid " +
                                                                          props.borderColor,
                                                                    background:
                                                                        iconHover
                                                                            ? props.bgHoverColor
                                                                            : props.bgColor,
                                                                    height: props.btnSize,
                                                                    width: props.btnSize,
                                                                    top:
                                                                        props.positionTop ===
                                                                        0
                                                                            ? ""
                                                                            : props.positionTop +
                                                                              "%",
                                                                    left:
                                                                        props.positionLeft ===
                                                                        0
                                                                            ? ""
                                                                            : props.positionLeft +
                                                                              "%",
                                                                }}
                                                                onMouseEnter={
                                                                    handleIconEnter
                                                                }
                                                                onMouseLeave={
                                                                    handleIconLeave
                                                                }
                                                            >
                                                                {props.enableCount ===
                                                                true ? (
                                                                    <span
                                                                        className="sticky_Count"
                                                                        style={{
                                                                            background:
                                                                                countHover
                                                                                    ? props.countBgHoverColor
                                                                                    : props.countBgColor,
                                                                            width: props.countSize,
                                                                            height: props.countSize,
                                                                            fontSize:
                                                                                props.countFontSize,
                                                                            color: countHover
                                                                                ? props.countHoverColor
                                                                                : props.countColor,
                                                                        }}
                                                                        onMouseEnter={
                                                                            handleCountEnter
                                                                        }
                                                                        onMouseLeave={
                                                                            handleCountLeave
                                                                        }
                                                                    >
                                                                        {
                                                                            props.numberCount
                                                                        }
                                                                    </span>
                                                                ) : (
                                                                    ""
                                                                )}
                                                                {props.defaultTemplate ===
                                                                "1" ? (
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faCartShopping
                                                                        }
                                                                    />
                                                                ) : (
                                                                    ""
                                                                )}
                                                                {props.defaultTemplate ===
                                                                "2" ? (
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faCartPlus
                                                                        }
                                                                    />
                                                                ) : (
                                                                    ""
                                                                )}
                                                                {props.defaultTemplate ===
                                                                "3" ? (
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faCartArrowDown
                                                                        }
                                                                    />
                                                                ) : (
                                                                    ""
                                                                )}
                                                                {props.defaultTemplate ===
                                                                "4" ? (
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faBasketShopping
                                                                        }
                                                                    />
                                                                ) : (
                                                                    ""
                                                                )}
                                                                {props.defaultTemplate ===
                                                                "5" ? (
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faBagShopping
                                                                        }
                                                                    />
                                                                ) : (
                                                                    ""
                                                                )}
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        ""
                                                    )}
                                                </div>
                                                <div className="pagewidth">
                                                    <div className="product_details_main">
                                                        <div className="product_image">
                                                            <div className="product_imagess">
                                                                <img
                                                                    src={
                                                                        proimage
                                                                    }
                                                                    alt=""
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="p_details">
                                                            <h2>
                                                                Juice Bottle
                                                                Mockup (Red)
                                                            </h2>
                                                            <span>
                                                                <strike>
                                                                    $50.00
                                                                </strike>{" "}
                                                                $40.00
                                                            </span>
                                                            <a className="addtocartbtn">
                                                                Add to cart
                                                            </a>
                                                            <div className="product_content">
                                                                The Juice Bottle
                                                                Mockup (Red)
                                                                features a
                                                                realistic red
                                                                juice bottle,
                                                                ideal for
                                                                showcasing
                                                                beverage
                                                                branding. It
                                                                provides a
                                                                high-quality,
                                                                customizable
                                                                template for
                                                                marketing and
                                                                packaging
                                                                designs, making
                                                                it perfect for
                                                                visualizing
                                                                labels on fruit
                                                                juices,
                                                                smoothies, or
                                                                energy drinks.
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <Drawer
                                                    isOpen={
                                                        activePreview === 2 &&
                                                        props.customizationData
                                                            .enableDrawer
                                                    }
                                                    customizationData={
                                                        props.customizationData
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        )}

                        {/* If mobile preview is selected */}
                        {selectedDevice === 1 && (
                            <div className="mobile_device_preview">
                                <Card padding="0">It is Mobile Preview</Card>
                            </div>
                        )}
                    </Box>
                </BlockStack>
            </Card>
        </div>
    );
}
