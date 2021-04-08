import * as Util from "./util";
import { Player } from "./player";
import { Game } from "./game";

let newGame: Game;

document.getElementById("startGame")!.addEventListener("click", () => {
    const player: Player = new Player();
    player.name = Util.getValue("playername");

    const problemCount: number = Number(Util.getValue("problemCount"));
    const factor: number = Number(Util.getValue("factor"));

    newGame = new Game(player, problemCount, factor);
    newGame.displayGame();
});

document.getElementById("calculate")!.addEventListener("click", () => {
    newGame.calculateScore();
});