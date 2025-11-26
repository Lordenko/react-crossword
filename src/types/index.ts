// <------ Props ------>
export interface PlayerCardProps {
    player: Player
    index?: number
}

export interface PreStartPortalProps {
    currentPlayerId: number | null
}

export interface StatusStatePortalProps {
    resetGame: () => void
}
export interface FailedStatePortalProps extends StatusStatePortalProps { }

export interface SolvedStatePortalProps extends StatusStatePortalProps {
    difficulty: Difficulty

    timer: number
    score: number
    crosswordDifficulty: Difficulty
    getNextLevelOfDifficulty: (difficulty: Difficulty) => Difficulty
    calcScore: (timerSeconds: number, difficulty: Difficulty) => number

    currentPlayerId: number | null
    updatePlayerDifficulty: (playerId: number, difficulty: Difficulty) => void
    updatePlayerScore: (playerId: number, score: number) => void
}

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
    crosswordDifficulty: Difficulty,
    setCrosswordStatus: (crosswordStatus: CrosswordStatus) => void,
    clearInputWords: () => void,
    resetTimer: () => void,
    startTimer: () => void,
    getNextLevelOfDifficulty: (difficulty: Difficulty) => Difficulty

    difficulty: Difficulty

    timer: number
    score: number
    calcScore: (timerSeconds: number, difficulty: Difficulty) => number
    resetGame: () => void

    currentPlayerId: number | null
    updatePlayerDifficulty: (playerId: number, difficulty: Difficulty) => void
    updatePlayerScore: (playerId: number, score: number) => void
}

export interface TimerProps {
    timer: number,
}

export interface ErrorLayaoutProps {
    code: string
}

// <------ State ------>
export interface PlayerState {
    username: string,
    difficulty: Difficulty,
    score: number
    setUsername: (username: string) => void,
    setDifficulty: (difficulty: Difficulty) => void,
    setScore: (score: number) => void
}

export interface LocalStorageState {
    players: Player[] | [],
    currentPlayerId: number | null,
    sortPlayers: () => void,
    addPlayer: (player: Player) => void,
    setCurrentPlayerId: (playerId: number) => void,
    updatePlayerScore: (playerId: number, score: number) => void,
    updatePlayerDifficulty: (playerId: number, difficulty: Difficulty) => void,
    getPlayerByName: (playerName: string) => Player | undefined,
    getPlayerById: (playerId: number) => Player | undefined,


}

export interface InputWordsState {
    inputWords: string[][],
    setInputWords: (words: string[][]) => void,
    setInputWord: (elementIndex: ElementIndex, value: string) => void,
    clearInputWords: () => void
}

export interface CrosswordDifficultyState {
    crosswordDifficulty: Difficulty,
    setCrosswordDifficulty: (difficulty: Difficulty) => void,
    getNextLevelOfDifficulty: (difficulty: Difficulty) => Difficulty
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
export type Difficulty = "easy" | "medium" | "hard"

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

export interface PlayerInfo {
    name: string,
    difficulty: Difficulty,
    score: number
}

export interface Player {
    id: number,
    info: PlayerInfo
}
