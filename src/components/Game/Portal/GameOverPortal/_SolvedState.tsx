import { useEffect } from "react";
import { SolvedStatePortalProps } from "../../../../types/props";

import TryAgainButton from "./TryAgainButton";
import NextDifficultyButton from "./NextDifficultyButton";
import ScoreBanner from "./ScoreBanner";

const SolvedState = (props: SolvedStatePortalProps) => {
    useEffect(() => {
        if (props.crosswordStatus !== "solved") return
        if (props.currentPlayerId === null) return
        props.updatePlayerScore(
            props.currentPlayerId,
            props.score + props.calcScore(props.timer, props.difficulty))
    }, [])

    if (props.crosswordStatus !== "solved") return null

    return (
        <>
            <div className="text-green-600 font-bold text-2xl leading-snug">
                Congratulations! <br /> You solved the crossword!
            </div>

            <ScoreBanner
                score={props.score}
                timer={props.timer}
                crosswordDifficulty={props.difficulty}
                calcScore={props.calcScore}
            />

            <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
                <TryAgainButton
                    resetGame={props.resetGame}
                />

                <NextDifficultyButton
                    crosswordDifficulty={props.difficulty}
                    currentPlayerId={props.currentPlayerId}
                    getNextLevelOfDifficulty={props.getNextLevelOfDifficulty}
                    updatePlayerDifficulty={props.updatePlayerDifficulty}
                    resetGame={props.resetGame}
                />
            </div>
        </>
    )
}

export default SolvedState
