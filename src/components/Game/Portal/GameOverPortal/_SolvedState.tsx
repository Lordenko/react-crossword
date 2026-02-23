import { useEffect } from "react";
import { SolvedStatePortalProps } from "../../../../types/props";

import TryAgainButton from "./TryAgainButton";
import NextDifficultyButton from "./NextDifficultyButton";
import ScoreBanner from "./ScoreBanner";

const SolvedState = (props: SolvedStatePortalProps) => {
    const {
        calcScore,
        crosswordStatus,
        currentPlayerId,
        difficulty,
        getNextLevelOfDifficulty,
        resetGame,
        score,
        timer,
        updatePlayerDifficulty,
        updatePlayerScore,
    } = props

    useEffect(() => {
        if (crosswordStatus !== "solved") return
        if (currentPlayerId === null) return
        updatePlayerScore(
            currentPlayerId,
            score + calcScore(timer, difficulty))
    }, [crosswordStatus, currentPlayerId, score, timer, difficulty, updatePlayerScore, calcScore])

    if (crosswordStatus !== "solved") return null

    return (
        <>
            <div className="text-green-600 font-bold text-2xl leading-snug">
                Congratulations! <br /> You solved the crossword!
            </div>

            <ScoreBanner
                score={score}
                timer={timer}
                crosswordDifficulty={difficulty}
                calcScore={calcScore}
            />

            <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
                <TryAgainButton
                    resetGame={resetGame}
                />

                <NextDifficultyButton
                    crosswordDifficulty={difficulty}
                    currentPlayerId={currentPlayerId}
                    getNextLevelOfDifficulty={getNextLevelOfDifficulty}
                    updatePlayerDifficulty={updatePlayerDifficulty}
                    resetGame={resetGame}
                />
            </div>
        </>
    )
}

export default SolvedState
