import { TIMEOUT_MS } from "./data.js";
import usePrinter from "./printer.js";

export default {
    ...usePrinter(),
    showMemoryGame(game) {
        // ✅mostrar que empieza el juego
        this.printHeading("The Game starts");
        this.printLine();
        this.showBoard(game.board)
        // ✅mostrar cartas todas cubiertas
        this.showStart()
        game.gameLog.forEach((round) => {
            // ✅mostrar la ronda en la que estamos
            this.showRound(round.rounds);
            // ✅mostrar los ínidices de estas cartas seleccionadas
            this.showPickedCardsIndexes(round.cardIndexesSelected);
            // ✅mostrar las todas las cartas con las que hemos seleccionado descubiertas
            this.printBoard(round.board);
        })
    },
    showBoard: function (board) {
        this.printHeading("The Board");
        this.printLine();
        this.printBoard(board, true);
    },
    showStart() {
        this.printHeading("Starting");
        this.printLine();
        this.printCoveredBoard();
    },
    showRound(rounds) {
        this.printLine(`Round: #${rounds}`);
    },
    showPickedCardsIndexes(cardsIndexes) {
        this.printLine("picked cards indexes: ", cardsIndexes);
    },
    // Bonus setInterval
    showMemoryGameWithPromise(game) {
        return new Promise((resolve, reject) => {
            this.showBoard(game.board)
            this.showStart(game.gameLog[0].board)

            let i = 0
            const intervalId = setInterval(() => {
                const round = game.gameLog[i]
                this.showRound(round.rounds)
                this.showPickedCardsIndexes(round.cardIndexesSelected);
                this.printBoard(round.board);
                i++
                if (i === game.gameLog.length) {
                    clearInterval(intervalId);
                    resolve("END!");
                    return;
                } 
            }, TIMEOUT_MS)
        })
    },
    showStats(game) {

        const {board, gameLog, round} = game
        // number of rounds
        this.printHeading("Game Stats");
        this.printLine();
        this.printLine("Rounds needed to solve it: ", round);
        this.printLine();

        // card with maximum number of turns
        const cardWithMaxTurns = board.reduce(
            (curr, prev) => (curr = curr.timesTurned > prev.timesTurned ? curr : prev),
            0
        );
        const cardWithMaxTurnsIndex = board.findIndex((card) => card.timesTurned === cardWithMaxTurns.timesTurned);
        this.printLine(
            `Card ${cardWithMaxTurns.figure} at index ${cardWithMaxTurnsIndex} had ${cardWithMaxTurns.timesTurned} turns`
        );

        // progress at 0%, 25%, 50%, 75%, 100% (viaje en el tiempo de la partida)
        const progressCheckpoints = [0, 25, 50, 75, 100];
        for (const progress of progressCheckpoints) {
            let log = game.getLog(gameLog, progress);
            this.printHeading(`Log at ${progress}% progress`);
            this.printBoard(log.board);
            this.printLine(`Played cards indexes`, log.cardIndexesSelected);
            for (let cardIndex of log.cardIndexesSelected) {
                this.printLine(`card ${cardIndex} has been flipped ${log.board[cardIndex].timesTurned}`)
            }
        }
    }
}