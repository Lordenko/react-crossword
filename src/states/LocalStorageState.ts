import { create } from "zustand"

import { Player, LocalStorageState, Difficulty } from "../types"

export const useLocalStorage = create<LocalStorageState>((set, get) => ({
    players: (JSON.parse(localStorage.getItem("players") || "[]") as Player[]),
    currentPlayerId: (JSON.parse(localStorage.getItem("currentPlayerId") || "null") as number | null),

    setCurrentPlayerId: (playerId: number) => set(() => {
        localStorage.setItem("currentPlayerId", JSON.stringify(playerId));
        return { currentPlayerId: playerId }
    }),
    sortPlayers: () => set((state) => {
        const sortedPlayers = [...state.players].sort((a, b) => b.info.score - a.info.score);
        return { players: sortedPlayers };
    }),
    addPlayer: (player: Player) => set((state) => {
        const updatedPlayers = [...state.players, player];
        localStorage.setItem("players", JSON.stringify(updatedPlayers));
        localStorage.setItem("currentPlayerId", JSON.stringify(player.id));
        return { players: updatedPlayers, currentPlayerId: player.id };
    }),
    updatePlayerScore: (playerId: number, score: number) => set((state: LocalStorageState) => {
        const updatedPlayers = state.players.map(player =>
            player.id === playerId
                ? { ...player, info: { ...player.info, score } }
                : player
        );

        localStorage.setItem("players", JSON.stringify(updatedPlayers));
        return { players: updatedPlayers };
    }),
    updatePlayerDifficulty: (playerId: number, difficulty: Difficulty) => set((state: LocalStorageState) => {
        const updatedPlayers = state.players.map(player =>
            player.id === playerId
                ? { ...player, info: { ...player.info, difficulty } }
                : player
        );

        localStorage.setItem("players", JSON.stringify(updatedPlayers));
        return { players: updatedPlayers };
    }),
    getPlayerByName: (playerName: string) => {
        return get().players.find((player: Player) => player.info.name === playerName)
    },
    getPlayerById: (playerId: number) => {
        return get().players.find((player: Player) => player.id === playerId)
    },
}))
