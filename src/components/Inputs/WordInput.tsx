import React, { useState } from "react";

interface WordInputProps {
    index: number;
    words: string[];
    activeIndex: number;
    setActiveIndex: (index: number) => void;
    onChange: (index: number, value: string) => void;
}

const WordInput = (props: WordInputProps) => {
    // const [active, setActive] = useState<Boolean>(false)

    return (
        <>
            {props.activeIndex != props.index &&
                <label
                    className="hover:cursor-pointer size-full content-center text-center"
                    onClick={() => { props.setActiveIndex(props.index) }}>
                    {props.words[props.index]}
                </label>}

            {props.activeIndex == props.index &&
                <input
                    autoFocus
                    className=" size-full content-center text-center bg-transparent border-none outline-none focus:outline-none caret-transparent focus:ring-1 p-0 m-0 placeholder-gray-500"
                    placeholder={props.words[props.index]}
                    onBlur={() => { props.setActiveIndex(-1) }}
                    onChange={(e) => { isLetter(e.target.value) && props.onChange(props.index, e.target.value); props.setActiveIndex(-1) }}>
                </input>}
        </>
    )
}

const isLetter = (word: string) => {
    return word.length === 1 && word.match(/[a-z]|[а-я]|і|ґ|ї/i);
}

export default WordInput