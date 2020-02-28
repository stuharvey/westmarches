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
  GoldContainer
} from "./styles";

import { parseSheetData, zip } from "../../dataUtils";

const PLAYERS_URL =
  "https://spreadsheets.google.com/feeds/cells/1EHjx9oHnOT7sRLwalgnp0DI1cXzRYYMtptOOSEdxRak/1/public/full?alt=json";

const MAX_XP = 300;

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
                {player.xp}/{MAX_XP}
              </p>
              <TotalXP>
                <CurrentXP
                  style={{
                    right: `${Math.round((player.xp / MAX_XP) * 100)}%`
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
          </Player>
        </PlayerItem>
      ))}
    </PlayerList>
  );
}

export default Players;
