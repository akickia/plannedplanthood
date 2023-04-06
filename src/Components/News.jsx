import PrimaryBtn from "./PrimaryBtn";


function News() {
  return ( 
    <section className="news-container container">
      <img className="round-img" src="https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"></img>
      <aside className="news-section">
        <h3>Säsong att så</h3>
        <p>Våren är äntligen här i kollektivet! Lorem ipsum dolor sit amet consectetur. 
          Sit venenatis arcu nunc consectetur neque. Vel amet netus amet eu elit.</p>
        {/* <PrimaryBtn text="SÅ-TIPS" link="https://akickia.se"/> */}
      </aside>
    </section>
   );
}

export default News;