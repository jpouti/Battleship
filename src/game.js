import { Player } from "./player";

const game = (player1, player2) => {
    const player1 = Player(player1);
    const player2 = Player(player2);

    let turn = 0;
    const checkTurn = () => {
        if (turn % 2 === 0) {
            return player1;
        } else if (turn % 2 !== 0) {
            return player2;
        }
    }
}