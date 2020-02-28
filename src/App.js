import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import HexTooltip from "./components/HexTooltip";
import Board from "./components/Board";
import Navbar from "./components/Navbar";
import Players from "./components/Players";
import Pawn from "./components/Pawn";
import Adventures from "./components/Adventures";
import { Main } from "./styles";
import { BOARD_SIZE } from "./constants";
import { parseSheetData, zip } from "./dataUtils";

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

function parseTileSheet(data) {
  const { header, rows: hexes } = parseSheetData(data);
  const zipped = hexes.map(hex => zip(header, hex));
  return zipped.map(hex => ({
    ...hex,
    location: hex.location.split(",").map(n => parseInt(n.trim())),
    hexLevel: hex.hexLevel !== "-" ? parseInt(hex.hexLevel) : 0
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
  const [hexData, setHexData] = useState(BOARD);
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
      setHexData(dataCopy);
      setTerrainMapping(terrain);
    }
    getData();
  }, []);

  const onMouseOver = useCallback(
    event => {
      const target = event.currentTarget;
      const row = parseInt(target.getAttribute("data-row"));
      const col = parseInt(target.getAttribute("data-col"));

      setHovered({ ...hexData[row][col] });
    },
    [hexData]
  );

  const onMouseOut = useCallback(() => setHovered(DEFAULT_HOVER), []);

  return (
    <Router>
      <Main>
        <Navbar />

        <Switch>
          <Route path="/westmarches/players">
            <Players />
          </Route>
          <Route path="/westmarches/adventures">
            <Adventures />
          </Route>
          <Route path="/westmarches/pawn">
            <Pawn />
          </Route>
          <Route path="/westmarches">
            <Board
              hexData={hexData}
              terrainMapping={terrainMapping}
              onMouseOver={onMouseOver}
              onMouseOut={onMouseOut}
            />
            <HexTooltip hovered={hovered} />
          </Route>
          <Route path="/">
            <Redirect to="/westmarches" />
          </Route>
        </Switch>
      </Main>
    </Router>
  );
}

export default App;
