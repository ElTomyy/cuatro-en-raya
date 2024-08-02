import { useState } from "react";
import { TURNS } from "./logic/constants";
import { Squares } from "./components/Squares";
import { checkGameEnd, checkWinner } from "./logic/checkGameStatus";
import { WinnerBoard } from "./components/WinnerBoard";

function App() {
  const [board, setBoard] = useState(Array(42).fill(null));
  const [turn, setTrun] = useState(TURNS.first);
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (board[index] != null) return;

    if (index + 7 < board.length) {
      if (board[index + 7] == null) return;
    }

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn == TURNS.first ? TURNS.second : TURNS.first;
    setTrun(newTurn);

    const newWinner = checkWinner(newBoard);

    if (newWinner) {
      setWinner(newBoard[index]);
    } else if (checkGameEnd(newBoard)) {
      setWinner(false);
    }
  };

  const resetGame = () => {
    setBoard(Array(42).fill(null));
    setTrun(TURNS.first);
    setWinner(null);
  };

  return (
    <div className="board">
      <h1>4 En Raya</h1>
      <div className="d-flex">
        <div className="game">
          {board.map((element, index) => {
            return (
              <Squares key={index} checkClick={handleClick} index={index}>
                {element}
              </Squares>
            );
          })}
        </div>

        <section className="turn">
          <Squares isActive={TURNS.first == turn}>{TURNS.first}</Squares>
          <Squares isActive={TURNS.second == turn}>{TURNS.second}</Squares>
          <button
            onClick={resetGame}
            style={{ marginTop: "5px", marginBottom: "5px" }}
          >
            Reset
          </button>
        </section>

        <WinnerBoard winner={winner} restartGame={resetGame}/>
      </div>
    </div>
  );
}

export default App;
