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
} from "@shopify/polaris";
import { QuestionCircleIcon } from "@shopify/polaris-icons";
import "../css/index.css";
import { CChart } from "@coreui/react-chartjs";
import { useEffect, useState } from "react";

export default function HomePage() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const monthOptions = { month: "long" };
    const currentMonth = currentDate.toLocaleString("en-US", monthOptions);
    const shop_url = document.getElementById("shopOrigin").value;
    const [sCartEnabled, setSCartEnabled] = useState("0");
    const [sacEnabled, setSacEnabled] = useState("0");
    const [themeExtEnabled, setThemeExtEnabled] = useState("0");
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

    return (
        <>
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
                        </div>
                    </FullscreenBar>
                </div>
                <Page>
                    <div style={{ padding: "5px 5px 20px" }}>
                        {showTable === true ? (
                            <Text as="h2" alignment="start" variant="headingXl">
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
                                <Card>
                                    <Banner
                                        title="Theme App Extension is not Activated"
                                        status="warning"
                                        action={{
                                            content: "Activate",
                                            url: url,
                                            external,
                                        }}
                                        // url={url}
                                    >
                                        <p>
                                            Take a moment to activate the app
                                            through Shopify's Theme Editor to
                                            ensure your store benefits from the
                                            enhanced visibility of its features
                                        </p>
                                    </Banner>
                                </Card>
                            </div>
                        )}

                    {/* Onboarding Process Layout */}
                    <Layout>
                        <Layout.Section oneThird>
                            <Card>
                                <div
                                    style={{ padding: 25, textAlign: "center" }}
                                >
                                    <Text
                                        as="h2"
                                        variant="headingMd"
                                        alignment="center"
                                        fontWeight="semibold"
                                    >
                                        Step 1 : Enable Sticky Add to Cart
                                    </Text>

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
                                            padding: "20px 0",
                                            textAlign: "center",
                                            color: "#797979",
                                        }}
                                    >
                                        A sticky 'Add to Cart' bar enhances user
                                        experience, driving revenue with
                                        effortless product additions.
                                    </p>

                                    <Button
                                        textAlign="center"
                                        fullWidth
                                        primary={sacEnabled === "0"}
                                        loading={!showTable}
                                        url="/add-to-cart-sticky"
                                    >
                                        {sacEnabled === "0"
                                            ? "Customize"
                                            : "✓ Enabled"}
                                    </Button>
                                </div>
                            </Card>
                        </Layout.Section>
                        <Layout.Section oneThird>
                            <Card>
                                <div
                                    style={{ padding: 25, textAlign: "center" }}
                                >
                                    <Text
                                        as="h2"
                                        variant="headingMd"
                                        alignment="center"
                                        fontWeight="semibold"
                                    >
                                        Step 2 : Enable Sticky Cart
                                    </Text>

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
                                            padding: "20px 0",
                                            textAlign: "center",
                                            color: "#797979",
                                        }}
                                    >
                                        A Fixed Cart feature streamlines bulk
                                        checkouts, boosting conversions by
                                        simplifying purchases.
                                    </p>

                                    <Button
                                        textAlign="center"
                                        fullWidth
                                        primary={sCartEnabled === "0"}
                                        loading={!showTable}
                                        url="/sticky-cart"
                                    >
                                        {sCartEnabled === "0"
                                            ? "Customize"
                                            : "✓ Enabled"}
                                    </Button>
                                </div>
                            </Card>
                        </Layout.Section>
                        <Layout.Section oneThird>
                            <Card>
                                <div
                                    style={{ padding: 25, textAlign: "center" }}
                                >
                                    <Text
                                        as="h2"
                                        variant="headingMd"
                                        alignment="center"
                                        fontWeight="semibold"
                                    >
                                        Step 3 : Theme App Extension
                                    </Text>

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
                                            padding: "20px 0",
                                            textAlign: "center",
                                            color: "#797979",
                                        }}
                                    >
                                        Activate the app in Shopify's Theme
                                        Editor to ensure the Sticky Add To Cart
                                        feature is visible.
                                    </p>

                                    <Button
                                        textAlign="center"
                                        fullWidth
                                        primary={themeExtEnabled === "0"}
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
                                    <Layout.Section secondary>
                                        <div className="clickdetails_card">
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
                                    <Layout.Section secondary>
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
                                </Layout>
                            </div>
                        </Layout.Section>
                    </Layout>
                </Page>
            </div>
        </>
    );
}
