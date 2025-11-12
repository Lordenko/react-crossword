import ReactDOM from "react-dom";

import { GameOverPortalProps } from "../../types";

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

    const nextLevelOfDifficulty = () => {
        props.nextLevelOfDifficulty()
        resetGame()
    }

    return ReactDOM.createPortal(
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50 animate-fade-in">
            <div className="bg-white rounded-2xl p-8 shadow-2xl text-center flex flex-col items-center gap-6 max-w-sm w-[90%]">

                {/* FAILED STATE */}
                {props.crosswordStatus === "failed" && (
                    <>
                        <div className="text-red-600 font-bold text-2xl leading-snug">
                            You failed! <br /> Better luck next time!
                        </div>

                        <button
                            className="mt-2 px-6 py-2 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-all active:scale-95 shadow-md"
                            onClick={resetGame}
                        >
                            Try again
                        </button>
                    </>
                )}

                {/* SOLVED STATE */}
                {props.crosswordStatus === "solved" && (
                    <>
                        <div className="text-green-600 font-bold text-2xl leading-snug">
                            Congratulations! <br /> You solved the crossword!
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
                            <button
                                className="flex-1 px-6 py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-all active:scale-95 shadow-md"
                                onClick={resetGame}
                            >
                                Try again
                            </button>

                            {props.crosswordDifficulty !== "hard" &&
                                <button
                                    className="flex-1 px-6 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-all active:scale-95 shadow-md"
                                    onClick={() => { props.nextLevelOfDifficulty(); resetGame(); }}
                                >
                                    Next difficulty
                                </button>
                            }

                        </div>
                    </>
                )}
            </div>
        </div>,
        modalRoot
    );

}

export default GameOverPortal