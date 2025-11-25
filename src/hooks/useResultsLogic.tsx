import { useParams, useNavigate } from "react-router-dom"
import { useLocalStorage } from "../states/LocalStorageState"
import { useEffect } from "react"
import PlayerCard from '../components/Results/PlayerCard'

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

    const renderEmptyPlayerList = () => {
        return (
            <h2 className="text-center text-xl font-bold text-gray-800 mb-2" >
                Гравці відсутні
            </h2>
        )
    }

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



