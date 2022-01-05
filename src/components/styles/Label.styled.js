import styled from  "styled-components"

export const StyledLabel = styled. label`
position: absolute;
width: auto;
height: 14px;
left: 16px;
top: ${({top}) => top};

font-style: normal;
font-family: Lato;
font-weight: bold;
font-size: ${({fs}) => fs||'12px'};
line-height: 14px;

color: ${({color}) => color||'#000000'};
z-index:${({z}) => z||'0'};
`