import "./player.css";
import CurrentScore from "./CurrentScores.component";
import GlobalScore from "./GlobalScore.component";
const Player = (props) => {
  return (
    <div className={`player ${props.className}`}>
      <div>Name: {props.playerName}</div>
      <div>Total Score: {props.totalScore}</div>
      <div>Wins: {props.wins}</div>
    </div>
  );
};
export default Player;
