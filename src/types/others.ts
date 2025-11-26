import { Difficulty } from "./enums";

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
