import React, { useState, useEffect } from "react";
import "../css/UpSellBottomSheet.css"; // Import your custom CSS

const UpSellBottomSheet = (props) => {
    const [open, setOpen] = useState(false);

    // Use useEffect to update the state when props.enableUpSell changes
    useEffect(() => {
        setOpen(props.enableUpSell);
    }, [props.enableUpSell]);

    // Toggle the bottom sheet visibility
    const toggleBottomSheet = () => setOpen(!open);

    console.log("props");
    console.log(props);

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
                                    className="product_image"
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
                                    View
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
