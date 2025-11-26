import { useEffect } from "react";
import { SolvedStatePortalProps } from "../../../types";

const SolvedState = (props: SolvedStatePortalProps) => {
    useEffect(() => {
        if (props.currentPlayerId === null) return
        props.updatePlayerScore(props.currentPlayerId, props.score + props.calcScore(props.timer, props.crosswordDifficulty))
    }, [])

    return (
        <>
            <div className="text-green-600 font-bold text-2xl leading-snug">
                Congratulations! <br /> You solved the crossword!
            </div>

            <div>{props.calcScore(props.timer, props.crosswordDifficulty)}</div>

            <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
                <button
                    className="flex-1 px-6 py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-all active:scale-95 shadow-md"
                    onClick={props.resetGame}
                >
                    Try again
                </button>

                {props.crosswordDifficulty !== "hard" &&
                    <button
                        className="flex-1 px-6 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-all active:scale-95 shadow-md"
                        onClick={() => {
                            if (props.currentPlayerId === null) return
                            props.updatePlayerDifficulty(props.currentPlayerId, props.getNextLevelOfDifficulty(props.crosswordDifficulty))
                            props.resetGame();
                        }}
                    >
                        Next difficulty
                    </button>
                }

            </div>
        </>
    )
}

export default SolvedState
