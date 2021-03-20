import React from "react";
import Button from "./Button.component";
import Player from "./Player.component";
import Dice from "./Dice.component";
import CurrentScore from "./CurrentScores.component";
import "./game.css";

class Game extends React.Component {
  state = {
    value: 100,
    pointsToWin: 100,
    dices: [1, 1],
    playerTurn: 0,
    isWinner: false,
    winnerName: "",
    currentScore: 0,
    players: [
      {
        name: "player1",
        totalScore: 0,
        wins: 0,
      },
      {
        name: "player2",
        totalScore: 0,
        wins: 0,
      },
    ],
  };

  rollDices = async () => {
    await this.setState({ dices: this.state.dices.map((dice) => Math.floor(Math.random() * 6) + 1) });
    this.checkDices();
  };

  drawDices = () => {
    return this.state.dices.map((dice) => {
      return <Dice diceValue={dice} />;
    });
  };

  drawPlayers = () => {
    return this.state.players.map((player, index) => {
      return <Player className={this.state.playerTurn === index ? "currentPlayer" : ""} playerName={player.name} totalScore={player.totalScore} wins={player.wins} />;
    });
  };

  holdBtn = () => {
    const theCurrentPlayer = this.state.players[this.state.playerTurn];
    theCurrentPlayer.totalScore += this.state.currentScore;
    const playerTurn = this.state.playerTurn + 1 === this.state.players.length ? 0 : this.state.playerTurn + 1;
    if (theCurrentPlayer.totalScore >= this.state.pointsToWin) {
      theCurrentPlayer.wins += 1;
      this.setState((prevState) => {
        prevState.players[prevState.playerTurn] = theCurrentPlayer;
        return { players: prevState.players, isWinner: true, playerTurn, currentScore: 0, winnerName: theCurrentPlayer.name };
      });
    } else {
      this.setState((prevState) => {
        prevState.players[prevState.playerTurn] = theCurrentPlayer;
        return { players: prevState.players, playerTurn, currentScore: 0 };
      });
    }
  };

  checkDices = () => {
    if (this.state.dices[0] === 6 && this.state.dices[1] === 6) {
      const playerTurn = this.state.playerTurn + 1 === this.state.players.length ? 0 : this.state.playerTurn + 1;
      this.setState({ playerTurn, currentScore: 0 });
    } else {
      const currentScore =
        this.state.currentScore +
        this.state.dices.reduce((sum, current) => {
          return sum + current;
        });
      this.setState({ currentScore });
    }
  };

  newGame = () => {
    this.setState({
      value: 100,
      pointsToWin: 100,
      dices: [1, 1],
      playerTurn: 0,
      isWinner: false,
      winnerName: "",
      currentScore: 0,
      players: [
        {
          name: "player1",
          totalScore: 0,
          wins: 0,
        },
        {
          name: "player2",
          totalScore: 0,
          wins: 0,
        },
      ],
    });
  };

  newRound = () => {
    this.setState((prevState) => {
      const players = prevState.players.map((player) => {
        return {
          name: player.name,
          totalScore: 0,
          wins: player.wins,
        };
      });
      return {
        pointsToWin: 100,
        dices: [1, 1],
        playerTurn: 0,
        isWinner: false,
        winnerName: "",
        currentScore: 0,
        players,
      };
    });
  };

  checkInput = (event) => {
    this.setState({ value: parseInt(event.target.value) });
  };

  pointsToWinUpdate = () => {
    if (this.state.value < 12 || !this.state.value) {
      this.setState({ pointsToWin: 12, value: 12 });
    } else {
      this.setState({ pointsToWin: this.state.value });
    }
  };

  render() {
    if (this.state.isWinner) {
      return (
        <div>
          <Button textValue="New Game" btnClick={this.newGame}></Button>
          <Button textValue="New Round" btnClick={this.newRound}></Button>
          <div>{this.state.winnerName} Has Won The Game!!!</div>
        </div>
      );
    } else {
      return (
        <div className="game">
          {this.drawPlayers()}
          <Button textValue="Roll Dice" btnClick={this.rollDices}></Button>
          <Button textValue="Hold" btnClick={this.holdBtn}></Button>
          <Button textValue="New Game" btnClick={this.newGame}></Button>
          {this.drawDices()}
          <CurrentScore curScore={this.state.currentScore} />
          <input type="number" value={this.state.value} onChange={this.checkInput} />
          <Button textValue="Score To Win" btnClick={this.pointsToWinUpdate}></Button>
          <div>Points To Win The Game: {this.state.pointsToWin}</div>
        </div>
      );
    }
  }
}

export default Game;
