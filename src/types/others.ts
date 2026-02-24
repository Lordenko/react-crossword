import { Difficulty } from "./enums";

/**
 * Represents the 2D coordinates of a specific cell within the crossword grid.
 */
export interface ElementIndex {
    /** The row index (0-based) of the cell. */
    row: number,
    /** The column index (0-based) of the cell. */
    col: number
}

/**
 * Defines the structure of the JSON data containing all crossword puzzles, 
 * categorized by their difficulty levels.
 */
export type CrosswordJson = {
    /** An array of crossword puzzles classified as "easy". */
    easy: Crossword[];
    /** An array of crossword puzzles classified as "medium". */
    medium: Crossword[];
    /** An array of crossword puzzles classified as "hard". */
    hard: Crossword[];
};

/**
 * Represents the set of hints provided to the player to solve the crossword puzzle.
 */
export type Clue = {
    /** An array of clue strings corresponding to horizontal (across) words. */
    Horizontal: string[];
    /** An array of clue strings corresponding to vertical (down) words. */
    Vertical: string[];
};

/**
 * Represents a single crossword puzzle instance.
 */
export type Crossword = {
    /** A 2D array representing the correct letters or empty cells of the puzzle grid. */
    grid: string[][];
    /** The hints associated with the words in this specific grid. */
    clue: Clue;
};

/**
 * Contains the core profile information and game statistics for a specific player.
 */
export interface PlayerInfo {
    /** The display name or username of the player. */
    name: string,
    /** The player's currently selected or preferred difficulty level. */
    difficulty: Difficulty,
    /** The total score accumulated by the player across their games. */
    score: number
}

/**
 * Represents a complete player entity within the game's storage system.
 */
export interface Player {
    /** The unique identifier for the player. */
    id: number,
    /** The detailed profile and statistical information of the player. */
    info: PlayerInfo
}