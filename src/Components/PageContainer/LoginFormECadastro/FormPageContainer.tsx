import styled from "styled-components"
import BACKGROUND_COLOR from "../../../Theme/Colors"


const LoginECadastroPageContainer = styled.main`
    width: 100%;
    height:100vh;
    background-color: ${BACKGROUND_COLOR};
    display: flex;
    flex-direction: column;
    
    padding-top:50px;
    color:#154962;

    align-items: center;

    @media screen and (max-width:800px){
       
    }
    
`

export default LoginECadastroPageContainer