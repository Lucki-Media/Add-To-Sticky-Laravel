import { register } from "@shopify/web-pixels-extension";

register(({ analytics, browser }) => {
    analytics.subscribe("product_added_to_cart", async (event) => {
      // update localStorage quantity and stamp, using stamp we can find out when it has updated 
        await browser.localStorage.setItem(
            "lm_sticky_cart_quantity",
            event.data.cartLine.quantity
        );
        await browser.localStorage.setItem("lm_sticky_cart_stamp", Date.now());
    });
});
