import WordInput from "./WordInput"

import { CrosswordBoardProps } from "../../types"

const CrosswordBoard = (props: CrosswordBoardProps) => {
    return (
        <div className="grid grid-cols-3 gap-2 w-80 sm:w-96 mx-auto mt-8">
            {Array.from({ length: 3 }).map((_, i) =>
                Array.from({ length: 3 }).map((_, j) => (
                    <div
                        key={`${i}-${j}`}
                        className="bg-white border border-gray-300 rounded-xl shadow-sm aspect-square flex items-center justify-center text-lg font-semibold transition-all"
                    >
                        <WordInput
                            elementIndex={{ row: i, col: j }}
                            activeElementIndex={props.activeElementIndex}
                            setActiveElementIndex={props.setActiveElementIndex}
                            inputWords={props.inputWords}
                            setInputWord={props.setInputWord}
                            crosswordWords={props.crosswordWords}
                        />
                    </div>
                ))
            )}
        </div>
    )

}

export default CrosswordBoard