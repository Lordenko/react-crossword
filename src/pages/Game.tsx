import React from 'react';

import Layaout from './_Layaout';

function Game() {
    return (
        <>
            <div className="grid grid-cols-3 gap-2 w-96 mx-auto">
                {Array.from({ length: 9 }).map((_, i) => (
                    <div
                        key={i}
                        className="bg-gray-200 border border-gray-400 aspect-square flex items-center justify-center text-lg font-semibold"
                    >
                        Letter
                    </div>
                ))}
            </div>
        </>
    );
}

export default Game;
