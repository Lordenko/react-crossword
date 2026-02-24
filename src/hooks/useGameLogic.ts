import { useEffect } from 'react'
import { Difficulty } from '../types/enums';
import { CrosswordJson } from '../types/others'
import { useActiveElementIndex, useCrossword, useCrosswordStatus, useInputWords } from '../states/GameLogicState'
import useTimerLogic from './useTimerLogic';
import { usePlayer } from '../states/GameLogicState';

import wordsJsonRaw from '../assets/words.json'
import { useLocalStorage } from '../states/LocalStorageState';
const wordsJson: CrosswordJson = wordsJsonRaw as CrosswordJson

/**
 * Custom hook that manages the core game logic of the crossword puzzle.
 * Handles state synchronization, timer management, difficulty transitions, scoring, and win/loss conditions.
 *
 * @returns An object containing game states, actions, and helper functions to be used by components.
 */
const useGameLogic = () => {
    const { activeElementIndex, setActiveElementIndex } = useActiveElementIndex()
    const { inputWords, setInputWord, clearInputWords } = useInputWords()
    const { crossword, setCrossword } = useCrossword()
    const { crosswordStatus, setCrosswordStatus } = useCrosswordStatus()
    const { players, currentPlayerId, getPlayerById, updatePlayerDifficulty, updatePlayerScore } = useLocalStorage()

    const { username, difficulty, score, setUsername, setDifficulty, setScore } = usePlayer()

    const playersKey = JSON.stringify(players);

    useEffect(() => {
        if (currentPlayerId === null) return
        const player = getPlayerById(currentPlayerId)
        if (!player) return

        setUsername(player.info.name)
        setDifficulty(player.info.difficulty)
        setScore(player.info.score)
    }, [playersKey, currentPlayerId, getPlayerById, setUsername, setDifficulty, setScore])

    useEffect(() => {

    }, [difficulty])

    const {
        currentTimer: timer,
        setTimer,
        startTimer,
        stopTimer,
        resetTimer
    } = useTimerLogic()

    useEffect(() => {
        setTimer(calcTimeFromDifficulty(difficulty))
    }, [difficulty, setTimer])

    useEffect(() => {
        if (crosswordStatus !== "progress") return

        setCrossword(wordsJson[difficulty][Math.floor(Math.random() * wordsJson[difficulty].length)])
    }, [crosswordStatus, difficulty, setCrossword])

    useEffect(() => {
        if (crosswordStatus !== "progress") return;
        if (checkCrossword(inputWords, crossword.grid)) {
            stopTimer()
            setCrosswordStatus("solved")
        }
    }, [inputWords, crossword, crosswordStatus, stopTimer, setCrosswordStatus])

    useEffect(() => {
        if (timer <= 0) {
            setCrosswordStatus("failed")
        }
    }, [timer, setCrosswordStatus])

    useEffect(() => {
        if (currentPlayerId === null) return
        startTimer()
    }, [currentPlayerId, startTimer])

    /**
     * Calculates the player's score based on the remaining time and the current difficulty.
     * * @param timerSeconds - The amount of time remaining in seconds.
     * @param difficulty - The difficulty level of the solved crossword.
     * @returns The calculated score.
     */
    const calcScore = (timerSeconds: number, difficulty: Difficulty) => {
        const mult = { easy: 1, medium: 2, hard: 3 }[difficulty];
        return Math.round(timerSeconds * mult);
    }

    /**
     * Resets the game state, clears user inputs, and restarts the timer.
     */
    const resetGame = () => {
        clearInputWords()
        setCrosswordStatus("progress")
        resetTimer()
        startTimer()
    }

    /**
     * Determines the next difficulty level after successful completion.
     * * @param difficulty - The current difficulty level.
     * @returns The next difficulty level, capping out at "hard".
     */
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

/**
 * Validates the user's input against the correct crossword solution.
 * * @param inputWords - A 2D array representing the user's current grid input.
 * @param crosswordWords - A 2D array representing the correct crossword solution.
 * @returns `true` if the crossword is completely filled out and all letters match the solution, otherwise `false`.
 */
const checkCrossword = (inputWords: string[][], crosswordWords: string[][]) => {
    if (inputWords.every((element) => element.every((letter) => letter !== null))) {
        return JSON.stringify(inputWords) === JSON.stringify(crosswordWords)
    }
    else return false
}

/**
 * Calculates the total time allowed for a game session based on the selected difficulty.
 * * @param difficulty - The chosen difficulty level.
 * @returns The total time allocated in seconds.
 */
const calcTimeFromDifficulty = (difficulty: Difficulty) => {
    const mult = { easy: 1 / 1, medium: 1 / 2, hard: 1 / 3 }[difficulty];
    return mult * 300
}

export default useGameLogic