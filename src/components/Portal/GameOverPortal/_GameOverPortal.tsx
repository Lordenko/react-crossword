import ReactDOM from "react-dom";

import { GameOverPortalProps } from "../../../types";

import FailedState from "./FailedState";
import SolvedState from "./SolvedState";

const GameOverPortal = (props: GameOverPortalProps) => {
    const modalRoot = document.getElementById("modal-root");
    if (!modalRoot
        || props.crosswordStatus !== "solved"
        && props.crosswordStatus !== "failed") return null;

    const resetGame = () => {
        props.clearInputWords()
        props.setCrosswordStatus("progress")
        props.resetTimer()
        props.startTimer()
    }

    return ReactDOM.createPortal(
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50 animate-fade-in">
            <div className="bg-white rounded-2xl p-8 shadow-2xl text-center flex flex-col items-center gap-6 max-w-sm w-[90%]">

                {/* FAILED STATE */}
                {props.crosswordStatus === "failed" && (
                    <FailedState resetGame={resetGame} />
                )}

                {/* SOLVED STATE */}
                {props.crosswordStatus === "solved" && (
                    <SolvedState resetGame={resetGame} nextLevelOfDifficulty={props.nextLevelOfDifficulty} crosswordDifficulty={props.crosswordDifficulty} />
                )}
            </div>
        </div>,
        modalRoot
    );

}

export default GameOverPortal