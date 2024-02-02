import styled from "styled-components";

type CheckboxProp = {
  isChecked: boolean;
};

type CheckboxLabelProp = {
  text: string;
};

// A referencia??
export const FormHidenCheckbox = styled.input.attrs({ type: "checkbox" })`
  display:none;
 
`;

export const StyledCheckbox = styled.label<CheckboxProp>`
    width: 24px;
    height: 24px;
    margin-right: 6px;
    border:solid 2px #154962;
    border-radius: 15%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width:15px;
        display: ${(props) => props.isChecked? "flex" : "none"};
    }
`;

// O Texto da Checkbox
export const LabelText = styled.label`


`;


export const FormCheckboxDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;
  height: 35px;

 
  border-radius: 5px;

  margin-bottom:4vh;

`;
