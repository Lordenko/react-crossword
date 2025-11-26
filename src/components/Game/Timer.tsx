import { TimerProps } from '../../types/props';

const Timer = (props: TimerProps) => {
    return (
        <div className="flex justify-center mt-4">
            <div className="bg-gray-100 text-gray-800 font-mono text-lg sm:text-xl md:text-2xl py-2 px-4 sm:px-6 rounded-xl shadow-md border border-gray-200 w-28 sm:w-32 text-center">
                {formatTime(props.timer)}
            </div>
        </div>
    )
}

const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60).toString().padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return `${minutes}:${secs}`;
};


export default Timer