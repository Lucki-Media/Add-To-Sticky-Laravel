import React, { useState, useEffect } from "react";
import "../css/UpSellBottomSheet.css"; // Import your custom CSS

const UpSellBottomSheet = (props) => {
    const [open, setOpen] = useState(false);

    // Use useEffect to update the state when props.enableUpSell changes
    useEffect(() => {
        setOpen(props.enableUpSell);
        getCartUpsellProducts();
    }, [props.enableUpSell]);

    // Toggle the bottom sheet visibility
    const toggleBottomSheet = () => setOpen(!open);

    const products = [
        {
            image: "https://amazonutility.luckistore.in/build/assets/productimage-a213fa31.png",
            title: "Product 1",
            variation: "Price: $80",
        },
        {
            image: "https://amazonutility.luckistore.in/build/assets/productimage-a213fa31.png",
            title: "Product 2",
            variation: "Price: $50",
        },
        // Add more products as needed
    ];

    const getCartUpsellProducts = async () => {
        if (props.CUPLSelection === "1") {
            // Default Recommendation
            axios
                .get(
                    "https://" +
                        window.location.host +
                        "/recommendations/products.json?product_id=" +
                        cartData.items[0].product_id + // get cart's first item's related product
                        "&limit=3"
                )
                .then(async (response) => {
                    setCUProducts(response.data.products);
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        } else {
            // Manually Select
            if (props.CUPLManualSelection === "1") {
                // Manual Products
                if (props.SelectedProductIDs.length > 0) {
                    // Create an array of promises
                    const productPromises = props.SelectedProductIDs.map(
                        (productHandle) => {
                            return getProductByHandle(productHandle);
                        }
                    );

                    // Wait for all promises to resolve
                    Promise.all(productPromises).then((productArray) => {
                        // Filter out any null values from failed requests
                        productArray = productArray.filter(
                            (product) => product !== null
                        );
                        setCUProducts(productArray);
                    });
                }
            } else {
                // Manual Collection
                if (props.SelectedCollectionID) {
                    axios
                        .get(
                            "https://" +
                                window.location.host +
                                "/collections/" +
                                props.SelectedCollectionID +
                                "/products.json?limit=3"
                        )
                        .then(async (response) => {
                            // Create an array of promises
                            const productPromises = response.data.products.map(
                                (product) => {
                                    return getProductByHandle(product.handle);
                                }
                            );

                            // Wait for all promises to resolve
                            Promise.all(productPromises).then(
                                (productArray) => {
                                    // Filter out any null values from failed requests
                                    productArray = productArray.filter(
                                        (product) => product !== null
                                    );
                                    setCUProducts(productArray);
                                }
                            );
                        })
                        .catch((error) => {
                            console.error("Error:", error);
                        });
                }
            }
        }
    };

    // Helper function
    const getProductByHandle = (productHandle) => {
        return axios
            .get(
                "https://" +
                    window.location.host +
                    "/products/" +
                    productHandle +
                    ".js"
            )
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                console.error("Error:", error);
                return null; // Return null for any failed requests
            });
    };

    return (
        <div className={`popup_container ${open ? "popup_open" : ""}`}>
            <div
                className="bottomSheet_backdrop"
                onClick={toggleBottomSheet}
            ></div>
            <section
                id="bottomSheet"
                className={
                    open ? "bottomSheet--onScreen" : "bottomSheet--offScreen"
                }
            >
                <div className="bottomSheet__headerContainer">
                    <h2
                        id="bottomSheet__headerID"
                        className="bottomSheet__header"
                    >
                        Recommended Products
                    </h2>
                    <button
                        id="closeButton"
                        className="close_button"
                        onClick={toggleBottomSheet}
                    >
                        &times;
                    </button>
                </div>
                <div className="product_list">
                    {products && products.length > 0 ? (
                        products.map((product, index) => (
                            <div key={index} className="product_item">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="usrp_product_image"
                                />
                                <div className="product_info">
                                    <h3 className="product_title">
                                        {product.title}
                                    </h3>
                                    <p className="product_variation">
                                        {product.variation}
                                    </p>
                                </div>
                                <button className="add_to_cart_button">
                                    Buy
                                </button>
                            </div>
                        ))
                    ) : (
                        <p>No products available.</p>
                    )}
                </div>
            </section>
        </div>
    );
};

export default UpSellBottomSheet;
