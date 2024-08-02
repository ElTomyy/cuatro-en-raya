export const checkGameEnd = (board) => {
    return board.every((square) => square != null)
}

export const checkWinner = (boardToCheck) => {

    for (let i = 0; i <= boardToCheck.length - 4; i++) {
        if (boardToCheck[i] != null && boardToCheck[i] === boardToCheck[i + 1] && boardToCheck[i] === boardToCheck[i + 2] && boardToCheck[i] === boardToCheck[i + 3]) {
            return boardToCheck[i];
        }
    }

    for (let i = 0; i < boardToCheck.length; i++) {
        let count = 1;
        for (let j = i + 7; j < boardToCheck.length; j += 7) {
            if (boardToCheck[i] == boardToCheck[j] && boardToCheck[i] != null) {
                count++;
                if (count == 4) {
                    return boardToCheck[i];
                }
            } else {
                break; // Dejar de buscar si no coincide
            }
        }
    }

    return null;
}
