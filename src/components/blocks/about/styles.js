import styled from "styled-components";
import Section from "../../../styled/section/section";
import mane from "../../../assets/mane-page.svg";
import ellipse from "../../../assets/Ellipse.svg";

const Paragraph = styled.p`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`
  
  export const StyledSection = styled(Section)`
    display: flex;
    position: relative;
    padding-left: padding-left: ${(props) => props.theme.pagePadding};
    padding-top: 159px;
    padding-bottom: 159px;
    padding-right: 603px;
    background-color:${(props) => props.theme.backgroundColorBlue};
    align-items: center;
    z-index: 1;
    box-sizing: border-box;
    width: ${(props) => props.theme.pageWidth};
    margin: 0 auto;

    &::after {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 60px;
    display: block;
    content: "";
    width: 446px;
    height: 446px;
    margin: auto;
    background: url(${ellipse});
    }

    &::before {
        width: 446px;
        height: 446px;
        position: absolute;
        top: 52px;
        bottom: 0;
        right:-25px;
        display: block;
        content: "";
        background: url(${mane});
        background-repeat: no-repeat;
        z-index: 10; 
    }

`;

export const StaledWrapper = styled(Paragraph)`
    position: relative;
    min-width: 650px;
    z-index: 3;
`;

export const Text = styled(Paragraph)`
    margin-top: 20px;
    padding-right: 122px;
    margin-bottom: 40px;
`;

