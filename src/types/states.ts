import { ElementIndex, Player, Crossword } from "./others";
import { Difficulty, CrosswordStatus } from "./enums";

/**
 * Represents the volatile state for the currently active player during a game session.
 */
export interface PlayerState {
    /** The username of the current player. */
    username: string,
    /** The currently selected difficulty level for the player. */
    difficulty: Difficulty,
    /** The current score accumulated by the player. */
    score: number
    /** Updates the username of the current player. */
    setUsername: (username: string) => void,
    /** Updates the preferred difficulty level of the current player. */
    setDifficulty: (difficulty: Difficulty) => void,
    /** Updates the current score of the player. */
    setScore: (score: number) => void
}

/**
 * Represents the persistent state slice that manages player data in local storage.
 */
export interface LocalStorageState {
    /** The complete list of saved players. */
    players: Player[] | [],
    /** The unique identifier of the currently active player, or null if no player is active. */
    currentPlayerId: number | null,
    /** Sorts the `players` array, typically in descending order by score. */
    sortPlayers: () => void,
    /** Adds a new player to the persistent storage. */
    addPlayer: (player: Player) => void,
    /** Sets the active player session by their unique ID. */
    setCurrentPlayerId: (playerId: number) => void,
    /** Updates the total score of a specific player in storage. */
    updatePlayerScore: (playerId: number, score: number) => void,
    /** Updates the preferred difficulty setting of a specific player in storage. */
    updatePlayerDifficulty: (playerId: number, difficulty: Difficulty) => void,
    /** Retrieves a player object by their exact username. */
    getPlayerByName: (playerName: string) => Player | undefined,
    /** Retrieves a player object by their unique ID. */
    getPlayerById: (playerId: number) => Player | undefined,
}

/**
 * Represents the state of the user's input on the crossword grid.
 */
export interface InputWordsState {
    /** A 2D array of strings representing the current letters typed by the user. */
    inputWords: string[][],
    /** Replaces the entire input grid with a new 2D array. */
    setInputWords: (words: string[][]) => void,
    /** Updates the value of a single specific cell in the input grid. */
    setInputWord: (elementIndex: ElementIndex, value: string) => void,
    /** Clears all user inputs, resetting the grid to its initial empty state. */
    clearInputWords: () => void
}

/**
 * Represents the state managing the difficulty level of the current crossword puzzle.
 */
export interface CrosswordDifficultyState {
    /** The difficulty level of the active puzzle. */
    crosswordDifficulty: Difficulty,
    /** Sets the difficulty level for the crossword. */
    setCrosswordDifficulty: (difficulty: Difficulty) => void,
    /** Calculates and returns the next appropriate difficulty level based on the provided one. */
    getNextLevelOfDifficulty: (difficulty: Difficulty) => Difficulty
}

/**
 * Represents the state holding the active crossword puzzle's structure and clues.
 */
export interface CrosswordState {
    /** The full structure of the current crossword, including the grid layout and clues. */
    crossword: {
        /** A 2D array representing the correct structural layout of the puzzle. */
        grid: string[][],
        /** The horizontal and vertical hints for the puzzle. */
        clue: {
            Horizontal: string[],
            Vertical: string[]
        }
    },
    /** Loads a new crossword puzzle into the state. */
    setCrossword: (crossword: Crossword) => void
}

/**
 * Represents the state holding only the correct solution words for the grid.
 */
export interface CrosswordWordsState {
    /** A 2D array containing the correct characters to solve the crossword. */
    crosswordWords: string[][],
    /** Updates the solution grid. */
    setCrosswordWords: (crosswordWords: string[][]) => void,
}

/**
 * Represents the state tracking which cell in the crossword grid is currently selected.
 */
export interface ActiveElementIndexState {
    /** The coordinates (row and column) of the currently focused cell. */
    activeElementIndex: ElementIndex,
    /** Updates the currently focused cell coordinates. */
    setActiveElementIndex: (index: ElementIndex) => void,
}

/**
 * Represents the current gameplay status of the crossword puzzle.
 */
export interface CrosswordStatusState {
    /** The current state of the game (e.g., in progress, solved, or failed). */
    crosswordStatus: CrosswordStatus
    /** Updates the game's completion status. */
    setCrosswordStatus: (crosswordStatus: CrosswordStatus) => void
}

/**
 * Represents configuration settings for the crossword game session.
 */
export interface CrosswordSettingsState {
    /** The total number of crosswords configured for a specific session or level. */
    numberOfCrossword: number
    /** Updates the total number of crosswords. */
    setNumberOfCrossword: (numberOfCrossword: number) => void
}

/**
 * Represents a generic state for managing a list of players.
 */
export interface PlayersState {
    /** An array of player entities. */
    players: Player[],
    /** Replaces the entire list of players with a new array. */
    setPlayers: (players: Player[]) => void
}

/**
 * Represents the state of the game's countdown timer.
 */
export interface TimerState {
    /** The total initial time allocated for the current difficulty. */
    timer: number,
    /** The current remaining time in seconds. */
    currentTimer: number,
    /** The running status of the timer (`true` if actively counting down). */
    timerStatus: boolean,
    /** Sets the initial total time for the timer. */
    setTimer: (timer: number) => void,
    /** Manually overrides the current remaining time. */
    setCurrentTimer: (currentTimer: number) => void,
    /** Decrements the `currentTimer` by one second. */
    removeSecond: () => void,
    /** Sets `timerStatus` to true to begin the countdown. */
    startTimer: () => void,
    /** Sets `timerStatus` to false to pause the countdown. */
    stopTimer: () => void,
    /** Resets the `currentTimer` back to the initial `timer` value. */
    resetTimer: () => void
}