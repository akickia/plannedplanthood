function InputAndLabel(props) {
  return ( 
    <label>{props.label}:
    
      <input type={props.type} placeholder={props.placeholder} onChange={(e) => props.action(e.target.value)}></input> 
    </label>

   );
}

export default InputAndLabel;