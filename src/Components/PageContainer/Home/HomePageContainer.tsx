import styled from "styled-components"
import BACKGROUND_COLOR from "../../../Theme/Colors"



const HomePageContainer = styled.main`
    width: 100%;
    height:100vh;
    background-color: ${BACKGROUND_COLOR};
    display: flex;
    flex-direction: column;
    font-family: Verdana;
    padding-top:20px;
    color:#154962;

    align-items: center;

    @media screen and (max-width:800px){
       
    }
    
`

export default HomePageContainer