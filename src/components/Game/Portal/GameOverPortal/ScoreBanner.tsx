import { ScoreBannerProps } from "../../../../types/props"

const ScoreBanner = (props: ScoreBannerProps) => {
    return (
        <div className="bg-white text-gray-800 px-4 mt-2 text-center">
            <div className="text-2xl font-bold text-green-600">
                +{props.calcScore(props.timer, props.crosswordDifficulty)} XP
            </div>

            <div className="mt-1 text-lg font-semibold text-gray-700">
                Total: {props.score}
            </div>
        </div>
    )
}

export default ScoreBanner