import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  PlayerList,
  PlayerItem,
  Player,
  XPBar,
  Title,
  MainContent,
  LeftContent,
  RightContent,
  Description,
  TotalXP,
  CurrentXP,
  CharacterImage,
  Race,
  ClassLevel,
  Gold,
  GoldContainer,
  PlayerName
} from "./styles";

import { parseSheetData, zip } from "../../dataUtils";

const PLAYERS_URL =
  "https://spreadsheets.google.com/feeds/cells/1EHjx9oHnOT7sRLwalgnp0DI1cXzRYYMtptOOSEdxRak/1/public/full?alt=json";

const XP_TABLE = [
  300,
  900,
  2700,
  6500,
  14000,
  23000,
  34000,
  48000,
  64000,
  85000,
  100000,
  120000,
  140000,
  165000,
  195000,
  225000,
  265000,
  305000,
  355000
];

function getMaxXP(currentXP = 0) {
  // TODO: memoize calls in a Player component
  for (const xp of XP_TABLE) {
    if (xp > currentXP) return xp;
  }
  return Infinity;
}

function parsePlayerSheet(data) {
  const { header, rows } = parseSheetData(data, { skipFirst: 1 });
  const lowerCasedHeader = header.map(column => column.toLowerCase());
  return rows
    .map(row => zip(lowerCasedHeader, row))
    .map(row => ({ ...row, xp: parseInt(row.xp, 10) }));
}

function Players() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    async function getData() {
      const result = await axios(PLAYERS_URL);
      const parsedPlayers = parsePlayerSheet(result?.data?.feed?.entry);
      setPlayers(parsedPlayers);
    }
    getData();
  }, []);

  return (
    <PlayerList>
      {players.map(player => (
        <PlayerItem key={player.name}>
          <Player>
            <MainContent>
              <LeftContent>
                <CharacterImage src={player.image} />
                <ClassLevel>
                  {player.class} {player.level}
                </ClassLevel>
                <Race>{player.race}</Race>
              </LeftContent>
              <RightContent>
                <Title>{player.name}</Title>
                <Description>{player.description}</Description>
              </RightContent>
            </MainContent>
            <XPBar>
              <p>
                {player.xp}/{getMaxXP(player.xp)}
              </p>
              <TotalXP>
                <CurrentXP
                  style={{
                    right: `${100 -
                      Math.round((player.xp / getMaxXP(player.xp)) * 100)}%`
                  }}
                />
              </TotalXP>
            </XPBar>
            <GoldContainer>
              <p>
                {player.gold}
                <Gold />
              </p>
            </GoldContainer>
            <PlayerName>{player.player}</PlayerName>
          </Player>
        </PlayerItem>
      ))}
    </PlayerList>
  );
}

export default Players;
