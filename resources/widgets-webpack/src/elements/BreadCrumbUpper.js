import React from "react";
import Breadcumb from "./Breadcrumb";
import Data from "../elements/data";
import styles from "./breadcrumb.module.css";

function BreadCrumbUpper() {
    return (
        <div className={`page-width ${styles.ringbuilderTabSection}`}>
            <ul className={styles.tabUl}>
                {Data.map((item) => (
                    <Breadcumb Data={item} key={item.key} />
                ))}
            </ul>
        </div>
    );
}

export default BreadCrumbUpper;
