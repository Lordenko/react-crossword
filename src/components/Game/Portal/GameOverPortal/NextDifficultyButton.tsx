import { NextDifficultyButtonProps } from "../../../../types";

const NextDifficultyButton = (props: NextDifficultyButtonProps) => {

    if (props.crosswordDifficulty === "hard") return null

    return (
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
    )
}

export default NextDifficultyButton