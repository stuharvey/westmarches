import styled from "styled-components";
import _ReactTooltip from "react-tooltip";

export const HexTitle = styled.h2`
  font-size: 16px;
  color: black;
  margin: 8px;
  margin-right: 28px;
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
  color: rgba(0, 0, 0, 0.87);
`;

export const Curator = styled.p`
  margin: 0;
  font-weight: bold;
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

export const HexLevel = styled.aside`
  color: rgba(0, 0, 0, 0.7);
  font-size: 10px;
  font-weight: bold;

  position: absolute;
  top: 0;
  right: 0;
  height: 36px;
  width: 36px;
  text-align: right;
  padding: 2px;
  border-radius: 0 4px 0 0;

  &.low {
    background: linear-gradient(45deg, transparent 36px, palegreen 0) bottom
      left;
  }

  &.medium {
    background: linear-gradient(45deg, transparent 36px, khaki 0) bottom left;
  }

  &.high {
    background: linear-gradient(45deg, transparent 36px, lightcoral 0) bottom
      left;
    color: white;
  }
`;
