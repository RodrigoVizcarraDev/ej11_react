import Titulo from "./components/Titulo";
import Formulario from "./components/Formulario";
import Noticias from "./components/Noticias"
import Container from "react-bootstrap/Container";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
    return (
        <>
            <Titulo></Titulo>
            <Container className="border p-5 shadow">
                <Formulario></Formulario>
            </Container>
            {/* 
          <Formulario></Formulario>
          <Noticias>
              <Noticia></Noticia> 
          </Noticias>
      */}
        </>
    );
}

export default App;
