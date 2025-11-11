import ReactDOM from "react-dom";

import { FinishGamePortalProps } from "../../type";

const FinishGamePortal = (props: FinishGamePortalProps) => {
    const modalRoot = document.getElementById("modal-root");
    if (!modalRoot || !props.crosswordSolved) return null;

    return ReactDOM.createPortal(
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50 animate-fade-in">
            <div className="bg-white rounded-2xl p-6 shadow-2xl text-center flex flex-col items-center gap-5 max-w-sm w-[90%]">
                <div className="text-green-600 font-bold text-2xl">
                    🎉 Congratulations! <br /> You solved the crossword!
                </div>

                <button
                    className="mt-2 px-6 py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-all active:scale-95 shadow-md"
                    onClick={() => {
                        props.clearInputWords()
                        props.setCrosswordSolved(false)
                    }}
                >
                    Close
                </button>
            </div>
        </div>,
        modalRoot
    )
}

export default FinishGamePortal