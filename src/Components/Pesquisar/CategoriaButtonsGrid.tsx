import styled from "styled-components"
import { CategoriaButton } from "./CategoriaButton"

const StyledGrid = styled.div`
    margin-top: 7vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2vh 6vw;

`

type CategoriaGridProps = {
    categorias:Array<string>
}


export const CategoriaGrid = (props:CategoriaGridProps) => {
    return (
        <StyledGrid>
           
           {props.categorias.map( (element) => {
                
                return( <CategoriaButton texto={element}/>)
                    
           } )}

        </StyledGrid>
    )

}



