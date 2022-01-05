import styled from  "styled-components"

export const StyledZero = styled. div`
display:inline-block;
&:before {
	position: absolute;
    content:".00";
    right:65px;
	top: ${({top}) => top||'314px'};
    z-index:1;
}
`