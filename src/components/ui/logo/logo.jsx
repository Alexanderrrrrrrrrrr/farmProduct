import React from "react";
import  {Text, StyledLogo} from "./style.js";
import { ReactComponent as LogoImage } from "../../../assets/logo.svg";
;

function Logo() {
  return (
    <StyledLogo href="/" >
      <LogoImage />
      <Text>Фермерские продукты</Text>
    </StyledLogo>
  );
}

export default Logo;