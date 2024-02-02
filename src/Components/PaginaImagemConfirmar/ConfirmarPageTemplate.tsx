import ConfirmarPagesButton from "../Input/Button/ConfirmarPagesButton";
import LoginECadastroPageContainer from "../PageContainer/LoginFormECadastro/FormPageContainer";
import FormImageContainer from "../PageContainer/LoginFormECadastro/ImagesContainer";
import PatitasLogoConfirmar from "../PatitasLogo/Telas Confirmar/PatitasLogoConfimrar";
import { ConfirmarImg } from "./PageConfirmarImg";

type ConfirmarScreenTemplateProps = {
  imgUrl: string;
  buttonText: string;
  imgTopMarginInVh: number;
  imgBottomMarginInVh: number;
};

const ConfirmarScreenTemplate = (props: ConfirmarScreenTemplateProps) => {
  return (
    <LoginECadastroPageContainer>
      <FormImageContainer marginBottomInVh={0}>
        <PatitasLogoConfirmar />
      </FormImageContainer>

      <ConfirmarImg
        imgUrl={props.imgUrl}
        topMarginInVh={props.imgTopMarginInVh}
        bottomMarginInVh={props.imgBottomMarginInVh}
      />

      <ConfirmarPagesButton text={props.buttonText} />
    </LoginECadastroPageContainer>
  );
};

export default ConfirmarScreenTemplate;
