import styled from "styled-components";



const FormImageContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    column-gap: 2vw;

    @media screen and (max-width:800px) {
        flex-direction: column;
        align-items: center;
        column-gap: 0vw;
        row-gap: 2vh;
    }
`

export default FormImageContainer