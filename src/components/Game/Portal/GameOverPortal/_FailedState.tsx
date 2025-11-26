import { FailedStatePortalProps } from "../../../../types";

import TryAgainButton from "./TryAgainButton";

const FailedState = (props: FailedStatePortalProps) => {
    if (props.crosswordStatus !== "failed") return null

    return (
        <>
            <div className="text-red-600 font-bold text-2xl leading-snug">
                You failed! <br /> Better luck next time!
            </div>

            <TryAgainButton resetGame={props.resetGame} />
        </>
    )
}

export default FailedState
