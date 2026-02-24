import { create } from "zustand"

import { LocalStorageState } from "../types/states"
import { Difficulty } from "../types/enums";
import { Player } from "../types/others";

/**
 * Zustand store that manages persistent player data and game settings using the browser's localStorage.
 * Handles retrieving, creating, updating, and sorting player profiles across browser sessions.
 */
export const useLocalStorage = create<LocalStorageState>((set, get) => ({
    /**
     * The list of all saved players, initialized directly from localStorage.
     */
    players: (JSON.parse(localStorage.getItem("players") || "[]") as Player[]),

    /**
     * The ID of the currently active player session, initialized from localStorage.
     */
    currentPlayerId: (JSON.parse(localStorage.getItem("currentPlayerId") || "null") as number | null),

    /**
     * Sets the currently active player by their ID and persists this selection to localStorage.
     * * @param playerId - The unique identifier of the player to set as active.
     */
    setCurrentPlayerId: (playerId: number) => set(() => {
        localStorage.setItem("currentPlayerId", JSON.stringify(playerId));
        return { currentPlayerId: playerId }
    }),

    /**
     * Sorts the current list of players in descending order based on their accumulated scores.
     */
    sortPlayers: () => set((state) => {
        const sortedPlayers = [...state.players].sort((a, b) => b.info.score - a.info.score);
        return { players: sortedPlayers };
    }),

    /**
     * Adds a new player profile to the state, sets them as the active player, 
     * and updates the localStorage accordingly.
     * * @param player - The complete player object to add.
     */
    addPlayer: (player: Player) => set((state) => {
        const updatedPlayers = [...state.players, player];
        localStorage.setItem("players", JSON.stringify(updatedPlayers));
        localStorage.setItem("currentPlayerId", JSON.stringify(player.id));
        return { players: updatedPlayers, currentPlayerId: player.id };
    }),

    /**
     * Updates the score of a specific player and persists the updated list to localStorage.
     * * @param playerId - The unique identifier of the player.
     * @param score - The new score to assign to the player.
     */
    updatePlayerScore: (playerId: number, score: number) => set((state: LocalStorageState) => {
        const updatedPlayers = state.players.map(player =>
            player.id === playerId
                ? { ...player, info: { ...player.info, score } }
                : player
        );

        localStorage.setItem("players", JSON.stringify(updatedPlayers));
        return { players: updatedPlayers };
    }),

    /**
     * Updates the preferred difficulty level of a specific player and persists it to localStorage.
     * * @param playerId - The unique identifier of the player.
     * @param difficulty - The new difficulty level (e.g., "easy", "medium", "hard").
     */
    updatePlayerDifficulty: (playerId: number, difficulty: Difficulty) => set((state: LocalStorageState) => {
        const updatedPlayers = state.players.map(player =>
            player.id === playerId
                ? { ...player, info: { ...player.info, difficulty } }
                : player
        );

        localStorage.setItem("players", JSON.stringify(updatedPlayers));
        return { players: updatedPlayers };
    }),

    /**
     * Retrieves a player object from the current state by their exact username.
     * * @param playerName - The name of the player to find.
     * @returns The matching `Player` object if found, otherwise `undefined`.
     */
    getPlayerByName: (playerName: string) => {
        return get().players.find((player: Player) => player.info.name === playerName)
    },

    /**
     * Retrieves a player object from the current state by their unique ID.
     * * @param playerId - The unique ID of the player to find.
     * @returns The matching `Player` object if found, otherwise `undefined`.
     */
    getPlayerById: (playerId: number) => {
        return get().players.find((player: Player) => player.id === playerId)
    },
}))