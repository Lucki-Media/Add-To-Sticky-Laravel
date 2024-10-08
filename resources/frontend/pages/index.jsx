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
    BlockStack,
    Box,
    Divider,
    Grid,
    MediaCard,
    VideoThumbnail,
    Modal,
    Pagination,
} from "@shopify/polaris";
import {
    QuestionCircleIcon,
    CartUpIcon,
    NotificationIcon,
    DeliveryIcon,
    LayoutPopupIcon,
    CartSaleIcon,
    HomeIcon,
} from "@shopify/polaris-icons";
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
import VideoArray from "../StaticData/VideoArray";

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

    // REFERENCE VIDEO START
    const [active, setActive] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const videosPerPage = 3; // Number of videos you want to show per page

    const toggleModal = useCallback(() => setActive((active) => !active), []);

    const openModalWithVideo = (videoUrl) => {
        setSelectedVideo(videoUrl);
        setActive(true);
    };

    // Pagination Logic
    const totalVideos = VideoArray.length;
    const totalPages = Math.ceil(totalVideos / videosPerPage);
    const indexOfLastVideo = currentPage * videosPerPage;
    const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
    const currentVideos = VideoArray.slice(indexOfFirstVideo, indexOfLastVideo);

    const nextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };
    // REFERENCE VIDEO END

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

    // New Items Array
    const newItemsArray = [
        {
            icon: CartUpIcon,
            term: "Cart Drawer",
            description:
                "The Cart Drawer is fully customizable, featuring advanced options, a free shipping bar, and seamless cart management without leaving the page.",
        },
        {
            icon: NotificationIcon,
            term: "Notification Bar",
            description:
                "Clicking the StickyBar button on the sticky notification bar reveals a fully customizable notification bar, enhancing user engagement and providing instant feedback.",
        },
        {
            icon: DeliveryIcon,
            term: "Free Shipping Bar",
            description:
                "The Free Shipping Bar is fully customizable, designed to attract customers by showcasing their progress toward free shipping and encouraging them to add more items to their cart.",
        },
        {
            icon: LayoutPopupIcon,
            term: "UpSell Popup",
            description:
                "The Upsell Popup, available to premium plan merchants, appears when the StickyBar button on the sticky bar is clicked, providing an opportunity to boost sales with targeted upsell offers.",
        },
        {
            icon: CartSaleIcon,
            term: "Cart Upsell",
            description:
                "The Cart Upsell feature, available in the premium plan, is displayed in the drawer cart, offering tailored product suggestions to enhance sales and improve customer experience.",
        },
        {
            icon: HomeIcon,
            term: "Product showcase on home page",
            description:
                "The product showcase on the home page highlights specific items to grab customers attention, driving engagement and encouraging purchases.",
        },
    ];

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
                <BlockStack gap={600}>
                    <div style={{ padding: "5px" }}>
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
                        )}

                    {/* Feedback banner */}
                    {showReviewBanner && (
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
                    )}

                    {/* Onboarding Process Layout */}
                    <Layout>
                        <Layout.Section variant="oneThird">
                            <Card>
                                <div
                                    style={{ padding: 20, textAlign: "center" }}
                                >
                                    <div
                                        style={{
                                            fontSize: 16,
                                            fontWeight: 500,
                                            lineHeight: 1,
                                            minHeight: 35,
                                        }}
                                    >
                                        Step 1 : Enable StickyBar
                                    </div>
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
                                        A StickyBar enhances user experience,
                                        driving revenue with effortless product
                                        additions.
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
                                                sacEnabled === "0"
                                                    ? "primary"
                                                    : ""
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
                                <div
                                    style={{ padding: 20, textAlign: "center" }}
                                >
                                    <div
                                        style={{
                                            fontSize: 16,
                                            fontWeight: 500,
                                            lineHeight: 1,
                                            minHeight: 35,
                                        }}
                                    >
                                        Step 2 : Enable Drawer Cart
                                    </div>
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
                                <div
                                    style={{ padding: 20, textAlign: "center" }}
                                >
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
                                        Activate the app in Shopify's Theme
                                        Editor to ensure all features is
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

                    {/* What's New */}
                    <Layout>
                        <Layout.Section>
                            <BlockStack gap={300}>
                                <Text
                                    as="div"
                                    variant="headingLg"
                                    fontWeight="medium"
                                >
                                    Discover Our Latest App Features 🎉
                                </Text>
                                <Card>
                                    <InlineStack gap="400">
                                        {newItemsArray.map((item, index) => {
                                            return (
                                                <Box
                                                    width="49%"
                                                    background="bg-surface-secondary"
                                                    borderColor="border"
                                                    borderWidth="025"
                                                    borderRadius="100"
                                                    padding="400"
                                                    key={index}
                                                >
                                                    <BlockStack gap="200">
                                                        <InlineStack
                                                            blockAlign="center"
                                                            gap={200}
                                                            align="start"
                                                        >
                                                            <span className="vidhee">
                                                                <Icon
                                                                    source={
                                                                        item.icon
                                                                    }
                                                                    tone="primary"
                                                                />
                                                            </span>
                                                            <Text
                                                                as="h3"
                                                                variant="headingMd"
                                                                fontWeight="medium"
                                                            >
                                                                {item.term}
                                                            </Text>
                                                        </InlineStack>
                                                        <Divider borderColor="border" />
                                                        <Text
                                                            variant="bodyLg"
                                                            as="p"
                                                        >
                                                            {item.description}
                                                        </Text>
                                                    </BlockStack>
                                                </Box>
                                            );
                                        })}
                                    </InlineStack>
                                </Card>
                            </BlockStack>
                        </Layout.Section>
                    </Layout>

                    {/* Video References */}
                    <Layout>
                        <Layout.Section>
                            <BlockStack gap={300}>
                                <InlineStack wrap={false} align="space-between">
                                    <Text
                                        as="div"
                                        variant="headingLg"
                                        fontWeight="medium"
                                    >
                                        Get to Know Our App Through Videos
                                    </Text>

                                    <Pagination
                                        hasPrevious={currentPage !== 1}
                                        previousTooltip="Previous"
                                        onPrevious={prevPage}
                                        hasNext={currentPage !== totalPages}
                                        nextTooltip="Next"
                                        onNext={nextPage}
                                    />
                                </InlineStack>
                                <Card>
                                    <Grid>
                                        {currentVideos.map((video, index) => (
                                            <Grid.Cell
                                                key={index}
                                                columnSpan={{
                                                    xs: 6,
                                                    sm: 3,
                                                    md: 2,
                                                    lg: 4,
                                                }}
                                            >
                                                <MediaCard
                                                    portrait
                                                    title={video.title}
                                                    description={
                                                        video.description
                                                    }
                                                >
                                                    <VideoThumbnail
                                                        videoLength={
                                                            video.length
                                                        }
                                                        thumbnailUrl={video.img}
                                                        onClick={() =>
                                                            openModalWithVideo(
                                                                video
                                                            )
                                                        }
                                                    />
                                                </MediaCard>
                                            </Grid.Cell>
                                        ))}
                                    </Grid>
                                </Card>
                            </BlockStack>
                        </Layout.Section>

                        {selectedVideo && (
                            <Modal
                                size="large"
                                open={active}
                                onClose={toggleModal}
                                title={selectedVideo.title}
                                primaryAction={{
                                    content: "Close",
                                    onAction: toggleModal,
                                }}
                            >
                                <Modal.Section>
                                    <iframe
                                        src={selectedVideo.url}
                                        height="480"
                                        width="950"
                                    ></iframe>
                                </Modal.Section>
                            </Modal>
                        )}
                    </Layout>

                    {/* Analytics */}
                    <Layout>
                        <Layout.Section>
                            <Text
                                as="div"
                                variant="headingLg"
                                fontWeight="medium"
                            >
                                App performance of the month : {currentMonth},{" "}
                                {currentYear}
                            </Text>
                            <div className="clickdetails_layout">
                                <Layout>
                                    <Layout.Section variant="oneHalf">
                                        <div cl assName="clickdetails_card">
                                            <Card sectioned>
                                                <div className="click_countdetail">
                                                    Clicks On StickyBar
                                                    <Tooltip
                                                        content="The count of times customers clicked on StickyBar"
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
                                                    Clicks On Drawer Cart
                                                    <Tooltip
                                                        content="The count of times customers clicked on Drawer Cart"
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
                                                                    label: "StickyBar",
                                                                    backgroundColor:
                                                                        "#15C39A",
                                                                    data: sacArray,
                                                                },
                                                                {
                                                                    label: "Drawer Cart",
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
                                                    If we're not available on
                                                    live chat, please fill out
                                                    our Google Form, and we'll
                                                    get back to you ASAP.
                                                </p>
                                            </CalloutCard>
                                        </div>
                                    </Layout.Section>
                                </Layout>
                            </div>
                        </Layout.Section>
                    </Layout>
                </BlockStack>
            </Page>
        </div>
    );
}
