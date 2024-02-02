import StandardButton from "./StandardButton.Styled"

type ConfirmarPageButtonProp = {
    text:string
}

const ConfirmarPagesButton = (props:ConfirmarPageButtonProp) => {
    return <StandardButton bgColor="#053D58" fontSizeInEm={1} isBold={false}
     marginBottomInVh={3} value={props.text}/>

}

export default ConfirmarPagesButton