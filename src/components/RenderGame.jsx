import React from 'react'
import { Button } from 'semantic-ui-react'

const RenderGame = ({selectionHandler, onClickHandler, playerName}) => {
  return (
    <>
      <button onClick={selectionHandler} name="Rock">Rock</button>
      <button onClick={selectionHandler} name="Paper">Paper</button>
      <button onClick={selectionHandler} name="Scissors">Scissors</button>
      <Button id="back" onClick={onClickHandler}>Back to edit Name</Button>
      <p id="player-name">Suerte {playerName}!</p>
      <br/>
      <br/>
    </>
  )
}

export default RenderGame
