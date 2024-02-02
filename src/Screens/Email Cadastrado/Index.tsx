import ConfirmarPagesButton from "../../Components/Input/Button/ConfirmarPagesButton";
import LoginECadastroPageContainer from "../../Components/PageContainer/LoginFormECadastro/FormPageContainer";
import FormImageContainer from "../../Components/PageContainer/LoginFormECadastro/ImagesContainer";
import ConfirmarScreenTemplate from "../../Components/PaginaImagemConfirmar/ConfirmarPageTemplate";
import {
  EmailConfirmadoImg,
  ConfirmarImg,
} from "../../Components/PaginaImagemConfirmar/PageConfirmarImg";
import PatitasLogoConfirmar from "../../Components/PatitasLogo/Telas Confirmar/PatitasLogoConfimrar";
import img from "../../Imgs/outras/Dog-paw-cuate-1.svg";

const EmailConfirmadoScreen = () => {
  return (
    <LoginECadastroPageContainer>
      <FormImageContainer marginBottomInVh={0}>
        <PatitasLogoConfirmar />
      </FormImageContainer>

      <EmailConfirmadoImg
        imgUrl={img}
        topMarginInVh={5}
        bottomMarginInVh={-7.1}
      />

      <ConfirmarPagesButton text={"E-mail confirmado"} />
    </LoginECadastroPageContainer>
  );
};

export default EmailConfirmadoScreen;
