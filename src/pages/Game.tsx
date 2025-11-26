import WordInput from '../components/Input/WordInput'
import FinishGamePortal from '../components/Portal/GameOverPortal/_GameOverPortal'
import PreStartPortal from '../components/Portal/PreStartPortal/_PreStartPortal'
import Timer from '../components/Other/Timer'

import useGameLogic from '../hooks/useGameLogic'
import { useEffect } from 'react'

const Game = () => {
    const GameLogic = useGameLogic()

    return (
        <>
            <PreStartPortal currentPlayerId={GameLogic.currentPlayerId} />

            <div>
                <p>username = {GameLogic.username ? GameLogic.username : "guest"}</p>
                <p>difficulty = {GameLogic.difficulty}</p>
                <p>score = {GameLogic.score}</p>
            </div>

            <Timer
                timer={GameLogic.timer}
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
                                activeElementIndex={GameLogic.activeElementIndex}
                                setActiveElementIndex={GameLogic.setActiveElementIndex}
                                inputWords={GameLogic.inputWords}
                                setInputWord={GameLogic.setInputWord}
                                crosswordWords={GameLogic.crossword.grid}
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
                            {GameLogic.crossword.clue.Horizontal.map((clue, index) => (
                                <li key={index}>{clue}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Vertical Clues */}
                    <div className="bg-green-50 p-4 rounded-2xl shadow-sm border border-green-100">
                        <h3 className="font-semibold text-green-700 mb-2 text-center sm:text-left">Vertical</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm sm:text-base">
                            {GameLogic.crossword.clue.Vertical.map((clue, index) => (
                                <li key={index}>{clue}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>


            {/* Congratulations message */}
            <FinishGamePortal

                difficulty={GameLogic.difficulty}

                crosswordStatus={GameLogic.crosswordStatus}
                setCrosswordStatus={GameLogic.setCrosswordStatus}

                clearInputWords={GameLogic.clearInputWords}

                resetTimer={GameLogic.resetTimer}
                startTimer={GameLogic.startTimer}

                crosswordDifficulty={GameLogic.difficulty}
                getNextLevelOfDifficulty={GameLogic.getNextLevelOfDifficulty}

                score={GameLogic.score}
                timer={GameLogic.timer}
                calcScore={GameLogic.calcScore}
                resetGame={GameLogic.resetGame}

                currentPlayerId={GameLogic.currentPlayerId}
                updatePlayerDifficulty={GameLogic.updatePlayerDifficulty}
                updatePlayerScore={GameLogic.updatePlayerScore}
            />
        </>
    );
}

export default Game;
