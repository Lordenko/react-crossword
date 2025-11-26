import { Formik, Form } from "formik"

import UsernameField from "../components/Settings/UsernameField"
import DifficultyField from "../components/Settings/DifficultyField"
import SubmitButton from "../components/Settings/SubmitButton"

import useSettingsLogic from "../hooks/useSettingsLogic"

const Settings = () => {
    const SettingsLogic = useSettingsLogic()

    return (
        <>
            <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
                <h1 className="text-2xl font-bold mb-6 text-center">Settings</h1>
                <Formik
                    initialValues={SettingsLogic.initialValues}
                    validationSchema={SettingsLogic.schema}
                    onSubmit={SettingsLogic.submit}
                >
                    <Form className="space-y-4">
                        <UsernameField />
                        <DifficultyField />
                        <SubmitButton />
                    </Form>
                </Formik>
            </div >

        </>
    );
}

export default Settings