import React, { useState } from "react";

import { ElementIndex, WordInputProps } from "../../type";

const WordInput = (props: WordInputProps) => {
    const unSelected =
        <>
            <label
                className="hover:cursor-pointer size-full content-center text-center"
                onClick={() => {
                    props.setActiveElementIndex(props.elementIndex)
                }}>
                {props.inputWords[props.elementIndex.row][props.elementIndex.col]}
            </label>
        </>

    const selected =
        <>
            <input
                autoFocus
                className=" size-full content-center text-center bg-transparent border-none outline-none focus:outline-none caret-transparent focus:ring-1 p-0 m-0 placeholder-gray-500"
                placeholder={props.inputWords[props.elementIndex.row][props.elementIndex.col]}
                onBlur={() => { props.setActiveElementIndex({ row: -1, col: -1 }) }}
                onChange={(e) => { isLetter(e.target.value) && props.setInputWord(props.elementIndex, validLetter(e.target.value)); props.setActiveElementIndex({ row: -1, col: -1 }) }}>
            </input>
        </>

    if (props.elementIndex !== undefined &&
        props.activeElementIndex !== undefined &&
        isActive(props.elementIndex, props.activeElementIndex)) {
        return selected
    } else {
        return unSelected
    }
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