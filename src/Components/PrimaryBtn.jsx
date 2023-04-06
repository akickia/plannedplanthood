function PrimaryBtn({text, action}) {
  return ( 
    <button className="pri-btn" onClick={(e) => {action(e)}}>{text}</button>
   );
}

export default PrimaryBtn;