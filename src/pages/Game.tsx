import React, { useEffect, useState } from 'react';

import wordsJsonRaw from '../data/words.json'

import WordInput from '../components/Inputs/WordInput'

import { useWords, useActiveElementIndex } from '../state/index'

import { WordsJson } from '../type';


const wordsJson: WordsJson = wordsJsonRaw as WordsJson

const Game = () => {
    const { activeElementIndex, setActiveElementIndex } = useActiveElementIndex()
    const { inputWords, setInputWords, setInputWord } = useWords()
    useEffect(() => {
        // setWords(wordsJson.grids[0].grid)
    }, [])

    return (
        <>
            <div className="grid grid-cols-3 gap-2 w-96 mx-auto">
                {Array.from({ length: 3 }).map((_, i) => (
                    Array.from({ length: 3 }).map((_, j) => (
                        <div
                            key={`${i}-${j}`}
                            className="bg-gray-200 border border-gray-400 aspect-square flex items-center justify-center text-lg font-semibold"
                        >
                            <WordInput
                                elementIndex={{ "row": i, "col": j }}
                                activeElementIndex={activeElementIndex}
                                setActiveElementIndex={setActiveElementIndex}
                                inputWords={inputWords}
                                setInputWord={setInputWord}></WordInput>
                        </div>
                    ))

                ))}
            </div>
        </>
    );
}
export default Game;
