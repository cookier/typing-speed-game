import './App.css'
import { faker } from "@faker-js/faker"
import RestartButton from './components/RestartButton'
import Results from './components/Results'
import UserTypings from './components/UserTypings'
import useEngine from './hooks/useEngine'
import { DarkModeToggle } from './components/DarkModeToggle'


function App() {
  const { state, words, updateWords, timeLeft } = useEngine()
  console.log(words);

  return (
    <>
      <DarkModeToggle />
      <CountdownTimer timeLeft={timeLeft} />
      <WordsContainer>
        <GenerateWords words={words}></GenerateWords>
        <UserTypings userInput={'Hello world'} className='absolute inset-0' />
      </WordsContainer>
      <RestartButton className={"mx-auto mt-10 text-slate-500"} onRestart={() => null} />
      <Results errors={10} accuracyPercentage={65} total={200} className={'mt-10'} />
    </>
  )
}

const WordsContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className='relative  text-3xl max-w-xl leading-relaxed break-all'>
    {children}
  </div>

}

const GenerateWords = ({ words }: { words: string }) => {
  return <div className='dark:text-slate-500 text-black-500'>{words}</div>
}

const CountdownTimer = ({ timeLeft }: { timeLeft: number }) => {
  return <h2 className='dark:text-primary-400 font-medium text-green-500'>Time: {timeLeft}</h2>
}

export default App
