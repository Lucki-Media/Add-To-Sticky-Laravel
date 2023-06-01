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
import { useAuthenticatedFetch } from "../hooks";
import axios from "axios";
import { useAppBridge } from "@shopify/app-bridge-react";
import { getSessionToken, authenticatedFetch } from "@shopify/app-bridge-utils";
import { useLocation } from "react-router-dom";

export default function Dashboard(props) {
  const shop_url = document.getElementById("shopOrigin").value;
  const [shopName, setShopName] = useState(null);
  const [showTable, setShowTable] = useState(false);
  const [sacCount, setSacCount] = useState("0");
  const [sCartCount, setSCartCount] = useState("0");
  const [sacArray, setSacArray] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [sCartArray, setSCartArray] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  // console.log(location);
  // const shop_url1 = location.search.split("&shop=")[1].split("&timestamp")[0];
  // console.log(shop_url1);
//   const fetchDashboardData = async () => {
//     axios
//       .post("https://lmaddtocartstickydev.luckistore.in/add_to_sticky_cart", {
//         shop_domain: shop_url,
//       })
//       .then((response) => {
//         setSacArray(response.data.data.sac_month_wise);
//         setSCartArray(response.data.data.s_cart_month_wise);
//         setSacCount(response.data.data.sac_count);
//         setSCartCount(response.data.data.s_cart_count);
//         setShowTable(true);
//       });
//   };
  useEffect(() => {
    // fetchDashboardData();
  }, []);

  if (showTable === true) {
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
                <div className="sidebar_title">Current Month</div>
                <div className="clickdetails_layout">
                  <Layout>
                    <Layout.Section secondary>
                      <div className="clickdetails_card">
                        <Card sectioned>
                          <p className="click_count">1</p>
                          <span className="click_countdetail">
                            Clicks On Sticky Add To Cart
                          </span>
                        </Card>
                      </div>
                    </Layout.Section>
                    <Layout.Section secondary>
                      <div className="clickdetails_card">
                        <Card sectioned>
                          <p className="click_count">1</p>
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
                                  backgroundColor: "#15C39A",
                                  data: sacArray,
                                },
                                {
                                  label: "Sticky Cart",
                                  backgroundColor: "#f87979",
                                  data: sacArray,
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
