import Header from "./componentes/header"
import CardExterno from "./componentes/cardExterno"

function App() {
    return(
      <>
        <Header />
        <main>
            <section id="areaVendas">
                <div className="cardExterno">
                  <CardExterno />
                </div>
            </section>
        </main>
      </>
      
    )
}

export default App
