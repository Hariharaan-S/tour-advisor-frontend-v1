import React from "react";
import "./popup-menu.styles.css";

const PopupMenu = React.forwardRef(({ isOpen, onClose, children }, ref) => {
    if (!isOpen) return null;
    return (
        <div
            ref={ref}
            className="popup-menu"
            onClick={(e) => {
                e.stopPropagation();
            }}
        >
            {children}
        </div>
    );
});

export default PopupMenu;