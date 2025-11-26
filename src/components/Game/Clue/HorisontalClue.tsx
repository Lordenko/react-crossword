import { ClueListProps } from "../../../types"

const HorisontalClue = (props: ClueListProps) => {
    return (
        <div className="bg-blue-50 p-4 rounded-2xl shadow-sm border border-blue-100">
            <h3 className="font-semibold text-blue-700 mb-2 text-center sm:text-left">Horizontal</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm sm:text-base">
                {props.clueList.map((clue, index) => (
                    <li key={index}>{clue}</li>
                ))}
            </ul>
        </div>
    )
}

export default HorisontalClue
