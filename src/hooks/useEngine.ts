import { useState } from "react"
import useWords from "./useWords"
import useCountdown from "./useCountdown"

export type State = 'start' | 'run' | 'finish'
const initialTime = 30

const useEngine = () => {
    const [state, setState] = useState<State>('start')
    const { timeLeft, resetCountdown, startCountdown } = useCountdown(initialTime)
    console.log('timeLeft:' + state);

    // useWords
    const { words, updateWords } = useWords(20)
    return { state, words, updateWords, timeLeft }
}

export default useEngine