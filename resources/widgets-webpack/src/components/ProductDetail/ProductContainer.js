import React, { useEffect, useState } from "react";
import TemplateStyle from "../Templates/TemplateStyle.js";
import CartTemplate1 from "../Templates/CartTemplate.jsx";
import CartTemplate2 from "../Templates/CartTemplate2.jsx";
import CartTemplate3 from "../Templates/CartTemplate3.jsx";
import CartTemplate4 from "../Templates/CartTemplate4.jsx";

const ProductContainer = (props) => {
  const [value, setValue] = useState(1);
  const [heightValue, setHeightValue] = useState(70);
  const [productData, setProductData] = useState([]);

  // USE EFFECT
  useEffect(() => {
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
    singleProduct();
    // console.log(TemplateStyle);
    setValue(TemplateStyle.default_template);
    setHeightValue(TemplateStyle.current_template.general_settings.font_height);
  }, []);
  if (productData.length <= 0) {
    return <div>Loading</div>;
  } else {
    return (
      <>
        <div style={{ height: heightValue, marginTop: 50 }}>
          {value === 1 ? <CartTemplate1 product={productData} /> : ""}
          {value === 2 ? <CartTemplate2 /> : ""}
          {value === 3 ? <CartTemplate3 /> : ""}
          {value === 4 ? <CartTemplate4 /> : ""}
        </div>
      </>
    );
  }
};

export default ProductContainer;
