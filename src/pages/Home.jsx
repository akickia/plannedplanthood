
import AddContainer from "../Components/AddContainer";
import News from "../Components/News";
import "../styles/Container.css"
import PlantsContainer from "../Components/PlantsContainer";
import { createContext, useState, useEffect } from "react";

export const PlantsContext = createContext()

function Home() {
  const plantsList = [
    {
        name: "Tomat",
        date: "1 april 2023",
        person: "Emma på 4an",
        img: "https://images.unsplash.com/photo-1632409786341-b3086fab3cea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
     },
    {
        name: "Paprika",
        date: "14 april 2023",
        person: "Majvor och P-Å",
        img: "https://images.unsplash.com/photo-1566765854606-372e7bdee473?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    },
    {
        name: "Kål",
        date: "4 maj 2023",
        person: "Fatima",
        img: "https://images.unsplash.com/photo-1598030343246-eec71cb44231?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    },         
    {
        name: "Gurka",
        date: "15 april 2023",
        person: "Rico Coolio",
        img: "https://images.unsplash.com/photo-1518568403628-df55701ade9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
        name: "Potatis",
        date: "4 april 2023",
        person: "Peter Nilsson",
        img: "https://images.unsplash.com/photo-1561635741-c416a5193b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
        name: "Lök",
        date: "4 augusti 2023",
        person: "Majvor och P-Å",
        img: "https://images.unsplash.com/photo-1624295886828-c4b77b618e5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
    },
]  

const [plants, setPlants] = useState(() => {
  const plantsListLocal = JSON.parse(localStorage.getItem("plansList"));
  return plantsListLocal ? plantsListLocal : plantsList;
});
    //Vill kolla om localstorage är tomt - då sätta listan till 


  function removePlant(index) {
    setPlants(currentList => {
      return currentList.filter((_, i) => i !== index)
    })
  };

  return ( 
    <article className="main">
      <PlantsContext.Provider value={{plants, setPlants, removePlant}}>
        <News />
        <hr></hr>
        <AddContainer />
        <hr></hr>
        <PlantsContainer/>
        <hr></hr>
        <img src="https://images.unsplash.com/photo-1523810192022-5a0fb9aa7ff8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80" style={{width: "100%"}} />
      </PlantsContext.Provider>
    </article>
   );
}

export default Home;