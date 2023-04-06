import { useEffect } from "react";
import "../styles/PlantCard.css"
import { useNavigate } from "react-router-dom";

function PlantCard({info, removePlant, index}) {
  function removeHandleClick() {
    removePlant(index)
  }
  const navigate = useNavigate()
 
  function handleLocalStorage (info) {
    localStorage.setItem("plant", JSON.stringify(""))
    localStorage.setItem("plant", JSON.stringify(info))
    navigate("/details")
}
  return ( 
    
      <section className="plant-card">
        <img src={info.img} />
        <h5>{info.name}</h5>
        <p className="strong">{info.date}</p>
        <p>{info.person}</p>
        <button onClick={removeHandleClick}>TA BORT</button>
        <button className="more-info" onClick={
        () => handleLocalStorage(info)
        }>Mer info</button>
      </section>

   );
}

export default PlantCard;