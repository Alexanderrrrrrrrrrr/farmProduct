import React from "react";
import Logo from "../../ui/logo/logo";
import {StyledFooter, Copyright} from "./style";

function Footer() {
    return (
      <StyledFooter >
        <Logo />
        <Copyright > Созданно: Бабенков А С</Copyright>
      </StyledFooter>
    );
  }
  
  export default Footer;
