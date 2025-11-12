// <------ Props ------>
export interface WordInputProps {
    elementIndex: ElementIndex
    activeElementIndex: ElementIndex;
    setActiveElementIndex: (elementIndex: ElementIndex) => void;
    inputWords: string[][];
    setInputWord: (elementIndex: ElementIndex, value: string) => void;
    crosswordWords: string[][]
}

export interface GameOverPortalProps {
    crosswordStatus: CrosswordStatus,
    crosswordDifficulty: "easy" | "medium" | "hard",
    setCrosswordStatus: (crosswordStatus: CrosswordStatus) => void,
    clearInputWords: () => void,
    resetTimer: () => void,
    startTimer: () => void,
    nextLevelOfDifficulty: () => void
}

export interface TimerProps {
    timer: number,
}

// <------ State ------>
export interface InputWordsState {
    inputWords: string[][],
    setInputWords: (words: string[][]) => void,
    setInputWord: (elementIndex: ElementIndex, value: string) => void,
    clearInputWords: () => void
}

export interface CrosswordDifficultyState {
    crosswordDifficulty: "easy" | "medium" | "hard",
    setCrosswordDifficulty: (difficulty: "easy" | "medium" | "hard") => void,
    nextLevelOfDifficulty: () => void
}

export interface CrosswordState {
    crossword: {
        grid: string[][],
        clue: {
            Horizontal: string[],
            Vertical: string[]
        }
    },
    setCrossword: (crossword: Crossword) => void
}

export interface CrosswordWordsState {
    crosswordWords: string[][],
    setCrosswordWords: (crosswordWords: string[][]) => void,
}

export interface ActiveElementIndexState {
    activeElementIndex: ElementIndex,
    setActiveElementIndex: (index: ElementIndex) => void,
}

export interface CrosswordStatusState {
    crosswordStatus: CrosswordStatus
    setCrosswordStatus: (crosswordStatus: CrosswordStatus) => void
}

export interface CrosswordSettingsState {
    numberOfCrossword: number
    setNumberOfCrossword: (numberOfCrossword: number) => void
}

export interface PlayersState {
    players: Player[],
    setPlayers: (players: Player[]) => void
}

export interface TimerState {
    timer: number,
    currentTimer: number,
    timerStatus: boolean,
    setTimer: (timer: number) => void,
    setCurrentTimer: (currentTimer: number) => void,
    removeSecond: () => void,
    startTimer: () => void,
    stopTimer: () => void,
    resetTimer: () => void
}

// <------ Other ------>
export type CrosswordStatus = "solved" | "failed" | "progress"

export interface ElementIndex {
    row: number,
    col: number
}

export type CrosswordJson = {
    easy: Crossword[];
    medium: Crossword[];
    hard: Crossword[];
};

export type Clue = {
    Horizontal: string[];
    Vertical: string[];
};

export type Crossword = {
    grid: string[][];
    clue: Clue;
};


export type Player = {
    id: number,
    name: string,
    score: number
}