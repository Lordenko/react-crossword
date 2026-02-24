import { useEffect, useRef } from 'react'
import { useTimer } from '../states/GameLogicState'

/**
 * Custom hook that manages the countdown timer logic for the game.
 * It handles the execution of the timer interval, synchronizes the current timer state,
 * and ensures proper cleanup of intervals to prevent memory leaks.
 *
 * @returns An object containing the current timer state and control functions:
 * - `currentTimer`: The current time remaining in seconds.
 * - `setTimer`: Function to set the initial timer value.
 * - `startTimer`: Function to start or resume the timer countdown.
 * - `stopTimer`: Function to pause or stop the timer.
 * - `resetTimer`: Function to reset the timer back to its initial value.
 */
const useTimerLogic = () => {
    const { timer, currentTimer, timerStatus, setTimer, setCurrentTimer, removeSecond, startTimer, stopTimer, resetTimer } = useTimer()

    const currentTimerRef = useRef(currentTimer)
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    useEffect(() => {
        setCurrentTimer(timer)
    }, [timer, setCurrentTimer])

    useEffect(() => {
        currentTimerRef.current = currentTimer
    }, [currentTimer])

    useEffect(() => {
        if (!timerStatus) {
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
                intervalRef.current = null
            }
            return;
        }

        if (intervalRef.current) return;

        intervalRef.current = setInterval(() => {
            if (currentTimerRef.current <= 0) {
                clearInterval(intervalRef.current!);
                intervalRef.current = null;
                return;
            }
            removeSecond();
        }, 1000);

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current)
            intervalRef.current = null
        };
    }, [timerStatus, currentTimer, removeSecond])

    return {
        currentTimer,
        setTimer,
        startTimer,
        stopTimer,
        resetTimer
    }

}

export default useTimerLogic