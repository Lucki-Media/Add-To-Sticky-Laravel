import {
    Card,
    Page,
    Layout,
    Frame,
    SkeletonPage,
    SkeletonBodyText,
    SkeletonDisplayText,
    TextContainer,
} from "@shopify/polaris";
import { SideBar } from "../components";
import "../css/index.css";
import { CChart } from "@coreui/react-chartjs";
import { useEffect, useState } from "react";

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
                <div className="topbar_title">LM ADD TO CART STICKY</div>
                <div className="main_app_page">
                    <Page>
                        <Layout>
                            <Layout.Section oneThird>
                                {/* <Card title="Add To Sticky" sectioned> */}
                                {/* <div className="sidebar_title">Dashboard</div> */}
                                <SideBar />
                                {/* </Card> */}
                            </Layout.Section>
                            <Layout.Section>
                                <div className="sidebar_title">
                                    {currentMonth}
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
                                                        Clicks On Sticky Add To
                                                        Cart
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
                                                                    label: "Sticky Add To Cart",
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
