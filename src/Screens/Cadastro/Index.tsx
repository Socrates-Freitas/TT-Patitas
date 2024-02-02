import StyledBoldText from "../../Components/Common/BoldText.Style";
import FormsButton from "../../Components/Input/Button/FormsButton";
import StyledTextInput from "../../Components/Input/LoginECadastro/TextInput/TextInPut.Style";
import FormButtonsContainer from "../../Components/Input/LoginECadastro/Texto/FormButtonsDiv.Styled";
import FormCadastroContentContainer from "../../Components/Input/LoginECadastro/Texto/FormStandardDiv.Styled";
import LabelContainer from "../../Components/Input/LoginECadastro/Texto/LabelDiv.Styled";
import LoginECadastroPageContainer from "../../Components/PageContainer/LoginFormECadastro/FormPageContainer";
import FormImageContainer from "../../Components/PageContainer/LoginFormECadastro/ImagesContainer";
import PatitasFormsLogo from "../../Components/PatitasLogo/Forms/PatitasFormsLogo";

//icones
import nomeIcon from "../../Imgs/icons/cadastro_nome.svg";
import cpfIcon from "../../Imgs/icons/cadastro_cpf.svg";
import emailIcon from "../../Imgs/icons/cadastro_email.svg";
import senhaIcon from "../../Imgs/icons/login_pass.svg";
import FormInputContainer from "../../Components/PageContainer/LoginFormECadastro/FormItemContainer.Styled";
import Checkbox from "../../Components/Input/Checkbox/Checkbox";

const CadastroPage = () => {
  return (
    <LoginECadastroPageContainer>
      <FormImageContainer marginBottomInVh={0}>
        <PatitasFormsLogo />
      </FormImageContainer>

      <form action="">
        <FormCadastroContentContainer>
          <FormInputContainer>
            <StyledTextInput iconUrl={nomeIcon} placeholder="Nome..." />

            <StyledTextInput iconUrl={cpfIcon} placeholder="CPF..." />

            <StyledTextInput iconUrl={emailIcon} placeholder="Email..." />

            <StyledTextInput iconUrl={senhaIcon} placeholder="Senha..." />

            <StyledTextInput
              iconUrl={senhaIcon}
              placeholder="Confirmar Senha..."
            />

            <Checkbox text="Concordo com os termos de uso" />
          </FormInputContainer>

          <FormButtonsContainer>
            <FormsButton text="Entrar" onClick={function () {}} />
          </FormButtonsContainer>
        </FormCadastroContentContainer>
      </form>
    </LoginECadastroPageContainer>
  );
};

export default CadastroPage;
