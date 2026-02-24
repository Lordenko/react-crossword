/**
 * Represents the current state of a crossword puzzle game.
 * - `"progress"`: The player is actively working on the puzzle.
 * - `"solved"`: The puzzle has been completed successfully.
 * - `"failed"`: The puzzle was not completed (e.g., time ran out).
 */
export type CrosswordStatus = "solved" | "failed" | "progress"

/**
 * Represents the selected difficulty level for the crossword puzzle.
 * - `"easy"`: The easiest level, typically providing more time or simpler words.
 * - `"medium"`: The standard difficulty level.
 * - `"hard"`: The most challenging level, typically providing less time or complex words.
 */
export type Difficulty = "easy" | "medium" | "hard"