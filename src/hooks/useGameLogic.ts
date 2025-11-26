import { useEffect } from 'react'
import { Difficulty } from '../types/enums';
import { CrosswordJson } from '../types/others'
import { useActiveElementIndex, useCrossword, useCrosswordStatus, useInputWords } from '../states/GameLogicState'
import useTimerLogic from './useTimerLogic';
import { usePlayer } from '../states/GameLogicState';

import wordsJsonRaw from '../assets/words.json'
import { useLocalStorage } from '../states/LocalStorageState';
const wordsJson: CrosswordJson = wordsJsonRaw as CrosswordJson

const useGameLogic = () => {
    const { activeElementIndex, setActiveElementIndex } = useActiveElementIndex()
    const { inputWords, setInputWord, clearInputWords } = useInputWords()
    const { crossword, setCrossword } = useCrossword()
    const { crosswordStatus, setCrosswordStatus } = useCrosswordStatus()
    const { players, currentPlayerId, getPlayerById, updatePlayerDifficulty, updatePlayerScore } = useLocalStorage()

    const { username, difficulty, score, setUsername, setDifficulty, setScore } = usePlayer()

    useEffect(() => {
        if (currentPlayerId === null) return
        const player = getPlayerById(currentPlayerId)
        if (!player) return

        setUsername(player.info.name)
        setDifficulty(player.info.difficulty)
        setScore(player.info.score)
    }, [JSON.stringify(players)])

    const {
        currentTimer: timer,
        setTimer,
        startTimer,
        stopTimer,
        resetTimer
    } = useTimerLogic()

    useEffect(() => {
        setTimer(calcTimeFromDifficulty(difficulty))
    }, [difficulty])

    useEffect(() => {
        if (crosswordStatus === "progress") {
            setCrossword(wordsJson[difficulty][Math.floor(Math.random() * wordsJson[difficulty].length)])
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
        if (currentPlayerId === null) return
        startTimer()
    }, [])

    const calcScore = (timerSeconds: number, difficulty: Difficulty) => {
        const mult = { easy: 1, medium: 2, hard: 3 }[difficulty];
        return Math.round(timerSeconds * mult);
    }

    const resetGame = () => {
        clearInputWords()
        setCrosswordStatus("progress")
        resetTimer()
        startTimer()
    }

    const getNextLevelOfDifficulty = (difficulty: Difficulty): Difficulty => {
        const nextLevel = {
            easy: "medium",
            medium: "hard",
            hard: "hard",
        }
        return nextLevel[difficulty] as Difficulty
    }

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

        username,
        difficulty,
        score,
        getNextLevelOfDifficulty,

        calcScore,
        resetGame,
        setScore,

        currentPlayerId,
        updatePlayerDifficulty, updatePlayerScore
    }
}

const checkCrossword = (inputWords: string[][], crosswordWords: string[][]) => {
    if (inputWords.every((element) => element.every((letter) => letter !== null))) {
        return JSON.stringify(inputWords) === JSON.stringify(crosswordWords)
    }
    else return false
}

const calcTimeFromDifficulty = (difficulty: Difficulty) => {
    const mult = { easy: 1 / 1, medium: 1 / 2, hard: 1 / 3 }[difficulty];
    return mult * 300
}

export default useGameLogic
