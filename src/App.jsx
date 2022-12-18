import React from 'react'
import './App.css'
import Die from './components/Die'
import { nanoid } from 'nanoid'


function App() {
  const [dice, setDice] = React.useState(allNewDice())

  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push({
        id: nanoid(),
        value: Math.ceil(Math.random() * 6), 
        isHeld: false})
    }
    console.log(newDice) 
    return newDice
  }

  function rollDice() {
    console.log('rolling dice')
    setDice(allNewDice())
  }

  function holdDie(id) {
    setDice(
      prevDice => prevDice.map(
        die => die.id === id ? {...die, isHeld: !die.isHeld} : die
      )
    )

    console.log(id)
  }

  const diceElements = dice.map((die, i)=> {
    return (
      <Die 
        key={die.id}
        value={die.value}
        isHeld={die.isHeld}
        holdDie={() => holdDie(die.id)}
      />
    )
  })

  return (
    <main className="App flex">
      <div className="game-square flex">
        <h1 className='title'>Tenzies</h1>
        <p className='instructions flex'>Roll until all dice are the same. Click each die to freez it at its current value between rolls</p>
        <div className='dice-area grid'>
          {diceElements}
        </div>
        <button className='roll-button' onClick={rollDice}>Roll</button>
      </div>
    </main>
  )
}

export default App
