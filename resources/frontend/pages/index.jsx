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
import Dashboard from "./dashboard";
import axios from "axios";

export default function HomePage() {
  const [showTable, setShowTable] = useState(false);
  const [sacCount, setSacCount] = useState("0");
  const [sCartCount, setSCartCount] = useState("0");
  const [sacArray, setSacArray] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [sCartArray, setSCartArray] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  // console.log(showTable);
//   const getAllData = async () => {
//     axios
//       .post(`${process.env.LOCAL_HOST_URL}` + "/add_to_sticky_cart", {
//         shop_domain: "completostagingtest.myshopify.com",
//       })
//       .then((response) => {
//         console.log(response);
//         // setCountNumber(response.data.item_count);
//       });
//   };

  useEffect(() => {
    // setTimeout(() => {
    // getAllData();
    // }, 2000);
    // const fetchDashboardCounts = async () => {
    //   try {
    //     const response = await fetch(
    //       "/api/getDashboardCounts?shop_domain=" +
    //         new URL(window.location).searchParams.get("shop")
    //     );
    //     const result = await response.json();
    //     console.log(result);
    //     setSCartArray(result.data.s_cart_month_wise);
    //     setSacArray(result.data.sac_month_wise);
    //     setSCartCount(result.data.s_cart_count);
    //     setSacCount(result.data.sac_count);
    //     setShowTable(true);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };
    // const singleProduct = async () => {
    //   try {
    //     const response = await fetch("/api/products?productId=7035569373229");
    //     const data = await response.json();
    //     console.log(data.images[0].src);
    //     return data.id;
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };
    // singleProduct();
    // fetchDashboardCounts();
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
