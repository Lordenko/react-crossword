import { ElementIndex, Clue, Player } from "./others";
import { Difficulty, CrosswordStatus } from "./enums";

/**
 * Props for a component that renders a list of clues.
 */
export interface ClueListProps {
    /** An array of clue strings to be displayed. */
    clueList: string[]
}

/**
 * Props for a modal layout wrapper component.
 */
export interface ModalLayaoutProps {
    /** The child React nodes to be rendered inside the modal layout. */
    children: React.ReactNode;
}

/**
 * Props for a component displaying the player's score and timing information.
 */
export interface ScoreBannerProps {
    /** The current score of the player. */
    score: number
    /** The current timer value in seconds. */
    timer: number
    /** The difficulty level of the current crossword puzzle. */
    crosswordDifficulty: Difficulty
    /** Function to calculate the final score based on remaining time and difficulty. */
    calcScore: (timerSeconds: number, difficulty: Difficulty) => number
}

/**
 * Props for a button component that advances the game to the next difficulty level.
 */
export interface NextDifficultyButtonProps {
    /** The current difficulty level of the puzzle. */
    crosswordDifficulty: Difficulty
    /** The unique identifier of the currently active player, or null if a guest. */
    currentPlayerId: number | null
    /** Function to determine what the next difficulty level should be. */
    getNextLevelOfDifficulty: (difficulty: Difficulty) => Difficulty
    /** Function to update the player's preferred difficulty in the store. */
    updatePlayerDifficulty: (playerId: number, difficulty: Difficulty) => void
    /** Function to reset the game state for the new round. */
    resetGame: () => void
}

/**
 * Props for a button component that allows the player to restart the current puzzle.
 */
export interface TryAgainButtonProps {
    /** Function to reset the game state, clearing inputs and resetting the timer. */
    resetGame: () => void
}

/**
 * Props for a component that displays both horizontal and vertical clues.
 */
export interface ClueProps {
    /** An object containing arrays of horizontal and vertical clue strings. */
    clueList: Clue
}

/**
 * Props for the main crossword grid component.
 */
export interface CrosswordBoardProps {
    /** The coordinates of the currently active/focused cell. */
    activeElementIndex: ElementIndex;
    /** Function to set the currently active/focused cell. */
    setActiveElementIndex: (elementIndex: ElementIndex) => void;
    /** A 2D array representing the user's current input in the grid. */
    inputWords: string[][];
    /** Function to update a specific cell's value based on user input. */
    setInputWord: (elementIndex: ElementIndex, value: string) => void;
    /** A 2D array representing the correct solution for the crossword grid. */
    crosswordWords: string[][]
}

/**
 * Props for a component displaying a player's brief profile information.
 */
export interface PlayerInfoProps {
    /** The display name of the player. */
    username: string,
    /** The player's selected difficulty level. */
    difficulty: Difficulty,
    /** The player's current total score. */
    score: number
}

/**
 * Props for a card component summarizing a player's statistics, often used in leaderboards.
 */
export interface PlayerCardProps {
    /** The complete player data object. */
    player: Player
    /** The optional index/rank of the player in a list. */
    index?: number
}

/**
 * Props for a portal or overlay shown before the game officially starts.
 */
export interface PreStartPortalProps {
    /** The unique identifier of the currently active player, or null if a guest. */
    currentPlayerId: number | null
}

/**
 * Base props for portals that reflect a specific game status (e.g., solved, failed).
 */
export interface StatusStatePortalProps {
    /** Function to restart or reset the game. */
    resetGame: () => void
    /** The current completion status of the crossword. */
    crosswordStatus: CrosswordStatus
}

/**
 * Props for the portal shown when the player fails the crossword (e.g., time runs out).
 * Inherits all properties from `StatusStatePortalProps`.
 */
export interface FailedStatePortalProps extends StatusStatePortalProps { }

/**
 * Props for the portal shown when the player successfully solves the crossword.
 * Inherits basic status props and adds specific victory state handlers.
 */
export interface SolvedStatePortalProps extends StatusStatePortalProps {
    /** The difficulty level of the solved puzzle. */
    difficulty: Difficulty

    /** The time remaining when the puzzle was solved. */
    timer: number
    /** The player's total score before adding the new points. */
    score: number
    /** Function to determine the next difficulty level. */
    getNextLevelOfDifficulty: (difficulty: Difficulty) => Difficulty
    /** Function to calculate the score earned for the current puzzle. */
    calcScore: (timerSeconds: number, difficulty: Difficulty) => number

    /** The unique identifier of the currently active player. */
    currentPlayerId: number | null
    /** Function to update the player's difficulty setting in the store. */
    updatePlayerDifficulty: (playerId: number, difficulty: Difficulty) => void
    /** Function to update the player's total accumulated score in the store. */
    updatePlayerScore: (playerId: number, score: number) => void
}

/**
 * Props for a single cell/input field within the crossword grid.
 */
export interface WordInputProps {
    /** The row and column coordinates of this specific input cell. */
    elementIndex: ElementIndex
    /** The coordinates of the currently active/focused cell in the whole grid. */
    activeElementIndex: ElementIndex;
    /** Function to set this cell (or another) as the active one. */
    setActiveElementIndex: (elementIndex: ElementIndex) => void;
    /** A 2D array representing the entire grid's current input state. */
    inputWords: string[][];
    /** Function to update this cell's value in the global state. */
    setInputWord: (elementIndex: ElementIndex, value: string) => void;
    /** A 2D array representing the correct solution to determine if this cell should be blocked/empty. */
    crosswordWords: string[][]
}

/**
 * Props for a generic game over portal that handles both win and loss states.
 */
export interface GameOverPortalProps {
    /** The current difficulty level. */
    difficulty: Difficulty
    /** Function to determine the next difficulty level. */
    getNextLevelOfDifficulty: (difficulty: Difficulty) => Difficulty
    /** The final status of the game ("solved" or "failed"). */
    crosswordStatus: CrosswordStatus,
    /** Function to manually update the crossword's status. */
    setCrosswordStatus: (crosswordStatus: CrosswordStatus) => void,

    /** Function to wipe the user's input from the board. */
    clearInputWords: () => void,

    /** The remaining time in seconds. */
    timer: number
    /** The player's current total score. */
    score: number
    /** Function to calculate the score earned for the current puzzle. */
    calcScore: (timerSeconds: number, difficulty: Difficulty) => number
    /** Function to initialize a new game session. */
    resetGame: () => void

    /** The unique identifier of the currently active player. */
    currentPlayerId: number | null
    /** Function to update the player's difficulty setting in the store. */
    updatePlayerDifficulty: (playerId: number, difficulty: Difficulty) => void
    /** Function to update the player's total accumulated score in the store. */
    updatePlayerScore: (playerId: number, score: number) => void
}

/**
 * Props for the component responsible for displaying the countdown timer.
 */
export interface TimerProps {
    /** The current time remaining in seconds. */
    timer: number,
}

/**
 * Props for a component that displays an error layout or specific error message.
 */
export interface ErrorLayaoutProps {
    /** The specific error code or message to be displayed. */
    code: string
}