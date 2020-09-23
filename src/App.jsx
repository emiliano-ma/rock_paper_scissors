import React, { Component } from "react";
import RenderGame from "./components/RenderGame";
import WelcomePage from "./components/WelcomePage";

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
    // const playerChoice = e.target.id;
    // const computerChoice = 
    // // let playerChoice = e.target.name
    // let computerChoice = khdfdfhj
    // await playGame(playerChoice, )


    this.setState({
      // playerChoice: jhajhda,
      // computerChoice: jhsdkds
    })
  };

  onClickHandler = () => {
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