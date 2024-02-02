import ConfirmarScreenTemplate from "../../Components/PaginaImagemConfirmar/ConfirmarPageTemplate";
import img from "../../Imgs/outras/Cat-astronaut-cuate.svg";

const ConfirmarEmailScreen = () => {
  return (
    <ConfirmarScreenTemplate
      imgUrl={img}
      buttonText="Confirmar seu E-mail"
      imgTopMarginInVh={2}
      imgBottomMarginInVh={3}
    />
  );
};

export default ConfirmarEmailScreen;
