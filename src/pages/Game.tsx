import React, { useEffect, useState } from 'react';

import wordsJsonRaw from '../data/words.json'

import WordInput from '../components/Inputs/WordInput'

import { useInputWords, useCrosswordWords, useActiveElementIndex, useCrosswordSolved, useCrosswordSettings } from '../state/index'

import { WordsJson } from '../type';

const wordsJson: WordsJson = wordsJsonRaw as WordsJson

const Game = () => {
    const { activeElementIndex, setActiveElementIndex } = useActiveElementIndex()
    const { inputWords, setInputWords, setInputWord } = useInputWords()
    const { crosswordWords, setCrosswordWords } = useCrosswordWords()
    const { crosswordSolved, setCrosswordSolved } = useCrosswordSolved()
    const { numberOfCrossword, setNumberOfCrossword } = useCrosswordSettings()

    useEffect(() => {
        setNumberOfCrossword(0)
    }, [])

    useEffect(() => {
        if (numberOfCrossword != -1) {
            setCrosswordWords(wordsJson.grids[numberOfCrossword].grid)
        }
    }, [numberOfCrossword])

    useEffect(() => {
        if (checkCrossword(inputWords, crosswordWords)) {
            setCrosswordSolved(true)
        }
        console.log(crosswordSolved);
    }, [inputWords, crosswordWords])

    return (
        <>
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
                                crosswordWords={crosswordWords}
                            />
                        </div>
                    ))
                )}
            </div>

            {/* Clues Section */}
            {numberOfCrossword != -1 &&
                <div className="mt-8 w-80 sm:w-96 mx-auto space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                        {/* Horizontal Clues */}
                        <div className="bg-blue-50 p-4 rounded-2xl shadow-sm border border-blue-100">
                            <h3 className="font-semibold text-blue-700 mb-2 text-center sm:text-left">Horizontal</h3>
                            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm sm:text-base">
                                {wordsJson.grids[numberOfCrossword].clue.Horizontal.map((clue, index) => (
                                    <li key={index}>{clue}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Vertical Clues */}
                        <div className="bg-green-50 p-4 rounded-2xl shadow-sm border border-green-100">
                            <h3 className="font-semibold text-green-700 mb-2 text-center sm:text-left">Vertical</h3>
                            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm sm:text-base">
                                {wordsJson.grids[numberOfCrossword].clue.Vertical.map((clue, index) => (
                                    <li key={index}>{clue}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>}


            {/* Congratulations message */}
            {crosswordSolved && (
                <div className="text-center mt-8 text-green-600 font-bold text-xl animate-bounce">
                    🎉 Congratulations! You solved the crossword!
                </div>
            )}
        </>
    );
}

const checkCrossword = (inputWords: string[][], crosswordWords: string[][]) => {
    if (inputWords.every((element) => element.every((letter) => letter !== null))) {
        return JSON.stringify(inputWords) === JSON.stringify(crosswordWords)
    }
    else return false
}

export default Game;
