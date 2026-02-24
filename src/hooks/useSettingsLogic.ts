import { useLocalStorage } from "../states/LocalStorageState"
import * as Yup from "yup";

/**
 * Custom hook that encapsulates the logic for the application's settings or user profile form.
 * Provides form validation schema, initial values, and a submit handler to manage player data in local storage.
 *
 * @returns An object containing the validation schema, submission handler, and initial form values.
 */
const useSettingsLogic = () => {
    const { players, currentPlayerId, addPlayer, getPlayerByName, getPlayerById, setCurrentPlayerId, updatePlayerDifficulty } = useLocalStorage()

    /**
     * Yup validation schema for the settings form.
     * Enforces username length constraints and ensures a valid difficulty level is selected.
     */
    const schema = Yup.object({
        username: Yup.string()
            .min(3, "Minimum 3 characters")
            .max(15, "Maximum 15 characters")
            .required("Required enter username"),

        difficulty: Yup.string()
            .oneOf(["easy", "medium", "hard"], "Invalid difficulty")
            .required("Required select difficulty")
    })

    /**
     * Handles the form submission logic.
     * Creates a new player if the username does not exist, or updates the current player's
     * active status and difficulty if they are already in the system.
     *
     * @param values - An object containing the submitted form values (username and difficulty).
     */
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

    /**
     * The initial values for the settings form, dynamically derived from the currently active player's data.
     * Defaults to an empty string for the username and "easy" for difficulty if no player is active.
     */
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