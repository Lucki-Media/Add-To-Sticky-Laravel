import React, { useEffect, useState } from "react";
import TemplateStyle from "../Templates/TemplateStyle.js";
import CartTemplate1 from "../Templates/CartTemplate.jsx";
import CartTemplate2 from "../Templates/CartTemplate2.jsx";
import CartTemplate3 from "../Templates/CartTemplate3.jsx";
import CartTemplate4 from "../Templates/CartTemplate4.jsx";
import CartTemplate5 from "../Templates/CartTemplate5.jsx";
import CartTemplate6 from "../Templates/CartTemplate6.jsx";
import CartTemplate7 from "../Templates/CartTemplate7.jsx";
import CartTemplate8 from "../Templates/CartTemplate8.jsx";
import "./index.css";
const ProductContainer = (props) => {
    const [value, setValue] = useState(1);
    const [heightValue, setHeightValue] = useState(70);
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
            const response = await fetch(
                window.location.href + ".json"
            );
            const data = await response.json();
            // console.log('imageData');
            // console.log(data.product.image);
            setProductImage(
                data.product.image !== undefined && data.product.image.src !== undefined
                 ? data.product.image.src : null );
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
            // console.log(data.data);
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

        setValue(TemplateStyle.default_template);
        setHeightValue(
            TemplateStyle.current_template.general_settings.font_height
        );
    }, []);
    console.log(templateData.defaultTemplate);
    if (productData.length <= 0) {
        return <div>Loading</div>;
    } else {
        return (
            <>
                <div style={{ height: heightValue, marginTop: 50 }}>
                    {templateData.defaultTemplate === 1 ? (
                        <CartTemplate1
                            product={productData}
                            productImage={productImage}
                            templateData={templateData}
                        />
                    ) : (
                        ""
                    )}
                    {templateData.defaultTemplate === 2 ? (
                        <CartTemplate2
                            product={productData}
                            productImage={productImage}
                            templateData={templateData}
                        />
                    ) : (
                        ""
                    )}
                    {templateData.defaultTemplate === 3 ? (
                        <CartTemplate3
                            product={productData}
                            productImage={productImage}
                            templateData={templateData}
                        />
                    ) : (
                        ""
                    )}
                    {templateData.defaultTemplate === 4 ? (
                        <CartTemplate4
                            product={productData}
                            productImage={productImage}
                            templateData={templateData}
                        />
                    ) : (
                        ""
                    )}
                    {templateData.defaultTemplate === 5 ? (
                        <CartTemplate5
                            product={productData}
                            productImage={productImage}
                            templateData={templateData}
                        />
                    ) : (
                        ""
                    )}
                    {templateData.defaultTemplate === 6 ? (
                        <CartTemplate6
                            product={productData}
                            productImage={productImage}
                            templateData={templateData}
                        />
                    ) : (
                        ""
                    )}
                    {templateData.defaultTemplate === 7 ? (
                        <CartTemplate7
                            product={productData}
                            productImage={productImage}
                            templateData={templateData}
                        />
                    ) : (
                        ""
                    )}
                    {templateData.defaultTemplate === 8 ? (
                        <CartTemplate8
                            product={productData}
                            productImage={productImage}
                            templateData={templateData}
                        />
                    ) : (
                        ""
                    )}
                </div>
            </>
        );
    }
};

export default ProductContainer;
