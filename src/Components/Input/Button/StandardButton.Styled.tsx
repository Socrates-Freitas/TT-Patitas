import styled from "styled-components"

type ButtonProps = {
    bgColor:string,
    textColor:string,
    marginBottomInVh:number
} 


const StandardButton = styled.input<ButtonProps>`
    border:none;
    background-color: ${props=> props.bgColor};
    border-radius: 18px;
    color:${props=> props.textColor};
    width:30%;
    height: 7vh;
    font-size: 1.4em;
    font-weight: bold;
    margin-bottom: ${props=> props.marginBottomInVh}vh;


    filter: drop-shadow(0px 4px 4px rgba(0,0,0,0,0.25));
    
    @media screen and (max-width: 800px) {
        width:85%;
        height: 5vh;

        align-self: center;

    }
`



export default StandardButton