import React from 'react'
import {  Label, Menu, Header } from 'semantic-ui-react'


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
      <Menu size='massive'>
        <Menu.Item id="player-name" inverted header>Best of luck {playerName}!</Menu.Item>
        <Menu.Item id="back" onClick={onClickHandler}>Edit Name</Menu.Item>
      </Menu>
      {/* <p id="player-name">Best of luck {playerName}!</p> */}

      <div className="divs">
        <Menu inverted size='massive' vertical>
          <Menu.Item>
            <Label id="playerScore" color='green'>{playerScore}</Label>
            {playerName} Score
          </Menu.Item>
        </Menu>
        <Menu inverted size='massive' vertical>
          <Menu.Item>
            <Label id="computerScore" color='red'>{computerScore}</Label>
            Computer Score
          </Menu.Item>
        </Menu>
     
      </div>

      <div className="divs">
        <Header as='h3'>Now Go ahead and make your choice!</Header>
      </div>

      <div className="choices">
        <span onClick={selectionHandler} className="emoji" id="Rock" aria-label="jsx-a11y/accessible-emo" role="img">✊</span>
        <span onClick={selectionHandler} className="emoji" id="Paper" aria-label="jsx-a11y/accessible-emo" role="img">✋</span>
        <span onClick={selectionHandler} className="emoji" id="Scissors" aria-label="jsx-a11y/accessible-emo" role="img">✌</span>
      </div>
      
      <br/>

      <div className="divs">
        <Menu size='massive' >
          <Menu.Item id="player-choice">
          {playerName}'s' choise is: {playerChoice}
          </Menu.Item>
        </Menu>
        <Menu size='massive' >
          <Menu.Item id="computer-choice">
          Computer choise is: {computerChoice}
          </Menu.Item>
        </Menu>
      
      </div>
      <br/>
      <br/>
      <div className="divs">
        <Header id="outcome" as='h2'>{outcome}</Header>
      </div>
    </>
  )
}

export default RenderGame


