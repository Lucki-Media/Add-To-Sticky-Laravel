import {
    Card,
    Layout,
    Page,
    Collapsible,
    Icon,
    FullscreenBar,
    ButtonGroup,
    Button,
} from "@shopify/polaris";
import "../css/index.css";
import { useState } from "react";
import { ChevronRightIcon, ChevronDownIcon } from "@shopify/polaris-icons";
import DataFAQ from "../StaticData/DataFAQ";

export default function StickyFAQ() {
    const [expanded, setExpanded] = useState(0);
    const handleChange = (index) => {
        setExpanded(index);
    };

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
                                <p className="fullscreen_title">LM Help Center </p>
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
                    <Layout>
                        <Layout.Section>
                            {DataFAQ.map((item, index) => (
                                <div
                                    className="sticky_faq_div"
                                    onClick={() => {
                                        handleChange(index);
                                    }}
                                    key={index}
                                    id={index}
                                >
                                    <Card sectioned>
                                        <div className="setting_title">
                                            <span className="show_sticky_span">
                                                {item.question}
                                            </span>
                                            <span>
                                                {expanded === index ? (
                                                    <Icon
                                                        source={ChevronDownIcon}
                                                    />
                                                ) : (
                                                    <Icon
                                                        source={
                                                            ChevronRightIcon
                                                        }
                                                    />
                                                )}
                                            </span>
                                        </div>
                                        <div>
                                            <Collapsible
                                                open={expanded === index}
                                                id="basic-collapsible"
                                                transition={{
                                                    duration: "500ms",
                                                    timingFunction:
                                                        "ease-in-out",
                                                }}
                                                expandOnPrint
                                            >
                                                <hr />
                                                <p
                                                    dangerouslySetInnerHTML={{
                                                        __html: item.answer,
                                                    }}
                                                    style={{
                                                        fontSize: 14,
                                                        lineHeight: "22px",
                                                    }}
                                                ></p>
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
