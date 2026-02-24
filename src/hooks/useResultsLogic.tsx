import { useParams, useNavigate } from "react-router-dom"
import { useLocalStorage } from "../states/LocalStorageState"
import { useEffect } from "react"
import PlayerCard from '../components/Results/PlayerCard'

/**
 * Custom hook that manages the logic and UI rendering functions for the Results view.
 * Handles URL parameters, player sorting, redirection for invalid players, and conditional rendering.
 *
 * @returns An object containing the current URL parameters, player data, and specific render functions.
 */
const useResultsLogic = () => {
    const { name } = useParams()
    const { players, getPlayerByName, sortPlayers } = useLocalStorage()
    const navigate = useNavigate()

    useEffect(() => {
        sortPlayers()
    }, [sortPlayers])

    useEffect(() => {
        if (!name) return
        const player = getPlayerByName(name)
        if (!player) {
            navigate("/results")
        }
    }, [name, navigate, getPlayerByName])

    /**
     * Renders a complete list of all players and their results.
     * * @returns A React fragment containing the header and a mapped list of `PlayerCard` components.
     */
    const renderMultiplePlayers = () => {
        return (
            <>
                <h2 className="text-center text-xl font-bold text-gray-800 mb-2" >
                    Результати гравців
                </h2>
                {
                    players.map((player, index) => (
                        <PlayerCard key={player.id} player={player} index={index} />
                    ))
                }
            </>
        )
    }

    /**
     * Renders a fallback UI when the player list is empty.
     * * @returns A JSX element displaying an "empty state" message.
     */
    const renderEmptyPlayerList = () => {
        return (
            <h2 className="text-center text-xl font-bold text-gray-800 mb-2" >
                Гравці відсутні
            </h2>
        )
    }

    /**
     * Renders the results for a single, specific player based on the provided name.
     * * @param name - The name of the player to retrieve and display.
     * @returns A React fragment containing the specific `PlayerCard`, or undefined if the name is invalid or the player is not found.
     */
    const renderSoloPlayer = (name: string | null) => {
        if (!name) return
        const player = getPlayerByName(name)
        if (!player) return

        return (
            <>
                <h2 className="text-center text-xl font-bold text-gray-800 mb-2" >
                    Результати гравця
                </h2>
                <PlayerCard player={player} />
            </>
        )
    }

    return {
        name,
        players,
        renderMultiplePlayers,
        renderEmptyPlayerList,
        renderSoloPlayer
    }
}

export default useResultsLogic