import './App.css'
import {faker} from "@faker-js/faker"
import RestartButton from './components/RestartButton'
import Results from './components/Results'
import UserTypings from './components/UserTypings'

const words = faker.word.words(10)

function App() {

  return (
    <>
      <CountdownTimer timeLeft={20}/>
      <GenerateWrods words={words}></GenerateWrods>
      <UserTypings userInput={'Hello world'}/>
      <RestartButton className={"mx-auto mt-10 text-slate-500"} onRestart={()=>null}/>
      <Results errors={10} accuracyPercentage={65} total={200} className={'mt-10'} />
    </>
  )
}

const GenerateWrods=({words}:{words:string})=>{
  return <div className='text-slate-500 text-4xl'>{words}</div>
}

const CountdownTimer=({timeLeft}:{timeLeft:number})=>{
  return <h2 className='text-primary-400 font-medium'>Time: {timeLeft}</h2>
}

export default App
