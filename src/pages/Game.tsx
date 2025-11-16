import WordInput from '../components/Input/WordInput'
import FinishGamePortal from '../components/Portals/GameOverPortal'
import Timer from '../components/Other/Timer'

import useGameLogic from '../hooks/useGameLogic'
import { useEffect } from 'react'


const Game = () => {
    const {
        crossword,
        crosswordStatus,
        setCrosswordStatus,

        inputWords,
        setInputWord,
        clearInputWords,

        activeElementIndex,
        setActiveElementIndex,

        timer,
        startTimer,
        resetTimer,

        nextLevelOfDifficulty,
        crosswordDifficulty
    } = useGameLogic()

    useEffect(() => {
        startTimer()
    }, [])

    return (
        <>

            <div>
                <p>username = {localStorage.getItem('username')}</p>
                <p>difficulty = {localStorage.getItem('difficulty')}</p>
            </div>

            <Timer
                timer={timer}
            />

            <div className="grid grid-cols-3 gap-2 w-80 sm:w-96 mx-auto mt-8">
                {Array.from({ length: 3 }).map((_, i) =>
                    Array.from({ length: 3 }).map((_, j) => (
                        <div
                            key={`${i}-${j}`}
                            className="bg-white border border-gray-300 rounded-xl shadow-sm aspect-square flex items-center justify-center text-lg font-semibold transition-all"
                        >
                            <WordInput
                                elementIndex={{ row: i, col: j }}
                                activeElementIndex={activeElementIndex}
                                setActiveElementIndex={setActiveElementIndex}
                                inputWords={inputWords}
                                setInputWord={setInputWord}
                                crosswordWords={crossword.grid}
                            />
                        </div>
                    ))
                )}
            </div>

            {/* Clues Section */}
            <div className="mt-8 w-80 sm:w-96 mx-auto space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    {/* Horizontal Clues */}
                    <div className="bg-blue-50 p-4 rounded-2xl shadow-sm border border-blue-100">
                        <h3 className="font-semibold text-blue-700 mb-2 text-center sm:text-left">Horizontal</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm sm:text-base">
                            {crossword.clue.Horizontal.map((clue, index) => (
                                <li key={index}>{clue}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Vertical Clues */}
                    <div className="bg-green-50 p-4 rounded-2xl shadow-sm border border-green-100">
                        <h3 className="font-semibold text-green-700 mb-2 text-center sm:text-left">Vertical</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm sm:text-base">
                            {crossword.clue.Vertical.map((clue, index) => (
                                <li key={index}>{clue}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>


            {/* Congratulations message */}
            <FinishGamePortal
                crosswordStatus={crosswordStatus}
                setCrosswordStatus={setCrosswordStatus}

                clearInputWords={clearInputWords}

                resetTimer={resetTimer}
                startTimer={startTimer}

                crosswordDifficulty={crosswordDifficulty}
                nextLevelOfDifficulty={nextLevelOfDifficulty}
            />
        </>
    );
}

export default Game;
