import styled from "styled-components";

type ImgProps = {
    widthPercent:number;
    
}

const PatitasImg = styled.img<ImgProps>`
    width: ${props=> props.widthPercent}%;
    height: auto;

    @media screen and (max-width: 800px) {
        width: ${props=> props.widthPercent * 3}%;
    }
`

export default PatitasImg