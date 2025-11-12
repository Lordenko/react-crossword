import { useEffect } from 'react'
import { CrosswordJson } from '../types';
import { useActiveElementIndex, useCrossword, useCrosswordDifficulty, useCrosswordStatus, useInputWords, useTimer } from '../states/GameLogicState'
import useTimerLogic from './useTimerLogic';

import wordsJsonRaw from '../assets/words.json'
import { start } from 'repl';
const wordsJson: CrosswordJson = wordsJsonRaw as CrosswordJson



const useGameLogic = () => {
    const { activeElementIndex, setActiveElementIndex } = useActiveElementIndex()
    const { inputWords, setInputWord, clearInputWords } = useInputWords()
    const { crossword, setCrossword } = useCrossword()
    const { crosswordStatus, setCrosswordStatus } = useCrosswordStatus()
    const { crosswordDifficulty, nextLevelOfDifficulty, setCrosswordDifficulty } = useCrosswordDifficulty()

    const {
        currentTimer: timer,
        setTimer,
        startTimer,
        stopTimer,
        resetTimer
    } = useTimerLogic()

    useEffect(() => {
        setCrosswordDifficulty(
            localStorage.getItem('difficulty') as "easy" | "medium" | "hard" || "easy"
        )
    }, [])

    useEffect(() => {
        setTimer(calcTimeFromDifficulty(crosswordDifficulty))
    }, [crosswordDifficulty])

    useEffect(() => {
        if (crosswordStatus === "progress") {
            setCrossword(wordsJson[crosswordDifficulty][Math.floor(Math.random() * wordsJson[crosswordDifficulty].length)])
        }
    }, [crosswordStatus])

    useEffect(() => {
        if (checkCrossword(inputWords, crossword.grid)) {
            stopTimer()
            setCrosswordStatus("solved")
        }
    }, [inputWords, crossword])

    useEffect(() => {
        if (timer <= 0) {
            setCrosswordStatus("failed")
        }
    }, [timer])

    useEffect(() => {
        localStorage.setItem('difficulty', crosswordDifficulty)
    }, [crosswordDifficulty])


    return {
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
        stopTimer,
        resetTimer,

        crosswordDifficulty,
        nextLevelOfDifficulty
    }
}

const checkCrossword = (inputWords: string[][], crosswordWords: string[][]) => {
    if (inputWords.every((element) => element.every((letter) => letter !== null))) {
        return JSON.stringify(inputWords) === JSON.stringify(crosswordWords)
    }
    else return false
}

const calcTimeFromDifficulty = (difficulty: "easy" | "medium" | "hard") => {
    switch (difficulty) {
        case "easy":
            return (1 / 1) * 300
        case "medium":
            return (1 / 2) * 300
        case "hard":
            return (1 / 3) * 300
    }
}

export default useGameLogic
