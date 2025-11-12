import React, { useEffect, useState } from "react";

import { ElementIndex, WordInputProps } from "../../types";

const WordInput = (props: WordInputProps) => {
    const boolCheckLetter = checkLetter(props.inputWords[props.elementIndex.row][props.elementIndex.col], props.elementIndex, props.crosswordWords)

    const unSelected = (
        <label
            className={`
                w-full h-full flex items-center justify-center rounded-lg text-lg font-semibold
                border transition-all select-none
                ${boolCheckLetter
                    ? "bg-green-200 border-green-500 text-green-900"
                    : "bg-gray-100 border-gray-300 hover:bg-gray-200 hover:cursor-pointer active:scale-95"}
            `}
            onClick={() => {
                !boolCheckLetter && props.setActiveElementIndex(props.elementIndex);
            }}
        >
            {props.inputWords[props.elementIndex.row][props.elementIndex.col]}
        </label>
    );

    const selected = (
        <input
            autoFocus
            className="
                w-full h-full text-center rounded-lg text-lg font-semibold text-gray-800
                border-2 border-blue-400 bg-blue-50/60
                focus:bg-blue-100/80 focus:border-blue-500 focus:ring-2 focus:ring-blue-300
                outline-none caret-transparent transition-all
                placeholder-gray-500
            "
            placeholder={props.inputWords[props.elementIndex.row][props.elementIndex.col]}
            onBlur={() => {
                props.setActiveElementIndex({ row: -1, col: -1 });
            }}
            onChange={(e) => {
                isLetter(e.target.value) &&
                    props.setInputWord(props.elementIndex, validLetter(e.target.value));
                props.setActiveElementIndex({ row: -1, col: -1 });
            }}
        />
    );

    if (props.elementIndex !== undefined &&
        props.activeElementIndex !== undefined &&
        isActive(props.elementIndex, props.activeElementIndex)) {
        return selected
    } else {
        return unSelected
    }
}

const checkLetter = (letter: string, elementIndex: ElementIndex, crosswordWords: string[][]) => {
    if (crosswordWords[elementIndex.row][elementIndex.col] !== null && letter !== '' && letter === crosswordWords[elementIndex.row][elementIndex.col]) return true
    else return false
}

const validLetter = (word: string) => {
    return word.toUpperCase()
}

const isLetter = (word: string) => {
    return word.length === 1 && word.match(/[a-z]/i);
}

const isActive = (elementIndex: ElementIndex, activeElementIndex: ElementIndex) => {
    return elementIndex.row === activeElementIndex.row && elementIndex.col === activeElementIndex.col
}

export default WordInput