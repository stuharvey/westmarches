import styled from "styled-components";

import Hexagon from "../Hexagon";
import { BOARD_SIZE } from "../../constants";

const TRIANGLE_HEIGHT = 7.5;
const HEX_RADIUS = 13;
const HEX_MARGIN = 1.5;

export const BoardContainer = styled.div`
  width: ${(HEX_RADIUS + HEX_MARGIN) * 2 * BOARD_SIZE}px;
  transform: perspective(900px) rotateX(60deg) translateY(200px);
  align-self: flex-start;
`;

export const HexRow = styled.div`
  clear: left;

  &.hidden {
    visibility: hidden;
  }

  &.odd {
    margin-left: ${HEX_RADIUS + HEX_MARGIN / 2}px;
  }
`;

export const Hex = styled(Hexagon)`
  margin-left: ${HEX_MARGIN}px;
  margin-bottom: ${HEX_MARGIN}px;
  margin-top: -${TRIANGLE_HEIGHT}px;
  float: left;
  width: ${HEX_RADIUS * 2}px;
  transition: transform 0.1s ease-in-out, box-shadow 0.1s ease-in-out;
  filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.2));
  position: relative;

  &.hidden {
    visibility: hidden;
  }

  &:hover {
    z-index: 10;
    transform: scale(1.4);
    filter: drop-shadow(0 0 8px rgba(0, 0, 0, 0.2));
  }
`;
