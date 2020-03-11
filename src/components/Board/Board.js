import React from "react";
import cx from "classnames";

import { Hex, HexRow, BoardContainer, West, North, South } from "./styles";

function Board({ hexData, onMouseOver, onMouseOut, terrainMapping }) {
  return (
    <>
      <BoardContainer>
        {hexData.map((row, i) => (
          <HexRow key={i} className={cx({ odd: i % 2 === 1 })}>
            {row.map((hex, j) => {
              return (
                <Hex
                  key={`${i}-${j}`}
                  data-tip="React-tooltip"
                  data-row={i}
                  data-col={j}
                  fill={
                    hex?.fogOfWar === "TRUE"
                      ? "slategray"
                      : hex?.color !== "-"
                      ? hex.color
                      : hex?.terrainType !== "-"
                      ? terrainMapping[hex.terrainType]?.color
                      : "transparent"
                  }
                  onMouseOver={onMouseOver}
                  onMouseOut={onMouseOut}
                  className={cx({ hidden: !hex?.title })}
                  hexInfo={hex}
                />
              );
            })}
          </HexRow>
        ))}
        <HexRow odd>
          {Array(20)
            .fill({})
            .map((row, i) => (
              <Hex
                key={`bottom-${i}`}
                data-tip="React-tooltip"
                color={"#383838"}
                className={cx({ hidden: i !== 10 })}
              />
            ))}
        </HexRow>
      </BoardContainer>
      <West>
        <p>West</p>
      </West>
      <North>
        <p>North</p>
      </North>
      <South>
        <p>South</p>
      </South>
    </>
  );
}

export default React.memo(Board);
