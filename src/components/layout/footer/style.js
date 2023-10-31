import styled from "styled-components";
import { Section } from "../../../styled";


 export const StyledFooter = styled(Section)`
 display: flex;
 justify-content: space-between;
 width: ${(props) => props.theme.pageWidth};
 height:  80px;
 align-items: center;
 padding-left: 90px;
 padding-right: 90px;
 align-items: center;
 margin: 0 auto;
 box-sizing: border-box;
 `

 export const Copyright = styled.span`
 min-height: 43px;
 min-width: 148px;
 max-width: 700px;
 padding: 8px 12px;
 font-size: ${(props) => props.theme.fontSizeDefault};
 border-radius: 5px;
 vertical-align: middle;
 text-align: center;
 box-sizing: border-box;
 ;
`;

