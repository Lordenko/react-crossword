import ReactDOM from "react-dom";

import { ModalLayaoutProps } from "../../types/props";

const ModalLayaout = ({ children }: ModalLayaoutProps) => {
    const modalRoot = document.getElementById("modal-root");
    if (!modalRoot) return null;

    return ReactDOM.createPortal(
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50 animate-fade-in">
            {children}
        </div>,
        modalRoot
    );
};

export default ModalLayaout;
