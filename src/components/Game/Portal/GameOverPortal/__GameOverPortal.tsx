import ReactDOM from "react-dom";

import { GameOverPortalProps } from "../../../../types/props";

import FailedState from "./_FailedState";
import SolvedState from "./_SolvedState";

import ModalLayaout from "../../../Layaout/ModalLayaout";

const GameOverPortal = (props: GameOverPortalProps) => {
    if (props.crosswordStatus !== "solved" &&
        props.crosswordStatus !== "failed"
    ) return null;

    return (
        <ModalLayaout>
            <div className="bg-white rounded-2xl p-8 shadow-2xl text-center flex flex-col items-center gap-6 max-w-sm w-[90%]">
                <FailedState
                    crosswordStatus={props.crosswordStatus}
                    resetGame={props.resetGame}
                />

                <SolvedState
                    crosswordStatus={props.crosswordStatus}
                    difficulty={props.difficulty}
                    timer={props.timer}
                    score={props.score}
                    resetGame={props.resetGame}
                    getNextLevelOfDifficulty={props.getNextLevelOfDifficulty}
                    calcScore={props.calcScore}

                    currentPlayerId={props.currentPlayerId}
                    updatePlayerDifficulty={props.updatePlayerDifficulty}
                    updatePlayerScore={props.updatePlayerScore}
                />
            </div>
        </ModalLayaout>
    )


}

export default GameOverPortal