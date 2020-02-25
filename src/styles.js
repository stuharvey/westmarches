import styled from "styled-components";
import _ReactTooltip from "react-tooltip";

import { BOARD_SIZE } from "./constants";

const TRIANGLE_HEIGHT = 7.5;
const HEX_RADIUS = 13;
const HEX_MARGIN = 1.5;

export const Main = styled.main`
  background: lightgray;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

export const East = styled.section`
  flex: 1;
  opacity: 0.1;
`;

export const West = styled.section`
  flex: 3;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  overflow: visible;
  z-index: 1;
`;

export const Board = styled.div`
  width: ${(HEX_RADIUS + HEX_MARGIN) * 2 * BOARD_SIZE}px;
  transform: perspective(900px) rotateX(60deg) translateY(200px);
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

export const Hex = styled.div`
  margin-left: ${HEX_MARGIN}px;
  margin-bottom: ${HEX_MARGIN}px;
  float: left;
  margin-top: ${TRIANGLE_HEIGHT}px;
  width: ${HEX_RADIUS * 2}px;
  height: ${TRIANGLE_HEIGHT * 2}px;
  background-color: ${({ color }) => color};
  position: relative;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  transition: transform 0.1s ease-in-out, box-shadow 0.1s ease-in-out;

  &.hidden {
    visibility: hidden;
  }

  &:hover {
    z-index: 10;
    transform: scale(1.4);
    box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2),
      0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12);
  }

  &::before {
    content: "";
    width: 0;
    height: 0;
    border-bottom: ${TRIANGLE_HEIGHT}px solid ${({ color }) => color};
    border-left: ${HEX_RADIUS}px solid transparent;
    border-right: ${HEX_RADIUS}px solid transparent;
    position: absolute;
    top: -${TRIANGLE_HEIGHT}px;
  }

  &::after {
    content: "";
    width: 0;
    position: absolute;
    bottom: -${TRIANGLE_HEIGHT}px;
    border-top: ${TRIANGLE_HEIGHT}px solid ${({ color }) => color};
    border-left: ${HEX_RADIUS}px solid transparent;
    border-right: ${HEX_RADIUS}px solid transparent;
  }
`;

export const HexTitle = styled.h2`
  font-size: 16px;
  color: black;
  margin: 8px;
`;

export const HexDescription = styled.p`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.87);
  white-space: normal;
  margin: 8px;
`;

export const HexContainer = styled.section`
  margin: 0;
  max-width: 300px;
  overflow: hidden;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const HexInfo = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 10px;
  line-height: 18px;
  padding: 0 8px;

  background: #ddd;
  border-radius: 0 0 4px 4px;
`;

export const Location = styled.p`
  margin: 0;
  font-size: 10px;
  color: rgba(0, 0, 0, 0.87);
`;

export const TerrainType = styled.p`
  margin: 0;
  text-transform: uppercase;
  font-weight: bold;
`;

export const ReactTooltip = styled(_ReactTooltip)`
  &.__react_component_tooltip.type-light {
    background: #eee;
    padding: 0;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
      0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);

    border-radius: 4px;

    &.place-top::after {
      display: none;
    }
  }
`;
