import React, { Component } from 'react'
import RenderGame from './components/RenderGame'
import WelcomePage from './components/WelcomePage'

class App extends Component {
  state = {
    playerName: 'player',
    computerChoice: null,
    playerChoice: null,
    outcome: null,
    computerScore: 0,
    playerScore: 0,
    welcomePage: true
  }

  selectionHandler = e => {debugger
    this.setState({ playerChoice: e.target.name  });
    
  }

  // game = () => {
  //   debugger
  // }




  
  // const = startGame = () => {
  //   debugger
  // }
  






  render() {
    let rendering
    if (this.state.welcomePage) { 
      rendering = (
        <>
        <WelcomePage onClickHandler={() => this.setState({ welcomePage: false })} />
        </>
      )
    } else {
      rendering = (
        <>
        <RenderGame />
        </>
      )
    }
    return (
      <div>
        {rendering}
        <RenderGame selectionHandler={this.selectionHandler} game={this.game} />
      </div>
    )
  }
}

export default App
