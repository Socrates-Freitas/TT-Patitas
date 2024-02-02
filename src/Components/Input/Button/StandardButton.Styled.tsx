import styled from "styled-components";

type ButtonProps = {
  bgColor: string;
  fontSizeInEm: number;
  marginBottomInVh: number;
  isBold: boolean;
};

const StandardButton = styled.input.attrs({ type: "submit" })<ButtonProps>`
  border: none;
  background-color: ${(props) => props.bgColor};
  border-radius: 18px;
  color: #e6e8e9;
  width: 30%;
  height: 7vh;
  font-size: ${(props) => props.fontSizeInEm}em;
  font-weight: ${(props) => (props.isBold ? "bold" : "normal")};
  margin-bottom: ${(props) => props.marginBottomInVh}vh;

  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  -webkit-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  @media screen and (max-width: 800px) {
    width: 85%;
    height: 5vh;

    align-self: center;
  }
`;

export default StandardButton;
