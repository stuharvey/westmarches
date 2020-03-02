import React from "react";
import styled from "styled-components";

import Hexagon from "../Hexagon";

const Hex = styled(Hexagon)`
  width: 180px;
`;

function Pawn() {
  return <Hex width="100" fill="red" />;
}

export default Pawn;
