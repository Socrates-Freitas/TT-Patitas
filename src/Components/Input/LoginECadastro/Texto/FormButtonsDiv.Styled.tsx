import styled from "styled-components";


const FormButtonsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 4%;
    
    @media screen and (max-width:800px){
        flex-direction: column;
        justify-content: center;
        gap: 0px;
        width: 110%;

    }

`

export default FormButtonsContainer