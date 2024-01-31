import StandardButton from "./StandardButton.Styled"

type FormsButtonProps ={
    text:string,
    onClick: () => void,

}

const FormsButton = (props:FormsButtonProps) => {
    return <StandardButton bgColor="#E97B0C" textColor="#E6E8E9"
     marginBottomInVh={3} type="submit" value={props.text}/>
} 


export default FormsButton