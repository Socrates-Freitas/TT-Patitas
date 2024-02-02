import StandardButton from "./StandardButton.Styled";

type FormsButtonProps = {
  text: string;
  onClick: () => void;
};

const FormsButton = (props: FormsButtonProps) => {
  return (
    <StandardButton
      bgColor="#E97B0C"
      fontSizeInEm={1.4}
      marginBottomInVh={3}
      isBold={true}
      value={props.text}
    />
  );
};

export default FormsButton;
