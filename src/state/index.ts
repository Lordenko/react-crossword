import { create } from "zustand"

import { InputWordsState, ElementIndex, ActiveElementIndexState } from "../type"

export const useWords = create<InputWordsState>((set) => ({
    inputWords: Array(3).fill(null).map(() => Array(3).fill("")),
    setInputWords: (inputWords: string[][]) => set({ inputWords }),
    setInputWord: (elementIndex: ElementIndex, value: string) => set((state) => {
        state.inputWords[elementIndex.row][elementIndex.col] = value
        return { inputWords: state.inputWords }
    })
}))

export const useActiveElementIndex = create<ActiveElementIndexState>((set) => ({
    activeElementIndex: { row: -1, col: -1 },
    setActiveElementIndex: (activeElementIndex: ElementIndex) => set({ activeElementIndex })
}))