import InputAndLabel from "./InputAndLabel";
import PrimaryBtn from "./PrimaryBtn";
import { useContext, useEffect, useState } from "react";
import { PlantsContext } from "../pages/Home";

function AddContainer() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [person, setPerson] = useState('');
  const [img, setImg] = useState('');

  const {plants, setPlants, removePlant} = useContext(PlantsContext);

  function addNewPlant(e) {

      e.preventDefault();
      let plantToAdd = {
          name: name,
          date: date,
          person: person,
          img: img,
      }
      setPlants([plantToAdd, ...plants]);
};

      useEffect(() => {
      localStorage.setItem("plansList", JSON.stringify(plants))
    }, [plants])


  return ( 
    <><h4>Lägg till planerade planteringar</h4>
      <section className="add-container container">
        <aside className="add-form-section">
          <h6>Ny sådd:</h6>
          <form>
          <InputAndLabel label="Frönamn" type="text" placeholder="Tomat" action={setName} value={name}></InputAndLabel>
          <InputAndLabel label="Datum för sådd" type="date" placeholder="2023-04-01" action={setDate} value={date}></InputAndLabel>
          <InputAndLabel label="URL, exempelbild" type="text" placeholder="https://images.unsplash.co.." action={setImg} value={img}></InputAndLabel>
          <InputAndLabel label="Planterare" type="text" placeholder="Emma på 4an" action={setPerson} value={person}></InputAndLabel>
          </form>
          <PrimaryBtn text="LÄGG TILL" action={addNewPlant}/>
        </aside>
        <img className="round-img" src="https://images.unsplash.com/photo-1597868165956-03a6827955b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"></img>
      </section>    
      
  </>
   );
}

export default AddContainer;