import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Noticias from "./Noticias";
import { useEffect, useState } from "react";

const Formulario = () => {
    const [noticias, setNoticias] = useState([]);
    const [categoria, setCategoria] = useState("");

    useEffect(() => {
        consultaAPI();
    }, []);

    const consultaAPI = async () => {
        try {
            // Peticion
            const peticion = await fetch(
                `https://newsdata.io/api/1/news?apikey=pub_24258a6531c5682a2442ca019fbef4b170fd4&q=${categoria || "sport"}&language=es`
            );
            const datos = await peticion.json();
            console.log(datos);
            console.log(datos.results);
            let noticias = datos.results;
            setNoticias(noticias);
        } catch (error) {
            console.log(error);
        }
    };

    const seleccionCategoria = (categoria) => {
        const categoriaValue = categoria.target.value;
        setCategoria(categoriaValue);
    };
    return (
        <>
            <Form aria-label="Categoria" onChange={(e)=> seleccionCategoria(e) }>
                <Form.Select
                    aria-label="Default select example"
                    className="mb-4"
                >
                    <option>Seleccione una categoria</option>
                    <option value="sports">Deportes</option>
                    <option value="trends">Tendencias</option>
                    <option value="technology">Tecnologia</option>
                </Form.Select>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            <Noticias noticias={noticias}></Noticias>
        </>
    );
};

export default Formulario;
