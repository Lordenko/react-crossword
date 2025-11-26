import { create } from "zustand"

import { PlayerState, InputWordsState, TimerState, ActiveElementIndexState, CrosswordState, CrosswordStatusState } from "../types/states"
import { Crossword, ElementIndex } from "../types/others"

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

export const useCrosswordStatus = create<CrosswordStatusState>((set) => ({
    crosswordStatus: "progress",
    setCrosswordStatus: (crosswordStatus: "solved" | "failed" | "progress") =>
        set({ crosswordStatus })
}))

export const useActiveElementIndex = create<ActiveElementIndexState>((set) => ({
    activeElementIndex: { row: -1, col: -1 },
    setActiveElementIndex: (activeElementIndex: ElementIndex) =>
        set({ activeElementIndex })
}))

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

export const usePlayer = create<PlayerState>((set) => ({
    username: "",
    difficulty: "easy",
    score: 0,
    setUsername: (username: string) => set({ username }),
    setDifficulty: (difficulty: "easy" | "medium" | "hard") => set({ difficulty }),
    setScore: (score: number) => set({ score }),

}))