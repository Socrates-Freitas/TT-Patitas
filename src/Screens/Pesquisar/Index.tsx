import StyledTextInput from "../../Components/Input/LoginECadastro/TextInput/TextInPut.Style";
import FormInputContainer from "../../Components/PageContainer/LoginFormECadastro/FormItemContainer.Styled";
import FormImageContainer from "../../Components/PageContainer/LoginFormECadastro/ImagesContainer";
import { CategoriaGrid } from "../../Components/Pesquisar/CategoriaButtonsGrid";
import { BotaoFidelidade } from "../../Components/Pesquisar/ProgramaFidelidadeButton.Styled";
import icon from "../../Imgs/icons/search.svg";
import logo2 from "../../Imgs/logos/logo2.svg";
import PatitasImg from "../../Components/PatitasImg/PatitasImg";
import HomePageContainer from "../../Components/PageContainer/Home/HomePageContainer";

const PesquisaScreen = () => {
  const categorias = [
    "Cachorro",
    "Gato",
    "Pássaro",
    "Peixe",
    "Jardim",
    "Répteil",
    "Acessório",
    "Alimento",
  ];

  return (
    <HomePageContainer>
      <FormImageContainer marginBottomInVh={3}>
        <PatitasImg widthPercent={5} src={logo2} />
      </FormImageContainer>

      <form>
        <FormInputContainer>
          <StyledTextInput
            iconUrl={icon}
            placeholder="Procure aqui seu produto..."
          />
        </FormInputContainer>
      </form>

      <CategoriaGrid categorias={categorias} />

      <BotaoFidelidade texto="Assine nosso programa de fidelidade" />
    </HomePageContainer>
  );
};

export default PesquisaScreen;
