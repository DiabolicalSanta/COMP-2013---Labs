import './App.css'
import ResortContainer from './Components/ResortContainer'
import data from "./data/data";

function App() {

  return (
    <>
     <h1>Resorts Lite</h1>
     <ResortContainer data={data}/>
     
    </>
  )
}

export default App
