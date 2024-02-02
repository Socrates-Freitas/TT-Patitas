import LoginECadastroPageContainer from "../../../Components/PageContainer/LoginFormECadastro/FormPageContainer";
import PatitasFormsLogo from "../../../Components/PatitasLogo/Forms/PatitasFormsLogo";

import dogPaw from "../../../Imgs/outras/Dog_paw.svg";

import loginEmailIcon from "../../../Imgs/icons/login_nick.svg";
import loginPasslIcon from "../../../Imgs/icons/login_pass.svg";
import StyledTextInput from "../../../Components/Input/LoginECadastro/TextInput/TextInPut.Style";
import StyledBoldText from "../../../Components/Common/BoldText.Style";
import StyledLoginParagraph from "../../../Components/Input/LoginECadastro/Texto/LoginParagraph.Styled";
import FormsButton from "../../../Components/Input/Button/FormsButton";
import FormParagraphDiv from "../../../Components/Input/LoginECadastro/Texto/LoginParagraphDivStyled";
import FormCadastroContentContainer from "../../../Components/Input/LoginECadastro/Texto/FormStandardDiv.Styled";
import LabelContainer from "../../../Components/Input/LoginECadastro/Texto/LabelDiv.Styled";
import PatitasImg from "../../../Components/PatitasImg/PatitasImg";
import FormButtonsContainer from "../../../Components/Input/LoginECadastro/Texto/FormButtonsDiv.Styled";
import FormImageContainer from "../../../Components/PageContainer/LoginFormECadastro/ImagesContainer";

const LoginFormsPage = () => {
  // const [login, setLogin] = useState("")
  // const [password, setPassword] = useState("")

  return (
    <LoginECadastroPageContainer>
      <FormImageContainer>
        <PatitasFormsLogo />

        <PatitasImg widthPercent={15} src={dogPaw} />
      </FormImageContainer>

      <form action="">
        <FormCadastroContentContainer>
          <LabelContainer>
            <StyledBoldText>Login</StyledBoldText>
          </LabelContainer>

          <StyledTextInput
            iconUrl={loginEmailIcon}
            placeholder="Digite seu login"
          />

          <LabelContainer>
            <StyledBoldText>Senha</StyledBoldText>
          </LabelContainer>

          <StyledTextInput
            iconUrl={loginPasslIcon}
            placeholder="Digite sua senha"
          />

          <FormParagraphDiv>
            <StyledLoginParagraph>Esqueceu sua senha?</StyledLoginParagraph>
          </FormParagraphDiv>

          <FormButtonsContainer>
            <FormsButton text="Enviar" onClick={function () {}} />

            <FormsButton text="Cadastrar" onClick={function () {}} />
          </FormButtonsContainer>
        </FormCadastroContentContainer>
      </form>
    </LoginECadastroPageContainer>
  );
};

export default LoginFormsPage;
