import styled from "styled-components";
import BACKGROUND_COLOR from "../../../../Theme/Colors";

type InpurProps = {
    iconUrl:string,
}

const StyledTextInput = styled.input<InpurProps>`

   
    border: none;
    width: 60vw;
    height: 10%;
    padding-left: 2vw;
    background-color: ${BACKGROUND_COLOR};
    border-bottom: solid 1px rgba(5, 61, 88,80);
    background-image: url(${props => props.iconUrl});
    background-repeat: no-repeat;
    background-position: 0.5%;
    padding-left: 3vw;
    padding-top:12px;
    padding-bottom:12px;
    font-size: 1.2em;

    
@media screen and (max-width: 800px) {
        width: 100%;
        height: 3vh;
        padding-left: 10vw;
    }
   
`


export default StyledTextInput