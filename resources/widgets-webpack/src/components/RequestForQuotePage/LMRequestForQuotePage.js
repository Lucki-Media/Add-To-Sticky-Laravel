import React, { useCallback, useEffect, useState } from "react";
import IncDecCounter from "./IncDecCounter";
import Table from "react-bootstrap/Table";
import { FaTrashAlt } from "@react-icons/all-files/fa/FaTrashAlt";
import "./index-module.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Card, CardContent, Skeleton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCookies } from "react-cookie";
import { LoadingOverlay, Loader } from "react-overlay-loader";
import "./index-module.css";
import getSymbolFromCurrency from "currency-symbol-map";

const toastList = new Set();
function handleToast() {
    const id = toast.loading("Your Quote is submitted", {
        position: "top-center",
        autoClose: 3000,
    });
    setTimeout(() => {
        toast.update(id, {
            render: "Your Quote is submitted",
            type: toast.TYPE.INFO,
            autoClose: 3000,
        });
    }, 1000);
    setTimeout(() => {
        toast.dismiss(id);
    }, 3000);
    toastList.add(id);
}
const LMRequestForQuotePage = (props) => {
    let errors = {};
    let formIsValid = true;
    let timeout = 3000;
    const [geterror, seterror] = useState([""]);
    const [count, setCount] = useState();
    const [showTable, setShowTable] = useState(false);
    const [cookies, setCookie, removeCookie] = useCookies("LM_Quote_sessionId");
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const getQuotedProducts = async () => {
        const res = await fetch(
            `${process.env.REACT_APP_API_URL}` +
                "getQuotedProducts/" +
                window.location.host +
                "/" +
                cookies.LM_Quote_sessionId,
            {
                method: "GET",
            }
        );
        const quoted_products = await res.json();
        setProducts(quoted_products.data);
        setShowTable(true);
    };
    let handleDeleteProduct = async (product_id) => {
        // console.log(product_id);
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                shop_domain: window.location.host,
                session_id: cookies.LM_Quote_sessionId,
                product_id: product_id,
            }),
        };
        try {
            setShowTable(true);
            const res = await fetch(
                `${process.env.REACT_APP_API_URL}` + "deleteQuotedProduct",
                requestOptions
            );
            const quote_data = await res.json();
            const res1 = await fetch(
                `${process.env.REACT_APP_API_URL}` + "getQuotedProductCount",
                requestOptions
            );
            const set_count = await res1.json();
            props.callback(set_count.data);
            setShowTable(false);
            getQuotedProducts();
        } catch (error) {
            console.log();
        }
    };
    let handleStoreQPAdmin = async (e) => {
        e.preventDefault();
        if (name === "") {
            errors["yourname"] =
                window.LMSettingsScript.translation_settings.inv_name;
            formIsValid = false;
        }
        const regex =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (regex.test(email) === false) {
            errors["youremail"] =
                window.LMSettingsScript.translation_settings.inv_email;
            formIsValid = false;
        }
        if (message === "") {
            errors["yourmsg"] =
                window.LMSettingsScript.translation_settings.inv_phone;
            formIsValid = false;
        }
        if (formIsValid == false) {
            console.log(errors);
            seterror(errors);
            return;
        }
        setLoaded(true);
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                shop_domain: window.location.host,
                session_id: cookies.LM_Quote_sessionId,
                name: name,
                email: email,
                message: message,
            }),
        };
        try {
            setShowTable(true);
            const res = await fetch(
                `${process.env.REACT_APP_API_URL}` + "storeQuotedProductsAdmin",
                requestOptions
            );
            const quote_data = await res.json();
            const res1 = await fetch(
                `${process.env.REACT_APP_API_URL}` + "getQuotedProductCount",
                requestOptions
            );
            const set_count = await res1.json();
            props.callback(set_count.data);
            handleToast();
            setShowTable(false);
            getQuotedProducts();
        } catch (error) {
            console.log();
        }
        setLoaded(false);
    };

    // setCurrency(
    //         getSymbolFromCurrency(productData.data.products[0].currency)
    //     );
    // console.log();
    const handleCountInc = (e) => {
        props.incDecCallback(e);
    };
    useEffect(() => {
        getQuotedProducts();
    }, []);
    // console.log(process.env.REACT_APP_IMAGE_URL);
    if (showTable === false) {
        return (
            <>
                <div className="tool-container">
                    <Skeleton height={80} />
                    <Skeleton />
                    <div className="Skeleton-type">
                        <Skeleton count={9} height={60} />
                    </div>
                    <div className="Skeleton-settings">
                        <div className="skeleton-div">
                            <div className="skelton-info">
                                {/* <h4 className="div-left"><Skeleton /></h4> */}
                                <div className="div-right">
                                    {" "}
                                    <Skeleton count={8} height={60} />
                                </div>
                            </div>
                        </div>
                        <div className="skeleton-div">
                            <div className="skelton-info">
                                {/* <h4 className="div-left"><Skeleton /></h4> */}
                                <div className="div-right-price">
                                    <Skeleton height={60} />
                                </div>
                                <div className="div-right-metal">
                                    <Skeleton height={60} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Skeleton />
                </div>
            </>
        );
    } else if (products.length > 0) {
        return (
            <>
                <style>
                    {`
                        .react-overlay-loader-spinner {
                            background-image: url(${
                                process.env.REACT_APP_IMAGE_URL +
                                process.env.PUBLIC_URL +
                                "images/loading-gif.gif"
                            });
                        }
                    `}
                </style>
                <LoadingOverlay className="loading_overlay_wrapper">
                    <Loader fullPage loading={loaded} />
                </LoadingOverlay>
                <ToastContainer />
                {/* autoClose = {3000}
                    position="top-center"
                    // hideProgressBar={false}
                    // newestOnTop={false}
                    // closeOnClick
                    // rtl={false}
                    // pauseOnFocusLoss
                    // draggable
                    // pauseOnHover
                /> */}
                <div className="quote_cart_block">
                    <div className="page-width page-width--narrow">
                        {/* <h1 className="heading">Request For a Quote</h1> */}

                        <div className="product-data-table">
                            <Table responsive="md">
                                <thead>
                                    <tr>
                                        <th>
                                            {
                                                window.LMSettingsScript
                                                    .translation_settings.img
                                            }
                                        </th>
                                        <th>
                                            {
                                                window.LMSettingsScript
                                                    .translation_settings
                                                    .product_req_page
                                            }
                                        </th>
                                        <th>
                                            {
                                                window.LMSettingsScript
                                                    .translation_settings
                                                    .quantty
                                            }
                                        </th>
                                        <th>
                                            {
                                                window.LMSettingsScript
                                                    .translation_settings
                                                    .req_page_remove
                                            }
                                        </th>
                                        {window.LMSettingsScript
                                            .hide_price_settings.hide_price ===
                                            "1" && (
                                            <th>
                                                {
                                                    window.LMSettingsScript
                                                        .translation_settings
                                                        .price
                                                }
                                            </th>
                                        )}
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((product) => {
                                        return (
                                            <tr>
                                                <input
                                                    type="hidden"
                                                    id="lm_request_quote_product_id"
                                                    name="custId"
                                                    value={product.id}
                                                />
                                                <td className="cart-product__image">
                                                    <a href={product.url}>
                                                        <img
                                                            src={
                                                                product.image
                                                                    ? product.image
                                                                    : process
                                                                          .env
                                                                          .REACT_APP_IMAGE_URL +
                                                                      process
                                                                          .env
                                                                          .PUBLIC_URL +
                                                                      "images/default_product.png"
                                                            }
                                                        />
                                                    </a>
                                                </td>

                                                <td className="cart-product__name">
                                                    <a href={product.url}>
                                                        {product.title}
                                                    </a>
                                                </td>

                                                <td className="cart-product__quantity">
                                                    <IncDecCounter
                                                        count={product.count}
                                                        product_id={product.id}
                                                        inccallback={
                                                            handleCountInc
                                                        }
                                                    />
                                                </td>
                                                <td className="remove">
                                                    <span>
                                                        <a
                                                            href="#!"
                                                            onClick={() =>
                                                                handleDeleteProduct(
                                                                    product.id
                                                                )
                                                            }
                                                        >
                                                            <DeleteIcon />
                                                        </a>
                                                    </span>
                                                </td>
                                                {window.LMSettingsScript
                                                    .hide_price_settings
                                                    .hide_price === "1" && (
                                                    <td className="pro_price">
                                                        <span>
                                                            {getSymbolFromCurrency(
                                                                product.max_price_curr
                                                            )}{" "}
                                                            {product.max_price}
                                                        </span>
                                                    </td>
                                                )}
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </Table>
                        </div>

                        <div className="request-a-quote-form">
                            <Box
                                component="form"
                                sx={{
                                    "& > :not(style)": { m: 1 },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <div className="form-fields">
                                    <div className="name">
                                        <label>Enter Your Name</label>
                                        <TextField
                                            id="your_name"
                                            className="request-input"
                                            variant="outlined"
                                            type="text"
                                            value={name}
                                            onChange={(e) => {
                                                setName(e.target.value);
                                            }}
                                        />
                                        <p style={{ color: "red" }}>
                                            {geterror.yourname}
                                        </p>
                                    </div>
                                    <div className="email">
                                        <label>Enter Your Email</label>
                                        <TextField
                                            id="your_email"
                                            variant="outlined"
                                            className="request-input"
                                            type="email"
                                            value={email}
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                            }}
                                        />
                                        <p style={{ color: "red" }}>
                                            {geterror.youremail}
                                        </p>
                                    </div>
                                </div>
                                <div className="message">
                                    <label>Message</label>
                                    <TextField
                                        id="Message"
                                        type="textarea"
                                        className="request-input"
                                        multiline
                                        rows={4}
                                        maxRows={8}
                                        value={message}
                                        onChange={(e) => {
                                            setMessage(e.target.value);
                                        }}
                                    />
                                    <p style={{ color: "red" }}>
                                        {geterror.yourmsg}
                                    </p>
                                </div>
                                <button
                                    className="btn button preference-btn"
                                    style={{
                                        background: "black",
                                        cursor: "pointer",
                                        position: "relative",
                                        color: "#fff",
                                        fontSize: "14px",
                                        textAlign: "center",
                                        width: "30%",
                                        marginTop: "5px",
                                        marginBottom: "12px",
                                        zIndex: "9999999",
                                    }}
                                    onClick={handleStoreQPAdmin}
                                >
                                    <span>
                                        {
                                            window.LMSettingsScript
                                                .translation_settings
                                                .submit_qyt_btn_txt
                                        }
                                    </span>
                                </button>
                                {/* <Button
                                        variant="contained"
                                        onClick={handleStoreQPAdmin}
                                    >
                                        {
                                            window.LMSettingsScript
                                                .translation_settings
                                                .submit_qyt_btn_txt
                                        }
                                    </Button> */}
                            </Box>
                        </div>
                    </div>
                </div>
            </>
        );
    } else {
        return (
            <div className="tool-container">
                {/* <Box> */}
                {/* <Card>
                        <CardContent> */}
                <Typography
                    sx={{ fontSize: 18 }}
                    color="text.secondary"
                    gutterBottom
                >
                    {window.LMSettingsScript.translation_settings.empty_qyt_msg}
                </Typography>
                {/* </CardContent>
                    </Card> */}
                {/* </Box> */}
            </div>
        );
    }
};

export default LMRequestForQuotePage;
