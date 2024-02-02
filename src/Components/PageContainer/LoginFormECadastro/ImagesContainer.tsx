import styled from "styled-components";

type FormProps = {
  marginBottomInVh: number;
};

const FormImageContainer = styled.div<FormProps>`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  column-gap: 2vw;
  margin-bottom: ${(props) => props.marginBottomInVh}vh;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    column-gap: 0vw;
    row-gap: 2vh;
  }
`;

export default FormImageContainer;
