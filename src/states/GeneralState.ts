import { create } from "zustand"

import { Player, PlayersState } from "../types"

export const usePlayers = create<PlayersState>((set) => ({
    players: [],
    setPlayers: (players: Player[]) =>
        set({ players })
}))