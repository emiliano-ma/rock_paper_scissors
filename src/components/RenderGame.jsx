import React from 'react'
import { Button } from 'semantic-ui-react'

const RenderGame = ({
  selectionHandler, 
  onClickHandler, 
  playerName, 
  playerChoice, 
  computerChoice,
  outcome,
  playerScore,
  computerScore
}) => {
  return (
    <>
      <p id="player-name">Best of luck {playerName}!</p>
      <p>Now Go ahead and make your choice</p>
      <button onClick={selectionHandler} id="rock-"><span id="rock" aria-label="jsx-a11y/accessible-emo" role="img">✊</span></button>
      <button onClick={selectionHandler} id="paper-" name="Paper"><span id="paper" aria-label="jsx-a11y/accessible-emo" role="img">✋</span></button>
      <button onClick={selectionHandler} id="scissors-" name="Scissors"><span id="scissors" aria-label="jsx-a11y/accessible-emo" role="img">✌</span></button>
      <Button id="back" onClick={onClickHandler}>Back to edit Name</Button>
      <br/>
      <p id="player-choice">{playerName}'s' choise is: {playerChoice}</p>
      <p id="computer-choice">Computer choise is: {computerChoice}</p>
      <p id="outcome">{outcome}</p>
      <p id="playerScore">{playerName}: {playerScore}</p>
      <p id="computerScore">Computer: {computerScore}</p>

    </>
  )
}

export default RenderGame
