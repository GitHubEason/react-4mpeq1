import styled from "styled-components"

export const StyledCardBg = styled.div`
position: absolute;
overflow: hidden;
width: 320px;
height: 448px;
left: ${({left}) => left||'32px'};
top: ${({top}) => top || '32px'};

background: #8477C9;
box-shadow: 0px 4px 4px #E7E7FF;
border-radius: 5px;
`