import { BrowserRouter } from "react-router-dom";
import { NavigationMenu } from "@shopify/app-bridge-react";
import Routes from "./Routes.jsx";

import {
    AppBridgeProvider,
    QueryProvider,
    PolarisProvider,
} from "./components";

export default function App() {
    // Any .tsx or .jsx files in /pages will become a route
    // See documentation for <Routes /> for more info
    const pages = import.meta.globEager(
        "./pages/**/!(*.test.[jt]sx)*.([jt]sx)"
    );

    return (
        <PolarisProvider>
            <BrowserRouter>
                <AppBridgeProvider>
                    <QueryProvider>
                        <NavigationMenu
                            navigationLinks={[
                                {
                                    label: "Add To Cart Sticky",
                                    destination: "/add-to-cart-sticky",
                                },
                                {
                                    label: "Sticky Cart",
                                    destination: "/sticky-cart",
                                },
                                {
                                    label: "FAQs",
                                    destination: "/sticky-faq",
                                },
                                {
                                    label: "Demo",
                                    destination: "/demo",
                                },
                            ]}
                        />
                        <Routes pages={pages} />
                    </QueryProvider>
                </AppBridgeProvider>
            </BrowserRouter>
        </PolarisProvider>
    );
}
