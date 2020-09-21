import React from 'react'
import { Menu, Input, Button } from 'semantic-ui-react';

const WelcomePage = ({onClickHandler, playerUpdater}) => {

  return (
    <div className="grid-container">
      <h2>Ready for Rock-Paper&Scissors?</h2>
      <Menu className="grid-child">
        <Menu.Item>
          <Input onChange={playerUpdater} id="input-name" className='icon' placeholder="Player's Name" />
        </Menu.Item>
        <Menu.Item position='right'>
          <Button id="play" onClick={onClickHandler}>Play Now!</Button>
        </Menu.Item>
      </Menu>
    </div>
  )
}

export default WelcomePage
