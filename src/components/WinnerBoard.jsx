import { Squares } from "./Squares";

export function WinnerBoard ({winner, restartGame}){
    if(winner == null) return null

    const text = winner == false ? "Tie ಠ_ಠ" : "Winner ☞◕∀◕☞";

    return ( 
        <section className="winner">
            <div className="text">
                <h2>{text}</h2>

                <header>{winner && <Squares>{winner}</Squares>}</header>

                <footer>
                    <button onClick={restartGame}>Play Again</button>
                </footer>
            </div>
        </section>
    )
}