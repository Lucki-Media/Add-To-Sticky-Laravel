import React, { useEffect, useState } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css"; // Import the necessary styles

const UpSellBottomSheet = (props) => {
    const [open, setOpen] = useState(false);

    // Use useEffect to update the state when props.enableUpSell changes
    useEffect(() => {
        setOpen(props.enableUpSell);
    }, [props.enableUpSell]);

    const toggleBottomSheet = () => setOpen(!open);

    return (
        <div className="popup_container">
            <BottomSheet
                open={open}
                onDismiss={toggleBottomSheet}
                snapPoints={({ maxHeight }) => [maxHeight - 80, maxHeight / 2]}
            >
                <div style={{ padding: "1rem" }}>
                    <h2>Bottom Sheet Title</h2>
                    <p>
                        This is the content of the bottom sheet. You can put any
                        information or interactive elements here.
                    </p>
                    <button onClick={toggleBottomSheet}>Close</button>
                </div>
            </BottomSheet>
        </div>
    );
};

export default UpSellBottomSheet;
