import { useEffect, useState } from "react";

function Details() {
  
  const [state, setState] = useState({})
 
useEffect(() => {  
    const plantInfo = JSON.parse(localStorage.getItem("plant"));
    setState(plantInfo)
  }, [])
  
  
  //fetch info about plants from Livsmedelsverket: http://www7.slv.se/apilivsmedel/LivsmedelService.svc/Livsmedel/Naringsvarde/<ÅÅÅÅMMDD>
  //Info at: https://www.livsmedelsverket.se/om-oss/psidata/livsmedelsdatabasen
  return ( 
    <article className="main">
      <section className="container sub-container">
        <h3>{state.name}</h3>
        <section className="plant-card plant-card-large">  
          <img src={state.img} /> 
          <p className="strong">Datum: {state.date}</p>
          <p>Ansvarig för plantering: {state.person}</p>
        </section>
        </section>
 
    </article>
   );
}

export default Details;