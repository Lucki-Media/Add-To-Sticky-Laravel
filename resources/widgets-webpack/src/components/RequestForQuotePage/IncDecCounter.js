import { useState } from "react";
import "./index-module.css";
import { useCookies } from "react-cookie";

const IncDecCounter = ({ count, product_id, inccallback }) => {
    const [cookies, setCookie, removeCookie] = useCookies("LM_Quote_sessionId");
    let [num, setNum] = useState(count);
    const [isValid, setIsValid] = useState(true);
    let incNum = async (e) => {
        if (num < 100) {
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    shop_domain: window.location.host,
                    session_id: cookies.LM_Quote_sessionId,
                    quantity: Number(num) + 1,
                    product_id: product_id,
                }),
            };
            try {
                const res = await fetch(
                    `${process.env.REACT_APP_API_URL}` + "updateQuantity",
                    requestOptions
                );
                const quote_data = await res.json();
                const res1 = await fetch(
                    `${process.env.REACT_APP_API_URL}` +
                        "getQuotedProductCount",
                        requestOptions
                );
                const set_count = await res1.json();
                inccallback(set_count.data);
                // window.location.reload();
            } catch (error) {
                console.log();
            }
            setNum(Number(num) + 1);
        }
    };
    let decNum = async (e) => {
        if (num > 0) {
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    shop_domain: window.location.host,
                    session_id: cookies.LM_Quote_sessionId,
                    quantity: num - 1,
                    product_id: product_id,
                }),
            };
            try {
                const res = await fetch(
                    `${process.env.REACT_APP_API_URL}` + "updateQuantity",
                    requestOptions
                );
                const quote_data = await res.json();
                const res1 = await fetch(
                    `${process.env.REACT_APP_API_URL}` +
                        "getQuotedProductCount",
                        requestOptions
                );
                const set_count = await res1.json();
                inccallback(set_count.data);
                // window.location.reload();
            } catch (error) {
                console.log();
            }
            setNum(num - 1);
        }
    };
    let handleChange = async (e) => {
        // Perform validation
        const isValidNumber = !isNaN(e.target.value);
        if(e.target.value < 1 || !isValidNumber){
            setNum(1);
        }else{
            setNum(e.target.value);
        }
        // console.log('num');
        // console.log(num);
        const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    shop_domain: window.location.host,
                    session_id: cookies.LM_Quote_sessionId,
                    quantity: e.target.value < 1 || !isValidNumber ? 1 : e.target.value,
                    product_id: product_id,
                }),
            };
            try {
                const res = await fetch(
                    `${process.env.REACT_APP_API_URL}` + "updateQuantity",
                    requestOptions
                );
                const quote_data = await res.json();
                const res1 = await fetch(
                    `${process.env.REACT_APP_API_URL}` +
                        "getQuotedProductCount",
                        requestOptions
                );
                const set_count = await res1.json();
                inccallback(set_count.data);
                // window.location.reload();
            } catch (error) {
                console.log();
            }
        
    };
    return (
        <div className="input-group">
            <div className="input-group-prepend">
                <button
                    disabled={num === 1 ? true : false}
                    className="btn btn-outline-primary"
                    type="button"
                    onClick={decNum}
                >
                    -
                </button>
            </div>
            <input
                type="text"
                min={1}
                className="form-control"
                value={num}
                onChange={handleChange}
            />
            <div className="input-group-prepend">
                <button
                    className="btn btn-outline-primary"
                    type="button"
                    onClick={incNum}
                >
                    +
                </button>
            </div>
            {/* {!isValid || num === "" &&<div className="lm_error_class">Please enter a valid number.</div>} */}
        </div>
    );
};

export default IncDecCounter;
