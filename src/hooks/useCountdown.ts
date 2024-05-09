import { useEffect, useRef, useState } from "react"

const useCountdown = (initialTime: number) => {

    const [timeLeft, setTimeLeft] = useState(initialTime)
    const intervalRef = useRef<number | null>(null)

    const startCountdown = () => {
        setInterval(() => {
            setTimeLeft((timeLeft: number) => timeLeft - 1)
        }, 1000)
    }
    const resetCountdown = () => {
        // 清除之前的定时器
        if (intervalRef.current) {
            clearInterval(intervalRef.current)
        }
        setTimeLeft(initialTime)
    }

    useEffect(() => {
        if (!timeLeft && intervalRef.current) {
            clearInterval(intervalRef.current)
        }
    }, [timeLeft])

    return { timeLeft, startCountdown, resetCountdown }

}

export default useCountdown