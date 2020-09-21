import React from 'react'

const RenderGame = (selectionHandler, game) => {
  return (
    <>
      <button onClick={selectionHandler} name="Rock">Rock</button>
      <button onClick={selectionHandler} name="Paper">Paper</button>
      <button onClick={selectionHandler} name="Scissors">Scissors</button>

      <button onClick={game} name="Scissors">Start Game</button>

      <br/>
      <br/>
    </>
  )
}

export default RenderGame
