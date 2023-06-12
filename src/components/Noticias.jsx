import Row from "react-bootstrap/Row";
import Noticia from "./Noticia";

const Noticias = ({ noticias }) => {
    return (
        <Row xs={1} md={2} lg={3} className="my-5">
            {noticias.map((noticia, key) => {
                return (
                    <Noticia
                        key={key}
                        tituloNoticia={noticia.title}
                        descripcionNoticia={noticia.description}
                        imagenNoticia={noticia.image_url}
                    ></Noticia>
                );
            })}
            {/* {noticias.map((noticia, key) => {
                return (
                    <Noticia
                        tituloNoticia={noticia.title}
                        descripcionNoticia={noticia.description}
                        imagenNoticia={noticia.description}
                        key={key}
                    ></Noticia>
                );
            })} */}

            {/* {noticias.map((noticia, key) => {
                return (
                    <Noticia
                        tituloNoticia={noticia.title}
                        descripcionNoticia={noticia.description}
                        imagenNoticia={noticia.urlToImage}
                        key={key}
                    ></Noticia>
                );
            })} */}
        </Row>
    );
};

export default Noticias;
