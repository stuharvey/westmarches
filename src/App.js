import React, { useState, useCallback, useEffect } from "react";
import cx from "classnames";
import axios from "axios";

import {
  Main,
  East,
  West,
  Hex,
  HexRow,
  Board,
  HexTitle,
  HexDescription,
  HexContainer,
  HexInfo,
  Location,
  ReactTooltip,
  TerrainType
} from "./styles";
import { BOARD_SIZE } from "./constants";

const BOARD = Array(BOARD_SIZE).fill(Array(BOARD_SIZE).fill({}));

const DEFAULT_HOVER = {
  title: "Westwall",
  description:
    "A small but bustling town sitting at the farthest reaches of civilization. Adventurers flock here, seeking fame and fortune in the wilds west of the wall."
};

const TILE_URL =
  "https://spreadsheets.google.com/feeds/cells/1-Oc-nzUgM8HB1S7EL9Dgs8i3KpyBC5NUe7G1Fd2KC2I/1/public/full?alt=json";

const TERRAIN_URL =
  "https://spreadsheets.google.com/feeds/cells/1-Oc-nzUgM8HB1S7EL9Dgs8i3KpyBC5NUe7G1Fd2KC2I/2/public/full?alt=json";

function zip(listA, listB) {
  if (listA?.length !== listB?.length) {
    throw new Error("zip() requires two equal length arrays");
  }
  const zipped = {};
  listA.forEach((key, i) => (zipped[key] = listB[i]));
  return zipped;
}

function parseSheetData(data) {
  // take data from the above sheet and parse it to machine readable
  const allRows = data.reduce(
    (currentRows, entry) => {
      try {
        const cell = entry["gs$cell"];
        const row = parseInt(cell?.row, 10) - 1;
        const val = cell.$t;

        if (currentRows.length <= row) {
          currentRows.push([]);
        }
        currentRows[row].push(val);
        return currentRows;
      } catch (e) {
        console.error("Error parsing rows from API");
        throw e;
      }
    },
    [[]]
  );
  const [header, ...rows] = allRows;
  return { header, rows };
}

function parseTileSheet(data) {
  const { header, rows: hexes } = parseSheetData(data);
  const zipped = hexes.map(hex => zip(header, hex));
  return zipped.map(hex => ({
    ...hex,
    location: hex.location.split(",").map(n => parseInt(n.trim()))
  }));
}

function parseTerrainSheet(data) {
  const { header, rows } = parseSheetData(data);
  return rows.reduce((terrainTypes, row) => {
    const terrainObj = zip(header, row);
    terrainTypes[terrainObj.terrainType] = terrainObj;
    return terrainTypes;
  }, {});
}

function App() {
  const [hovered, setHovered] = useState(DEFAULT_HOVER);
  const [data, setData] = useState(BOARD);
  const [terrainMapping, setTerrainMapping] = useState({});

  useEffect(() => {
    async function getData() {
      const hexResult = await axios(TILE_URL);
      const terrainResult = await axios(TERRAIN_URL);
      const hexes = parseTileSheet(hexResult?.data?.feed?.entry);
      const terrain = parseTerrainSheet(terrainResult?.data?.feed?.entry);
      const dataCopy = JSON.parse(JSON.stringify(BOARD));
      hexes.forEach(hex => {
        const { location } = hex;
        dataCopy[location[0]][location[1]] = hex;
      });
      setData(dataCopy);
      setTerrainMapping(terrain);
    }
    getData();
  }, []);

  const onMouseOver = useCallback(
    event => {
      const target = event.currentTarget;
      const row = parseInt(target.getAttribute("data-row"));
      const col = parseInt(target.getAttribute("data-col"));

      setHovered({ ...data[row][col] });
    },
    [data]
  );

  const onMouseOut = useCallback(() => setHovered(DEFAULT_HOVER), []);
  return (
    <Main>
      <West className="hex-container">
        <Board>
          {data.map((row, i) => (
            <HexRow key={i} className={cx({ odd: i % 2 === 1 })}>
              {row.map((hex, j) => {
                return (
                  <Hex
                    key={`${i}-${j}`}
                    data-tip="React-tooltip"
                    data-row={i}
                    data-col={j}
                    color={
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
        </Board>
      </West>

      <East />

      <ReactTooltip type="light">
        <HexContainer>
          {hovered.fogOfWar === "TRUE" ? (
            <HexDescription>
              Uncharted territory. Explore at your own risk.
            </HexDescription>
          ) : (
            <>
              <HexTitle>{hovered.title}</HexTitle>
              {hovered.description.split("\\n").map(description => (
                <HexDescription key={description.substring(0, 20)}>
                  {description}
                </HexDescription>
              ))}
            </>
          )}
          {(hovered.location || hovered.terrainType) && (
            <HexInfo>
              {hovered.terrainType && (
                <TerrainType>
                  {hovered.terrainType === "-" || hovered.fogOfWar === "TRUE"
                    ? "Unknown"
                    : hovered.terrainType}
                </TerrainType>
              )}
              {hovered.location && (
                <Location>
                  {hovered.location[0]}, {hovered.location[1]}
                </Location>
              )}
            </HexInfo>
          )}
        </HexContainer>
      </ReactTooltip>
    </Main>
  );
}

export default App;
