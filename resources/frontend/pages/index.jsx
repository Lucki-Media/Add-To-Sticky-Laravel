import {
    Card,
    Page,
    Layout,
    Frame,
    SkeletonPage,
    SkeletonBodyText,
    SkeletonDisplayText,
    TextContainer,
    Modal,
    Banner,
    CalloutCard,
} from "@shopify/polaris";
import { SideBar } from "../components";
import "../css/index.css";
import { CChart } from "@coreui/react-chartjs";
import { useCallback, useEffect, useState } from "react";

export default function HomePage(props) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const monthOptions = { month: "long" };
    const currentMonth = currentDate.toLocaleString("en-US", monthOptions);
    const shop_url = document.getElementById("shopOrigin").value;
    const [showTable, setShowTable] = useState(false);
    const [sacCount, setSacCount] = useState("0");
    const [sCartCount, setSCartCount] = useState("0");
    const [sacArray, setSacArray] = useState([
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ]);
    const [sCartArray, setSCartArray] = useState([
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ]);
    const getAddToStickyCartData = async () => {
        try {
            const response = await fetch("api/getDashboardCount/" + shop_url);
            const data = await response.json();
            setSacArray(data.data.sac_array);
            setSCartArray(data.data.sc_array);
            setSacCount(data.data.sacMonthValue);
            setSCartCount(data.data.scMonthValue);
            setShowTable(true);
        } catch (err) {
            console.log(err);
        }
    };

    const url =
        "https://" +
        document.getElementById("shopOrigin").value +
        "/admin/themes/current/editor?context=apps";

    const [active, setActive] = useState(false);

    const handleChange = useCallback(() => setActive(!active), [active]);
    useEffect(() => {
        getAddToStickyCartData();
    }, []);

    if (showTable === false) {
        return (
            <div>
                <Frame>
                    <Card>
                        <SkeletonPage primaryAction>
                            <Layout>
                                <Layout.Section>
                                    <Card sectioned>
                                        <SkeletonBodyText />
                                    </Card>
                                    <Card sectioned>
                                        <TextContainer>
                                            <SkeletonDisplayText size="small" />
                                            <SkeletonBodyText />
                                        </TextContainer>
                                    </Card>
                                </Layout.Section>
                            </Layout>
                        </SkeletonPage>
                    </Card>
                </Frame>
            </div>
        );
    } else {
        return (
            <>
                <div className="lm_sticky_main_app_page">
                    <Modal
                        // activator={activator}
                        open={active}
                        onClose={handleChange}
                        title="How does it work?"
                        large
                    >
                        <Modal.Section>
                            <video controls style={{ width: "100%" }}>
                                <source
                                    src="https://addtostickycart.luckimediadevelopment.com/images/lm_sticky_video.mp4"
                                    type="video/mp4"
                                />
                                Your browser does not support the video tag.
                            </video>
                        </Modal.Section>
                    </Modal>
                    <Page>
                        <div className="deep_link__class">
                            <Card>
                                <Banner
                                    title="Integrate app into theme"
                                    status="info"
                                >
                                    <p>
                                        To enable our theme app extension please{" "}
                                        <a href={url} target="_blank">
                                            click here.
                                        </a>
                                    </p>
                                </Banner>
                            </Card>
                            {/* <div style={{ marginBottom: "10px" }}>
                                <Card>
                                    <Banner title="How does the app works?">
                                        <p>
                                            To familiarize yourself with the
                                            app's functionality, kindly{" "}
                                            <a href="#" onClick={handleChange}>
                                                follow this link.{" "}
                                            </a>
                                        </p>
                                    </Banner>
                                </Card>
                            </div> */}
                        </div>
                        {/* <div className="lm_add_to_sticky_callout_card">
                            <Layout>
                                <Layout.Section>
                                    {" "}
                                    <CalloutCard
                                        title="Add To Cart Sticky Bar"
                                        illustration="https://cdn.shopify.com/s/assets/admin/checkout/settings-customizecart-705f57c725ac05be5a34ec20c05b94298cb8afd10aac7bd9c7ad02030f48cfa0.svg"
                                        primaryAction={{
                                            content: "Customize",
                                            url: "/add-to-cart-sticky",
                                            style: {
                                                backgroundColor: "#008060",
                                                color: "#ffffff",
                                            },
                                        }}
                                    >
                                        <p>
                                            Incorporating a sticky 'Add to Cart'
                                            bar enhances user experience, making
                                            it effortless for users to swiftly
                                            add products to their cart,
                                            ultimately driving revenue growth.
                                        </p>
                                    </CalloutCard>
                                </Layout.Section>
                                <Layout.Section>
                                    {" "}
                                    <CalloutCard
                                        title="Sticky Cart"
                                        illustration="https://cdn.shopify.com/s/assets/admin/checkout/settings-customizecart-705f57c725ac05be5a34ec20c05b94298cb8afd10aac7bd9c7ad02030f48cfa0.svg"
                                        primaryAction={{
                                            content: "Customize",
                                            url: "/sticky-cart",
                                            style: {
                                                backgroundColor: "#008060",
                                                color: "#ffffff",
                                            },
                                        }}
                                    >
                                        <p>
                                            Introducing a Fixed Cart feature
                                            elevates the shopping journey,
                                            empowering users to efficiently
                                            complete bulk checkouts for their
                                            selected products and enhance
                                            overall conversion rates.
                                        </p>
                                    </CalloutCard>
                                </Layout.Section>
                            </Layout>
                        </div> */}

                        <Layout>
                            <Layout.Section>
                                <div className="sidebar_title">
                                    {currentMonth} , {currentYear}
                                </div>
                                <div className="clickdetails_layout">
                                    <Layout>
                                        <Layout.Section secondary>
                                            <div className="clickdetails_card">
                                                <Card sectioned>
                                                    <p className="click_count">
                                                        {sacCount}
                                                    </p>
                                                    <span className="click_countdetail">
                                                        Clicks On Add To Cart
                                                        Sticky
                                                    </span>
                                                </Card>
                                            </div>
                                        </Layout.Section>
                                        <Layout.Section secondary>
                                            <div className="clickdetails_card">
                                                <Card sectioned>
                                                    <p className="click_count">
                                                        {sCartCount}
                                                    </p>
                                                    <span className="click_countdetail">
                                                        Clicks On Sticky Cart
                                                    </span>
                                                </Card>
                                            </div>
                                        </Layout.Section>
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
                                    </Layout>
                                </div>
                            </Layout.Section>
                        </Layout>
                    </Page>
                </div>
            </>
        );
    }
}
