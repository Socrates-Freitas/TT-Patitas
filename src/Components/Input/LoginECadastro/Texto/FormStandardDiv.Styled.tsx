import styled from "styled-components";





const FormCenterDiv  = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items:start;

    @media screen and (max-width: 800px) {
        width: 100%;
        padding-left: 0;

        align-items: center;

    }
`


export default FormCenterDiv