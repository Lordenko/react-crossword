import { Field, ErrorMessage } from "formik"

const UsernameField = () => {
    return (
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
    )
}

export default UsernameField