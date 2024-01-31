import styled from "styled-components";

type ImgSpecs = {
    widthPercent:number;
    
    
}

const PatitasImg = styled.img<ImgSpecs>`
    width: ${props=> props.widthPercent}%;
    height: auto;

    @media screen and (max-width: 800px) {
        width: ${props=> props.widthPercent * 3}%;
    }
`

export default PatitasImg