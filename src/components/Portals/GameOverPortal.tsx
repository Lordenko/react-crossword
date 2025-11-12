import ReactDOM from "react-dom";

import { GameOverPortalProps } from "../../types";

const GameOverPortal = (props: GameOverPortalProps) => {
    const modalRoot = document.getElementById("modal-root");
    if (!modalRoot
        || props.crosswordStatus !== "solved"
        && props.crosswordStatus !== "failed") return null;

    return ReactDOM.createPortal(
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50 animate-fade-in">
            <div className="bg-white rounded-2xl p-6 shadow-2xl text-center flex flex-col items-center gap-5 max-w-sm w-[90%]">

                {props.crosswordStatus === "failed" &&
                    <div className="text-red-600 font-bold text-2xl">
                        You failed! <br /> Better luck next time!
                    </div>
                }

                {props.crosswordStatus === "solved" &&
                    <div className="text-green-600 font-bold text-2xl">
                        Congratulations! <br /> You solved the crossword!
                    </div>
                }

                <button
                    className="mt-2 px-6 py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-all active:scale-95 shadow-md"
                    onClick={() => {
                        props.clearInputWords()
                        props.setCrosswordStatus("progress")
                        props.resetTimer()
                        props.startTimer()
                    }}
                >
                    Try again
                </button>
            </div>
        </div>,
        modalRoot
    )
}

export default GameOverPortal