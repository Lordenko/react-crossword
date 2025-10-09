import React from 'react';

import Layaout from './_Layaout';

type Player = {
    rank: number;
    name: string;
    score: number;
};

const players: Player[] = [
    { rank: 1, name: "Аліса", score: 120 },
    { rank: 2, name: "Боб", score: 110 },
    { rank: 3, name: "Карл", score: 95 },
    { rank: 4, name: "Даша", score: 80 },
    { rank: 5, name: "Ева", score: 70 },
];


function Results() {
    return (
        <>
            <div className="overflow-x-auto w-full max-w-md mx-auto mt-8">
                <table className="w-full border-collapse border border-gray-300 text-left">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border border-gray-300 p-2">#</th>
                            <th className="border border-gray-300 p-2">Ім’я</th>
                            <th className="border border-gray-300 p-2">Очки</th>
                        </tr>
                    </thead>
                    <tbody>
                        {players.map((player) => (
                            <tr
                                key={player.rank}
                                className="hover:bg-gray-100 transition-colors"
                            >
                                <td className="border border-gray-300 p-2">{player.rank}</td>
                                <td className="border border-gray-300 p-2">{player.name}</td>
                                <td className="border border-gray-300 p-2">{player.score}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Results;
