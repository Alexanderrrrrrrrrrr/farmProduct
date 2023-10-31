import styled from "styled-components";
import { Li, Section, Ul } from "../../../styled";


export const Advantages = styled(Section) `
    position: relative;
    display: flex;
    padding-left: 90px;
    padding-right: 90px;
    box-sizing: border-box;
    padding-top: 100px;
    padding-bottom: 100px;
    flex-direction: column;
    align-items: center;
 `
  
 export const AdvantagesLists = styled(Ul) `
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
    margin-top: 44px;
    margin-bottom: 64px;
    margin-left: -20px;
    font-size: 0;
    line-height: 0;
    text-align: center;
 `
  
 export const AdvantagesItem = styled(Li) `
    display: inline-block;
    margin-left: 20px;
    margin-top: 20px;
    font-size: 18px;
    line-height: 27px;
    vertical-align: top;
    text-align: left;
    overflow: hidden;
    white-space: normal;
  `

  