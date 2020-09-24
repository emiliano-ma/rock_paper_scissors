import React from 'react'
import { Menu, Input, Button } from 'semantic-ui-react';

const WelcomePage = ({onClickHandler, playerUpdater}) => {

  return (
    <div className="grid-container">
      <div className="baseline">
        <h2 className="divs" >Ready for Rock-Paper&Scissors?</h2>
        <h3 className="divs">Enter your name to make it more fun !</h3>
      </div>
      <Menu className="grid-child">
        <Menu.Item>
          <Input onChange={playerUpdater} id="input-name" className='icon' placeholder="Player's Name" />
        </Menu.Item>
        <Menu.Item position='right'>
          <Button id="play" color='google plus' onClick={onClickHandler}>Play Now!</Button>
        </Menu.Item>
      </Menu>
    </div>
  )
}

export default WelcomePage
