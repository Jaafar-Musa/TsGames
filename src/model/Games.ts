import IGame from "./IGames";

let Games: IGame[];
Games = [
  {
    title: "Tictactoe",
    description:
      "a game in which two players seek in alternate turns to complete a row, a column, or a diagonal with either three O's or three X's drawn in the spaces of a grid of nine squares; noughts and crosses.",
    imgName: "tic.jpeg",
    isReady: true,
  },
  {
    title: "Sudoku",
    description:
      "The goal of Sudoku is to fill a 9×9 grid with numbers so that each row, column and 3×3 section contain all of the digits between 1 and 9.",
    imgName: "sudoku.jpeg",
    isReady: false,
  },
];

export default Games;
