import styled from "styled-components";

const FormCadastroContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: start;

  @media screen and (max-width: 800px) {
    width: 100%;
    padding-left: 0;
    margin-top: 4vh;
    align-items: center;
  }
`;

export default FormCadastroContentContainer;
