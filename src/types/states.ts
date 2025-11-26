import { ElementIndex, Player, Crossword } from "./others";
import { Difficulty, CrosswordStatus } from "./enums";


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