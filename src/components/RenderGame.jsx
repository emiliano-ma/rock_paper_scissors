import React from 'react'
import { Button } from 'semantic-ui-react'

const RenderGame = ({selectionHandler, onClickHandler, playerName}) => {
  return (
    <>
      <button onClick={selectionHandler} id="rock-"><span id="rock" aria-label="jsx-a11y/accessible-emo" role="img">✊</span></button>
      <button onClick={selectionHandler} id="paper-" name="Paper"><span id="paper" aria-label="jsx-a11y/accessible-emo" role="img">✋</span></button>
      <button onClick={selectionHandler} id="scissors-" name="Scissors"><span id="scissors" aria-label="jsx-a11y/accessible-emo" role="img">✌</span></button>
      <Button id="back" onClick={onClickHandler}>Back to edit Name</Button>
      <p id="player-name">Best of luck {playerName}!</p>
      <br/>
      <br/>
    </>
  )
}

export default RenderGame
