import {
  Card,
  Layout,
  Page,
  Button,
  Collapsible,
  Icon,
} from "@shopify/polaris";
// import { TitleBar } from "@shopify/app-bridge-react";
import { SideBar } from "../components";
import "../css/index.css";
import { ResourcePicker } from "@shopify/app-bridge-react";
import { useState, useCallback } from "react";
import { ChevronRightMinor, ChevronDownMinor } from "@shopify/polaris-icons";
import DataFAQ from "../StaticData/DataFAQ";

export default function StickyFAQ() {
  const [expanded, setExpanded] = useState("panel1");
  const handleChange = (panel) => {
    setExpanded(panel);
  };

  return (
    <>
      <div className="topbar_title">LM ADD TO CART STICKY</div>
      <div className="main_app_page">
        <Page>
          {/* <TitleBar title="FAQs" primaryAction={null} /> */}
          <Layout>
            <Layout.Section oneThird>
              {/* <Card title="Add To Sticky" sectioned> */}
              {/* <div className="sidebar_title">Dashboard</div> */}
              <SideBar />
              {/* </Card> */}
            </Layout.Section>
            <Layout.Section>
              <div className="sidebar_title sticky_faq">
                LM Sticky Help Center
              </div>
              {DataFAQ.map((item) => (
                <div
                  className="sticky_faq_div"
                  onClick={() => {
                    handleChange(item.panel);
                  }}
                  key={item.key}
                  id={item.key}
                >
                  <Card sectioned>
                    <div className="setting_title">
                      <span className="show_sticky_span">{item.question}</span>
                      <span>
                        {expanded === item.panel ? (
                          <Icon source={ChevronDownMinor} />
                        ) : (
                          <Icon source={ChevronRightMinor} />
                        )}
                      </span>
                    </div>
                    <div>
                      <Collapsible
                        open={expanded === item.panel}
                        id="basic-collapsible"
                        transition={{
                          duration: "500ms",
                          timingFunction: "ease-in-out",
                        }}
                        expandOnPrint
                      >
                        <hr />
                        <p>{item.answer}</p>
                      </Collapsible>
                    </div>
                  </Card>
                </div>
              ))}
            </Layout.Section>
          </Layout>
        </Page>
      </div>
    </>
  );
}
