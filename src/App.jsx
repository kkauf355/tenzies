import React from 'react'
import Die from './components/Die'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'


function App() {
  const [dice, setDice] = React.useState(allNewDice())
  const [tenzies, setTenzies] = React.useState(false)

  function newGame() {
    setDice(allNewDice())
    setTenzies(false)
  }

  React.useEffect(
    ()=> {
    const check = dice[0].value
    const allSameValues = dice.every(die => die.value === check)
    if (allSameValues) {
      setTenzies(true)
      console.log("tenzies = " + tenzies)
    }
  }, [dice])

  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie())
    }
    return newDice
  }

  function generateNewDie() {
    return {
      id: nanoid(),
      value: Math.ceil(Math.random() * 6), 
      isHeld: false
    }
  }

  function rollDice() {
    setDice(prevDice =>
      prevDice.map(die => die.isHeld ? die : generateNewDie())
    )
    console.log(dice)
  }

  function holdDie(id) {
    setDice(
      prevDice => prevDice.map(die => die.id === id ? {...die, isHeld: !die.isHeld} : die)
    )
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
        <button className='roll-button' onClick={tenzies ? newGame : rollDice}>{tenzies ? "New Game" : "Roll"}</button>
      </div>
      {tenzies && <Confetti />}
    </main>
  )
}

export default App
