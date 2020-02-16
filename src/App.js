import React from "react";
import cx from "classnames";

import { Main, East, West, Hex, HexRow, Board } from "./styles";
import { BOARD_SIZE } from "./constants";

const PALETTE = [
  // "#ffcfdf",
  "#fefdca",
  "#e0f9b5",
  // "#a5dee5",
  "#527318",
  "#899857",
  "#bf8513",
  "#6e6e6e",
  "#f79779"
];

const ROW_MAX = [
  { min: 0, max: 0 }, // 0
  { min: 0, max: 0 }, // 1
  { min: 0, max: 0 }, // 2

  { min: 4, max: 7 }, // 3
  { min: 4, max: 8 }, // 4

  { min: 3, max: 8 }, // 5
  { min: 3, max: 9 }, // 6
  { min: 2, max: 9 }, // 7
  { min: 2, max: 10 }, // 8
  { min: 1, max: 10 } // 9
];

const BOARD = Array(BOARD_SIZE).fill(Array(BOARD_SIZE).fill({}));

function getTileColor() {
  return PALETTE[Math.floor(Math.random() * PALETTE.length)];
}

function App() {
  return (
    <Main>
      <West className="hex-container">
        <Board>
          {BOARD.map((row, i) => (
            <HexRow className={cx({ odd: i % 2 === 1, hidden: i < 3 })}>
              {row.map((hex, j) => {
                const { min, max } = ROW_MAX[i];
                return (
                  <Hex
                    color={getTileColor()}
                    className={cx({ hidden: j + 1 <= min || j + 1 >= max })}
                  />
                );
              })}
            </HexRow>
          ))}
          <HexRow odd>
            {Array(10)
              .fill({})
              .map((row, i) => (
                <Hex color={"#383838"} className={cx({ hidden: i !== 5 })} />
              ))}
          </HexRow>
        </Board>
      </West>

      <East />
    </Main>
  );
}

export default App;
