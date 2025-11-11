import { create } from "zustand"

import { InputWordsState, ElementIndex, ActiveElementIndexState, CrosswordWordsState, CrosswordSolvedState, CrosswordSettingsState, Player, PlayersState } from "../type"

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

export const useCrosswordWords = create<CrosswordWordsState>((set) => ({
    crosswordWords: Array(3).fill(null).map(() => Array(3).fill(null)),
    setCrosswordWords: (crosswordWords: string[][]) => set({ crosswordWords }),
}))

export const useActiveElementIndex = create<ActiveElementIndexState>((set) => ({
    activeElementIndex: { row: -1, col: -1 },
    setActiveElementIndex: (activeElementIndex: ElementIndex) => set({ activeElementIndex })
}))

export const useCrosswordSolved = create<CrosswordSolvedState>((set) => ({
    crosswordSolved: false,
    setCrosswordSolved: (crosswordSolved: boolean) => set({ crosswordSolved })
}))

export const useCrosswordSettings = create<CrosswordSettingsState>((set) => ({
    numberOfCrossword: -1,
    setNumberOfCrossword: (numberOfCrossword: number) => set({ numberOfCrossword })
}))

export const usePlayers = create<PlayersState>((set) => ({
    players: [],
    setPlayers: (players: Player[]) => set({ players })
}))