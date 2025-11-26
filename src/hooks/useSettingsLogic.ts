import { useEffect } from "react"
import { useLocalStorage } from "../states/LocalStorageState"

const useSettingsLogic = () => {
    const { players, currentPlayerId, addPlayer, getPlayerByName, getPlayerById, setCurrentPlayerId, updatePlayerDifficulty } = useLocalStorage()

    return {
        players,
        currentPlayerId,
        addPlayer,
        getPlayerByName,
        getPlayerById,
        setCurrentPlayerId,
        updatePlayerDifficulty
    }
}

export default useSettingsLogic