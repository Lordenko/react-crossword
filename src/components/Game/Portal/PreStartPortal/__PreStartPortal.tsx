import ReactDOM from "react-dom";

import { PreStartPortalProps } from "../../../../types";

import { useNavigate } from "react-router-dom";

import ModalLayaout from "../../../Layaout/ModalLayaout";

const PreStartPortal = (props: PreStartPortalProps) => {
    const navigate = useNavigate()

    if (props.currentPlayerId !== null) return null

    return (
        <ModalLayaout>
            <div className="bg-white rounded-2xl p-8 shadow-2xl text-center flex flex-col items-center gap-6 max-w-sm w-[90%]">

                <h2 className="text-2xl font-bold text-gray-800">
                    Name Required
                </h2>

                <p className="text-gray-600 text-sm">
                    To start the game, please set up your player name in the settings.
                </p>

                <button
                    onClick={() => navigate("/settings")}
                    className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 active:scale-95 transition-all"
                >
                    Go to Settings
                </button>
            </div>
        </ModalLayaout>
    )
}

export default PreStartPortal