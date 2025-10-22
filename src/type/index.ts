export interface WordInputProps {
    elementIndex: ElementIndex
    activeElementIndex: ElementIndex;
    setActiveElementIndex: (elementIndex: ElementIndex) => void;
    inputWords: string[][];
    setInputWord: (elementIndex: ElementIndex, value: string) => void;
}

export interface InputWordsState {
    inputWords: string[][],
    setInputWords: (words: string[][]) => void,
    setInputWord: (elementIndex: ElementIndex, value: string) => void
}

export interface ElementIndex {
    row: number,
    col: number
}

export interface ActiveElementIndexState {
    activeElementIndex: ElementIndex,
    setActiveElementIndex: (index: ElementIndex) => void,
}

type Clue = {
    Horizontal: string[],
    Vertical: string[]
}

type Crossword = {
    grid: string[][],
    clue: Clue
}

export type WordsJson = {
    grids: Crossword[]
}