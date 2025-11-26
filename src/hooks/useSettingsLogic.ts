import { useLocalStorage } from "../states/LocalStorageState"
import * as Yup from "yup";

const useSettingsLogic = () => {
    const { players, currentPlayerId, addPlayer, getPlayerByName, getPlayerById, setCurrentPlayerId, updatePlayerDifficulty } = useLocalStorage()

    const schema = Yup.object({
        username: Yup.string()
            .min(3, "Minimum 3 characters")
            .max(15, "Maximum 15 characters")
            .required("Required enter username"),

        difficulty: Yup.string()
            .oneOf(["easy", "medium", "hard"], "Invalid difficulty")
            .required("Required select difficulty")
    })

    const submit = (values: any) => {
        const player = getPlayerByName(values.username)
        if (!player) {
            addPlayer({ id: players.length, info: { name: values.username, difficulty: values.difficulty, score: 10 } })
        } else {
            setCurrentPlayerId(player.id)
            if (player.info.difficulty !== values.difficulty) {
                updatePlayerDifficulty(player.id, values.difficulty)
            }
        }

        alert("Settings saved")
    }

    const initialValues = {
        username: currentPlayerId !== null ? getPlayerById(currentPlayerId)?.info.name || "" : "",
        difficulty: currentPlayerId !== null ? getPlayerById(currentPlayerId)?.info.difficulty || "easy" : "easy",
    }

    return {
        schema,
        submit,
        initialValues
    }
}

export default useSettingsLogic