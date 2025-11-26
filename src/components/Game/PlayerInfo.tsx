import { PlayerInfoProps } from "../../types/props"

const PlayerInfo = (props: PlayerInfoProps) => {
    return (
        <div className="w-80 sm:w-96 mx-auto mt-4 mb-10 bg-white border border-gray-200 shadow-lg rounded-2xl p-4 flex flex-col gap-2 text-center">
            <h3 className="text-xl font-semibold text-gray-800">Player Info</h3>

            <div className="text-gray-700 text-sm sm:text-base space-y-1">
                <p><span className="font-medium text-gray-500">Username:</span> {props.username || "guest"}</p>
                <p><span className="font-medium text-gray-500">Difficulty:</span> {props.difficulty}</p>
                <p><span className="font-medium text-gray-500">Score:</span> {props.score}</p>
            </div>
        </div>
    )
}

export default PlayerInfo