import styled from "styled-components";

type ConfirmarStyledImgProp = {
  topMarginInVh: number;
  bottomMarginInVh: number;
};

type ConfirmarImageProp = {
  imgUrl: string;
  topMarginInVh: number;
  bottomMarginInVh: number;
};





const StyledConfirmarImg = styled.img<ConfirmarStyledImgProp>`
  width: 70%;
  margin-top: ${(props) => props.topMarginInVh}vh;
  margin-bottom: ${(props) => props.bottomMarginInVh}vh;
`;

const StyledConfirmarEmailImg = styled.img<ConfirmarStyledImgProp>`
  width: 70%;
  z-index: 1;
  margin-top: ${(props) => props.topMarginInVh}vh;
  margin-bottom: ${(props) => props.bottomMarginInVh}%;
`;





export const ConfirmarImg = (props: ConfirmarImageProp) => {
  return (
    <StyledConfirmarImg
      src={props.imgUrl}
      topMarginInVh={props.topMarginInVh}
      bottomMarginInVh={props.bottomMarginInVh}
    />
  );
};




export const EmailConfirmadoImg = (props: ConfirmarImageProp) => {
  return (
    <StyledConfirmarEmailImg
      src={props.imgUrl}
      topMarginInVh={props.topMarginInVh}
      bottomMarginInVh={props.bottomMarginInVh}
    />
  );
};
