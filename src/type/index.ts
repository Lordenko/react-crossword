// <------ Props ------>
export interface WordInputProps {
    elementIndex: ElementIndex
    activeElementIndex: ElementIndex;
    setActiveElementIndex: (elementIndex: ElementIndex) => void;
    inputWords: string[][];
    setInputWord: (elementIndex: ElementIndex, value: string) => void;
    crosswordWords: string[][]
}

// <------ State ------>
export interface InputWordsState {
    inputWords: string[][],
    setInputWords: (words: string[][]) => void,
    setInputWord: (elementIndex: ElementIndex, value: string) => void
}

export interface CrosswordWordsState {
    crosswordWords: string[][],
    setCrosswordWords: (crosswordWords: string[][]) => void,
}

export interface ActiveElementIndexState {
    activeElementIndex: ElementIndex,
    setActiveElementIndex: (index: ElementIndex) => void,
}

export interface CrosswordSolvedState {
    crosswordSolved: boolean
    setCrosswordSolved: (crosswordSolved: boolean) => void
}

export interface CrosswordSettingsState {
    numberOfCrossword: number
    setNumberOfCrossword: (numberOfCrossword: number) => void
}

export interface PlayersState {
    players: Player[],
    setPlayers: (players: Player[]) => void
}

// <------ Other ------>
export interface ElementIndex {
    row: number,
    col: number
}

export type WordsJson = {
    grids: Crossword[]
}

type Clue = {
    Horizontal: string[],
    Vertical: string[]
}

type Crossword = {
    grid: string[][],
    clue: Clue
}

export type Player = {
    id: number,
    name: string,
    score: number
}