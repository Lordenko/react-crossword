import { ClueListProps } from "../../../types"

const VerticalClue = (props: ClueListProps) => {
    return (
        <div className="bg-green-50 p-4 rounded-2xl shadow-sm border border-green-100">
            <h3 className="font-semibold text-green-700 mb-2 text-center sm:text-left">Vertical</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm sm:text-base">
                {props.clueList.map((clue, index) => (
                    <li key={index}>{clue}</li>
                ))}
            </ul>
        </div>
    )

}

export default VerticalClue