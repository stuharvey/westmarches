import React, { useState, useCallback } from "react";
import cx from "classnames";
import ReactTooltip from "react-tooltip";

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

const pickRandom = list => list[Math.floor(Math.random() * list.length)];

const DEFAULT_HOVER = {
  title: "Westwall",
  description: "Home sweet home"
};

const TITLES = [
  "Stonefoot Hills",
  "Goblin Hill",
  "The Mines of Moria",
  "Boring Plains",
  "Here Be Dragons",
  "Seven Holy Springs",
  "Plan for Trouble",
  "Just a Big Hill",
  "Death by Orc"
];

const DESCRIPTIONS = [
  "Ten wizard towers in one zone??",
  "You should bring a few days of rations.",
  "[NOOBS ONLY] Definitely not filled with hydras.",
  "Rumors abound of the mystical springs with rejuvinating properties.",
  "Literally just grass for a whole hex.",
  "Level 10 dungeon. Many adventurers sacrificed themselves to return this information.",
  "Probably at least one dragon."
];

function App() {
  const [hovered, setHovered] = useState(DEFAULT_HOVER);

  const onMouseOver = useCallback(
    () =>
      setHovered({
        title: pickRandom(TITLES),
        description: pickRandom(DESCRIPTIONS)
      }),
    []
  );
  const onMouseOut = useCallback(() => setHovered(DEFAULT_HOVER), []);

  return (
    <Main>
      <West className="hex-container">
        <Board>
          {BOARD.map((row, i) => (
            <HexRow key={i} className={cx({ odd: i % 2 === 1, hidden: i < 3 })}>
              {row.map((hex, j) => {
                const { min, max } = ROW_MAX[i];
                return (
                  <Hex
                    key={`${i}-${j}`}
                    data-tip="React-tooltip"
                    color={PALETTE[(i + j) % PALETTE.length]}
                    onMouseOver={onMouseOver}
                    onMouseOut={onMouseOut}
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
                <Hex
                  key={`bottom-${i}`}
                  data-tip="React-tooltip"
                  color={"#383838"}
                  className={cx({ hidden: i !== 5 })}
                />
              ))}
          </HexRow>
        </Board>
      </West>

      <East />

      <ReactTooltip type="dark">
        <h2>{hovered.title}</h2>
        <p>{hovered.description}</p>
      </ReactTooltip>
    </Main>
  );
}

export default App;
