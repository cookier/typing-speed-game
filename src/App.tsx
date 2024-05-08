import './App.css'
import { faker } from "@faker-js/faker"
import RestartButton from './components/RestartButton'
import Results from './components/Results'
import UserTypings from './components/UserTypings'

const words = faker.word.words(10)

function App() {

  return (
    <>
      <CountdownTimer timeLeft={20} />
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
  return <div className='text-slate-500'>{words}</div>
}

const CountdownTimer = ({ timeLeft }: { timeLeft: number }) => {
  return <h2 className='text-primary-400 font-medium'>Time: {timeLeft}</h2>
}

export default App
