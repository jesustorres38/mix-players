import { useState } from "react"
import "./App.css"
import Balanced from "./components/Balanced"
import Random from "./components/Random"

function App() {
  const [option, setOption] = useState(true)
  
  return (
    <>
      <div className='container'>
        <label className='label-one' htmlFor='flexSwitchCheckDefault'>
          Balanced
        </label>
        <div className='form-switch'>
          <input
            className='form-check-input'
            type='checkbox'
            role='switch'
            id='flexSwitchCheckDefault'
            onChange={() => setOption(!option)}
          />
        </div>
        <label className='' htmlFor='flexSwitchCheckDefault'>
          Random
        </label>
      </div>

      {option ? <Balanced /> : <Random />}
    </>
  )
}

export default App
