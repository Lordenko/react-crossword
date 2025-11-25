import { FailedStatePortalProps } from "../../../types";

const FailedState = (props: FailedStatePortalProps) => {
    return (
        <>
            <div className="text-red-600 font-bold text-2xl leading-snug">
                You failed! <br /> Better luck next time!
            </div>

            <button
                className="mt-2 px-6 py-2 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-all active:scale-95 shadow-md"
                onClick={props.resetGame}
            >
                Try again
            </button>
        </>
    )
}

export default FailedState
