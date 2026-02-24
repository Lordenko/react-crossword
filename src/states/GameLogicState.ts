import { create } from "zustand"

import { PlayerState, InputWordsState, TimerState, ActiveElementIndexState, CrosswordState, CrosswordStatusState } from "../types/states"
import { Crossword, ElementIndex } from "../types/others"

/**
 * Zustand store that manages the state of the user's input on the crossword grid.
 * Provides actions to set the entire grid, update a specific cell, or clear the board.
 */
export const useInputWords = create<InputWordsState>((set) => ({
    inputWords: Array(3).fill(null).map(() => Array(3).fill("")),
    setInputWords: (inputWords: string[][]) => set({ inputWords }),
    setInputWord: (elementIndex: ElementIndex, value: string) => set((state) => {
        const updatedInputWords = [...state.inputWords]
        updatedInputWords[elementIndex.row][elementIndex.col] = value
        return { inputWords: updatedInputWords }
    }),
    clearInputWords: () => set({ inputWords: Array(3).fill(null).map(() => Array(3).fill("")) })
}))

/**
 * Zustand store that manages the active crossword puzzle data.
 * Holds the correct grid layout and the horizontal/vertical clues.
 */
export const useCrossword = create<CrosswordState>((set) => ({
    crossword: {
        grid: Array(3).fill(null).map(() => Array(3).fill(null)),
        clue: {
            Horizontal: Array(3).fill(null),
            Vertical: Array(3).fill(null)
        }
    },
    setCrossword: (crossword: Crossword) =>
        set({ crossword })
}))

/**
 * Zustand store that manages the current completion status of the crossword.
 * Tracks whether the puzzle is currently in progress, successfully solved, or failed (e.g., due to timeout).
 */
export const useCrosswordStatus = create<CrosswordStatusState>((set) => ({
    crosswordStatus: "progress",
    setCrosswordStatus: (crosswordStatus: "solved" | "failed" | "progress") =>
        set({ crosswordStatus })
}))

/**
 * Zustand store that tracks the currently focused or active cell within the crossword grid.
 * Uses row and column indices to identify the selected element.
 */
export const useActiveElementIndex = create<ActiveElementIndexState>((set) => ({
    activeElementIndex: { row: -1, col: -1 },
    setActiveElementIndex: (activeElementIndex: ElementIndex) =>
        set({ activeElementIndex })
}))

/**
 * Zustand store that handles the game's countdown timer logic.
 * Manages the initial allotted time, the current time remaining, the running status, and timer controls.
 */
export const useTimer = create<TimerState>((set) => ({
    timer: 10,
    currentTimer: 10,
    timerStatus: false,
    setTimer: (timer: number) =>
        set({ timer }),
    setCurrentTimer: (currentTimer: number) =>
        set({ currentTimer }),
    removeSecond: () => set((state) => ({
        currentTimer: Math.max(0, state.currentTimer - 1)
    })),
    startTimer: () => set({ timerStatus: true }),
    stopTimer: () => set({ timerStatus: false }),
    resetTimer: () => set((state) => ({ currentTimer: state.timer }))
}))

/**
 * Zustand store that manages the current player's volatile session data.
 * Stores the active username, selected difficulty level, and current score.
 */
export const usePlayer = create<PlayerState>((set) => ({
    username: "",
    difficulty: "easy",
    score: 0,
    setUsername: (username: string) => set({ username }),
    setDifficulty: (difficulty: "easy" | "medium" | "hard") => set({ difficulty }),
    setScore: (score: number) => set({ score }),

}))