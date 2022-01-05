import styled from  "styled-components"

export const StyledDollor = styled. div`
display:inline-block;
&:before {
	position: absolute;
    content:"$";
    left:${({left}) => left||'32px'};
	top: ${({top}) => top||'314px'};
    z-index:${({z}) => z||'1'};
}
`