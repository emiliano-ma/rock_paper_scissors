import React, { Component } from "react";
import RenderGame from "./components/RenderGame";
import WelcomePage from "./components/WelcomePage";

class App extends Component {
  state = {
    playerName: "player",
    computerChoice: null,
    playerChoice: '',
    outcome: null,
    computerScore: 0,
    playerScore: 0,
    welcomePage: true,
  };

  selectionHandler = async (e) => {
    debugger
    this.setState({ playerChoice: e.target.name });
    // let playerChoice = e.target.name
    // let computerChoice = khdfdfhj
    // await playGame(playerChoice, )


    this.setState({
      // playerChoice: jhajhda,
      // computerChoice: jhsdkds
    })
  };

  onClickHandler = () => {
    }
  // game = () => {
  //   debugger
  // }

  // const = startGame = () => {
  //   debugger
  // }

  render() {
    // let rendering
    // if (this.state.welcomePage) {
    //   rendering = (
    //     <>
    //     <WelcomePage onClickHandler={this.setState({ welcomePage: false })} />
    //     </>
    //   )
    // } else {
    //   rendering = (
    //     <>
    //     <RenderGame />
    //     </>
    //   )
    // }
    return (
      <div>
        {this.state.welcomePage ? (
          <WelcomePage onClickHandler= {() =>  this.setState({welcomePage: false})} />
        ) : (
          <RenderGame 
            selectionHandler={this.selectionHandler} 
            onClickHandler= {() =>  this.setState({welcomePage: true})}
          /> 
        )}
      </div>
    );
  }
}

export default App;