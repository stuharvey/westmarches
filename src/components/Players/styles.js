import styled from "styled-components";

export const PlayerList = styled.ul`
  flex: 0 1 488px;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const PlayerItem = styled.li`
  width: 100%;
`;

export const Player = styled.article`
  width: 100%;

  margin-bottom: 16px;
  background: #eee;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: relative;
`;

export const MainContent = styled.div`
  display: flex;
`;

export const RightContent = styled.div`
  flex: 1;
  padding: 12px 12px 12px 0;
`;

export const LeftContent = styled.div`
  flex: 0 0 90px;

  text-align: center;
  font-size: 10px;
  color: rgba(0, 0, 0, 0.54);
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 16px;
  line-height: 20px;
  font-weight: bold;
`;

export const PlayerName = styled.p`
  position: absolute;
  bottom: 8px;
  right: 8px;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.38);
  margin: 0;
`;

export const Description = styled.p`
  margin: 0;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.54);
  margin-top: 6px;
`;

export const XPBar = styled.footer`
  p {
    text-align: center;
    line-height: 18px;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.38);
    margin: 0;
  }
`;

export const TotalXP = styled.div`
  background: #d6d6d6;
  position: relative;
  height: 4px;
`;

export const CurrentXP = styled.div`
  background: #89d9de;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`;

export const CharacterImage = styled.img`
  margin: 12px 12px 6px;
  display: block;
  width: 75px;
  height: 75px;
  border: 1px solid black;
`;

export const ClassLevel = styled.p`
  margin: 0;
  font-weight: bold;
  line-height: 16px;
`;

export const Race = styled.p`
  font-size: 10px;
  margin: 0;
`;

export const GoldContainer = styled.div`
  position: absolute;
  top: 0;
  right: 12px;

  font-size: 10px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.38);
`;

export const Gold = styled.span`
  display: inline-block;
  background: #ffde6b;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-left: 2px;
`;
