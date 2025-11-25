import { useEffect } from 'react';

import { useLocalStorage } from '../states/LocalStorageState'


const Results = () => {
    const { players } = useLocalStorage()

    return (
        <>
            <div className="w-full max-w-md mx-auto mt-8 space-y-3">
                <h2 className="text-center text-xl font-bold text-gray-800 mb-2">Таблиця гравців</h2>

                {players.map((player, index) => (
                    <div
                        key={player.id}
                        className={`
                            flex justify-between items-center px-4 py-3 rounded-2xl shadow-sm
                            transition-all duration-200 border
                            ${index === 0
                                ? "bg-gradient-to-r from-yellow-100 to-yellow-50 border-yellow-300 shadow-md"
                                : index === 1
                                    ? "bg-gradient-to-r from-gray-100 to-gray-50 border-gray-300"
                                    : index === 2
                                        ? "bg-gradient-to-r from-orange-100 to-orange-50 border-orange-200"
                                        : "bg-white border-gray-200 hover:bg-blue-50"}
                            `}>

                        <div className="flex items-center gap-3">
                            <span
                                className={`
                                    text-lg font-bold rounded-full w-8 h-8 flex items-center justify-center
                                    ${index === 0
                                        ? "bg-yellow-400 text-white shadow-sm"
                                        : index === 1
                                            ? "bg-gray-400 text-white"
                                            : index === 2
                                                ? "bg-orange-400 text-white"
                                                : "bg-blue-100 text-blue-800"}
                                `}>

                                {index + 1}
                            </span>
                            <span className="font-semibold text-gray-800">{player.info.name}</span>
                        </div>

                        <span
                            className={`
                                text-lg font-bold
                                ${index === 0
                                    ? "text-yellow-700"
                                    : index === 1
                                        ? "text-gray-700"
                                        : index === 2
                                            ? "text-orange-700"
                                            : "text-blue-700"}
                            `}>
                            {player.info.score}
                        </span>
                    </div>
                ))}
            </div>
        </>


    );
}

export default Results;
