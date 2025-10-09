import React, { useState } from 'react';

import Layaout from './_Layaout';

import WordInput from '../components/Inputs/WordInput'

const Game = () => {
    // const [words, setWords] = useState<string[]>(['a', 'm', 'a', 'm', 'a', 'm', 'a', 'm', 'a'])
    const [words, setWords] = useState<string[]>([])
    const setWord = (index: number, newWord: string) => {
        setWords(prev => {
            const updated = [...prev];
            updated[index] = newWord;
            return updated;
        });
    }; // кастомний хук

    const [activeIndex, setActiveIndex] = useState<number>(-1)


    return (
        <>
            <div className="grid grid-cols-3 gap-2 w-96 mx-auto">
                {Array.from({ length: 9 }).map((_, i) => (
                    <div
                        key={i}
                        className="bg-gray-200 border border-gray-400 aspect-square flex items-center justify-center text-lg font-semibold"
                    >
                        <WordInput
                            index={i}
                            words={words}
                            activeIndex={activeIndex}
                            setActiveIndex={setActiveIndex}
                            onChange={setWord}></WordInput>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Game;
