import {
  FormCheckboxDiv,
  FormHidenCheckbox,
  StyledCheckbox,
  LabelText,
} from "./FormCheckbox.Styled";
import { useState } from "react";

import Icon from "../../../Imgs/icons/checkbox_icon.svg";

type CheckboxProp = {
  text: string;
};

const Checkbox = (props: CheckboxProp) => {
  const [isChecked, setChecked] = useState(false);

  const handleCheckboxEvent = () => {
    setChecked(!isChecked);
  };

  return (
    <FormCheckboxDiv onClick={handleCheckboxEvent}>
      <FormHidenCheckbox checked={isChecked} onChange={handleCheckboxEvent} />

      <StyledCheckbox isChecked={isChecked}>
        <img src={Icon} />
      </StyledCheckbox>

      <LabelText > {props.text} </LabelText>

    </FormCheckboxDiv>
  );
};

export default Checkbox;
