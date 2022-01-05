import styled from  "styled-components"

export const StyledInput = styled. input`
position: absolute;
width: 300px;
height: 40px;
left: 16px;
top: ${({top}) => top||'303px'};
background: ${({bg}) => bg};
border: 1px solid #A4A4A4;
box-sizing: border-box;
border-radius: 3px;
padding-left:32.35px;
padding-right:32.35px;
font-family: Lato;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 17px;
`