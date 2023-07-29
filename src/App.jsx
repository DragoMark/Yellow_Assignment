import './App.css'
import TopBar from './Components/TopBar/TopBar'
import Display from './Components/Display/Display'


function App() {

  return (
    <>
      <div className="w-full my-8 flex flex-row justify-center items-center">
        <TopBar />
      </div>

      <div className="w-full my-4 flex flex-row justify-center items-center">
        <Display />
      </div>
    </>
  )
}

export default App
