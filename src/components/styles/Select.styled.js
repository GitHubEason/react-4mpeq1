import styled from "styled-components";
export const StyledSelect = styled.select`
position: absolute;
width: 300px;
height: 40px;
left: 16px;
top: ${({top}) => top};
border: 1px solid #A4A4A4;
box-sizing: border-box;
border-radius: 5px;
padding-left: 13.73px;
background: ${({bg}) => bg};

font-family: Lato;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 17px;

  option {
  }
`