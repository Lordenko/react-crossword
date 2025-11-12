import { useEffect, useRef } from 'react'
import { useTimer } from '../states/GameLogicState'

const useTimerLogic = () => {
    const { timer, currentTimer, timerStatus, setTimer, setCurrentTimer, removeSecond, startTimer, stopTimer, resetTimer } = useTimer()

    const currentTimerRef = useRef(currentTimer)
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    useEffect(() => {
        setCurrentTimer(timer)
    }, [timer])

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