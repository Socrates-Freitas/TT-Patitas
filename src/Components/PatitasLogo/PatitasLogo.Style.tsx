import styled from "styled-components";

type LogoProps = {
    widthInVW:number;
    minheightVH:number;
    
}

const PatitasLogoImg = styled.img<LogoProps>`
    width: ${props=> props.widthInVW}%;
    height: auto;

    @media screen and (max-width: 800px) {
        width: ${props=> props.widthInVW * 1.5}%;
    }
`

export default PatitasLogoImg