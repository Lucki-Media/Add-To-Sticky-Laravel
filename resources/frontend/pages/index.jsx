import {
    Card,
    Page,
    Layout,
    SkeletonPage,
    SkeletonBodyText,
    TextContainer,
    FullscreenBar,
    Text,
    Button,
    Spinner,
    LegacyCard,
    Tooltip,
    Icon,
    Banner,
    List,
    ButtonGroup,
    CalloutCard,
    InlineStack,
    Popover,
    ActionList,
} from "@shopify/polaris";
import { QuestionCircleIcon } from "@shopify/polaris-icons";
import "../css/index.css";
import { CChart } from "@coreui/react-chartjs";
import { useEffect, useState, useCallback } from "react";
import {
    HeartIcon,
    SmileyHappyIcon,
    SmileySadIcon,
    MenuHorizontalIcon,
    XIcon,
    HideIcon,
} from "@shopify/polaris-icons";

export default function HomePage() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const monthOptions = { month: "long" };
    const currentMonth = currentDate.toLocaleString("en-US", monthOptions);
    const shop_url = document.getElementById("shopOrigin").value;
    const [sCartEnabled, setSCartEnabled] = useState("0");
    const [sacEnabled, setSacEnabled] = useState("0");
    const [themeExtEnabled, setThemeExtEnabled] = useState("0");
    const [showReviewBanner, setShowReviewBanner] = useState(false);
    const [showTable, setShowTable] = useState(false);
    const [sacCount, setSacCount] = useState("0");
    const [extensionId, setExtensionId] = useState();
    const [shopName, setShopName] = useState("");
    const [sCartCount, setSCartCount] = useState("0");
    const [sacArray, setSacArray] = useState([
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ]);
    const [sCartArray, setSCartArray] = useState([
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ]);

    const getDashboardCount = async () => {
        try {
            const response = await fetch("api/getDashboardCount/" + shop_url);
            const data = await response.json();
            setShopName(data.data.shop_name);
            setExtensionId(data.data.extension_id);
            setSacArray(data.data.sac_array);
            setSCartArray(data.data.sc_array);
            setSacCount(data.data.sacMonthValue);
            setSCartCount(data.data.scMonthValue);
            setSCartEnabled(data.data.sc_enable);
            setSacEnabled(data.data.sac_enable);
            setThemeExtEnabled(data.data.theme_ext_enabled);
            setShowReviewBanner(data.data.review_banner);
            setShowTable(true);
        } catch (err) {
            console.log(err);
        }
    };

    const url =
        "https://" +
        document.getElementById("shopOrigin").value +
        "/admin/themes/current/editor?context=apps&template=index&activateAppId=" +
        extensionId +
        "/app-embed";

    useEffect(() => {
        getDashboardCount();
    }, []);

    // REVIEW BANNER CLOSURE
    const [popoverActive, setPopoverActive] = useState(false);

    const togglePopoverActive = useCallback(
        () => setPopoverActive((popoverActive) => !popoverActive),
        []
    );
    const activator = (
        <Button
            onClick={togglePopoverActive}
            icon={MenuHorizontalIcon}
            variant="tertiary"
            size="large"
        />
    );

    const updateReviewBannerStatus = async (selected) => {
        try {
            const response = await fetch(
                "api/updateReviewBannerStatus/" + shop_url + "/" + selected
            );
            const data = await response.json();
            setShowReviewBanner(false);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="lm_sticky_main_app_page">
            <div className={`lm_sticky_fullscreenbar`}>
                <FullscreenBar>
                    <div
                        style={{
                            display: "flex",
                            flexGrow: 1,
                            justifyContent: "space-between",
                            alignItems: "center",
                            paddingLeft: "1rem",
                            paddingRight: "1rem",
                        }}
                    >
                        <div
                            style={{
                                marginLeft: "1rem",
                                flexGrow: 1,
                            }}
                        >
                            <p className="fullscreen_title">Dashboard </p>
                        </div>
                        <ButtonGroup>
                            <Button
                                size="large"
                                variant="primary"
                                url="https://forms.gle/CTSsW3kpKgVturgX7"
                                external
                            >
                                Get Support
                            </Button>
                        </ButtonGroup>
                    </div>
                </FullscreenBar>
            </div>
            <Page>
                <div style={{ padding: "5px 5px 20px" }}>
                    {showTable === true ? (
                        <Text
                            as="h2"
                            alignment="start"
                            variant="headingXl"
                            fontWeight="medium"
                        >
                            {"👋 Hello, " + shopName}
                        </Text>
                    ) : (
                        <SkeletonBodyText lines={1} />
                    )}
                </div>

                {/* Warning banner to enable extension */}
                {(sCartEnabled === "1" || sacEnabled === "1") &&
                    themeExtEnabled === "0" && (
                        <div className="deep_link__class">
                            <Banner
                                title="Theme App Extension is not Activated"
                                action={{
                                    content: "Activate",
                                    url: url,
                                    external,
                                }}
                                tone="warning"
                            >
                                <List>
                                    <List.Item>
                                        Take a moment to activate the app
                                        through Shopify's Theme Editor to ensure
                                        your store benefits from the enhanced
                                        visibility of its features
                                    </List.Item>
                                </List>
                            </Banner>
                        </div>
                    )}

                {/* Feedback banner */}
                {showReviewBanner && (
                    <div className="deep_link__class">
                        <Banner
                            // onDismiss={() => {}}
                            icon={HeartIcon}
                            // title="Your feedback means a lot to us!"
                        >
                            <InlineStack
                                gap="400"
                                wrap={false}
                                blockAlign="baseline"
                                align="space-between"
                            >
                                <p style={{ margin: "auto 0" }}>
                                    How is our app working for you? Share your
                                    feedback and help us improve!
                                </p>
                                <ButtonGroup>
                                    <Button
                                        icon={SmileySadIcon}
                                        variant="plain"
                                        external
                                        url="https://forms.gle/CTSsW3kpKgVturgX7"
                                    >
                                        Poor
                                    </Button>
                                    <Button
                                        icon={SmileyHappyIcon}
                                        variant="plain"
                                        external
                                        url="https://apps.shopify.com/lm-add-to-cart-sticky/reviews"
                                    >
                                        Excellent
                                    </Button>
                                </ButtonGroup>
                                <Popover
                                    active={popoverActive}
                                    activator={activator}
                                    autofocusTarget="first-node"
                                    onClose={togglePopoverActive}
                                >
                                    <ActionList
                                        actionRole="menuitem"
                                        items={[
                                            {
                                                content: "Never Ask",
                                                icon: XIcon,
                                                onAction: () => {
                                                    updateReviewBannerStatus(
                                                        "2"
                                                    );
                                                },
                                            },
                                            {
                                                content: "Remind Leter",
                                                icon: HideIcon,
                                                onAction: () => {
                                                    updateReviewBannerStatus(
                                                        "1"
                                                    );
                                                },
                                            },
                                        ]}
                                    />
                                </Popover>
                            </InlineStack>
                        </Banner>
                    </div>
                )}
                {/* Onboarding Process Layout */}
                <Layout>
                    <Layout.Section variant="oneThird">
                        <Card>
                            <div style={{ padding: 20, textAlign: "center" }}>
                                <div
                                    style={{
                                        fontSize: 16,
                                        fontWeight: 500,
                                        lineHeight: 1,
                                        minHeight: 35,
                                    }}
                                >
                                    {/* <Text
                                    as="h2"
                                    variant="bodyLg"
                                    alignment="center"
                                    fontWeight="semibold"
                                > */}
                                    Step 1 : Enable Sticky Add to Cart
                                </div>
                                {/* </Text> */}
                                <img
                                    src={"/images/step1.png"}
                                    width="60%"
                                    style={{
                                        width: "60%",
                                        marginTop: 20,
                                    }}
                                />
                                <p
                                    style={{
                                        paddingTop: 20,
                                        textAlign: "center",
                                        color: "#797979",
                                        minHeight: 120,
                                    }}
                                >
                                    A sticky 'Add to Cart' bar enhances user
                                    experience, driving revenue with effortless
                                    product additions.
                                </p>
                                <div
                                    style={{
                                        border: "1px solid #ABB1BA",
                                        borderRadius: 8,
                                    }}
                                >
                                    <Button
                                        size="large"
                                        textAlign="center"
                                        fullWidth
                                        variant={
                                            sacEnabled === "0" ? "primary" : ""
                                        }
                                        loading={!showTable}
                                        url="/add-to-cart-sticky"
                                    >
                                        {sacEnabled === "0"
                                            ? "Customize"
                                            : "✓ Enabled"}
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    </Layout.Section>
                    <Layout.Section variant="oneThird">
                        <Card>
                            <div style={{ padding: 20, textAlign: "center" }}>
                                {/* <Text
                                    as="h2"
                                    variant="bodyLg"
                                    alignment="center"
                                    fontWeight="semibold"
                                > */}
                                <div
                                    style={{
                                        fontSize: 16,
                                        fontWeight: 500,
                                        lineHeight: 1,
                                        minHeight: 35,
                                    }}
                                >
                                    Step 2 : Enable Sticky Cart
                                </div>
                                {/* </Text> */}
                                <img
                                    src={"/images/step2.png"}
                                    width="60%"
                                    style={{
                                        width: "60%",
                                        marginTop: 20,
                                    }}
                                />
                                <p
                                    style={{
                                        paddingTop: 20,
                                        textAlign: "center",
                                        color: "#797979",
                                        minHeight: 120,
                                    }}
                                >
                                    A Fixed Cart feature streamlines bulk
                                    checkouts, boosting conversions by
                                    simplifying purchases.
                                </p>
                                <div
                                    style={{
                                        border: "1px solid #ABB1BA",
                                        borderRadius: 8,
                                    }}
                                >
                                    <Button
                                        size="large"
                                        textAlign="center"
                                        fullWidth
                                        variant={
                                            sCartEnabled === "0"
                                                ? "primary"
                                                : ""
                                        }
                                        loading={!showTable}
                                        url="/sticky-cart"
                                    >
                                        {sCartEnabled === "0"
                                            ? "Customize"
                                            : "✓ Enabled"}
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    </Layout.Section>
                    <Layout.Section variant="oneThird">
                        <Card>
                            <div style={{ padding: 20, textAlign: "center" }}>
                                {/* <Text
                                    as="h2"
                                    variant="bodyLg"
                                    alignment="center"
                                    fontWeight="semibold"
                                > */}
                                <div
                                    style={{
                                        fontSize: 16,
                                        fontWeight: 500,
                                        lineHeight: 1,
                                        minHeight: 35,
                                    }}
                                >
                                    Step 3 : Theme App Extension
                                </div>
                                {/* </Text> */}
                                <img
                                    src={"/images/step3.png"}
                                    width="60%"
                                    style={{
                                        width: "60%",
                                        marginTop: 20,
                                    }}
                                />
                                <p
                                    style={{
                                        paddingTop: 20,
                                        textAlign: "center",
                                        color: "#797979",
                                        minHeight: 120,
                                    }}
                                >
                                    Activate the app in Shopify's Theme Editor
                                    to ensure the Sticky Add To Cart feature is
                                    visible.
                                </p>
                                <div
                                    style={{
                                        border: "1px solid #ABB1BA",
                                        borderRadius: 8,
                                    }}
                                >
                                    <Button
                                        size="large"
                                        textAlign="center"
                                        fullWidth
                                        variant={
                                            themeExtEnabled === "0"
                                                ? "primary"
                                                : ""
                                        }
                                        disabled={themeExtEnabled === "1"}
                                        external
                                        loading={!showTable}
                                        url={url}
                                    >
                                        {themeExtEnabled === "0"
                                            ? "Activate"
                                            : "✓ Activated"}
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    </Layout.Section>
                </Layout>

                <Layout>
                    <Layout.Section>
                        <div className="sidebar_title">
                            App performance of the month : {currentMonth},{" "}
                            {currentYear}
                        </div>
                        <div className="clickdetails_layout">
                            <Layout>
                                <Layout.Section variant="oneHalf">
                                    <div cl assName="clickdetails_card">
                                        <Card sectioned>
                                            <div className="click_countdetail">
                                                Clicks On Add To Cart Sticky
                                                <Tooltip
                                                    content="The count of times customers clicked on Add To Cart Sticky"
                                                    dismissOnMouseOut
                                                    preferredPosition="below"
                                                >
                                                    <Icon
                                                        source={
                                                            QuestionCircleIcon
                                                        }
                                                        color="subdued"
                                                    />
                                                </Tooltip>
                                            </div>
                                            <p className="click_count">
                                                {showTable === true ? (
                                                    sacCount
                                                ) : (
                                                    <Spinner size="small" />
                                                )}
                                            </p>
                                        </Card>
                                    </div>
                                </Layout.Section>
                                <Layout.Section variant="oneHalf">
                                    <div className="clickdetails_card">
                                        <Card sectioned>
                                            <div className="click_countdetail">
                                                Clicks On Sticky Cart
                                                <Tooltip
                                                    content="The count of times customers clicked on Sticky Cart"
                                                    dismissOnMouseOut
                                                    preferredPosition="below"
                                                >
                                                    <Icon
                                                        source={
                                                            QuestionCircleIcon
                                                        }
                                                        color="subdued"
                                                    />
                                                </Tooltip>
                                            </div>
                                            <p className="click_count">
                                                {showTable === true ? (
                                                    sCartCount
                                                ) : (
                                                    <Spinner size="small" />
                                                )}
                                            </p>
                                        </Card>
                                    </div>
                                </Layout.Section>
                                {showTable === true ? (
                                    <Layout.Section>
                                        <div>
                                            <Card sectioned>
                                                <CChart
                                                    type="bar"
                                                    data={{
                                                        labels: [
                                                            "Jan",
                                                            "Feb",
                                                            "Mar",
                                                            "Apr",
                                                            "May",
                                                            "June",
                                                            "July",
                                                            "Aug",
                                                            "Sep",
                                                            "Oct",
                                                            "Nov",
                                                            "Dec",
                                                        ],
                                                        datasets: [
                                                            {
                                                                label: "Add To Cart Sticky",
                                                                backgroundColor:
                                                                    "#15C39A",
                                                                data: sacArray,
                                                            },
                                                            {
                                                                label: "Sticky Cart",
                                                                backgroundColor:
                                                                    "#f87979",
                                                                data: sCartArray,
                                                            },
                                                        ],
                                                    }}
                                                    labels="months"
                                                />
                                            </Card>
                                        </div>
                                    </Layout.Section>
                                ) : (
                                    <Layout.Section>
                                        <SkeletonPage primaryAction>
                                            <LegacyCard sectioned>
                                                <TextContainer>
                                                    <SkeletonBodyText />
                                                </TextContainer>
                                            </LegacyCard>
                                        </SkeletonPage>
                                    </Layout.Section>
                                )}
                                <Layout.Section>
                                    <div style={{ paddingTop: 15 }}>
                                        <CalloutCard
                                            title="Need any help?"
                                            primaryAction={{
                                                content:
                                                    "Fill out our Google Form",
                                                url: "https://forms.gle/CTSsW3kpKgVturgX7",
                                                target: "_blank",
                                            }}
                                        >
                                            <p>
                                                If we're not available on live
                                                chat, please fill out our Google
                                                Form, and we'll get back to you
                                                ASAP.
                                            </p>
                                        </CalloutCard>
                                    </div>
                                </Layout.Section>
                            </Layout>
                        </div>
                    </Layout.Section>
                </Layout>
            </Page>
        </div>
    );
}
