import React from 'react'
import './App.css'
import Die from './components/Die'

function App() {
  const [dice, setDice] = React.useState([1,1,1,1,1,1,1,1,1,1])

  return (
    <div className="App flex">
      <div className="game-square flex">
        <h1>Tenzies</h1>
        <p>Roll until all dice are the same. Click each die to freez it at its current value between rolls</p>
      
          <Die />
        
      <button className='roll-button'>Roll</button>
      </div>
    </div>
  )
}

export default App
