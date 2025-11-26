import { Field, ErrorMessage } from "formik"

const DifficultyField = () => {
    return (
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
    )
}

export default DifficultyField 