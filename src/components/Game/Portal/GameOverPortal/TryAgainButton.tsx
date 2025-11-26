import { TryAgainButtonProps } from "../../../../types/props";

const TryAgainButton = (props: TryAgainButtonProps) => {
    return (
        <button
            className="mt-2 px-6 py-2 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-all active:scale-95 shadow-md"
            onClick={props.resetGame}
        >
            Try again
        </button>
    )
}

export default TryAgainButton