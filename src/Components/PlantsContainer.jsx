import PlantCard from "./PlantCard";
import { PlantsContext } from "../pages/Home";
import { useContext } from "react";

function PlantsContainer() {
  
  const {plants, setPlants, removePlant} = useContext(PlantsContext)

  return ( 
    <>      
      <h4>Våra planerade planteringar:</h4>
      <article className="plants-container container">
      {
      plants.map((plant, i) => <PlantCard info={plant} removePlant={removePlant} index={i} key={i} />) 
      }
    </article>
    </>
   );
}

export default PlantsContainer;