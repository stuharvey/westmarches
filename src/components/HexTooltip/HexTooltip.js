import React from "react";

import {
  HexTitle,
  HexDescription,
  HexContainer,
  HexInfo,
  Location,
  ReactTooltip,
  TerrainType,
  HexLevel,
  Curator
} from "./styles";

function getDifficultyClass(level = 0) {
  return level > 3 ? "high" : level > 1 ? "medium" : "low";
}

function HexTooltip({ hovered }) {
  return (
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
        {hovered?.hexLevel > 0 && hovered.fogOfWar !== "TRUE" && (
          <HexLevel className={getDifficultyClass(hovered.hexLevel)}>
            {hovered.hexLevel}
          </HexLevel>
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
            {hovered["tile owner"] &&
              hovered["tile owner"] !== "-" &&
              hovered.fogOfWar !== "TRUE" && (
                <Curator>{hovered["tile owner"]}</Curator>
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
  );
}

export default HexTooltip;
