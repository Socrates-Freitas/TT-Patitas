import styled from "styled-components"



type CategoriaButtonProps = {
    texto:string
}

const StyledCategoriaButton = styled.div`

    background-color: #BDC7CC;
    color:#154962;
    border-radius: 20px;
    width:35vw;
    padding:8px;
    display:flex;
    align-items: center;
    justify-content: center;
`


export const CategoriaButton = (props:CategoriaButtonProps) => {
    return <StyledCategoriaButton>{props.texto}</StyledCategoriaButton>
}