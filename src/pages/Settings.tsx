import * as Yup from "yup"
import { Formik, Form, ErrorMessage, Field } from "formik"

import { useLocalStorage } from "../states/LocalStorageState"

const Settings = () => {



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

    return (
        <>
            <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
                <h1 className="text-2xl font-bold mb-6 text-center">Settings</h1>

                <Formik
                    initialValues={{
                        username: currentPlayerId !== null ? getPlayerById(currentPlayerId)?.info.name || "" : "",
                        difficulty: currentPlayerId !== null ? getPlayerById(currentPlayerId)?.info.difficulty || "easy" : "easy",
                    }}
                    validationSchema={schema}
                    onSubmit={(values) => {
                        const player = getPlayerByName(values.username)
                        if (!player) {
                            addPlayer({ id: players.length, info: { name: values.username, difficulty: values.difficulty, score: 0 } })
                        } else {
                            setCurrentPlayerId(player.id)
                            if (player.info.difficulty !== values.difficulty) {
                                updatePlayerDifficulty(player.id, values.difficulty)
                            }
                        }

                        alert("Settings saved")
                    }}
                >
                    <Form className="space-y-4">

                        {/* Username Field */}
                        <div className="flex flex-col">
                            <label htmlFor="username" className="mb-1 font-medium text-gray-700">
                                Username
                            </label>
                            <Field
                                name="username"
                                type="text"
                                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <ErrorMessage
                                name="username"
                                component="div"
                                className="text-red-500 text-sm mt-1"
                            />
                        </div>

                        {/* Difficulty Field */}
                        <div className="flex flex-col">
                            <label htmlFor="difficulty" className="mb-1 font-medium text-gray-700">
                                Difficulty
                            </label>
                            <Field
                                name="difficulty"
                                as="select"
                                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="easy">easy</option>
                                <option value="medium">medium</option>
                                <option value="hard">hard</option>
                            </Field>
                            <ErrorMessage
                                name="difficulty"
                                component="div"
                                className="text-red-500 text-sm mt-1"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition-colors"
                        >
                            Submit
                        </button>

                    </Form>
                </Formik>
            </div >

        </>
    );
}

export default Settings