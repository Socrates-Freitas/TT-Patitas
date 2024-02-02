import styled from "styled-components";

import fowardIcon from '../../Imgs/icons/right_arrow.svg'

type BotaoFidelidadeProp = {
    texto:string;
}

 const StyledBotaoFidelidade = styled.div`

    background-color: #BDC7CC;

    background-image: url(${fowardIcon});
    background-repeat: no-repeat;
    background-position: 97%;

    margin-top:5vh;

    color:#154962;
    border:none;
    border-radius: 20px;
    width:80%;
    padding-top:12px;
    padding-bottom:12px;
    padding-left:12px;
    padding-right:40px;
    display:flex;
    align-items: center;
    justify-content: center;

   
`


export const BotaoFidelidade = (props:BotaoFidelidadeProp) => {
    return <StyledBotaoFidelidade> {props.texto} </StyledBotaoFidelidade>
}