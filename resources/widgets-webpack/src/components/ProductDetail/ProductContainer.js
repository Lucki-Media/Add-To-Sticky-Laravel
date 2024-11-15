import React, { useEffect, useState } from "react";
import CartTemplate1 from "../Templates/CartTemplate.jsx";
import CartTemplate2 from "../Templates/CartTemplate2.jsx";
import CartTemplate3 from "../Templates/CartTemplate3.jsx";
import CartTemplate4 from "../Templates/CartTemplate4.jsx";
import CartTemplate5 from "../Templates/CartTemplate5.jsx";
import CartTemplate6 from "../Templates/CartTemplate6.jsx";
import CartTemplate7 from "../Templates/CartTemplate7.jsx";
import CartTemplate8 from "../Templates/CartTemplate8.jsx";
import "./index.css";

const ProductContainer = () => {
    const [productData, setProductData] = useState([]);
    const [templateData, setTemplateData] = useState([]);
    const [productImage, setProductImage] = useState();
    const singleProduct = async () => {
        try {
            const response = await fetch(
                window.location.href.split("?")[0] + ".js"
            );
            const data = await response.json();
            setProductData(data);
        } catch (err) {
            console.log(err);
        }
    };
    const ImageOfProduct = async () => {
        try {
            const response = await fetch(window.location.href.split("?")[0] + ".json");
            const data = await response.json();
            // console.log(response);
            // console.log(data.product.image);
            setProductImage(
                data.product.image !== undefined &&
                    data.product.image.src !== undefined
                    ? data.product.image.src
                    : null
            );
        } catch (err) {
            console.log(err);
        }
    };
    const getAddToStickyCartData = async () => {
        try {
            const response = await fetch(
                `${process.env.REACT_APP_API_URL}` +
                    "getAddToStickyCartData/" +
                    window.Shopify.shop
            );
            const data = await response.json();
            setTemplateData(data.data);
        } catch (err) {
            console.log(err);
        }
    };
    // USE EFFECT
    useEffect(() => {
        getAddToStickyCartData();
        singleProduct();
        ImageOfProduct();
    }, []);

    if (productData.length <= 0) {
        return <div>Loading</div>;
    } else {
        return (
            <>
                <div>
                    {String(templateData.defaultTemplate) === "1" && (
                        <CartTemplate1
                            product={productData}
                            productImage={productImage}
                            enable={templateData.enable}
                            animationEnable={templateData.animationEnable}
                            current_template={templateData.current_template}
                        />
                    )}
                    {String(templateData.defaultTemplate) === "2" && (
                        <CartTemplate2
                            product={productData}
                            productImage={productImage}
                            enable={templateData.enable}
                            animationEnable={templateData.animationEnable}
                            current_template={templateData.current_template}
                        />
                    )}
                    {String(templateData.defaultTemplate) === "3" && (
                        <CartTemplate3
                            product={productData}
                            productImage={productImage}
                            enable={templateData.enable}
                            animationEnable={templateData.animationEnable}
                            current_template={templateData.current_template}
                        />
                    )}
                    {String(templateData.defaultTemplate) === "4" && (
                        <CartTemplate4
                            product={productData}
                            productImage={productImage}
                            enable={templateData.enable}
                            animationEnable={templateData.animationEnable}
                            current_template={templateData.current_template}
                        />
                    )}
                    {String(templateData.defaultTemplate) === "5" && (
                        <CartTemplate5
                            product={productData}
                            productImage={productImage}
                            enable={templateData.enable}
                            animationEnable={templateData.animationEnable}
                            current_template={templateData.current_template}
                        />
                    )}
                    {String(templateData.defaultTemplate) === "6" && (
                        <CartTemplate6
                            product={productData}
                            productImage={productImage}
                            enable={templateData.enable}
                            animationEnable={templateData.animationEnable}
                            current_template={templateData.current_template}
                        />
                    )}
                    {String(templateData.defaultTemplate) === "7" && (
                        <CartTemplate7
                            product={productData}
                            productImage={productImage}
                            enable={templateData.enable}
                            animationEnable={templateData.animationEnable}
                            current_template={templateData.current_template}
                        />
                    )}
                    {String(templateData.defaultTemplate) === "8" && (
                        <CartTemplate8
                            product={productData}
                            productImage={productImage}
                            enable={templateData.enable}
                            animationEnable={templateData.animationEnable}
                            current_template={templateData.current_template}
                        />
                    )}
                </div>
            </>
        );
    }
};

export default ProductContainer;
