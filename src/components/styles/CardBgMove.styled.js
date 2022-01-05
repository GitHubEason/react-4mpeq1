import styled, {keyframes}from "styled-components"

const move = keyframes`
    from{
        transform: translate(-414px, 0px)
    }
    to{
        transform: translate(0px, 0px)
    }
`
const moonMove = keyframes`
    from{
        transform: translate(-414px, 0px)
    }
    to{
        transform: translate(0px, 0px)
    }
`
const movePlanetoid = keyframes`
from{
    transform: translate(-414px, 0px)
}
to{
    transform: translate(0px, 0px)
}
`
export const StyledCardBgMove = styled.div`
position: absolute;
overflow: hidden;
width: 320px;
height: 448px;
left: ${({left}) => left||'414px'};
top: ${({top}) => top || '32px'};

background: #8477C9;
box-shadow: 0px 4px 4px #E7E7FF;
border-radius: 5px;
animation: ${move} 1s;
`
export const CircleMoonMove = styled. div`
position: absolute;
width: 36.08px;
height: 35.17px;
left: 143.38px;
top: 330.45px;
-moz-border-radius: 50px;
-webkit-border-radius: 50px;
border-radius: 50px;

background: #E7E7FF;
box-shadow: -10px 13px 3px rgba(0, 0, 0, 0.15);

`
export const CirclePlanetoidMove = styled. div`

position: absolute;
display: inline;

width: 220px;
height: 203.64px;
left: -40.08px;
top: 294px;

border-radius: 50%;


background: linear-gradient(117.38deg, #E7E6FF 10.73%, rgba(231, 230, 255, 0) 84.05%);

`