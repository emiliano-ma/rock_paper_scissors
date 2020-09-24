import React, { Component } from "react";
import RenderGame from "./components/RenderGame";
import WelcomePage from "./components/WelcomePage";

const choices = ['Rock', 'Paper', 'Scissors']

class App extends Component {
  state = {
    playerName: "NoNamePlayer",
    computerChoice: '',
    playerChoice: '',
    outcome: '',
    computerScore: 0,
    playerScore: 0,
    welcomePage: true,
  };

  selectionHandler = async (e) => {
    const playerChoice = e.target.id;
    const computerChoice = choices[Math.floor(Math.random() * choices.length)]
    await this.playGame(playerChoice, computerChoice)

    this.setState({
      playerChoice: playerChoice,
      computerChoice: computerChoice
    })
  };

  playGame = (playerChoice, computerChoice) => {
    
    if(playerChoice === computerChoice) {
      this.setState({ outcome: `It is a tie` })
    }

    else if (
      (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
      (playerChoice === 'Paper' && computerChoice === 'Rock') ||
      (playerChoice === 'Scissors' && computerChoice === 'Paper')
    ) {
      this.setState({ playerScore: this.state.playerScore + 1 })
      this.setState({ outcome: `${this.state.playerName} wins!` })
      
    } else {
      this.setState({ computerScore: this.state.computerScore + 1 })
      this.setState({ outcome: `Computer wins!` })
    }
  }
 

  render() {
   
    return (
      <div>
        {this.state.welcomePage ? (
          <WelcomePage 
            onClickHandler= {() =>  this.setState({welcomePage: false})} 
            playerUpdater= {(e) =>  this.setState({playerName: e.target.value})} 
          />
        ) : (
          <RenderGame 
            selectionHandler={this.selectionHandler} 
            onClickHandler= {() =>  this.setState({welcomePage: true})}
            playerName={this.state.playerName}
            playerChoice={this.state.playerChoice}
            computerChoice={this.state.computerChoice}
            outcome={this.state.outcome}
            playerScore={this.state.playerScore}
            computerScore={this.state.computerScore}
          /> 
        )}
      </div>
    );
  }
}

export default App;