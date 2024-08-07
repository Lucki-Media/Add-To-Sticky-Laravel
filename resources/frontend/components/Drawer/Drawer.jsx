import React, { useState } from "react";
import "../../css/index.css";

export default function Drawer({ isOpen }) {
    return (
        <div className={`drawer_wrapper ${isOpen ? "open" : ""}`}>
            <div className={`drawer ${isOpen ? "open" : ""} drawer_right`}>
                <div className="drawer_content">
                    <button>Close</button>
                    {/* Add your cart content here */}
                    <p>Your cart items...</p>
                </div>
            </div>
        </div>
    );
}
