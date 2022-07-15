import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./componentes/header"
import CardExterno from "./componentes/cardExterno"



function App() {
    return(
      <>
      <ToastContainer />
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
