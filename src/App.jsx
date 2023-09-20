
import LineChart from "./components/LineChart/LineChart"
import NavBer from "./components/NavBer/NavBer"
import PriceOptions from "./components/PriceOptions/PriceOptions"





function App() {


  return (
    <>
      
      <h1 className="text-3xl bg-red-400 text-center text-white">Vite + React</h1>
     
      <NavBer></NavBer>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      
    </>
  )
}

export default App
