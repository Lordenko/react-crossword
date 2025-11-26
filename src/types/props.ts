import { ElementIndex, Clue, Player } from "./others";
import { Difficulty, CrosswordStatus } from "./enums";

export interface ClueListProps {
    clueList: string[]
}

export interface ModalLayaoutProps {
    children: React.ReactNode;
}

export interface ScoreBannerProps {
    score: number
    timer: number
    crosswordDifficulty: Difficulty
    calcScore: (timerSeconds: number, difficulty: Difficulty) => number
}

export interface NextDifficultyButtonProps {
    crosswordDifficulty: Difficulty
    currentPlayerId: number | null
    getNextLevelOfDifficulty: (difficulty: Difficulty) => Difficulty
    updatePlayerDifficulty: (playerId: number, difficulty: Difficulty) => void
    resetGame: () => void
}

export interface TryAgainButtonProps {
    resetGame: () => void
}

export interface ClueProps {
    clueList: Clue
}

export interface CrosswordBoardProps {
    activeElementIndex: ElementIndex;
    setActiveElementIndex: (elementIndex: ElementIndex) => void;
    inputWords: string[][];
    setInputWord: (elementIndex: ElementIndex, value: string) => void;
    crosswordWords: string[][]
}

export interface PlayerInfoProps {
    username: string,
    difficulty: Difficulty,
    score: number
}

export interface PlayerCardProps {
    player: Player
    index?: number
}

export interface PreStartPortalProps {
    currentPlayerId: number | null
}

export interface StatusStatePortalProps {
    resetGame: () => void
    crosswordStatus: CrosswordStatus
}
export interface FailedStatePortalProps extends StatusStatePortalProps { }

export interface SolvedStatePortalProps extends StatusStatePortalProps {
    difficulty: Difficulty

    timer: number
    score: number
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
    difficulty: Difficulty
    getNextLevelOfDifficulty: (difficulty: Difficulty) => Difficulty
    crosswordStatus: CrosswordStatus,
    setCrosswordStatus: (crosswordStatus: CrosswordStatus) => void,

    clearInputWords: () => void,

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